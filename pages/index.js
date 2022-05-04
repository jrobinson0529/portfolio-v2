import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jesse Robinson | Home</title>
        <meta
          name="description"
          content="Jesse Robinson's digital resume and portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {Array.from(Array(1000).keys()).map((n) => (
        <h1 key={n + 1}>HELLO WORLD!</h1>
      ))}
      <p>..........goodbye</p>
    </div>
  );
}
