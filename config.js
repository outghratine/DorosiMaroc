// ===== إعدادات الموقع =====
const siteConfig = {
    // معلومات الموقع الأساسية
    siteName: "موقع دروسي",
    siteDescription: "منصة تعليمية شاملة تقدم دروس وفروض وامتحانات لجميع المستويات الدراسية",
    siteUrl: "https://outghratine.github.io/DorosiMaroc",
    
    // معلومات التواصل
    email: "contact@dorossy.com",
    phone: "+212 6XX XXX XXX",
    
    // وسائل التواصل الاجتماعي
    social: {
        facebook: "https://facebook.com/dorossy",
        twitter: "https://twitter.com/dorossy",
        youtube: "https://youtube.com/@dorossy",
        instagram: "https://instagram.com/dorossy",
        telegram: "https://t.me/dorossy"
    },
    
    // Google Analytics
    googleAnalyticsId: "G-XXXXXXXXXX", // غيّر هذا برقمك
    
    // Google AdSense
    googleAdsenseId: "ca-pub-XXXXXXXXXXXXXXXX", // غيّر هذا برقمك
    
    // Disqus للتعليقات
    disqusShortname: "dorossy", // غيّر هذا باسمك في Disqus
    
    // إعدادات المقالات
    postsPerPage: 6,
    showAuthor: true,
    showDate: true,
    showViews: true,
    showComments: true,
    
    // الألوان (يمكن تخصيصها)
    colors: {
        primary: "#1a1a4d",
        secondary: "#2563eb",
        accent: "#14b8a6",
        success: "#16a34a",
        warning: "#f59e0b",
        danger: "#dc2626"
    }
};

// تصدير الإعدادات
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
