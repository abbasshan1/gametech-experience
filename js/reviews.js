console.log("reviews.js loaded");

const googleReviews = [
{
    name:"Ali Khan",
    avatar:"A",
    stars:"★★★★★",
    text:"Excellent service. Built my gaming PC perfectly."
},
{
    name:"Hamza",
    avatar:"H",
    stars:"★★★★★",
    text:"Best gaming PC shop in Peshawar."
},
{
    name:"Ahmed",
    avatar:"A",
    stars:"★★★★★",
    text:"Professional staff and genuine hardware."
},
{
    name:"Bilal",
    avatar:"B",
    stars:"★★★★★",
    text:"Amazing workstation build."
},
{
    name:"Usman",
    avatar:"U",
    stars:"★★★★★",
    text:"Highly recommended for gamers."
}
];

const facebookReviews = [
{
    name:"Zeeshan",
    avatar:"Z",
    text:"Recommended. Very professional."
},
{
    name:"Sajid",
    avatar:"S",
    text:"Excellent customer support."
},
{
    name:"Adeel",
    avatar:"A",
    text:"Built my RTX gaming PC flawlessly."
},
{
    name:"Jawad",
    avatar:"J",
    text:"Fast delivery and genuine products."
},
{
    name:"Shahbaz",
    avatar:"S",
    text:"Best computer store in KPK."
}
];

function createGoogleReview(review){

    return `
    <div class="review-card">

        <div class="review-header">

            <div class="review-user">

                <div class="avatar">
                    ${review.avatar}
                </div>

                <h4>${review.name}</h4>

            </div>

            <span class="stars">${review.stars}</span>

        </div>

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

const googleTrack = document.querySelector(".google-panel .reviews-track");

googleTrack.innerHTML = `
<div class="reviews-inner">
    ${googleReviews.concat(googleReviews).map(createGoogleReview).join("")}
</div>
`;

const facebookTrack = document.querySelector(".facebook-panel .reviews-track");

facebookTrack.innerHTML = `
<div class="reviews-inner">
    ${facebookReviews.concat(facebookReviews).map(createFacebookReview).join("")}
</div>
`;