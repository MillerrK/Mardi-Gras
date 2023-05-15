let sponsors = [
    {
        name: "The Ritz- Carlton, New Orleans",
        link: "https://www.ritzcarlton.com/en/hotels/new-orleans",
        image: "images/ritzCarlton.jpg",
        navigation: "https://goo.gl/maps/Q1HnhEoXHii8ybMY7",
        description: "",
    },
    {
        name: "Sheraton New Orleans Hotel",
        link: "https://www.guestreservations.com/sheraton-new-orleans/",
        image: "images/the-sheraton-new-orleans.jpg",
        navigation: "",
        description: "",
    },
    {
        name: "Ace Hotel New Orleans",
        link: "https://acehotel.com/new-orleans/",
        image: "images/aceHotel.jpg",
        navigation: "https://goo.gl/maps/WW6HPa5hErFhNAxB8",
        description: "",
    },
    {
        name: "Walk-On's Bistreaux and Bar",
        link: "https://walk-ons.com/",
        image: "images/walkOns.jpg",
        navigation: "",
        description: "",
    },
    {
        name: "Premium Parking - P402",
        link: "https://www.premiumparking.com/P402",
        image: "images/Premium_Parking_Logo.jpg",
        navigation: "",
        description: "",
    },
    {
        name: "Louisiana Children's Museum",
        link: "https://lcm.org/",
        image: "images/LCM.jpg",
        navigation: "",
        description: "",
    },
    {
        name: "Museum of Death",
        link: "http://www.museumofdeath.net/",
        image: "images/modno.jpg",
        navigation: "",
        description: "",
    },
    {
        name: "Haunted Museum",
        link: "https://www.bloodymarystours.com/hauntedmuseum.html",
        image: "images/aunted-museum700.png",
        navigation: "",
        description: "",
    },
];

function openCards() {
    for (let i = 0; i < sponsors.length; i++) {
        document.getElementById("sponsors").innerHTML +=
            `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5">
                <div class="card">
                    <img src=${sponsors[i].image} class="card-img-top" alt=${sponsors[i].name}>
                    <div class="card-body">
                        <h5 class="card-title">${sponsors[i].name}</h5>
                        <p class="card-text">${sponsors[i].link}</p>
                    </div>
                    <a data-bs-toggle="modal" data-bs-target="#infoSponsors" class="btn w-100"
                    onclick="openModal(${i})">See more</a>
                </div>
            </div>`;
    }
};
openCards();

let link;

function openModal(index) {
    document.getElementById("header").innerText = sponsors[index].name;
    document.getElementById("description").innerHTML =
        `<p><b>Link:</b> ${sponsors[index].link}</p>
        <p><b>Navigation:</b> ${sponsors[index].navigation}</p>
        <p><b>Description:</b> ${sponsors[index].description}</p>
        `;
    link = sponsors[index].link;
};

function goToSite() {
    window.open(link, "_blank");
}