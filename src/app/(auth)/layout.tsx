import React, { ReactNode } from 'react'
import { Navbar } from '@/app/components/navbar'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default layout