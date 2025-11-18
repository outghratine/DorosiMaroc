// ===== نظام SEO المتقدم =====

// 1. إضافة Schema.org Markup تلقائياً
function addSchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "موقع دروسي",
        "description": "منصة تعليمية شاملة تقدم دروس وفروض وامتحانات لجميع المستويات الدراسية",
        "url": "https://outghratine.github.io/DorosiMaroc",
        "logo": "https://outghratine.github.io/DorosiMaroc/logo.png",
        "sameAs": [
            "https://facebook.com/dorossy",
            "https://twitter.com/dorossy",
            "https://youtube.com/@dorossy"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@dorossy.com",
            "contactType": "Customer Service"
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}

// 2. إضافة Breadcrumb Schema
function addBreadcrumbSchema() {
    const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": []
    };

    const breadcrumbs = document.querySelectorAll('.breadcrumb a, .breadcrumb .current');
    breadcrumbs.forEach((item, index) => {
        breadcrumbList.itemListElement.push({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.textContent.trim(),
            "item": item.href || window.location.href
        });
    });

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbList);
    document.head.appendChild(script);
}

// 3. إضافة Article Schema للمقالات
function addArticleSchema() {
    const article = document.querySelector('.main-article');
    if (!article) return;

    const title = document.querySelector('.article-title')?.textContent;
    const description = document.querySelector('meta[name="description"]')?.content;
    const image = document.querySelector('.article-featured-image img')?.src;
    const datePublished = document.querySelector('.post-date')?.getAttribute('datetime') || new Date().toISOString();
    const author = document.querySelector('.post-author')?.textContent || 'موقع دروسي';

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image,
        "datePublished": datePublished,
        "dateModified": datePublished,
        "author": {
            "@type": "Person",
            "name": author
        },
        "publisher": {
            "@type": "Organization",
            "name": "موقع دروسي",
            "logo": {
                "@type": "ImageObject",
                "url": "https://outghratine.github.io/DorosiMaroc/logo.png"
            }
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(articleSchema);
    document.head.appendChild(script);
}

// 4. تحسين الصور (Lazy Loading)
function optimizeImages() {
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        img.loading = 'lazy';
        if (!img.alt) {
            img.alt = img.closest('article')?.querySelector('.post-title, .article-title')?.textContent || 'صورة';
        }
    });
}

// 5. إضافة Canonical URL
function addCanonicalURL() {
    if (!document.querySelector('link[rel="canonical"]')) {
        const canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = window.location.href.split('?')[0].split('#')[0];
        document.head.appendChild(canonical);
    }
}

// 6. تحسين الروابط الداخلية
function improveInternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        const url = new URL(link.href);
        if (url.hostname !== window.location.hostname) {
            link.rel = 'noopener noreferrer';
            if (!link.hasAttribute('target')) {
                link.target = '_blank';
            }
        }
    });
}

// 7. إضافة Meta Tags الاجتماعية تلقائياً
function addSocialMetaTags() {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.content || '';
    const image = document.querySelector('.article-featured-image img, .post-image img')?.src || '';
    const url = window.location.href;

    // Open Graph
    const ogTags = {
        'og:title': title,
        'og:description': description,
        'og:image': image,
        'og:url': url,
        'og:type': 'article',
        'og:site_name': 'موقع دروسي'
    };

    // Twitter Card
    const twitterTags = {
        'twitter:card': 'summary_large_image',
        'twitter:title': title,
        'twitter:description': description,
        'twitter:image': image
    };

    // إضافة OG tags
    Object.entries(ogTags).forEach(([property, content]) => {
        if (content && !document.querySelector(`meta[property="${property}"]`)) {
            const meta = document.createElement('meta');
            meta.setAttribute('property', property);
            meta.content = content;
            document.head.appendChild(meta);
        }
    });

    // إضافة Twitter tags
    Object.entries(twitterTags).forEach(([name, content]) => {
        if (content && !document.querySelector(`meta[name="${name}"]`)) {
            const meta = document.createElement('meta');
            meta.name = name;
            meta.content = content;
            document.head.appendChild(meta);
        }
    });
}

// 8. تتبع وقت القراءة
function trackReadingTime() {
    const content = document.querySelector('.article-content');
    if (!content) return;

    const text = content.textContent;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // 200 كلمة في الدقيقة

    // إضافة وقت القراءة للصفحة
    const readingTimeElement = document.createElement('div');
    readingTimeElement.className = 'reading-time';
    readingTimeElement.innerHTML = `<i class="fas fa-clock"></i> وقت القراءة: ${readingTime} دقيقة`;
    readingTimeElement.style.cssText = 'color: #6b7280; font-size: 14px; margin: 10px 0;';
    
    const articleMeta = document.querySelector('.article-meta');
    if (articleMeta) {
        articleMeta.appendChild(readingTimeElement);
    }
}

// 9. إنشاء جدول المحتويات تلقائياً
function generateTableOfContents() {
    const content = document.querySelector('.article-content');
    if (!content) return;

    const headings = content.querySelectorAll('h2, h3');
    if (headings.length < 3) return; // لا تنشئ جدول إذا كان هناك أقل من 3 عناوين

    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3><i class="fas fa-list"></i> جدول المحتويات</h3><ul></ul>';
    
    const tocList = toc.querySelector('ul');
    
    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        
        const li = document.createElement('li');
        li.className = heading.tagName.toLowerCase();
        li.innerHTML = `<a href="#${id}">${heading.textContent}</a>`;
        tocList.appendChild(li);
    });

    // إضافة الجدول قبل المحتوى
    content.insertBefore(toc, content.firstChild);
}

// 10. تحسين سرعة التحميل
function improvePageSpeed() {
    // تأجيل تحميل الخطوط
    const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    fontLinks.forEach(link => {
        link.rel = 'preload';
        link.as = 'style';
        link.onload = function() { this.rel = 'stylesheet'; };
    });

    // تحميل الصور بشكل تدريجي
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// تشغيل جميع وظائف SEO عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    addSchemaMarkup();
    addBreadcrumbSchema();
    addArticleSchema();
    optimizeImages();
    addCanonicalURL();
    improveInternalLinks();
    addSocialMetaTags();
    trackReadingTime();
    generateTableOfContents();
    improvePageSpeed();
    
    console.log('✅ SEO optimizations applied successfully!');
});

// تصدير الوظائف
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addSchemaMarkup,
        addBreadcrumbSchema,
        addArticleSchema,
        optimizeImages,
        addCanonicalURL,
        improveInternalLinks,
        addSocialMetaTags,
        trackReadingTime,
        generateTableOfContents,
        improvePageSpeed
    };
}
