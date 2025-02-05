import Link from 'next/link'
import React, { Children } from 'react'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-gray-800 text-white">
                <ul className='text-white p-5'>
                    <Link href="/">
                        <li className="mr-3 cursor-pointer">Home</li>
                    </Link>
                    <Link href="/about">    
                        <li className="mr-3 cursor-pointer">About</li>
                    </Link>
                    <Link href="/about/profile">
                        <li className="mr-3 cursor-pointer">Profile</li>
                    </Link>
                </ul>
            </nav>
            <div>{children}</div>
        </>
    )
}