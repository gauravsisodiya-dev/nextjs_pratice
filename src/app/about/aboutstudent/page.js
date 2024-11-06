import Link from 'next/link'
import React from 'react'

export default function AboutStudent() {
    return (
        <>
            <h1>About Student Page</h1>
            <Link href={'/about'}>Go to About Page</Link>
        </>
    )
}
