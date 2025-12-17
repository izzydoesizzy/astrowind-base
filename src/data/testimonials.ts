/**
 * ============================================================================
 * TESTIMONIALS DATA FILE
 * ============================================================================
 * 
 * This file contains all testimonial data in a standardized format.
 * Import this file in any Astro component to use testimonials.
 * 
 * USAGE:
 *   import { testimonials } from '~/data/testimonials';
 * 
 * Then filter/format as needed in your component.
 * ============================================================================
 */

/**
 * TESTIMONIAL DATA STRUCTURE
 * 
 * Every testimonial object must follow this structure:
 * 
 * REQUIRED FIELDS:
 * - id: string (unique identifier, e.g., "testimonial-1")
 * - testimonial: string (the quote text)
 * - name: string (person's full name)
 * - job: string (title/company)
 * - image: object with src (string) and alt (string)
 * 
 * OPTIONAL FIELDS:
 * - rating: number | null (1-5 for star ratings, or null to omit)
 * - video: VideoObject | null (video testimonial data, or null for text-only)
 * - featured: boolean (default: false, set to true for featured testimonials)
 * - category: string (for filtering/grouping, e.g., "product", "coaching", "growth")
 * - duration: string (video length, e.g., "2:45" - only needed if video exists)
 * - views: string (view count, e.g., "1.2K" - only needed if video exists)
 */

/**
 * VIDEO OBJECT STRUCTURE (when video field is present)
 * 
 * REQUIRED:
 * - src: string (embed URL, e.g., "https://www.youtube.com/embed/VIDEO_ID")
 * - thumbnail: string (image URL for video thumbnail)
 * - type: "horizontal" | "vertical" (video aspect ratio)
 * - platform: "youtube" | "vimeo" | "self-hosted"
 * 
 * OPTIONAL:
 * - duration: string (e.g., "2:45")
 * - views: string (e.g., "1.2K")
 */

export interface Testimonial {
  // REQUIRED: Unique identifier
  id: string;
  
  // REQUIRED: The testimonial quote text
  testimonial: string;
  
  // REQUIRED: Person's full name
  name: string;
  
  // REQUIRED: Job title and/or company
  job: string;
  
  // REQUIRED: Profile image object
  image: {
    src: string;  // Image URL
    alt: string;  // Accessibility text
  };
  
  // OPTIONAL: Star rating (1-5) or null to omit
  rating?: number | null;
  
  // OPTIONAL: Video testimonial data or null for text-only
  video?: {
    src: string;           // Embed URL
    thumbnail: string;     // Thumbnail image URL
    type: 'horizontal' | 'vertical';
    platform: 'youtube' | 'vimeo' | 'self-hosted';
    duration?: string;     // Optional: e.g., "2:45"
    views?: string;        // Optional: e.g., "1.2K"
  } | null;
  
  // OPTIONAL: Featured testimonial flag (default: false)
  featured?: boolean;
  
  // OPTIONAL: Category for filtering (e.g., "product", "coaching", "growth")
  category?: string;
  
  // OPTIONAL: Video duration (only if video exists)
  duration?: string;
  
  // OPTIONAL: View count (only if video exists)
  views?: string;
}

/**
 * ============================================================================
 * TEMPLATE EXAMPLES - COPY AND MODIFY AS NEEDED
 * ============================================================================
 * 
 * Below are 7 ready-to-use templates. Copy the structure and modify the values.
 */

/**
 * TEMPLATE 1: Basic Text Testimonial (No Rating, No Video)
 * 
 * Use this for simple text-only testimonials without star ratings.
 * 
 * {
 *   id: "testimonial-1",
 *   testimonial: "Your testimonial text here...",
 *   name: "John Doe",
 *   job: "CEO, Company Name",
 *   image: {
 *     src: "path/to/image.jpg",
 *     alt: "Portrait of John Doe."
 *   },
 *   rating: null,
 *   video: null,
 *   featured: false,
 *   category: "product"
 * }
 */

/**
 * TEMPLATE 2: Testimonial with Star Rating
 * 
 * Use this when you want to display star ratings (1-5 stars).
 * 
 * {
 *   id: "testimonial-2",
 *   testimonial: "Great product! Highly recommend.",
 *   name: "Jane Smith",
 *   job: "Marketing Director",
 *   image: {
 *     src: "path/to/image.jpg",
 *     alt: "Portrait of Jane Smith."
 *   },
 *   rating: 5,  // 1-5 stars (required if you want to show rating)
 *   video: null,
 *   featured: false,
 *   category: "product"
 * }
 */

/**
 * TEMPLATE 3: Featured Testimonial (Highlighted)
 * 
 * Use this for testimonials you want to highlight/feature prominently.
 * Set featured: true to filter for featured testimonials.
 * 
 * {
 *   id: "testimonial-3",
 *   testimonial: "This completely transformed our business...",
 *   name: "Bob Johnson",
 *   job: "Founder, Startup Co",
 *   image: {
 *     src: "path/to/image.jpg",
 *     alt: "Portrait of Bob Johnson."
 *   },
 *   rating: 5,
 *   video: null,
 *   featured: true,  // Set to true for featured testimonials
 *   category: "business"
 * }
 */

/**
 * TEMPLATE 4: Horizontal Video Testimonial (16:9)
 * 
 * Use this for standard widescreen video testimonials (like YouTube videos).
 * 
 * {
 *   id: "testimonial-4",
 *   testimonial: "Watch our video testimonial...",
 *   name: "Sarah Williams",
 *   job: "Executive Coach",
 *   image: {
 *     src: "path/to/image.jpg",
 *     alt: "Portrait of Sarah Williams."
 *   },
 *   rating: 5,
 *   video: {
 *     src: "https://www.youtube.com/embed/VIDEO_ID",  // YouTube embed URL
 *     thumbnail: "path/to/thumbnail.jpg",            // Thumbnail image
 *     type: "horizontal",                             // 16:9 aspect ratio
 *     platform: "youtube",                            // or "vimeo" or "self-hosted"
 *     duration: "2:45",                               // Optional: video length
 *     views: "1.2K"                                   // Optional: view count
 *   },
 *   featured: false,
 *   category: "coaching"
 * }
 */

/**
 * TEMPLATE 5: Vertical Video Testimonial (9:16 - Mobile/Social Style)
 * 
 * Use this for vertical videos (like Instagram Stories, TikTok style).
 * 
 * {
 *   id: "testimonial-5",
 *   testimonial: "Short testimonial text...",
 *   name: "Mike Chen",
 *   job: "Creative Director",
 *   image: {
 *     src: "path/to/image.jpg",
 *     alt: "Portrait of Mike Chen."
 *   },
 *   rating: null,
 *   video: {
 *     src: "https://www.youtube.com/embed/VIDEO_ID",
 *     thumbnail: "path/to/thumbnail.jpg",
 *     type: "vertical",                               // 9:16 aspect ratio
 *     platform: "youtube",
 *     duration: "1:32",
 *     views: "856"
 *   },
 *   featured: false,
 *   category: "design"
 * }
 */

/**
 * TEMPLATE 6: Long Form Testimonial (300+ characters)
 * 
 * Use this for detailed, story-driven testimonials that are 300+ characters.
 * These work well with expand/collapse functionality.
 * 
 * {
 *   id: "testimonial-6",
 *   testimonial: "When we first started working with this team, I was skeptical. We had tried other solutions before and nothing seemed to stick. But within the first month, I could see a real difference. Our sales process became more streamlined, our messaging became clearer, and most importantly, our conversion rates started to climb. By month three, we had doubled our qualified leads and our sales team was closing deals faster than ever before. The investment has paid for itself ten times over, and I can't imagine running our business without these tools and strategies.",
 *   name: "Lisa Rodriguez",
 *   job: "Owner, Local Business Co",
 *   image: {
 *     src: "path/to/image.jpg",
 *     alt: "Portrait of Lisa Rodriguez."
 *   },
 *   rating: 5,
 *   video: null,
 *   featured: false,
 *   category: "business"
 * }
 */

/**
 * TEMPLATE 7: Vimeo Video Testimonial
 * 
 * Use this for Vimeo-hosted videos (same structure as YouTube, different platform).
 * 
 * {
 *   id: "testimonial-7",
 *   testimonial: "Amazing results with this platform!",
 *   name: "David Park",
 *   job: "SaaS Founder",
 *   image: {
 *     src: "path/to/image.jpg",
 *     alt: "Portrait of David Park."
 *   },
 *   rating: 5,
 *   video: {
 *     src: "https://player.vimeo.com/video/VIDEO_ID",  // Vimeo embed URL
 *     thumbnail: "path/to/thumbnail.jpg",
 *     type: "horizontal",
 *     platform: "vimeo",                               // Vimeo platform
 *     duration: "3:12",
 *     views: "2.1K"
 *   },
 *   featured: false,
 *   category: "saas"
 * }
 */

/**
 * ============================================================================
 * TESTIMONIALS DATA
 * ============================================================================
 * 
 * Add your testimonials below. Use the templates above as reference.
 * All testimonials are stored in a single array - filter/format in your components.
 * 
 * TIPS:
 * - Keep id values unique (e.g., "testimonial-1", "testimonial-2")
 * - Use descriptive categories for easy filtering
 * - Set featured: true for testimonials you want to highlight
 * - Add rating: 5 for testimonials you want to show stars
 * - Include video object only for video testimonials
 */

export const testimonials: Testimonial[] = [
  // TEMPLATE 1: Basic Text Testimonial
  {
    id: 'testimonial-1',
    testimonial: 'Onboarding dropped from 21 days to 6, and our activation rate jumped by 28%. The templates made it easy to redesign our entire product tour.',
    name: 'Riya Patel',
    job: 'VP Product, Flowstack',
    image: {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of Riya Patel.',
    },
    rating: 5,
    video: null,
    featured: false,
    category: 'product',
  },
  
  // TEMPLATE 2: Testimonial with Rating
  {
    id: 'testimonial-2',
    testimonial: 'We ship new campaign pages in hours instead of weeks. That speed has been a quiet superpower for our growth team.',
    name: 'Chris Young',
    job: 'Head of Growth, Nimbus',
    image: {
      src: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of Chris Young.',
    },
    rating: 5,
    video: null,
    featured: false,
    category: 'growth',
  },
  
  // TEMPLATE 3: Featured Testimonial
  {
    id: 'testimonial-3',
    testimonial: 'The new long-form sales page became the single source of truth for our offer. Sales calls got shorter and close rates went up.',
    name: 'Daniela Rossi',
    job: 'Revenue Operations, Beacon',
    image: {
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of Daniela Rossi.',
    },
    rating: 5,
    video: null,
    featured: true,
    category: 'sales',
  },
  
  // TEMPLATE 4: Horizontal Video Testimonial
  {
    id: 'testimonial-4',
    testimonial: 'This completely transformed our business. The results speak for themselves. We went from struggling to scale to having a clear, repeatable system that works.',
    name: 'Sarah Mitchell',
    job: 'Executive Leadership Coach',
    image: {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of Sarah Mitchell.',
    },
    rating: 5,
    video: {
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      type: 'horizontal',
      platform: 'youtube',
      duration: '2:45',
      views: '1.2K',
    },
    featured: false,
    category: 'coaching',
  },
  
  // TEMPLATE 5: Vertical Video Testimonial
  {
    id: 'testimonial-5',
    testimonial: 'Within three months I went from feeling stuck to launching a new offer that sold out its first cohort. The support and structure made all the difference.',
    name: 'Jordan Lee',
    job: 'Creative Entrepreneur',
    image: {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of Jordan Lee.',
    },
    rating: null,
    video: {
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      type: 'vertical',
      platform: 'youtube',
      duration: '1:32',
      views: '856',
    },
    featured: false,
    category: 'entrepreneurship',
  },
  
  // TEMPLATE 6: Long Form Testimonial
  {
    id: 'testimonial-6',
    testimonial: 'When we first started working with this team, I was skeptical. We had tried other solutions before and nothing seemed to stick. But within the first month, I could see a real difference. Our sales process became more streamlined, our messaging became clearer, and most importantly, our conversion rates started to climb. By month three, we had doubled our qualified leads and our sales team was closing deals faster than ever before. The investment has paid for itself ten times over, and I can\'t imagine running our business without these tools and strategies. The support team is also incredible—always responsive and genuinely invested in our success.',
    name: 'Sarah Mitchell',
    job: 'CEO, GrowthCo',
    image: {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of Sarah Mitchell.',
    },
    rating: null,
    video: null,
    featured: false,
    category: 'business',
  },
  
  // Add more testimonials below using the templates above as reference...
  {
    id: 'testimonial-7',
    testimonial: 'Our new coaching homepage gives prospects everything they need to say yes before we ever talk. Calls feel more like enrollment than persuasion.',
    name: 'Morgan Blake',
    job: 'Business coach',
    image: {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of Morgan Blake.',
    },
    rating: null,
    video: null,
    featured: false,
    category: 'coaching',
  },
  
  {
    id: 'testimonial-8',
    testimonial: 'We finally have one place to send leads that shows our authority, explains our process, and surfaces the right next step.',
    name: 'Jamie Chen',
    job: 'Agency founder',
    image: {
      src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of Jamie Chen.',
    },
    rating: null,
    video: null,
    featured: false,
    category: 'agency',
  },
  
  {
    id: 'testimonial-9',
    testimonial: 'The long-form layout helped us tell the full story behind our flagship program. Applications now come in from people who are already bought in.',
    name: 'Nicole Alvarez',
    job: 'Leadership consultant',
    image: {
      src: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of Nicole Alvarez.',
    },
    rating: 4,
    video: null,
    featured: false,
    category: 'leadership',
  },
  
  {
    id: 'testimonial-10',
    testimonial: 'We\'ve been using this for six months now, and the impact has been remarkable. Not only did our website traffic increase by 60%, but the quality of leads improved dramatically.',
    name: 'Jennifer Martinez',
    job: 'Chief Revenue Officer, GrowthLabs',
    image: {
      src: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of Jennifer Martinez.',
    },
    rating: 5,
    video: {
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      type: 'horizontal',
      platform: 'youtube',
      duration: '3:12',
      views: '2.1K',
    },
    featured: false,
    category: 'growth',
  },
  
  {
    id: 'testimonial-11',
    testimonial: 'Best decision we made this year.',
    name: 'Emma Wilson',
    job: 'Founder',
    image: {
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of Emma Wilson.',
    },
    rating: null,
    video: null,
    featured: false,
    category: 'general',
  },
  
  {
    id: 'testimonial-12',
    testimonial: 'Highly recommend.',
    name: 'David Park',
    job: 'Designer',
    image: {
      src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      alt: 'Portrait of David Park.',
    },
    rating: null,
    video: null,
    featured: false,
    category: 'design',
  },
];

