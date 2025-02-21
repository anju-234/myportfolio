import Coffeeimage from "../assets/Projectimages/Coffee.png";
import Counterredux from '../assets/Projectimages/counterredux.png';
import Simpleinterest from '../assets/Projectimages/simple.png';
import Mediaplayerfrontend from '../assets/Projectimages/mediaplayerfrontend.png';
import Mediaserver from '../assets/Projectimages/mediaserver.png';
import Feastly from '../assets/Projectimages/feastly.png';
import BMI from '../assets/Projectimages/bmi.png';
import Headphone from '../assets/Projectimages/headphone.png';
import Todo from '../assets/Projectimages/todo.png';
import Colorgenerator from '../assets/Projectimages/colorgenerator.png';
import Messapp from '../assets/Projectimages/messapp.png';
import Paragraphgenerator from '../assets/Projectimages/paragraphgenerator.png';
import Review from '../assets/Projectimages/reviewapp.png';
import MindSpark from '../assets/Projectimages/mindspark.png';
import TourApp from '../assets/Projectimages/tourapp.png';
import Birthdayreminder from '../assets/Projectimages/birthdayreminder.png';
import Ecart from '../assets/Projectimages/ecart.png';
import Reminder from '../assets/Projectimages/reminder.png';
import DemoPortfolio  from '../assets/Projectimages/demoportfolio.png';
import MemoryGame  from '../assets/Projectimages/memorygame.png';
import DemoBank  from '../assets/Projectimages/demobank.png';
import RandomQuotegenerator  from '../assets/Projectimages/randomquote.png';


