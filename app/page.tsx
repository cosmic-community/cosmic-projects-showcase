import { getProjects, getFeaturedProjects, getCategories } from '@/lib/cosmic'
import { Project, Category } from '@/types'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import ProjectGrid from '@/components/ProjectGrid'
import CategoryFilter from '@/components/CategoryFilter'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  const [projects, featuredProjects, categories] = await Promise.all([
    getProjects(),
    getFeaturedProjects(),
    getCategories(),
  ])

  return (
    <div>
      <Hero />
      
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Handpicked showcases demonstrating the power and flexibility of Cosmic CMS
              </p>
            </div>
            <FeaturedProjects projects={featuredProjects as Project[]} />
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">All Projects</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse through our complete collection of websites built with Cosmic
            </p>
          </div>

          <CategoryFilter categories={categories as Category[]} />
          
          <ProjectGrid projects={projects as Project[]} />
        </div>
      </section>
    </div>
  )
}