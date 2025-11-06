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
    name: "Laminate Wooden Flooring",
    description: "Scratch-resistant and affordable flooring that mimics the look of real wood.",
    details: "Our laminated wooden flooring offers the timeless beauty of natural wood with added durability. It is scratch-resistant, easy to clean, and resistant to fading, making it perfect for high-traffic areas. Ideal for homes and offices, it provides a warm, inviting atmosphere while being budget-friendly and eco-conscious."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.45 PM (1).jpeg",
    name: "SPC Flooring",
    description: "Stone Plastic Composite flooring offering 100% water resistance and durability.",
    details: "SPC flooring combines the toughness of stone with the flexibility of plastic, creating a flooring solution that is 100% water-resistant, highly durable, and easy to maintain. It withstands heavy foot traffic and is perfect for kitchens, bathrooms, and commercial spaces, offering long-lasting beauty and performance."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.47 PM (2).jpeg",
    name: "Engineered Wood Flooring",
    description: "Multi-layered wood flooring that provides the elegance of hardwood with added stability.",
    details: "Engineered wood flooring features a multi-layered construction with a real hardwood veneer on top of a stable plywood core. This ensures the authentic look and feel of solid wood while preventing warping or expansion. It’s ideal for any room, including basements, offering elegance, stability, and a natural, warm aesthetic."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.43 PM.jpeg",
    name: "Solid wood-Wpc dial deck",
    description: "Authentic hardwood flooring that adds warmth, character, and long-lasting beauty.",
    details: "Solid wood flooring is made from 100% natural hardwood, providing unmatched warmth, character, and timeless appeal. Each plank is unique, enhancing the aesthetics of your home. With proper care, it can last for decades, making it a valuable and sustainable choice for both residential and commercial spaces."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.42 PM (1).jpeg",
    name: "Wpc-Ipe wood",
    description: "Weatherproof WPC decking ideal for outdoor patios, balconies, and gardens.",
    details: "WPC deck flooring is a high-quality composite of wood fibers and plastic, making it weatherproof, termite-resistant, and easy to maintain. Its natural wood-like finish enhances outdoor spaces such as patios, balconies, and gardens, providing a stylish and long-lasting solution for any exterior environment."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.47 PM (1).jpeg",
    name: "Wallpaper Normal & Customized",
    description: "Premium wallpapers available in modern, classic, and textured designs for every interior.",
    details: "Our premium wallpapers are designed to transform interiors with style and elegance. Available in modern, classic, and textured designs, they are easy to apply and durable. We also offer customization options to match your personal taste, ensuring your space reflects your unique vision."
  },
  {
    image: "ipe.webp",
    name: "IPE Wood",
    description: "High-density hardwood decking known for extreme durability and natural beauty.",
    details: "IPE deck flooring is made from exotic, high-density hardwood that is naturally resistant to decay, termites, and harsh weather. Its rich color and fine grain provide an exquisite natural look. Perfect for premium outdoor decks, it combines longevity, elegance, and minimal maintenance."
  },
  {
    image: "louvers.webp",
    name: "Louvers Interior & Exterior",
    description: "Contemporary louver designs that enhance ventilation and elevate architectural appeal.",
    details: "Our louvers are engineered for both interior and exterior applications, enhancing airflow while offering privacy and aesthetic appeal. Available in multiple materials, finishes, and styles, they provide a sleek architectural element that adds both functionality and visual interest to any space."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.33.04 PM.jpeg",
    name: "Window Blinds",
    description: "Elegant and functional blinds for perfect light control and privacy.",
    details: "Window blinds combine practicality with elegance, allowing precise control over light and privacy. Available in a variety of materials, colors, and styles, they enhance the interior design while offering durability, ease of cleaning, and customizable options to suit every room’s ambiance."
  },
  {
    image: "lvt.webp",
    name: "LVT Vinyl Flooring",
    description: "Luxury Vinyl Tiles offering high durability, easy maintenance, and realistic wood textures.",
    details: "Luxury Vinyl Tiles (LVT) are designed to replicate the look and feel of natural wood or stone with superior durability. They are water-resistant, easy to install and maintain, and perfect for high-traffic areas. LVT flooring combines style, convenience, and long-lasting performance for both homes and businesses."
  },
  {
    image: "soffit.webp",
    name: "Soffit Panel",
    description: "Durable panels used for ceilings and eaves, ensuring protection and a clean finish.",
    details: "Soffit panels protect the underside of roofs while providing proper ventilation. Made from durable, weather-resistant materials, they ensure longevity and require minimal maintenance. Their clean, polished appearance enhances the overall architecture of your home or building."
  },
  {
    image: "sheera.webp",
    name: "Shera Plank",
    description: "Fiber cement planks that provide a natural wood look with superior weather resistance.",
    details: "Shera planks offer the natural aesthetic of wood combined with exceptional durability. Made from fiber cement, they resist moisture, termites, and weathering, making them ideal for exterior cladding and decking. They provide a sustainable, long-lasting alternative to traditional wood."
  },
  {
    image: "hpl2.webp",
    name: "Louvers",
    description: "High-pressure laminate cladding ideal for exterior facades with UV and weather protection.",
    details: "HPL cladding is engineered to withstand harsh environmental conditions while enhancing the building’s exterior. It is UV-resistant, weatherproof, and low-maintenance, providing a stylish, modern look for façades while ensuring long-term performance."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.51 PM (1).jpeg",
    name: "Window Curtains",
    description: "Stylish curtains that add warmth, texture, and privacy to your living spaces.",
    details: "Our curtains are crafted from high-quality fabrics to bring warmth, texture, and elegance to any room. Available in various styles, colors, and patterns, they offer privacy while complementing your interior décor. Customization options are available to match your unique taste."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.54 PM (1).jpeg",
    name: "Sofa",
    description: "Comfortable, modern sofas designed to complement any living room decor.",
    details: "Our sofas combine comfort, contemporary design, and durability. Available in multiple fabrics, colors, and configurations, they provide the perfect centerpiece for your living room. Designed for relaxation and style, they enhance the aesthetic appeal of any space while ensuring lasting comfort."
  },
  {
    image: "./grass.jpg",
    name: "Artificial Grass",
    description: "Premium synthetic turf that brings a lush, natural look to your space without the need for watering or maintenance.",
    details: "Our artificial grass offers the perfect blend of durability, realism, and low maintenance. Made with UV-resistant fibers and advanced drainage technology, it stays green and vibrant all year long—ideal for gardens, balconies, playgrounds, or commercial landscapes. Enjoy the look and feel of natural grass without the upkeep, mud, or mowing."
  },
];

