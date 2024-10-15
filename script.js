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

// Define the VIP levels and their passwords, segments, colors, and spin status
const VIP_LEVELS = {
    VIP1: {
        password: '123',
        segments: [
            { type: 'text', content: 'โบนัส 100' },
            { type: 'text', content: 'โบนัส 150' },
            { type: 'text', content: 'โบนัส 200' },
            { type: 'text', content: 'โบนัส 250' },
            { type: 'text', content: 'โบนัส 300' },
            { type: 'text', content: 'โบนัส 350' },
            { type: 'text', content: 'โบนัส 400' },
            { type: 'text', content: 'โบนัส 450' }
        ],
        colors: ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A8', '#33FFF6', '#FF8633', '#8D33FF'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP2: {
        password: '456',
        segments: [
            { type: 'text', content: 'โบนัส 500' },
            { type: 'text', content: 'โบนัส 600' },
            { type: 'text', content: 'โบนัส 700' },
            { type: 'text', content: 'โบนัส 800' },
            { type: 'text', content: 'โบนัส 900' },
            { type: 'text', content: 'โบนัส 1000' },
            { type: 'text', content: 'โบนัส 1100' },
            { type: 'text', content: 'โบนัส 1200' }
        ],
        colors: ['#C70039', '#900C3F', '#581845', '#FFC300', '#DAF7A6', '#FF5733', '#33FF57', '#3357FF'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP3: {
        password: '789',
        segments: [
            { type: 'text', content: 'โบนัส 1500' },
            { type: 'text', content: 'โบนัส 2000' },
            { type: 'text', content: 'โบนัส 2500' },
            { type: 'text', content: 'โบนัส 3000' },
            { type: 'text', content: 'โบนัส 3500' },
            { type: 'text', content: 'โบนัส 4000' },
            { type: 'text', content: 'โบนัส 4500' },
            { type: 'text', content: 'โบนัส 5000' }
        ],
        colors: ['#FF69B4', '#BA55D3', '#9400D3', '#4B0082', '#8A2BE2', '#9932CC', '#FF1493', '#C71585'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP4: {
        password: '012',
        segments: [
            { type: 'text', content: 'โบนัส 6000' },
            { type: 'text', content: 'โบนัส 7000' },
            { type: 'image', content: '../assets/image/icon/1.png' }, // รูปภาพจากโฟลเดอร์
            { type: 'text', content: 'โบนัส 9000' },
            { type: 'text', content: 'โบนัส 10000' },
            { type: 'image', content: 'assets/image/logo/A-KBANK.png' }, // รูปภาพจากโฟลเดอร์
            { type: 'text', content: 'โบนัส 12000' },
            { type: 'text', content: 'โบนัส 13000' }
        ],
        colors: ['#FF8C00', '#FF4500', '#DA70D6', '#32CD32', '#1E90FF', '#FFD700', '#00CED1', '#FF1493'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP5: {
        password: '345',
        segments: [
            { type: 'text', content: 'โบนัส 15000' },
            { type: 'text', content: 'โบนัส 18000' },
            { type: 'image', content: 'assets/image/logo/A-KBANK.png' }, // รูปภาพจากโฟลเดอร์
            { type: 'text', content: 'โบนัส 22000' },
            { type: 'text', content: 'โบนัส 25000' },
            { type: 'image', content: 'assets/image/logo/A-KBANK.png' }, // รูปภาพจากโฟลเดอร์
            { type: 'text', content: 'โบนัส 30000' },
            { type: 'text', content: 'โบนัส 35000' }
        ],
        colors: ['#800000', '#808000', '#008000', '#800080', '#000080', '#FFA500', '#A52A2A', '#8B0000'],
        hasSpun: false,
        selectedSegment: null
    },

    VIP6: {
        password: '678',
        segments: [
            { type: 'text', content: 'โบนัส 50000' },
            { type: 'text', content: 'โบนัส 60000' },
            { type: 'image', content: 'assets/image/logo/A-KBANK.png' }, // รูปภาพจากโฟลเดอร์
            { type: 'text', content: 'โบนัส 80000' },
            { type: 'text', content: 'โบนัส 90000' },
            { type: 'image', content: 'assets/image/logo/A-KBANK.png' }, // รูปภาพจากโฟลเดอร์
            { type: 'text', content: 'โบนัส 120000' },
            { type: 'text', content: 'โบนัส 150000' }
        ],
        colors: ['#4B0082', '#2E8B57', '#FF6347', '#4682B4', '#D2691E', '#9ACD32', '#FF1493', '#00BFFF'],
        hasSpun: false,
        selectedSegment: null
    }
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

// เก็บรูปภาพที่โหลดแล้ว
const loadedImages = {};

// ฟังก์ชั่นในการโหลดรูปภาพทั้งหมดก่อนการวาดวงล้อ
function loadImages(vipLevel, callback) {
    const vip = VIP_LEVELS[vipLevel];
    if (!vip) return callback();

    const imageSegments = vip.segments.filter(seg => seg.type === 'image');
    let imagesToLoad = imageSegments.length;

    if (imagesToLoad === 0) return callback();

    imageSegments.forEach((seg, index) => {
        const img = new Image();
        img.src = seg.content;
        img.onload = () => {
            loadedImages[seg.content] = img;
            imagesToLoad--;
            if (imagesToLoad === 0) {
                callback();
            }
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${seg.content}`);
            imagesToLoad--;
            if (imagesToLoad === 0) {
                callback();
            }
        };
    });
}

// ฟังก์ชั่นในการตั้งค่ารางวัลและสีตาม VIP
function setWheel(vipLevel) {
    if (!vipLevel || !VIP_LEVELS[vipLevel]) return;

    const { segments, colors } = VIP_LEVELS[vipLevel];
    arc = Math.PI / (segments.length / 2);
    
    // โหลดรูปภาพก่อนการวาด
    loadImages(vipLevel, () => {
        drawWheel(segments, colors);
    });
}

// วาดวงล้อตามรางวัลและสีที่กำหนด
function drawWheel(segments, colors) {
    const outsideRadius = 200;
    const textRadius = 160;
    const insideRadius = 20;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for(let i = 0; i < segments.length; i++) {
        const angle = startAngle + i * arc;
        ctx.fillStyle = colors[i % colors.length];

        ctx.beginPath();
        ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
        ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
        ctx.fill();

        // วาดข้อความหรือรูปภาพ
        ctx.save();
        ctx.fillStyle = '#fff';
        ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 250 + Math.sin(angle + arc / 2) * textRadius);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        const segment = segments[i];
        if (segment.type === 'text') {
            const text = segment.content;
            ctx.font = 'bold 20px Roboto';
            ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        } else if (segment.type === 'image') {
            const img = loadedImages[segment.content];
            if (img) {
                const imgWidth = 80;
                const imgHeight = 80;
                ctx.drawImage(img, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
            } else {
                // ถ้าไม่สามารถโหลดรูปภาพได้ แสดงข้อความแทน
                ctx.font = 'bold 20px Roboto';
                ctx.fillText('ภาพไม่โหลด', -ctx.measureText('ภาพไม่โหลด').width / 2, 0);
            }
        }
        ctx.restore();
    }

    // วาดวงกลมตรงกลาง
    ctx.beginPath();
    ctx.arc(250, 250, insideRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#333';
    ctx.fill();

    // วาดตัวชี้
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.moveTo(250 - 15, 250 - (outsideRadius + 30));
    ctx.lineTo(250 + 15, 250 - (outsideRadius + 30));
    ctx.lineTo(250, 250 - (outsideRadius - 10));
    ctx.fill();
}

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
    spinSound.play();
    canvas.style.transform = 'scale(1.2) rotate(0deg)';
    
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3000 + 4000;
    
    rotateWheel();
}

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

function stopRotateWheel() {
    clearTimeout(spinTimeout);
    canvas.style.transform = 'scale(1)';
    const degrees = startAngle * 180 / Math.PI + 90;
    const arcdDegrees = arc * 180 / Math.PI;
    const index = Math.floor((360 - (degrees % 360)) / arcdDegrees) % VIP_LEVELS[currentVIP].segments.length;
    selectedSegment = VIP_LEVELS[currentVIP].segments[index];
    setWheel(currentVIP);

    if (selectedSegment.type === 'text') {
        rewardText.textContent = `คุณได้รับ ${selectedSegment.content}!`;
    } else if (selectedSegment.type === 'image') {
        rewardText.textContent = `คุณได้รับรางวัลรูปภาพ!`;
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

function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

// ฟังก์ชั่นอัพเดต dropdown ของ VIP
function updateVIPDropdown() {
    const options = vipDropdown.options;
    for(let i = 0; i < options.length; i++) {
        const option = options[i];
        if(VIP_LEVELS[option.value] && VIP_LEVELS[option.value].hasSpun) {
            option.textContent = `${option.value} (หมุนแล้ว)`;
        } else if (VIP_LEVELS[option.value]) {
            option.textContent = option.value;
        }
    }

    // ถ้าไม่มี VIP ที่สามารถหมุนได้แล้ว ให้ปิดการใช้งานปุ่มหมุน
    const availableVIP = Object.keys(VIP_LEVELS).some(vip => !VIP_LEVELS[vip].hasSpun);
    if (!availableVIP) {
        spinButton.disabled = true;
        spinButton.textContent = 'หมุนวงล้อ (หมดจำนวน)';
    } else {
        spinButton.disabled = false;
        spinButton.textContent = 'หมุนวงล้อ ';
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-sync-alt');
        spinButton.appendChild(icon);
    }
}

// ฟังก์ชั่นโหลดสถานะจาก localStorage
function loadSpinStatus() {
    const storedStatus = localStorage.getItem('vipSpinStatus');
    if(storedStatus) {
        const status = JSON.parse(storedStatus);
        Object.keys(status).forEach(vip => {
            if(VIP_LEVELS[vip]) {
                VIP_LEVELS[vip].hasSpun = status[vip].hasSpun;
                VIP_LEVELS[vip].selectedSegment = status[vip].selectedSegment;
            }
        });
    }
}

// ฟังก์ชั่นบันทึกสถานะลง localStorage
function saveSpinStatus() {
    const status = {};
    Object.keys(VIP_LEVELS).forEach(vip => {
        status[vip] = {
            hasSpun: VIP_LEVELS[vip].hasSpun,
            selectedSegment: VIP_LEVELS[vip].selectedSegment
        };
    });
    localStorage.setItem('vipSpinStatus', JSON.stringify(status));
}

// ฟังก์ชั่นรีเซ็ตข้อความและปุ่มเมื่อปิดโมดัล
function resetSpinButton() {
    spinButton.disabled = false;
    spinButton.textContent = 'หมุนวงล้อ ';
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-sync-alt');
    spinButton.appendChild(icon);
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

// อีเวนต์ listener สำหรับ Reset Button
resetButton.addEventListener('click', () => {
    // เปิดหน้าต่างโมดัลสำหรับกรอกรหัสผ่านผู้ดูแล
    adminResetModal.classList.add('animate__fadeInDown');
    adminResetModal.style.display = "flex";
});

// อีเวนต์ listener สำหรับ Reward Modal Close Button
rewardCloseButton.addEventListener('click', () => {
    closeModal(rewardModal);
});

// อีเวนต์ listener สำหรับ User Password Modal Close Button
passwordCloseButton.addEventListener('click', () => {
    closeModal(passwordModal);
});

// อีเวนต์ listener สำหรับ Admin Reset Password Modal Close Button
adminResetCloseButton.addEventListener('click', () => {
    closeModal(adminResetModal);
});

// อีเวนต์ listener สำหรับ Window Click เพื่อปิดโมดัลเมื่อคลิกนอกโมดัล
window.addEventListener('click', (event) => {
    if(event.target == rewardModal) {
        closeModal(rewardModal);
    }
    if(event.target == passwordModal) {
        closeModal(passwordModal);
    }
    if(event.target == adminResetModal) {
        closeModal(adminResetModal);
    }
});

// อีเวนต์ listener สำหรับ User Submit Password
submitPasswordButton.addEventListener('click', () => {
    const enteredPassword = passwordInput.value.trim();
    if(!currentVIP) {
        currentVIP = vipDropdown.value;
    }
    if(!currentVIP) {
        passwordError.textContent = 'กรุณาเลือกระดับ VIP ก่อนกรอกรหัสผ่าน';
        return;
    }

    const correctPassword = VIP_LEVELS[currentVIP].password;
    if(enteredPassword === correctPassword) {
        // ปิดโมดัลและเริ่มหมุนวงล้อ
        closeModal(passwordModal);
        spin();
        // เคลียร์ข้อมูล
        passwordInput.value = '';
        passwordError.textContent = '';
    } else {
        // แสดงข้อความผิดพลาด
        passwordError.textContent = 'รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง';
    }
});

// อีเวนต์ listener สำหรับ Admin Submit Password
submitAdminPasswordButton.addEventListener('click', () => {
    const enteredAdminPassword = adminPasswordInput.value.trim();
    const ADMIN_PASSWORD = '7889'; // รหัสผ่านสำหรับผู้ดูแล

    if(enteredAdminPassword === ADMIN_PASSWORD) {
        // รีเซ็ตสถานะการหมุนทั้งหมด
        Object.keys(VIP_LEVELS).forEach(vip => {
            VIP_LEVELS[vip].hasSpun = false;
            VIP_LEVELS[vip].selectedSegment = null; // รีเซ็ตรางวัลที่เลือก
        });
        updateVIPDropdown();
        saveSpinStatus();

        // ปิดโมดัล
        closeModal(adminResetModal);

        // แสดงข้อความยืนยันการรีเซ็ต
        alert('รีเซ็ตการหมุนทั้งหมดเรียบร้อยแล้ว');

        // รีเฟรชวงล้อ
        setWheel(currentVIP);
        displaySelectedReward(); // รีเซ็ตการแสดงรางวัลที่เลือก
    } else {
        // แสดงข้อความผิดพลาด
        adminPasswordError.textContent = 'รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง';
    }

    // เคลียร์ข้อมูล
    adminPasswordInput.value = '';
});

// ฟังก์ชั่นปิดโมดัล
function closeModal(modal) {
    modal.classList.remove('animate__fadeInDown');
    modal.style.display = "none";
    // เคลียร์ข้อมูล
    if (modal === rewardModal) {
        passwordInput.value = '';
        passwordError.textContent = '';
    }
    if (modal === passwordModal) {
        passwordInput.value = '';
        passwordError.textContent = '';
    }
    if (modal === adminResetModal) {
        adminPasswordInput.value = '';
        adminPasswordError.textContent = '';
    }
}

// อัพเดตวงล้อและแสดงรางวัลที่เลือกเมื่อเลือก VIP
vipDropdown.addEventListener('change', () => {
    currentVIP = vipDropdown.value;
    if (!VIP_LEVELS[currentVIP].hasSpun) {
        setWheel(currentVIP);
    } else {
        // ถ้า VIP นี้หมุนแล้ว ให้ล้างวงล้อ
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    displaySelectedReward(); // แสดงรางวัลที่เลือก
});

// ฟังก์ชั่นแสดงรางวัลที่เลือก
function displaySelectedReward() {
    if(currentVIP && VIP_LEVELS[currentVIP].hasSpun && VIP_LEVELS[currentVIP].selectedSegment) {
        const segment = VIP_LEVELS[currentVIP].selectedSegment;
        if(segment.type === 'text') {
            selectedRewardText.textContent = `คุณได้รับ ${segment.content}`;
        } else if(segment.type === 'image') {
            selectedRewardText.innerHTML = `คุณได้รับรางวัลรูปภาพ: <img src="${segment.content}" alt="รางวัลรูปภาพ" style="width:50px;height:50px;">`;
        }
    } else {
        selectedRewardText.textContent = 'ยังไม่ได้หมุนวงล้อ';
    }
}

// ฟังก์ชั่นเริ่มต้น
function initialize() {
    loadSpinStatus();
    setWheel(null);
    updateVIPDropdown();
    displaySelectedReward(); // แสดงรางวัลที่เลือก
}

// เรียกใช้งานฟังก์ชั่นเริ่มต้นเมื่อโหลดหน้าเว็บ
window.onload = initialize;
