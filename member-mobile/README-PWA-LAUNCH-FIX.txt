แก้ปัญหา PWA ติดตั้งแล้วเปิด 404

อัปโหลดไฟล์ในโฟลเดอร์ member-mobile นี้ทับของเดิมทั้งหมด
ตำแหน่งต้องเป็น:
sahakorn/member-mobile/

PWA ถูกกำหนดแบบ explicit:
start_url = /sahakorn/member-mobile/index.html
scope     = /sahakorn/member-mobile/
id        = /sahakorn/member-mobile/

หลังอัปโหลด:
1) ถอนการติดตั้งแอป “สมาชิกมือถือ” ตัวเก่าออกจากมือถือก่อน
2) ปิด Chrome/Safari
3) เปิด https://sahakornkathu.github.io/sahakorn/member-mobile/
4) รีเฟรช 1 ครั้ง
5) ติดตั้งใหม่จากปุ่มในหน้าเว็บ

เหตุผลที่ต้องถอนตัวเก่า:
แอปที่ติดตั้งไว้แล้วอาจจำ launch URL/manifest เก่าไว้ แม้ไฟล์บน GitHub จะถูกแก้แล้ว
