import React from 'react';
import Card from '../ui/Card';
import styles from "./MeetupItem.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  // Passing props into the function to be able to use a dynamic property
  const favouritesCtx = useContext(FavouritesContext);
  // Inittialitizing useContext from React to be able to bind the context of the component to the function & attributing it to the variable
  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);
  // Extracting the value out of the favouritesCtx variable using dot notation and attributing it to the variable
  // ? The block with useContext is a little confusing, needs clarification
  function toggleFavouriteStatusHandler(props) {
    // Creating a function to handle the Favourites button with either adding or removing the item from Favourites
    if (itemIsFavourite) {
      // Checking if the item is already in the favourites
      favouritesCtx.removeFavourite(props.id)
      // Removing the item from favourites in this scenario
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
        // Otherwise, we create a new object to store it in favouritesCtx, dynamically attributing all the necessary key-value pairs;
      }
      )
    }
  }

  return (
    <li className={styles.item}>
      {/* Dynamically importing the styles, received from css file*/}
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
          {/* Adding dynamic property to receive value later on*/}
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? 'Remove from Favorites' : 'To Favourites'}
            {/* Attributing the defined handler to React onClick, giving the dynamic name upon checking wheteher or not the item is in the Favourites already*/}
          </button>
          {/* DOESN'T WORK YET!!! */}
        </div>

      </Card>
    </li>
  )
}

export default MeetupItem;