import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import HeadTitle from '../Shared/HeadTitle';
import ProjectsGridSkeleton from '../Skeletons/ProjectsGridSkeleton';
import { fetchProjects } from '../../Utils/api';

function Projects() {

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

    const projectsQuery = useQuery({
        queryKey: ['projects'],
        queryFn: () => fetchProjects(),
        enabled: Boolean(inView),
        refetchInterval: 60 * 60 * 1000,
        staleTime: 10 * 60 * 1000,
    });

    return (
        <section className="projects-section py-10" id="projects-section" ref={ref}>
            {/* Head Title */}
            <HeadTitle startWords={'A small selection of'} featuresWords={'recent projects'} />
            {/* Project Grid */}
            {projectsQuery.isLoading ? (
                <ProjectsGridSkeleton />
            ) : (
                projectsQuery.data && projectsQuery.data.data.length > 0 ? (
                    <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {(projectsQuery.data?.data || []).map((project, index) => (
                            <ProjectCard key={index} index={index} projectData={project} />
                        ))}
                    </div>
                ) : (
                    <ProjectsGridSkeleton />
                )
            )}
        </section>
    );
}

export default Projects;