'use client'
import { SignIn } from '@clerk/nextjs';
import React, { ReactNode } from 'react'
const Page = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full flex-1 flex items-center justify-center'>
            <SignIn />
        </div>
    )
}

export default Page;