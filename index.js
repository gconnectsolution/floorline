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
  { image: "laminated.webp", name: "Laminated Wooden Flooring", description: "Durable and stylish flooring with a natural wood finish." },
  { image: "spc.webp", name: "SPC Flooring", description: "Stone Plastic Composite flooring with water resistance." },
  { image: "engineering.webp", name: "Engineering Wood Flooring", description: "Combines strength, beauty, and stability." },
  { image: "solidwood.webp", name: "Solid Wood", description: "Premium hardwood flooring for timeless appeal." },
  { image: "deck.webp", name: "Deck Flooring", description: "Weather-resistant outdoor flooring." },
  { image: "wallpaper.webp", name: "Wallpaper", description: "Elegant wallpapers for personalized interiors." },
  { image: "wallpanel.webp", name: "Wall Panel", description: "Decorative wall panels adding depth and texture." },
  { image: "louvers.webp", name: "Louvers, Sofit Panel", description: "Stylish louvers for modern designs." },
  { image: "blinds.webp", name: "Blinds", description: "Functional and elegant window blinds." }
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
heroBtn.onclick = () => {
    const targetSection = document.getElementById('products-section');
  targetSection.scrollIntoView({ behavior: 'smooth' });
}