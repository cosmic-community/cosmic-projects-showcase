import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all projects with relationships
export async function getProjects() {
  try {
    const response = await cosmic.objects
      .find({ type: 'projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch projects')
  }
}

// Fetch featured projects
export async function getFeaturedProjects() {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'projects',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch featured projects')
  }
}

// Fetch single project by slug
export async function getProjectBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ 
        type: 'projects',
        slug 
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at', 'modified_at'])
      .depth(1)
    
    return response.object || null
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch project')
  }
}

// Fetch all categories
export async function getCategories() {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch categories')
  }
}

// Fetch projects by category
export async function getProjectsByCategory(categoryId: string) {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'projects',
        'metadata.categories': categoryId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch projects by category')
  }
}

// Fetch single author by slug
export async function getAuthorBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ 
        type: 'authors',
        slug 
      })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.object || null
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch author')
  }
}

// Fetch projects by author
export async function getProjectsByAuthor(authorId: string) {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'projects',
        'metadata.author': authorId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch projects by author')
  }
}