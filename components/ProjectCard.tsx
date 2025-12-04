import Link from 'next/link'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const screenshot = project.metadata.screenshot
  const author = project.metadata.author
  const categories = project.metadata.categories || []

  // Use repository image if available, fallback to screenshot
  const imageUrl = screenshot?.imgix_url || screenshot?.url

  return (
    <Link 
      href={`/projects/${project.slug}`}
      className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
        featured ? 'ring-2 ring-primary' : ''
      }`}
    >
      {/* Screenshot */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        {imageUrl && (
          <img
            src={`${imageUrl}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={400}
            height={225}
          />
        )}
        {featured && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.metadata.framework && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium whitespace-nowrap ml-2">
              {project.metadata.framework.value}
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.metadata.description}
        </p>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <span
                key={category.id}
                className="inline-flex items-center text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
              >
                {category.metadata.icon && (
                  <span className="mr-1">{category.metadata.icon}</span>
                )}
                {category.title}
              </span>
            ))}
          </div>
        )}

        {/* Author & Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            {author.metadata.avatar && (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                alt={author.title}
                className="w-8 h-8 rounded-full"
                width={32}
                height={32}
              />
            )}
            <span className="text-sm text-gray-700 font-medium">{author.title}</span>
          </div>

          <div className="flex items-center space-x-3 text-sm text-gray-600">
            {project.metadata.clone_count !== undefined && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {project.metadata.clone_count}
              </span>
            )}
            {project.metadata.star_count !== undefined && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {project.metadata.star_count}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}