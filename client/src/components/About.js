import '../App.css'

const About = () => {
  return (
    <div className="about">
      <section>
        <h3 className="about-header">About</h3>
        <p>
          Wander VT is an interactive full-stack engineering project displaying
          a collection of Vermont's most popular and scenic hikes. Wander VT
          demonstrates a knowledge and thoughtful use of several important
          technologies--Mongoose, Express, React, Node, Javascript, HTML, and
          CSS. Through the application of these technologies, Wander VT provides
          users the ability to interact with the data provided in a meaningful
          way. Specifically, with the ability to create, read, update, and
          delete data. Wander VT successfully perfoms these actions all while
          illustrating content that is an integral part of the beautiful state
          of Vermont. This application was created as a first-time full-stack
          engineering project as part of General Assembly's Software Engineering
          Immersive Remote program. To learn more about my current work, visit
          me on
          <a
            className="about-link"
            href="https://www.linkedin.com/in/sarahkyeager/"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  )
}

export default About
