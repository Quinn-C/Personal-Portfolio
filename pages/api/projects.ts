import { NextApiHandler } from "next";

const projects: NextApiHandler = (req, res) => {
  res.status(200).json([
    {
      title: "Traffic Simulation",
      text: "This project built a simulation of the 'Merge in turn in slow, start-stop traffic' by using Unity and playmaker. It was inspired by the road works traffic experience I had on the M4. As 90% of people did the exact opposite way of what the Highway code suggested, I wanted to build this visual application, so people can see how their behaviours affects the traffic. The demo video will explain it in details and will be here soon!",
      short_intro:"A simulation of the 'Merge in turn in slow, start-stop traffic' by using Unity and playmaker. Demo video link will be here soon!",
      author: "Contributor:  Joan",
      time: "Time period:  Done on Mar 2022",
      url: "https://joanqingchen.me/",
      github: "",
      team: false,
      tools:"Unity and Playmaker",
      language:"",
      // picture: "CrossPlay",
      // pictureWidth: "46px",
    },
    {
      title: "Bug Tracker",
      text: "After graduated from the coding bootcamp, I started my personal side project to cement everything I learned in these 16 weeks. Bug tracker is an app for tech lead to easily manage all the issues, bugs, features that need to be fixed or delivered in their team. Currently working on the pages for admin, will add authorization feature soon!",
      short_intro:"Bug tracker is an app for tech lead to easily manage all the issues, bugs, features that need to be fixed or delivered in their team. Live website link will be here soon!",
      author: "Contributor:  Joan",
      time: "Time period:  ongoing, started from Mar 2022",
      url: "https://joanqingchen.me/",
      github: "",
      team: false,
      tools:"JavaScript, ReactJS, ExpressJS, PostgreSQL",
      language:"",
    },
    {
      title: "Simple app",
      text: "In a team of 6, we implemented an app with React and Express to create a simple UI/UX for neurodivergent people to easily manage their Todo list. We worked in an agile way by using Trello board and Slack.",
      short_intro:"An app with a simple UI/UX for neurodivergent people to easily manage their Todo list.",
      author: "Contributors:  Joan, Ahammed, Nicholas, Umkalthum, Ben, Kat",
      time: "Time period:  4-week project, done on Mar 2022",
      url: "https://simple-app2.netlify.app/",
      github: "https://github.com/SchoolOfCode/final-project-front-end-team-26-bit-by-bit",
      team: true,
      tools:"JavaScript, ReactJS, ExpressJS, PostgreSQL",
      language:"",
    },
    {
      title: "Bootcamper Helper",
      text: " In a team of 4, we implemented an app with ReactJS and ExpressJS to create a web app for bootcampers to add or search learning resources linked by topics.",
      short_intro:"An app for bootcampers to add or search learning resources linked by topics.",
      author: "Contributors:  Joan, Jenny, Josh, Pietro",
      time: "Time period:  1-week project, done on Jan 2022",
      url: "https://bootcamperknowledge.herokuapp.com/",
      github: "https://github.com/SchoolOfCode/national-project-week-jenny-josh-joan-pietro",
      team: true,
      tools:"JavaScript, ReactJS, ExpressJS, PostgreSQL",
      language:"",
    },
  ]);
};

export default projects;
