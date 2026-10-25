import type {
  User,
  Destination,
  WorkspaceSummary,
  ItineraryDay,
  Expense,
  SettlementDebt,
  DecisionItem,
  TripFeedItem
} from '../types'

export const MOCK_USERS: Record<string, User> = {
  rohan: {
    id: 'user_rohan',
    name: 'Rohan (You)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    role: 'Admin',
    status: 'ADMIN',
    statusColor: 'bg-red-100 text-red-700'
  },
  arjun: {
    id: 'user_arjun',
    name: 'Arjun',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    role: 'Planner',
    status: 'Voting',
    statusColor: 'bg-amber-100 text-amber-700'
  },
  priya: {
    id: 'user_priya',
    name: 'Priya',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    role: 'Explorer',
    status: 'Reviewing',
    statusColor: 'bg-emerald-100 text-emerald-700'
  },
  sneha: {
    id: 'user_sneha',
    name: 'Sneha',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    role: 'Explorer',
    status: 'Away',
    statusColor: 'bg-slate-100 text-slate-600'
  }
}

export const CURRENT_WORKSPACE: WorkspaceSummary = {
  id: 'ws_hyderabad',
  title: 'Hyderabad Heritage & Culinary Trail',
  categoryTag: 'GROUP DISCOVERY WORKSPACE',
  tripHealth: 92,
  statusText: 'Trip Health: 92% Ready',
  dates: 'Oct 18 – 22',
  stayNote: 'Taj Falaknuma & Boutique Stay',
  staySub: 'Oct 18 - 22',
  imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
  budgetFit: {
    status: 'Optimal',
    detail: '₹8,400 under cap'
  },
  accommodations: {
    status: 'Confirmed',
    detail: '2 rooms • 4 nights'
  },
  activities: {
    status: '11 Scheduled',
    detail: '3 polls pending'
  },
  travelers: [
    MOCK_USERS.rohan,
    MOCK_USERS.priya,
    MOCK_USERS.arjun,
    MOCK_USERS.sneha
  ]
}

