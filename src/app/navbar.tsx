import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    const { status }: { status: string } = useSession();

    return (
        <nav className="flex bg-gray-800 py-2 px-5 text-white justify-between">
            <div className='flex'>
                <h1>Navbar</h1>
                <ul className="flex ml-5">
                    <li className={`mr-3 ${pathname === "/" ? "text-blue-300" : "text-white"}`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`mr-3 ${pathname === "/about" ? "text-blue-300" : "text-white"}`}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={`mr-3 ${pathname === "/about/profile" ? "text-blue-300" : "text-white"}`}>
                        <Link href="/about/profile">Profile</Link>
                    </li>
                </ul>
            </div>
            <div>
                {status === 'authenticated' ? (
                    <button
                        className='bg-white rounded-md px-3 text-sm h-7 text-black cursor-pointer'
                        onClick={() => signOut()}
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        className='bg-white rounded-md px-3 text-sm h-7 text-black cursor-pointer'
                        onClick={() => signIn()}
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    )
}
