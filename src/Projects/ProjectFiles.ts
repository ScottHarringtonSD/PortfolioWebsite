import { Project } from './Project';
import graffitiIndexImg from "../Images/GraffitiIndex.jpg";
import graffitiSearchImg from "../Images/GraffitiSearch.jpg"
import bookingSearchImg from "../Images/BookingSearchPage.png";
import bookingAvailabilityImg from "../Images/BookingAvailability.png";
import ChessVisionHome from "../Images/ChessVisionHome.png"
import ChessVisionPlay from "../Images/ChessVisionPlay.png"


export const Project_Files = [
  new Project({
    id: 1,
    name: 'Oxford Heritage Graffiti Database',
    paragraph1:
      "Recently, a friend has set up a local graffiti survey to keep track of graffiti within Oxford of historical importance. Therefore I offered to set up a web application in order to help track and manage this, with the ability to upload, modify and search records, along with authentication to prevent the application from being compromised.",
      paragraph2:
      "The application is built using a React.js frontend, with all the elementary CRUD operations implemented, allowing the user to upload images and information about historical graffitis found around Oxford. The application has a log in system implemented using JWC tokens, with all API calls requiring an authentication token to be sent in order for acess to the database to be granted. The API was created using express, and follows RESTful architecture, and was tested using postman. MongoDB was chosen as the database software as it was deemed a non relational database would work well for this project, as it is an effective document storage system. The frontend is hosted using firebase, whilst the api is hosted using render.com, a free hosting service.",
      paragraph3:
      "Overall, the project has been a success, and has greatly improved the efficiency of the Oxford Heritage Graffiti Survey. Future functionality would include the creation of user accounts, allowing outside individuals to view the entries in the database without being able to modify and delete them.",
     
    imageUrl1: graffitiIndexImg,
    imageUrl2: graffitiSearchImg,
    brief: "A database application used to store and edit graffiti of historical importance around Oxford.",
    skills: "React, Express, MongoDB",
    githubLink: "https://github.com/scottharringtonsd"
  }),
  new Project({
    id: 2,
    name: 'ChessVision',
    description:
      'Test Description 3',
    imageUrl1: ChessVisionHome,
    imageUrl2: ChessVisionPlay,
    brief: "A chess training website aimed at improving chess calculation through the practice of blindfold chess.",
    skills: "React, Tailwind",
    githubLink: "https://github.com/scottharringtonsd",
    paragraph1: "I have strong passion for chess and recently have taken an interest in blindfold chess, and have been looking at ways to improve. Having not found any good resources, I decided to build my own! The aim of the web application is to give the user the opportunity to develop and practice the skills necessay for blindfold chess.",
    paragraph2: "The app is built using React, and styled with tailwind, and gives the user the opportunity to play against a computer, with multiple difficulty options and also the opportunity to view and hide the board, allowing the player to check the position if they lose track. There is also a puzzles section, which allows players to view the position, then hide the board and complete the puzzle using standard notation, hence practicing small, 4 move combinations without the board. In both cases, the application interfaces with an open Stockfish api to play as the computer, with its strength adjusted to suit a human player.",
    paragraph3: "The ultimate goal will be to expand the application to introduce small training exercises for beginners, such as moving a single piece between two squares, to allow anyone to gain the ability to play blindfolded chess. I would also like to tweak the difficulties to make the engine feel more like you are playing against a human player.",
  }),
  new Project({
    id: 3,
    name: 'Booking System',
    brief:
      'A simple room booking system with authentication and administrator access.',
    imageUrl1: bookingSearchImg,
    imageUrl2: bookingAvailabilityImg,
    githubLink: "https://github.com/scottharringtonsd",
    paragraph1: 'As a fun side project, in order to manage guests staying in the spare rooms of our house, I have built a small booking system that allows friends and family to book a night in our humble abode. The aim of the system was to prevent booking clashes on busy weekends, and to enhance my skills in using MVC as a frontend technology.',
    paragraph2: "The website was built using a C# MVC frontend and styled using bootstrap, which allows guest users to create and view bookings, as well also to check the calendar, which allows them to check whether a room is available on a given night. The calendar will also inform them of who has booked the room when hovering over the date. The user also has the ability to log in as an admin user, which allows them to delete bookings in the system, whilst guest users simply receive a warning if they attempt to delete any bookings. The API was created using express, and follows RESTful architecture, and was tested using postman. The backend uses a MongoDB database, with the api being hosted using render.com, and the frontend being hosted by somee.com",
    paragraph3: "Whilst not wholeheartedly adopted by our friends and family, the booking system has allowed for easy guest management within the house, and for the residents to easily keep track of busy weekends. Future improvements could include the ability to edit bookings, and booking approval using the admin account.", 
    skills: "C#, MVC, Express, MongoDB"
  }),
  
  
];
