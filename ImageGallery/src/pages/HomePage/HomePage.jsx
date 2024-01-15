import styles from "./HomePage.module.css";
import Gallery from "../../components/Gallery/Gallery";

function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>The 17 Sustainable Development Goals</h1>
        <Gallery></Gallery>
      </main>
    </>
  );
}

export default HomePage;
