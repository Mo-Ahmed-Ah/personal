// تحديد المتغيرات
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// التحكم في الأيقونة عند النقر
menuIcon.onclick = () => {
  // تبديل حالة الأيقونة عند النقر
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*======================================== scroll sections active ========================================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`header nav a[href*="${id}"]`)
          .classList.add("active");
      });
    }
  });

  /*======================================== sticky navbar ========================================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  /*======================================== remove toggle icon and navbar when click navbar link (scroll) ======================================== */
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

/*======================================== scroll reveal ========================================*/
// تفعيل تأثير ScrollReveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-image, .services-container, .protofolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1 , .about-img , .contact form *", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content p ", {
  origin: "right",
});

/*======================================== typed js ========================================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
  ],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// تحديد السمة بناءً على تفضيلات النظام
// تحديد المتغيرات
let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

// الحصول على السمة الحالية من localStorage أو تعيينها بناءً على تفضيلات النظام إذا لم يتم تحديدها
let currentTheme = localStorage.getItem("theme") || systemTheme;

// تعيين السمة إلى <html> عند تحميل الصفحة
document.documentElement.setAttribute("data-theme", currentTheme);

// الحصول على الزر الخاص بتبديل الوضع الداكن والفاتح
const darkModeToggle = document.querySelector(".navbar label");

// إضافة حدث النقر للتبديل بين الثيمين
darkModeToggle.addEventListener("click", () => {
  // التبديل بين "light" و "dark"
  currentTheme = currentTheme === "light" ? "dark" : "light";

  // تعيين السمة الجديدة
  document.documentElement.setAttribute("data-theme", currentTheme);

  // حفظ السمة الجديدة في localStorage
  localStorage.setItem("theme", currentTheme);
});