const projectData = [
  {
    id: "1",
    name: "Brew Beans Co. ☕",
    desc: "A coffee-themed website showcasing coffee types, top brands, and an interactive contact form. Built using HTML, CSS, Bootstrap and smooth UI..",
    img: Coffeeimage,
    github_link: "https://github.com/anju-234/Coffee",
    vercel_link: "https://coffee-rho-two.vercel.app/",
  },
  {
    id: "2",
    name: "Counter-Redux",
    desc: "This project is a **React Redux counter application** that allows users to increment, decrement, reset, and add a custom amount to the counter. Built with **Redux Toolkit**, it efficiently manages state while ensuring a smooth user experience. The app features **input validation, responsive design using Bootstrap, and user-friendly controls**, making it a great example of state management in React. 🚀",
    img: Counterredux,
    github_link: "https://github.com/anju-234/counter-redux",
    vercel_link: "https://counter-redux-beta-six.vercel.app/",
  },
  {
    id: "3",
    name: "SI-calculator",
    desc: "The Simple Interest Calculator is a React-based web application that helps users quickly calculate simple interest based on principal amount, interest rate, and time period. It features a clean and responsive UI built with **Material UI**, ensuring a modern and user-friendly experience. The app dynamically updates the interest calculation and includes a reset functionality to clear inputs easily. With efficient state management using **React Hooks (`useState`)**, this project provides a seamless and interactive financial tool for users to compute interest effortlessly. 🚀",
    img: Simpleinterest,
    github_link: "https://github.com/anju-234/Simple-interest-calculator",
    vercel_link: "https://simple-interest-calculator-azure.vercel.app/",
  },
  {
    id: "4",
    name: "Media Player FrontEnd",
    desc: "Media Player Web App – A React-based video management platform that allows users to upload, categorize, and watch videos seamlessly. It features a **drag-and-drop categorization system**, a **watch history tracker**, and a responsive UI built with **Bootstrap**. The backend is powered by **JSON Server**, providing a lightweight mock API for video storage and management. This project showcases my skills in **React, state management, REST API integration, and responsive web design**. 🚀🎬",
    img: Mediaplayerfrontend,
    github_link: "https://github.com/anju-234/mediaserverfrontend",
    vercel_link: "https://mediaserverfrontend.vercel.app/",
  },
  {
    id: "5",
    name: "Media Player BackEnd",
    desc: "Media Player Web App – A React-based video management platform that allows users to upload, categorize, and watch videos seamlessly. It features a **drag-and-drop categorization system**, a **watch history tracker**, and a responsive UI built with **Bootstrap**. The backend is powered by **JSON Server**, providing a lightweight mock API for video storage and management. This project showcases my skills in **React, state management, REST API integration, and responsive web design**. 🚀🎬",
    img: Mediaserver,
    github_link: "https://github.com/anju-234/mediaserver",
    vercel_link: "https://mediaserver-1.onrender.com/",
  },
  {
    id: "6",
    name: "Feastly",
    desc: "Feastly, is a modern food ordering web application built with React and Redux Toolkit for state management. It allows users to browse food items, filter by category, search for specific dishes, and add items to a cart for purchase. The app features a smooth UI with Tailwind CSS, real-time cart updates, toast notifications, and a protected checkout process. With a clean and responsive design, Feastly delivers a seamless and intuitive user experience for online food ordering. 🚀🍔",
    img: Feastly,
    github_link: "https://github.com/anju-234/Feastly",
    vercel_link: "https://feastly-chi.vercel.app/",
  },
  {
    id: "7",
    name: "BMI Calculator",
    desc: "BMI Calculator that calculates and categorizes BMI based on user input. It provides health recommendations and displays results with GSAP animations. Built with HTML, CSS (Bootstrap), and JavaScript, it ensures an interactive user experience. 🚀",
    img: BMI,
    github_link: "https://github.com/anju-234/BMI-Calculator",
    vercel_link: "https://bmi-calculator-drab-one.vercel.app/",
  },
  {
    id: "8",
    name: "Headphone",
    desc: "A static e-commerce website for a Headphones Shop, built using HTML and CSS (with Bootstrap for styling and responsiveness). It features a modern and user-friendly design, including a banner section, a product showcase, a navigation menu, and a store location map. The website provides an engaging way for users to explore and discover the latest headphone models. 🎧🚀",
    img: Headphone,
    github_link: "https://github.com/anju-234/headphone",
    vercel_link: "https://headphone-tau.vercel.app/",
  },
  {
    id: "9",
    name: "To do App",
    desc: "A React-based To-Do List App that allows users to add, edit, and remove tasks efficiently. It includes features such as real-time alerts, local storage support for data persistence, and a clean user interface. The app ensures a smooth user experience with automatic state updates, and it utilizes React hooks like useState and useEffect for managing tasks dynamically. 🚀✅",
    img: Todo,
    github_link: "https://github.com/anju-234/To-do-App",
    vercel_link: "https://to-do-app-three-amber.vercel.app/",
  },
  {
    id: "10",
    name: "Color Generator",
    desc: "A React-based Color Generator App that allows users to input a hex color code and generate various shades and tints of that color. It dynamically displays the generated colors and enables users to click on a color to copy its hex code to the clipboard. The app provides real-time error handling for invalid inputs and utilizes useState and useEffect hooks to manage state efficiently. It enhances the user experience with a simple UI, interactive color selection, and clipboard functionality. 🎨✨",
    img:Colorgenerator,
    github_link: "https://github.com/anju-234/Color-Generator",
    vercel_link: "https://color-generator-bay-seven.vercel.app/",
  },
  {
    id: "11",
    name: "Mess App",
    desc: "a React-based Mess Menu App that allows users to browse and filter food items based on categories. It dynamically fetches menu data and provides a category-based filtering system, enabling users to view specific types of dishes. The app features a clean UI with food images, descriptions, and prices, making it easy to navigate. It uses React hooks (useState) to manage state efficiently and ensures a smooth user experience. This app is perfect for displaying and organizing meal options in a mess, restaurant, or cafeteria setting. 🍽️✨",
    img:Messapp,
    github_link: "https://github.com/anju-234/Mess_app",
    vercel_link: "https://mess-app-nine.vercel.app/",
  },
  {
    id: "12",
    name: "Paragraph Generator",
    desc: "React-based Lorem Ipsum Generator that allows users to generate a specified number of random paragraphs. Users can input a number (between 1 and 10), and the app retrieves that many paragraphs from a predefined dataset. It ensures valid input handling and prevents errors by limiting the range. With a simple form-based UI, the app provides an easy way to generate placeholder text for content design or testing purposes. 📝✨",
    img: Paragraphgenerator,
    github_link: "https://github.com/anju-234/Paragraph_generator",
    vercel_link: "https://paragraph-generator-chi-one.vercel.app/",
  },
  {
    id: "13",
    name: "Review App",
    desc: "a React-based Review Vlog App that displays user reviews dynamically. It allows users to navigate through reviews, view reviewer details (name, job, image, and feedback), and even get a random review with a Surprise Me button. The app ensures seamless circular navigation so users can cycle through all reviews smoothly. With an interactive UI and engaging animations, it's a great way to showcase testimonials or user feedback. 🌟📢",
    img: Review,
    github_link: "https://github.com/anju-234/Review-app",
    vercel_link: "https://review-app-vert-psi.vercel.app/",
  },
  {
    id: "14",
    name: "Quiz App",
    desc: "MindSpark is an interactive React-based quiz application that displays frequently asked questions (FAQs) or quiz-style questions. Users can toggle answers by clicking on the expand/collapse button, making learning engaging and intuitive. The app dynamically renders questions from a dataset, ensuring a seamless and responsive experience. 🚀✅",
    img: MindSpark,
    github_link: "https://github.com/anju-234/Quizapp",
    vercel_link: "https://quizapp-kappa-five.vercel.app/",
  },
  {
    id: "15",
    name: "Tour App",
    desc: "The Tour Application is a React-based travel experience platform that fetches and displays tour details dynamically. Users can explore various tours, view descriptions, and toggle between brief and full details. If uninterested, they can remove a tour from the list. A loader animation ensures a smooth user experience while fetching data. Users can also refresh the tour list when needed. 🚀🏕️",
    img: TourApp,
    github_link: "https://github.com/anju-234/Tour-app",
    vercel_link: "https://tour-app-pink.vercel.app/",
  },
  {
    id: "16",
    name: "Birthday reminder",
    desc: "The Birthday Reminder App is a simple React application that displays a list of people with their names, ages, and profile images. Users can clear the list with a single button click. The app provides a quick and interactive way to keep track of birthdays for the day! 🥳🎈",
    img: Birthdayreminder,
    github_link: "https://github.com/anju-234/Birthday-Reminder",
    vercel_link: "https://birthday-reminder-gilt.vercel.app/",
  },
  {
    id: "17",
    name: "E commerce",
    desc: "E-Cart is a React-based e-commerce application that fetches product data from an API, displays product listings, and allows users to view details. It includes features like product filtering, a detailed product page, and a simulated purchase option. Built with React, React Router, and API integration, it provides a clean and responsive shopping experience. 🚀",
    img: Ecart,
    github_link: "https://github.com/anju-234/Ecommerce",
    vercel_link: "https://ecommerce-three-sage-15.vercel.app/",
  },
  {
    id: "18",
    name: "Reminder App",
    desc: "This is a simple React-based Reminder App that allows users to add and delete reminders. Users can input tasks, save them in a list, and remove them when completed. It utilizes useState for state management and provides a clean, interactive UI for task tracking. 🚀",
    img: Reminder,
    github_link: "https://github.com/anju-234/Reminder-App",
    vercel_link: "https://reminder-app-virid.vercel.app/",
  },
  {
    id: "19",
    name: "Demo Portfolio",
    desc: "Portfolio website is a modern and responsive showcase of  skills, projects, and services. Built with React and Bootstrap, it features a sleek design, smooth navigation, and interactive elements to highlight  expertise effectively.",
    img: DemoPortfolio,
    github_link: "https://github.com/anju-234/portfolio",
    vercel_link: "https://portfolio-inky-psi-71.vercel.app/",
  },
  {
    id: "20",
    name: "Memory Game",
    desc: "The Memory Game is an interactive and dynamic card-matching game built with React. Players flip cards to find matching pairs while the game keeps track of flipped and solved cards. It features a customizable grid size (2x2 to 10x10), a smooth matching mechanism, and a winning animation. The game is fully responsive and offers a fun way to test memory skills! 🎯",
    img: MemoryGame,
    github_link: "https://github.com/anju-234/Memory-Game",
    vercel_link: "https://memory-game-one-chi.vercel.app/",
  },
  {
    id: "21",
    name: "Demo Bank Website",
    desc: "This project is a simple online banking system that allows users to register, log in, deposit, withdraw, and check their account balance. It uses local storage to manage user data, ensuring a lightweight and efficient experience. The interface is built with Bootstrap for responsiveness, providing a user-friendly design.",
    img: DemoBank,
    github_link: "https://github.com/anju-234/bankapp",
    vercel_link: "https://bankapp-virid-zeta.vercel.app/",
  },
  {
    id: "22",
    name: "Random Quote",
    desc: "The Quotes fetches and displays a random quote and its author from an API. It allows users to click a button to get new quote.",
    img: RandomQuotegenerator,
    github_link: "https://github.com/anju-234/RandomQuotegenerator",
    vercel_link: "https://random-quotegenerator-rosy.vercel.app/",
  },
];

export default projectData;
