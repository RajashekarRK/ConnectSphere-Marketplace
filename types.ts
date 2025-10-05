
import React from 'react';

export type Page =
  | 'home' | 'explore' | 'listing' | 'profile' | 'search' | 'login' | 'register' | 'about'
  | 'contact' | 'help' | 'privacy' | 'terms' | 'trust-safety' | 'careers' | 'press' | 'cart'
  | 'checkout' | 'confirmation' | 'seller-profile' | 'compare' | 'virtual-tours'
  | 'visual-search' | 'messages' | 'settings' | 'achievements' | 'profile-customization'
  | 'portfolio' | 'connections' | 'feedback' | 'referral' | 'family-account'
  | 'anonymous-browsing' | 'expertise-tags' | 'lists'
  | 'account-recovery' | 'marketing-landing'
  // Onboarding
  | 'onboarding/profile-setup' | 'onboarding/personalization' | 'onboarding/verification'
  // Seller Dashboard
  | 'dashboard/listings' | 'dashboard/orders' | 'dashboard/analytics' | 'dashboard/promotions'
  | 'dashboard/cross-posting' | 'dashboard/lifecycle' | 'dashboard/bulk-management'
  | 'dashboard/templates' | 'dashboard/boost' | 'dashboard/shipping' | 'dashboard/delivery'
  | 'dashboard/scheduling' | 'dashboard/transactions' | 'dashboard/personal-analytics'
  | 'dashboard/account-health'
  // Admin Dashboard
  | 'admin/dashboard' | 'admin/api' | 'admin/models' | 'admin/feedback' | 'admin/risk'
  | 'admin/biometrics' | 'admin/language' | 'admin/currency' | 'admin/performance'
  | 'admin/notifications' | 'admin/recommendations' | 'admin/users' | 'admin/trust-safety';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: 'user' | 'admin';
  favoriteIds: string[];
  referralCode: string;
  accountHealth: { score: number; status: string; };
  expertiseTags: string[];
  country: Country;
  bio: string;
  theme: Theme;
  language: string;
  notifications: { email: boolean; push: boolean; };
  isPrivate: boolean;
  blockedUsers: string[];
  title: string;
  about: string;
  stats: { earnings: number; spending: number; transactions: number; };
  verification: { email: boolean; phone: boolean; id: boolean; };
  badges: Badge[];
  levels: { current: Level; all: Level[]; };
  connections: { followers: string[]; following: string[]; };
  familyAccount: { members: FamilyMember[]; };
  settings: UserSettings;
  shippingPreferences: ShippingPreferences;
  localDelivery: LocalDeliverySettings;
  portfolio?: PortfolioProject[];
  isOnline?: boolean;
  handle?: string;
  influenceScore?: number;
  followingIds?: string[];
  averageRating?: number;
  reviewCount?: number;
}

export interface ListingDetails {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  tags: string[];
  imageUrls: string[];
  sellerId: string;
  sellerUsername: string;
  quantity: number;
  country: string;
  reviews: Review[];
  rating: number;
  reviewCount: number;
  isSponsored?: boolean;
  brand?: string;
  productDetails?: Record<string, string>;
  material?: string;
  color?: string;
}

export interface Category {
  name: string;
  icon: React.ReactNode;
}

export interface Review {
  id: string;
  author: string;
  authorAvatar: string;
  rating: number;
  text: string;
  date: string;
  likes?: number;
  dislikes?: number;
}

export type OrderStatus = 'Pending' | 'Shipped' | 'Delivered' | 'Completed' | 'Disputed';
export type EscrowStatus = 'In Escrow' | 'Released' | 'Refunded';
export type DeliveryStatus = 'Processing' | 'Shipped' | 'Delivered' | 'Confirmed';

export interface Order {
    id: string;
    date: string;
    items: OrderItem[];
    total: number;
    status: OrderStatus;
    buyerId: string;
    escrowStatus: EscrowStatus;
    deliveryStatus: DeliveryStatus;
}

export interface OrderItem extends ListingDetails {}

