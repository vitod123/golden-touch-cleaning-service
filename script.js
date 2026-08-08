/* =========================================================
   GOLDEN TOUCH CLEANING
   Main JavaScript
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

    });


    // Close menu after clicking a link

    nav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });

}


/* ================= HEADER SHADOW ================= */

const header = document.getElementById("header");

function handleHeader() {

    if (!header) return;

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeader);

handleHeader();


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

function handleBackToTop() {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

window.addEventListener("scroll", handleBackToTop);

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ================= CURRENT YEAR ================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ================= CONTACT FORM ================= */




/* ================= IMAGE ERROR HANDLING ================= */

document
    .querySelectorAll("img")
    .forEach((image) => {

        image.addEventListener("error", () => {

            image.style.background =
                "#e8f5f5";

            image.alt =
                "Golden Touch Cleaning";

        });

    });


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (nav) {
            nav.classList.remove("active");
        }

    }

});

//---//

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector('button[type="submit"]');

        if (!submitButton) return;

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        try {

            const response = await fetch(
                "https://formsubmit.co/ajax/48c91e4bfa76c5b0ab17fca4d2a5b740", {
                    method: "POST",
                    body: new FormData(contactForm),
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            const result = await response.json();

            console.log("FormSubmit response:", result);

            if (response.ok && result.success) {

                window.location.href =
                    "https://vitod123.github.io/golden-touch-cleaning-service/thank-you.html";

                return;
            }

            throw new Error("FormSubmit rejected the request.");

        } catch (error) {

            console.error("Form error:", error);

            submitButton.disabled = false;
            submitButton.textContent = "Send Request";

            alert(
                "Something went wrong. Please try again."
            );
        }

    });
}