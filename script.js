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

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

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
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else{
    navbar.classList.remove("scrolled");
  }
});

// LOAD PRODUCTS FROM BACKEND

async function loadProducts(){

console.log("Loading products from backend...");
const response = await fetch("https://flenzo-backend.onrender.com/products");

const products = await response.json();

const container = document.querySelector(".products-container");

container.innerHTML = "";

products.forEach(product => {

container.innerHTML += `
<div class="product-card fade-in">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="price">$${product.price}</p>

<p>${product.description}</p>

<a href="product.html?id=${product.id}" class="btn">View Product</a>

</div>
`;

});

}

loadProducts();