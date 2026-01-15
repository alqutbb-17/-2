

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

  /* ===== Donate Button Click ===== */
  const donateBtn = document.querySelector(".donate-btn");

  donateBtn.addEventListener("click", () => {
    alert("💚 شكرًا لدعمك! سيتم تحويلك لصفحة التبرع");
  });

});


// زر تبرع بدواء
document.querySelector(".fill").addEventListener("click", () => {
  document.querySelector("#donate-section").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// زر اطلب دواء
document.querySelector(".outline").addEventListener("click", () => {
  document.querySelector("#contact-section").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});






// document.querySelector('.contact-form').addEventListener('submit', e => {
//   e.preventDefault();
//   alert('تم إرسال رسالتك بنجاح ✅');
// });






// link API

// donateForm
document.getElementById("donateForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        medicineName: document.getElementById("medicineName").value,
        quantity: document.getElementById("quantity").value,
        category: document.getElementById("category").value,
        expiryDate: document.getElementById("expiryDate").value,
        donorName: document.getElementById("donorName").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        areaCode: document.getElementById("areaCode").value,
        notes: document.getElementById("notes").value
    };

    try {
        const response = await fetch("https://localhost:5001/api/donations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);

    } catch (error) {
        alert("حدث خطأ أثناء إرسال التبرع ❌");
    }
});


// contactForm
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("https://localhost:5001/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);

        document.getElementById("contactForm").reset();

    } catch (error) {
        alert("حدث خطأ أثناء إرسال الرسالة ❌");
    }
});











