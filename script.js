// TERMÉKEK: itt tudod átírni a neveket, árakat, kategóriákat és képeket.
// Új termékhez másold le az egyik objektumot, adj neki egyedi id-t és töltsd ki az adatokat.
const products = [
  {id:1,brand:"NIKE",name:"Air Jordan 4 Retro",category:"Sneakerek",price:52990,oldPrice:59990,tag:"HOT DROP",condition:"Új, dobozzal",sizes:["40","41","42","43","44","45"],description:"Ikonikus sziluett prémium részletekkel. Mindennapi viselethez és különleges szettekhez is tökéletes.",images:["https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85"]},
  {id:2,brand:"NIKE",name:"Dunk Low Panda",category:"Sneakerek",price:38990,oldPrice:null,tag:"BESTSELLER",condition:"Új, dobozzal",sizes:["39","40","41","42","43","44"],description:"Letisztult fekete-fehér színállás, könnyen kombinálható utcai alapdarab.",images:["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85"]},
  {id:3,brand:"NEW BALANCE",name:"New Balance 9060",category:"Sneakerek",price:46990,oldPrice:null,tag:"NEW",condition:"Új, dobozzal",sizes:["40","41","42","43","44"],description:"Masszív forma, kényelmes talp és modern, sportos megjelenés.",images:["https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=85"]},
  {id:4,brand:"ADIDAS",name:"Campus 00s Grey",category:"Sneakerek",price:32990,oldPrice:36990,tag:"AKCIÓ",condition:"Új, dobozzal",sizes:["38","39","40","41","42","43"],description:"Retro hangulatú, velúr hatású sneaker szürke színben.",images:["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85"]},
  {id:5,brand:"NIKE",name:"Air Force 1 White",category:"Használt sneakerek",price:21990,oldPrice:null,tag:"PRE-LOVED",condition:"Jó állapot, fotókon látható kisebb használati nyomokkal",sizes:["40","41","42","43"],description:"Klasszikus fehér sneaker. Használt termék, a képek a termék állapotát mutatják.",images:["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85"]},
  {id:6,brand:"ESSENTIALS",name:"Oversized Hoodie",category:"Ruházat",price:24990,oldPrice:null,tag:"POPULAR",condition:"Új, címkével",sizes:["S","M","L","XL"],description:"Puha tapintású, oversized fazonú kapucnis pulóver letisztult dizájnnal.",images:["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=1000&q=85"]},
  {id:7,brand:"STREET BASIC",name:"Relaxed Fit póló",category:"Ruházat",price:8990,oldPrice:null,tag:"BASIC",condition:"Új, címkével",sizes:["S","M","L","XL"],description:"Mindennapi alapdarab kényelmes, bővebb szabással.",images:["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=85"]},
  {id:8,brand:"URBAN",name:"Minimal Crossbody Bag",category:"Táskák",price:14990,oldPrice:null,tag:"NEW",condition:"Új",sizes:[],description:"Kompakt, praktikus táska a legfontosabb dolgaidnak.",images:["https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85"]},
  {id:9,brand:"URBAN ACCESSORIES",name:"Classic Metal Watch",category:"Kiegészítők",price:18990,oldPrice:null,tag:"STYLE PICK",condition:"Új",sizes:[],description:"Minimalista kiegészítő, amely feldobja a mindennapi szetted.",images:["https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85"]},
  {id:10,brand:"SNEAKER CARE",name:"Sneaker tisztító szett",category:"Tisztítás és ápolás",price:6990,oldPrice:null,tag:"CARE",condition:"Új, bontatlan",sizes:[],description:"Alap tisztítócsomag a cipőid rendszeres ápolásához. Használat előtt olvasd el a csomagoláson található útmutatót.",images:["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85"]}
];

const money = value => new Intl.NumberFormat("hu-HU").format(value) + " Ft";
let activeCategory = "all";
let selectedProduct = null;
let selectedSize = "";
let cart = [];

const grid = document.getElementById("productGrid");
const modalElement = document.getElementById("productModal");
const productModal = new bootstrap.Modal(modalElement);
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");

