console.log("reviews.js loaded");

const googleReviews = [

{
    name:"Ali Khan",
    avatar:"A",
    stars:"★★★★★",
    subtitle:"Local Guide • 35 reviews",
    badge:"✓ Verified Purchase",
    text:"Excellent service. Built my gaming PC perfectly."
},

{
    name:"Hamza",
    avatar:"H",
    stars:"★★★★★",
    subtitle:"18 reviews",
    badge:"✓ Verified Purchase",
    text:"Best gaming PC shop in Peshawar."
},

{
    name:"Ahmed",
    avatar:"A",
    stars:"★★★★★",
    subtitle:"12 reviews",
    badge:"✓ Verified Purchase",
    text:"Professional staff and genuine hardware."
},

{
    name:"Bilal",
    avatar:"B",
    stars:"★★★★★",
    subtitle:"Local Guide • 22 reviews",
    badge:"✓ Verified Purchase",
    text:"Amazing workstation build."
},

{
    name:"Usman",
    avatar:"U",
    stars:"★★★★★",
    subtitle:"9 reviews",
    badge:"✓ Verified Purchase",
    text:"Highly recommended for gamers."
}

];

const facebookReviews = [

{
    name:"Zeeshan",
    avatar:"Z",
    title:"Recommends GameTech",
    badge:"👍 Recommended",
    text:"Very professional team. Highly recommended."
},

{
    name:"Sajid",
    avatar:"S",
    title:"Recommends GameTech",
    badge:"👍 Recommended",
    text:"Excellent customer support."
},

{
    name:"Adeel",
    avatar:"A",
    title:"Recommends GameTech",
    badge:"👍 Recommended",
    text:"Built my RTX gaming PC flawlessly."
},

{
    name:"Jawad",
    avatar:"J",
    title:"Recommends GameTech",
    badge:"👍 Recommended",
    text:"Fast delivery and genuine products."
},

{
    name:"Shahbaz",
    avatar:"S",
    title:"Recommends GameTech",
    badge:"👍 Recommended",
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

                <div>

                    <h4>${review.name}</h4>

                    <small>${review.subtitle}</small>

                </div>

            </div>

            <span class="stars">${review.stars}</span>

        </div>

        <p>${review.text}</p>

        <div class="review-badge">${review.badge}</div>

    </div>
    `;

}

function createFacebookReview(review){

    return `
    <div class="review-card">

        <div class="review-user">

            <div class="avatar">
                ${review.avatar}
            </div>

            <div>

                <h4>${review.name}</h4>

                <small>${review.title}</small>

            </div>

        </div>

        <p>${review.text}</p>

        <div class="review-badge">${review.badge}</div>

    </div>
    `;

}

const googleTrack = document.querySelector(".google-panel .reviews-track");

if (googleTrack) {
    googleTrack.innerHTML = `
    <div class="reviews-inner">
        ${googleReviews.concat(googleReviews).map(createGoogleReview).join("")}
    </div>
    `;
}

const facebookTrack = document.querySelector(".facebook-panel .reviews-track");

if (facebookTrack) {
    facebookTrack.innerHTML = `
    <div class="reviews-inner">
        ${facebookReviews.concat(facebookReviews).map(createFacebookReview).join("")}
    </div>
    `;
}