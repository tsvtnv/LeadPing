export const PLAN_LIMITS = {
  FREE: {
    leadsPerMonth: 50,
    mailboxes: 1,
    support: 'Community',
    features: ['basic_reply']
  },
  STARTER: {
    leadsPerMonth: 300,
    mailboxes: 1,
    support: 'Email',
    features: ['basic_reply', 'custom_hours']
  },
  PRO: {
    leadsPerMonth: 1500,
    mailboxes: 3,
    support: 'Priority',
    features: ['basic_reply', 'custom_hours', 'smart_routing', 'analytics']
  },
  SCALE: {
    leadsPerMonth: 5000,
    mailboxes: 10,
    support: 'Dedicated',
    features: ['basic_reply', 'custom_hours', 'smart_routing', 'analytics', 'white_label']
  }
};

export type PlanTier = keyof typeof PLAN_LIMITS;

export const canSendEmail = (currentUsage: number, plan: PlanTier) => {
  return currentUsage < PLAN_LIMITS[plan].leadsPerMonth;
};