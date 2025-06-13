import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <Image 
            src="/images/logo.svg" 
            alt="logo" 
            width={46} 
            height={44}
            className="h-11 w-auto"
            priority
          />
        </Link>
        
        <div className="flex items-center gap-6 md:gap-8">
          <NavItems />
          <SignedOut>
                    <SignInButton>
                        <button className="btn-signin">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default Navbar