export interface Conversation {
  id: string;
  participants: User[];
  messages: Message[];
  unreadCount?: number;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

export interface Country {
  code: string;
  name: string;
}

export interface SupportTicket {
  id: string;
  userId: string;
  user: string;
  subject: string;
  status: SupportTicketStatus;
  createdAt: string;
  category?: string;
  description?: string;
  assignedTo?: string;
}
export type SupportTicketStatus = 'Open' | 'In Progress' | 'Resolved' | 'Closed';


export interface RiskEntity {
  id: string;
  type: 'User' | 'Listing';
  riskScore: number;
  factors: string;
}

export interface AutomationRule {
  id: string;
  type: 'Auto-Renewal' | 'Auto-Archival' | 'Auto-Deletion';
  criteria: string;
  status: 'Active' | 'Inactive';
  impactedCount: number;
}

export interface ImpactedListing {
  id: string;
  title: string;
  status: string;
  nextAction: string;
  actionDate: string;
}

export interface ApiKey {
  id: string;
  key: string;
  status: 'active' | 'revoked';
  createdAt: string;
}

export interface AiModel {
  id: string;
  name: string;
  version?: string;
  status?: 'active' | 'deprecated';
  lastTrainingDate?: string;
  accuracy?: number;
  precision?: number;
}

export interface SystemNotification {
  id: string;
  type: string;
  subject: string;
  deliveryMethod: string;
  targetAudience: string;
  status: 'Active' | 'Scheduled' | 'Sent';
  engagementRate?: number;
}

export interface LanguageSetting {
  id: string;
  language: string;
  uiSupport: boolean;
  contentSupport: boolean;
  translationStatus: number;
}

export interface CurrencySetting {
  id: string;
  currency: string;
  code: string;
  status: 'Active' | 'Inactive';
  conversionRate: number;
}

export interface PaymentGateway {
  id: string;
  method: string;
  region: string;
  status: 'Active' | 'Disabled';
}

export interface ConversionSettings {
  baseCurrency: string;
  provider: string;
  apiKey: string;
}

export interface PerformanceAlert {
  id: string;
  service: string;
  metric: string;
  threshold: string;
  currentValue: string;
  status: 'Warning' | 'Critical';
}

export interface Alert {
    id: string;
    userId: string;
    alertType: string;
    severity: 'High' | 'Medium' | 'Low';
    timestamp: string;
    status: 'Open' | 'In Review' | 'Closed';
}

export interface Theme {
  id: string;
  name: string;
  imageUrl: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
}

export interface Level {
  name: string;
  description: string;
}

export type FamilyPermission = 'Full Access' | 'View Only' | 'Purchase Only';

export interface FamilyMember {
  id: string;
  name: string;
  email: string;
  permission: FamilyPermission;
}

export interface Referral {
  id: string;
  friendName: string;
  status: 'Pending' | 'Registered' | 'First Purchase';
  reward: number;
}

export interface UserSettings {
  isAnonymous: boolean;
}

export interface ShippingPreferences {
  defaultCarrier: string;
  handlingTime: number;
}

export interface LocalDeliverySettings {
  isEnabled: boolean;
  radius: number;
  fee: number;
  address?: string;
  hours?: string;
  instructions?: string;
}

export interface CrossPostSuggestion {
  id: string;
  type: 'category' | 'platform';
  name: string;
  insight: string;
  icon: React.ReactNode;
}

export type BoostType = 'Bump' | 'Feature';

export interface BoostRecord {
  id: string;
  listingName: string;
  boostType: BoostType;
  date: string;
  performance: string;
}

export interface CarouselSetting {
  id: string;
  name: string;
  description: string;
  excludedCategories: string[];
  algorithmSettings: {
    weights: number;
    timeDecay: string;
    diversity: string;
  };
  abTesting: {
    strategyB: string;
    trafficAllocation: number;
  };
  performance: {
    clicks: number;
    clicksChange: number;
    conversions: number;
    conversionsChange: number;
  };
}

export interface Dispute {
  id: string;
  transactionId: string;
  item: string;
  sellerOrBuyer: string;
  status: 'In Review' | 'Mediation' | 'Resolved';
}

export type PaymentMethod = 'Credit Card' | 'PayPal' | 'Local Payment' | 'UPI';

// FIX: Added Transaction type alias for Order.
export type Transaction = Order;

// FIX: Added Integration type for API Management page.
export interface Integration {
  id: string;
  name: string;
  type: string;
  status: 'Active' | 'Inactive';
}
