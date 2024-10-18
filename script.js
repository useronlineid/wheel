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
    },
    VIP3: {
        password: '983659',
        segments: [
            { type: 'text', content: 'โบนัส 109' },
            { type: 'text', content: 'โบนัส 209' },
            { type: 'text', content: 'โบนัส 109' },
            { type: 'text', content: 'โบนัส 309' },
            { type: 'text', content: 'โบนัส 109' },
            { type: 'text', content: 'โบนัส 159' },
            { type: 'text', content: 'โบนัส 109' },
            { type: 'text', content: 'โบนัส 159' }
        ],
        colors: ['#FF69B4', '#BA55D3', '#9400D3', '#4B0082', '#8A2BE2', '#9932CC', '#FF1493', '#C71585'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP4: {
        password: '139823',
        segments: [
            { type: 'text', content: 'โบนัส 499' },
            { type: 'text', content: 'โบนัส 699' },
            { type: 'image', content: '../assets/image/icon/1.png', description: 'ทอง 1กรัม (มูลค่า3,000บาท)' }, // Added description
            { type: 'text', content: 'โบนัส 499' },
            { type: 'text', content: 'โบนัส 699' },
            { type: 'text', content: 'โบนัส 899' },
            { type: 'image', content: '../assets/image/icon/gen2.png', description: 'Airpods gen 2 (มูลค่า3,890บาท)' }, // Added description
            { type: 'text', content: 'โบนัส 499' }
        ],
        colors: ['#FF8C00', '#FF4500', '#DA70D6', '#32CD32', '#1E90FF', '#FFD700', '#00CED1', '#FF1493'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP5: {
        password: '863188',
        segments: [
            { type: 'text', content: 'โบนัส 958' },
            { type: 'text', content: 'โบนัส 1558' },
            { type: 'text', content: 'โบนัส 958' },
            { type: 'image', content: '../assets/image/icon/1.png', description: 'ทองครึ่งสลึง (มูลค่า5,000บาท)' }, // Added description
            { type: 'text', content: 'โบนัส 1258' },
            { type: 'text', content: 'โบนัส 958' },
            { type: 'image', content: '../assets/image/icon/N.png', description: 'NETFLIX ฟรี 6 เดือน (ครอบครัว)' }, // Added description
            { type: 'text', content: 'โบนัส 1258' }
        ],
        colors: ['#800000', '#808000', '#008000', '#800080', '#000080', '#FFA500', '#A52A2A', '#8B0000'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP6: {
        password: '226980',
        segments: [
            { type: 'text', content: 'โบนัส 1699' },
            { type: 'text', content: 'โบนัส 2299' },
            { type: 'image', content: '../assets/image/icon/a60.png', description: 'OPPO A60 (RAM 8GB / 256GB)' }, // Added description
            { type: 'text', content: 'โบนัส 1699' },
            { type: 'text', content: 'โบนัส 1699' },
            { type: 'image', content: '../assets/image/icon/m.png', description: 'ตู้เย็น 2 ประตู 7.3 คิว Inverter (มูลค่า8,000บาท)' }, // Added description
            { type: 'text', content: 'โบนัส 1999' },
            { type: 'text', content: 'โบนัส 1699' }
        ],
        colors: ['#4B0082', '#2E8B57', '#9ACD32', '#4682B4', '#D2691E', '#FF6347', '#FF1493', '#00BFFF'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP7: {
        password: '843210',
        segments: [
            { type: 'text', content: 'โบนัส 1999' },
            { type: 'text', content: 'โบนัส 2699' },
            { type: 'image', content: '../assets/image/icon/a.png', description: 'Apple Watch Series 5 รุ่น GPS  (มูลค่า13,400บาท)' }, // Added description
            { type: 'text', content: 'โบนัส 2999' },
            { type: 'text', content: 'โบนัส 1999' },
            { type: 'image', content: '../assets/image/icon/1.png', description: 'ทอง 1สลึง (มูลค่า10,000บาท)' }, // Added description
            { type: 'text', content: 'โบนัส 1999' },
            { type: 'text', content: 'โบนัส 2499' }
        ],
        colors: ['#7B68EE', '#6B8E23', '#FF4500', '#DAA520', '#20B2AA', '#D8BFD8', '#FF6347', '#708090'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP8: {
        password: '672890',
        segments: [
            { type: 'text', content: 'โบนัส 3299' },
            { type: 'text', content: 'โบนัส 3999' },
            { type: 'image', content: '../assets/image/icon/a.png', description: 'Apple Watch Series 5 รุ่น GPS  (มูลค่า13,400บาท)' }, // Added description
            { type: 'text', content: 'โบนัส 3499' },
            { type: 'text', content: 'โบนัส 3799' },
            { type: 'image', content: '../assets/image/icon/1.png', description: 'ทอง 2 สลึง (มูลค่า20,000บาท)' },
            { type: 'text', content: 'โบนัส 3299' },
            { type: 'text', content: 'โบนัส 3599' }
        ],
        colors: ['#FA8072', '#7FFF00', '#FF8C00', '#4682B4', '#FFD700', '#9932CC', '#8B0000', '#7B68EE'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP9: {
        password: '598723',
        segments: [
            { type: 'text', content: 'โบนัส 4599' },
            { type: 'text', content: 'โบนัส 4999' },
            { type: 'image', content: '../assets/image/icon/2.png', description: 'iPhone 16 Pro' }, // Added description
            { type: 'text', content: 'โบนัส 4599' },
            { type: 'text', content: 'โบนัส 4599' },
            { type: 'image', content: '../assets/image/icon/1.png', description: 'ทอง 2 สลึง (มูลค่า20,000บาท)' },
            { type: 'text', content: 'โบนัส 4899' },
            { type: 'text', content: 'โบนัส 4999' }
        ],
        colors: ['#FF7F50', '#8A2BE2', '#B8860B', '#FF4500', '#32CD32', '#FF6347', '#D8BFD8', '#FFD700'],
        hasSpun: false,
        selectedSegment: null
    },
    VIP10: {
        password: '453212',
        segments: [
            { type: 'text', content: 'โบนัส 5599' },
            { type: 'text', content: 'โบนัส 5999' },
            { type: 'image', content: '../assets/image/icon/s22.png', description: 'Samsung Galaxy S22' }, 
            { type: 'text', content: 'โบนัส 5699' },
            { type: 'text', content: 'โบนัส 5499' },
            { type: 'text', content: 'โบนัส 5799' },
            { type: 'image', content: '../assets/image/icon/1.png', description: 'ทอง 1 บาท (มูลค่า40,000บาท)' },
            { type: 'text', content: 'โบนัส 5999' }
        ],
        colors: ['#DA70D6', '#FF4500', '#FFD700', '#BA55D3', '#32CD32', '#8A2BE2', '#FF6347', '#FFD700'],
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
    
    // เริ่มเล่นเสียงหมุนจากจุดที่ต้องการ (ตัวอย่าง: วินาทีที่ 1.5)
    // spinSound.currentTime = 1.5; // ตัดเสียงจากจุดเริ่มต้น (ถ้าจำเป็น)
    spinSound.currentTime = 0; // เริ่มจากจุดเริ่มต้น
    spinSound.play();
    
    canvas.style.transform = 'scale(1.2) rotate(0deg)';
    
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3000 + 7000;
    
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
        rewardText.textContent = `คุณได้รับ ${selectedSegment.content}`;
    } else if (selectedSegment.type === 'image') {
        rewardText.textContent = `คุณได้รับ ${selectedSegment.description}`; // แสดงคำอธิบายแทนรูปภาพ
    }

    rewardModal.classList.add('animate__fadeInDown');
    rewardModal.style.display = "flex";
    winSound.play();

    // หยุดเสียงหมุน
    spinSound.pause();
    spinSound.currentTime = 0; // รีเซ็ตเวลาเสียงหมุน

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

// อีเวนต์ listener สำหรับ Preview Button
previewButton.addEventListener('click', () => {
    const selectedVIP = vipDropdown.value;
    if (!selectedVIP) {
        alert('กรุณาเลือกระดับ VIP เพื่อดูตัวอย่างรางวัล');
        return;
    }

    const vip = VIP_LEVELS[selectedVIP];
    if (!vip) {
        alert('ระดับ VIP ที่เลือกไม่มีข้อมูล');
        return;
    }

    // Set VIP level text
    previewVipLevelText.textContent = selectedVIP;

    // Clear previous rewards
    previewRewardsContainer.innerHTML = '';

    // แยกรางวัลเป็นข้อความและรูปภาพ
    const textSegments = vip.segments.filter(seg => seg.type === 'text');
    const imageSegments = vip.segments.filter(seg => seg.type === 'image');

    // จัดเรียงรางวัลข้อความจากน้อยไปหามาก
    textSegments.sort((a, b) => {
        const numA = parseInt(a.content.replace(/\D/g, ''), 10);
        const numB = parseInt(b.content.replace(/\D/g, ''), 10);
        return numA - numB;
    });

    // รวมรางวัลข้อความที่จัดเรียงแล้วกับรางวัลรูปภาพ
    const sortedSegments = [...textSegments, ...imageSegments];

    // Populate rewards
    sortedSegments.forEach(segment => {
        const rewardItem = document.createElement('div');
        rewardItem.classList.add('reward-item');

        if (segment.type === 'text') {
            rewardItem.innerHTML = `<p>${segment.content}</p>`;
        } else if (segment.type === 'image') {
            const img = document.createElement('img');
            img.src = segment.content;
            img.alt = segment.description;
            img.onerror = () => {
                img.alt = 'ภาพไม่สามารถแสดงได้';
                img.src = 'https://via.placeholder.com/100?text=No+Image'; // แสดง placeholder แทนภาพที่ไม่โหลดได้
            };
            const description = document.createElement('p');
            description.textContent = segment.description;

            rewardItem.appendChild(img);
            rewardItem.appendChild(description);
        }

        previewRewardsContainer.appendChild(rewardItem);
    });

    // Show preview modal
    previewModal.classList.add('animate__fadeInDown');
    previewModal.style.display = "flex";
});

// อีเวนต์ listener สำหรับ Preview Modal Close Button
previewCloseButton.addEventListener('click', () => {
    closeModal(previewModal);
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
    if(event.target == previewModal) {
        closeModal(previewModal);
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
    const ADMIN_PASSWORD = 'dm1020'; // รหัสผ่านสำหรับผู้ดูแล

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
    if (modal === previewModal) {
        // ไม่มีการเคลียร์ข้อมูลเพิ่มเติมสำหรับ previewModal
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
            selectedRewardText.textContent = `คุณได้รับ ${segment.description}`; // แสดงคำอธิบายแทนรูปภาพ
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
