
import React from 'react';
// FIX: Corrected import path and types.
import { User, ListingDetails, Category, Order, Review, SupportTicket, Alert, PerformanceAlert, LanguageSetting, CurrencySetting, PaymentGateway, ConversionSettings, RiskEntity, SystemNotification, FamilyMember, Referral, ApiKey, AiModel, Theme, Level, Badge, Conversation, Message, Country, AutomationRule, ImpactedListing, CrossPostSuggestion, BoostRecord, CarouselSetting } from './types.ts';
// FIX: Added missing icon imports.
import { BriefcaseIcon, ComputerDesktopIcon, HomeIcon, MusicalNoteIcon, PaintBrushIcon, PuzzlePieceIcon, SparklesIcon } from './components/icons.tsx';

// FIX: Added missing properties to User objects to match the User type definition.
export const mockThemes: Theme[] = [
    { id: 'theme-1', name: 'Default', imageUrl: '/images/themes/default.png' },
];

const mockLevels: Level[] = [
    { name: 'Newcomer', description: 'Just starting out' },
    { name: 'Enthusiast', description: 'Active community member' }
];

const mockBadges: Badge[] = [
    { id: 'badge-1', name: 'First Sale', description: 'You made your first sale!', iconUrl: '/icons/badge1.png' }
];

export const mockUsers: User[] = [
  { id: 'user-1', name: 'Alice', email: 'alice@example.com', avatarUrl: 'https://i.pravatar.cc/150?u=alice', role: 'user', favoriteIds: ['listing-2'], country: { code: 'US', name: 'United States' }, referralCode: 'ALICE123', accountHealth: { score: 95, status: 'Excellent' }, expertiseTags: ['Vintage Guitars', 'Photography'], bio: 'Guitar enthusiast and photographer.', theme: mockThemes[0], language: 'en-US', notifications: { email: true, push: true }, isPrivate: false, blockedUsers: [], title: 'Pro Seller', about: 'Selling vintage gear for over 10 years.', stats: { earnings: 12500, spending: 3400, transactions: 42 }, verification: { email: true, phone: true, id: true }, badges: mockBadges, levels: { current: mockLevels[1], all: mockLevels }, connections: { followers: ['user-2'], following: [] }, familyAccount: { members: [] }, settings: { isAnonymous: false }, shippingPreferences: { defaultCarrier: 'UPS', handlingTime: 1 }, localDelivery: { isEnabled: true, radius: 10, fee: 5 }, handle: 'alice_g' },
  { id: 'user-2', name: 'Bob', email: 'bob@example.com', avatarUrl: 'https://i.pravatar.cc/150?u=bob', role: 'user', favoriteIds: [], country: { code: 'CA', name: 'Canada' }, referralCode: 'BOB456', accountHealth: { score: 88, status: 'Good' }, expertiseTags: ['DIY Electronics'], bio: 'Maker and tinkerer.', theme: mockThemes[0], language: 'en-US', notifications: { email: true, push: false }, isPrivate: false, blockedUsers: [], title: 'Collector', about: 'Loves collecting rare electronic components.', stats: { earnings: 2300, spending: 5600, transactions: 25 }, verification: { email: true, phone: false, id: false }, badges: [], levels: { current: mockLevels[0], all: mockLevels }, connections: { followers: [], following: ['user-1'] }, familyAccount: { members: [] }, settings: { isAnonymous: false }, shippingPreferences: { defaultCarrier: 'Canada Post', handlingTime: 2 }, localDelivery: { isEnabled: false, radius: 0, fee: 0 }, handle: 'bob_builds' },
  { id: 'admin-1', name: 'Charlie', email: 'charlie@example.com', avatarUrl: 'https://i.pravatar.cc/150?u=charlie', role: 'admin', favoriteIds: [], country: { code: 'GB', name: 'United Kingdom' }, referralCode: 'CHARLIE789', accountHealth: { score: 100, status: 'Excellent' }, expertiseTags: ['System Admin', 'Security'], bio: 'Keeping ConnectSphere safe.', theme: mockThemes[0], language: 'en-GB', notifications: { email: true, push: true }, isPrivate: true, blockedUsers: [], title: 'Lead Admin', about: 'Lead administrator for ConnectSphere platform.', stats: { earnings: 0, spending: 0, transactions: 0 }, verification: { email: true, phone: true, id: true }, badges: [], levels: { current: mockLevels[1], all: mockLevels }, connections: { followers: [], following: [] }, familyAccount: { members: [] }, settings: { isAnonymous: false }, shippingPreferences: { defaultCarrier: 'Royal Mail', handlingTime: 1 }, localDelivery: { isEnabled: false, radius: 0, fee: 0 }, handle: 'charlie_admin' },
];

