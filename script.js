// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));

// Fade-in effect
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});
faders.forEach(el => observer.observe(el));

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if(window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// Fetch products from backend
const productsContainer = document.getElementById('products-container');
fetch('https://flenzo-backend.onrender.com/products', {
  mode: "cors"
})
  .then(res => res.json())
  .then(products => {
    productsContainer.innerHTML = products.map(p => `
      <div class="product-card fade-in">
        <span class="badge">${p.badge || 'New'}</span>
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p class="price">$${p.price}</p>
        <a href="product.html?id=${p.id}" class="btn">View</a>
      </div>
    `).join('');
  })
  .catch(err => console.error(err));