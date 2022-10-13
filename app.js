const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav_links");
const overlay = document.querySelector(".overlay");
const mainThumbnail = document.querySelector(".main-thumbnail");
const mainThumbnailLightBox = document.querySelector(
  ".lightbox-container .main-thumbnail"
);
const images = document.querySelectorAll(".preview img");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const amount = document.querySelector(".amount");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const slider = document.querySelector(".mobile-thumb");
const thumbMob = document.querySelector(".thumb-mob");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart-wrp");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
let amountValue = 0;
let img = 1;

function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active")
}
function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active")
}
function handlePlus() {
    amountValue++;
    amount.innerText = amountValue;
}
function handleMinus() {
    if (amountValue > 0) {
       amountValue--;
    }
    amount.innerText = amountValue;
}
function nextImage() {
    if (img == 4) {
        img=1
    } else {
        img++
    }
    thumbMob.src = `./images/image-product-${img}.jpg`;
}
function prevImage() {
    if (img == 1) {
        img=4
    } else {
        img--
    }
    thumbMob.src = `./images/image-product-${img}.jpg`;
}
function toggleCart() {
    cart.classList.toggle("invisible");
}
function closeLightBox() {
    lightbox.classList.add("invisible")
}
function openLightBox() {
    lightbox.classList.remove("invisible")
}

images.forEach((image) => {
    image.addEventListener("click", () => {
        const lastImg = document.querySelectorAll(".selected");
        if (lastImg) {
            lastImg[0].classList.remove("selected")
        }
        image.classList.add("selected");
        const selectedImg = document.querySelector(".selected");
        switch (selectedImg.getAttribute("src")) {
          case "./images/image-product-1-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-1.jpg";
                mainThumbnailLightBox.src = "./images/image-product-1.jpg";
            break;
            case "./images/image-product-2-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-2.jpg";
                mainThumbnailLightBox.src = "./images/image-product-2.jpg";
                break;
            case "./images/image-product-3-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-3.jpg";
                mainThumbnailLightBox.src = "./images/image-product-3.jpg";
                break;
            case "./images/image-product-4-thumbnail.jpg":
                mainThumbnail.src = "./images/image-product-4.jpg";
                mainThumbnailLightBox.src = "./images/image-product-4.jpg";
                break;
        }
        
    })
})


menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
cartBtn.addEventListener("click", toggleCart);
closeLightboxBtn.addEventListener("click", closeLightBox);
mainThumbnail.addEventListener("click",openLightBox)