export interface HobbyistSubscription {
  id: string;
  name: string;
  category: 'learning' | 'creative' | 'streaming' | 'tools';
  cost: number;
  billingCycle: 'monthly' | 'annual';
  nextRenewalDate: Date;
  status: 'active' | 'inactive';
  lastUsed?: Date;
  usageLevel: 'high' | 'medium' | 'low' | 'unused';
  iconInitials: string;
  iconColor: string;
}

export interface ActiveHobby {
  id: string;
  name: string;
  icon: string;
  relatedSubscriptions: string[];
  lastActive: Date;
}

export interface LearningRecommendation {
  id: string;
  platform: string;
  course: string;
  instructor: string;
  type: 'new' | 'trending';
}

export interface ValueInsight {
  type: 'top' | 'lowest';
  subscription: string;
  reason: string;
  action?: string;
}

const getDateDaysFromNow = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

const getDateDaysAgo = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

export const hobbyistSubscriptions: HobbyistSubscription[] = [
  {
    id: '1',
    name: 'YouTube Premium',
    category: 'streaming',
    cost: 11.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(3),
    status: 'active',
    lastUsed: getDateDaysAgo(1),
    usageLevel: 'high',
    iconInitials: 'YT',
    iconColor: 'bg-red-500',
  },
  {
    id: '2',
    name: 'Skillshare',
    category: 'learning',
    cost: 18.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(15),
    status: 'active',
    lastUsed: getDateDaysAgo(63),
    usageLevel: 'unused',
    iconInitials: 'SC',
    iconColor: 'bg-blue-400',
  },
  {
    id: '3',
    name: 'MasterClass',
    category: 'learning',
    cost: 15.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(25),
    status: 'active',
    lastUsed: getDateDaysAgo(2),
    usageLevel: 'high',
    iconInitials: 'MC',
    iconColor: 'bg-gray-700',
  },
  {
    id: '4',
    name: 'Patreon',
    category: 'creative',
    cost: 35.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(20),
    status: 'active',
    lastUsed: getDateDaysAgo(5),
    usageLevel: 'high',
    iconInitials: 'P',
    iconColor: 'bg-orange-500',
  },
  {
    id: '5',
    name: 'Spotify',
    category: 'streaming',
    cost: 10.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(12),
    status: 'active',
    lastUsed: getDateDaysAgo(0),
    usageLevel: 'high',
    iconInitials: 'SP',
    iconColor: 'bg-green-500',
  },
  {
    id: '6',
    name: 'Adobe Creative Cloud',
    category: 'creative',
    cost: 54.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(8),
    status: 'active',
    lastUsed: getDateDaysAgo(3),
    usageLevel: 'medium',
    iconInitials: 'AC',
    iconColor: 'bg-red-600',
  },
  {
    id: '7',
    name: 'Procreate',
    category: 'creative',
    cost: 9.99,
    billingCycle: 'annual',
    nextRenewalDate: getDateDaysFromNow(45),
    status: 'active',
    lastUsed: getDateDaysAgo(7),
    usageLevel: 'medium',
    iconInitials: 'PR',
    iconColor: 'bg-purple-500',
  },
  {
    id: '8',
    name: 'Notion',
    category: 'tools',
    cost: 8.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(18),
    status: 'active',
    lastUsed: getDateDaysAgo(1),
    usageLevel: 'high',
    iconInitials: 'N',
    iconColor: 'bg-gray-500',
  },
  {
    id: '9',
    name: 'Canva Pro',
    category: 'creative',
    cost: 12.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(30),
    status: 'active',
    lastUsed: getDateDaysAgo(4),
    usageLevel: 'medium',
    iconInitials: 'CV',
    iconColor: 'bg-cyan-500',
  },
  {
    id: '10',
    name: 'Udemy',
    category: 'learning',
    cost: 19.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(22),
    status: 'active',
    lastUsed: getDateDaysAgo(10),
    usageLevel: 'low',
    iconInitials: 'UD',
    iconColor: 'bg-purple-600',
  },
  {
    id: '11',
    name: 'Netflix',
    category: 'streaming',
    cost: 15.49,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(5),
    status: 'active',
    lastUsed: getDateDaysAgo(2),
    usageLevel: 'high',
    iconInitials: 'NF',
    iconColor: 'bg-red-600',
  },
  {
    id: '12',
    name: 'Discord Nitro',
    category: 'tools',
    cost: 9.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(14),
    status: 'active',
    lastUsed: getDateDaysAgo(0),
    usageLevel: 'high',
    iconInitials: 'DC',
    iconColor: 'bg-indigo-500',
  },
];

