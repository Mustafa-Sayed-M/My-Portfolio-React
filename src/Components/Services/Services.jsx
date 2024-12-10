import React from 'react';
import HeadTitle from '../Shared/HeadTitle';
import { useQuery } from '@tanstack/react-query';
import ServiceCard from './ServiceCard';
import ServicesGridSkeleton from '../Skeletons/ServicesGridSkeleton';
import { useInView } from 'react-intersection-observer';
import { fetchServices } from '../../Utils/api';

function Services() {

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

    const servicesQuery = useQuery({
        queryKey: ['services'],
        queryFn: () => fetchServices(),
        enabled: Boolean(inView),
        refetchInterval: 60 * 60 * 1000,
        staleTime: 10 * 60 * 1000,
    })

    return (
        <section className="services-section py-10" id="services-section" ref={ref}>
            {/* Head Title */}
            <HeadTitle startWords={'My'} featuresWords={'Services'} />
            {/* Services Grid */}
            {servicesQuery.isLoading ? (
                <ServicesGridSkeleton />
            ) : (
                servicesQuery.data && servicesQuery.data.data.length > 0 ? (
                    <div className='services-grid grid md:grid-cols-2 gap-5'>
                        {(servicesQuery.data?.data || []).map((service, index) => <ServiceCard
                            key={index}
                            index={index}
                            serviceData={service}
                        />)}
                    </div>
                ) : (
                    <ServicesGridSkeleton />
                )
            )}
        </section>
    )
}

export default Services;