# Cosmic Projects Showcase

![App Preview](https://imgix.cosmicjs.com/a040ae70-d114-11f0-b693-79ceb5783a41-photo-1542291026-7eec264c27ff-1764854696449.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive showcase platform for discovering the latest websites built with Cosmic CMS. Browse, filter, and explore real-world projects with beautiful UI and comprehensive filtering options.

## ✨ Features

- 🎨 Modern, responsive design with smooth animations
- 🔍 Advanced filtering by category and framework
- ⭐ Featured projects section highlighting top builds
- 📱 Fully responsive mobile-first design
- 🚀 Server-side rendering with Next.js 16
- 💾 Dynamic content from Cosmic CMS
- 👤 Author profiles with social links
- 📊 Project statistics (clones, stars)
- 🔗 Live project previews and repository links

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=69318a632794e7afddb5218c&clone_repository=69318caa2794e7afddb521c6)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I want to build a website that showcases the latests websites built using Cosmic. Are you able to access the https://www.cosmicjs.com/community/projects website to see all of the public websites?"

### Code Generation Prompt

> Based on the content model I created for "I want to build a website that showcases the latests websites built using Cosmic. Are you able to access the https://www.cosmicjs.com/community/projects website to see all of the public websites?", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- A Cosmic account with bucket credentials

### Installation

1. **Clone this repository**

```bash
git clone <your-repo-url>
cd cosmic-projects-showcase
```

2. **Install dependencies**

```bash
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. **Run the development server**

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 Cosmic SDK Examples

### Fetching Projects with Depth

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch projects with related categories and authors
const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Access related data directly
projects.forEach(project => {
  console.log(project.metadata.author.title) // Author name
  console.log(project.metadata.categories) // Array of category objects
})
```

### Filtering Projects by Category

```typescript
// Query projects by category ID
const { objects: ecommerceProjects } = await cosmic.objects
  .find({ 
    type: 'projects',
    'metadata.categories': categoryId
  })
  .depth(1)
```

### Getting Featured Projects

```typescript
// Query featured projects
const { objects: featured } = await cosmic.objects
  .find({ 
    type: 'projects',
    'metadata.featured': true
  })
  .depth(1)
```

## 🔗 Cosmic CMS Integration

This application uses three main object types from your Cosmic bucket:

### Projects
- `title` - Project name
- `slug` - URL-friendly identifier
- `metadata.description` - Project description
- `metadata.live_url` - Live website URL
- `metadata.screenshot` - Preview image
- `metadata.framework` - Framework used (Next.js, Nuxt, etc.)
- `metadata.platform_type` - Platform (Web, Mobile, Desktop)
- `metadata.categories` - Related categories (object relationship)
- `metadata.author` - Project creator (object relationship)
- `metadata.clone_count` - Number of clones
- `metadata.star_count` - Number of stars
- `metadata.featured` - Featured flag
- `metadata.repository_url` - Source code link
- `metadata.updated_date` - Last update date

### Categories
- `title` - Category name
- `metadata.name` - Display name
- `metadata.description` - Category description
- `metadata.icon` - Emoji icon

### Authors
- `title` - Author name
- `metadata.name` - Display name
- `metadata.avatar` - Profile picture
- `metadata.bio` - Biography
- `metadata.website` - Personal website
- `metadata.github_url` - GitHub profile
- `metadata.twitter_url` - Twitter profile
- `metadata.linkedin_url` - LinkedIn profile

All content is managed through the Cosmic dashboard and automatically synced to your application.

## 🚀 Deployment Options

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the "Deploy" button above
2. Connect your GitHub repository
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Click the "Deploy to Netlify" button
2. Connect your repository
3. Add environment variables in Netlify dashboard
4. Deploy!

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For support, email support@cosmicjs.com or visit the [Cosmic Docs](https://www.cosmicjs.com/docs).

<!-- README_END -->