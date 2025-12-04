import { Project } from '@/types'
import Link from 'next/link'

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const screenshot = project.metadata.screenshot
  const author = project.metadata.author
  const categories = project.metadata.categories || []

  // Use repository image if available, fallback to screenshot
  const imageUrl = screenshot?.imgix_url || screenshot?.url

  return (
    <article className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600">{project.metadata.description}</p>
          </div>
          {project.metadata.featured && (
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
              Featured
            </span>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center space-x-2">
            {author.metadata.avatar && (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={author.title}
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
            )}
            <div>
              <p className="font-medium text-gray-900">
                <Link 
                  href={`/authors/${author.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {author.title}
                </Link>
              </p>
              <p className="text-gray-600 text-xs">Project Author</p>
            </div>
          </div>

          <div className="flex items-center space-x-1 text-gray-600">
            <span className="font-medium">Framework:</span>
            <span className="bg-gray-100 px-3 py-1 rounded">{project.metadata.framework.value}</span>
          </div>

          {project.metadata.platform_type && (
            <div className="flex items-center space-x-1 text-gray-600">
              <span className="font-medium">Platform:</span>
              <span className="bg-gray-100 px-3 py-1 rounded">{project.metadata.platform_type.value}</span>
            </div>
          )}
        </div>
      </div>

      {/* Screenshot */}
      {imageUrl && (
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl mb-8">
          <img
            src={`${imageUrl}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={project.title}
            className="w-full h-full object-cover"
            width={800}
            height={450}
          />
        </div>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category.id}
                className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium"
              >
                {category.metadata.icon && (
                  <span className="mr-2 text-lg">{category.metadata.icon}</span>
                )}
                {category.title}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Stats & Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Project Stats</h3>
          <div className="space-y-3">
            {project.metadata.clone_count !== undefined && (
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Clones</span>
                <span className="font-semibold text-lg">{project.metadata.clone_count}</span>
              </div>
            )}
            {project.metadata.star_count !== undefined && (
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Stars</span>
                <span className="font-semibold text-lg">{project.metadata.star_count}</span>
              </div>
            )}
            {project.metadata.updated_date && (
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Last Updated</span>
                <span className="font-semibold">{new Date(project.metadata.updated_date).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Quick Links</h3>
          <div className="space-y-3">
            {project.metadata.live_url && (
              <a
                href={project.metadata.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live Site
              </a>
            )}
            {project.metadata.repository_url && (
              <a
                href={project.metadata.repository_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Author Bio */}
      {author.metadata.bio && (
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-4">About the Author</h3>
          <div className="flex items-start space-x-4">
            {author.metadata.avatar && (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                alt={author.title}
                className="w-20 h-20 rounded-full flex-shrink-0"
                width={80}
                height={80}
              />
            )}
            <div className="flex-1">
              <p className="text-gray-700 mb-4">{author.metadata.bio}</p>
              <div className="flex flex-wrap gap-3">
                {author.metadata.website && (
                  <a
                    href={author.metadata.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary-dark font-medium"
                  >
                    Website
                  </a>
                )}
                {author.metadata.github_url && (
                  <a
                    href={author.metadata.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary-dark font-medium"
                  >
                    GitHub
                  </a>
                )}
                {author.metadata.twitter_url && (
                  <a
                    href={author.metadata.twitter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary-dark font-medium"
                  >
                    Twitter
                  </a>
                )}
                {author.metadata.linkedin_url && (
                  <a
                    href={author.metadata.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary-dark font-medium"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}