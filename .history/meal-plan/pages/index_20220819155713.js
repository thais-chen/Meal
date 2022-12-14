import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Form from '../comps/Form'
import Link from "next/link";
import Heading from '../comps/Heading';
import { useState } from 'react';
import Recipes from './recipes';

export default function Home() {
    const [email,setEmail] = useState(" ")

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

      <main className="flex justify-center flex-col items-center">
        <Heading heading="FitMeal" info="spend your time eating not deciding" />
        <div className="flex justify-center flex-col items-center">
          <Form
            value={email.value}
            label="Pass"
            placeholder="Enter Email"
            onChange={handleChange}
          />
          <Form
            value={email.value}
            label="Pass"
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <Link href="/ingredients">
            <button className="rounded-md bg-indigo-500 w-1/2 ">
              <a>Sign In</a>
            </button>
          </Link>

          <Link href="/recipes">
            <button className="rounded-md bg-indigo-500 w-1/2 ">
              <a>Sign In</a>
            </button>
          </Link>
        </div>
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
