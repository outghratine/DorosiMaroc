# 📚 دليل إضافة الدروس - موقع دروسي 2025/2026

## 🎯 المحتوى

تم إنشاء نظام متكامل لإدارة الدروس يتضمن:

### ✅ ما تم إنجازه:

1. **صفحات الأقسام الرئيسية:**
   - `category-primary.html` - التعليم الابتدائي (6 مستويات)
   - `category-middle.html` - التعليم الإعدادي (3 مستويات)
   - `category-secondary.html` - التعليم الثانوي (باكالوريا)
   - `category-jobs.html` - وظائف المغرب 2025

2. **نماذج دروس جاهزة:**
   - `post-primary-math.html` - درس الرياضيات للسنة الرابعة ابتدائي
   - `post-middle-physics.html` - درس الفيزياء للثالثة إعدادي
   - `post-jobs-morocco.html` - مباريات التوظيف 2025

3. **قالب درس احترافي:**
   - `lesson-template.html` - قالب شامل لإنشاء دروس جديدة

---

## 📖 كيفية إضافة درس جديد

### الطريقة 1: استخدام القالب (الأسهل)

#### الخطوة 1: نسخ القالب
```bash
cp lesson-template.html lessons/primary/math/level1-lesson1.html
```

#### الخطوة 2: تعديل المعلومات الأساسية

افتح الملف وغيّر:

**في قسم `<head>`:**
```html
<title>الأعداد من 0 إلى 100 - السنة الأولى ابتدائي - موقع دروسي</title>
<meta name="description" content="درس الأعداد من 0 إلى 100 للسنة الأولى ابتدائي">
```

**في قسم `<header>`:**
```html
<div class="breadcrumb">
    <a href="../../../index.html">الرئيسية</a> » 
    <a href="../../../category-primary.html">التعليم الابتدائي</a> » 
    <span>الرياضيات - المستوى الأول</span>
</div>
<h1 class="post-title">الأعداد من 0 إلى 100</h1>
```

#### الخطوة 3: إضافة المحتوى

**المقدمة:**
```html
<div class="lesson-intro">
    <h2><i class="fas fa-info-circle"></i> مقدمة</h2>
    <p>في هذا الدرس سنتعلم كيفية قراءة وكتابة الأعداد من 0 إلى 100...</p>
</div>
```

**الأهداف:**
```html
<div class="lesson-objectives">
    <h2><i class="fas fa-bullseye"></i> أهداف الدرس</h2>
    <ul>
        <li>التعرف على الأعداد من 0 إلى 100</li>
        <li>قراءة وكتابة الأعداد</li>
        <li>المقارنة بين الأعداد</li>
    </ul>
</div>
```

**المحتوى الرئيسي:**
```html
<h2>محتوى الدرس</h2>

<h3>الجزء الأول: الأعداد من 0 إلى 10</h3>
<p>نبدأ بالأعداد الصغيرة...</p>

<div class="example-box">
    <h4><i class="fas fa-lightbulb"></i> مثال توضيحي:</h4>
    <p>العدد 5 يُكتب: خمسة</p>
</div>
```

**التمارين:**
```html
<h2>تمارين تطبيقية</h2>

<div class="exercises">
    <h3>التمرين 1:</h3>
    <p>اكتب الأعداد التالية بالحروف: 7، 15، 23</p>
    
    <details>
        <summary><i class="fas fa-check-circle"></i> عرض الحل</summary>
        <div>
            <p>سبعة، خمسة عشر، ثلاثة وعشرون</p>
        </div>
    </details>
</div>
```

#### الخطوة 4: حفظ الملف

احفظ الملف في المسار المناسب:
- **ابتدائي:** `lessons/primary/[المادة]/level[الرقم].html`
- **إعدادي:** `lessons/middle/[المادة]/level[الرقم].html`
- **ثانوي:** `lessons/secondary/[المادة]/level[الرقم].html`

---

## 🗂️ هيكل المجلدات

```
dorossy-2025/
├── index.html (الصفحة الرئيسية)
├── category-primary.html (قسم الابتدائي)
├── category-middle.html (قسم الإعدادي)
├── category-secondary.html (قسم الثانوي)
├── category-jobs.html (قسم الوظائف)
├── lesson-template.html (القالب)
├── lessons/
│   ├── primary/
│   │   ├── math/
│   │   │   ├── level1.html
│   │   │   ├── level2.html
│   │   │   └── ...
│   │   ├── arabic/
│   │   ├── french/
│   │   ├── science/
│   │   └── islamic/
│   ├── middle/
│   │   ├── math/
│   │   ├── physics/
│   │   ├── svt/
│   │   ├── arabic/
│   │   ├── french/
│   │   └── social/
│   └── secondary/
│       ├── math/
│       ├── physics/
│       ├── svt/
│       ├── arabic/
│       └── ...
```

---

## 📝 نصائح لكتابة دروس فعالة

### 1. العنوان
- واضح ومحدد
- يحتوي على المستوى والمادة
- مثال: "الجمع والطرح - السنة الثانية ابتدائي"

### 2. المقدمة
- موجزة (3-5 أسطر)
- تشرح أهمية الدرس
- تربط بالدروس السابقة

### 3. الأهداف
- محددة وقابلة للقياس
- 3-5 أهداف لكل درس
- تبدأ بأفعال إجرائية (يتعرف، يفهم، يطبق)

### 4. المحتوى
- مقسم إلى أجزاء واضحة
- يستخدم أمثلة توضيحية
- يحتوي على صور ورسومات

