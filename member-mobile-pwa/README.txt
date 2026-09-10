พร้อมอัปโหลดขึ้น GitHub Pages

โครงสร้าง:
member.html
member/
  index.html
  beneficiary.html
  manifest.json
  service-worker.js
  icons/
    icon-192.png
    icon-512.png
    icon-maskable-512.png

หน้าหลัก:
.../sahakorn/member.html

หน้าข้อมูลสมาชิก:
.../sahakorn/member/
หรือ
.../sahakorn/member/index.html

หมายเหตุ:
- หน้าหลัก member.html ลิงก์ “ข้อมูลสมาชิก” ไป member/index.html แล้ว
- beneficiary.html ปุ่มกลับชี้ไป index.html แล้ว
- PWA start_url เปลี่ยนเป็น ./index.html แล้ว
- Service Worker ใช้ cache v5 เพื่อหลีกเลี่ยง cache เก่า
