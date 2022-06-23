import Card from '../ui/Card';
import styles from './NewMeetupForm.module.css';

function NewMeetupForm() {
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          {/* In React, the 'for' prop has a different syntax: "htmlFor" */}
          <inut type="text" required id="title" />
          {/* Setting the input type, attributing the "required" prop and giving the id */}
        </div>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Image</label>
          <inut type="url" required id="image" />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <inut type="text" required id="address" />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
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