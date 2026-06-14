/* ==========================
   FOOD DATA
========================== */

const foods = [
{
    image:"./assets/unsplash_MqT0asuoIcU.png",
    title:"Home made pizza",
    price:"₹190",
    rating:"4.7",
    time:"50-79 min"
},
{
    image:"./assets/unsplash_MqT0asuoIcU-1.png",
    title:"Home made pizza",
    price:"₹123",
    rating:"4.3",
    time:"50-79 min"
},
{
    image:"./assets/unsplash_UxRhrU8fPHQ.png",
    title:"Home made pizza",
    price:"₹190",
    rating:"4.7",
    time:"50-79 min"
},
{
    image:"./assets/unsplash_CbNAuxSZTFo.png",
    title:"Home made pizza",
    price:"₹190",
    rating:"4.7",
    time:"50-79 min"
},
{
    image:"./assets/unsplash_nP11TkjxJ7s.png",
    title:"Home made pizza",
    price:"$19",
    rating:"4.7",
    time:"50-79 min"
},
{
    image:"./assets/unsplash_Y6OgisiGBjM.png",
    title:"Home made pizza",
    price:"₹190",
    rating:"4.7",
    time:"50-79 min"
},
{
    image:"./assets/unsplash_sejqj6Eaqe8.png",
    title:"Home made pizza",
    price:"₹190",
    rating:"4.7",
    time:"50-79 min"
},
{
    image:"./assets/unsplash_60nzTP7_hMQ.png",
    title:"Home made pizza",
    price:"₹190",
    rating:"4.7",
    time:"50-79 min"
},
{
    image:"./assets/pexels-omar-mahmood-106343 1.png",
    title:"Home made pizza",
    price:"$19",
    rating:"4.7",
    time:"50-79 min"
},
{
    image:"./assets/unsplash_33GPuoFI7v8.png",
    title:"Home made pizza",
    price:"₹190",
    rating:"4.7",
    time:"50-79 min"
},
{
    image:"./assets/unsplash_CbNAuxSZTFo.png",
    title:"Home made pizza",
    price:"₹190",
    rating:"4.7",
    time:"50-79 min"
},
{
    image:"./assets/unsplash_UxRhrU8fPHQ.png",
    title:"Home made pizza",
    price:"₹190",
    rating:"4.7",
    time:"50-79 min"
}
];

/* ==========================
   HOME KITCHEN CARDS
========================== */

const foodGrid = document.getElementById("foodGrid");

foods.forEach(food => {

foodGrid.innerHTML += `
<div class="food-card">

    <img
        src="${food.image}"
        alt="${food.title}"
        class="food-image">

    <div class="food-content">

        <div class="food-title-row">

            <h4 class="food-title">
                ${food.title}
            </h4>

            <span class="food-price">
                ${food.price}
            </span>

        </div>

        <div class="food-meta">

            <div class="rating">

                <img
                src="./assets/ant-design_star-filled.svg"
                alt="star">

                <span>
                    ${food.rating}
                </span>

            </div>

            <span class="time">
                ${food.time}
            </span>

            <button class="add-btn">
                +
            </button>

        </div>

    </div>

</div>
`;

});

/* ==========================
   POPULAR ITEMS
========================== */


/* ==========================
   SWIPER
========================== */


/* ==========================
   MODAL
========================== */

const modal =
document.getElementById("imageModal");

const playBtn =
document.getElementById("playBtn");

const closeBtn =
document.getElementById("closeModal");

playBtn.addEventListener("click", () => {

    modal.style.display = "block";

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

/* ==========================
   CONTACT FORM
========================== */

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
        "Thank you! Your message has been submitted."
    );

    contactForm.reset();

});

/* ==========================
   SEARCH BUTTON
========================== */

const searchButton =
document.querySelector(".search-container button");

searchButton.addEventListener("click",()=>{

    const value =
    document.querySelector(
    ".search-container input"
    ).value;

    if(value.trim() !== ""){

        alert(`Searching for: ${value}`);

    }

});

const requestBtn = document.querySelector(".request-btn");
const dishModal = document.getElementById("dishModal");
const cancelBtn = document.getElementById("cancelBtn");
const dishForm = document.getElementById("dishForm");

requestBtn.addEventListener("click", () => {
    dishModal.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
    dishModal.style.display = "none";
});

dishForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Request submitted successfully!");

    dishForm.reset();
    dishModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === dishModal){
        dishModal.style.display = "none";
    }
});

const swiper = new Swiper(".popularSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev"
    },

    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
