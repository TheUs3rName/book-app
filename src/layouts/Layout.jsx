import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://github.com/TheUs3rName">Github</a> | By TheU3er !
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by TheUs3r !</p>
      </footer>
    </>
  );
}

export default Layout;
