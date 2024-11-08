import Link from 'next/link'
import React from 'react'

export default function StudentList() {
    const StudentList = ['gaurav', 'saurabh', 'kapil', 'lalita']
    return (
        <>
            <h1>Student List</h1>
            {
                StudentList.map((items, index) => {
                    return (
                        <ul key={index}>
                            <li><Link href={'/studentlist/'+items}>{items}</Link></li>
                        </ul>
                    )
                })
            }
        </>
    )
}