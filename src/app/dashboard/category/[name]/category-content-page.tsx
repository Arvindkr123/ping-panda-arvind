'use client';

import { EventCategory } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import EmptyCategoryPage from "./empty-category-page";

interface CategoryPageContentProps {
    hasEvents: boolean,
    category: EventCategory
}

export const CategoryPageContent = ({ hasEvents: initialHasEvents, category }: CategoryPageContentProps) => {
    const { data: pollingData } = useQuery({
        queryKey: ['category', category.name, "hasEvents"],
        initialData: { hasEvents: initialHasEvents }
    });

    if(!pollingData.hasEvents){
        return <EmptyCategoryPage categoryName={category.name}/>
    }
}