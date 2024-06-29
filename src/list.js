import pantryImage from './assets/pantrydotjs.png';
import finalFrontierImage from './assets/finalfrontier.png';
import blogImage from './assets/blog.png';
import payrollTrackerImage from './assets/payrolltracker.png';
import PantryDemo from './assets/pantryjsdemo.gif';
import PayrollDemo from './assets/payrolltrackerdemo.gif';
import BlogDemo from './assets/blogdemo.gif';
import FrontierDemo from './assets/finalfrontierdemo.gif';

// {
//     name:'',
//     img:'',
//     description:'',
//     repo:'',
//     link:'',
// }

const list = [
  {
    name:'Pantry.js',
    img: pantryImage,
    description:'A pantry tracker/cookbook application built using React and GraphQL. Live demo takes some time to load.',
    bigDescription: `This was the final project we had in UCF's 3 month bootcamp built using the MERN stack. My three group members and I made a prototype pantry tracking application with a built-in cookbook users can navigate by ingredient keywords.
Users are able to keep track of their pantry via inputs on the Pantry page, which is then sent into our database and used to update the pantry list on the side of the page in real time. Once on the list, users are able to to update quantities of/delete ingredients or use the checkboxes to use them as keywords for a search through the recipe database. The Cookbook page is a more streamlined keyword recipe search.
Since this is a prototype for a class project, we are currently using Edamam’s recipe api for our cookbook. We would like to switch to Tasty’s API, and also have plans to make a mobile version of this app.
`,
    repo:'https://github.com/LemonTag/Pantry.js',
    link:'https://pantry-js.onrender.com/',
    demo: PantryDemo,
  },
  {
    name: 'The Final Frontier',
    img: finalFrontierImage,
    description: 'Website to view images from various NASA API`s. Built using HTML, JS, Jquery and CSS.',
    bigDescription:`This was the first group project we had a month into UCF's 3 month bootcamp. Built using Javascript, HTML, CSS, Materialize and JQuery, the website uses multiple NASA astronomy image APIs and allows users to navigate through them, as well as save favorites to local storage. I built the landing page, which displays NASA’s Astronomy Picture of the Day and allows users to navigate through different pictures using the datepicker at the top of the page. I also built the modal popups for the image library page that display advanced details for the related images.`,
    repo: 'https://github.com/RyanH118/The_Final_Frontier',
    link: 'https://ryanh118.github.io/The_Final_Frontier/',
    demo: FrontierDemo,
  },
  {
    name: 'Personal Blog',
    img: blogImage,
    description: 'Simple blog made using HTML, JS and CSS. Has a light/dark mode, and saves posts to local storage',
    bigDescription:`Simple `,
    repo: 'https://github.com/iturnberg/personalblog',
    link: 'https://iturnberg.github.io/personalblog',
    demo: BlogDemo,
  },
  {
    name:'Employee Payroll Tracker',
    img: payrollTrackerImage,
    description:'Simple payroll tracker built using JS/HTML. Uses localstorage to save data',
    bigDescription:``,
    repo:'https://github.com/iturnberg/EmployeePayrollTracker',
    link:'https://iturnberg.github.io/EmployeePayrollTracker/',
    demo: PayrollDemo,
  },
//     {
//     name:'Note Taker',
//     img:'/src/assets/notetaker.png',
//     description:'Note taking application built using ExpressJS',
//     repo:'https://github.com/iturnberg/notetaker',
//     link:'https://iturnberg.github.io/notetaker/',
// },

  ]
  export default list;