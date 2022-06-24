import { useContext } from "react";
import { Link } from 'react-router-dom';
import styles from "./MainNavigation.module.css";
import FavouritesContext from '../../store/favourites-context';

function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);
  // Inittialitizing useContext from React to be able to bind the context of the component to the function & attributing it to the variable
  return (
    <header className={styles.header}>
      {/* Setting a dynamic class property that we will later on specify in css */}
      <div className={styles.logo}>React Meetups</div>
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
            <Link to="/favourites">My Favourites
              <span className={styles.badge}>
                {favouritesCtx.totalFavourites}
                {/* Showing the total number of favorites present*/}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;