import React from 'react';
import HeadTitle from '../Shared/HeadTitle';
import { useInView } from 'react-intersection-observer';
import { useQuery } from '@tanstack/react-query';
import SkillCard from './SkillCard';
import SkillsGridSkeleton from '../Skeletons/SkillsGridSkeleton';
import { fetchSkills } from '../../Utils/api';

function Skills() {

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

    const skillsQuery = useQuery({
        queryKey: ['skills'],
        queryFn: () => fetchSkills(),
        enabled: Boolean(inView),
        refetchInterval: 60 * 60 * 1000,
        staleTime: 10 * 60 * 1000,
    });

    return (
        <section className="skills-section py-10" id="skills-section" ref={ref}>
            {/* Head Title */}
            <HeadTitle startWords={'My'} featuresWords={'Skills'} />
            {/* Skills Grid */}
            {skillsQuery.isLoading ? (
                <SkillsGridSkeleton />
            ) : (
                skillsQuery.data && skillsQuery.data.data.length > 0 ? (
                    <div className='skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                        {skillsQuery.data?.data.map((skill, index) => <SkillCard
                            key={index}
                            index={index}
                            skillData={skill}
                        />)}
                    </div>
                ) : (
                    <SkillsGridSkeleton />
                )
            )}
        </section>
    );
}

export default Skills;