export const TRENDING_GETAWAYS: Destination[] = [
  {
    id: 'dest_udaipur',
    title: 'Udaipur',
    state: 'RAJASTHAN',
    location: 'Rajasthan, India',
    duration: '3-4 Days',
    tag: 'Rajasthan',
    rating: 4.9,
    reviewsCount: 420,
    estBudget: 16500,
    aiPlansCount: 18,
    category: 'Cultural & Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    description: '"The Venice of the East" • Heritage palaces & tranquil lake walks'
  },
  {
    id: 'dest_munnar',
    title: 'Munnar & Alleppey',
    state: 'KERALA',
    location: 'Kerala, India',
    duration: '4-5 Days',
    tag: 'Kerala',
    rating: 4.8,
    reviewsCount: 610,
    estBudget: 14200,
    aiPlansCount: 24,
    category: 'Misty Mountains',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    description: '"Tea Gardens & Backwaters" • Houseboat glamping & spice farms'
  },
  {
    id: 'dest_gokarna',
    title: 'Gokarna & Karwar',
    state: 'KARNATAKA',
    location: 'Karnataka, India',
    duration: '3 Days',
    tag: 'Karnataka',
    rating: 4.9,
    reviewsCount: 380,
    estBudget: 9800,
    aiPlansCount: 31,
    category: 'Beaches & Islands',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    description: '"Serene Coastlines & Trekking" • Cliff trails, beach shacks & temple vibes'
  },
  {
    id: 'dest_leh',
    title: 'Leh & Nubra Valley',
    state: 'LADAKH',
    location: 'Ladakh, India',
    duration: '6-7 Days',
    tag: 'Ladakh',
    rating: 4.9,
    reviewsCount: 530,
    estBudget: 28000,
    aiPlansCount: 15,
    category: 'Misty Mountains',
    imageUrl: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    description: '"High Altitude Passes" • Pangong Tso campfires & monastery chanting'
  }
]

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    dayNumber: 1,
    dateString: 'Oct 24',
    title: 'Arrival, Panjim Latin Quarter & Suns...',
    stopsCount: 6,
    estCost: 8800,
    distanceKm: 45.4,
    isCompleted: true,
    stops: [
      {
        id: 'stop_1',
        time: '09:30 AM',
        category: 'transit',
        categoryLabel: 'Transit & Transfer',
        title: 'Arrive at Dabolim Airport & Taxi to Fontainhas',
        description: 'Flight 6E-204 lands at GOI. Pre-paid airport taxi counter located at Exit Gate 3 for group transfer to Panjim heritage quarter.',
        metaInfo: {
          durationOrDistance: '45m taxi • 28 km',
          costText: '₹1,200 total (₹300/person)',
          splitNote: 'Split 4 Ways'
        }
      },
      {
        id: 'stop_2',
        time: '11:30 AM',
        category: 'stay',
        categoryLabel: 'Stay • Check-in Confirmed',
        title: 'La Maison Fontainhas Heritage Villa',
        description: 'Heritage boutique stay in the heart of the Latin Quarter. 2 Superior King rooms booked under Arjun\'s name. Early luggage drop available.',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
        rating: 4.8,
        reviewsCount: 320,
        bookingId: '#TM-GOA-9411',
        metaInfo: {}
      },
      {
        id: 'stop_3',
        time: '01:00 PM',
        category: 'food',
        categoryLabel: 'Food & Dining',
        badgeText: '98% Match for seafood & veg preference',
        badgeType: 'warning',
        title: 'Lunch at \'Viva Panjim Heritage Eatery\'',
        description: 'Tucked inside an alleyway of Fontainhas. Renowned for authentic Prawn Curry Rice, Kingfish Rava fry, and Goan Mushroom Xacuti for vegetarians.',
        metaInfo: {
          costText: '₹2,400 est. for 4',
          walkNote: 'Walk 350m from hotel'
        },
        aiNote: 'Replace with AI alternative'
      },
      {
        id: 'stop_4',
        time: '03:30 PM',
        category: 'activity',
        categoryLabel: 'Art & Culture Tour',
        title: 'Walking Tour of Latin Quarter (Fontainhas)',
        description: 'Stroll through brightly painted ochre, indigo, and terracotta houses. Visit Chapel of St. Sebastian, local azulejos tile studios, and heritage bakeries.',
        metaInfo: {
          durationOrDistance: '1.2 km scenic route',
          costText: 'Cost: ₹0 (Self-guided)'
        }
      },
      {
        id: 'stop_5',
        time: '06:00 PM',
        category: 'activity',
        categoryLabel: 'Activity • Pre-booked',
        title: 'Sunset Mandovi River Cruise & Cultural Show',
        description: 'Boarding at Santa Monica Jetty. 1-hour sunset cruise along Mandovi River featuring Goan folk dance performances and open sundeck panoramas.',
        metaInfo: {
          costText: '₹2,000 for 4 tickets',
          walkNote: 'Jetty 1.8 km from Old Quarter'
        },
        verifiedBadge: 'Confirmed Vouchers'
      },
      {
        id: 'stop_6',
        time: '08:30 PM',
        category: 'nightlife',
        categoryLabel: 'Nightlife & Craft Drinks',
        title: 'Dinner & Drinks at \'Joseph Bar\'',
        description: 'Iconic intimate heritage watering hole. Famous for craft feni cocktails, local IPA taps, Goan pork chops, and cozy streetside socializing.',
        metaInfo: {
          costText: '₹3,200 est. total (₹800/person)'
        },
        interestNote: 'High group interest (4/4 voted)'
      }
    ]
  },
  {
    dayNumber: 2,
    dateString: 'Oct 25',
    title: 'Old Goa Churches & Spice Plantatio...',
    stopsCount: 4,
    estCost: 11400,
    distanceKm: 5.1,
    stops: []
  },
  {
    dayNumber: 3,
    dateString: 'Oct 26',
    title: 'Water Sports at Morjim & Sunset Caf...',
    stopsCount: 5,
    estCost: 16200,
    distanceKm: 8.4,
    stops: []
  },
  {
    dayNumber: 4,
    dateString: 'Oct 27',
    title: 'Chapora Fort Hike & Souvenir Markets',
    stopsCount: 3,
    estCost: 11800,
    distanceKm: 3.2,
    stops: []
  }
]

export const EXPENSES_DATA: Expense[] = [
  {
    id: 'exp_1',
    title: 'Candolim Beach Villa 3 Nights',
    amount: 18000,
    payer: MOCK_USERS.rohan,
    splitType: 'Split equally among 4',
    splitDetail: '₹4,500 each',
    date: 'Oct 24',
    category: 'accommodation',
    hasReceipt: true,
    userImpact: {
      type: 'lent',
      amount: 13500
    }
  },
  {
    id: 'exp_2',
    title: 'Seafood Dinner at Fisherman\'s Wharf',
    amount: 5200,
    payer: MOCK_USERS.arjun,
    splitType: 'Split 4 ways',
    splitDetail: '₹1,300 each',
    date: 'Oct 24',
    category: 'food',
    userImpact: {
      type: 'owe',
      amount: 1300
    }
  },
  {
    id: 'exp_3',
    title: 'Scuba Diving & Water Sports Combo',
    amount: 8400,
    payer: MOCK_USERS.priya,
    splitType: 'Split 3 ways (Rohan, Arjun, Priya — Sneha skipped)',
    splitDetail: '₹2,800 each',
    date: 'Oct 25',
    category: 'activities',
    userImpact: {
      type: 'owe',
      amount: 2800
    }
  },
  {
    id: 'exp_4',
    title: 'Airport Innova Taxi (Dabolim to Villa)',
    amount: 2400,
    payer: MOCK_USERS.sneha,
    splitType: 'Split 4 ways',
    splitDetail: '₹600 each',
    date: 'Oct 24',
    category: 'transport',
    userImpact: {
      type: 'owe',
      amount: 600
    }
  },
  {
    id: 'exp_5',
    title: 'Scooter Rentals (2 Bikes, 3 Days)',
    amount: 3600,
    payer: MOCK_USERS.rohan,
    splitType: 'Split equally',
    splitDetail: '₹900 each',
    date: 'Oct 25',
    category: 'transport',
    userImpact: {
      type: 'lent',
      amount: 2700
    }
  }
]

export const SETTLEMENT_DEBTS: SettlementDebt[] = [
  {
    id: 'debt_1',
    fromUser: MOCK_USERS.arjun,
    toUser: MOCK_USERS.rohan,
    amount: 2350,
    description: 'Arjun owes You',
    status: 'pending',
    isUserInvolved: true
  },
  {
    id: 'debt_2',
    fromUser: MOCK_USERS.sneha,
    toUser: MOCK_USERS.priya,
    amount: 1100,
    description: 'Sneha owes Priya',
    status: 'pending',
    settleMethod: 'Settle via UPI / Cash',
    isUserInvolved: false
  },
  {
    id: 'debt_3',
    fromUser: MOCK_USERS.sneha,
    toUser: MOCK_USERS.rohan,
    amount: 500,
    description: 'Sneha owes You',
    status: 'pending',
    isUserInvolved: true
  }
]

