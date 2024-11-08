'use client'

import { useParams } from 'next/navigation'
import React from 'react'

export default function Lecture() {
    const params = useParams()
    console.log(params)
    return (
        <>
            <h1>This Is A Lecture Page</h1>
            <br/>
            <h2>Lecture Days: {params.lecture[0]}</h2>
            <br/>
            <h3>Lecture Date {params.lecture[1]}</h3>
        </>
    )
}
