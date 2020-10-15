const status = {
  graduateStudent: 'Graduate Student',
  undergraduateStudent: 'Undergraduate Student',
  advisor: 'Director, Assistant Professor',
  director: 'Director, Assistant Professor',
};

const program = {
  hcc: 'Human-Centered Computing, PhD. Student',
  cs: 'Computer Science, B.S. Student',
  comm: 'Communication, B.A. Student',
  ie: 'Industrial Engineering, B.S. Student',
  mat: 'Mathematical Sciences, B.S. Student',
  assistantProfessor: 'Director, Assistant Professor',
  bioe: 'Bioengineering, B.S. Student',
  cspsych: 'Computer Science and Psychology, Double Major',
  ece: 'Computer Engineering, M.S. Student',
};

export const examplePerson = {
  name: '',
  description: '',
  status: status.graduateStudent,
  program: program.hcc,
  researchInterests: [],
  personalWebsiteUrl: '',
  linkedInUrl: '',
  googleScholarUrl: '',
  gitHubUrl: '',
  twitterUrl: '',
  resumeUrl: '',
  cvUrl: '',
  publications: [],
};

export const people = [
  {
    name: 'Nathan McNeese',
    description:
      'I am an Assistant Professor and Director of the Team Research Analytics in Computational Environments (TRACE) Research Group within the division of Human-Centered Computing in the School of Computing at Clemson University. I also hold an affiliation in Clemson’s Human Factors Institute. In addition, I am a Faculty Scholar in Clemson’s School of Health Research and a Watt Family Faculty Fellow. I received my PhD in Information Sciences & Technology with a focus on Team Decision Making, Cognition, and Computer Supported Collaborative Work from The Pennsylvania State University in the fall of 2014. After graduation, I accepted a position to be a Postdoctoral Scholar and Research Associate in Human Systems Engineering at Arizona State University working directly with Dr. Nancy Cooke.',
    status: status.director,
    program: program.assistantProfessor,
    researchInterests: [
      'Human Factors',
      'Human Computer Interaction',
      'Artificial Intelligence',
      'Computer Supported Cooperative Work',
      'Information Sciences',
    ],
    personalWebsiteUrl: 'https://nathanmcneese.weebly.com/',
    linkedInUrl:
      'https://www.linkedin.com/in/nathanmcneese',
    googleScholarUrl:
      'https://scholar-google-com.libproxy.clemson.edu/citations?user=G1CnZ38AAAAJ&hl=en&oi=sra',
    gitHubUrl: '',
    twitterUrl: 'https://twitter.com/nathanmcneese',
    cvUrl: 'https://nathanmcneese.weebly.com/cv.html',
  },
  {
    name: 'Christopher Flathmann',
    description:
      'Ahoy there, I’m Chris Flathmann and I’m a PhD student studying Human Centered Computing at Clemson University as a Research Assistant in the TRACE Research Group.  After earning a BS in Computer Science from Clemson University, completing internships at Amazon and Michelin, and working as an undergraduate research assistant at Clemson, I decided that I wanted to pursue a PhD to futher explore and develop my interests in computing.  Since entering the Human Centered Computing program and the TRACE Research Group I have also developed a large interest in the human side of computing and the interaction between humans and the rapidly developing technology that is Artificial Intelligence.  Aside from my research work I also have personal interests and hobbies like disc golf, video/tabletop games, movies (mainly sci-fi and Rom-Com), and mechanical keyboards.',
    status: status.graduateStudent,
    program: program.hcc,
    researchInterests: [
      'Research Interests',
      'Swarm Intelligence',
      'Modular Human-Agent Teams',
      'Multi-Agent Systems',
      'Ethics in Artificial Intelligence',
    ],
    personalWebsiteUrl: 'https://chrisflathmann.com',
    linkedInUrl:
      'https://www.linkedin.com/in/christopher-flathmann/',
    googleScholarUrl: '',
    gitHubUrl: 'https://github.com/cflathm',
    cvUrl: 'UNDER PDF SECTION',
  },
  {
    name: 'Beau Schelble',
    description:
      'Howdy! My name is Beau Schelble and I was born and raised in Chapin, South Carolina. I am a life long Clemson fan with parents who also graduated from Clemson University so Clemson sports are a big pastime of mine. I also graduated from Clemson University with an undergraduate degree in Psychology in December 2018 and began pursuing a PhD in Human-Centered Computing in the Fall of 2019. I grew up with a love of people and technology so naturally I gravitated towards research that incorporated both topics and have loved learning and becoming more hands on with computing in our lab.',
    status: status.graduateStudent,
    program: program.hcc,
    researchInterests: [
      'Team Cognition in Human-Autonomy Teams',
      'Multi-Agent Systems',
      'Human-AI Teams in Industry 4.0 Applications',
    ],
    linkedInUrl:
      'https://www.linkedin.com/in/beau-schelble-498675135',
    googleScholarUrl: '',
    gitHubUrl: 'https://github.com/bschelb',
  },
  {
    name: 'Rui Zhang',
    description:
      'I am a PhD student in the Human-Centered Computing Division of the School of Computing at Clemson University. I received her M.S. and B.S. in Aerospace Engineering from Beijing Institute of Technology (China).',
    status: status.graduateStudent,
    program: program.hcc,
    researchInterests: [
      'Human-Machine team',
      'Team Decision Making',
      'Human-Computer Interaction',
    ],
    personalWebsiteUrl: 'https://helloimrui.com/',
    linkedInUrl:
      'https://www.linkedin.com/in/rui-zhang-5b6607172/',
    googleScholarUrl: '',
    gitHubUrl: 'https://github.com/Rui365',
    resumeUrl:
      'https://helloimrui.com/assets/resume-rui-zhang.pdf',
  },
  {
    name: 'Geoff Musick',
    description:
      'My name is Geoff Musick and I’m from Nashville, TN. My bachelor’s degree was in Biochemistry with minors in Biology and Math. Before moving to Clemson, I spent 3 years teaching Physics and AP Biology. While teaching I received a masters degree in education.  Additionally I spent a couple years making educational video game apps for high school physics students. I started working on my PhD in Human-Centered Computing in the Spring of 2019.',
    status: status.graduateStudent,
    program: program.hcc,
    researchInterests: [
      'Human Autonomy Interaction',
      'Human Autonomy Teaming',
    ],
    linkedInUrl:
      'https://www.linkedin.com/in/geoff-musick/',
    gitHubUrl: 'https://github.com/musickgm',
    resumeUrl: '',
  },
  {
    name: 'Jake Armstrong',
    description: '',
    status: status.graduateStudent,
    program: program.hcc,
    researchInterests: [],
    personalWebsiteUrl: 'https://jlarmstrongiv.com/',
    linkedInUrl:
      'https://www.linkedin.com/in/jlarmstrongiv/',
    googleScholarUrl: '',
    gitHubUrl: 'https://github.com/jlarmstrongiv',
    resumeUrl: 'SEE RESUME FOLDER',
  },
  {
    name: 'Nirali Bandaru',
    description:
      'Hello! My name is Nirali Bandaru, and I’ve had an interesting exposure to different cultures growing up. I was born in India and my family migrated to the US when I was 10. Being an only child, I developed various hobbies such as painting, writing, and singing. I went back to India for college and majored in Electronics and Communications Engineering at VIT University. I’m now pursuing a Master’s in Computer Engineering at Clemson with a focus on Intelligent Systems. I have a special interest in Artificial Intelligence and I’m currently conducting research in how AI could help enhance and maximize productivity in project teams.',
    status: status.graduateStudent,
    program: program.ecm,
    researchInterests: [
      'Reinforcement Learning',
      'Expert Systems',
      'Neural Networks',
    ],
    linkedInUrl:
      'https://www.linkedin.com/in/niralibandaru/',
  },
  {
    name: 'Bekk Blando',
    description:
      'I currently focus on biometrics, massive computational experiments, mathematics, and programming educational models, researching at both Clemson and Stanford. Improving education is extremely important and personal to me having started a non-profit dedicated to STEAM education, and organizing a programming bootcamp for students at Clemson. I am primarily motivated by societal payoff and the projects I choose to work on reflect this.',
    status: status.undergraduateStudent,
    program: program.mat,
    personalWebsiteUrl: 'http://bekkblando.com/',
    linkedInUrl:
      'https://www.linkedin.com/in/bekk-blando-a3b97aa9',
    googleScholarUrl: '',
    gitHubUrl: 'https://github.com/bekkblando',
    twitterUrl: 'https://twitter.com/bekkblando',
    resumeUrl: 'http://bekkblando.com/resume.html',
  },
  {
    name: 'Mark Blasko',
    description:
      'I am an undergraduate Computer Science major and Math minor.  I became interested in CS when I began casually exploring programming in high school.  My primary academic interests are data science, bioengineering, and algorithms.  I love exploring topics that involve a lot of both math and CS, and have more recently become interested in bioengineering.  Outside of academics, I enjoy watching football amongst other sports, and really enjoy exercise.',
    status: status.undergraduateStudent,
    program: program.cs,
    linkedInUrl:
      'https://www.linkedin.com/in/mark-blasko-49a6b340',
    googleScholarUrl: '',
  },
  {
    name: 'Rafael Dejesus',
    description:
      'I’m Rafael DeJesus, a Computer Science undergraduate student minoring in Cyber Security. I enjoy problem solving and I see computer science as just a platform for that.  I have an interest in a lot of thing including technology, strategy, algorithms, government, teamwork, physics, philosophy, video games, design and electronics',
    status: status.undergraduateStudent,
    program: program.cs,
    personalWebsiteUrl: 'https://rafael09ed.github.io/',
    linkedInUrl:
      'https://www.linkedin.com/in/rafael-dejesus-707000bb',
    googleScholarUrl: '',
    gitHubUrl: 'https://github.com/Rafael09ED',
    twitterUrl: 'https://twitter.com/rafael09ed_',
  },
  {
    name: 'Casey Hird',
    description:
      'My name is Casey Hird, I am from Spartanburg, SC and am currently a sophomore at Clemson University. I am majoring in computer engineering with minors in Computer Science and Mathematics. My research interests include bioelectrical systems, network security, and quantum mechanics.',
    status: status.undergraduateStudent,
    program: program.cs,
    linkedInUrl:
      'https://www.linkedin.com/in/casey-hird-a07092161',
    googleScholarUrl: '',
    twitterUrl: 'https://twitter.com/caseyhird',
  },
  {
    name: 'John Paul Lineberger',
    description:
      'Howdy, my name is John Paul Lineberger and I’m from Greenville, SC. I am currently a senior undergraduate Bioengineer who recently joined the research lab. Prior to joining, I have had experience in machine learning applications, computer vision, creating end-to-end solutions, and medical imaging. When I’m not creating PyTorch models, you can find me taking photos, participating in automotive events, playing guitar, and racing home built drones.',
    status: status.undergraduateStudent,
    program: program.bioe,
    linkedInUrl:
      'https://www.linkedin.com/in/john-lineberger-892612152/',
    gitHubUrl: 'https://github.com/jplineb',
    resumeUrl: '',
  },
  {
    name: 'Qwelian Tanner',
    description:
      'How you doing, my name is Qwelian Tanner. I am a computer science undergrad student, and co-founder of lmbk(link). I enjoy lazing with my girlfriend Damali, reading, manga included, thoughtful discussion, walking my dog Nala, and philosophy. In this new era of information, the issues we face will be more representative of our failures to advance people and the institutions we inhabit, rather than our technological capabilities. My research interest are in data engineering, AI, and biometrics. My goal is to allow the complex self, and the interactions embodied in waking life, to persist in a manner that disarms methods of conflict.',
    status: status.undergraduateStudent,
    program: program.cs,
    personalWebsiteUrl: 'https://qwelian.com/',
    linkedInUrl: 'https://www.linkedin.com/in/qdt/',
    gitHubUrl: 'https://github.com/qweliant',
    resumeUrl: '',
  },
  {
    name: 'Steve Russell',
    description:
      'Hey, I’m Stephen Russell, and I’m a sophomore in Computer Science. In my free time I like making music, building web applications, and learning tons more about random subjects than I’ll ever be able to remember. I’m working on projects related to collective intelligence and data collection methods, and I one day hope to lead research involving social media, UX design, and pedagogy.',
    status: status.undergraduateStudent,
    program: program.cs,
    researchInterests: [],
    personalWebsiteUrl: 'https://steve.works/',
    linkedInUrl:
      'https://www.linkedin.com/in/stephen-russell-bb9187176/',
    gitHubUrl: 'https://github.com/stphnrssll',
  },
  {
    name: 'Aru Bhoop',
    description:
      'Hi, my name is Aru. I’m an undergraduate computer science major from Indian Land, SC, currently performing research in the area of swarm Intelligence. I’m fascinated by the formation of groups in nature and wish to replicate that phenomenon in the context of artificial intelligence, which I believe is the key to solving some of the most challenging issues in machine learning today. Apart from researching, I like to spend my free time playing soccer, travelling, playing piano, or just kicking back and reading a good book.',
    status: status.undergraduateStudent,
    program: program.cs,
    personalWebsiteUrl: 'http://www.aru.ai/',
    linkedInUrl: 'http://www.linkedin.com/in/arubhoop',
    gitHubUrl: 'https://github.com/aru-py',
  },
  {
    name: 'Mari Kilgus',
    description:
      'Hi, my name is Mari Kilgus. I’m originally from Winston-Salem, NC but I currently live in Charlotte, NC. I’m a sophomore computer science and psychology double major. Computer science and psychology seems the ideal background to eventually work in the field of human computer interaction. I want to be able to design products with people’s capabilities and limitations in mind. I enjoy applying skills which is why I also love playing flute. I had a great time in Tiger Band supporting the football team at all of the games and I’m looking forward to the rest of my time at Clemson.',
    status: status.undergraduateStudent,
    program: program.cspsych,
    researchInterests: [
      'Human AI Teaming',
      'Happiness and Values',
    ],
  },
  {
    name: 'Sarah Morrison',
    description:
      'Hey, my name is Sarah Morrison and I am from Somers, New York. I am a senior computer science major with a minor in Spanish and plan to graduate in May 2020. I hope to work in New York City after graduation as a project manager for a technology company. I love to travel the world and go on lots of hikes.',
    status: status.undergraduateStudent,
    program: program.cs,
    linkedInUrl:
      'http://www.linkedin.com/in/sarahrosemorrison',
  },
  {
    name: 'Jack Carroll',
    description:
      'Hi, my name is Jack Carroll and I am originally from Portland, Maine. I am a computer science major with a minor in economics. Some of my hobbies include frisbee, rock climbing, and basically anything else outdoors.',
    status: status.undergraduateStudent,
    program: program.cs,
    researchInterests: [
      'artificial intelligence',
      'theoretical computer science',
      'and human-centered computing',
    ],
    personalWebsiteUrl: 'https://jpcarroll.dev/',
    linkedInUrl: 'https://www.linkedin.com/in/jp-carroll/',
    googleScholarUrl:
      'https://scholar.google.com/citations?user=QVV2LEEAAAAJ',
    gitHubUrl: 'https://github.com/jpcarroll',
    resumeUrl: '',
  },
  {
    name: 'Dylan Cathapermal',
    description:
      'Hi! My name is Dylan Cathapermal and I’m from Sterling Virginia. Though I am a long way from home, I’m so glad I came to Clemson. From the competitive football culture, to the ambition of the TRACE Lab, Clemson embodies so many characteristics that I not only have but want to improve. I am an undergraduate student majoring in Computer Science with a minor in mathematical sciences, as well as an incoming Summer 2020 intern at Amazon Web Services in Crystal City, Virginia. From a young age I have always had a passion for technology and innovation and I love being able to express that as part of the lab. I currently work with databases and web development tools to create an interface designed to implement ethical frameworks with AI.',
    status: status.undergraduateStudent,
    program: program.cs,
    linkedInUrl:
      'https://www.linkedin.com/in/dylan-cathapermal/',
    gitHubUrl: 'https://github.com/dcathapermal',
    resumeUrl: '',
  },
  {
    name: 'Lorenzo Barberis Canonico',
    description:
      'Lorenzo is a graduate student in the Human-Centered Computing program at Clemson University.  He lead a start-up company that developed financial analysis software that assesses and compares financial performance.  He is passionate about providing pro-bono application development for non-profit organizations.',
    status: status.graduateStudent,
    program: program.hcc,
    researchInterests: [
      'Artificial Intelligence',
      'Game Theory',
      'Philosophy',
      'Film',
    ],
    personalWebsiteUrl:
      'https://lbarberiscanoni.github.io/',
    linkedInUrl:
      'https://www.linkedin.com/in/lorenzo-barberis-canonico-612734aa',
    googleScholarUrl:
      'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C41&q=Lorenzo+Barberis+Canonico&btnG=',
    gitHubUrl: 'https://github.com/lbarberiscanoni',
  },
];
