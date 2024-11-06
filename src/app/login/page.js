"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Login() {
    const router = useRouter()
    const navigate = (name)=>{
        router.push(name)
    }


    return (
        <>
            <h1>Login Page</h1>
            <br/>
            <Link href="/">Go to Home Page</Link>
            <br/>
            <br/>
            <button onClick={()=>navigate('/about')}>Go to About Page</button>
        </>
    )
}
