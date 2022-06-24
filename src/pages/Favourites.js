import { useContext } from 'react';
import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavouritesPage() {
  const favouritesCtx = useContext(FavouritesContext);
  // Inittialitizing useContext from React to be able to bind the context of the component to the function & attributing it to the variable

  let content;
  // Creating a helper variable
  if (favouritesCtx.totalFavourites === 0) {
    // Checking if the FavouritesCtx is empty
    content = <p>
      You got no favorites. Start adding some?
    </p>
    // Adding a note on the empty content
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />
    // Attributing the MeetupList to the content variable
  }

  return (
    <section>
      <h1>My favourites</h1>
      {content}
      {/* Rendering content variable in the favourites */}
    </section>
  )
}

export default FavouritesPage