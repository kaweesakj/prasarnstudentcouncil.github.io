# คณะกรรมการสภานักเรียนโรงเรียนประสารวิทยา (Prasarnwittaya Student Council 2024)

เว็บไซต์ตัวอย่างสำหรับคณะกรรมการสภานักเรียนโรงเรียนประสารวิทยา — โทนสี: น้ำเงิน-เหลือง-ขาว  
ดีไซน์เรียบง่าย เหมาะสำหรับ GitHub Pages

ไฟล์ที่มี
- index.html — หน้าแรก (แก้ชื่อเป็นคณะกรรมการสภานักเรียนโรงเรียนประสารวิทยา ประจำปีการศึกษา 2567 / Prasarnwittaya Student Council 2024)
- assets/css/style.css — CSS หลัก
- assets/js/main.js — JS เล็ก ๆ สำหรับเมนูและฟอร์ม
- assets/images/logo.svg — โลโก้ตัวอย่าง (ปรับให้มีตัวย่อ PW)

วิธีใช้งานทดสอบแบบง่าย
1. คัดลอกไฟล์ทั้งหมดไปไว้ที่ root ของ repository หรือในโฟลเดอร์ `docs/` (ถ้าตั้ง GitHub Pages เป็น `docs/` branch)
2. หากใช้ GitHub Pages:
   - วางไฟล์ใน branch `main` root หรือ `gh-pages` ตามการตั้งค่า
   - หรือวางในโฟลเดอร์ `docs/` แล้วตั้ง GitHub Pages ให้ใช้ `main` branch / `docs/`
3. เปิด URL ของ GitHub Pages (เช่น https://<username>.github.io/<repo>)

ปรับแต่งเพิ่มเติม
- แก้ข้อความและรูปภาพใน `index.html`
- เปลี่ยนสีโดยแก้ตัวแปรใน `assets/css/style.css` (เช่น `--blue`, `--yellow`)
- ต่อระบบข่าวจริงโดยใช้ JSON, CMS (Netlify CMS, Forestry) หรือ Static Site Generator (Jekyll/Hugo)

ต้องการให้ผมช่วยต่อไหม?
- ผมช่วยเพิ่มหน้า "ข่าวทั้งหมด" ที่ใช้ Markdown ได้ (Jekyll/Hugo)
- ช่วยเชื่อม form ติดต่อกับ Google Forms / Formspree / backend
- ปรับธีมให้แมตช์กับโลโก้จริงของโรงเรียนหรือเพิ่มสไลด์ banner
