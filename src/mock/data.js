import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'codequiz-screenshot.png',
    title: 'Code Quiz',
    info: 'Test your coding knowledge.',
    info2: '',
    url: 'https://hagenderouen.github.io/code-quiz/',
    repo: 'https://github.com/hagenderouen/code-quiz',
  },
  {
    id: nanoid(),
    img: 'scheduler-screenshot.png',
    title: 'Workday Scheduler',
    info: 'Save your important work events in a simple calendar.',
    info2: '',
    url: 'https://hagenderouen.github.io/workday-scheduler/',
    repo: 'https://github.com/hagenderouen/workday-scheduler',
  },
  {
    id: nanoid(),
    img: '',
    title: 'T',
    info: '',
    info2: '',
    url: '',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Download my resume',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'Linkedin Profile',
      url: '',
    },
    {
      id: nanoid(),
      name: 'Github Profile',
      url: '',
    },
    {
      id: nanoid(),
      name: '',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
