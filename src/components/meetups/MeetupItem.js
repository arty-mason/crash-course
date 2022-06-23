import React from 'react';
import Card from '../ui/Card';
import styles from "./MeetupItem.module.css";

function MeetupItem(props) {
  // Passing props into the function to be able to use a dynamic property
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
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem;