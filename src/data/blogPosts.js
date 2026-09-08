// ---------------------------------------------------------------------------
// CAREMED BLOG — how to add a new post
// ---------------------------------------------------------------------------
// This file is the ONLY place you need to touch to publish a new blog post.
// You do NOT need to write any code — just copy the template object below,
// paste it at the TOP of the `blogPosts` array, and fill in your own text.
//
// 1. Copy everything between the { and } of the TEMPLATE below.
// 2. Paste it as the first item inside `blogPosts` (right after the "["  ).
// 3. Fill in each field:
//      - slug:    a short web-friendly id, e.g. "why-antenatal-checkups-matter"
//                 (lowercase, words separated by dashes, no spaces, must be unique)
//      - title:   the headline of your post
//      - date:    "YYYY-MM-DD" format, e.g. "2026-07-07"
//      - author:  who wrote it, e.g. "Caremed Connect Team"
//      - category: a short label, e.g. "Maternal Health", "Cardiology", "Announcements"
//      - image:   optional. Leave as null to use the default banner, or put an
//                 image path (see the "Adding an image" note below).
//      - excerpt: 1-2 sentence summary shown on the blog list page.
//      - content: the full article. Write each paragraph as a separate line
//                 inside the array. Leave a comma after every paragraph.
// 4. Save the file. That's it — the new post automatically appears at the
//    top of /blog and gets its own page at /blog/your-slug.
//
// Adding an image:
//   Drop your image file into: src/assets/blog/
//   Then add this line near the top of this file (with the other imports):
//     import myImage from "../assets/blog/my-image.jpg";
//   And set  image: myImage  in your post object.
// ---------------------------------------------------------------------------

// TEMPLATE — copy this block for every new post:
// {
//   slug: "your-post-slug-here",
//   title: "Your Post Title Here",
//   date: "2026-07-07",
//   author: "Caremed Connect Team",
//   category: "Maternal Health",
//   image: null,
//   excerpt: "A one or two sentence summary that shows up on the blog list.",
//   content: [
//     "First paragraph of the article goes here.",
//     "Second paragraph goes here. You can add as many paragraphs as you like.",
//   ],
// },

export const blogPosts = [
  {
    slug: "is-your-baby-still-kicking-why-ctg-matters",
    title: "Is Your Baby Still Kicking? Why a CTG Test Matters",
    date: "2026-07-07",
    author: "Caremed Connect Team",
    category: "Maternal Health",
    image: null,
    excerpt:
      "Every kick is reassuring — but if your baby's movements have reduced or changed, don't ignore it. Here's what a Cardiotocography (CTG) test can tell you.",
    content: [
      "Every kick is reassuring — but if you notice your baby's movements have reduced or changed, don't ignore it. A Cardiotocography (CTG) test, also known as a Non-Stress Test (NST), checks your baby's heartbeat and helps assess your baby's well-being while still in the womb.",
      "The test is simple and painless. Two sensors are placed on your abdomen: one monitors your baby's heartbeat, and the other tracks uterine contractions. The entire process usually takes between 30 and 60 minutes, depending on how active your baby is at the time.",
      "A CTG is often recommended if your pregnancy has gone past your due date, if you have high blood pressure, diabetes, or if your doctor simply wants extra reassurance about your baby's well-being.",
      "If you notice reduced or absent baby movements, don't wait for your next scheduled appointment — reach out to your healthcare provider right away. Through our partnership with Amuwo Odofin Maternal & Child Centre, Caremed Connect makes it easy to book a CTG or full Biophysical Profile quickly, either by phone or WhatsApp.",
    ],
  },
  {
    slug: "understanding-the-biophysical-profile-bpp",
    title:
      "Understanding the Biophysical Profile (BPP): A Guide for Expecting Mothers",
    date: "2026-07-01",
    author: "Caremed Connect Team",
    category: "Maternal Health",
    image: null,
    excerpt:
      "A Biophysical Profile combines ultrasound with a Non-Stress Test to score five key signs of your baby's health. Here's what the numbers mean.",
    content: [
      "A Biophysical Profile (BPP) is a simple, painless test that checks your baby's health and well-being during pregnancy. It combines an ultrasound scan with a Non-Stress Test (NST)/Cardiotocography (CTG) to assess how well your baby is doing inside the womb.",
      "The test evaluates five important signs: your baby's breathing movements, body movements, muscle tone, the amount of amniotic fluid, and your baby's heart rate response. Each area receives a score, giving a total score out of 10.",
      "Generally, a score of 8 to 10 means your baby is doing well. A score of 6 may prompt your doctor to recommend further monitoring or repeat testing, while a score of 4 or below may call for urgent assessment. Your healthcare provider will always walk you through what your specific result means.",
      "The test is completely safe — there is no radiation, no injections, and no pain for either mother or baby. Most appointments take 30 to 60 minutes. To prepare, eat normally unless advised otherwise, drink water beforehand, wear comfortable two-piece clothing, and bring your antenatal card.",
    ],
  },
];

export default blogPosts;
