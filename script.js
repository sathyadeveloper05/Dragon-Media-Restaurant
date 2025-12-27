// Initialize Swiper Carousel
const swiper = new Swiper('.heroSwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Effect
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Update active link
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Menu Data
const menuData = {
    appetizers: [
        {
            id: 1,
            name: "Bruschetta",
            description: "Toasted bread topped with tomatoes, garlic, fresh basil, and olive oil",
            price: "$8.99",
            image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        },
        {
            id: 2,
            name: "Calamari Fritti",
            description: "Crispy fried squid served with lemon aioli and marinara sauce",
            price: "$12.99",
            image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 3,
            name: "Caprese Salad",
            description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
            price: "$10.99",
            image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80"
        }
    ],
    mains: [
        {
            id: 4,
            name: "Spaghetti Carbonara",
            description: "Classic Roman pasta with eggs, pecorino cheese, pancetta, and black pepper",
            price: "$16.99",
            image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
        },
        {
            id: 5,
            name: "Margherita Pizza",
            description: "Wood-fired pizza with tomato sauce, fresh mozzarella, and basil",
            price: "$14.99",
            image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        },
        {
            id: 6,
            name: "Grilled Salmon",
            description: "Atlantic salmon with lemon butter sauce, asparagus, and roasted potatoes",
            price: "$22.99",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        }
    ],
    desserts: [
        {
            id: 7,
            name: "Tiramisu",
            description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
            price: "$8.99",
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 8,
            name: "Panna Cotta",
            description: "Creamy vanilla custard with fresh berry compote",
            price: "$7.99",
            image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
        },
        {
            id: 9,
            name: "Cannoli",
            description: "Crispy pastry shells filled with sweet ricotta and chocolate chips",
            price: "$6.99",
            image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
        }
    ],
    drinks: [
        {
            id: 10,
            name: "Italian Wine Selection",
            description: "Glass of our featured red or white wine from Italian vineyards",
            price: "$9.99",
            image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 11,
            name: "Limoncello Spritz",
            description: "Refreshing cocktail with limoncello, prosecco, and soda",
            price: "$11.99",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 12,
            name: "Italian Coffee",
            description: "Authentic espresso or cappuccino made with Italian roast beans",
            price: "$4.99",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
    ]
};

// Load Menu Items
function loadMenuItems(category) {
    const menuItemsContainer = document.querySelector(`#${category} .menu-items`);
    menuItemsContainer.innerHTML = '';
    
    menuData[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-desc">${item.description}</p>
            </div>
        `;
        menuItemsContainer.appendChild(menuItem);
    });
}

// Initialize menu with appetizers
loadMenuItems('appetizers');

// Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabBtns.forEach(item => item.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding pane
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        
        // Load menu items for this category
        loadMenuItems(tabId);
    });
});

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = bookingForm.querySelector('input[type="text"]').value;
    const date = bookingForm.querySelector('input[type="date"]').value;
    
    // Show success message
    alert(`Thank you ${name}! Your table has been booked for ${date}. We'll confirm your reservation shortly.`);
    
    // Reset form
    bookingForm.reset();
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
    
    newsletterForm.reset();
});

// Set minimum date for booking (today)
const today = new Date().toISOString().split('T')[0];
document.querySelector('input[type="date"]').setAttribute('min', today);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});