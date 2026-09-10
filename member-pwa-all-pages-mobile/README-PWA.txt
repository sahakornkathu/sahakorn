PWA ระบบสมาชิก - หน้าเริ่มต้นเป็น member.html
=================================================

อัปโหลดไฟล์ใน ZIP นี้ทับไฟล์เดิมใน Repository

โครงสร้างหลัก:
member.html
manifest.json
service-worker.js
pwa-icons/

member/
  index.html
  beneficiary.html

ไฟล์เดิมที่ต้องมีอยู่ในโฟลเดอร์ member/:
member/memberexit.html
member/welfare.html
member/adminshare.html
member/stock/dashboard.html

ลิงก์จากหน้าแรก:
- ข้อมูลสมาชิก -> member/index.html
- ลาออก / เสียชีวิต -> member/memberexit.html
- สวัสดิการ -> member/welfare.html
- ลงหุ้น -> member/adminshare.html
- Dashboard หุ้น -> member/stock/dashboard.html

PWA เริ่มต้นที่:
member.html


MOBILE v2
---------
Service Worker จะปรับหน้าเหล่านี้สำหรับมือถืออัตโนมัติ:
- member/memberexit.html
- member/welfare.html
- member/adminshare.html
- member/stock/dashboard.html

สิ่งที่ปรับ:
- เพิ่ม viewport ให้หน้าที่ไม่มี
- ตัวหนังสือ/ช่องกรอกขั้นต่ำ 16px
- ปุ่มสูงอย่างน้อย ~48px
- ฟอร์มเรียง 1 คอลัมน์บนมือถือ
- ตารางเลื่อนเฉพาะในกรอบ ไม่ทำให้ทั้งหน้าล้นจอ
- Dashboard KPI เรียงการ์ดและตัวกรองเป็น 1 คอลัมน์บนมือถือ

ไฟล์เดิมของ 4 หน้านี้ไม่ถูกแก้ จึงไม่กระทบ logic Supabase เดิม
