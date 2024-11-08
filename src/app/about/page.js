"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function About() {
    const router = useRouter()
    const navigate = (name)=>{
        router.push(name)
    }
    return (
        <>
            <h1>About Page</h1>
            <br/>
            <Link href="/">Go to Home Page</Link>
            <br/>
            <br/>
            <button onClick={()=>navigate('/login')}>Go to login Page</button>
            <br/>
            <br/>
            <Link href={'/about/aboutstudent'}>Go to About Student Page</Link>
        </>
    )
}