export const DECISIONS_LIST: DecisionItem[] = [
  {
    id: 'dec_sunset',
    title: 'Day 3 Sunset Experience Choice',
    subtitle: 'Currently tied 2-2. Cast your definitive switch or lock in your final priority.',
    status: 'active',
    headerTag: 'CLOSING IN 4 HRS',
    headerTagColor: 'bg-red-50 text-red-700 border-red-200',
    categoryNote: 'Day 3 Evening',
    votesSummary: '4 of 4 voted',
    tieBreakerAlert: {
      tag: 'URGENT',
      text: 'Thalassa has high sunset table demand on Fridays; reservations release 48h prior. Booking within 2 hours guarantees cliff-edge perimeter seating for 4 guests.'
    },
    userVotedOptionId: 'opt_thalassa',
    options: [
      {
        id: 'opt_catamaran',
        title: 'Luxury Catamaran Sunset Cruise',
        tag: 'Cruising',
        costPerPerson: 1500,
        imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
        description: '2-hour cruise from Chapora river mouth into the Arabian Sea with chilled beverages, DJ set, and open bow trampoline.',
        votesCount: 2,
        percentage: 50,
        voterAvatars: [MOCK_USERS.arjun.avatar, MOCK_USERS.sneha.avatar]
      },
      {
        id: 'opt_thalassa',
        title: 'Thalassa Greek Taverna Dinner',
        tag: 'Popular Pick',
        tagType: 'popular',
        costPerPerson: 2000,
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
        description: 'Iconic cliffside sunset views at Siolim, authentic Greek kebabs, fresh mezze platters, and live fire dancing performances.',
        votesCount: 2,
        percentage: 50,
        voterAvatars: [MOCK_USERS.rohan.avatar, MOCK_USERS.priya.avatar]
      }
    ]
  },
  {
    id: 'dec_stay',
    title: 'Where should we stay in North Goa?',
    subtitle: 'Selected accommodation for our North Goa basecamp.',
    status: 'resolved',
    headerTag: 'DECIDED • PASSED',
    headerTagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    categoryNote: 'North Goa Stay (3 Nights)',
    votesSummary: 'Booked & Confirmed',
    options: [
      {
        id: 'opt_villa',
        title: 'Heritage Villa with Private Pool',
        tag: 'WINNER',
        tagType: 'badge',
        costPerPerson: 4500,
        imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80',
        description: 'Candolim • 4.9 ★ (118 reviews)',
        votesCount: 3,
        percentage: 75,
        voterAvatars: [MOCK_USERS.rohan.avatar, MOCK_USERS.arjun.avatar, MOCK_USERS.priya.avatar],
        isWinner: true,
        statusNote: 'Receipt in Files'
      },
      {
        id: 'opt_resort',
        title: 'Seaside Boutique Resort',
        tag: 'Runner up',
        costPerPerson: 5800,
        imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
        description: 'Ashvem • 4.7 ★',
        votesCount: 1,
        percentage: 25,
        voterAvatars: [MOCK_USERS.sneha.avatar],
        statusNote: 'Conceded'
      }
    ]
  },
  {
    id: 'dec_scuba',
    title: 'Add Scuba Diving at Grand Island?',
    subtitle: 'Includes hotel transfer, boat ride with dolphin spotting, PADI dive instructor gear, and high-definition underwater GoPro video clips. Requires an early 6:30 AM departure from Candolim.',
    status: 'suggestion',
    headerTag: 'NEW SUGGESTION',
    headerTagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    categoryNote: 'Proposed by Arjun • 1 hr ago',
    options: [],
    proposer: {
      name: 'Arjun',
      timeAgo: '1 hr ago',
      costPerPerson: 3200
    },
    reactionCounts: {
      in: 3,
      skip: 1,
      needDetails: 0
    }
  }
]

export const LIVE_TRIP_FEED: TripFeedItem[] = [
  {
    id: 'feed_1',
    user: MOCK_USERS.priya,
    action: 'added',
    highlight: 'Cafe Bodega',
    suffix: 'to Day 2 wishlist.',
    timeAgo: '12m ago'
  },
  {
    id: 'feed_2',
    user: MOCK_USERS.arjun,
    action: 'initiated poll',
    highlight: 'Day 3 Sunset Experience.',
    timeAgo: '1h ago'
  },
  {
    id: 'feed_3',
    user: MOCK_USERS.rohan,
    action: 'locked in villa booking & uploaded confirmation receipt.',
    timeAgo: '3h ago'
  },
  {
    id: 'feed_4',
    user: MOCK_USERS.sneha,
    action: 'uploaded Indigo airline ticket PDF (BOM → GOI).',
    timeAgo: 'Yesterday, 6:40 PM'
  }
]
