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
        label: "GENERAL CLEANING",
        title: "General Cleaning",

        description: "Perfect for regular maintenance and keeping your home fresh, clean, and comfortable.",

        items: [
            "Dusting furniture, shelves, windowsills, and surfaces",
            "Wiping tables, countertops, and accessible surfaces",
            "Vacuuming carpets, rugs, and floors",
            "Mopping hard floors",
            "Cleaning mirrors",
            "Cleaning kitchen countertops and backsplash",
            "Cleaning sink and faucet",
            "Wiping appliance exteriors",
            "Wiping cabinet exteriors",
            "Cleaning stovetop",
            "Cleaning bathroom sinks, toilets, showers, and bathtubs",
            "Wiping bathroom fixtures",
            "Emptying garbage bins",
            "Light tidying and final touch-ups",
            "Heavy buildup, inside appliances, inside cabinets, and detailed deep cleaning are not included."
        ]
    },


    deep: {
        icon: "🧽",
        label: "DEEP CLEANING",
        title: "Deep Cleaning",

        description: "A detailed top-to-bottom cleaning for homes that need extra attention.",

        items: [
            "Includes everything in General Cleaning, PLUS:",
            "Detailed cleaning of baseboards",
            "Cleaning doors, door frames, and handles",
            "Wiping light switches and outlet covers",
            "Detailed kitchen cleaning",
            "Degreasing kitchen surfaces",
            "Detailed cleaning of cabinet exteriors",
            "Removing heavier soap scum and buildup in bathrooms",
            "Detailed cleaning of showers, bathtubs, toilets, and sinks",
            "Cleaning reachable light fixtures",
            "Detailed dusting of furniture and surfaces",
            "Cleaning windowsills, window frames, and tracks",
            "Interior window cleaning only",
            "Cleaning behind and underneath easily movable furniture",
            "Extra attention to corners, edges, and hard-to-reach areas",
            "Window blinds are cleaned by prior agreement only.",
            "Optional add-ons: inside oven, inside refrigerator, and inside cabinets."
        ]
    },


    move: {
        icon: "🏠",
        label: "MOVE-IN / MOVE-OUT CLEANING",
        title: "Move-In / Move-Out Cleaning",

        description: "A thorough cleaning of an empty or mostly empty property before moving in or after moving out.",

        items: [
            "Detailed cleaning of all rooms",
            "Vacuuming and mopping all floors",
            "Cleaning baseboards",
            "Cleaning doors, door frames, and handles",
            "Cleaning windowsills and tracks",
            "Cleaning closets and shelving",
            "Cleaning inside cabinets and drawers",
            "Cleaning kitchen countertops and backsplash",
            "Cleaning sink and faucet",
            "Cleaning kitchen cabinets inside and outside",
            "Cleaning stovetop",
            "Wiping appliance exteriors",
            "Detailed bathroom cleaning",
            "Cleaning showers, bathtubs, toilets, and sinks",
            "Cleaning mirrors and fixtures",
            "Wiping light switches and reachable light fixtures",
            "Removing dust and buildup throughout the property",
            "Final cleaning and inspection of all rooms",
            "Optional add-ons: inside oven, inside refrigerator, and interior window cleaning."
        ]
    },


    airbnb: {
        icon: "✦",
        label: "AIRBNB / VACATION RENTAL CLEANING",
        title: "Airbnb / Vacation Rental Cleaning",

        description: "Professional turnover cleaning to prepare your property for the next guests.",

        items: [
            "Cleaning and sanitizing bathrooms",
            "Cleaning kitchen surfaces",
            "Cleaning sink, countertops, and backsplash",
            "Cleaning stovetop and appliance exteriors",
            "Wiping tables and frequently touched surfaces",
            "Dusting furniture and surfaces",
            "Vacuuming carpets and floors",
            "Mopping hard floors",
            "Cleaning mirrors",
            "Emptying garbage and replacing garbage bags",
            "Making beds with clean linens provided",
            "Tidying and arranging rooms for incoming guests",
            "Checking commonly used guest areas",
            "Final presentation check before guest arrival",
            "Optional services: laundry, washing and drying linens, restocking guest supplies, inside refrigerator or oven cleaning, and other property-specific requests."
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