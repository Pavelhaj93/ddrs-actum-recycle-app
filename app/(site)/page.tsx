// This is a homepage
import prisma from "@/app/libs/prismadb";

import styles from "./page.module.css";

async function fetchBottles() {
  const bottles = await prisma.bottle.findMany();

  return bottles;
}

export default async function Home() {
  const bottles = await fetchBottles();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        This is your Homepage, a server component
      </h1>
      <div>
        {bottles.map((bottle) => (
          <div key={bottle.id}>
            <p>{bottle.code}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
