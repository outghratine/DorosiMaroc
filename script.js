// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Search Functionality =====
const searchIcon = document.querySelector('.search-icon');
if (searchIcon) {
    searchIcon.addEventListener('click', function() {
        const searchQuery = prompt('ابحث في الموقع:');
        if (searchQuery) {
            alert('جاري البحث عن: ' + searchQuery);
            // يمكن إضافة وظيفة البحث الفعلية هنا
        }
    });
}

// ===== Share Button Functionality =====
const shareButtons = document.querySelectorAll('.share-btn');
shareButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const postCard = this.closest('.post-card');
        const postTitle = postCard.querySelector('.post-title a').textContent;
        
        // Check if Web Share API is supported
        if (navigator.share) {
            navigator.share({
                title: postTitle,
                text: 'شاهد هذا المقال المميز',
                url: window.location.href
            }).then(() => {
                console.log('تم المشاركة بنجاح');
            }).catch((error) => {
                console.log('خطأ في المشاركة:', error);
                showShareOptions(postTitle);
            });
        } else {
            showShareOptions(postTitle);
        }
    });
});

// ===== Show Share Options =====
function showShareOptions(title) {
    const shareText = encodeURIComponent(title);
    const shareUrl = encodeURIComponent(window.location.href);
    
    const options = `
        مشاركة المقال:
        
        1. فيسبوك
        2. تويتر
        3. واتساب
        4. نسخ الرابط
    `;
    
    const choice = prompt(options);
    
    switch(choice) {
        case '1':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
            break;
        case '2':
            window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank');
            break;
        case '3':
            window.open(`https://wa.me/?text=${shareText}%20${shareUrl}`, '_blank');
            break;
        case '4':
            copyToClipboard(window.location.href);
            alert('تم نسخ الرابط!');
            break;
    }
}

// ===== Copy to Clipboard =====
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// ===== Sticky Navigation =====
let lastScroll = 0;
const mainNav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        mainNav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        mainNav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        mainNav.style.transform = 'translateY(0)';
        mainNav.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// ===== Lazy Loading Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('.post-image img');
    images.forEach(img => imageObserver.observe(img));
}

// ===== Reading Progress Bar =====
function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #14b8a6, #2563eb);
        z-index: 9999;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.pageYOffset;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

createProgressBar();

// ===== Back to Top Button =====
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.id = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
    transition: all 0.3s ease;
    z-index: 1000;
`;
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopButton.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) rotate(360deg)';
});

backToTopButton.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
});

// ===== Mobile Menu Toggle =====
function createMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.style.cssText = `
        display: none;
        background: transparent;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 10px;
    `;
    
    if (window.innerWidth <= 768) {
        document.querySelector('.main-nav .container').prepend(menuToggle);
        menuToggle.style.display = 'block';
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-active');
            if (navMenu.classList.contains('mobile-active')) {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.right = '0';
                navMenu.style.left = '0';
                navMenu.style.background = '#1a1a4d';
                navMenu.style.padding = '20px';
            } else {
                navMenu.style.display = 'none';
            }
        });
    }
}

// ===== Initialize on Load =====
window.addEventListener('load', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Create mobile menu if needed
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.post-card, .widget');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// ===== Handle Window Resize =====
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'row';
        navMenu.style.position = 'static';
        navMenu.classList.remove('mobile-active');
    }
});

// ===== Print Functionality =====
function printPage() {
    window.print();
}

// ===== Dark Mode Toggle (Optional Feature) =====
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

console.log('موقع دروسي - تم تحميل الموقع بنجاح ✓');
