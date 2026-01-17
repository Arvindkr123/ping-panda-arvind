import { DashboardPage } from '@/components/dashboard-page';
import { db } from '@/db';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import { Plan } from '@prisma/client';
import ApiKeyPageContent from './api-key-page-content';


const Page = async () => {
    const auth = await currentUser();

    if (!auth) {
        redirect("/sign-in")
    }

    const user = await db.user.findUnique(
        {
            where: {
                externalId: auth.id
            }
        }
    )
    if (!user) {
        redirect("/sign-in")
    }
    return (
        <DashboardPage title='Account Settings'>
            <ApiKeyPageContent apiKey={user.apiKey ?? ""}/>
        </DashboardPage>
    )
}

export default Page