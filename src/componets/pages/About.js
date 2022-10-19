import '../../assets/styles/css/pages/about.css'

function About() {
  const developerIvan = 'https://www.linkedin.com/in/ivan-alesik-b118121b6'
  const developerMaria = 'https://www.linkedin.com/in/masha-grushevskaya-76778023a'

  return (
    <main>
      <section className='about-block'>
        <h3 className='title'>Who will use this website?</h3>
        <span>The Palette project was created to help designers and web developers find and store colors in hexadecimal format.</span>
      </section>

      <section className='about-block'>
        <a className='title' href={developerMaria} target="_blank" rel="noreferrer">
          Grushevskaya Maria
        </a>
        <span>The <b>designer</b> and <b>front-end</b> developer of website. Tech stack: React and Design applications.</span>
      </section>

      <section className='about-block'>
        <a className='title' href={developerIvan} target="_blank" rel="noreferrer">
          Alesik Ivan
        </a>
        <span>The <b>full-stack</b> developer of website. React, Node.js, MongoDB and Express.</span>
      </section>
    </main>
  )
}

export default About
