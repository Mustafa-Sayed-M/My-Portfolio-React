import React from 'react';

const CardSkeleton = () => {
    return (
        <div className='card-skeleton p-5 shadow-md rounded-2xl bg-gradient-to-tl from-[#04071D] to-[#0C0E23] border border-[#363749] space-y-3'>
            {/* Image */}
            <div className='image h-[300px] rounded-md animate-pulse bg-slate-700'></div>
            {/* Text Box */}
            <div className='text-box space-y-3'>
                {/* Header */}
                <div className='header flex items-center justify-between'>
                    {/* Name */}
                    <p className='h-4 rounded-md animate-pulse bg-slate-700 w-1/4'></p>
                    {/* Github */}
                    <div className='w-7 h-7 rounded-full bg-slate-700 animate-pulse'></div>
                </div>
                {/* Description */}
                <div className='description space-y-2'>
                    <p className='h-4 rounded-md animate-pulse bg-slate-700'></p>
                    <p className='h-4 rounded-md animate-pulse bg-slate-700 w-3/4'></p>
                </div>
            </div>
            {/* Foot */}
            <div className='foot space-y-4'>
                {/* Techs */}
                <ul className='flex items-center'>
                    <li className='h-10 w-10 rounded-full animate-pulse bg-slate-700'></li>
                    <li className='h-10 w-10 rounded-full animate-pulse bg-slate-700 -ml-2'></li>
                    <li className='h-10 w-10 rounded-full animate-pulse bg-slate-700 -ml-2'></li>
                    <li className='h-10 w-10 rounded-full animate-pulse bg-slate-700 -ml-2'></li>
                </ul>
                {/* Check Link */}
                <p className='h-8 rounded-md animate-pulse bg-slate-700'></p>
            </div>
        </div>
    )
};

function ProjectsGridSkeleton() {
    return (
        <div className='projects-grid-skeleton grid md:grid-cols-3 gap-5'>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    )
}

export default ProjectsGridSkeleton;