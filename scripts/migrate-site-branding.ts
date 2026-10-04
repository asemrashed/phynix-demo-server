import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const FOOTER = {
  brandName: "PhynixEducation",
  brandTagline:
    "English learning platform for students in Bangladesh and worldwide. Learn at your own pace with recorded classes, structured courses, and verified certificates.",
  quickLinksTitle: "Quick Links",
  companyLinksTitle: "Company",
  contactTitle: "Contact",
  socialTitle: "Connect With Us",
  quickLinks: [
    { href: "/courses", label: "All Courses" },
    { href: "/courses?free=true", label: "Free Courses" },
    { href: "/blog", label: "Blog" },
  ],
  companyLinks: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
  bottomLinks: [
    { href: "/privacy-policy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
  socialLinks: [{ platform: "youtube", href: "https://www.youtube.com" }],
  copyrightText: "PhynixEducation. All rights reserved.",
}

const PAGES = [
  {
    slug: "about",
    title: "About PhynixEducation",
    description:
      "Learn English at your own pace with recorded classes, structured courses, and verified certificates.",
    contentHtml: `<p>
PhynixEducation is an English learning platform built for students who want flexibility.
We create recorded classes so you can learn anytime, anywhere, and move through lessons at your own pace.
</p>
<h2>Our Mission</h2>
<p>
We make quality English education accessible to learners in Bangladesh and worldwide by combining
expert-led recorded lessons, structured course paths, practical exercises, and progress tracking.
</p>
<h2>What We Offer</h2>
<ul>
<li>Recorded classes you can watch on your schedule</li>
<li>Beginner to advanced English courses</li>
<li>Quizzes, assignments, and practice activities</li>
<li>Free learning resources including courses, ebooks, and study tips</li>
<li>Certificates of completion you can verify online</li>
</ul>
<h2>How Learning Works</h2>
<p>
Enroll in a course, watch recorded lessons at your own pace, complete practice activities,
and earn your certificate when you finish. There is no fixed class time — you decide when to study.
</p>
<h2>Contact</h2>
<p>
<a href="/contact">Send us a message</a> if you have questions about courses, enrollment, or your account.
</p>`,
    seoTitle: "About Us — PhynixEducation",
    seoDescription:
      "Learn about PhynixEducation — recorded English classes and self-paced learning for students worldwide.",
  },
  {
    slug: "terms",
    title: "Terms & Conditions",
    description: "Terms of use for the PhynixEducation learning platform.",
    contentHtml: `<p>Last updated: July 2026</p>
<h2>1. Acceptance of Terms</h2>
<p>By accessing or using PhynixEducation, you agree to these Terms &amp; Conditions.</p>
<h2>2. Educational Content</h2>
<p>All course materials and recorded videos are provided for educational purposes only.</p>
<h2>3. Accounts</h2>
<p>You are responsible for keeping your login credentials secure.</p>
<h2>4. Intellectual Property</h2>
<p>All platform content is owned by PhynixEducation or its licensors.</p>
<h2>5. Contact</h2>
<p>Questions can be sent through our <a href="/contact">contact page</a>.</p>`,
    seoTitle: "Terms & Conditions — PhynixEducation",
    seoDescription: "Terms and conditions for using PhynixEducation.",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "How PhynixEducation collects, uses, and protects your information.",
    contentHtml: `<p>Last updated: July 2026</p>
<h2>1. Information We Collect</h2>
<p>We collect information you provide when registering, enrolling, purchasing, or contacting support.</p>
<h2>2. How We Use Your Information</h2>
<ul>
<li>To provide courses, certificates, and platform features</li>
<li>To process payments and fulfill orders</li>
<li>To improve our platform and support</li>
</ul>
<h2>3. Data Security</h2>
<p>We apply industry-standard safeguards to protect your information.</p>
<h2>4. Contact</h2>
<p>Privacy questions can be sent through our <a href="/contact">contact page</a>.</p>`,
    seoTitle: "Privacy Policy — PhynixEducation",
    seoDescription: "Privacy policy for PhynixEducation learners and visitors.",
  },
]

async function main() {
  await prisma.siteSettings.upsert({
    where: { id: "default" },
    create: {
      id: "default",
      supportEmail: "support@phynixeducation.com",
      officeAddress: { line1: "128 City Road", line2: "London, EC1V 2NX" },
      officeHours: "Mon–Sat, 10:00 AM – 6:00 PM (BDT)",
      footerTagline: FOOTER.brandTagline,
      footer: FOOTER,
    },
    update: {
      supportEmail: "support@phynixeducation.com",
      footerTagline: FOOTER.brandTagline,
      footer: FOOTER,
    },
  })

  for (const page of PAGES) {
    await prisma.sitePage.upsert({
      where: { slug: page.slug },
      create: { ...page, isPublished: true },
      update: { ...page, isPublished: true },
    })
  }

  await prisma.sitePage.updateMany({
    where: { slug: { in: ["refund-policy", "cookies"] } },
    data: { isPublished: false },
  })

  console.log("CMS content migrated: footer, support email, and legal pages updated.")
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
