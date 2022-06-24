import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';
// Importing the useState and useEffect React Hooks

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  // Using destructuring method to create variables on the state & state change, which we attribute to useState & set the default to (true)
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  // Creating another useState & a pair of variables to manage the loaded Meetups data

  useEffect(() => {
    // Initializing useState which allows us to use commands only in specific scenarios
    // ! Worth mentioning that it accepts two props: a function, and an array of dependencies
    setIsLoading(true);
    // Setting the default value of the function to (true)
    fetch("https://react-crash-course-7cc99-default-rtdb.firebaseio.com/meetups.json")
      // Fetching the existing updated data from the Firebase API. Using it inside useEffect to prevent infinite loops
      .then(response => response.json())
      // Converting the response data into into a JSON object
      .then(data => {
        const meetups = [];
        // Creating a variable with an empty array to spread the data into it.
        for (const key in data) {
          // Iterating through the items in the array
          const meetup = {
            id: key,
            ...data[key],
            // Spreading the data into the array using the key as index
            // ? Lines 24 to 29 are confusing
          };
          meetups.push(meetup);
          // Pushing up the converted data into the newly created array
        }
        setIsLoading(false);
        // As soon as we get the data, the loading state must be set to false
        setLoadedMeetups(meetups);
        // Attributing the recieved data to setLoadedMeetups
        // ? Needs a little clarification & destructuring
      });
  }, [])
  // The dependencies array should accept any external functions which our useEffect function depends on. 
  // In our case, since we don't have any, the array stays empty
  // ? Needs clarification

  if (isLoading) {
    // Setting the condition to check if the isLoading state is true
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
    // If it is, we create a JSX element to show the "Loading" message
  }
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
      {/* Rendering the imported MeetupList component and passing in loaded Meetups as value to meetups props */}
    </div>
  )
}

export default AllMeetupsPage;