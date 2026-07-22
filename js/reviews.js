console.log("reviews.js loaded");

const googleReviews = [
{
    name:"Ali Khan",
    stars:"★★★★★",
    text:"Excellent service. Built my gaming PC perfectly."
},
{
    name:"Hamza",
    stars:"★★★★★",
    text:"Best gaming PC shop in Peshawar."
},
{
    name:"Ahmed",
    stars:"★★★★★",
    text:"Professional staff and genuine hardware."
},
{
    name:"Bilal",
    stars:"★★★★★",
    text:"Amazing workstation build."
},
{
    name:"Usman",
    stars:"★★★★★",
    text:"Highly recommended for gamers."
}
];

const facebookReviews = [
{
    name:"Zeeshan",
    text:"Recommended. Very professional."
},
{
    name:"Sajid",
    text:"Excellent customer support."
},
{
    name:"Adeel",
    text:"Built my RTX gaming PC flawlessly."
},
{
    name:"Jawad",
    text:"Fast delivery and genuine products."
},
{
    name:"Shahbaz",
    text:"Best computer store in KPK."
}
];

function createGoogleReview(review){

    return `
    <div class="review-card">
        <h4>${review.name}</h4>
        <div class="stars">${review.stars}</div>
        <p>${review.text}</p>
    </div>
    `;

}

function createFacebookReview(review){

    return `
    <div class="review-card">
        <h4>${review.name}</h4>
        <p>👍 ${review.text}</p>
    </div>
    `;

}

document.querySelector(".google-panel .reviews-track").innerHTML =
googleReviews.concat(googleReviews)
.map(createGoogleReview)
.join("");

document.querySelector(".facebook-panel .reviews-track").innerHTML =
facebookReviews.concat(facebookReviews)
.map(createFacebookReview)
.join("");