ระบบสมาชิกมือถือแยกจาก Desktop

ให้อัปโหลดโฟลเดอร์ member-mobile ทั้งโฟลเดอร์ไปที่ root ของ repo sahakorn

URL ใหม่:
https://sahakornkathu.github.io/sahakorn/member-mobile/

ระบบนี้ใช้ Supabase / DB เดียวกับเว็บ Desktop เดิม จึงเห็นข้อมูลชุดเดียวกันทันที
เว็บ Desktop เดิม /member/ ไม่ต้องแก้หรือย้ายไฟล์

หน้าที่มีในชุดมือถือ:
- index.html เมนู + ติดตั้ง PWA
- member.html ข้อมูลสมาชิก
- beneficiary.html ผู้รับผลประโยชน์
- memberexit.html ลาออก / เสียชีวิต
- welfare.html สวัสดิการ
- adminshare.html ลงหุ้น
- dashboard.html Dashboard หุ้น

หมายเหตุ: member_id ใน members ใช้เป็นข้อความ (text) ในหน้าสมาชิก/สวัสดิการ/ลาออก ส่วนตารางหุ้นยังคงใช้ Number(member_id) ตามระบบหุ้นเดิม
