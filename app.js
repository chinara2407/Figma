$('#carousel1').owlCarousel({
    loop: true,
    margin: 10,
    dots: null,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1050,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('#carousel2').owlCarousel({
    // navText:['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    loop: true,
    margin: 10,
    dots: null,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1050,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('#carousel3').owlCarousel({
    // navText:['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    loop: true,
    margin: 10,
    dots: null,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1050,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('#carousel4').owlCarousel({
    // navText:['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    loop: true,
    margin: 10,
    dots: null,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1050,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('#carousel5').owlCarousel({
    // navText:['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    loop: true,
    margin: 10,
    dots: null,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1050,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
let secim1 = document.querySelector("#secim1")
let secim2 = document.querySelector("#secim2")
let secim3 = document.querySelector("#secim3")
let secim4 = document.querySelector("#secim4")
secim1.addEventListener("click", e => {
    secim1.classList.add("active1");
    secim2.classList.remove("active1");
    secim3.classList.remove("active1");
    secim4.classList.remove("active1");
})
secim2.addEventListener("click", e => {
    secim1.classList.remove("active1");
    secim2.classList.add("active1");
    secim3.classList.remove("active1");
    secim4.classList.remove("active1");
})
secim3.addEventListener("click", e => {
    secim1.classList.remove("active1");
    secim2.classList.remove("active1");
    secim3.classList.add("active1");
    secim4.classList.remove("active1");
})
secim4.addEventListener("click", e => {
    secim2.classList.remove("active1");
    secim1.classList.remove("active1");
    secim3.classList.remove("active1");
    secim4.classList.add("active1");
})

let size1 = document.querySelector("#size1")
let size2 = document.querySelector("#size2")
let size3 = document.querySelector("#size3")
size1.addEventListener("click", e => {
    size1.classList.add("coloractive")
    size2.classList.remove("coloractive")
    size3.classList.remove("coloractive")
})
size2.addEventListener("click", e => {
    size2.classList.add("coloractive")
    size1.classList.remove("coloractive")
    size3.classList.remove("coloractive")
})
size3.addEventListener("click", e => {
    size3.classList.add("coloractive")
    size2.classList.remove("coloractive")
    size1.classList.remove("coloractive")
})
let brown = document.querySelector("#brown")
let blue = document.querySelector("#blue")
let green = document.querySelector("#green")
let red = document.querySelector("#red")
brown.addEventListener("click", e => {
    brown.classList.add("activecol")
    blue.classList.remove("activecol")
    green.classList.remove("activecol")
    red.classList.remove("activecol")
})
blue.addEventListener("click", e => {
    brown.classList.remove("activecol")
    blue.classList.add("activecol")
    green.classList.remove("activecol")
    red.classList.remove("activecol")
})
green.addEventListener("click", e => {
    brown.classList.remove("activecol")
    blue.classList.remove("activecol")
    green.classList.add("activecol")
    red.classList.remove("activecol")
})
red.addEventListener("click", e => {
    brown.classList.remove("activecol")
    blue.classList.remove("activecol")
    green.classList.remove("activecol")
    red.classList.add("activecol")
})
// $('.review').click(function () {
//     $('.sec2Cards').slideToggle(500);
// })
let review = document.querySelector(".review")
let sec2Text = document.querySelector(".sec2Text")
let sec2Cards = document.querySelector(".sec2Cards")
let prod = document.querySelector(".prod")

review.addEventListener("click", e => {
    sec2Text.classList.add("sec2Text")
    sec2Cards.classList.add("sec2active")
})
prod.addEventListener("click" , e => {
   sec2Cards.classList.remove("sec2active")
    sec2Text.classList.add("sec2txtactive")
 })

 let product1 = [
     {
         id:1,
         description: "Shoulder Bag Leather Bag Leather undertakes laborious physical physical",
         price: 130,
         fpric: 340
     }
     ,
     {
        id:2,
        description: "Shoulder Bag Leather Bag Leather undertakes laborious physical physical",
        price: 130,
        fpric: 340
    }
    ,
    {
        id:3,
        description: "Shoulder Bag Leather Bag Leather undertakes laborious physical physical",
        price: 130,
        fpric: 340
    }
    ,
    {
        id:4,
        description: "Shoulder Bag Leather Bag Leather undertakes laborious physical physical",
        price: 130,
        fpric: 340
    }

 ]











































































































