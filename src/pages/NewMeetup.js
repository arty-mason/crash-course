import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    // Creating a separate local function to handle the addMeetup & accepting meetupData as expected props
    fetch("https://react-crash-course-7cc99-default-rtdb.firebaseio.com/meetups.json",
      // Fetching the data from the server (in our case, a previously setup Firebase API)
      // ! Notice how we add 'meetups' after the slash to create a folder right in the database and parse the data by using .json extension
      {
        method: "POST",
        // Specifying the method because by default it will be "GET" which just reads the data from user, and we need to sumbit the data, hence we use "POST"
        body: JSON.stringify(meetupData),
        // Using JSON.stringify to transform the received data into a JSON string; passing expected meetupData as props
        headers: {
          "Content-Type": "application/json",
          // Creating the headers & specifying the content type 
        }
      });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      {/* Passing the previosly created onAddMeetup function & passing addMeetupHandler as a value*/}
    </section>
  )
}

export default NewMeetupPage;