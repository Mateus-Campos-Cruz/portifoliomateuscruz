import React from 'react'

const technologies = [
  { name: 'HTML5', icon: 'fa-brands fa-html5' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
  { name: 'JavaScript', icon: 'fa-brands fa-js' },
  { name: 'PHP', icon: 'fa-brands fa-php' },
  { name: 'Git', icon: 'fa-brands fa-git-alt' },
  { name: 'React', icon: 'fa-brands fa-react' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
  { name: 'SQL', icon: 'fa-solid fa-database' }
];

const Technologies = () => {
  return (
    <section id="tech">
      <h2 className="section-title">Technologies</h2>
      <div className="tech-container">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item" title={tech.name}>
            <i className={tech.icon}></i>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies
