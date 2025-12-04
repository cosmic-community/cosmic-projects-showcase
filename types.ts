// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  bucket?: string;
  status?: string;
  thumbnail?: string;
  published_at?: string;
}

// Category type
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    description?: string;
    icon?: string;
  };
}

// Author type
export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    website?: string;
    github_url?: string;
    twitter_url?: string;
    linkedin_url?: string;
  };
}

// Framework and Platform Type literals
export type FrameworkKey = 'nextjs' | 'nuxt' | 'astro' | 'react' | 'vue' | 'angular' | 'svelte';
export type PlatformTypeKey = 'web' | 'mobile' | 'desktop';

// Project type
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    description: string;
    live_url: string;
    screenshot: {
      url: string;
      imgix_url: string;
    };
    framework: {
      key: FrameworkKey;
      value: string;
    };
    platform_type: {
      key: PlatformTypeKey;
      value: string;
    };
    categories?: Category[];
    author: Author;
    clone_count?: number;
    star_count?: number;
    featured?: boolean;
    repository_url?: string;
    updated_date?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}