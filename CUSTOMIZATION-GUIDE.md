# 🎨 دليل التخصيص السريع - موقع دروسي 2025/2026

## 📋 نظرة عامة

هذا الدليل يشرح لك كيفية تخصيص الموقع بسهولة لجعله مناسباً لاحتياجاتك الخاصة.

---

## 1️⃣ تغيير اسم الموقع والشعار

### الطريقة الأولى: من ملف config.js (موصى به)

افتح ملف `config.js` وعدّل:

```javascript
const SITE_CONFIG = {
    siteName: "موقع دروسي",  // ← غيّر الاسم هنا
    siteDescription: "الموسم الدراسي 2025/2026",
    siteYear: "2025",
    // ... باقي الإعدادات
};
```

### الطريقة الثانية: التعديل المباشر

ابحث في جميع ملفات HTML عن:
- `موقع دروسي` ← استبدله باسم موقعك
- `الموسم الدراسي 2025/2026` ← استبدله بوصفك

---

## 2️⃣ تغيير الألوان

### افتح ملف `style.css` وعدّل المتغيرات:

```css
:root {
    /* الألوان الأساسية */
    --primary-color: #2563eb;      /* الأزرق - غيّره للون الرئيسي */
    --secondary-color: #059669;    /* الأخضر - غيّره للون الثانوي */
    --accent-color: #f59e0b;       /* البرتقالي - لون التمييز */
    
    /* ألوان إضافية */
    --dark-color: #1e293b;
    --light-color: #f8fafc;
    --text-color: #334155;
}
```

### أمثلة على الألوان:

#### ألوان دافئة:
```css
--primary-color: #dc2626;   /* أحمر */
--secondary-color: #f59e0b; /* برتقالي */
--accent-color: #fbbf24;    /* أصفر */
```

#### ألوان باردة:
```css
--primary-color: #0891b2;   /* أزرق فاتح */
--secondary-color: #8b5cf6; /* بنفسجي */
--accent-color: #06b6d4;    /* سماوي */
```

#### ألوان محايدة:
```css
--primary-color: #475569;   /* رمادي داكن */
--secondary-color: #64748b; /* رمادي متوسط */
--accent-color: #94a3b8;    /* رمادي فاتح */
```

---

## 3️⃣ تغيير الصور

### الصور الحالية تستخدم placeholder.com

**لاستبدالها:**

1. **ضع صورك في مجلد `images/`**
   ```
   images/
   ├── logo.png
   ├── post1.jpg
   ├── post2.jpg
   └── ...
   ```

2. **ابحث في ملفات HTML عن:**
   ```html
   src="https://via.placeholder.com/..."
   ```

3. **استبدلها بـ:**
   ```html
   src="images/post1.jpg"
   ```

