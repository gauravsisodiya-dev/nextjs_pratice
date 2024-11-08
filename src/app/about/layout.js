"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import './layout.css'
import { usePathname } from 'next/navigation'

export default function AboutLayout({ children }) {
    const pathName = usePathname()
    // const hideHeader = ['/about/aboutstudent', '/about']
    return (
        <div>
            {
                pathName !== '/about/aboutstudent'
                    ?
                    <div className='menu'>
                        <ul>
                            <li className=' navbarLogo'><Link href={'/'}>About Navbar</Link></li>
                            <li><Link href={'/about'}>About</Link></li>
                            <li><Link href={'/about/aboutstudent'}>About Student</Link></li>
                            <li><Link href={'/about/aboutteacher'}>About Teacher</Link></li>
                        </ul>
                    </div>
                    :
                    <Link href={'/about'}>Got To about Page</Link>
            }
            {children}
        </div>
    )
}
