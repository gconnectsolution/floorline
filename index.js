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
    image: "./WhatsApp Image 2025-10-24 at 12.32.45 PM (1).jpeg",
    name: "SPC Flooring",
    description: "Stone Plastic Composite flooring offering 100% water resistance and durability.",
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.47 PM (2).jpeg",
    name: "Engineered Wood Flooring",
    description: "Multi-layered wood flooring that provides the elegance of hardwood with added stability.",
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.43 PM.jpeg",
    name: "Solid Wood Flooring",
    description: "Authentic hardwood flooring that adds warmth, character, and long-lasting beauty.",
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.42 PM (1).jpeg",
    name: "WPC Deck Flooring",
    description: "Weatherproof WPC decking ideal for outdoor patios, balconies, and gardens.",
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.47 PM (1).jpeg",
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
    image: "./WhatsApp Image 2025-10-24 at 12.32.59 PM (2).jpeg",
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
    image: "./WhatsApp Image 2025-10-24 at 12.32.51 PM (1).jpeg",
    name: "Window Curtains",
    description: "Stylish curtains that add warmth, texture, and privacy to your living spaces.",
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.54 PM (1).jpeg",
    name: "Sofa",
    description: "Comfortable, modern sofas designed to complement any living room decor.",
  },
];

const container = document.getElementById("products-row");

// Duplicate products for seamless looping
const doubledProducts = [...products, ...products];

container.innerHTML = doubledProducts.map(p => `
  <div class="product-card">
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.description}</p>
  </div>
`).join("");

// Auto-scroll using transform for iOS compatibility
let position = 0;
const speed = 0.3; // Adjust scroll speed (pixels/frame)

function scrollLoop() {
  position -= speed;
  const totalWidth = container.scrollWidth / 2;

  // Reset back to start seamlessly
  if (Math.abs(position) >= totalWidth) {
    position = 0;
  }

  container.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(scrollLoop);
}

// Start animation after a short delay
setTimeout(scrollLoop, 300);

const heroBtn = document.getElementById('herobtn')

heroBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSectionWithOffset('products-section', 100);
});


// Helper function for smooth scroll with offset
function scrollToSectionWithOffset(id, offset = 100) {
  const element = document.getElementById(id);
  if (!element) return;
  const y = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

// Desktop navigation
const home = document.getElementById('Home');
const product = document.getElementById('Products');
const choose = document.getElementById('Choose');
const contact = document.getElementById('Contact');

// Mobile navigation
const homeMb = document.getElementById('Home-mobile');
const productMb = document.getElementById('Products-mobile');
const chooseMb = document.getElementById('Choose-mobile');
const contactMb = document.getElementById('Contact-mobile');

// Desktop clicks
home.onclick = () => scrollToSectionWithOffset('hero', 100);
product.onclick = () => scrollToSectionWithOffset('products-section', 100);
choose.onclick = () => scrollToSectionWithOffset('whychooseus', 100);
contact.onclick = () => scrollToSectionWithOffset('contactus', 80);

// Mobile clicks
homeMb.onclick = () => scrollToSectionWithOffset('hero', 300);
productMb.onclick = () => scrollToSectionWithOffset('products-section', 300);
chooseMb.onclick = () => scrollToSectionWithOffset('whychooseus', 300);
contactMb.onclick = () => scrollToSectionWithOffset('contactus', 300);

// Contact button (phone link)
const contactBtn = document.getElementById('contact-btn');
contactBtn.onclick = () => {
  const phoneNumber = '+91 9886661249';
  window.location.href = `tel:${phoneNumber}`;
};
