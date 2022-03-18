import { NextApiHandler } from "next";

const projects: NextApiHandler = (req, res) => {
  res.status(200).json([
    {
      title: "Highway Traffic Modelling",
      text: "This project was inspired from my experience when me and my husband needed to drive from Reading to Watford to take a test. We encountered a big traffic at that day due to the closure of M4 near the Heathrow airport...",
      author: "Contributor:  Joan",
      position: "Time period:  ongoing, started from Mar 2022",
      url: "",
      github: "",
      team: false,
      // picture: "CrossPlay",
      // pictureWidth: "46px",
    },
    {
      title: "Bug Tracker",
      text: "After graduated from the coding bootcamp, I started my personal side project to cement everything I learned in these 16 weeks. Bug tracker is an app for tech leadd to easily manager all the issues, bugs, features that need to be fixed or delivered in their team. Currently working on the pages for admin, will do for normal devs soon.",
      author: "Contributor:  Joan",
      position: "Time period:  ongoing, started from Mar 2022",
      url: "",
      github: "",
      team: false,
    },
    {
      title: "Simple app",
      text: "In a team of 6, implemented an app with React and Express to create a simple UI/UX for users to easily manage their Todo list in an agile way in 4 weeks..",
      author: "Contributors:  Joan, Ahammed, Nicholas, Umkalthum, Ben, Kat",
      position: "Time period:  4-week project, done in Mar 2022",
      url: "https://simple-app2.netlify.app/",
      github: "https://github.com/SchoolOfCode/final-project-front-end-team-26-bit-by-bit",
      team: true,
    },
    {
      title: "Bootcamper Helper",
      text: " In a team of 4, implemented an app with ReactJS and ExpressJS to create a web app for bootcampers to add or search learning resources linked by topics.         ",
      author: "Contributors:  Joan, Jenny, Josh, Pietro",
      position: "Time period:  1-week project, done in Jan 2022",
      url: "https://bootcamperknowledge.herokuapp.com/",
      github: "https://github.com/SchoolOfCode/national-project-week-jenny-josh-joan-pietro",
      team: true,
    },
  ]);
};

export default projects;
