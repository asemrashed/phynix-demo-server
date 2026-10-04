import { PrismaClient, CourseLevel, CourseStatus, LessonType, VideoProvider, Role } from "@prisma/client";

const prisma = new PrismaClient();

const INSTRUCTOR_ID = "45ab5caa-eadd-4843-ba66-3991eaeead86";

const courses = [
  {
    id: "seed-course-advance-english",
    title: "Advance English",
    slug: "advance-english",
    description: `A comprehensive English mastery program covering grammar, spoken English, pronunciation, accent training, punctuation, writing, vocabulary, and exam preparation. The course is designed to take learners from foundational concepts toward advanced C1-level fluency.

Students learn complex grammar structures, natural conversation, sentence flow, pronunciation, British and American English variations, professional writing, and preparation strategies for IELTS, TOEFL, and TOEIC.`,
    thumbnailUrl:
      "https://i.pinimg.com/736x/fb/95/68/fb95681e07852a3c8d967225d006c0a7.jpg",
    price: 0,
    originalPrice: null,
    level: CourseLevel.ADVANCED,
    language: "ENGLISH",
    subtitle: "From foundational grammar to advanced English fluency",
    badgeLabel: "English Mastery",
    highlights: [
      "90+ grammar topics",
      "Spoken English and conversational fluency",
      "British and American pronunciation",
      "Writing and punctuation",
      "IELTS, TOEFL and TOEIC preparation",
      "Downloadable worksheets and practice resources",
    ],
    learningOutcomes: [
      "Master complex English grammar and sentence structures.",
      "Build natural conversational fluency and sentence flow.",
      "Improve pronunciation and understand British and American variations.",
      "Use punctuation and writing mechanics accurately.",
      "Develop vocabulary and skills for IELTS, TOEFL and TOEIC.",
      "Move from passive English understanding toward active speaking.",
    ],
    faqs: [
      {
        question: "What English levels does this course cover?",
        answer:
          "The curriculum spans from Beginner (A1) to Advanced (C1), progressing from basic sentence building to complex English structures.",
      },
      {
        question:
          "Will this course help me speak if I can only understand English right now?",
        answer:
          "Yes. The course includes conversational training, real-life scenarios, and speaking practice designed to turn passive vocabulary into active speech.",
      },
      {
        question: "Is the focus on British or American English?",
        answer:
          "The course includes both British and American accents and language variations.",
      },
      {
        question: "Are there resources for study outside of the video lessons?",
        answer:
          "Yes. The course can include downloadable PDF worksheets, practice problems, and interactive quizzes alongside video lessons.",
      },
    ],
    sections: [
      {
        id: "seed-ae-section-grammar",
        title: "Grammar & Sentence Building",
        lessons: [
          {
            id: "seed-ae-lesson-grammar",
            title: "Master English Grammar: Rules, Practice & Tests",
            videoRef: "LrPoyUdfOFk",
            order: 1,
          },
          {
            id: "seed-ae-lesson-wh",
            title: "Learn Wh- Questions: What, When, Where, Why, How, Who",
            videoRef: "lLJFYIvFWOY",
            order: 2,
          },
        ],
      },
      {
        id: "seed-ae-section-tenses",
        title: "Tenses & Conversational Fluency",
        lessons: [
          {
            id: "seed-ae-lesson-present-tenses",
            title: "Master All 4 Present Tenses in 10 Min",
            videoRef: "6DHvH5NS-tc",
            order: 1,
          },
        ],
      },
      {
        id: "seed-ae-section-speaking",
        title: "Speaking & Pronunciation",
        lessons: [
          {
            id: "seed-ae-lesson-speaking-anxiety",
            title: "Understand English But Can't Speak? Fix It Now!",
            videoRef: "kawR96Gi6Xo",
            order: 1,
          },
        ],
      },
    ],
  },
  {
    id: "seed-course-geo-politics",
    title: "Geo Politics",
    slug: "geo-politics",
    description: `A comprehensive introduction to geopolitics and the intersection of geography, history, international relations, economics, and strategy. Students learn how terrain, borders, natural resources, trade routes, technology, and strategic geography influence the behavior and power of states.

The course provides a framework for understanding international news, global supply chains, superpower competition, regional conflicts, and emerging strategic domains such as cyber warfare and space.`,
    thumbnailUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/028/573/773/small_2x/world-geopolitics-horizontal-banner-vector.jpg",
    price: 0,
    originalPrice: null,
    level: CourseLevel.INTERMEDIATE,
    language: "ENGLISH",
    subtitle: "Understand global power through geography, strategy and international relations",
    badgeLabel: "Geopolitics",
    highlights: [
      "Geographical power dynamics",
      "Hard power and soft power",
      "Resources and global supply chains",
      "Heartland and Rimland theories",
      "NATO, BRICS and minilateralism",
      "Cyber, space and satellite geopolitics",
    ],
    learningOutcomes: [
      "Understand how geography influences state power and strategy.",
      "Analyze hard power and soft power strategies.",
      "Understand resource and global supply-chain security.",
      "Learn classical geopolitical theories including Heartland and Rimland.",
      "Understand modern institutions and strategic groupings such as NATO and BRICS.",
      "Analyze emerging geopolitical competition in cyber and space domains.",
    ],
    faqs: [
      {
        question:
          "Do I need a background in international relations or political science?",
        answer:
          "No. The introductory material builds foundational knowledge from geography and strategic realities before moving into more complex global policies.",
      },
      {
        question: "How does Geopolitics differ from Political Geography?",
        answer:
          "Political Geography examines how political and human systems shape geography, while Geopolitics focuses on how geography shapes and constrains political behavior and state strategy.",
      },
      {
        question: "How does climate change impact modern geopolitics?",
        answer:
          "Climate change can affect strategic geography, resources, shipping routes, and competition in regions such as the Arctic.",
      },
      {
        question: "What career paths benefit from studying geopolitics?",
        answer:
          "Geopolitical knowledge can support careers in diplomacy, intelligence analysis, international risk consulting, global supply-chain management, journalism, and macro-level investment analysis.",
      },
    ],
    sections: [
      {
        id: "seed-gp-section-foundations",
        title: "Foundations of Geopolitics",
        lessons: [
          {
            id: "seed-gp-lesson-introduction",
            title: "Introduction to Geopolitics",
            videoRef: "AQbEfJysC1Q",
            order: 1,
          },
        ],
      },
      {
        id: "seed-gp-section-conflict",
        title: "Conflict & Strategy",
        lessons: [
          {
            id: "seed-gp-lesson-conflicts",
            title: "Geopolitics - Conflicts and Strategy Through a Geographic Lens",
            videoRef: "qNzB3TX_JfE",
            order: 1,
          },
        ],
      },
      {
        id: "seed-gp-section-theories",
        title: "Historical Foundations & Theoretical Models",
        lessons: [
          {
            id: "seed-gp-lesson-theories",
            title: "Geopolitics: Concepts and Theories",
            videoRef: "-QnrVpAsLSw",
            order: 1,
          },
        ],
      },
      {
        id: "seed-gp-section-modern",
        title: "Global Power & Modern Drivers",
        lessons: [
          {
            id: "seed-gp-lesson-modern",
            title: "What is Geopolitics? Understanding Global Power, Strategy & Tech",
            videoRef: "K9PQXM6LwxQ",
            order: 1,
          },
        ],
      },
    ],
  },
];

