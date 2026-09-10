PWA ระบบสมาชิกสหกรณ์การเกษตรกะทู้
====================================

ไฟล์ที่ต้องอัปโหลดให้อยู่ในโฟลเดอร์เดียวกันบน GitHub Pages:

member.html
beneficiary.html
manifest.json
service-worker.js
icons/
  icon-192.png
  icon-512.png
  icon-maskable-512.png

วิธีติดตั้ง:
Android (Chrome):
1. เปิด member.html ผ่าน HTTPS
2. ระบบจะแสดงแถบ "ติดตั้งระบบสมาชิก"
3. กด "ติดตั้ง"

iPhone/iPad (Safari):
1. เปิด member.html
2. แตะ Share
3. เลือก "เพิ่มไปยังหน้าจอโฮม"

หมายเหตุ:
- GitHub Pages ใช้ HTTPS จึงรองรับ PWA
- แอปเริ่มที่ member.html
- beneficiary.html อยู่ใน PWA เดียวกัน
- Service Worker ไม่ cache ข้อมูล Supabase เพื่อป้องกันข้อมูลสมาชิกเก่า
- HTML ใช้ network-first เพื่อให้แก้เว็บแล้วได้เวอร์ชันล่าสุดก่อน
