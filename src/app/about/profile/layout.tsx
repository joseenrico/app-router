import Link from 'next/link'
import React, { Children } from 'react'

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>Title</h1>
            <div>{children}</div>
        </>
    )
}