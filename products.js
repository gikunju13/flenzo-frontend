const productContainer = document.getElementById('product-container');
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch(`https://flenzo-backend.onrender.com/products/${id}`)
  .then(res => res.json())
  .then(product => {
    productContainer.innerHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-info">
          <h1>${product.name}</h1>
          <p class="price">$${product.price}</p>
          <p>${product.description}</p>
          <button class="btn">Add to Cart</button>
        </div>
      </div>
    `;
  })
  .catch(err => productContainer.innerHTML = `<p>Product not found.</p>`);