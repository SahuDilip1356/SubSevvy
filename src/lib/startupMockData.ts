export interface StartupSubscription {
  id: string;
  name: string;
  category: string;
  department: string;
  cost: number;
  billingCycle: 'monthly' | 'annual';
  seatsTotal: number;
  seatsActive: number;
  nextRenewalDate: Date;
  status: 'active' | 'inactive';
  iconBg?: string;
}

export interface OptimizationAlert {
  id: string;
  type: 'inactive_seats' | 'tool_overlap' | 'better_plan' | 'unused_service';
  title: string;
  description: string;
  potentialSavings: number;
  relatedSubscriptions: string[];
}

export interface UpcomingRenewal {
  id: string;
  service: string;
  renewalDate: Date;
  cost: number;
  billingCycle: 'monthly' | 'annual';
  actionRequired?: boolean;
}

const getDateDaysFromNow = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

export const startupSubscriptions: StartupSubscription[] = [
  {
    id: '1',
    name: 'Figma',
    category: 'Design',
    department: 'Design Team',
    cost: 450,
    billingCycle: 'monthly',
    seatsTotal: 10,
    seatsActive: 7,
    nextRenewalDate: getDateDaysFromNow(15),
    status: 'active',
    iconBg: 'bg-gray-900',
  },
  {
    id: '2',
    name: 'Slack',
    category: 'Communication',
    department: 'All Company',
    cost: 105,
    billingCycle: 'monthly',
    seatsTotal: 12,
    seatsActive: 12,
    nextRenewalDate: getDateDaysFromNow(8),
    status: 'active',
    iconBg: 'bg-purple-600',
  },
  {
    id: '3',
    name: 'Notion',
    category: 'Productivity',
    department: 'Product & Eng',
    cost: 50,
    billingCycle: 'monthly',
    seatsTotal: 8,
    seatsActive: 5,
    nextRenewalDate: getDateDaysFromNow(22),
    status: 'active',
    iconBg: 'bg-gray-400',
  },
  {
    id: '4',
    name: 'GitHub',
    category: 'Development',
    department: 'Engineering',
    cost: 180,
    billingCycle: 'monthly',
    seatsTotal: 8,
    seatsActive: 5,
    nextRenewalDate: getDateDaysFromNow(45),
    status: 'active',
    iconBg: 'bg-gray-800',
  },
  {
    id: '5',
    name: 'Canva Pro',
    category: 'Design',
    department: 'Marketing',
    cost: 120,
    billingCycle: 'monthly',
    seatsTotal: 5,
    seatsActive: 4,
    nextRenewalDate: getDateDaysFromNow(18),
    status: 'active',
    iconBg: 'bg-cyan-500',
  },
  {
    id: '6',
    name: 'HubSpot',
    category: 'Sales & Marketing',
    department: 'Sales',
    cost: 890,
    billingCycle: 'monthly',
    seatsTotal: 6,
    seatsActive: 6,
    nextRenewalDate: getDateDaysFromNow(30),
    status: 'active',
    iconBg: 'bg-orange-500',
  },
  {
    id: '7',
    name: 'Zoom',
    category: 'Communication',
    department: 'All Company',
    cost: 150,
    billingCycle: 'monthly',
    seatsTotal: 12,
    seatsActive: 10,
    nextRenewalDate: getDateDaysFromNow(12),
    status: 'active',
    iconBg: 'bg-blue-500',
  },
  {
    id: '8',
    name: 'Jira',
    category: 'Project Management',
    department: 'Product & Eng',
    cost: 70,
    billingCycle: 'monthly',
    seatsTotal: 8,
    seatsActive: 7,
    nextRenewalDate: getDateDaysFromNow(25),
    status: 'active',
    iconBg: 'bg-blue-600',
  },
];

export const optimizationAlerts: OptimizationAlert[] = [
  {
    id: '1',
    type: 'inactive_seats',
    title: 'Inactive Seats',
    description: '3 paid seats for GitHub have been inactive for over 60 days. Consider de-provisioning to save $120/mo.',
    potentialSavings: 120,
    relatedSubscriptions: ['4'],
  },
  {
    id: '2',
    type: 'tool_overlap',
    title: 'Tool Overlap',
    description: 'Figma & Canva Pro are both used for design assets. Consolidating could save $150/mo.',
    potentialSavings: 150,
    relatedSubscriptions: ['1', '5'],
  },
  {
    id: '3',
    type: 'better_plan',
    title: 'Better Plan Available',
    description: 'Slack Enterprise Grid offers better per-seat pricing for teams over 10. Save $45/mo.',
    potentialSavings: 45,
    relatedSubscriptions: ['2'],
  },
];

export const upcomingRenewals: UpcomingRenewal[] = [
  {
    id: '1',
    service: 'Linear',
    renewalDate: getDateDaysFromNow(4),
    cost: 120,
    billingCycle: 'monthly',
    actionRequired: true,
  },
  {
    id: '2',
    service: 'Webflow',
    renewalDate: getDateDaysFromNow(10),
    cost: 199,
    billingCycle: 'monthly',
    actionRequired: true,
  },
  {
    id: '3',
    service: 'Airtable',
    renewalDate: getDateDaysFromNow(18),
    cost: 240,
    billingCycle: 'monthly',
  },
];

export const calculateTeamBurn = (subscriptions: StartupSubscription[]): number => {
  return subscriptions.reduce((total, sub) => {
    if (sub.status !== 'active') return total;
    const monthlyAmount = sub.billingCycle === 'annual' ? sub.cost / 12 : sub.cost;
    return total + monthlyAmount;
  }, 0);
};

export const calculatePerEmployee = (totalBurn: number, employeeCount: number): number => {
  return employeeCount > 0 ? totalBurn / employeeCount : 0;
};

export const calculateTotalSavingsOpportunity = (alerts: OptimizationAlert[]): number => {
  return alerts.reduce((total, alert) => total + alert.potentialSavings, 0);
};

export const getTeamMemberCount = (subscriptions: StartupSubscription[]): number => {
  const uniqueSeats = new Set<number>();
  subscriptions.forEach((sub) => {
    for (let i = 0; i < sub.seatsActive; i++) {
      uniqueSeats.add(Math.random());
    }
  });
  return 12;
};

export const getInactiveSeatsCount = (subscriptions: StartupSubscription[]): number => {
  return subscriptions.reduce((total, sub) => {
    return total + (sub.seatsTotal - sub.seatsActive);
  }, 0);
};
