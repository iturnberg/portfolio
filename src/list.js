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
    bigDescription: `This was the final project we had in UCF's Full Stack bootcamp built using the MERN stack. Pantry.js is a prototype pantry tracking application with a built-in cookbook users can navigate by ingredient keywords.
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
    bigDescription:`This was the first group project we had a month into UCF's Full Stack bootcamp. Built using Javascript, HTML, CSS, Materialize and JQuery, the website uses multiple NASA astronomy image APIs and allows users to navigate through them, as well as save favorites to local storage. The landing page displays NASA’s Astronomy Picture of the Day and allows users to navigate through different pictures using the datepicker at the top of the page.The image library allows users to enter keywords to search NASA’s Astronomy Image API and display a wide variety of related pictures on the page, each with their own Separate card. The Rover page is similar, it uses NASA’s Rover Image API to display a random assortment of rover images on the page.`,
    repo: 'https://github.com/RyanH118/The_Final_Frontier',
    link: 'https://ryanh118.github.io/The_Final_Frontier/',
    demo: FrontierDemo,
  },
  {
    name: 'Personal Blog',
    img: blogImage,
    description: 'A simple personal blog app built using HTML, JS and CSS.',
    bigDescription:`Personal blog app built using HTML JS and CSS. The app allows users to write and save blog posts to local storage, and also offers users a button to switch between a light and a dark mode.`,
    repo: 'https://github.com/iturnberg/personalblog',
    link: 'https://iturnberg.github.io/personalblog',
    demo: BlogDemo,
  },
  {
    name:'Employee Payroll Tracker',
    img: payrollTrackerImage,
    description:'Simple payroll tracker built using JS/HTML. Uses localstorage to save data',
    bigDescription:`Payroll tracking app built using JS and HTML. When pressing the ‘Add Employee’ button, users are prompted to enter their employee first name, last name and salary, and users can repeat this process as many times as needed. When they press cancel to stop entering more data, all the inputted data is then displayed on the page and saved to local storage.`,
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