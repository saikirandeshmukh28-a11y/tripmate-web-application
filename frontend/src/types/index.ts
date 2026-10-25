export interface User {
  id: string
  name: string
  avatar: string
  role?: string
  status?: string
  statusColor?: string
}

export interface Destination {
  id: string
  title: string
  state: string
  location: string
  duration: string
  tag: string
  rating: number
  reviewsCount: number
  estBudget: number
  aiPlansCount: number
  imageUrl: string
  description: string
  category: string
}

export interface WorkspaceSummary {
  id: string
  title: string
  categoryTag: string
  tripHealth: number
  statusText: string
  dates: string
  stayNote: string
  staySub: string
  imageUrl: string
  budgetFit: {
    status: string
    detail: string
  }
  accommodations: {
    status: string
    detail: string
  }
  activities: {
    status: string
    detail: string
  }
  travelers: User[]
}

export interface DayStop {
  id: string
  time: string
  category: 'transit' | 'stay' | 'food' | 'activity' | 'nightlife'
  categoryLabel: string
  badgeText?: string
  badgeType?: 'primary' | 'warning' | 'success' | 'info'
  title: string
  description: string
  imageUrl?: string
  rating?: number
  reviewsCount?: number
  bookingId?: string
  metaInfo: {
    durationOrDistance?: string
    costText?: string
    splitNote?: string
    walkNote?: string
    ticketsNote?: string
  }
  verifiedBadge?: string
  aiNote?: string
  interestNote?: string
}

export interface ItineraryDay {
  dayNumber: number
  dateString: string
  title: string
  stopsCount: number
  estCost: number
  distanceKm: number
  isCompleted?: boolean
  stops: DayStop[]
}

export interface Expense {
  id: string
  title: string
  amount: number
  payer: User
  splitType: string
  splitDetail: string
  date: string
  category: 'accommodation' | 'food' | 'transport' | 'activities' | 'miscellaneous'
  hasReceipt?: boolean
  userImpact: {
    type: 'lent' | 'owe'
    amount: number
  }
}

export interface SettlementDebt {
  id: string
  fromUser: User
  toUser: User
  amount: number
  description: string
  status: 'pending' | 'settled'
  isUserInvolved: boolean
  settleMethod?: string
}

export interface DecisionOption {
  id: string
  title: string
  tag: string
  tagType?: 'badge' | 'popular'
  costPerPerson: number
  imageUrl: string
  description: string
  votesCount: number
  percentage: number
  voterAvatars: string[]
  isWinner?: boolean
  statusNote?: string
}

export interface DecisionItem {
  id: string
  title: string
  subtitle: string
  status: 'active' | 'resolved' | 'suggestion'
  headerTag: string
  headerTagColor?: string
  categoryNote: string
  closingTime?: string
  votesSummary?: string
  tieBreakerAlert?: {
    tag: string
    text: string
  }
  options: DecisionOption[]
  userVotedOptionId?: string
  reactionCounts?: {
    in: number
    skip: number
    needDetails: number
  }
  proposer?: {
    name: string
    timeAgo: string
    costPerPerson?: number
  }
}

export interface TripFeedItem {
  id: string
  user: User
  action: string
  highlight?: string
  suffix?: string
  timeAgo: string
}