function renderProducts() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const sort = document.getElementById("sortSelect").value;
  let list = products.filter(p =>
    (activeCategory === "all" || p.category === activeCategory) &&
    `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(query)
  );
  if (sort === "low") list.sort((a,b) => a.price-b.price);
  if (sort === "high") list.sort((a,b) => b.price-a.price);
  if (sort === "new") list.sort((a,b) => b.id-a.id);
  document.getElementById("resultCount").textContent = `${list.length} TERMÉK`;
  grid.innerHTML = list.length ? list.map(p => `
    <article class="product-card" data-id="${p.id}" tabindex="0" aria-label="${p.name} részletei">
      <div class="product-photo">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        <button class="favorite" data-favorite="${p.id}" aria-label="Kedvencekhez adás">♡</button>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">${money(p.price)} ${p.oldPrice ? `<span class="product-old-price">${money(p.oldPrice)}</span>` : ""}</div>
        <div class="product-meta">${p.category} · ${p.condition}</div>
      </div>
    </article>`).join("") : `<div class="no-results">Nincs találat. Próbálj másik keresést vagy kategóriát.</div>`;
}

function setCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".filter-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.category === category));
  document.getElementById("productHeading").textContent = category === "all" ? "Friss termékek" : category;
  renderProducts();
  document.getElementById("termekek").scrollIntoView({behavior:"smooth"});
}

document.querySelectorAll("[data-category]").forEach(el => el.addEventListener("click", () => setCategory(el.dataset.category)));
document.querySelectorAll("[data-nav-category]").forEach(el => el.addEventListener("click", () => setCategory(el.dataset.navCategory)));
document.querySelectorAll("[data-footer-category]").forEach(el => el.addEventListener("click", () => setCategory(el.dataset.footerCategory)));
document.getElementById("searchInput").addEventListener("input", renderProducts);
document.getElementById("sortSelect").addEventListener("change", renderProducts);
document.getElementById("searchFocus").addEventListener("click", () => {
  document.getElementById("termekek").scrollIntoView({behavior:"smooth"});
  setTimeout(() => document.getElementById("searchInput").focus(), 350);
});

grid.addEventListener("click", event => {
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) {
    event.stopPropagation();
    favorite.classList.toggle("liked");
    favorite.textContent = favorite.classList.contains("liked") ? "♥" : "♡";
    return;
  }
  const card = event.target.closest(".product-card");
  if (card) openProduct(Number(card.dataset.id));
});
grid.addEventListener("keydown", event => {
  if (event.key === "Enter" && event.target.classList.contains("product-card")) openProduct(Number(event.target.dataset.id));
});

function openProduct(id) {
  selectedProduct = products.find(p => p.id === id);
  selectedSize = selectedProduct.sizes[0] || "";
  document.getElementById("detailCategory").textContent = selectedProduct.category.toUpperCase();
  document.getElementById("detailBrand").textContent = selectedProduct.brand;
  document.getElementById("detailName").textContent = selectedProduct.name;
  document.getElementById("detailPrice").textContent = money(selectedProduct.price);
  document.getElementById("detailDescription").textContent = selectedProduct.description;
  document.getElementById("detailCondition").textContent = selectedProduct.condition;
  document.getElementById("detailMainImage").src = selectedProduct.images[0];
  document.getElementById("detailMainImage").alt = selectedProduct.name;
  document.getElementById("detailThumbnails").innerHTML = selectedProduct.images.map((src,i) =>
    `<img class="thumbnail ${i===0?"selected":""}" src="${src}" data-image-index="${i}" alt="${selectedProduct.name} ${i+1}. kép">`
  ).join("");
  const sizeArea = document.getElementById("sizeArea");
  sizeArea.style.display = selectedProduct.sizes.length ? "block" : "none";
  document.getElementById("sizeOptions").innerHTML = selectedProduct.sizes.map((size,i) =>
    `<button class="size-option ${i===0?"selected":""}" data-size="${size}">${size}</button>`
  ).join("");
  productModal.show();
}

document.getElementById("detailThumbnails").addEventListener("click", event => {
  const thumb = event.target.closest("[data-image-index]");
  if (!thumb) return;
  const index = Number(thumb.dataset.imageIndex);
  document.getElementById("detailMainImage").src = selectedProduct.images[index];
  document.querySelectorAll(".thumbnail").forEach((el,i) => el.classList.toggle("selected",i===index));
});
document.getElementById("sizeOptions").addEventListener("click", event => {
  const btn = event.target.closest("[data-size]");
  if (!btn) return;
  selectedSize = btn.dataset.size;
  document.querySelectorAll(".size-option").forEach(el => el.classList.toggle("selected",el===btn));
});

document.getElementById("addToCart").addEventListener("click", () => {
  if (!selectedProduct) return;
  if (selectedProduct.sizes.length && !selectedSize) return showToast("Válassz méretet!");
  const existing = cart.find(item => item.id === selectedProduct.id && item.size === selectedSize);
  if (existing) existing.quantity++;
  else cart.push({id:selectedProduct.id,size:selectedSize,quantity:1});
  updateCart();
  productModal.hide();
  showToast("A termék bekerült a kosárba.");
});

function updateCart() {
  const count = cart.reduce((sum,item) => sum + item.quantity,0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTitleCount").textContent = `(${count})`;
  document.getElementById("cartItems").innerHTML = cart.length ? cart.map(item => {
    const p = products.find(product => product.id === item.id);
    return `<div class="cart-item">
      <img src="${p.images[0]}" alt="${p.name}">
      <div class="cart-item-info"><b>${p.name}</b><small>${item.size ? "Méret: "+item.size+" · " : ""}${item.quantity} db</small><small>${money(p.price*item.quantity)}</small>
      <button class="remove-item" data-remove="${p.id}" data-remove-size="${item.size}">ELTÁVOLÍTÁS</button></div>
    </div>`;
  }).join("") : `<div class="cart-empty">A kosarad jelenleg üres.</div>`;
  const total = cart.reduce((sum,item) => sum + products.find(p=>p.id===item.id).price*item.quantity,0);
  document.getElementById("cartTotal").textContent = money(total);
}
document.getElementById("cartItems").addEventListener("click", event => {
  const btn = event.target.closest("[data-remove]");
  if (!btn) return;
  cart = cart.filter(item => !(item.id === Number(btn.dataset.remove) && item.size === btn.dataset.removeSize));
  updateCart();
});
function openCart(){cartDrawer.classList.add("show");cartBackdrop.classList.add("show")}
function closeCart(){cartDrawer.classList.remove("show");cartBackdrop.classList.remove("show")}
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
cartBackdrop.addEventListener("click",closeCart);
document.getElementById("checkoutButton").addEventListener("click",() => showToast(cart.length ? "A rendelés/fizetés funkció még nincs bekötve." : "A kosarad üres."));
document.getElementById("newsletterForm").addEventListener("submit",event => {
  event.preventDefault();
  event.target.reset();
  showToast("Köszönjük! A feliratkozás demó módban működik.");
});
document.getElementById("menuToggle").addEventListener("click",() => document.querySelector(".desktop-nav").classList.toggle("open"));

let toastTimer;
function showToast(message){
  const toast = document.getElementById("toastMessage");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"),2600);
}

renderProducts();
updateCart();
