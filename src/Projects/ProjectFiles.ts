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
    brief: "A database application used to store and edit graffiti of historical importance around Oxford."
  }),
  new Project({
    id: 2,
    name: 'Booking System',
    description:
      'A simple room booking system with authentication and administrator access.',
    imageUrl: bookingSearchImg,
    brief: 'A simple room booking system with authentication and administrator access.'
  }),
  new Project({
    id: 2,
    name: 'Test Project 3',
    description:
      'Test Description 3',
    imageUrl: 'https://wallpaperaccess.com/full/5137791.jpg',
    brief: "Test brief 3"
  }),
  new Project({
    id: 2,
    name: 'Test Project 4',
    description:
      'Test Description 4',
    imageUrl: 'https://wallpaperaccess.com/full/5137791.jpg',
    brief: "Test brief 4"
  }),
];