// app/authors/[slug]/page.tsx
import { getAuthorBySlug, getProjectsByAuthor } from '@/lib/cosmic'
import { Author, Project } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import ProjectGrid from '@/components/ProjectGrid'

export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug) as Author | null
  
  if (!author) {
    return {
      title: 'Author Not Found',
    }
  }

  return {
    title: `${author.title} - Cosmic Projects Showcase`,
    description: author.metadata.bio || `Projects by ${author.title}`,
  }
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug) as Author | null

  if (!author) {
    notFound()
  }

  const projects = await getProjectsByAuthor(author.id) as Project[]

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

        <AuthorProfile author={author} />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Projects by {author.title}</h2>
          {projects.length > 0 ? (
            <ProjectGrid projects={projects} />
          ) : (
            <p className="text-gray-600 text-center py-8">No projects yet.</p>
          )}
        </section>
      </div>
    </div>
  )
}