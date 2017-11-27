import React from 'react'

const MeatAndPotatoes = (props) => {
  return (
    <div className="meat-and-potatoes">
      <h1>
        Full stack web app developer with a passion for product and user experience.
        <br />Based in Perth, Australia
      </h1>

      <p>
        I seek to improve the lives of real people through cool, well tested and simplistic software that does more with less.
      </p>

      <p>
        Got an Elixir job? <a href="mailto:hello@lukerollans.me">Hire me</a>.
      </p>

      <h2>The tech.</h2>
      <ul>
        <li>Elixir</li>
        <li>Ruby</li>
        <li>React</li>
        <li>Phoenix Framework</li>
        <li>Ruby on Rails</li>
        <li>HTML/CSS/SCSS/JavaScript</li>
      </ul>

      <h2>Recent work history.</h2>
      <ul>
        <li>
          Alembic, 2017 - current,<br />
          Elixir, GraphQL, React
        </li>

        <li>
          Bonsai Branding, 2016 - 2017<br />
          Elixir, React
        </li>

        <li>
          reinteractive, 2015 - 2016<br />
          Ruby
        </li>

        <li>
          birdbrain, 2012 - 2015<br />
          PHP
        </li>
      </ul>
    </div>
  )
}

export default MeatAndPotatoes
