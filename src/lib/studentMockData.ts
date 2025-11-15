export interface StudentSubscription {
  id: string;
  name: string;
  category: 'entertainment' | 'education' | 'productivity' | 'lifestyle';
  cost: number;
  billingCycle: 'monthly' | 'annual';
  nextRenewalDate: Date;
  status: 'active' | 'trial' | 'cancelled';
  hasStudentDiscount: boolean;
  studentDiscountAvailable?: boolean;
  daysUntilAction?: number;
  iconBg?: string;
}

export interface StudentDiscount {
  id: string;
  service: string;
  description: string;
  discount: string;
  category: string;
}

const getDateDaysFromNow = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

export const studentSubscriptions: StudentSubscription[] = [
  {
    id: '1',
    name: 'Streaming Service Trial',
    category: 'entertainment',
    cost: 0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(3),
    status: 'trial',
    hasStudentDiscount: false,
    daysUntilAction: 3,
    iconBg: 'bg-red-100',
  },
  {
    id: '2',
    name: 'Music Platform',
    category: 'entertainment',
    cost: 5.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(8),
    status: 'active',
    hasStudentDiscount: true,
    iconBg: 'bg-orange-100',
  },
  {
    id: '3',
    name: 'Spotify',
    category: 'entertainment',
    cost: 5.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(15),
    status: 'active',
    hasStudentDiscount: true,
    iconBg: 'bg-green-100',
  },
  {
    id: '4',
    name: 'Netflix',
    category: 'entertainment',
    cost: 15.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(12),
    status: 'active',
    hasStudentDiscount: false,
    iconBg: 'bg-red-100',
  },
  {
    id: '5',
    name: 'Notion',
    category: 'productivity',
    cost: 8.0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(20),
    status: 'active',
    hasStudentDiscount: false,
    studentDiscountAvailable: true,
    iconBg: 'bg-blue-100',
  },
  {
    id: '6',
    name: 'GitHub Student',
    category: 'education',
    cost: 0,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(90),
    status: 'active',
    hasStudentDiscount: true,
    iconBg: 'bg-gray-100',
  },
  {
    id: '7',
    name: 'Canva Pro',
    category: 'education',
    cost: 12.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(18),
    status: 'active',
    hasStudentDiscount: false,
    studentDiscountAvailable: true,
    iconBg: 'bg-purple-100',
  },
  {
    id: '8',
    name: 'Gym Membership',
    category: 'lifestyle',
    cost: 29.99,
    billingCycle: 'monthly',
    nextRenewalDate: getDateDaysFromNow(5),
    status: 'active',
    hasStudentDiscount: false,
    iconBg: 'bg-pink-100',
  },
];

export const studentDiscountsAvailable: StudentDiscount[] = [
  {
    id: '1',
    service: 'Design Pro',
    description: 'A student plan is available!',
    discount: '50% off',
    category: 'education',
  },
  {
    id: '2',
    service: 'Cloud Storage',
    description: 'Free for students with .edu email',
    discount: '100GB Free',
    category: 'productivity',
  },
  {
    id: '3',
    service: 'Adobe Creative',
    description: 'Student discount available',
    discount: '60% off',
    category: 'education',
  },
];

export const calculateStudentMonthlySpend = (subscriptions: StudentSubscription[]): number => {
  return subscriptions.reduce((total, sub) => {
    if (sub.status !== 'active' && sub.status !== 'trial') return total;
    const monthlyAmount = sub.billingCycle === 'annual' ? sub.cost / 12 : sub.cost;
    return total + monthlyAmount;
  }, 0);
};

export const calculatePotentialSavings = (subscriptions: StudentSubscription[]): number => {
  let savings = 0;
  subscriptions.forEach((sub) => {
    if (sub.studentDiscountAvailable) {
      savings += sub.cost * 0.5;
    }
  });
  return savings;
};

export const getCategorySpending = (subscriptions: StudentSubscription[]) => {
  const categories = {
    entertainment: 0,
    education: 0,
    productivity: 0,
    lifestyle: 0,
  };

  subscriptions.forEach((sub) => {
    if (sub.status === 'active' || sub.status === 'trial') {
      const monthlyAmount = sub.billingCycle === 'annual' ? sub.cost / 12 : sub.cost;
      categories[sub.category] += monthlyAmount;
    }
  });

  const total = Object.values(categories).reduce((sum, val) => sum + val, 0);

  return {
    categories,
    total,
    percentages: {
      entertainment: total > 0 ? Math.round((categories.entertainment / total) * 100) : 0,
      education: total > 0 ? Math.round((categories.education / total) * 100) : 0,
      productivity: total > 0 ? Math.round((categories.productivity / total) * 100) : 0,
      lifestyle: total > 0 ? Math.round((categories.lifestyle / total) * 100) : 0,
    },
  };
};

export const getUpcomingActions = (subscriptions: StudentSubscription[]) => {
  return subscriptions
    .filter((sub) => sub.status === 'trial' || sub.daysUntilAction)
    .sort((a, b) => a.nextRenewalDate.getTime() - b.nextRenewalDate.getTime());
};
