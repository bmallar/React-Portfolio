import Project from "./Project";


export default function About() {
  const projects = [
    {
      key: 1,
      title: "Trivl",
      description: "This project entailed the creation of a trivia game in the style of the New York Times games Wordle, Connections, Crossword, etc.  Our game, TRIVL, is a ten question trivia game that allows users to test their knowledge across a wide variety of topics and compete with their friends in battles of wit.",
      image: "../../images/",
      github: "https://github.com/njohnson2897/trivl-project",
      liveUrl: "https://njohnson2897.github.io/trivl-project/"
    },
    {
      key: 2,
      title: "Activ",
      description: "Activ is a workout tracking and sharing application that allows users to track past workouts, view other user's workouts for inspiration, and share accomplishments to their friends. The application has two major functions: first, Activ is meant to be an educational resource for athletes of any level to learn  more about exercises they already do or discover new exercises that they might like. Second, Activ is meant to serve as a social media platform through which friends can connect and celebrate the progress that they make.",
      image: "../../images/",
      github: "https://github.com/bmallar/Activ",
      liveUrl: "https://activ.onrender.com/"
    },
    {
      key: 3,
      title: "Ai Project",
      description: "This is a Ai prompt generator that will answer any coding question you might have. I created this generator outside of class using Javascript, Node and Api integration, the directions to run this are in my Readme",
      image: "../../images",
      github: "https://github.com/bmallar/Ai-Project",
      liveUrl: "https://github.com/bmallar/Ai-Project#"
    },
    {
      key: 4,
      title: "PWA Text Editor",
      description: "I made a PWA TextEditor to create notes or code snippets with or without an internet connection so that I can retrieve them for later use. Clicking the install button will install this a ",
      image: "../../images",
      github: "github repo url",
      liveUrl: "live url"
    },
    {
      key: 5,
      title: "Blog 3",
      description: "JS Blog",
      image: "../../images",
      github: "github repo url",
      liveUrl: "live url"
    },
    {
      key: 6,
      title: "Project 3",
      description: "This is a placeholder for my 3rd project",
      image: "../../images/placeholder",
      github: "github repo url",
      liveUrl: "live url"
    },
  ]


  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>

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