const mockReviews: Review[] = [
    { id: 'review-1', author: 'Dave', authorAvatar: 'https://i.pravatar.cc/150?u=dave', rating: 5, text: 'Amazing guitar, sounds incredible!', date: '2023-10-15' },
    { id: 'review-2', author: 'Eve', authorAvatar: 'https://i.pravatar.cc/150?u=eve', rating: 4, text: 'Great condition, but shipping was a bit slow.', date: '2023-10-12' },
];

export const mockListings: ListingDetails[] = [
  { id: 'listing-1', title: 'Vintage 1980s Fender Stratocaster', description: 'A beautiful vintage Strat in excellent condition. All original parts. Comes with a hardshell case.', price: 1800, category: 'Musical Instruments', tags: ['guitar', 'vintage', 'fender', 'electric'], imageUrls: ['/images/guitar.jpg'], sellerId: 'user-1', sellerUsername: 'Alice', quantity: 1, country: 'US', reviews: mockReviews, rating: 4.5, reviewCount: 2 },
  { id: 'listing-2', title: 'Mid-Century Modern Armchair', description: 'Stylish and comfortable armchair from the 1960s. Upholstery is in great shape.', price: 450, category: 'Home & Garden', tags: ['furniture', 'vintage', 'chair', 'mid-century'], imageUrls: ['/images/chair.jpg'], sellerId: 'user-2', sellerUsername: 'Bob', quantity: 1, country: 'CA', reviews: [], rating: 0, reviewCount: 0 },
  { id: 'listing-3', title: 'Apple MacBook Pro 14" (2021)', description: 'M1 Pro chip, 16GB RAM, 512GB SSD. Barely used, like new condition.', price: 1500, category: 'Electronics', tags: ['laptop', 'apple', 'macbook', 'tech'], imageUrls: ['/images/laptop.jpg'], sellerId: 'user-1', sellerUsername: 'Alice', quantity: 1, country: 'US', reviews: [], rating: 0, reviewCount: 0 },
  { id: 'listing-4', title: 'Designer Leather Jacket', description: 'High-quality leather jacket, perfect for any season. Size Medium.', price: 250, category: 'Fashion', tags: ['jacket', 'fashion', 'leather', 'clothing'], imageUrls: ['/images/jacket.jpg'], sellerId: 'user-2', sellerUsername: 'Bob', quantity: 1, country: 'CA', reviews: [], rating: 0, reviewCount: 0 },
];

// FIX: Corrected icon prop to be a ReactNode.
export const mockCategories: Category[] = [
  { name: 'Electronics', icon: <ComputerDesktopIcon className="w-8 h-8"/> },
  { name: 'Fashion', icon: <BriefcaseIcon className="w-8 h-8"/> },
  { name: 'Home & Garden', icon: <HomeIcon className="w-8 h-8"/> },
  { name: 'Musical Instruments', icon: <MusicalNoteIcon className="w-8 h-8"/> },
  { name: 'Sports & Outdoors', icon: <PuzzlePieceIcon className="w-8 h-8"/> },
  { name: 'Collectibles & Art', icon: <PaintBrushIcon className="w-8 h-8"/> },
];

// FIX: Added missing properties to Order objects.
export const mockOrders: Order[] = [
    { id: 'order-1', date: '2023-10-20', items: [mockListings[0]], total: 1800, status: 'Shipped', buyerId: 'user-2', escrowStatus: 'Released', deliveryStatus: 'Shipped' },
    { id: 'order-2', date: '2023-10-22', items: [mockListings[3]], total: 250, status: 'Delivered', buyerId: 'user-1', escrowStatus: 'Released', deliveryStatus: 'Delivered' },
    { id: 'order-3', date: '2023-10-25', items: [mockListings[1]], total: 450, status: 'Pending', buyerId: 'user-1', escrowStatus: 'In Escrow', deliveryStatus: 'Processing' },
];

// FIX: Added missing 'user' property.
export const mockSupportTickets: SupportTicket[] = [
    { id: 'ticket-1', userId: 'user-1', user: 'Alice', subject: 'Late Shipment', status: 'Open', createdAt: '2023-10-24', category: 'Shipping' },
    { id: 'ticket-2', userId: 'user-2', user: 'Bob', subject: 'Question about item', status: 'Closed', createdAt: '2023-10-21', category: 'General Inquiry' },
];

// FIX: Corrected Alert object structure.
export const mockAlerts: Alert[] = [
    { id: 'alert-1', userId: 'user-2', alertType: 'HighRiskTransaction', severity: 'High', timestamp: new Date().toISOString(), status: 'Open' },
];

