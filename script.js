const _0x51c4ba=_0x1dd6;(function(_0x293099,_0x4e2159){const _0x275ed0=_0x1dd6,_0x4b6775=_0x293099();while(!![]){try{const _0x38c5b5=parseInt(_0x275ed0(0x1e1))/0x1*(-parseInt(_0x275ed0(0x132))/0x2)+-parseInt(_0x275ed0(0x14c))/0x3*(parseInt(_0x275ed0(0x1ae))/0x4)+parseInt(_0x275ed0(0x1be))/0x5+parseInt(_0x275ed0(0x17b))/0x6*(parseInt(_0x275ed0(0x141))/0x7)+parseInt(_0x275ed0(0x175))/0x8+parseInt(_0x275ed0(0x16c))/0x9*(parseInt(_0x275ed0(0x1c8))/0xa)+-parseInt(_0x275ed0(0x177))/0xb*(-parseInt(_0x275ed0(0x1a7))/0xc);if(_0x38c5b5===_0x4e2159)break;else _0x4b6775['push'](_0x4b6775['shift']());}catch(_0x281301){_0x4b6775['push'](_0x4b6775['shift']());}}}(_0x43b9,0x42cc4));const canvas=document['getElementById'](_0x51c4ba(0x1a6)),ctx=canvas[_0x51c4ba(0x165)]('2d'),spinButton=document[_0x51c4ba(0x145)](_0x51c4ba(0x1b5)),resetButton=document['getElementById'](_0x51c4ba(0x152)),rewardModal=document[_0x51c4ba(0x145)](_0x51c4ba(0x178)),rewardCloseButton=rewardModal[_0x51c4ba(0x123)]('.close-button'),rewardText=document[_0x51c4ba(0x145)](_0x51c4ba(0x1d7)),spinSound=document['getElementById']('spin-sound'),winSound=document[_0x51c4ba(0x145)](_0x51c4ba(0x13c)),vipDropdown=document['getElementById']('vip-level'),selectedRewardText=document[_0x51c4ba(0x145)](_0x51c4ba(0x1b6)),passwordModal=document['getElementById'](_0x51c4ba(0x17e)),passwordCloseButton=passwordModal[_0x51c4ba(0x123)]('.close-button'),submitPasswordButton=document[_0x51c4ba(0x145)](_0x51c4ba(0x1d0)),passwordInput=document[_0x51c4ba(0x145)]('password-input'),passwordError=document[_0x51c4ba(0x145)](_0x51c4ba(0x1dd)),adminResetModal=document[_0x51c4ba(0x145)]('admin-reset-modal'),adminResetCloseButton=adminResetModal[_0x51c4ba(0x123)](_0x51c4ba(0x195)),submitAdminPasswordButton=document[_0x51c4ba(0x145)](_0x51c4ba(0x1b4)),adminPasswordInput=document['getElementById'](_0x51c4ba(0x149)),adminPasswordError=document[_0x51c4ba(0x145)](_0x51c4ba(0x12d)),previewButton=document[_0x51c4ba(0x145)](_0x51c4ba(0x174)),previewModal=document[_0x51c4ba(0x145)]('preview-modal'),previewCloseButton=previewModal[_0x51c4ba(0x123)](_0x51c4ba(0x195)),previewRewardsContainer=document[_0x51c4ba(0x145)](_0x51c4ba(0x135)),previewVipLevelText=document[_0x51c4ba(0x145)](_0x51c4ba(0x1ac)),VIP_LEVELS={'VIP1':{'password':_0x51c4ba(0x16f),'segments':[{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1a5)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1d3)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1a5)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1d3)},{'type':'text','content':_0x51c4ba(0x1a5)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1d3)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1a5)},{'type':_0x51c4ba(0x182),'content':'โบนัส\x2039'}],'colors':[_0x51c4ba(0x133),_0x51c4ba(0x179),_0x51c4ba(0x1cc),'#F333FF',_0x51c4ba(0x19e),_0x51c4ba(0x197),_0x51c4ba(0x146),_0x51c4ba(0x1d2)],'hasSpun':![],'selectedSegment':null},'VIP2':{'password':_0x51c4ba(0x180),'segments':[{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1c1)},{'type':'text','content':_0x51c4ba(0x12e)},{'type':_0x51c4ba(0x182),'content':'โบนัส\x2039'},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1c0)},{'type':'text','content':_0x51c4ba(0x1c1)},{'type':_0x51c4ba(0x182),'content':'โบนัส\x2049'},{'type':'text','content':_0x51c4ba(0x1c1)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x12e)}],'colors':[_0x51c4ba(0x16e),_0x51c4ba(0x1af),_0x51c4ba(0x193),_0x51c4ba(0x134),_0x51c4ba(0x14b),_0x51c4ba(0x133),_0x51c4ba(0x179),_0x51c4ba(0x1cc)],'hasSpun':![],'selectedSegment':null},'VIP3':{'password':_0x51c4ba(0x1da),'segments':[{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x138)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x13a)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x138)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x17d)},{'type':'text','content':'โบนัส\x20109'},{'type':'text','content':_0x51c4ba(0x1a2)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x138)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1a2)}],'colors':[_0x51c4ba(0x1b9),_0x51c4ba(0x18f),_0x51c4ba(0x140),_0x51c4ba(0x1a4),_0x51c4ba(0x1a3),_0x51c4ba(0x142),'#FF1493',_0x51c4ba(0x17f)],'hasSpun':![],'selectedSegment':null},'VIP4':{'password':_0x51c4ba(0x18b),'segments':[{'type':_0x51c4ba(0x182),'content':'โบนัส\x20499'},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x15d)},{'type':_0x51c4ba(0x161),'content':_0x51c4ba(0x14f),'description':_0x51c4ba(0x125)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x150)},{'type':'text','content':_0x51c4ba(0x15d)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x15f)},{'type':_0x51c4ba(0x182),'content':'โบนัส\x20499'},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x150)}],'colors':[_0x51c4ba(0x12a),_0x51c4ba(0x156),_0x51c4ba(0x1c2),'#32CD32',_0x51c4ba(0x196),_0x51c4ba(0x159),_0x51c4ba(0x1bc),'#FF1493'],'hasSpun':![],'selectedSegment':null},'VIP5':{'password':_0x51c4ba(0x190),'segments':[{'type':'text','content':_0x51c4ba(0x1d6)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x172)},{'type':'image','content':_0x51c4ba(0x14f),'description':_0x51c4ba(0x1b3)},{'type':'text','content':_0x51c4ba(0x1d6)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1ce)},{'type':'text','content':_0x51c4ba(0x1d6)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1d6)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1ce)}],'colors':[_0x51c4ba(0x15e),_0x51c4ba(0x1b7),_0x51c4ba(0x154),_0x51c4ba(0x19d),_0x51c4ba(0x1a1),_0x51c4ba(0x12c),_0x51c4ba(0x14d),'#8B0000'],'hasSpun':![],'selectedSegment':null},'VIP6':{'password':_0x51c4ba(0x16d),'segments':[{'type':'text','content':_0x51c4ba(0x1c7)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x14e)},{'type':'image','content':'../assets/image/icon/2.png','description':_0x51c4ba(0x153)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1c7)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1c7)},{'type':_0x51c4ba(0x161),'content':'../assets/image/icon/1.png','description':_0x51c4ba(0x1b3)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x14a)},{'type':_0x51c4ba(0x182),'content':_0x51c4ba(0x1c7)}],'colors':[_0x51c4ba(0x1a4),_0x51c4ba(0x1c6),_0x51c4ba(0x155),_0x51c4ba(0x1ca),_0x51c4ba(0x160),_0x51c4ba(0x1aa),_0x51c4ba(0x1db),_0x51c4ba(0x13f)],'hasSpun':![],'selectedSegment':null}};let currentVIP=null,startAngle=0x0,arc=0x0,spinTimeout=null,spinAngleStart=0x0,spinTime=0x0,spinTimeTotal=0x0,isSpinning=![],selectedSegment=null;function _0x1dd6(_0x4fb4b1,_0x585a77){const _0x43b9c7=_0x43b9();return _0x1dd6=function(_0x1dd6db,_0x5f3c34){_0x1dd6db=_0x1dd6db-0x123;let _0x5eb16b=_0x43b9c7[_0x1dd6db];return _0x5eb16b;},_0x1dd6(_0x4fb4b1,_0x585a77);}const loadedImages={};function loadImages(_0x526567,_0x2cd929){const _0x57d40c=_0x51c4ba,_0x43662f=VIP_LEVELS[_0x526567];if(!_0x43662f)return _0x2cd929();const _0x1bfce1=_0x43662f['segments'][_0x57d40c(0x129)](_0x572900=>_0x572900[_0x57d40c(0x17c)]===_0x57d40c(0x161));let _0x2c233c=_0x1bfce1[_0x57d40c(0x1c4)];if(_0x2c233c===0x0)return _0x2cd929();_0x1bfce1['forEach']((_0x11099f,_0x1bea9a)=>{const _0x4a3986=_0x57d40c,_0x5edd05=new Image();_0x5edd05[_0x4a3986(0x183)]=_0x11099f[_0x4a3986(0x17a)],_0x5edd05[_0x4a3986(0x181)]=()=>{loadedImages[_0x11099f['content']]=_0x5edd05,_0x2c233c--,_0x2c233c===0x0&&_0x2cd929();},_0x5edd05[_0x4a3986(0x170)]=()=>{const _0x1324e3=_0x4a3986;console[_0x1324e3(0x184)](_0x1324e3(0x1b0)+_0x11099f[_0x1324e3(0x17a)]),_0x2c233c--,_0x2c233c===0x0&&_0x2cd929();};});}function setWheel(_0x1f3898){const _0xae982e=_0x51c4ba;if(!_0x1f3898||!VIP_LEVELS[_0x1f3898])return;const {segments:_0x4fdd42,colors:_0x302d3f}=VIP_LEVELS[_0x1f3898];arc=Math['PI']/(_0x4fdd42[_0xae982e(0x1c4)]/0x2),loadImages(_0x1f3898,()=>{drawWheel(_0x4fdd42,_0x302d3f);});}function drawWheel(_0x16cc43,_0x47cfc8){const _0x2fb046=_0x51c4ba,_0x2fa76e=0xc8,_0x3b8122=0xa0,_0x142d06=0x14;ctx[_0x2fb046(0x124)](0x0,0x0,canvas[_0x2fb046(0x1b8)],canvas[_0x2fb046(0x147)]);for(let _0x3ced87=0x0;_0x3ced87<_0x16cc43[_0x2fb046(0x1c4)];_0x3ced87++){const _0x8cf153=startAngle+_0x3ced87*arc;ctx[_0x2fb046(0x151)]=_0x47cfc8[_0x3ced87%_0x47cfc8['length']],ctx['beginPath'](),ctx[_0x2fb046(0x131)](0xfa,0xfa,_0x2fa76e,_0x8cf153,_0x8cf153+arc,![]),ctx[_0x2fb046(0x131)](0xfa,0xfa,_0x142d06,_0x8cf153+arc,_0x8cf153,!![]),ctx[_0x2fb046(0x188)](),ctx[_0x2fb046(0x1e0)](),ctx[_0x2fb046(0x151)]=_0x2fb046(0x1b1),ctx[_0x2fb046(0x18a)](0xfa+Math[_0x2fb046(0x15b)](_0x8cf153+arc/0x2)*_0x3b8122,0xfa+Math[_0x2fb046(0x163)](_0x8cf153+arc/0x2)*_0x3b8122),ctx[_0x2fb046(0x166)](_0x8cf153+arc/0x2+Math['PI']/0x2);const _0x546991=_0x16cc43[_0x3ced87];if(_0x546991[_0x2fb046(0x17c)]===_0x2fb046(0x182)){const _0x70e101=_0x546991[_0x2fb046(0x17a)];ctx[_0x2fb046(0x171)]=_0x2fb046(0x148),ctx['fillText'](_0x70e101,-ctx[_0x2fb046(0x15c)](_0x70e101)[_0x2fb046(0x1b8)]/0x2,0x0);}else{if(_0x546991[_0x2fb046(0x17c)]===_0x2fb046(0x161)){const _0x2c3717=loadedImages[_0x546991[_0x2fb046(0x17a)]];if(_0x2c3717){const _0x4f4dfe=0x50,_0x20c90e=0x50;ctx[_0x2fb046(0x1d4)](_0x2c3717,-_0x4f4dfe/0x2,-_0x20c90e/0x2,_0x4f4dfe,_0x20c90e);}else ctx[_0x2fb046(0x171)]=_0x2fb046(0x148),ctx['fillText']('ภาพไม่โหลด',-ctx[_0x2fb046(0x15c)](_0x2fb046(0x191))[_0x2fb046(0x1b8)]/0x2,0x0);}}ctx[_0x2fb046(0x13b)]();}ctx[_0x2fb046(0x1a8)](),ctx[_0x2fb046(0x131)](0xfa,0xfa,_0x142d06,0x0,0x2*Math['PI'],![]),ctx[_0x2fb046(0x151)]=_0x2fb046(0x13d),ctx[_0x2fb046(0x188)](),ctx['fillStyle']='#333',ctx[_0x2fb046(0x1a8)](),ctx[_0x2fb046(0x173)](0xfa-0xf,0xfa-(_0x2fa76e+0x1e)),ctx['lineTo'](0xfa+0xf,0xfa-(_0x2fa76e+0x1e)),ctx[_0x2fb046(0x1bf)](0xfa,0xfa-(_0x2fa76e-0xa)),ctx[_0x2fb046(0x188)]();}function spin(){const _0x764cd7=_0x51c4ba;if(isSpinning)return;if(selectedSegment!==null)return;if(!currentVIP){alert(_0x764cd7(0x1bd));return;}if(VIP_LEVELS[currentVIP]['hasSpun']){alert(_0x764cd7(0x139)+currentVIP+_0x764cd7(0x198));return;}isSpinning=!![],spinButton[_0x764cd7(0x16b)]=!![],spinSound[_0x764cd7(0x136)](),canvas[_0x764cd7(0x127)][_0x764cd7(0x1cf)]=_0x764cd7(0x1e3),spinAngleStart=Math[_0x764cd7(0x164)]()*0xa+0xa,spinTime=0x0,spinTimeTotal=Math[_0x764cd7(0x164)]()*0xbb8+0xfa0,rotateWheel();}function rotateWheel(){spinTime+=0x1e;if(spinTime>=spinTimeTotal){stopRotateWheel();return;}const _0x399e62=spinAngleStart-easeOut(spinTime,0x0,spinAngleStart,spinTimeTotal);startAngle+=_0x399e62*Math['PI']/0xb4,setWheel(currentVIP),spinTimeout=setTimeout(rotateWheel,0x1e);}function stopRotateWheel(){const _0x179896=_0x51c4ba;clearTimeout(spinTimeout),canvas['style'][_0x179896(0x1cf)]=_0x179896(0x1ab);const _0x49d95f=startAngle*0xb4/Math['PI']+0x5a,_0x57da05=arc*0xb4/Math['PI'],_0x5c7e34=Math[_0x179896(0x162)]((0x168-_0x49d95f%0x168)/_0x57da05)%VIP_LEVELS[currentVIP][_0x179896(0x1df)][_0x179896(0x1c4)];selectedSegment=VIP_LEVELS[currentVIP][_0x179896(0x1df)][_0x5c7e34],setWheel(currentVIP);if(selectedSegment[_0x179896(0x17c)]==='text')rewardText[_0x179896(0x12f)]='คุณได้รับ\x20'+selectedSegment[_0x179896(0x17a)];else selectedSegment[_0x179896(0x17c)]===_0x179896(0x161)&&(rewardText[_0x179896(0x12f)]=_0x179896(0x1d5)+selectedSegment[_0x179896(0x19f)]);rewardModal[_0x179896(0x18e)]['add'](_0x179896(0x185)),rewardModal[_0x179896(0x127)]['display']=_0x179896(0x1a0),winSound[_0x179896(0x136)](),VIP_LEVELS[currentVIP]['hasSpun']=!![],VIP_LEVELS[currentVIP]['selectedSegment']=selectedSegment,updateVIPDropdown(),saveSpinStatus(),isSpinning=![],spinButton['disabled']=![],selectedSegment=null,displaySelectedReward();}function easeOut(_0x11af9b,_0x4d965f,_0x46e146,_0x430385){const _0x349d88=(_0x11af9b/=_0x430385)*_0x11af9b,_0x113563=_0x349d88*_0x11af9b;return _0x4d965f+_0x46e146*(_0x113563+-0x3*_0x349d88+0x3*_0x11af9b);}function updateVIPDropdown(){const _0x46e133=_0x51c4ba,_0x5f1ca1=vipDropdown[_0x46e133(0x1b2)];for(let _0x57cc73=0x0;_0x57cc73<_0x5f1ca1['length'];_0x57cc73++){const _0x150e2b=_0x5f1ca1[_0x57cc73];if(VIP_LEVELS[_0x150e2b[_0x46e133(0x19c)]]&&VIP_LEVELS[_0x150e2b['value']][_0x46e133(0x128)])_0x150e2b[_0x46e133(0x12f)]=_0x150e2b['value']+_0x46e133(0x15a);else VIP_LEVELS[_0x150e2b[_0x46e133(0x19c)]]&&(_0x150e2b[_0x46e133(0x12f)]=_0x150e2b['value']);}const _0x121d29=Object['keys'](VIP_LEVELS)[_0x46e133(0x1de)](_0x12b8b8=>!VIP_LEVELS[_0x12b8b8]['hasSpun']);if(!_0x121d29)spinButton[_0x46e133(0x16b)]=!![],spinButton[_0x46e133(0x12f)]='หมุนวงล้อ\x20(หมดจำนวน)';else{spinButton[_0x46e133(0x16b)]=![],spinButton['textContent']=_0x46e133(0x126);const _0x5f22ae=document[_0x46e133(0x1d8)]('i');_0x5f22ae['classList']['add'](_0x46e133(0x176),_0x46e133(0x199)),spinButton['appendChild'](_0x5f22ae);}}function loadSpinStatus(){const _0x27f20c=_0x51c4ba,_0x389bd6=localStorage['getItem'](_0x27f20c(0x187));if(_0x389bd6){const _0x542d0e=JSON[_0x27f20c(0x169)](_0x389bd6);Object[_0x27f20c(0x1a9)](_0x542d0e)[_0x27f20c(0x16a)](_0x1f2a95=>{VIP_LEVELS[_0x1f2a95]&&(VIP_LEVELS[_0x1f2a95]['hasSpun']=_0x542d0e[_0x1f2a95]['hasSpun'],VIP_LEVELS[_0x1f2a95]['selectedSegment']=_0x542d0e[_0x1f2a95]['selectedSegment']);});}}function saveSpinStatus(){const _0xcb9d82=_0x51c4ba,_0x507c68={};Object[_0xcb9d82(0x1a9)](VIP_LEVELS)[_0xcb9d82(0x16a)](_0x971735=>{const _0x440384=_0xcb9d82;_0x507c68[_0x971735]={'hasSpun':VIP_LEVELS[_0x971735][_0x440384(0x128)],'selectedSegment':VIP_LEVELS[_0x971735][_0x440384(0x1c9)]};}),localStorage['setItem']('vipSpinStatus',JSON[_0xcb9d82(0x137)](_0x507c68));}function resetSpinButton(){const _0x4e5459=_0x51c4ba;spinButton[_0x4e5459(0x16b)]=![],spinButton['textContent']='หมุนวงล้อ\x20';const _0x54ce13=document[_0x4e5459(0x1d8)]('i');_0x54ce13[_0x4e5459(0x18e)][_0x4e5459(0x130)](_0x4e5459(0x176),_0x4e5459(0x199)),spinButton[_0x4e5459(0x144)](_0x54ce13);}spinButton['addEventListener'](_0x51c4ba(0x18c),()=>{const _0x527e95=_0x51c4ba,_0x57dc76=vipDropdown[_0x527e95(0x19c)];if(!_0x57dc76){alert(_0x527e95(0x1bd));return;}if(VIP_LEVELS[_0x57dc76][_0x527e95(0x128)]){alert(_0x527e95(0x139)+_0x57dc76+_0x527e95(0x198));return;}passwordModal[_0x527e95(0x18e)][_0x527e95(0x130)]('animate__fadeInDown'),passwordModal[_0x527e95(0x127)][_0x527e95(0x19a)]='flex';}),resetButton[_0x51c4ba(0x194)](_0x51c4ba(0x18c),()=>{const _0x1f4ac5=_0x51c4ba;adminResetModal[_0x1f4ac5(0x18e)][_0x1f4ac5(0x130)](_0x1f4ac5(0x185)),adminResetModal['style'][_0x1f4ac5(0x19a)]=_0x1f4ac5(0x1a0);}),rewardCloseButton[_0x51c4ba(0x194)](_0x51c4ba(0x18c),()=>{closeModal(rewardModal);}),passwordCloseButton[_0x51c4ba(0x194)](_0x51c4ba(0x18c),()=>{closeModal(passwordModal);}),adminResetCloseButton['addEventListener'](_0x51c4ba(0x18c),()=>{closeModal(adminResetModal);}),previewButton[_0x51c4ba(0x194)](_0x51c4ba(0x18c),()=>{const _0x523a52=_0x51c4ba,_0x31f665=vipDropdown['value'];if(!_0x31f665){alert(_0x523a52(0x168));return;}const _0xd5b525=VIP_LEVELS[_0x31f665];if(!_0xd5b525){alert(_0x523a52(0x1d9));return;}previewVipLevelText['textContent']=_0x31f665,previewRewardsContainer[_0x523a52(0x1ba)]='';const _0x126ea0=_0xd5b525[_0x523a52(0x1df)][_0x523a52(0x129)](_0x2a5461=>_0x2a5461[_0x523a52(0x17c)]===_0x523a52(0x182)),_0x227992=_0xd5b525[_0x523a52(0x1df)][_0x523a52(0x129)](_0x486ed=>_0x486ed[_0x523a52(0x17c)]===_0x523a52(0x161));_0x126ea0[_0x523a52(0x189)]((_0x4c750f,_0x541319)=>{const _0x1afc79=_0x523a52,_0x293813=parseInt(_0x4c750f[_0x1afc79(0x17a)][_0x1afc79(0x186)](/\D/g,''),0xa),_0x3528a8=parseInt(_0x541319[_0x1afc79(0x17a)][_0x1afc79(0x186)](/\D/g,''),0xa);return _0x293813-_0x3528a8;});const _0x5476ca=[..._0x126ea0,..._0x227992];_0x5476ca[_0x523a52(0x16a)](_0x2fbc34=>{const _0x1e6c90=_0x523a52,_0x11be6a=document[_0x1e6c90(0x1d8)](_0x1e6c90(0x1d1));_0x11be6a[_0x1e6c90(0x18e)][_0x1e6c90(0x130)](_0x1e6c90(0x143));if(_0x2fbc34[_0x1e6c90(0x17c)]===_0x1e6c90(0x182))_0x11be6a[_0x1e6c90(0x1ba)]=_0x1e6c90(0x1bb)+_0x2fbc34[_0x1e6c90(0x17a)]+_0x1e6c90(0x12b);else{if(_0x2fbc34[_0x1e6c90(0x17c)]===_0x1e6c90(0x161)){const _0x4bc9da=document['createElement'](_0x1e6c90(0x1c3));_0x4bc9da['src']=_0x2fbc34[_0x1e6c90(0x17a)],_0x4bc9da[_0x1e6c90(0x192)]=_0x2fbc34[_0x1e6c90(0x19f)],_0x4bc9da[_0x1e6c90(0x170)]=()=>{const _0x34da4e=_0x1e6c90;_0x4bc9da[_0x34da4e(0x192)]=_0x34da4e(0x13e),_0x4bc9da[_0x34da4e(0x183)]=_0x34da4e(0x158);};const _0x440216=document[_0x1e6c90(0x1d8)]('p');_0x440216[_0x1e6c90(0x12f)]=_0x2fbc34[_0x1e6c90(0x19f)],_0x11be6a[_0x1e6c90(0x144)](_0x4bc9da),_0x11be6a[_0x1e6c90(0x144)](_0x440216);}}previewRewardsContainer[_0x1e6c90(0x144)](_0x11be6a);}),previewModal['classList']['add'](_0x523a52(0x185)),previewModal[_0x523a52(0x127)][_0x523a52(0x19a)]=_0x523a52(0x1a0);}),previewCloseButton['addEventListener'](_0x51c4ba(0x18c),()=>{closeModal(previewModal);}),window[_0x51c4ba(0x194)]('click',_0x237153=>{const _0x1a21dd=_0x51c4ba;_0x237153[_0x1a21dd(0x19b)]==rewardModal&&closeModal(rewardModal),_0x237153[_0x1a21dd(0x19b)]==passwordModal&&closeModal(passwordModal),_0x237153[_0x1a21dd(0x19b)]==adminResetModal&&closeModal(adminResetModal),_0x237153[_0x1a21dd(0x19b)]==previewModal&&closeModal(previewModal);}),submitPasswordButton[_0x51c4ba(0x194)]('click',()=>{const _0x379e3d=_0x51c4ba,_0x349b1d=passwordInput[_0x379e3d(0x19c)][_0x379e3d(0x1c5)]();!currentVIP&&(currentVIP=vipDropdown['value']);if(!currentVIP){passwordError[_0x379e3d(0x12f)]=_0x379e3d(0x157);return;}const _0x5b837c=VIP_LEVELS[currentVIP][_0x379e3d(0x167)];_0x349b1d===_0x5b837c?(closeModal(passwordModal),spin(),passwordInput[_0x379e3d(0x19c)]='',passwordError[_0x379e3d(0x12f)]=''):passwordError[_0x379e3d(0x12f)]='รหัสผ่านไม่ถูกต้อง\x20กรุณาลองใหม่อีกครั้ง';}),submitAdminPasswordButton[_0x51c4ba(0x194)](_0x51c4ba(0x18c),()=>{const _0x441b7b=_0x51c4ba,_0x29b6bf=adminPasswordInput['value']['trim'](),_0x4da21b='adminpro';_0x29b6bf===_0x4da21b?(Object[_0x441b7b(0x1a9)](VIP_LEVELS)[_0x441b7b(0x16a)](_0x1fd668=>{const _0x493bde=_0x441b7b;VIP_LEVELS[_0x1fd668][_0x493bde(0x128)]=![],VIP_LEVELS[_0x1fd668]['selectedSegment']=null;}),updateVIPDropdown(),saveSpinStatus(),closeModal(adminResetModal),alert(_0x441b7b(0x1cb)),setWheel(currentVIP),displaySelectedReward()):adminPasswordError[_0x441b7b(0x12f)]=_0x441b7b(0x1ad),adminPasswordInput[_0x441b7b(0x19c)]='';});function closeModal(_0x37b697){const _0x108436=_0x51c4ba;_0x37b697[_0x108436(0x18e)][_0x108436(0x18d)](_0x108436(0x185)),_0x37b697[_0x108436(0x127)][_0x108436(0x19a)]=_0x108436(0x1e2);_0x37b697===rewardModal&&(passwordInput[_0x108436(0x19c)]='',passwordError[_0x108436(0x12f)]='');_0x37b697===passwordModal&&(passwordInput[_0x108436(0x19c)]='',passwordError[_0x108436(0x12f)]='');_0x37b697===adminResetModal&&(adminPasswordInput[_0x108436(0x19c)]='',adminPasswordError[_0x108436(0x12f)]='');if(_0x37b697===previewModal){}}vipDropdown[_0x51c4ba(0x194)](_0x51c4ba(0x1dc),()=>{const _0x552333=_0x51c4ba;currentVIP=vipDropdown[_0x552333(0x19c)],!VIP_LEVELS[currentVIP][_0x552333(0x128)]?setWheel(currentVIP):ctx[_0x552333(0x124)](0x0,0x0,canvas['width'],canvas['height']),displaySelectedReward();});function displaySelectedReward(){const _0x2b1f52=_0x51c4ba;if(currentVIP&&VIP_LEVELS[currentVIP][_0x2b1f52(0x128)]&&VIP_LEVELS[currentVIP]['selectedSegment']){const _0x334c9b=VIP_LEVELS[currentVIP][_0x2b1f52(0x1c9)];if(_0x334c9b[_0x2b1f52(0x17c)]===_0x2b1f52(0x182))selectedRewardText['textContent']=_0x2b1f52(0x1d5)+_0x334c9b[_0x2b1f52(0x17a)];else _0x334c9b['type']===_0x2b1f52(0x161)&&(selectedRewardText[_0x2b1f52(0x12f)]=_0x2b1f52(0x1d5)+_0x334c9b[_0x2b1f52(0x19f)]);}else selectedRewardText[_0x2b1f52(0x12f)]=_0x2b1f52(0x1cd);}function initialize(){loadSpinStatus(),setWheel(null),updateVIPDropdown(),displaySelectedReward();}function _0x43b9(){const _0x4747f4=['#FFA500','admin-password-error','โบนัส\x2049','textContent','add','arc','2ihcltu','#FF5733','#FFC300','preview-rewards','play','stringify','โบนัส\x20109','คุณได้หมุนวงล้อในระดับ\x20','โบนัส\x20209','restore','win-sound','#333','ภาพไม่สามารถแสดงได้','#00BFFF','#9400D3','3759eMdjDj','#9932CC','reward-item','appendChild','getElementById','#FF8633','height','bold\x2020px\x20Roboto','admin-password-input','โบนัส\x201999','#DAF7A6','573bDUklR','#A52A2A','โบนัส\x202299','../assets/image/icon/1.png','โบนัส\x20499','fillStyle','reset-button','iPhone\x2016\x20Pro','#008000','#FF6347','#FF4500','กรุณาเลือกระดับ\x20VIP\x20ก่อนกรอกรหัสผ่าน','https://via.placeholder.com/100?text=No+Image','#FFD700','\x20(หมุนแล้ว)','cos','measureText','โบนัส\x20699','#800000','โบนัส\x20899','#D2691E','image','floor','sin','random','getContext','rotate','password','กรุณาเลือกระดับ\x20VIP\x20เพื่อดูตัวอย่างรางวัล','parse','forEach','disabled','268353GfIecd','226980','#C70039','120123','onerror','font','โบนัส\x201558','moveTo','preview-button','1800392NTOwzs','fas','21131ZnsQkl','reward-modal','#33FF57','content','216vPhYEh','type','โบนัส\x20309','password-modal','#C71585','862365','onload','text','src','error','animate__fadeInDown','replace','vipSpinStatus','fill','sort','translate','139823','click','remove','classList','#BA55D3','863188','ภาพไม่โหลด','alt','#581845','addEventListener','.close-button','#1E90FF','#33FFF6','\x20แล้ว','fa-sync-alt','display','target','value','#800080','#FF33A8','description','flex','#000080','โบนัส\x20159','#8A2BE2','#4B0082','โบนัส\x2012','wheel','732GXpnHG','beginPath','keys','#9ACD32','scale(1)','preview-vip-level','รหัสผ่านไม่ถูกต้อง\x20กรุณาลองใหม่อีกครั้ง','8912YlmuZP','#900C3F','Failed\x20to\x20load\x20image:\x20','#fff','options','ทอง\x201สลึง\x20(มูลค่า10,000บาท)','submit-admin-password','spin-button','selected-reward-text','#808000','width','#FF69B4','innerHTML','<p>','#00CED1','กรุณาเลือกระดับ\x20VIP\x20ก่อนหมุนวงล้อ','1992260RixsTc','lineTo','โบนัส\x2079','โบนัส\x2039','#DA70D6','img','length','trim','#2E8B57','โบนัส\x201699','150BkbEjs','selectedSegment','#4682B4','รีเซ็ตการหมุนทั้งหมดเรียบร้อยแล้ว','#3357FF','ยังไม่ได้หมุนวงล้อ','โบนัส\x201258','transform','submit-password','div','#8D33FF','โบนัส\x2029','drawImage','คุณได้รับ\x20','โบนัส\x20958','reward-text','createElement','ระดับ\x20VIP\x20ที่เลือกไม่มีข้อมูล','983659','#FF1493','change','password-error','some','segments','save','508117HwWuOO','none','scale(1.2)\x20rotate(0deg)','querySelector','clearRect','ทองครึ่งสลึง\x20(มูลค่า5,000บาท)','หมุนวงล้อ\x20','style','hasSpun','filter','#FF8C00','</p>'];_0x43b9=function(){return _0x4747f4;};return _0x43b9();}window[_0x51c4ba(0x181)]=initialize;
