"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
// import styles from "./page.module.css";

export default function Home() {

  const router = useRouter()

  return (
    <div>
        <h1>Home Page</h1>
        <br/>
        <Link href="/about">Go to About Page</Link>
        <br/>
        <br/>
        <button onClick={()=>router.push('/login')}>Go to Login Page</button>
    </div>
  );
}
