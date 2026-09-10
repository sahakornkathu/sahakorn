PWA ระบบสมาชิก - เริ่มต้นที่ member.html

อัปโหลดไฟล์ใน ZIP นี้ทับ/เพิ่มใน Repository เดิม
**อย่าลบไฟล์เดิม** memberexit.html, welfare.html, adminshare.html,
และ member/stock/dashboard.html

ไฟล์ใหม่/ที่แก้:
member.html                  หน้าแรก + ปุ่มติดตั้ง
manifest.json                PWA เริ่มที่ member.html
service-worker.js            scope ครอบคลุม /sahakorn/
pwa-icons/
member/index.html            ข้อมูลสมาชิก
member/beneficiary.html      ผู้รับผลประโยชน์

เมนูในหน้าแรกเปิดในแอปเดียว:
- ข้อมูลสมาชิก -> member/index.html
- ลาออก/เสียชีวิต -> memberexit.html
- สวัสดิการ -> welfare.html
- ลงหุ้น -> adminshare.html
- Dashboard หุ้น -> member/stock/dashboard.html

หลังอัปโหลด:
1. เปิด https://sahakornkathu.github.io/sahakorn/member.html
2. กด “ติดตั้งระบบสมาชิกบนมือถือ”
3. เมื่อติดตั้งแล้ว เปิดจากไอคอนจะเริ่มที่ member.html
