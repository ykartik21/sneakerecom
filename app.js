//Products Array
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

//Slider Manipulation
//Choosen Product
let choosenProduct = products[0];

const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-bottom");
//Slecting Product Details Sections
const currentImg = document.querySelector(".product-img");
const currentPrice = document.querySelector(".product-price");
const currentTitle = document.querySelector(".product-title");
const currentColors = document.querySelectorAll(".color");
const currentSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    //Change Current Slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //Change Choosen Product
    choosenProduct = products[index];

    //Change Html properties of choosen products
    currentTitle.textContent = choosenProduct.title;
    currentPrice.textContent = "$ " + choosenProduct.price;
    currentImg.src = choosenProduct.colors[0].img;

    //Assigning New Colors
    currentColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

///Current Product Colors

currentColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentImg.src = choosenProduct.colors[index].img;
  });
});

//Current Product Size

currentSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentSizes.forEach((item) => {
      item.style.backgroundColor = "white";
      item.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

//Modal
const productBtn = document.querySelector(".product-button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productBtn.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
