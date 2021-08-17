import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Joseph R. Martin - React Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I am a fullstack developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hell, I am',
  name: 'Joseph R. Martin',
  subtitle: 'I am a fullstack web-developer',
  cta: 'I am here for you',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I graduated from the University of Texas at San Antonio with a Bachelor Degree in Ahtropology.',
  paragraphTwo:
    'I have recently my certification in full-stack web devlopment from the UTSA Bootcamp program.',
  paragraphThree:
    'I hope to combine both of these skill-sets in order to prove myself as a useful asset for your company.',
  resume:
    'https://docs.google.com/document/d/1NXa6HqbASQLsda_IYP4OfKJsOBVFBKgArO87bbGlzf8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'budget-screenshot.jpg',
    title: 'Budget-Tracker',
    info: 'Integrated data from React apps',
    info2: 'Data compiled was saved on a local server to insure local budget tracking.',
    url: 'https://jrm-budget-tracker.herokuapp.com/',
    repo: 'https://github.com/josephmartin721/JRM-HW18-ProgressiveBudget', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'employee-screenshot.jpg',
    title: 'Employee Directory Tracker',
    info: 'This app was a proof of concept for a site that randomly generates and stores various details in an employee directory.',
    info2: 'It is meant to be adaptable in order to provide usefulness in multiple scenarios.',
    url: 'https://josephmartin721.github.io/JRM-HW19-UserDirectory/',
    repo: 'https://github.com/josephmartin721/JRM-HW19-UserDirectory', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'exercise-screenshot.jpg',
    title: 'Fitness Tracker',
    info: 'A basic app that allows for online and offline storage of personalized workout routines.',
    info2: '',
    url: 'https://workout-tracker-hw17app.herokuapp.com/',
    repo: 'https://github.com/josephmartin721/JRM-HW17-WorkoutTracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joseph-martin-280a8911b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/josephmartin721',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