async function main() {
  console.log("🌱 Seeding course data...");

  for (const courseData of courses) {
    const course = await prisma.course.upsert({
      where: { id: courseData.id },
      update: {
        title: courseData.title,
        slug: courseData.slug,
        description: courseData.description,
        thumbnailUrl: courseData.thumbnailUrl,
        price: courseData.price,
        originalPrice: courseData.originalPrice,
        level: courseData.level,
        language: courseData.language,
        instructorId: INSTRUCTOR_ID,
        status: CourseStatus.PUBLISHED,
        isFeatured: true,
        subtitle: courseData.subtitle,
        badgeLabel: courseData.badgeLabel,
        highlights: courseData.highlights,
        learningOutcomes: courseData.learningOutcomes,
        faqs: courseData.faqs,
        publishedAt: new Date(),
      },
      create: {
        id: courseData.id,
        title: courseData.title,
        slug: courseData.slug,
        description: courseData.description,
        thumbnailUrl: courseData.thumbnailUrl,
        price: courseData.price,
        originalPrice: courseData.originalPrice,
        level: courseData.level,
        language: courseData.language,
        instructorId: INSTRUCTOR_ID,
        status: CourseStatus.PUBLISHED,
        isFeatured: true,
        subtitle: courseData.subtitle,
        badgeLabel: courseData.badgeLabel,
        highlights: courseData.highlights,
        learningOutcomes: courseData.learningOutcomes,
        faqs: courseData.faqs,
        publishedAt: new Date(),
      },
    });

    console.log(`📘 Course: ${course.title}`);

    for (const sectionData of courseData.sections) {
      const section = await prisma.section.upsert({
        where: { id: sectionData.id },
        update: {
          courseId: course.id,
          title: sectionData.title,
          order: courseData.sections.indexOf(sectionData) + 1,
        },
        create: {
          id: sectionData.id,
          courseId: course.id,
          title: sectionData.title,
          order: courseData.sections.indexOf(sectionData) + 1,
        },
      });

      for (const lessonData of sectionData.lessons) {
        await prisma.lesson.upsert({
          where: { id: lessonData.id },
          update: {
            sectionId: section.id,
            title: lessonData.title,
            type: LessonType.VIDEO,
            videoProvider: VideoProvider.YOUTUBE,
            videoRef: lessonData.videoRef,
            duration: 0,
            order: lessonData.order,
            isFree: true,
          },
          create: {
            id: lessonData.id,
            sectionId: section.id,
            title: lessonData.title,
            type: LessonType.VIDEO,
            videoProvider: VideoProvider.YOUTUBE,
            videoRef: lessonData.videoRef,
            duration: 0,
            order: lessonData.order,
            isFree: true,
          },
        });

        console.log(`  🎥 ${lessonData.title}`);
      }
    }
  }

  console.log("✅ Course seed completed successfully.");
}

main()
  .catch((error) => {
    console.error("❌ Course seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