const container = document.getElementById("products-row");
const popupOverlay = document.getElementById("popupOverlay");
const popupImage = document.getElementById("popupImage");
const popupName = document.getElementById("popupName");
const popupDescription = document.getElementById("popupDescription");
const closePopup = document.getElementById("closePopup");

// Duplicate products for seamless looping
const doubledProducts = [...products, ...products];

// Render product cards with data-index attribute
container.innerHTML = doubledProducts.map((p, index) => `
  <div class="product-card" data-index="${index % products.length}">
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.description}</p>
  </div>
`).join("");

// Flag to control scrolling
let isScrolling = true;

// Open popup on card click and stop scrolling
container.addEventListener("click", (e) => {
  const card = e.target.closest(".product-card");
  if (!card) return;

  const index = parseInt(card.dataset.index); // Get the index from data-index
  const product = products[index]; // Access the product from the original products array
  if (!product) {
    console.error("Product not found for index:", index);
    return;
  }

  popupImage.src = product.image;
  popupName.textContent = product.name;
  popupDescription.textContent = product.details;

  popupOverlay.style.display = "flex";
  isScrolling = false; // Stop scrolling when popup is opened
});

// Close popup and resume scrolling
closePopup.addEventListener("click", () => {
  popupOverlay.style.display = "none";
  isScrolling = true; // Resume scrolling when popup is closed
});

popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
    isScrolling = true; // Resume scrolling when popup is closed
  }
});

// Auto-scroll using transform for iOS compatibility
let position = 0;
const speed = 1; // Adjust scroll speed (pixels/frame)

function scrollLoop() {
  if (isScrolling) {
    position -= speed;
    const totalWidth = container.scrollWidth / 2;

    // Reset back to start seamlessly
    if (Math.abs(position) >= totalWidth) {
      position = 0;
    }

    container.style.transform = `translateX(${position}px)`;
  }
  requestAnimationFrame(scrollLoop);
}

// Start animation after a short delay
setTimeout(scrollLoop, 300);

const heroBtn = document.getElementById('herobtn')

heroBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = './products.html';
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
product.onclick = () => window.location.href = './products.html';
choose.onclick = () => scrollToSectionWithOffset('whychooseus', 150);
contact.onclick = () => scrollToSectionWithOffset('contactus', 83);

// Mobile clicks
homeMb.onclick = () => scrollToSectionWithOffset('hero', 300);
productMb.onclick = () => window.location.href = './products.html';
chooseMb.onclick = () => scrollToSectionWithOffset('whychooseus', 310);
contactMb.onclick = () => scrollToSectionWithOffset('contactus', 310);

// Contact button (phone link)
const contactBtn = document.getElementById('contact-btn');
contactBtn.onclick = () => {
  const phoneNumber = '+91 9886661249';
  window.location.href = `tel:${phoneNumber}`;
};
// Scroll animation observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 } // Trigger when 20% of element is visible
);

// Target all elements you want to animate
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