export const activeHobbies: ActiveHobby[] = [
  {
    id: '1',
    name: 'Digital Art',
    icon: '🎨',
    relatedSubscriptions: ['6', '7', '9'],
    lastActive: getDateDaysAgo(1),
  },
  {
    id: '2',
    name: 'Music Production',
    icon: '🎵',
    relatedSubscriptions: ['5'],
    lastActive: getDateDaysAgo(2),
  },
  {
    id: '3',
    name: 'Photography',
    icon: '📸',
    relatedSubscriptions: ['6', '9'],
    lastActive: getDateDaysAgo(5),
  },
  {
    id: '4',
    name: 'Content Creation',
    icon: '🎬',
    relatedSubscriptions: ['1', '4'],
    lastActive: getDateDaysAgo(3),
  },
];

export const learningRecommendations: LearningRecommendation[] = [
  {
    id: '1',
    platform: 'MasterClass',
    course: 'Creative Writing',
    instructor: 'Margaret Atwood',
    type: 'new',
  },
  {
    id: '2',
    platform: 'Skillshare',
    course: 'Advanced Procreate Techniques',
    instructor: 'Various Artists',
    type: 'trending',
  },
];

export const calculateHobbyistSpend = (subscriptions: HobbyistSubscription[]): number => {
  return subscriptions.reduce((total, sub) => {
    if (sub.status !== 'active') return total;
    const monthlyAmount = sub.billingCycle === 'annual' ? sub.cost / 12 : sub.cost;
    return total + monthlyAmount;
  }, 0);
};

export const getMostUsedSubscription = (subscriptions: HobbyistSubscription[]): HobbyistSubscription | null => {
  const activeSubs = subscriptions.filter(sub => sub.status === 'active' && sub.usageLevel === 'high');
  return activeSubs.length > 0 ? activeSubs[0] : null;
};

export const getUnusedSubscriptions = (subscriptions: HobbyistSubscription[]): HobbyistSubscription[] => {
  return subscriptions.filter(sub => sub.usageLevel === 'unused' || sub.usageLevel === 'low');
};

export const getUpcomingRenewals = (subscriptions: HobbyistSubscription[]): HobbyistSubscription[] => {
  return subscriptions
    .filter(sub => sub.status === 'active')
    .sort((a, b) => a.nextRenewalDate.getTime() - b.nextRenewalDate.getTime())
    .slice(0, 3);
};

export const getValueInsights = (subscriptions: HobbyistSubscription[]): ValueInsight[] => {
  const masterclass = subscriptions.find(sub => sub.name === 'MasterClass');
  const skillshare = subscriptions.find(sub => sub.name === 'Skillshare');

  return [
    {
      type: 'top',
      subscription: 'MasterClass',
      reason: "You've completed 2 courses and watched 8 hours this week.",
    },
    {
      type: 'lowest',
      subscription: 'Skillshare',
      reason: "You haven't started a course in 40 days.",
      action: 'Find a New Project?',
    },
  ];
};

export const getActiveHobbiesCount = (hobbies: ActiveHobby[]): number => {
  const recentlyActive = hobbies.filter(hobby => {
    const daysSinceActive = Math.floor((new Date().getTime() - hobby.lastActive.getTime()) / (1000 * 60 * 60 * 24));
    return daysSinceActive <= 30;
  });
  return recentlyActive.length;
};
