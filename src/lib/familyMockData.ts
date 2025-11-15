export interface FamilyMember {
  id: string;
  name: string;
  role: 'parent' | 'child';
  avatar?: string;
  totalSpend: number;
}

export interface FamilySubscription {
  id: string;
  name: string;
  category: 'streaming' | 'music' | 'productivity' | 'gaming' | 'education' | 'other';
  cost: number;
  billingCycle: 'monthly' | 'annual';
  isShared: boolean;
  sharedWith?: string[];
  owner: string;
  nextRenewalDate: Date;
  status: 'active' | 'inactive';
  iconBg: string;
  canShareWith?: number;
}

export interface SavingsOpportunity {
  id: string;
  type: 'family_plan' | 'bundle' | 'duplicate';
  title: string;
  description: string;
  potentialSavings: number;
  services: string[];
}

export interface PaymentRecord {
  id: string;
  service: string;
  amount: number;
  paidBy: string;
  date: Date;
  settled: boolean;
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

export const familyMembers: FamilyMember[] = [
  { id: '1', name: 'Dad', role: 'parent', totalSpend: 112.5 },
  { id: '2', name: 'Mom', role: 'parent', totalSpend: 98.0 },
  { id: '3', name: 'Leo', role: 'child', totalSpend: 45.5 },
  { id: '4', name: 'Mia', role: 'child', totalSpend: 32.0 },
  { id: '5', name: 'Alex', role: 'child', totalSpend: 24.0 },
];

export const familySubscriptions: FamilySubscription[] = [
  {
    id: '1',
    name: 'Streaming Service',
    category: 'streaming',
    cost: 15.99,
    billingCycle: 'monthly',
    isShared: true,
    sharedWith: ['1', '2', '3', '4'],
    owner: '1',
    nextRenewalDate: getDateDaysFromNow(8),
    status: 'active',
    iconBg: 'bg-red-600',
    canShareWith: 5,
  },
  {
    id: '2',
    name: 'Music Family',
    category: 'music',
    cost: 16.99,
    billingCycle: 'monthly',
    isShared: true,
    sharedWith: ['1', '2', '3'],
    owner: '2',
    nextRenewalDate: getDateDaysFromNow(12),
    status: 'active',
    iconBg: 'bg-green-500',
    canShareWith: 6,
  },
  {
    id: '3',
    name: 'Design Pro',
    category: 'productivity',
    cost: 12.0,
    billingCycle: 'monthly',
    isShared: false,
    owner: '3',
    nextRenewalDate: getDateDaysFromNow(18),
    status: 'active',
    iconBg: 'bg-purple-600',
  },
  {
    id: '4',
    name: 'Productivity Suite',
    category: 'productivity',
    cost: 10.0,
    billingCycle: 'monthly',
    isShared: true,
    sharedWith: ['1', '2'],
    owner: '1',
    nextRenewalDate: getDateDaysFromNow(5),
    status: 'active',
    iconBg: 'bg-blue-600',
    canShareWith: 5,
  },
  {
    id: '5',
    name: 'Gaming Plus',
    category: 'gaming',
    cost: 14.99,
    billingCycle: 'monthly',
    isShared: true,
    sharedWith: ['3', '4', '5'],
    owner: '1',
    nextRenewalDate: getDateDaysFromNow(20),
    status: 'active',
    iconBg: 'bg-indigo-600',
  },
  {
    id: '6',
    name: 'Cloud Storage',
    category: 'productivity',
    cost: 9.99,
    billingCycle: 'monthly',
    isShared: true,
    sharedWith: ['1', '2', '3', '4', '5'],
    owner: '2',
    nextRenewalDate: getDateDaysFromNow(15),
    status: 'active',
    iconBg: 'bg-cyan-500',
  },
  {
    id: '7',
    name: 'Learning Hub',
    category: 'education',
    cost: 19.99,
    billingCycle: 'monthly',
    isShared: true,
    sharedWith: ['3', '4', '5'],
    owner: '2',
    nextRenewalDate: getDateDaysFromNow(22),
    status: 'active',
    iconBg: 'bg-orange-500',
  },
  {
    id: '8',
    name: 'Fitness App',
    category: 'other',
    cost: 12.99,
    billingCycle: 'monthly',
    isShared: false,
    owner: '2',
    nextRenewalDate: getDateDaysFromNow(10),
    status: 'active',
    iconBg: 'bg-pink-500',
  },
  {
    id: '9',
    name: 'News Premium',
    category: 'other',
    cost: 8.99,
    billingCycle: 'monthly',
    isShared: false,
    owner: '1',
    nextRenewalDate: getDateDaysFromNow(25),
    status: 'active',
    iconBg: 'bg-gray-700',
  },
  {
    id: '10',
    name: 'Photo Editor',
    category: 'productivity',
    cost: 9.99,
    billingCycle: 'monthly',
    isShared: false,
    owner: '4',
    nextRenewalDate: getDateDaysFromNow(14),
    status: 'active',
    iconBg: 'bg-purple-500',
  },
  {
    id: '11',
    name: 'Audiobooks',
    category: 'education',
    cost: 14.95,
    billingCycle: 'monthly',
    isShared: true,
    sharedWith: ['1', '2'],
    owner: '1',
    nextRenewalDate: getDateDaysFromNow(7),
    status: 'active',
    iconBg: 'bg-amber-600',
  },
];

export const savingsOpportunities: SavingsOpportunity[] = [
  {
    id: '1',
    type: 'family_plan',
    title: 'Switch to Family Plans',
    description: 'Save $47/mo by bundling individual accounts into family plans.',
    potentialSavings: 47,
    services: ['Streaming Service', 'Music Family', 'Cloud Storage'],
  },
  {
    id: '2',
    type: 'duplicate',
    title: 'Duplicate Services Detected',
    description: 'Leo and Mia both have photo editing apps. Consolidate to save $10/mo.',
    potentialSavings: 10,
    services: ['Design Pro', 'Photo Editor'],
  },
];

export const paymentLedger: PaymentRecord[] = [
  {
    id: '1',
    service: 'Streaming Service',
    amount: 15.99,
    paidBy: 'Dad',
    date: getDateDaysAgo(2),
    settled: true,
  },
  {
    id: '2',
    service: 'Music Family',
    amount: 16.99,
    paidBy: 'Mom',
    date: getDateDaysAgo(5),
    settled: true,
  },
  {
    id: '3',
    service: 'Gaming Plus',
    amount: 14.99,
    paidBy: 'Dad',
    date: getDateDaysAgo(1),
    settled: false,
  },
];

export const calculateTotalHouseholdSpend = (subscriptions: FamilySubscription[]): number => {
  return subscriptions.reduce((total, sub) => {
    if (sub.status !== 'active') return total;
    return total + sub.cost;
  }, 0);
};

export const calculateMemberSpend = (
  memberId: string,
  subscriptions: FamilySubscription[]
): number => {
  return subscriptions
    .filter((sub) => sub.status === 'active' && sub.owner === memberId)
    .reduce((total, sub) => total + sub.cost, 0);
};

export const getIndividualSubscriptions = (subscriptions: FamilySubscription[]): number => {
  return subscriptions.filter((sub) => !sub.isShared).length;
};

export const getSharedSubscriptions = (subscriptions: FamilySubscription[]): number => {
  return subscriptions.filter((sub) => sub.isShared).length;
};

export const getTotalMembers = (members: FamilyMember[]): number => {
  return members.length;
};

export const getTopSavingsOpportunity = (
  opportunities: SavingsOpportunity[]
): SavingsOpportunity | null => {
  if (opportunities.length === 0) return null;
  return opportunities.sort((a, b) => b.potentialSavings - a.potentialSavings)[0];
};

export const getMemberAvatars = (memberIds: string[], members: FamilyMember[]): string[] => {
  return memberIds.map((id) => {
    const member = members.find((m) => m.id === id);
    return member?.name.charAt(0) || '?';
  });
};

export const getUpcomingRenewals = (subscriptions: FamilySubscription[], limit = 3) => {
  return subscriptions
    .filter((sub) => sub.status === 'active')
    .sort((a, b) => a.nextRenewalDate.getTime() - b.nextRenewalDate.getTime())
    .slice(0, limit);
};
