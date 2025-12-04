'use client'

import { Project } from '@/types'
import ProjectCard from '@/components/ProjectCard'
import { useState } from 'react'

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedFramework, setSelectedFramework] = useState<string>('all')

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600 text-lg">No projects found.</p>
      </div>
    )
  }

  // Get unique frameworks
  const frameworks = Array.from(
    new Set(projects.map(p => p.metadata.framework.key))
  )

  // Filter projects
  const filteredProjects = selectedFramework === 'all'
    ? projects
    : projects.filter(p => p.metadata.framework.key === selectedFramework)

  return (
    <div id="projects">
      {/* Framework Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button
          onClick={() => setSelectedFramework('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedFramework === 'all'
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Frameworks
        </button>
        {frameworks.map((framework) => (
          <button
            key={framework}
            onClick={() => setSelectedFramework(framework)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedFramework === framework
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {projects.find(p => p.metadata.framework.key === framework)?.metadata.framework.value}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">No projects found for this framework.</p>
        </div>
      )}
    </div>
  )
}