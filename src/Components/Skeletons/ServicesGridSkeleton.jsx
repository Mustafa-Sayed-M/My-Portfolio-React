import React from 'react';

const CardSkeleton = () => {
    return (
        <div className='card-skeleton p-5 shadow-md rounded-2xl bg-gradient-to-tl from-[#04071D] to-[#0C0E23] border border-[#363749] flex items-center gap-3'>
            {/* Image */}
            <div className='image animate-pulse w-28 h-28 rounded-full bg-slate-700'></div>
            {/* Text Skeletons */}
            <div className='text-skeletons space-y-2 flex-1'>
                {/* Name */}
                <p className='animate-pulse bg-slate-700 rounded-md h-4 w-1/4'></p>
                {/* Description */}
                <p className='animate-pulse bg-slate-700 rounded-md h-4'></p>
                <p className='animate-pulse bg-slate-700 rounded-md h-4 w-3/4'></p>
            </div>
        </div>
    )
};

function ServicesGridSkeleton() {
    return (
        <div className='services-grid-skeleton grid md:grid-cols-2 gap-5'>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    )
}

export default ServicesGridSkeleton;