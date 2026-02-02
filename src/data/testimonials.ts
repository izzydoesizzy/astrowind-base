/**
 * ============================================================================
 * TESTIMONIALS DATA FILE
 * ============================================================================
 *
 * This file contains all testimonial data in a standardized format.
 * Import this file in any Astro component to use testimonials.
 *
 * USAGE:
 *   import { testimonials, testimonialsTemplate } from '~/data/testimonials';
 *
 * Then filter/format as needed in your component.
 *
 * DATA SOURCE:
 *   src/data/testimonials.preset.json
 * ============================================================================
 */

import preset from './testimonials.preset.json';

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

export type TestimonialsTemplate = 'grid' | 'grid-2' | 'masonry' | 'minimal';

interface TestimonialsPreset {
  template?: TestimonialsTemplate;
  testimonials?: Testimonial[];
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

const allowedTemplates: TestimonialsTemplate[] = ['grid', 'grid-2', 'masonry', 'minimal'];
const presetData = preset as TestimonialsPreset;
const presetTemplate = presetData.template ?? 'grid';

const normalizedTemplate: TestimonialsTemplate = allowedTemplates.includes(presetTemplate)
  ? presetTemplate
  : 'grid';

function normalizeTestimonial(item: Testimonial, index: number): Testimonial {
  if (!item?.id) {
    throw new Error(`Testimonial at index ${index} is missing an id.`);
  }

  if (!item?.testimonial) {
    throw new Error(`Testimonial ${item.id} is missing testimonial text.`);
  }

  if (!item?.name) {
    throw new Error(`Testimonial ${item.id} is missing a name.`);
  }

  if (!item?.job) {
    throw new Error(`Testimonial ${item.id} is missing a job title.`);
  }

  if (!item?.image || typeof item.image !== 'object' || !('src' in item.image)) {
    throw new Error(`Testimonial ${item.id} is missing an image src.`);
  }

  return {
    ...item,
    rating: item.rating ?? null,
    video: item.video ?? null,
    featured: item.featured ?? false,
    category: item.category,
  };
}

export const testimonialsTemplate = normalizedTemplate;
export const testimonials: Testimonial[] = (presetData.testimonials ?? []).map(normalizeTestimonial);

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
