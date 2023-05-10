import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Siema</h1>
      <Link href="/about">Link to About Page</Link>
    </main>
  );
}
