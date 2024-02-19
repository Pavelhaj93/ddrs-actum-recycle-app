// This is a homepage

import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        This is your Homepage, a server component
      </h1>
    </main>
  );
}
