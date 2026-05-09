import React from 'react'

const projectData = [
  {
    title: 'Deep Beat',
    description: 'Music production platform for producers and artists',
    tags: ['React', 'Node', 'PostgreSQL'],
    link: 'https:/github.com/Mateus-Campos-Cruz/deepbeat',
    img: 'img/deepbeat.png'
  },
  {
    title: 'Granja On',
    description: 'Platform for farm management',
    tags: ['HTML', 'CSS', 'React', 'Javascript', ' Node'],
    link: 'https:/github.com/Mateus-Campos-Cruz/Granja-on-local-',
    img: 'img/granjaon.png'
  },
  {
    title: 'Digibook',
    description: 'Technology school platform.',
    tags: ['HTML', 'CSS'],
    link: 'https://mateus-campos-cruz.github.io/digibook/',
    img: 'img/digibook.png'
  },
  {
    title: 'AI News Today',
    description: 'Global Artificial Intelligence news portal.',
    tags: ['Wix Studio'],
    link: 'https://mateusfelipecampos.wixstudio.io/aitodaynewsnow',
    img: 'img/ainews.JPG'
  },
  {
    title: 'Monétaire',
    description: 'Banking institution website.',
    tags: ['HTML', 'CSS'],
    link: 'https://mateus-campos-cruz.github.io/monetaire/',
    img: 'img/monetaire.JPG'
  },
  {
    title: 'Tiger Tech',
    description: 'AI News and technology hub.',
    tags: ['HTML', 'CSS', 'JS'],
    link: 'https://mateus-campos-cruz.github.io/tigertech/contact.html',
    img: 'img/tigertech.JPG'
  },
  {
    title: "Don't Panic!",
    description: 'Mobile component store and repair service.',
    tags: ['HTML', 'CSS', 'JS'],
    link: 'https://mateus-campos-cruz.github.io/DontPanic/',
    img: 'img/dontpanic.JPG'
  },
  {
    title: 'Pet Shop City',
    description: 'Price comparison tool for pet shops.',
    tags: ['React', 'JS'],
    link: 'https://mateus-campos-cruz.github.io/petshopcity/',
    img: 'img/petshopcity.JPG'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card" onClick={() => window.open(project.link, '_blank')}>
            <div className="project-img-wrapper">
              <div className="project-img">
                <img src={project.img} alt={project.title} />
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