### مواقع للحصول على صور مجانية:
- [Unsplash](https://unsplash.com) - صور عالية الجودة
- [Pexels](https://pexels.com) - صور ومقاطع فيديو
- [Pixabay](https://pixabay.com) - صور ورسومات

---

## 4️⃣ إضافة مقالات جديدة

### الخطوات:

1. **انسخ ملف مقال موجود:**
   ```bash
   cp post-primary-math.html post-new-article.html
   ```

2. **افتح الملف الجديد وعدّل:**
   - العنوان `<title>`
   - المحتوى الرئيسي
   - الصور
   - التاريخ
   - الوسوم (Tags)

3. **أضف رابط المقال في `index.html`:**
   ```html
   <article class="post-card">
       <h3 class="post-title">
           <a href="post-new-article.html">عنوان المقال الجديد</a>
       </h3>
       <!-- ... -->
   </article>
   ```

---

## 5️⃣ تعديل القوائم والأقسام

### في ملف `index.html`، ابحث عن:

```html
<nav class="main-nav">
    <ul class="nav-menu">
        <li><a href="#"><i class="fas fa-book"></i> القسم الأول</a></li>
        <li><a href="#"><i class="fas fa-book"></i> القسم الثاني</a></li>
        <!-- أضف أقسام جديدة هنا -->
    </ul>
</nav>
```

### لإضافة قسم جديد:

```html
<li><a href="category-new.html"><i class="fas fa-star"></i> قسم جديد</a></li>
```

### أيقونات Font Awesome:
- `fa-book` - كتاب
- `fa-graduation-cap` - قبعة التخرج
- `fa-briefcase` - حقيبة
- `fa-star` - نجمة
- `fa-heart` - قلب
- [المزيد من الأيقونات](https://fontawesome.com/icons)

---

## 6️⃣ تخصيص معلومات الاتصال

### في ملف `contact.html`:

```html
<div class="contact-info">
    <p><i class="fas fa-envelope"></i> info@dorossy.com</p>  <!-- غيّر البريد -->
    <p><i class="fas fa-phone"></i> +212 6XX XXX XXX</p>     <!-- غيّر الهاتف -->
</div>
```

### في ملف `config.js`:

```javascript
contactInfo: {
    email: "info@yoursite.com",        // بريدك
    phone: "+212 6XX XXX XXX",         // هاتفك
    address: "المغرب",                 // عنوانك
    facebook: "https://facebook.com/yourpage",
    twitter: "https://twitter.com/yourpage",
    youtube: "https://youtube.com/yourchannel"
}
```

---

## 7️⃣ إضافة Google AdSense

### الخطوة 1: احصل على كود AdSense

1. سجّل في [Google AdSense](https://www.google.com/adsense)
2. احصل على كود الإعلان

### الخطوة 2: ضع الكود في موقعك

**في `<head>` لجميع الصفحات:**
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

**في الأماكن المخصصة للإعلانات:**
```html
<div class="ad-placeholder">
    <!-- ضع كود الإعلان هنا -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="XXXXXXXXXX"
         data-ad-format="auto"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

---

## 8️⃣ إضافة Google Analytics

### في `<head>` لجميع الصفحات:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**احصل على معرف التتبع من:** [Google Analytics](https://analytics.google.com)

---

## 9️⃣ تخصيص SEO

### في كل صفحة HTML، عدّل:

```html
<head>
    <title>عنوان الصفحة - موقع دروسي</title>
    <meta name="description" content="وصف مختصر للصفحة (150-160 حرف)">
    <meta name="keywords" content="كلمة1, كلمة2, كلمة3">
    
    <!-- Open Graph للمشاركة على فيسبوك -->
    <meta property="og:title" content="عنوان الصفحة">
    <meta property="og:description" content="وصف الصفحة">
    <meta property="og:image" content="https://yoursite.com/image.jpg">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="عنوان الصفحة">
    <meta name="twitter:description" content="وصف الصفحة">
</head>
```

### تحديث ملف `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://yoursite.com/</loc>
        <lastmod>2024-11-18</lastmod>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://yoursite.com/post-new-article.html</loc>
        <lastmod>2024-11-18</lastmod>
        <priority>0.8</priority>
    </url>
    <!-- أضف باقي الصفحات -->
</urlset>
```

---

## 🔟 نصائح إضافية

### ✅ قبل النشر:

1. **اختبر جميع الروابط** - تأكد أنها تعمل
2. **اختبر على الهاتف** - تأكد من التجاوب
3. **ضغط الصور** - استخدم [TinyPNG](https://tinypng.com)
4. **تحقق من السرعة** - استخدم [PageSpeed Insights](https://pagespeed.web.dev)
5. **راجع المحتوى** - تأكد من عدم وجود أخطاء إملائية

### ✅ بعد النشر:

1. **سجّل في Google Search Console**
2. **أرسل خريطة الموقع (sitemap.xml)**
3. **شارك على وسائل التواصل**
4. **راقب الإحصائيات في Google Analytics**
5. **حدّث المحتوى بانتظام**

---

## 📞 هل تحتاج مساعدة؟

إذا واجهت أي مشكلة في التخصيص:

1. راجع ملف `README-COMPLETE.md`
2. راجع ملف `QUICK-START.md`
3. ابحث عن الحل في Google
4. اطلب المساعدة من مطور ويب

---

## 🎉 نصيحة أخيرة

**لا تخف من التجربة!** 

- احتفظ بنسخة احتياطية قبل التعديل
- جرّب التغييرات على جهازك أولاً
- تعلم من أخطائك
- استمتع ببناء موقعك!

---

**بالتوفيق! 🚀**

*فريق موقع دروسي*