/**
 * ============================================================================
 * HELPER FUNCTIONS (Optional - use in your components)
 * ============================================================================
 * 
 * These functions help you filter testimonials by different criteria.
 * Use them in your Astro components for easy filtering.
 */

/**
 * Filter testimonials by category
 * 
 * @param category - The category to filter by (e.g., "product", "coaching")
 * @returns Array of testimonials matching the category
 * 
 * Example:
 *   const productTestimonials = getTestimonialsByCategory('product');
 */
export function getTestimonialsByCategory(category: string): Testimonial[] {
  return testimonials.filter(t => t.category === category);
}

/**
 * Get featured testimonials only
 * 
 * @returns Array of testimonials where featured === true
 * 
 * Example:
 *   const featured = getFeaturedTestimonials();
 */
export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.featured === true);
}

/**
 * Get video testimonials only
 * 
 * @returns Array of testimonials that have video data
 * 
 * Example:
 *   const videos = getVideoTestimonials();
 */
export function getVideoTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.video !== null && t.video !== undefined);
}

/**
 * Get text-only testimonials (no video)
 * 
 * @returns Array of testimonials without video data
 * 
 * Example:
 *   const textOnly = getTextTestimonials();
 */
export function getTextTestimonials(): Testimonial[] {
  return testimonials.filter(t => !t.video);
}

/**
 * Get testimonials with ratings
 * 
 * @returns Array of testimonials that have a rating (1-5)
 * 
 * Example:
 *   const rated = getRatedTestimonials();
 */
export function getRatedTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.rating !== null && t.rating !== undefined);
}

/**
 * Get long form testimonials (300+ characters)
 * 
 * @returns Array of testimonials with text length > 300 characters
 * 
 * Example:
 *   const longForm = getLongTestimonials();
 */
export function getLongTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.testimonial.length > 300);
}

/**
 * Get short testimonials (under 300 characters)
 * 
 * @returns Array of testimonials with text length <= 300 characters
 * 
 * Example:
 *   const short = getShortTestimonials();
 */
export function getShortTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.testimonial.length <= 300);
}

/**
 * Get horizontal video testimonials
 * 
 * @returns Array of testimonials with horizontal (16:9) videos
 * 
 * Example:
 *   const horizontalVideos = getHorizontalVideoTestimonials();
 */
export function getHorizontalVideoTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.video?.type === 'horizontal');
}

/**
 * Get vertical video testimonials
 * 
 * @returns Array of testimonials with vertical (9:16) videos
 * 
 * Example:
 *   const verticalVideos = getVerticalVideoTestimonials();
 */
export function getVerticalVideoTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.video?.type === 'vertical');
}