// FIX: Corrected PerformanceAlert object structure.
export const mockPerformanceAlerts: PerformanceAlert[] = [
    { id: 'perf-alert-1', service: 'API Gateway', metric: 'P99 Latency', currentValue: '500ms', threshold: '400ms', status: 'Critical' },
];

// FIX: Corrected LanguageSetting object structure.
export const mockLanguageSettings: LanguageSetting[] = [
    { id: 'lang-1', language: 'English (US)', uiSupport: true, contentSupport: true, translationStatus: 100 },
    { id: 'lang-2', language: 'Spanish (Spain)', uiSupport: true, contentSupport: false, translationStatus: 85 },
];

// FIX: Corrected CurrencySetting object structure.
export const mockCurrencySettings: CurrencySetting[] = [
    { id: 'curr-1', currency: 'US Dollar', code: 'USD', status: 'Active', conversionRate: 1.00 },
    { id: 'curr-2', currency: 'Euro', code: 'EUR', status: 'Active', conversionRate: 0.92 },
];

// FIX: Corrected PaymentGateway object structure.
export const mockPaymentGateways: PaymentGateway[] = [
    { id: 'pg-1', method: 'Stripe', region: 'Global', status: 'Active' },
    { id: 'pg-2', method: 'PayPal', region: 'Global', status: 'Disabled' },
];

// FIX: Corrected ConversionSettings object structure.
export const mockConversionSettings: ConversionSettings = {
    provider: 'OpenExchangeRates',
    baseCurrency: 'USD',
    apiKey: '****************',
};

// FIX: Corrected RiskEntity object structure.
export const mockRiskEntities: RiskEntity[] = [
    { id: 'user-2', type: 'User', riskScore: 78, factors: 'Multiple failed login attempts.' },
];

// FIX: Corrected SystemNotification object structure.
export const mockSystemNotifications: SystemNotification[] = [
    { id: 'notif-1', type: 'System Announcement', subject: 'Scheduled Maintenance', deliveryMethod: 'Email, Push', targetAudience: 'All Users', status: 'Sent' },
];

// FIX: Corrected FamilyMember object structure.
export const mockFamilyMembers: FamilyMember[] = [
    { id: 'fam-member-1', name: 'Alice Jr.', email: 'alicejr@example.com', permission: 'Purchase Only' },
];

// FIX: Corrected Referral object structure.
export const mockReferrals: Referral[] = [
    { id: 'ref-1', friendName: 'user-2', status: 'First Purchase', reward: 25 },
];

export const mockApiKeys: ApiKey[] = [
    { id: 'key-1', key: 'cs_live_...', status: 'active', createdAt: '2023-01-01' },
];

export const mockAiModels: AiModel[] = [
    { id: 'model-1', name: 'gemini-2.5-flash', version: '1.0', status: 'active', lastTrainingDate: '2023-10-01', accuracy: 98.5, precision: 99.2 },
];

// FIX: Added missing mock data exports.
export const mockAutomationRules: AutomationRule[] = [
    { id: 'rule-1', type: 'Auto-Archival', criteria: 'Inactive for 90 days', status: 'Active', impactedCount: 12 },
];
export const mockImpactedListings: ImpactedListing[] = [
    { id: 'listing-x', title: 'Old Concert T-Shirt', status: 'Inactive', nextAction: 'Archive', actionDate: '2023-11-15' },
];
export const mockConversations: Conversation[] = [
    { id: 'conv-1', participants: [mockUsers[0], mockUsers[1]], messages: [{id: 'msg-1', senderId: 'user-1', text: 'Hi!', timestamp: '2023-10-26T10:00:00Z'}], unreadCount: 1 },
];
export const mockCountries: Country[] = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
];
export const mockCrossPostSuggestions: CrossPostSuggestion[] = [
    { id: 'cp-1', type: 'platform', name: 'eBay', insight: 'Vintage items sell well here.', icon: <SparklesIcon className="w-5 h-5" /> },
];
export const mockBoostHistory: BoostRecord[] = [
    { id: 'boost-1', listingName: 'Vintage 1980s Fender Stratocaster', boostType: 'Feature', date: '2023-10-20', performance: '+300% Views' },
];
export const mockCarouselSettings: CarouselSetting[] = [
    { id: 'carousel-1', name: 'Homepage Featured', description: 'Main carousel on the homepage', excludedCategories: [], algorithmSettings: { weights: 0.7, timeDecay: '24h', diversity: 'medium' }, abTesting: { strategyB: 'New Items First', trafficAllocation: 50 }, performance: { clicks: 1024, clicksChange: 5, conversions: 128, conversionsChange: -2 } },
];
