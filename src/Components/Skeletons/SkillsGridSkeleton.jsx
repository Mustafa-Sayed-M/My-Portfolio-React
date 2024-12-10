import React from 'react';

const CardSkeleton = () => {
    return (
        <div className='card-skeleton space-y-2'>
            {/* Content Skeleton */}
            <div className='p-5 rounded-2xl bg-[#0C0E23] border border-border-color'>
                {/* Image Skeleton */}
                <div className='bg-slate-700 animate-pulse w-28 h-28 rounded-full mx-auto mb-2'></div>
                {/* Percentage Skeleton */}
                <p className='animate-plus bg-slate-700 rounded-md h-3 w-10 mx-auto'></p>
            </div>
            {/* Name Skeleton */}
            <p className='animate-plus bg-slate-700 rounded-md h-3 w-28 mx-auto'></p>
        </div>
    )
};

function SkillsGridSkeleton() {
    return (
        <div className='skills-grid-skeleton grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    )
}

export default SkillsGridSkeleton;