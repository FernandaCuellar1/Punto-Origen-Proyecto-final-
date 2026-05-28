// ----------------------------------------------------
// BASE DE DATOS DE PRODUCTOS (PRENDAS TEJIDAS A CROCHET)
// ----------------------------------------------------
const PRODUCTS = [
{ id: 1, name: "Top Primavera Dusty Rose", category: "Tops", price: 85000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/hero_campaign_1779986067172.png", badge: "Exclusivo", description: "Top moderno en tono rosa.", sizes: ["S", "M", "L"] },
    { id: 8, name: "Top Corto Solsticio", category: "Tops", price: 75000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/top.png", badge: "Tendencia", description: "Estilo halter vibrante.", sizes: ["S", "M"] },
    { id: 9, name: "Top Sunset Crochet", category: "Tops", price: 78000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/sunset.png", badge: "Nuevo", description: "Ideal para verano.", sizes: ["S", "M", "L"] },
    { id: 10, name: "Bralette Encaje Lunar", category: "Tops", price: 65000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/bralette.png", badge: "Delicado", description: "Diseño suave.", sizes: ["S", "M"] },
    { id: 11, name: "Top Hojas de Otoño", category: "Tops", price: 82000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/hojas.png", badge: "Popular", description: "Tejido relieve.", sizes: ["M", "L"] },
    { id: 12, name: "Top Minimalist White", category: "Tops", price: 70000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/white.png", badge: "Básico", description: "Versátil.", sizes: ["S", "M", "L"] },
    { id: 13, name: "Top Tropical Vibes", category: "Tops", price: 88000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/tropi.png", badge: "Colorido", description: "Diseño vibrante.", sizes: ["S", "M"] },
    { id: 14, name: "Top Seda Vintage", category: "Tops", price: 95000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/seda.png", badge: "Premium", description: "Acabado suave.", sizes: ["S", "M"] },
    { id: 15, name: "Top Espalda Descubierta", category: "Tops", price: 79000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/espalda.png", badge: "Sexy", description: "Para la playa.", sizes: ["S", "M", "L"] },
    { id: 16, name: "Top Trenzado Boho", category: "Tops", price: 84000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/boho.png", badge: "Especial", description: "Bohemio.", sizes: ["S", "M"] },
    { id: 17, name: "Top Crop Celeste", category: "Tops", price: 72000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/celeste.png", badge: "Oferta", description: "Ligero.", sizes: ["S", "M"] },
    { id: 48, name: "Top Noche Estelar", category: "Tops", price: 90000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/noche.png", badge: "Exclusivo", description: "Brillantes.", sizes: ["S", "M"] },

    // BOLSOS (12)
    { id: 2, name: "Bolso Ecológico Hojas", category: "Bolsos", price: 95000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/crochet_bag_1779986195032.png", badge: "Sostenible", description: "Bolso a mano.", sizes: ["U"] },
    { id: 7, name: "Bolso Bandolera Crema", category: "Bolsos", price: 80000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/bolso.png", badge: "Artesanal", description: "Práctica.", sizes: ["U"] },
    { id: 18, name: "Tote Bag Playero", category: "Bolsos", price: 105000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/playa.png", badge: "Espacioso", description: "Grande.", sizes: ["U"] },
    { id: 19, name: "Mini Bolso de Mano", category: "Bolsos", price: 65000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/mini_bolso.png", badge: "Chic", description: "Esenciales.", sizes: ["U"] },
    { id: 20, name: "Bolso Estilo Vintage", category: "Bolsos", price: 110000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/vint.png", badge: "Clásico", description: "Con asas.", sizes: ["U"] },
    { id: 21, name: "Bolso Mandala", category: "Bolsos", price: 98000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/manda.png", badge: "Artístico", description: "Circular.", sizes: ["U"] },
    { id: 22, name: "Bolso de Hombro Seda", category: "Bolsos", price: 120000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/bolso_seda.png", badge: "Lujo", description: "Alta calidad.", sizes: ["U"] },
    { id: 23, name: "Bolso Net para Compras", category: "Bolsos", price: 45000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/net.png", badge: "Eco", description: "Reutilizable.", sizes: ["U"] },
    { id: 24, name: "Morralito Crochet", category: "Bolsos", price: 85000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/cro.png", badge: "Casual", description: "Ciudad.", sizes: ["U"] },
    { id: 25, name: "Bolso Crossbody", category: "Bolsos", price: 75000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/cross.png", badge: "Práctico", description: "Seguro.", sizes: ["U"] },
    { id: 26, name: "Bolso de Noche", category: "Bolsos", price: 92000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/bolso_noche.png", badge: "Elegante", description: "Metálicos.", sizes: ["U"] },
    { id: 47, name: "Cartera Minimalista", category: "Bolsos", price: 55000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/mini.png", badge: "Nueva", description: "Compacta.", sizes: ["U"] },

    // BLUSAS (12)
    { id: 3, name: "Blusa Artesanal Brisa", category: "Blusas", price: 110000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/Blusa Artesanal Brisa.png", badge: "Popular", description: "Algodón.", sizes: ["S", "M", "L"] },
    { id: 27, name: "Blusa Floral Crochet", category: "Blusas", price: 115000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/floral.png", badge: "Nuevo", description: "Floral.", sizes: ["S", "M"] },
    { id: 28, name: "Blusa Off-Shoulder", category: "Blusas", price: 105000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/off.png", badge: "Tendencia", description: "Hombros aire.", sizes: ["S", "M", "L"] },
    { id: 29, name: "Blusa de Encaje Largo", category: "Blusas", price: 125000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/largo.png", badge: "Elegante", description: "Sofisticado.", sizes: ["M", "L"] },
    { id: 30, name: "Blusa Veraniega", category: "Blusas", price: 95000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/blusa_verano.png", badge: "Fresco", description: "Algodón.", sizes: ["S", "M"] },
    { id: 31, name: "Blusa con Cuerdas", category: "Blusas", price: 100000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/cuer.png", badge: "Casual", description: "Ajustable.", sizes: ["S", "M"] },
    { id: 32, name: "Blusa Calada Blanca", category: "Blusas", price: 120000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/blusa_white.png", badge: "Premium", description: "Costura.", sizes: ["S", "M", "L"] },
    { id: 33, name: "Blusa Estilo Campesino", category: "Blusas", price: 98000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/camp.png", badge: "Boho", description: "Holgada.", sizes: ["S", "M", "L"] },
    { id: 34, name: "Blusa Escote V", category: "Blusas", price: 108000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/v.png", badge: "Clásica", description: "Favorecedora.", sizes: ["S", "M"] },
    { id: 35, name: "Blusa Tejido Denso", category: "Blusas", price: 130000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/den.png", badge: "Exclusiva", description: "Artesanal.", sizes: ["M", "L"] },
    { id: 36, name: "Blusa de Seda", category: "Blusas", price: 140000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/blusa_seda.png", badge: "Lujo", description: "Calidad.", sizes: ["S", "M"] },
    { id: 46, name: "Blusa Encaje Boho", category: "Blusas", price: 112000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/blusa_boho.png", badge: "Trendy", description: "Mangas.", sizes: ["S", "M"] },

    // OTROS (12)
    { id: 5, name: "Traje de Baño Chocolate", category: "Playa", price: 140000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/traje.png", badge: "A Medida", description: "Bikini.", sizes: ["S", "M", "L"] },
    { id: 6, name: "Antifaz Coral", category: "Otros", price: 35000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/antifaz.png", badge: "Delicado", description: "Suave.", sizes: ["U"] },
    { id: 4, name: "Salida de Baño Sage", category: "Playa", price: 125000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/Salida.png", badge: "Novedad", description: "Playa.", sizes: ["S", "M"] },
    { id: 37, name: "Vestido Playa Calado", category: "Playa", price: 155000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/vestido_playa.png", badge: "Top", description: "Largo.", sizes: ["S", "M"] },
    { id: 38, name: "Kimono de Crochet", category: "Otros", price: 135000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/kimono.png", badge: "Estilo", description: "Capa.", sizes: ["U"] },
    { id: 39, name: "Sombrero Playero", category: "Playa", price: 70000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/sombrero.png", badge: "Protección", description: "Ala ancha.", sizes: ["U"] },
    { id: 40, name: "Bufanda Otoñal", category: "Otros", price: 65000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/bufanda.png", badge: "Cálida", description: "Lana.", sizes: ["U"] },
    { id: 41, name: "Set de Manoplas", category: "Otros", price: 40000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/manoplas.png", badge: "Básico", description: "Frío.", sizes: ["U"] },
    { id: 42, name: "Diadema Trenzada", category: "Otros", price: 25000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/diadema.png", badge: "Accesorio", description: "Casual.", sizes: ["U"] },
    { id: 43, name: "Portavasos Crochet", category: "Otros", price: 15000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/portavasos.png", badge: "Hogar", description: "Decor.", sizes: ["U"] },
    { id: 44, name: "Camino de Mesa", category: "Otros", price: 120000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/camino.png", badge: "Decoración", description: "Elegante.", sizes: ["U"] },
    { id: 45, name: "Falda Crochet Playa", category: "Playa", price: 95000, image: "./brain/40d0497e-5fe5-4aa9-9064-7ff65bf16c55/falda.png", badge: "Trendy", description: "Midi.", sizes: ["S", "M"] }
];
// WhatsApp Business Number (as defined in document for Florencia shop)
const WHATSAPP_PHONE = "573221234567";
// ----------------------------------------------------
// STATE MANAGEMENT (Carrito y Favoritos)
// ----------------------------------------------------
let cart = JSON.parse(localStorage.getItem('crochet_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('crochet_wishlist')) || [];
let activeCategoryFilter = 'todos';
let searchQuery = '';
let currentSort = 'default';
// ----------------------------------------------------
// DOM ELEMENTS
// ----------------------------------------------------
const productsGrid = document.getElementById('products-grid');
const filterTabs = document.querySelectorAll('.filter-tab');
const categoryCards = document.querySelectorAll('.category-card');
const sortSelect = document.getElementById('sort-select');
const searchInput = document.getElementById('search-input');
const navLinks = document.querySelectorAll('.nav-link');
const catLinksFooter = document.querySelectorAll('.cat-link');
// Carrito UI elements
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartCount = document.getElementById('cart-count');
const cartDrawerCount = document.getElementById('cart-drawer-count');
const cartDrawerItems = document.getElementById('cart-drawer-items');
const cartSubtotalPrice = document.getElementById('cart-subtotal-price');
const checkoutWhatsappBtn = document.getElementById('checkout-whatsapp-btn');
const closeDrawerActions = document.querySelectorAll('.close-drawer-action');
// Favoritos UI elements
const wishlistBtn = document.getElementById('wishlist-btn');
const closeWishlistBtn = document.getElementById('close-wishlist-btn');
const wishlistModal = document.getElementById('wishlist-modal');
const wishlistModalOverlay = document.getElementById('wishlist-modal-overlay');
const wishlistCountBadge = document.getElementById('wishlist-count');
const wishlistDrawerCount = document.getElementById('wishlist-drawer-count');
const wishlistItemsContainer = document.getElementById('wishlist-items-container');
// Mobile Menu
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
// ----------------------------------------------------
// APP INITIALIZATION
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    setupEventListeners();
});
// ----------------------------------------------------
// RENDER PRODUCTS
// ----------------------------------------------------
function renderProducts() {
    productsGrid.innerHTML = '';
    
    // 1. Filtrar productos por categoría
    let filtered = PRODUCTS.filter(prod => {
        if (activeCategoryFilter === 'todos') return true;
        return prod.category === activeCategoryFilter;
    });
    // 2. Filtrar por búsqueda
    if (searchQuery.trim() !== '') {
        filtered = filtered.filter(prod => 
            prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prod.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    // 3. Ordenar
    if (currentSort === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    }
    // Si no hay productos
    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products-msg">
                <i class="fa-regular fa-face-frown"></i>
                <p>No encontramos prendas tejidas con esos filtros.</p>
                <button class="btn btn-secondary mt-10" onclick="resetFilters()">Mostrar todo</button>
            </div>
        `;
        return;
    }
    // Construir tarjetas (Maquetación estilo Adidas: Selector de tallas rápido en Hover)
    filtered.forEach(product => {
        const isFav = wishlist.includes(product.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Formato COP
        const priceFormatted = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(product.price);
        
        // Crear botones de tallas para el drawer flotante
        let sizeBtnsHTML = '';
        product.sizes.forEach(size => {
            sizeBtnsHTML += `<button class="size-option-btn" onclick="addToCart(${product.id}, '${size}')">${size}</button>`;
        });
        card.innerHTML = `
            <!-- Badge -->
            <span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>
            
            <!-- Botón Favorito -->
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${product.id})" title="Favorito">
                <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            
            <!-- Contenedor Imagen con selector de tallas flotante -->
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}">
                
                <div class="quick-sizes-container">
                    <span class="quick-sizes-title">AÑADIR TALLA RÁPIDO</span>
                    <div class="size-options">
                        ${sizeBtnsHTML}
                    </div>
                </div>
            </div>
            
            <!-- Info del Producto -->
            <div class="product-info-panel">
                <span class="product-cat">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price-row">
                    <span class="current-price">${priceFormatted}</span>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}
// Restablecer todos los filtros
window.resetFilters = () => {
    activeCategoryFilter = 'todos';
    searchQuery = '';
    currentSort = 'default';
    sortSelect.value = 'default';
    searchInput.value = '';
    
    // Activa la pestaña "todos"
    filterTabs.forEach(t => t.classList.remove('active'));
    filterTabs[0].classList.add('active');
    
    navLinks.forEach(l => {
        if (l.dataset.category === 'todos') l.classList.add('active');
        else l.classList.remove('active');
    });
    renderProducts();
};
// ----------------------------------------------------
// EVENT LISTENERS
// ----------------------------------------------------
function setupEventListeners() {
    // 1. Filtrado por Pestañas del Catálogo
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeCategoryFilter = tab.dataset.filter;
            
            // Sincronizar con el menu superior
            syncHeaderNav(activeCategoryFilter);
            
            renderProducts();
        });
    });
    // 2. Tarjetas de Categoría Rápidas (Página principal)
    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const selectedCat = card.dataset.catFilter;
            activeCategoryFilter = selectedCat;
            
            // Activar pestaña adecuada
            filterTabs.forEach(t => {
                if (t.dataset.filter === selectedCat) t.classList.add('active');
                else t.classList.remove('active');
            });
            
            syncHeaderNav(selectedCat);
            renderProducts();
        });
    });
    // 3. Enlaces Footer
    catLinksFooter.forEach(link => {
        link.addEventListener('click', () => {
            const cat = link.dataset.cat;
            activeCategoryFilter = cat;
            filterTabs.forEach(t => {
                if (t.dataset.filter === cat) t.classList.add('active');
                else t.classList.remove('active');
            });
            syncHeaderNav(cat);
            renderProducts();
        });
    });
    // 4. Navegación Header Superior
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const cat = link.dataset.category;
            activeCategoryFilter = cat;
            
            // Activar pestaña adecuada
            filterTabs.forEach(t => {
                if (t.dataset.filter === cat) t.classList.add('active');
                else t.classList.remove('active');
            });
            // Cerrar menú móvil si está abierto
            navMenu.classList.remove('active');
            mobileMenuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            
            renderProducts();
            document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
        });
    });
    // 5. Ordenamiento
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });
    // 6. Búsqueda activa
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });
    // 7. Toggle Carrito Drawer
    cartBtn.addEventListener('click', () => toggleCartDrawer(true));
    closeCartBtn.addEventListener('click', () => toggleCartDrawer(false));
    cartDrawerOverlay.addEventListener('click', () => toggleCartDrawer(false));
    
    closeDrawerActions.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleCartDrawer(false);
        });
    });
    // 8. Toggle Favoritos modal/drawer
    wishlistBtn.addEventListener('click', () => toggleWishlistModal(true));
    closeWishlistBtn.addEventListener('click', () => toggleWishlistModal(false));
    wishlistModalOverlay.addEventListener('click', () => toggleWishlistModal(false));
    // 9. Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        mobileMenuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
    // 10. WhatsApp Checkout button Click
    checkoutWhatsappBtn.addEventListener('click', () => {
        sendOrderToWhatsApp();
    });
    // 11. Newsletter Form Submit
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        alert(`¡Gracias por registrarte! Te hemos enviado un cupón de 10% de descuento a tu correo: ${email}`);
        newsletterForm.reset();
    });
}
function syncHeaderNav(category) {
    navLinks.forEach(l => {
        if (l.dataset.category === category) l.classList.add('active');
        else l.classList.remove('active');
    });
}
// ----------------------------------------------------
// CARRITO DE COMPRAS LOGIC
// ----------------------------------------------------
function toggleCartDrawer(open) {
    if (open) {
        cartDrawerOverlay.classList.add('active');
        cartDrawer.classList.add('active');
    } else {
        cartDrawerOverlay.classList.remove('active');
        cartDrawer.classList.remove('active');
    }
}
window.addToCart = (productId, size) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    // Buscar si el producto con esa talla ya está en el carrito
    const existing = cart.find(item => item.id === productId && item.size === size);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: 1
        });
    }
    localStorage.setItem('crochet_cart', JSON.stringify(cart));
    updateCartUI();
    toggleCartDrawer(true); // Open cart immediately
};
function updateCartUI() {
    // 1. Contadores en botones
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
    cartDrawerCount.textContent = totalCount;
    // 2. Elementos del carrito
    cartDrawerItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartDrawerItems.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Tu bolsa de compras está vacía.</p>
                <a href="#catalogo" class="btn btn-secondary close-drawer-action" onclick="toggleCartDrawer(false)">COMPRAR PRODUCTOS</a>
            </div>
        `;
        document.getElementById('cart-drawer-footer').style.display = 'none';
        return;
    }
    document.getElementById('cart-drawer-footer').style.display = 'flex';
    
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const itemPriceFormatted = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.price);
        
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <span class="cart-item-meta">Talla: ${item.size}</span>
                <span class="cart-item-price">${itemPriceFormatted}</span>
                <div class="cart-item-quantity-controls">
                    <button class="qty-btn" onclick="adjustQty(${item.id}, '${item.size}', -1)"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn" onclick="adjustQty(${item.id}, '${item.size}', 1)"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id}, '${item.size}')" title="Eliminar artículo">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        cartDrawerItems.appendChild(itemEl);
    });
    const subtotalFormatted = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(subtotal);
    cartSubtotalPrice.textContent = subtotalFormatted;
}
window.adjustQty = (productId, size, change) => {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId, size);
    } else {
        localStorage.setItem('crochet_cart', JSON.stringify(cart));
        updateCartUI();
    }
};
window.removeFromCart = (productId, size) => {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    localStorage.setItem('crochet_cart', JSON.stringify(cart));
    updateCartUI();
};
// ----------------------------------------------------
// FAVORITOS LOGIC (WISHLIST)
// ----------------------------------------------------
function toggleWishlistModal(open) {
    if (open) {
        wishlistModalOverlay.classList.add('active');
        wishlistModal.classList.add('active');
        renderWishlistItems();
    } else {
        wishlistModalOverlay.classList.remove('active');
        wishlistModal.classList.remove('active');
    }
}
window.toggleFavorite = (event, productId) => {
    event.stopPropagation(); // Evitar que el clic en el botón active otras acciones
    
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(productId);
    }
    localStorage.setItem('crochet_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts(); // Re-render de tarjetas para pintar/borrar el corazón
    
    // Si la modal de favoritos está abierta, re-renderizar ítems
    if (wishlistModal.classList.contains('active')) {
        renderWishlistItems();
    }
};
function updateWishlistUI() {
    const totalCount = wishlist.length;
    wishlistCountBadge.textContent = totalCount;
    wishlistDrawerCount.textContent = totalCount;
}
function renderWishlistItems() {
    wishlistItemsContainer.innerHTML = '';
    
    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = `
            <div class="empty-wishlist-message">
                <i class="fa-regular fa-heart"></i>
                <p>No tienes productos en favoritos todavía.</p>
            </div>
        `;
        return;
    }
    wishlist.forEach(id => {
        const product = PRODUCTS.find(p => p.id === id);
        if (!product) return;
        const priceFormatted = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(product.price);
        
        // Si tiene tallas, elegimos la primera para agregar por defecto
        const defaultSize = product.sizes[0];
        
        const itemEl = document.createElement('div');
        itemEl.className = 'wishlist-item';
        itemEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="wishlist-item-img">
            <div class="wishlist-item-details">
                <h4 class="wishlist-item-name">${product.name}</h4>
                <span class="wishlist-item-price">${priceFormatted}</span>
                <button class="add-to-cart-from-wish" onclick="addToCartFromWishlist(${product.id}, '${defaultSize}')">AÑADIR A LA BOLSA</button>
            </div>
            <div class="wish-actions">
                <button class="remove-item-btn" onclick="removeFavoriteFromDrawer(${product.id})" title="Quitar de favoritos">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>
        `;
        wishlistItemsContainer.appendChild(itemEl);
    });
}
window.removeFavoriteFromDrawer = (productId) => {
    wishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('crochet_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts();
    renderWishlistItems();
};
window.addToCartFromWishlist = (productId, size) => {
    addToCart(productId, size);
    toggleWishlistModal(false); // Cerrar favoritos
    toggleCartDrawer(true); // Abrir bolsa de compra
};
// ----------------------------------------------------
// DYNAMIC WHATSAPP ORDER BUILDER (EMBUDO DE VENTAS)
// ----------------------------------------------------
function sendOrderToWhatsApp() {
    if (cart.length === 0) return;
    let message = "🧶 *¡Hola Prendas Tejidas a Crochet!* Vengo de su página web y me interesa realizar una compra. Aquí está mi pedido:\n\n";
    let subtotal = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        const itemPriceFormatted = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(item.price);
        
        message += `*${index + 1}. ${item.name}*\n`;
        message += `   - Talla: ${item.size}\n`;
        message += `   - Cantidad: ${item.quantity}\n`;
        message += `   - Precio unitario: ${itemPriceFormatted}\n\n`;
    });
    const subtotalFormatted = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(subtotal);
    message += `*Total del Pedido:* ${subtotalFormatted}\n\n`;
    message += "📍 Quedo a la espera de confirmar la disponibilidad de lanas y coordinar los datos de envío. ¡Muchas gracias! 😊";
    // Codificar mensaje para URL
    const urlMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${urlMessage}`;
    // Redirigir en pestaña nueva
    window.open(whatsappUrl, '_blank');
}
