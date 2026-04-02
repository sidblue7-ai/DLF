// 🚀 KEYESTATES - PREMIUM INTERACTIVE UPGRADE
class KeyEstates {
    constructor() {
      this.init();
    }
  
    init() {
      this.preloader();
      setTimeout(() => {
        this.setupInteractions();
      }, 500);
    }
  
    preloader() {
      const preloader = document.querySelector('.preloader');
      let progress = 0;
      
      const interval = setInterval(() => {
        progress += 4;
        if (progress >= 100) {
          clearInterval(interval);
          document.querySelector('.preloader').classList.add('hidden');
        }
      }, 50);
      
      setTimeout(() => {
        clearInterval(interval);
        document.querySelector('.preloader').classList.add('hidden');
      }, 3000);
    }
  
    setupInteractions() {
      this.mobileMenu();
      this.smoothScroll();
      this.animateOnScroll();
      this.formHandler();
      this.mouseTrail();
      this.propertyHover();
    }
  
    mobileMenu() {
      const toggle = document.querySelector('.menu-toggle');
      const navLinks = document.querySelector('.nav-links');
      
      toggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  
    smoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(anchor.getAttribute('href'));
          target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.querySelector('.nav-links')?.classList.remove('active');
        });
      });
    }
  
    animateOnScroll() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, { threshold: 0.1 });
  
      document.querySelectorAll('.card, .hero, h2').forEach(el => {
        el.setAttribute('data-animate', '');
        observer.observe(el);
      });
    }
  
    formHandler() {
      const form = document.getElementById('contactForm');
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        this.showNotification('✅ Thank you! We will contact you soon.', 'success');
        form.reset();
      });
    }
  
    mouseTrail() {
      const trail = document.createElement('div');
      trail.className = 'mouse-trail';
      document.body.appendChild(trail);
  
      document.addEventListener('mousemove', (e) => {
        trail.animate([
          { transform: `translate(${e.clientX}px, ${e.clientY}px) scale(0)` },
          { transform: `translate(${e.clientX}px, ${e.clientY}px) scale(1)` }
        ], { duration: 300, fill: 'forwards' });
      });
    }
  
    propertyHover() {
      document.querySelectorAll('.card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
      });
    }
  
    showNotification(message, type) {
      const notification = document.createElement('div');
      notification.className = `notification ${type}`;
      notification.textContent = message;
      document.body.appendChild(notification);
      
      setTimeout(() => notification.classList.add('show'), 100);
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
      }, 4000);
    }
  }
  
  // 🏠 PROPERTY DATA - EXPANDED
  const properties = [
    {
      title: "DTC Downtown 3BHK",
      location: "Rajarhat Main Road",
      price: "₹1.45 Cr",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop",
      size: "1750 sqft"
    },
    {
      title: "DTC Downtown 4BHK", 
      location: "New Town",
      price: "₹1.85 Cr",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop",
      size: "2200 sqft"
    },
    {
      title: "Luxury Penthouse",
      location: "Salt Lake",
      price: "₹2.95 Cr",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop",
      size: "3200 sqft"
    },
    {
      title: "Prime 2BHK",
      location: "BT Road",
      price: "₹95 Lac",
      img: "https://images.unsplash.com/photo-1602940659805-770d1b81cf3e?w=400&h=250&fit=crop",
      size: "1250 sqft"
    }
  ];
  
  // POPULATE PROPERTIES
  const grid = document.getElementById('propertyGrid');
  properties.forEach((property, index) => {
    grid.innerHTML += `
      <div class="card" data-tilt>
        <img src="${property.img}" alt="${property.title}" loading="lazy">
        <div class="card-body">
          <h3>${property.title}</h3>
          <p>${property.location} • ${property.size}</p>
          <div class="price">${property.price}</div>
          <a href="#contact" class="btn btn-small">Enquire Now</a>
        </div>
      </div>
    `;
  });
  
  // 🎯 START APP
  document.addEventListener('DOMContentLoaded', () => {
    new KeyEstates();
  });