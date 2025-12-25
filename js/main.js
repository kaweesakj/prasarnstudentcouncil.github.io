// เล็ก ๆ สำหรับ toggle เมนูมือถือ และตัวอย่างการแสดงปีปัจจุบัน
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  var y = new Date().getFullYear();
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // Nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var navList = document.querySelector('.nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', (!expanded).toString());
      navList.classList.toggle('show');
    });
  }

  // Example: prevent form submission (replace with real handler)
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('ขอบคุณที่ติดต่อเรา! (ตัวอย่าง) — โปรดเชื่อมต่อฟอร์มกับระบบที่ต้องการ');
    });
  }
});
