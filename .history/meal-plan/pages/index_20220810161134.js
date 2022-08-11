import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Form from '../comps/Form'
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
    const [email,setEmail] = useState("")
    function handleChange(e) {
      const newval = e.target.value;
      setEmail({
        ...email, newval
      });
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Form value="Email" label="Label" />
        <Form value="Pass" label="Label" onChange={handleChange}/>

        <Link href="/ingredients">
          <a>j</a>
        </Link>
      </main>

      {/*       <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}