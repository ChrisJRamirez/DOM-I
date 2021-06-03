const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// adding in NAV bar
let navBar = document.querySelectorAll("nav a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"]
navBar[5].textContent = siteContent["nav"]["nav-item-6"];


//adding in header image of code
let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"])



//adding in code snippets across the screen
let snippetImage = document.getElementById("middle-img");
snippetImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//adding in H1 dom is awesome
// let headerText = document.getElementsByTagName("h1");
// headerText[0].textContent = siteContent["cta"]["h1"]
let h1Text = document.querySelector("h1");
let h1Split = siteContent["cta"]["h1"].split(" ").join("<br>")
h1Text.innerHTML = h1Split


// adding get started inside border box
let getStartedBox = document.getElementsByTagName("button");
getStartedBox[0].textContent = siteContent["cta"]["button"]


// adding titles to content paragraphs
let textTitles = document.querySelectorAll(".main-content h4");
console.log(textTitles[0]);
textTitles[0].textContent = siteContent["main-content"]["features-h4"];
textTitles[1].textContent = siteContent["main-content"]["about-h4"];
textTitles[2].textContent = siteContent["main-content"]["services-h4"];
textTitles[3].textContent = siteContent["main-content"]["product-h4"];
textTitles[4].textContent = siteContent["main-content"]["vision-h4"];



// adding in text box paragraphs
let textParagraphs = document.querySelectorAll(".text-content p");
textParagraphs[0].textContent = siteContent["main-content"]["features-content"];
textParagraphs[1].textContent = siteContent["main-content"]["about-content"];
textParagraphs[2].textContent = siteContent["main-content"]["services-content"];
textParagraphs[3].textContent = siteContent["main-content"]["product-content"];
textParagraphs[4].textContent = siteContent["main-content"]["vision-content"];


//adding in contact title
let contactTitles = document.querySelector(".contact h4");
contactTitles.textContent = siteContent["contact"]["contact-h4"];

// adding in bottom contact info
let contactInfo = document.querySelectorAll(".contact p")
//console.log(contactInfo);
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];



// adding footer
let footerText = document.getElementsByTagName("footer");
footerText[0].textContent = siteContent["footer"]["copyright"]