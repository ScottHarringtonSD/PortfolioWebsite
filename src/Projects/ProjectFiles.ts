import { Project } from './Project';
import graffitiIndexImg from "../Images/GraffitiIndex.jpg";
import bookingSearchImg from "../Images/BookingSearchPage.png";


export const Project_Files = [
  new Project({
    id: 1,
    name: 'Oxford Heritage Graffiti Database',
    paragraph1:
      'A database application used to store and edit graffiti of historical importance around oxford',
    imageUrl: graffitiIndexImg,
    brief: "A database application used to store and edit graffiti of historical importance around Oxford.",
    skills: "React, Express, MongoDB"
  }),
  new Project({
    id: 2,
    name: 'Booking System',
    description:
      'A simple room booking system with authentication and administrator access.',
    imageUrl: bookingSearchImg,
    brief: 'A simple room booking system with authentication and administrator access.',
    skills: "C#, MVC, Express, MongoDB"
  }),
  new Project({
    id: 3,
    name: 'ChessVision',
    description:
      'Test Description 3',
    imageUrl: 'https://wallpaperaccess.com/full/5137791.jpg',
    brief: "A chess training website aimed at improving chess vision through the practice of blindfold chess.",
    skills: "React"
  }),
];