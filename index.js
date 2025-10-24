const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

const products = [
  {
    image: "laminated.webp",
    name: "Laminated Wooden Flooring",
    description: "Scratch-resistant and affordable flooring that mimics the look of real wood.",
  },
  {
    image: "spc.webp",
    name: "SPC Flooring",
    description: "Stone Plastic Composite flooring offering 100% water resistance and durability.",
  },
  {
    image: "engineering.webp",
    name: "Engineered Wood Flooring",
    description: "Multi-layered wood flooring that provides the elegance of hardwood with added stability.",
  },
  {
    image: "solidwood.webp",
    name: "Solid Wood Flooring",
    description: "Authentic hardwood flooring that adds warmth, character, and long-lasting beauty.",
  },
  {
    image: "wpc.webp",
    name: "WPC Deck Flooring",
    description: "Weatherproof WPC decking ideal for outdoor patios, balconies, and gardens.",
  },
  {
    image: "wallpaper.webp",
    name: "Wallpaper Normal & Customized ",
    description: "Premium wallpapers available in modern, classic, and textured designs for every interior.",
  },
  {
    image: "ipe.webp",
    name: "IPE Deck Flooring",
    description: "High-density hardwood decking known for extreme durability and natural beauty.",
  },
  {
    image: "louvers.webp",
    name: "Louvers Interior & Exterior",
    description: "Contemporary louver designs that enhance ventilation and elevate architectural appeal.",
  },
  {
    image: "blinds.webp",
    name: "Window Blinds",
    description: "Elegant and functional blinds for perfect light control and privacy.",
  },
  {
    image: "lvt.webp",
    name: "LVT Vinyl Flooring",
    description: "Luxury Vinyl Tiles offering high durability, easy maintenance, and realistic wood textures.",
  },
  {
    image: "soffit.webp",
    name: "Soffit Panel",
    description: "Durable panels used for ceilings and eaves, ensuring protection and a clean finish.",
  },
  {
    image: "sheera.webp",
    name: "Shera Plank",
    description: "Fiber cement planks that provide a natural wood look with superior weather resistance.",
  },
  {
    image: "hpl.webp",
    name: "HPL Cladding",
    description: "High-pressure laminate cladding ideal for exterior facades with UV and weather protection.",
  },
  {
    image: "curtain.webp",
    name: "Window Curtains",
    description: "Stylish curtains that add warmth, texture, and privacy to your living spaces.",
  },
  {
    image: "sofa.webp",
    name: "Sofa",
    description: "Comfortable, modern sofas designed to complement any living room decor.",
  },
];


const container = document.getElementById("products-row");

// Duplicate items for seamless loop
const doubledProducts = [...products, ...products];

container.innerHTML = doubledProducts.map(p => `
  <div class="product-card">
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.description}</p>
  </div>
`).join('');


const heroBtn = document.getElementById('herobtn')
heroBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const targetSection = document.getElementById("products-container");
  const y = targetSection.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
});



const home = document.getElementById('Home');
const product = document.getElementById('Products');
const choose = document.getElementById('Choose');
const contact = document.getElementById('Contact');


home.onclick = () => {
    const targetSection = document.getElementById('hero');
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

product.onclick = () => {
    const targetSection = document.getElementById('products-section');
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

choose.onclick = () => {
    const targetSection = document.getElementById('whychooseus');
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

contact.onclick = () => {
  const targetSection = document.getElementById('contactus');
  targetSection.scrollIntoView({behavior:"smooth"});
}


const contactBtn = document.getElementById('contact-btn');
contactBtn.onclick = () => {
  const phoneNumber = '+91 9886661249';
  window.location.href = `tel:${phoneNumber}`;
}