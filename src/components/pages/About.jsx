import Project from "./Project";


export default function About() {
  const projects = [
    {
      key: 1,
      title: "Blog",
      description: "JS Blog",
      image: "../../images/Tech Resume.pdf",
      github: "http://google.com",
      liveUrl: "www.wikipedia.org"
    },
    {
      key: 2,
      title: "Blog 2",
      description: "JS Blog",
      image: "image url here",
      github: "github repo url",
      liveUrl: "live url"
    },
    {
      key: 3,
      title: "Blog 3",
      description: "JS Blog",
      image: "image url here",
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
