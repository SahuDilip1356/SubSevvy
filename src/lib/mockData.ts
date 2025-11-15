export interface Subscription {
  id: string;
  name: string;
  category: string;
  cost: number;
  billingCycle: 'monthly' | 'annual';
  nextRenewalDate: Date;
  logoUrl?: string;
  status: 'active' | 'cancelled' | 'paused';
}

export interface SavingsAlert {
  id: string;
  type: 'overlap' | 'better_deal';
  title: string;
  description: string;
  savingsAmount: number;
  relatedSubscriptions: string[];
  actionUrl?: string;
}

const getDateDaysFromNow = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

export const mockSubscriptions: Subscription[] = [
  {
    id: '1',
    name: 'Netflix',
    category: 'entertainment',
    cost: 15.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(3),
    logoUrl: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop',
    status: 'active',
  },
  {
    id: '2',
    name: 'GitHub',
    category: 'development',
    cost: 7.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(15),
    logoUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop',
    status: 'active',
  },
  {
    id: '3',
    name: 'Notion',
    category: 'productivity',
    cost: 10.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(7),
    logoUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
    status: 'active',
  },
  {
    id: '4',
    name: 'Figma',
    category: 'design',
    cost: 12.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(20),
    logoUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
    status: 'active',
  },
  {
    id: '5',
    name: 'Adobe Creative Cloud',
    category: 'design',
    cost: 54.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(12),
    logoUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
    status: 'active',
  },
  {
    id: '6',
    name: 'Slack',
    category: 'communication',
    cost: 8.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(25),
    logoUrl: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&h=300&fit=crop',
    status: 'active',
  },
  {
    id: '7',
    name: 'QuickBooks',
    category: 'finance',
    cost: 30.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(18),
    logoUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    status: 'active',
  },
  {
    id: '8',
    name: 'Canva Pro',
    category: 'design',
    cost: 12.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(22),
    logoUrl: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&h=300&fit=crop',
    status: 'active',
  },
  {
    id: '9',
    name: 'Asana',
    category: 'productivity',
    cost: 10.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(9),
    logoUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    status: 'active',
  },
  {
    id: '10',
    name: 'Trello',
    category: 'productivity',
    cost: 5.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(14),
    logoUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    status: 'active',
  },
  {
    id: '11',
    name: 'Zoom',
    category: 'communication',
    cost: 14.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(28),
    logoUrl: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop',
    status: 'active',
  },
  {
    id: '12',
    name: 'Grammarly',
    category: 'productivity',
    cost: 12.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(6),
    logoUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    status: 'active',
  },
];

export const mockSavingsAlerts: SavingsAlert[] = [
  {
    id: '1',
    type: 'overlap',
    title: 'Overlap Alert',
    description: 'You subscribe to both Asana and Trello.',
    savingsAmount: 25.0,
    relatedSubscriptions: ['9', '10'],
  },
  {
    id: '2',
    type: 'better_deal',
    title: 'Better Deal Found',
    description: 'The annual plan for Canva Pro could save you $24/year.',
    savingsAmount: 24.0,
    relatedSubscriptions: ['8'],
    actionUrl: 'https://canva.com/pricing',
  },
];

export const calculateMonthlySpend = (subscriptions: Subscription[]): number => {
  return subscriptions.reduce((total, sub) => {
    if (sub.status !== 'active') return total;
    const monthlyAmount = sub.billingCycle === 'annual' ? sub.cost / 12 : sub.cost;
    return total + monthlyAmount;
  }, 0);
};

export const getActiveSubscriptionsCount = (subscriptions: Subscription[]): number => {
  return subscriptions.filter((sub) => sub.status === 'active').length;
};

export const getTotalSavings = (alerts: SavingsAlert[]): number => {
  return alerts.reduce((total, alert) => total + alert.savingsAmount, 0);
};

export const getUpcomingRenewals = (subscriptions: Subscription[], days: number = 7): Subscription[] => {
  const now = new Date();
  const futureDate = new Date();
  futureDate.setDate(now.getDate() + days);

  return subscriptions
    .filter(
      (sub) =>
        sub.status === 'active' &&
        sub.nextRenewalDate >= now &&
        sub.nextRenewalDate <= futureDate
    )
    .sort((a, b) => a.nextRenewalDate.getTime() - b.nextRenewalDate.getTime());
};
