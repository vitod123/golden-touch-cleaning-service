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
   SERVICE INFO MODAL
========================================================= */

const serviceModal = document.getElementById("serviceModal");
const serviceModalClose = document.getElementById("serviceModalClose");

const serviceModalLabel =
    document.getElementById("serviceModalLabel");

const serviceModalTitle =
    document.getElementById("serviceModalTitle");

const serviceModalDescription =
    document.getElementById("serviceModalDescription");

const serviceModalList =
    document.getElementById("serviceModalList");

const serviceModalNote =
    document.getElementById("serviceModalNote");

const serviceModalQuote =
    document.getElementById("serviceModalQuote");


/* =========================================================
   SERVICE INFORMATION
========================================================= */

const serviceInformation = {

    residential: {

        label: "Residential Cleaning",

        title: "Residential Cleaning",

        description:
            "Enjoy a fresh, comfortable and spotless home without spending your valuable time cleaning. Our residential cleaning service is designed around the needs of your home and family.",

        items: [
            "Kitchen cleaning",
            "Bathroom cleaning",
            "Dusting and surface cleaning",
            "Vacuuming all accessible areas",
            "Mopping floors",
            "Trash removal",
            "General tidying",
            "High-touch surface cleaning"
        ],

        note:
            "Perfect for regular weekly, bi-weekly or one-time cleaning."
    },


    commercial: {

        label: "Commercial Cleaning",

        title: "Commercial Cleaning",

        description:
            "Keep your workplace clean, welcoming and professional with dependable commercial cleaning services tailored to your business.",

        items: [
            "Office cleaning",
            "Reception and common areas",
            "Break room cleaning",
            "Bathroom sanitation",
            "Floor cleaning",
            "Dusting and surface care",
            "Trash removal",
            "High-touch area cleaning"
        ],

        note:
            "Cleaning schedules can be tailored to your business needs."
    },


    deep: {

        label: "Deep Cleaning",

        title: "Deep Cleaning",

        description:
            "Our deep cleaning service gives your home extra attention in areas that are often missed during regular cleaning. It is ideal when your space needs a more detailed refresh.",

        items: [
            "Detailed kitchen cleaning",
            "Detailed bathroom cleaning",
            "Baseboard cleaning",
            "Doors and trim",
            "Detailed dusting",
            "Hard-to-reach areas",
            "Floor detailing",
            "Extra attention to buildup"
        ],

        note:
            "Great for seasonal cleaning or giving your home a complete refresh."
    },


    move: {

        label: "Move-In / Move-Out",

        title: "Move-In / Move-Out Cleaning",

        description:
            "Moving can be stressful enough. Let us take care of the cleaning so your previous or new home is fresh, clean and ready for its next chapter.",

        items: [
            "Kitchen cleaning",
            "Bathroom cleaning",
            "Cabinet cleaning",
            "Floor cleaning",
            "Dusting throughout",
            "Doors and trim",
            "Empty-room cleaning",
            "Final detailed cleaning"
        ],

        note:
            "Ideal before moving in or after moving out."
    }

};


/* =========================================================
   OPEN MODAL
========================================================= */

function openServiceModal(serviceName) {

    if (!serviceModal) return;

    const service = serviceInformation[serviceName];

    if (!service) return;


    serviceModalLabel.textContent =
        service.label;

    serviceModalTitle.textContent =
        service.title;

    serviceModalDescription.textContent =
        service.description;

    serviceModalNote.textContent =
        service.note;


    serviceModalList.innerHTML = "";


    service.items.forEach((item) => {

        const itemElement =
            document.createElement("div");

        itemElement.textContent = item;

        serviceModalList.appendChild(itemElement);

    });


    serviceModal.classList.add("active");

    serviceModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow = "hidden";


    setTimeout(() => {

        if (serviceModalClose) {
            serviceModalClose.focus();
        }

    }, 50);
}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeServiceModal() {

    if (!serviceModal) return;

    serviceModal.classList.remove("active");

    serviceModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow = "";
}


/* =========================================================
   LEARN MORE BUTTONS
========================================================= */

document
    .querySelectorAll(".service-learn-more")
    .forEach((button) => {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            const serviceName =
                button.dataset.service;

            openServiceModal(serviceName);

        });

    });


/* =========================================================
   CLOSE BUTTON
========================================================= */

if (serviceModalClose) {

    serviceModalClose.addEventListener(
        "click",
        closeServiceModal
    );

}


/* =========================================================
   CLICK OUTSIDE
========================================================= */

if (serviceModal) {

    serviceModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === serviceModal
            ) {

                closeServiceModal();

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            serviceModal &&
            serviceModal.classList.contains("active")
        ) {

            closeServiceModal();

        }

    }
);


/* =========================================================
   CLOSE MODAL WHEN GET A QUOTE IS CLICKED
========================================================= */

if (serviceModalQuote) {

    serviceModalQuote.addEventListener(
        "click",
        () => {

            closeServiceModal();

        }
    );

}