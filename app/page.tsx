import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "تقنية امتصاص عميق",
    description: "تنظيف المسامات من الأوساخ والرؤوس السوداء مع الحفاظ على توازن البشرة."
  },
  {
    title: "تصميم مناسب لكل أنواع البشرة",
    description: "خمسة مستويات قوة مع رؤوس متعددة تناسب البشرة الحساسة والعادية والدهنية."
  },
  {
    title: "نتائج سريعة",
    description: "استمتعي ببشرة ناعمة ومشرقة من أول استخدام مع جلسات تدوم أقل من 10 دقائق."
  }
];

const testimonials = [
  {
    name: "سمية من وهران",
    content:
      "كنت نعاني من الرؤوس السوداء ومسام واسعة، بعد أسبوعين من الاستخدام تحسنت بشرتي بشكل كبير وما عادش نحتاج صالون كل أسبوع.",
    rating: 5
  },
  {
    name: "أمينة من الجزائر العاصمة",
    content:
      "الجهاز خفيف وسهل الاستعمال، يعجبني بزاف لأنه ما يألمش والبطارية تدوم. خدمة الزبائن تجاوبوا معايا في نفس اليوم.",
    rating: 5
  },
  {
    name: "نسرين من قسنطينة",
    content:
      "وصلني المنتج في أقل من 48 ساعة مع التوصيل المجاني. الجودة ممتازة بعد شهر من الاستخدام مازال يخدم كي النهار الأول.",
    rating: 5
  }
];

const faqs = [
  {
    question: "كيفاش نخدم الجهاز؟",
    answer:
      "بعد شحن الجهاز، نظفي وجهك بالبخار أو بماء دافئ، اختاري رأس يناسب بشرتك وحددي مستوى الشفط المناسب، ومن بعد حركي الجهاز بلطف على كامل الوجه."
  },
  {
    question: "هل الاستعمال يومي؟",
    answer:
      "يكفي 2 إلى 3 مرات في الأسبوع. للبشرة الحساسة ننصح بمستوى شفط منخفض مع استعمال مرطب بعد الجلسة."
  },
  {
    question: "واش كاين ضمان؟",
    answer:
      "نضمنوا لك جودة المنتج مع استرجاع مجاني خلال 7 أيام إذا كان فيه أي خلل مصنعي."
  }
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__text">
          <span className="badge">عرض محدود في السوق الجزائري</span>
          <h1>جهاز العناية الفاخرة ببشرتك داخل المنزل</h1>
          <p>
            تخلصي من الرؤوس السوداء والجلد الميت بسهولة مع الجهاز الذكي لتنظيف الوجه.
            سعر خاص <strong>3500 دج</strong> مع{" "}
            <strong className="highlight">توصيل مجاني لكل الولايات</strong>.
          </p>
          <div className="hero__cta">
            <Link className="cta cta--primary" href="#order">
              أطلبي الآن مع الدفع عند الاستلام
            </Link>
            <p className="hero__guarantee">استبدال مجاني خلال 7 أيام إذا ما عجبكش.</p>
          </div>
          <div className="hero__stats">
            <div>
              <span className="stat__value">+4,700</span>
              <span className="stat__label">زبونة راضين في 2024</span>
            </div>
            <div>
              <span className="stat__value">48h</span>
              <span className="stat__label">توصيل سريع للمدن الكبرى</span>
            </div>
            <div>
              <span className="stat__value">0 دج</span>
              <span className="stat__label">تكاليف التوصيل</span>
            </div>
          </div>
        </div>
        <div className="hero__image">
          <Image
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=720&q=80"
            alt="جهاز تنظيف البشرة المنزلي"
            width={480}
            height={640}
            priority
          />
          <div className="price-card">
            <span className="price-card__label">السعر الآن</span>
            <span className="price-card__value">3500 دج</span>
            <span className="price-card__shipping">+ توصيل مجاني</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>ليش بنات الجزائر يختاروا جهازنا؟</h2>
        <div className="features">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <h2>نتائج حقيقية خلال أسابيع قليلة</h2>
        <div className="before-after">
          <div className="before-after__panel">
            <span>قبل</span>
            <Image
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80"
              alt="قبل استعمال جهاز تنظيف البشرة"
              width={320}
              height={420}
            />
          </div>
          <div className="before-after__panel">
            <span>بعد</span>
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
              alt="بعد استعمال جهاز تنظيف البشرة"
              width={320}
              height={420}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>وش قالوا الزبائن</h2>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <div className="testimonial-card__stars">
                {"★★★★★".slice(0, testimonial.rating)}
              </div>
              <p>{testimonial.content}</p>
              <span className="testimonial-card__name">{testimonial.name}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>أسئلة متكررة</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq__item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="order" className="section section--cta">
        <h2>جاهزة تبداي روتينك الجديد؟</h2>
        <p>
          أطلبي الآن جهاز العناية الفاخرة بسعر 3500 دج مع توصيل مجاني والدفع عند
          الاستلام في كامل الولايات.
        </p>
        <Link className="cta cta--inverse" href="https://wa.me/213555000000" target="_blank">
          اطلب عبر واتساب الآن
        </Link>
        <span className="section__note">
          تواصل معنا على مدار الأسبوع من 9 صباحًا إلى 10 ليلاً.
        </span>
      </section>

      <footer className="footer">
        <div>
          <p>© 2024 جمالك المنزلي. كل الحقوق محفوظة.</p>
        </div>
        <div className="footer__links">
          <Link href="#order">الطلب السريع</Link>
          <Link href="tel:+213555000000">اتصل بنا</Link>
          <Link href="mailto:support@example.dz">خدمة الزبائن</Link>
        </div>
      </footer>
    </main>
  );
}
