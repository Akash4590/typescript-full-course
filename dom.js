"use strict";
const headingEl = document.querySelector("h1");
const anchorElement = document.querySelector("a");
const classElement = document.querySelector(".anchorstyle");
if (headingEl) {
    console.log("Heading element:", headingEl);
    console.log("Heading classes:", headingEl.classList);
}
if (anchorElement) {
    console.log("Anchor element:", anchorElement);
    console.log("Anchor href:", anchorElement.getAttribute("href"));
    console.log("Anchor classes:", anchorElement.classList);
}
if (classElement) {
    console.log("Class selector result:", classElement);
}
else {
    console.log("No element found with class .anchorstyle");
}
//# sourceMappingURL=dom.js.map