import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", () => {
  new Accordion(".accordion", {
    duration: 300,
    showMultiple: false,
    openOnInit: [0], 
  });
});