### 5. التمارين
- متدرجة الصعوبة
- تغطي جميع أجزاء الدرس
- تتضمن الحلول المفصلة

### 6. الخلاصة
- تلخص النقاط الأساسية
- تربط بالدروس القادمة
- تشجع على المراجعة

---

## 🎨 تخصيص التصميم

### الألوان حسب المستوى:

**الابتدائي:**
```css
/* أزرق */
background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
```

**الإعدادي:**
```css
/* أخضر */
background: linear-gradient(135deg, #059669 0%, #047857 100%);
```

**الثانوي:**
```css
/* بنفسجي */
background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
```

### الأيقونات حسب المادة:

- **الرياضيات:** `<i class="fas fa-calculator"></i>`
- **العربية:** `<i class="fas fa-book-open"></i>`
- **الفرنسية:** `<i class="fas fa-language"></i>`
- **العلوم:** `<i class="fas fa-flask"></i>`
- **الإسلامية:** `<i class="fas fa-mosque"></i>`
- **الاجتماعيات:** `<i class="fas fa-globe"></i>`

---

## 🔗 ربط الدروس بالأقسام

### في صفحة القسم (category-primary.html):

```html
<div class="feature-card">
    <i class="fas fa-calculator"></i>
    <h3>الرياضيات</h3>
    <p>الأعداد، العمليات، الهندسة</p>
    <a href="lessons/primary/math/level1.html" class="btn-small">الدروس</a>
</div>
```

### في الصفحة الرئيسية (index.html):

```html
<article class="post-card">
    <img src="https://via.placeholder.com/400x250" alt="درس الرياضيات">
    <div class="post-card-content">
        <span class="post-category">الرياضيات - رابعة ابتدائي</span>
        <h2><a href="lessons/primary/math/level4-lesson1.html">الأعداد العشرية</a></h2>
        <p>شرح مفصل للأعداد العشرية مع تمارين محلولة</p>
        <a href="lessons/primary/math/level4-lesson1.html" class="read-more">قراءة المزيد</a>
    </div>
</article>
```

---

## 📥 إضافة ملفات PDF للتحميل

### الخطوة 1: إنشاء مجلد التحميلات
```bash
mkdir -p downloads/primary/math
mkdir -p downloads/middle/physics
mkdir -p downloads/secondary/math
```

### الخطوة 2: رفع ملفات PDF
ضع ملفات PDF في المجلد المناسب

### الخطوة 3: ربط الملف في الدرس
```html
<div class="download-section">
    <h3><i class="fas fa-download"></i> تحميل الدرس PDF</h3>
    <a href="../../../downloads/primary/math/level1-lesson1.pdf" class="btn-download" download>
        <i class="fas fa-file-pdf"></i> تحميل الآن
    </a>
</div>
```

---

## 🎯 قائمة المراجعة قبل النشر

- [ ] العنوان واضح ومحدد
- [ ] Meta tags محدثة (title, description)
- [ ] المقدمة موجودة
- [ ] الأهداف محددة (3-5 أهداف)
- [ ] المحتوى مقسم إلى أجزاء
- [ ] يوجد أمثلة توضيحية
- [ ] يوجد تمارين مع الحلول
- [ ] الخلاصة موجودة
- [ ] الروابط تعمل بشكل صحيح
- [ ] الصور موجودة ومناسبة
- [ ] التصميم متجاوب (يعمل على الهاتف)
- [ ] لا توجد أخطاء إملائية

---

## 💡 أمثلة جاهزة

### مثال 1: درس رياضيات ابتدائي
```
العنوان: الجمع والطرح - السنة الثانية ابتدائي
المسار: lessons/primary/math/level2-addition.html
المحتوى: الجمع بدون احتفاظ، الجمع مع احتفاظ، الطرح
التمارين: 5 تمارين متدرجة
```

### مثال 2: درس فيزياء إعدادي
```
العنوان: الكهرباء - الثالثة إعدادي
المسار: lessons/middle/physics/level3-electricity.html
المحتوى: التيار الكهربائي، الدارة الكهربائية، قانون أوم
التمارين: 3 تمارين + تجربة عملية
```

### مثال 3: درس رياضيات ثانوي
```
العنوان: الدوال - الثانية باك علوم رياضية
المسار: lessons/secondary/math/bac2-functions.html
المحتوى: تعريف الدالة، مجموعة التعريف، الاشتقاق
التمارين: 4 تمارين من الامتحانات الوطنية
```

---

## 🚀 نشر الدروس

### 1. على GitHub:
```bash
git add .
git commit -m "إضافة دروس جديدة"
git push origin main
```

### 2. التحديث التلقائي:
- GitHub Pages يحدث الموقع تلقائياً بعد 2-3 دقائق

### 3. التحقق:
- افتح الموقع: `https://outghratine.github.io/dorossy-2025/`
- تأكد من ظهور الدروس الجديدة

---

## 📞 الدعم

إذا واجهت أي مشكلة:
1. راجع هذا الدليل
2. افحص ملف `lesson-template.html`
3. قارن مع الدروس الجاهزة
4. تأكد من صحة المسارات

---

## ✅ الخلاصة

الآن لديك:
- ✅ 4 صفحات أقسام رئيسية
- ✅ 3 نماذج دروس جاهزة
- ✅ قالب احترافي لإنشاء دروس جديدة
- ✅ دليل شامل للاستخدام

**ابدأ بإضافة دروسك الآن! 🎓**

---

*موقع دروسي - الموسم الدراسي 2025/2026*
