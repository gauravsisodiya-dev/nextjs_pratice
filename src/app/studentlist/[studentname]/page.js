import Link from 'next/link'
import React from 'react'

export default function StudentName({params}) {
    return (
        <>
            <h1>Student Details</h1>
            <br/>
            <h3>Name : {params.studentname}</h3>
            <br/>
            <Link href={'/studentlist'}>Go to Student List</Link>
        </>
    )
}
