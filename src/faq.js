import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

// document.addEventListener("DOMContentLoaded", () => {
//   new Accordion(".accordion", {
//     duration: 300,
//     showMultiple: false,
//     openOnInit: [0],
//   });
// });

//

document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
        const header = item.querySelector(".faq-header");
        const button = item.querySelector(".accordion-btn");
        const content = item.querySelector(".accordion-content");
        const openIcon = button.querySelector(".faq-btn-close");
        const closeIcon = button.querySelector(".faq-btn-open");

        // Встановлення початкового стану
        if (!item.classList.contains("active")) {
            content.style.maxHeight = "0";
            content.style.opacity = "0";
            content.style.overflow = "hidden";
            openIcon.style.display = "block";
            closeIcon.style.display = "none";
        }

        header.addEventListener("click", () => {
            // Закриття всіх інших елементів
            accordionItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                    const otherContent = otherItem.querySelector(".accordion-content");
                    const otherButton = otherItem.querySelector(".accordion-btn");
                    const otherOpenIcon = otherButton.querySelector(".faq-btn-open");
                    const otherCloseIcon = otherButton.querySelector(".faq-btn-close");

                    otherContent.style.maxHeight = "0";
                    otherContent.style.opacity = "0";
                    otherContent.style.overflow = "hidden";
                    otherOpenIcon.style.display = "block";
                    otherCloseIcon.style.display = "none";
                }
            });

            // Перемикання поточного елемента
            const isActive = item.classList.contains("active");

            if (isActive) {
                item.classList.remove("active");
                content.style.maxHeight = "0";
                content.style.opacity = "0";
                content.style.overflow = "hidden";
                openIcon.style.display = "block";
                closeIcon.style.display = "none";
            } else {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = "1";
                openIcon.style.display = "none";
                closeIcon.style.display = "block";
            }
        });
    });

    // Відкриття першого елемента за замовчуванням
    const firstItem = accordionItems[0];
    if (firstItem) {
        const firstContent = firstItem.querySelector(".accordion-content");
        const firstButton = firstItem.querySelector(".accordion-btn");
        const firstOpenIcon = firstButton.querySelector(".faq-btn-open");
        const firstCloseIcon = firstButton.querySelector(".faq-btn-close");

        firstItem.classList.add("active");
        firstContent.style.maxHeight = firstContent.scrollHeight + "px";
        firstContent.style.opacity = "1";
        firstOpenIcon.style.display = "none";
        firstCloseIcon.style.display = "block";
    }
});
