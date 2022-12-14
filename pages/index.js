import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Heading from "../comps/Heading";
import SignIn from "../auth/SignIn";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meal-Ease</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContent}>
        <Heading
          heading="Meal-Ease"
          info="spend your time eating not deciding"
        />
        <div className={styles.auth}>
          <SignIn />
        </div>
      </main>
    </div>
  );
}
