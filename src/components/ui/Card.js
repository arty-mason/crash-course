import React from 'react'
import styles from './Card.module.css'


function Card(props) {
  // Adding props, assuming the card is going to have some props
  return (
    <div className={styles.card}>
      {/* Attaching the style to the Card */}
      {props.children}
      {/* Adding props.children variable so that the card is able to render the inner content, because otherwise it would just swallow it withou displaying on the page*/}
    </div>

  )
}

export default Card;