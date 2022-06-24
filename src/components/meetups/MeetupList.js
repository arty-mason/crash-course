import MeetupItem from './MeetupItem';
import styles from './MeetupList.module.css';


function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {/* Dynamically importing the styles from css */}
      {props.meetups.map((meetup) => (<MeetupItem
        // Using a dynamic JavaScript feature, mapping the expected array & transforming every received item into a JSX component, which we automatically import from MeetupItem
        key={meetup.id}
        id={meetup.id}
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
      />
      ))}
      {/* Adding the dynamic props along with the key for React to render the components properly */}
    </ul>
  )
}

export default MeetupList;