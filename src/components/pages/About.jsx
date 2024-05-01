import Project from "./Project";
import Trivl from "../../images/quiz-page-screenshot.jpg";
import Activ from "../../images/activ-landing-page-screenshot.jpg";
import Ai from "../../images/screenshot(28).png";
import PWA from "../../images/screenshot(27).png";
import EmployeeTracker from "../../images/screenshot(29).png";
import Project3Name from "../../images/screenshot(30).png";

export default function About() {
  const projects = [
    {
      key: 1,
      title: "Trivl",
      description: "This project entailed the creation of a trivia game in the style of the New York Times games Wordle, Connections, Crossword, etc.  Our game, TRIVL, is a ten question trivia game that allows users to test their knowledge across a wide variety of topics and compete with their friends in battles of wit.",
      image: Trivl,
      github: "https://github.com/njohnson2897/trivl-project",
      liveUrl: "https://njohnson2897.github.io/trivl-project/"
    },
    {
      key: 2,
      title: "Activ",
      description: "Activ is a workout tracking and sharing application that allows users to track past workouts, view other user's workouts for inspiration, and share accomplishments to their friends. The application has two major functions: first, Activ is meant to be an educational resource for athletes of any level to learn  more about exercises they already do or discover new exercises that they might like. Second, Activ is meant to serve as a social media platform through which friends can connect and celebrate the progress that they make.",
      image: Activ,
      github: "https://github.com/bmallar/Activ",
      liveUrl: "https://activ.onrender.com/"
    },
    {
      key: 3,
      title: "Ai Project",
      description: "This is a Ai prompt generator that will answer any coding question you might have. I created this generator outside of class using Javascript, Node and Api integration, the directions to run this are in my Readme",
      image: Ai,
      github: "https://github.com/bmallar/Ai-Project",
      liveUrl: "https://github.com/bmallar/Ai-Project#"
    },
    {
      key: 4,
      title: "PWA Text Editor",
      description: "I made a PWA TextEditor to create notes or code snippets with or without an internet connection so that I can retrieve them for later use. Clicking the install button will install this as a application to your home screen",
      image: PWA,
      github: "github repo url",
      liveUrl: "live url"
    },
    {
      key: 5,
      title: "Employee Tracker",
      description: "This is a employee tracker made by using inquirer, postgres and SQL. This allows the user to organize departments, roles and employees with unique properties within the postgres database",
      image: EmployeeTracker,
      github: "https://github.com/bmallar/Employee-Tracker",
      liveUrl: "https://drive.google.com/file/d/1KX4SvbxbGGPrgvJToMTCYzKD0hbYz6kh/view"
    },
    {
      key: 6,
      title: "Project 3",
      description: "This is a placeholder for my 3rd project",
      image: Project3Name,
      github: "https://github.com/bmallar",
      liveUrl: "https://github.com/bmallar"
    },
  ]


  return (
    <div>
      <h1>Portfolio</h1>

      {
        projects.map(project => {
          return (
            <div key={project.key}>
              <Project

                title={project.title}
                description={project.description}
                image={project.image}
                github={project.github}
                liveUrl={project.liveUrl}
              />
            </div>
          )
        })
      }
    </div>
  );
}
