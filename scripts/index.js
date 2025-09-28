const plane = document.querySelector(".plane");
const giftBox = document.querySelector(".gift-box");
const giftBoxTop = document.querySelector(".gift-box__top");
const giftBoxBottom = document.querySelector(".gift-box__bottom");
const gift1 = document.querySelector(".gift-1");
const gift2 = document.querySelector(".gift-2");
const intro = document.querySelector(".intro");
const arrow = document.querySelector(".arrow");

const init = () => {
    setTimeout(() => {
            intro.classList.add("hide");
    }, 3000);
}

const animateBox = () => {

    giftBox.classList.add("gift-box__open");
    arrow.style.filter = "opacity(0)";

    setTimeout(() => {
            gift1.classList.add("show");
    }, 2000);

    setTimeout(() => {
            gift2.classList.add("show");
    }, 4500);

}

giftBox.addEventListener("click", animateBox);

init();