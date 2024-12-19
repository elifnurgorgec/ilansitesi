document.addEventListener("DOMContentLoaded", function () {
    const ilanForm = document.getElementById("ilanForm");
    if (ilanForm) {
        ilanForm.addEventListener("submit", function (e) {
            const title = document.getElementById("title").value.trim();
            const description = document.getElementById("description").value.trim();

            if (!title || !description) {
                e.preventDefault();
                alert("Lütfen tüm alanları doldurun!");
            }
        });
    }

    // İletişim Formu Doğrulama
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                e.preventDefault();
                alert("Lütfen tüm alanları doldurun!");
            } else if (!validateEmail(email)) {
                e.preventDefault();
                alert("Geçerli bir e-posta adresi girin!");
            }
        });
    }
});

// E-posta doğrulama fonksiyonu
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}