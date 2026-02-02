const testimonials = [
  {
    id: 'testimonial-izzy-1',
    testimonial:
      'Izzy helped me clarify my brand voice in two sessions. The messaging now feels confident and aligned, and leads respond immediately.',
    name: 'Marisol Vega',
    job: 'Founder, Suncrest Studio',
    image: {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Marisol Vega.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-2',
    testimonial:
      'The strategy sprint with Izzy gave us a clear plan for Q3. We shipped faster and doubled inbound inquiries in six weeks.',
    name: 'Dylan Brooks',
    job: 'Growth Lead, Northlane',
    image: {
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Dylan Brooks.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-3',
    testimonial:
      'Izzy’s feedback on our onboarding was precise and actionable. We reduced drop-off by 28% without changing our core flow.',
    name: 'Priya Nair',
    job: 'Product Manager, Clearpath',
    image: {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Priya Nair.',
    },
    rating: 4,
  },
  {
    id: 'testimonial-izzy-4',
    testimonial:
      'Every session with Izzy felt focused and energizing. I walked away with a launch plan I could execute the same week.',
    name: 'Harper Lewis',
    job: 'Coach & Consultant',
    image: {
      src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Harper Lewis.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-5',
    testimonial:
      'Izzy balanced big-picture vision with practical steps. The rebrand presentation landed and our team finally feels aligned.',
    name: 'Jules Kim',
    job: 'Creative Director, Arc + Field',
    image: {
      src: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Jules Kim.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-6',
    testimonial:
      'I appreciated Izzy’s calm, structured approach. The roadmap was easy to share with stakeholders and removed all ambiguity.',
    name: 'Theo Carter',
    job: 'Operations, Horizon Labs',
    image: {
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Theo Carter.',
    },
    rating: 4,
  },
  {
    id: 'testimonial-izzy-7',
    testimonial:
      'Izzy’s workshop sparked the best team alignment we have had in a year. The next sprint was our strongest to date.',
    name: 'Amina Yusuf',
    job: 'Team Lead, Harbor Collective',
    image: {
      src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Amina Yusuf.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-8',
    testimonial:
      'The clarity Izzy brought to our positioning changed how we sell. Our proposals are tighter and convert faster.',
    name: 'Luis Moreno',
    job: 'Sales Director, Lantern',
    image: {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Luis Moreno.',
    },
    rating: 4,
  },
  {
    id: 'testimonial-izzy-9',
    testimonial:
      'Izzy helped us find the story we were missing. The new narrative unlocked partnerships we had been chasing for months.',
    name: 'Sofia Patel',
    job: 'Partnerships, Brightline',
    image: {
      src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Sofia Patel.',
    },
    rating: 5,
  },
];

const container = document.getElementById('testimonial-grid');

const starSvg = (filled) => `
  <svg class="testimonial-star ${filled ? '' : 'testimonial-star-empty'}" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
`;

const renderCard = (item) => {
  const card = document.createElement('article');
  card.className = 'testimonial-card';
  card.innerHTML = `
    <div class="testimonial-rating" aria-hidden="true">
      ${Array.from({ length: 5 })
        .map((_, index) => starSvg(index < item.rating))
        .join('')}
    </div>
    <span class="sr-only">${item.rating} out of 5 stars</span>
    <p class="testimonial-content">“${item.testimonial}”</p>
    <div class="testimonial-meta">
      <div class="testimonial-avatar">
        <img src="${item.image.src}" alt="${item.image.alt}" loading="lazy" />
      </div>
      <div class="testimonial-author">
        <strong>${item.name}</strong>
        <span>${item.job}</span>
      </div>
    </div>
  `;
  return card;
};

if (container) {
  testimonials.forEach((item) => {
    container.appendChild(renderCard(item));
  });
}
