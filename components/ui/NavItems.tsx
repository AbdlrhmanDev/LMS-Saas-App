'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'My Journey',
        href: '/my-journey'
    },
    {
        label: 'Learning Companions',
        href: '/companions'
    },
]

const NavItems = () => {
    const pathname = usePathname()
    
    return (
        <div className="hidden md:flex items-center gap-6">
            {navItems.map(({label, href}) => (
                <Link 
                    href={href} 
                    key={label} 
                    className={cn(
                        'relative text-sm font-medium transition-colors duration-200',
                        'text-muted-foreground hover:text-foreground',
                        pathname === href && 'text-foreground font-semibold',
                        'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full',
                        'after:origin-center after:scale-x-0 after:bg-primary after:transition-transform',
                        'after:duration-200 hover:after:scale-x-100',
                        pathname === href && 'after:scale-x-100'
                    )}
                >
                    {label}
                </Link>
            ))}
        </div>
    )
}

export default NavItems