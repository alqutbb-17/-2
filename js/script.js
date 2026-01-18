const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// donate and request modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}



document.addEventListener("DOMContentLoaded", () => {

  /* ===== Active Link ===== */
    const navLinks = document.querySelectorAll(".nav-links li");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
        navLinks.forEach(li => li.classList.remove("active"));
        link.classList.add("active");
    });
    });

  /* ===== Sticky Navbar ===== */
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
    });

  /* ===== Smooth Scroll ===== */
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
        const targetId = link.textContent.trim();
        const section = document.querySelector(`[data-section="${targetId}"]`);
        if (section) {
            section.scrollIntoView({
            behavior: "smooth"
        });
        }
    });
    });
});



  // login and register
document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("authModal");

    const openLogin = document.getElementById("openLogin");
    const openRegister = document.getElementById("openRegister");
    const closeAuth = document.getElementById("closeAuth");

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    /* فتح تسجيل دخول */
    openLogin.addEventListener("click", () => {
        modal.style.display = "flex";
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");

        // تفريغ الخانات
        loginForm.reset();
    });

    /* فتح إنشاء حساب */
    openRegister.addEventListener("click", () => {
        modal.style.display = "flex";
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");

        // تفريغ الخانات
        registerForm.reset();
    });

    /* غلق المودال */
    closeAuth.addEventListener("click", () => {
        modal.style.display = "none";
    });

    /* إرسال تسجيل الدخول */
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // هنا إرسال البيانات للباك بعدين
        console.log("تم إرسال بيانات تسجيل الدخول");

        loginForm.reset();

        modal.style.display = "none";
    });

    /* إرسال إنشاء حساب */
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        console.log("تم إرسال بيانات إنشاء الحساب");

        registerForm.reset();

        modal.style.display = "none";
    });

});


// Connect the creation of the beginning
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const goRegister = document.getElementById("goRegister");
const goLogin = document.getElementById("goLogin");

goRegister.onclick = function () {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
};

goLogin.onclick = function () {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
};



// cards zzzzzzzzzzzzooooo

document.addEventListener("click", function (e) {

    // order btn
    if (e.target.classList.contains("order-btn")) {
        alert("✅ تم إرسال طلب الدواء");
    }

    // details btn
    if (e.target.classList.contains("details-btn")) {
        alert("ℹ️ هنا تفاصيل الدواء");
    }

    // delete btn
    if (e.target.classList.contains("delete-btn")) {
        if (confirm("هل أنت متأكد من الحذف؟")) {
            e.target.closest(".card").remove();
        }
    }

});

    // edit btn
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-btn")) {
        alert("✏️ فتح صفحة التعديل");
        // window.location.href = "edit.html";
    }
});







