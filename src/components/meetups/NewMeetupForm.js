import { useRef } from "react";
// A special React function to reference the DOM elements

import Card from '../ui/Card';
import styles from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  // Passing expected props into the function
  const titleInputRef = useRef();
  // Creating a variable that stores the React useRef function
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    // Passing event prop to manipulate event in the future
    event.preventDefault();
    // Preventing the browser to reload the page on submit by default
    const enteredTitle = titleInputRef.current.value;
    // Storing the actual current value of the input in a variable & doing the same for all other inputs
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      // Creating a variable that stores the entered data
      title: enteredTitle,
      // Creating a key\value pair that stores the data from inputs
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    }
    // console.log(meetupData);
    // // To check if the entered data is passed correctly, we need to display it in the console first
    props.onAddMeetup(meetupData);
    // Expecting the props to receive a function as a value, which in turn will receive meetupData
  }
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        {/* Using the event listener "onSubmit" (React internal feature) and passing the submitHandler function into it */}
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          {/* In React, the 'for' prop has a different syntax: "htmlFor" */}
          <input type="text" required id="title" ref={titleInputRef} />
          {/* Setting the input type, attributing the "required" prop and giving the id */}
          {/* We also use the ref={} property to connect our titleInputRef function & the value of the input, received by browser  */}
        </div>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}>
          </textarea>
          {/* In the textearea you can set the size of the box by specifying the number of rows */}
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm;