const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spin-button');
const resetButton = document.getElementById('reset-button'); // Added Reset Button
const rewardModal = document.getElementById('reward-modal');
const rewardCloseButton = rewardModal.querySelector('.close-button');
const rewardText = document.getElementById('reward-text');
const spinSound = document.getElementById('spin-sound');
const winSound = document.getElementById('win-sound');

// VIP Selection Elements
const vipDropdown = document.getElementById('vip-level');

// Selected Reward Element
const selectedRewardText = document.getElementById('selected-reward-text');

// Password Modal Elements
const passwordModal = document.getElementById('password-modal');
const passwordCloseButton = passwordModal.querySelector('.close-button');
const submitPasswordButton = document.getElementById('submit-password');
const passwordInput = document.getElementById('password-input');
const passwordError = document.getElementById('password-error');

// Admin Reset Password Modal Elements
const adminResetModal = document.getElementById('admin-reset-modal');
const adminResetCloseButton = adminResetModal.querySelector('.close-button');
const submitAdminPasswordButton = document.getElementById('submit-admin-password');
const adminPasswordInput = document.getElementById('admin-password-input');
const adminPasswordError = document.getElementById('admin-password-error');

// Preview Modal Elements
const previewButton = document.getElementById('preview-button');
const previewModal = document.getElementById('preview-modal');
const previewCloseButton = previewModal.querySelector('.close-button');
const previewRewardsContainer = document.getElementById('preview-rewards');
const previewVipLevelText = document.getElementById('preview-vip-level');

// Define the VIP levels and their passwords, segments, colors, and spin status
const VIP_LEVELS = {
    VIP1: {
        password: '120123',
        segments: [
            { type: 'text', content: 'โบนัส 19' },
            { type: 'text', content: 'โบนัส 29' },
            { type: 'text', content: 'โบนัส 19' },
            { type: 'text', content: 'โบนัส 29' },
            { type: 'text', content: 'โบนัส 19' },
            { type: 'text', content: 'โบนัส 29' },
            { type: 'text', content: 'โบนัส 49' },
            { type: 'text', content: 'โบนัส 39' }
        ],
        colors: ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A8', '#33FFF6', '#FF8633', '#8D33FF'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP2: {
        password: '862365',
        segments: [
            { type: 'text', content: 'โบนัส 39' },
            { type: 'text', content: 'โบนัส 49' },
            { type: 'text', content: 'โบนัส 39' },
            { type: 'text', content: 'โบนัส 79' },
            { type: 'text', content: 'โบนัส 89' },
            { type: 'text', content: 'โบนัส 49' },
            { type: 'text', content: 'โบนัส 39' },
            { type: 'text', content: 'โบนัส 49' }
        ],
        colors: ['#C70039', '#900C3F', '#581845', '#FFC300', '#DAF7A6', '#FF5733', '#33FF57', '#3357FF'],
        hasSpun: false,
        selectedSegment: null
    }
    // เพิ่มระดับ VIP อื่น ๆ ตามต้องการ
};

let currentVIP = null; // เก็บระดับ VIP ที่เลือก
let startAngle = 0;
let arc = 0;
let spinTimeout = null;
let spinAngleStart = 0;
let spinTime = 0;
let spinTimeTotal = 0;
let isSpinning = false;
let selectedSegment = null;

// ฟังก์ชั่นหมุนวงล้อ
function spin() {
    if (isSpinning) return;
    if (selectedSegment !== null) return;
    if (!currentVIP) {
        alert('กรุณาเลือกระดับ VIP ก่อนหมุนวงล้อ');
        return;
    }
    if (VIP_LEVELS[currentVIP].hasSpun) {
        alert(`คุณได้หมุนวงล้อในระดับ ${currentVIP} แล้ว`);
        return;
    }

    isSpinning = true;
    spinButton.disabled = true;

    // เริ่มเสียงจากจุดท้าย (ข้ามเสียงข้างหน้า)
    spinSound.currentTime = 1.5; // สมมุติว่าเสียงยาว 2 วินาที และเราข้าม 1.5 วินาทีแรก
    spinSound.play();

    canvas.style.transform = 'scale(1.2) rotate(0deg)';
    
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3000 + 7000;
    
    rotateWheel();
}

// ฟังก์ชั่นหมุนวงล้อ
function rotateWheel() {
    spinTime += 30;
    if(spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
    }
    const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 180);
    setWheel(currentVIP);
    spinTimeout = setTimeout(rotateWheel, 30);
}

// ฟังก์ชั่นหยุดหมุนวงล้อ
function stopRotateWheel() {
    clearTimeout(spinTimeout);
    canvas.style.transform = 'scale(1)';
    const degrees = startAngle * 180 / Math.PI + 90;
    const arcdDegrees = arc * 180 / Math.PI;
    const index = Math.floor((360 - (degrees % 360)) / arcdDegrees) % VIP_LEVELS[currentVIP].segments.length;
    selectedSegment = VIP_LEVELS[currentVIP].segments[index];
    setWheel(currentVIP);

    // หยุดเสียงหมุนเมื่อหยุดหมุนวงล้อ
    spinSound.pause();
    spinSound.currentTime = 0; // รีเซ็ตเสียงเมื่อหมุนใหม่ครั้งถัดไป

    if (selectedSegment.type === 'text') {
        rewardText.textContent = `คุณได้รับ ${selectedSegment.content}`;
    } else if (selectedSegment.type === 'image') {
        rewardText.textContent = `คุณได้รับ ${selectedSegment.description}`; // แสดงคำอธิบายแทนรูปภาพ
    }

    rewardModal.classList.add('animate__fadeInDown');
    rewardModal.style.display = "flex";
    winSound.play();

    // ทำเครื่องหมายว่าได้หมุนแล้วและบันทึกรางวัลที่เลือก
    VIP_LEVELS[currentVIP].hasSpun = true;
    VIP_LEVELS[currentVIP].selectedSegment = selectedSegment; // บันทึกรางวัลที่เลือก
    updateVIPDropdown();

    // บันทึกสถานะการหมุนลงใน localStorage
    saveSpinStatus();

    // รีเซ็ตสถานะหลังจากแสดงรางวัล
    isSpinning = false;
    spinButton.disabled = false;
    selectedSegment = null;

    // แสดงรางวัลที่เลือกใน UI
    displaySelectedReward();
}

// ฟังก์ชั่น easeOut สำหรับเอฟเฟกต์การหมุน
function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

// อีเวนต์ listener สำหรับ Spin Button
spinButton.addEventListener('click', () => {
    const selectedVIP = vipDropdown.value;
    if (!selectedVIP) {
        alert('กรุณาเลือกระดับ VIP ก่อนหมุนวงล้อ');
        return;
    }
    if (VIP_LEVELS[selectedVIP].hasSpun) {
        alert(`คุณได้หมุนวงล้อในระดับ ${selectedVIP} แล้ว`);
        return;
    }
    // เปิดหน้าต่างโมดัลสำหรับกรอกรหัสผ่านผู้ใช้
    passwordModal.classList.add('animate__fadeInDown');
    passwordModal.style.display = "flex";
});

// ฟังก์ชั่นอื่น ๆ สามารถเพิ่มเติมตามโค้ดเดิมของคุณได้เช่นกัน
