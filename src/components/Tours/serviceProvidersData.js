export const serviceProviders = [
  {
    id: 'safari-kings-landcruiser',
    name: 'Safari Kings Land Cruiser Services',
    type: 'Vehicle Operator',
    specialization: 'Land Cruiser Rentals & Tours',
    location: 'Nairobi, Kenya',
    established: 2015,
    rating: 4.8,
    reviewsCount: 247,
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Premier Land Cruiser specialists with over 8 years of experience in safari vehicle operations. Known for well-maintained fleet and exceptional customer service.',
    expertise: [
      'Toyota Land Cruiser V8 fleet',
      'Extended safari expeditions',
      'Rough terrain navigation',
      'Vehicle maintenance expertise'
    ],
    vehicles: [
      {
        model: 'Toyota Land Cruiser V8',
        capacity: '6 passengers',
        features: ['Pop-up roof', 'Charging ports', 'Cooler box', 'First aid kit'],
        dailyRate: '$180',
        weeklyRate: '$1,100'
      },
      {
        model: 'Toyota Land Cruiser Prado',
        capacity: '4 passengers', 
        features: ['Sunroof', 'AC', 'GPS navigation', 'Emergency kit'],
        dailyRate: '$140',
        weeklyRate: '$850'
      }
    ],
    services: [
      'Self-drive vehicle rental',
      'Chauffeur-driven safaris',
      'Airport transfers',
      'Extended expedition support'
    ],
    pricing: {
      category: 'Premium',
      startingPrice: '$140/day',
      includes: ['Vehicle insurance', '24/7 support', 'Basic maintenance', 'GPS tracking']
    },
    contact: {
      phone: '+254 700 123456',
      email: 'info@safarikings.co.ke',
      website: 'www.safarikings.co.ke'
    },
    certifications: ['KTB Licensed', 'KATA Member', 'ISO 9001:2015']
  },
  {
    id: 'mara-expedition-guides',
    name: 'Mara Expedition Guides',
    type: 'Safari Guide Service',
    specialization: 'Professional Safari Guiding',
    location: 'Maasai Mara, Kenya',
    established: 2010,
    rating: 4.9,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d15ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Elite team of professional safari guides with deep knowledge of Maasai Mara ecosystem and wildlife behavior patterns.',
    expertise: [
      'Wildlife behavior specialist',
      'Big Five tracking expert',
      'Great Migration authority',
      'Cultural interpretation'
    ],
    guides: [
      {
        name: 'Joseph Koikai',
        experience: '12 years',
        languages: ['English', 'Swahili', 'Maa'],
        specialties: ['Big cats', 'Migration patterns', 'Photography guidance'],
        rate: '$80/day'
      },
      {
        name: 'Sarah Nasirian',
        experience: '8 years',
        languages: ['English', 'Swahili', 'German', 'Maa'],
        specialties: ['Bird watching', 'Cultural tours', 'Night safaris'],
        rate: '$75/day'
      }
    ],
    services: [
      'Full-day game drives',
      'Walking safaris',
      'Cultural village visits',
      'Photography workshops',
      'Night game drives'
    ],
    pricing: {
      category: 'Professional',
      startingPrice: '$75/day',
      includes: ['Professional guide', 'Binoculars', 'Field guides', 'Refreshments']
    },
    contact: {
      phone: '+254 722 789012',
      email: 'guides@maraexpedition.com',
      website: 'www.maraexpeditionguides.com'
    },
    certifications: ['KWS Licensed Guide', 'Bronze Level Guide', 'First Aid Certified']
  },
  {
    id: 'amboseli-adventures',
    name: 'Amboseli Adventures',
    type: 'Full Service Operator',
    specialization: 'Elephant Safaris & Mt. Kilimanjaro Views',
    location: 'Amboseli, Kenya',
    established: 2012,
    rating: 4.7,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Specialized safari operator focusing on Amboseli National Park with expertise in elephant behavior and Kilimanjaro photography.',
    expertise: [
      'Elephant behavioral study',
      'Mt. Kilimanjaro photography',
      'Maasai cultural tours',
      'Swamp ecosystem guides'
    ],
    packages: [
      {
        name: 'Elephant Giants Experience',
        duration: '3 days',
        price: '$890',
        includes: ['Accommodation', 'All meals', 'Game drives', 'Cultural visit']
      },
      {
        name: 'Kilimanjaro Sunrise Safari',
        duration: '2 days',
        price: '$650',
        includes: ['Lodge stay', 'Sunrise photography', 'Elephant tracking', 'Local guide']
      }
    ],
    services: [
      'Elephant research tours',
      'Photography expeditions',
      'Cultural experiences',
      'Luxury camping',
      'Day trips'
    ],
    pricing: {
      category: 'Mid-Range to Luxury',
      startingPrice: '$320/day per person',
      includes: ['Accommodation', 'All meals', 'Game drives', 'Park fees', 'Guide']
    },
    contact: {
      phone: '+254 733 456789',
      email: 'info@amboseliadventures.co.ke',
      website: 'www.amboseliadventures.co.ke'
    },
    certifications: ['KATA Member', 'Eco-Tourism Certified', 'Community Partner']
  },
  {
    id: 'tsavo-explorers',
    name: 'Tsavo Explorers',
    type: 'Adventure Specialist',
    specialization: 'Tsavo East & West Expeditions',
    location: 'Tsavo, Kenya',
    established: 2018,
    rating: 4.6,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Adventure-focused operator specializing in Tsavo\'s unique red elephants, baobab trees, and rock climbing activities.',
    expertise: [
      'Red elephant tracking',
      'Rock climbing instruction',
      'Mzima Springs tours',
      'Bushcraft skills'
    ],
    activities: [
      {
        name: 'Red Elephant Safari',
        duration: 'Full day',
        price: '$120',
        difficulty: 'Easy'
      },
      {
        name: 'Rock Climbing Adventure',
        duration: 'Half day',
        price: '$90',
        difficulty: 'Moderate to Hard'
      },
      {
        name: 'Mzima Springs Exploration',
        duration: 'Half day',
        price: '$70',
        difficulty: 'Easy'
      }
    ],
    services: [
      'Adventure safaris',
      'Rock climbing courses',
      'Camping expeditions',
      'Photography tours',
      'Educational programs'
    ],
    pricing: {
      category: 'Adventure Budget',
      startingPrice: '$70/day per person',
      includes: ['Professional guide', 'Safety equipment', 'Lunch', 'Park transport']
    },
    contact: {
      phone: '+254 704 567890',
      email: 'adventures@tsavoexplorers.com',
      website: 'www.tsavoexplorers.com'
    },
    certifications: ['Adventure Activity License', 'Rock Climbing Instructor', 'KWS Partner']
  },
  {
    id: 'samburu-cultural-safaris',
    name: 'Samburu Cultural Safaris',
    type: 'Cultural & Wildlife Specialist',
    specialization: 'Northern Kenya Cultural Safaris',
    location: 'Samburu, Kenya',
    established: 2014,
    rating: 4.8,
    reviewsCount: 134,
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Authentic cultural safari experiences combining unique northern Kenya wildlife with rich Samburu traditions and customs.',
    expertise: [
      'Samburu culture expert',
      'Grevy\'s zebra specialist',
      'Reticulated giraffe tracking',
      'Traditional ceremonies'
    ],
    experiences: [
      {
        name: 'Samburu Cultural Immersion',
        duration: '4 days',
        price: '$1,280',
        highlights: ['Traditional village stay', 'Ceremony participation', 'Craft making', 'Storytelling']
      },
      {
        name: 'Special Five Safari',
        duration: '3 days', 
        price: '$890',
        highlights: ['Grevy\'s zebra', 'Reticulated giraffe', 'Gerenuk', 'Beisa oryx', 'Somali ostrich']
      }
    ],
    services: [
      'Cultural village visits',
      'Traditional ceremonies',
      'Handicraft workshops',
      'Wildlife safaris',
      'Conservation education'
    ],
    pricing: {
      category: 'Cultural Premium',
      startingPrice: '$220/day per person',
      includes: ['Cultural guide', 'Village entry', 'Traditional meals', 'Craft activities', 'Donation to community']
    },
    contact: {
      phone: '+254 712 345678',
      email: 'culture@samburusafaris.co.ke',
      website: 'www.samburuculturalsafaris.com'
    },
    certifications: ['Community-Based Tourism', 'Cultural Heritage License', 'Conservation Partner']
  }
];

export const serviceCategories = [
  {
    category: 'Vehicle Operators',
    description: 'Land cruiser rentals and safari vehicle services',
    icon: '🚗',
    count: 12
  },
  {
    category: 'Safari Guides',
    description: 'Professional wildlife and nature guides',
    icon: '🦌',
    count: 24
  },
  {
    category: 'Full Service Operators',
    description: 'Complete safari packages and experiences',
    icon: '🎒',
    count: 18
  },
  {
    category: 'Adventure Specialists',
    description: 'Adventure activities and extreme safaris',
    icon: '🧗',
    count: 8
  },
  {
    category: 'Cultural Specialists',
    description: 'Cultural tours and community experiences',
    icon: '🏛️',
    count: 15
  }
];

export const priceRanges = [
  { label: 'Budget ($50-$100/day)', min: 50, max: 100 },
  { label: 'Mid-Range ($100-$250/day)', min: 100, max: 250 },
  { label: 'Luxury ($250-$500/day)', min: 250, max: 500 },
  { label: 'Ultra Luxury ($500+/day)', min: 500, max: 1000 }
];