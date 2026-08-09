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


/* ================= CONTACT FORM ================= */





/* -------------------------- */




/* =========================================================
   SERVICE INFORMATION POPUP
   ========================================================= */

const serviceModal = document.getElementById("serviceModal");
const serviceModalClose = document.getElementById("serviceModalClose");
const serviceModalOverlay = document.querySelector(".service-modal-overlay");

const serviceModalTitle =
    document.getElementById("serviceModalTitle");

const serviceModalDescription =
    document.getElementById("serviceModalDescription");

const serviceModalList =
    document.getElementById("serviceModalList");

const serviceModalIcon =
    document.getElementById("serviceModalIcon");

const serviceModalButton =
    document.getElementById("serviceModalButton");


const servicesInfo = {

    regular: {
        icon: "✨",
        label: "REGULAR CLEANING",
        title: "Regular Cleaning",

        description:
            "Our regular cleaning service keeps your home fresh, clean and comfortable on a consistent basis.",

        items: [
            "Dusting and wiping surfaces",
            "Vacuuming carpets and floors",
            "Mopping hard floors",
            "Kitchen cleaning",
            "Bathroom cleaning",
            "Trash removal"
        ]
    },


    deep: {
        icon: "🧽",
        label: "DEEP CLEANING",
        title: "Deep Cleaning",

        description:
            "A detailed top-to-bottom cleaning designed for homes that need extra attention and a deeper level of care.",

        items: [
            "Detailed dusting",
            "Deep kitchen cleaning",
            "Deep bathroom cleaning",
            "Baseboards and doors",
            "Hard-to-reach areas",
            "Detailed floor cleaning"
        ]
    },


    move: {
        icon: "🏠",
        label: "MOVE IN / MOVE OUT",
        title: "Move In / Move Out Cleaning",

        description:
            "A complete cleaning service to help make your move easier and leave the property fresh and ready.",

        items: [
            "Complete kitchen cleaning",
            "Bathroom cleaning",
            "Cabinet cleaning",
            "Floor cleaning",
            "Dusting throughout the property",
            "Final detail cleaning"
        ]
    },


    commercial: {
        icon: "🏢",
        label: "COMMERCIAL CLEANING",
        title: "Commercial Cleaning",

        description:
            "Professional cleaning solutions for offices, businesses and commercial spaces.",

        items: [
            "Office cleaning",
            "Workplace surface cleaning",
            "Floor care",
            "Restroom cleaning",
            "Trash removal",
            "Customized cleaning plans"
        ]
    }

};


/* ---------- OPEN ---------- */

document
    .querySelectorAll(".service-learn-more")
    .forEach((button) => {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            const serviceName =
                button.dataset.service;

            const service =
                servicesInfo[serviceName];

            if (!service) {

                console.error(
                    "Service not found:",
                    serviceName
                );

                return;
            }


            /* Fill popup */

            serviceModalIcon.textContent =
                service.icon;

            document
                .getElementById("serviceModalLabel")
                .textContent =
                service.label;

            serviceModalTitle.textContent =
                service.title;

            serviceModalDescription.textContent =
                service.description;


            /* Create list */

            serviceModalList.innerHTML = "";

            service.items.forEach((item) => {

                const li =
                    document.createElement("li");

                li.textContent = item;

                serviceModalList.appendChild(li);

            });


            /* Show */

            serviceModal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


/* ---------- CLOSE FUNCTION ---------- */

function closeServiceModal() {

    if (!serviceModal) return;

    serviceModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* ---------- CLOSE BUTTON ---------- */

if (serviceModalClose) {

    serviceModalClose.addEventListener(
        "click",
        closeServiceModal
    );

}


/* ---------- CLICK OUTSIDE ---------- */

if (serviceModalOverlay) {

    serviceModalOverlay.addEventListener(
        "click",
        closeServiceModal
    );

}


/* ---------- ESCAPE ---------- */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        serviceModal &&
        serviceModal.classList.contains("active")
    ) {

        closeServiceModal();

    }

});


/* ---------- QUOTE BUTTON ---------- */

if (serviceModalButton) {

    serviceModalButton.addEventListener(
        "click",
        closeServiceModal
    );

}