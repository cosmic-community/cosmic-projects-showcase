// app/projects/[slug]/page.tsx
import { getProjectBySlug, getProjects } from '@/lib/cosmic'
import { Project } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProjectDetail from '@/components/ProjectDetail'

export const revalidate = 60

export async function generateStaticParams() {
  const projects = await getProjects()
  
  return projects.map((project: Project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug) as Project | null
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Cosmic Projects Showcase`,
    description: project.metadata.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug) as Project | null

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link 
          href="/"
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <ProjectDetail project={project} />
      </div>
    </div>
  )
}