import React from 'react'
import { Link } from 'react-router-dom'

function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
            {/* The Link component, provided by React Router Dom, allows to load the appropriate component without refreshing the page */}
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
            {/* The to="" is a necessary property for the Link to understand which component to refer to and render*/}
          </li>
          <li>
            <Link to="/favourites">My Favourites</Link>

          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation