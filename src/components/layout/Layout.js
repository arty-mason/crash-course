import styles from './Layout.module.css'
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      {/* Putting the navigation over the rest of the content */}
      <main className={styles.main}>{props.children}</main>
      {/* Passing children to the main so that the page renders innner content */}
    </div>
  )
}

export default Layout;