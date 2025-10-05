
import React, { useState, useEffect } from 'react';
// FIX: Corrected import paths for types.ts to resolve module loading errors.
import { Page, User, ListingDetails, Order, SupportTicket, RiskEntity, AutomationRule, ImpactedListing, ApiKey, AiModel, SystemNotification, LanguageSetting, CurrencySetting, PaymentGateway, ConversionSettings, PerformanceAlert, Alert as AdminAlert, Theme, PortfolioProject, Badge, Level, FamilyMember, Referral, Conversation, Message, Country, ShippingPreferences, LocalDeliverySettings, CrossPostSuggestion, BoostRecord } from './types.ts';

// FIX: Corrected mock data import names to camelCase and added missing mock data imports.
import { mockUsers, mockListings, mockOrders, mockSupportTickets, mockRiskEntities, mockAutomationRules, mockImpactedListings, mockApiKeys, mockAiModels, mockSystemNotifications, mockLanguageSettings, mockCurrencySettings, mockPaymentGateways, mockConversionSettings, mockPerformanceAlerts, mockAlerts as mockAdminAlerts, mockThemes, mockConversations, mockCountries, mockReferrals, mockCrossPostSuggestions, mockBoostHistory, mockCarouselSettings, mockCategories } from './mockData.ts';


import MarketingLandingPage from './components/pages/MarketingLandingPage.tsx';
import LoginPage from './components/auth/LoginPage.tsx';
import RegisterPage from './components/auth/RegisterPage.tsx';
import AccountRecoveryPage from './components/auth/AccountRecoveryPage.tsx';

import UserDashboardLayout from './components/dashboard/UserDashboardLayout.tsx';
import HomePage from './components/HomePage.tsx';
import ExplorePage from './components/pages/ExplorePage.tsx';
import MessagesPage from './components/pages/MessagesPage.tsx';
import ProfilePage from './components/pages/ProfilePage.tsx';
import SettingsPage from './components/pages/SettingsPage.tsx';
import AchievementsPage from './components/pages/AchievementsPage.tsx';
import ProfileCustomizationPage from './components/pages/ProfileCustomizationPage.tsx';
import ConnectionsPage from './components/pages/ConnectionsPage.tsx';
import FeedbackReportingPage from './components/pages/FeedbackReportingPage.tsx';
import ReferralPage from './components/pages/ReferralPage.tsx';
import FamilyAccountPage from './components/pages/FamilyAccountPage.tsx';
import AnonymousBrowsingPage from './components/pages/AnonymousBrowsingPage.tsx';
import ExpertiseTagsPage from './components/pages/ExpertiseTagsPage.tsx';
import ListsPage from './components/pages/ListsPage.tsx';

import AdminDashboardLayout from './components/dashboard/AdminDashboardLayout.tsx';
import ApiManagementPage from './components/admin/ApiManagementPage.tsx';
import AiModelManagementPage from './components/admin/AiModelManagementPage.tsx';
import UserFeedbackPage from './components/admin/UserFeedbackPage.tsx';
import RiskScoringPage from './components/admin/RiskScoringPage.tsx';
import BehavioralBiometricsPage from './components/admin/BehavioralBiometricsPage.tsx';
import LanguageSettingsPage from './components/admin/LanguageSettingsPage.tsx';
import CurrencySettingsPage from './components/admin/CurrencySettingsPage.tsx';
import SystemPerformancePage from './components/admin/SystemPerformancePage.tsx';
import NotificationManagementPage from './components/admin/NotificationManagementPage.tsx';
import RecommendationSettingsPage from './components/admin/RecommendationSettingsPage.tsx';
import TrustAndSafetyDashboard from './components/admin/TrustAndSafetyDashboard.tsx';


import SellerDashboardLayout from './components/dashboard/SellerDashboardLayout.tsx';
import ListingCreator from './components/ListingCreator.tsx';
import OrderManagementPage from './components/dashboard/OrderManagementPage.tsx';
import ListingAnalyticsPage from './components/dashboard/ListingAnalyticsPage.tsx';
import PromotionsPage from './components/dashboard/PromotionsPage.tsx';
import CrossPostingPage from './components/dashboard/CrossPostingPage.tsx';
import AutomatedLifecyclePage from './components/dashboard/AutomatedLifecyclePage.tsx';
import BulkListingManagementPage from './components/dashboard/BulkListingManagementPage.tsx';
import TemplatesDuplicationPage from './components/dashboard/TemplatesDuplicationPage.tsx';
import BoostListingsPage from './components/dashboard/BoostListingsPage.tsx';
import ShippingToolsPage from './components/dashboard/ShippingToolsPage.tsx';
import LocalDeliverySettingsPage from './components/dashboard/LocalDeliverySettingsPage.tsx';
import SchedulingPage from './components/dashboard/SchedulingPage.tsx';
import TransactionHistoryPage from './components/dashboard/TransactionHistoryPage.tsx';
import PersonalAnalyticsPage from './components/dashboard/PersonalAnalyticsPage.tsx';
import AccountHealthPage from './components/dashboard/AccountHealthPage.tsx';


import ListingDetailPage from './components/pages/ListingDetailPage.tsx';
import SearchResultsPage from './components/pages/SearchResultsPage.tsx';
import VisualSearchPage from './components/pages/VisualSearchPage.tsx';
import CartPage from './components/pages/CartPage.tsx';
import SecureCheckoutPage from './components/checkout/SecureCheckoutPage.tsx';
import ConfirmationPage from './components/checkout/ConfirmationPage.tsx';
import SellerProfilePage from './components/pages/SellerProfilePage.tsx';
import ComparePage from './components/pages/ComparePage.tsx';
import VirtualToursPage from './components/pages/VirtualToursPage.tsx';
import AboutPage from './components/pages/AboutPage.tsx';
import ContactPage from './components/pages/ContactPage.tsx';
import HelpCenterPage from './components/pages/HelpCenterPage.tsx';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage.tsx';
import TermsOfServicePage from './components/pages/TermsOfServicePage.tsx';
import TrustAndSafetyPage from './components/pages/TrustAndSafetyPage.tsx';
import CareersPage from './components/pages/CareersPage.tsx';
import PressPage from './components/pages/PressPage.tsx';

import OnboardingProfileSetup from './components/onboarding/OnboardingProfileSetup.tsx';
import OnboardingPersonalization from './components/onboarding/OnboardingPersonalization.tsx';
import OnboardingVerification from './components/onboarding/OnboardingVerification.tsx';

const App: React.FC = () => {
    // State Management
    const [currentPage, setCurrentPage] = useState<Page>('marketing-landing');
    const [pageData, setPageData] = useState<any>(null);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>(mockUsers);
    const [listings, setListings] = useState<ListingDetails[]>(mockListings);
    const [orders, setOrders] = useState<Order[]>(mockOrders);
    const [cart, setCart] = useState<ListingDetails[]>([]);
    const [lastOrder, setLastOrder] = useState<Order | null>(null);
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [onboardingStep, setOnboardingStep] = useState<number | null>(null);

    // Navigation Handler
    const handleNavigate = (page: Page, data?: any) => {
        setCurrentPage(page);
        setPageData(data);
        window.scrollTo(0, 0);
    };

    // Authentication Handlers
    // FIX: Changed handleLogin to accept a User object to match LoginPage component's onLogin prop.
    const handleLogin = (user: User) => {
        if (user) {
            setCurrentUser(user);
            handleNavigate(user.role === 'admin' ? 'admin/dashboard' : 'home');
        } else {
           alert("User not found");
        }
    };

    const handleLogout = () => {
        setCurrentUser(null);
        setIsAnonymous(false);
        handleNavigate('marketing-landing');
    };

    const handleRegister = (name: string, email: string) => {
        const newUser: User = {
            id: `user-${Date.now()}`, name, email,
            avatarUrl: `https://i.pravatar.cc/150?u=${email}`,
            role: 'user', favoriteIds: [], referralCode: `${name.toUpperCase()}${Date.now() % 1000}`,
            accountHealth: { score: 75, status: 'Good' },
            expertiseTags: [],
            country: { code: 'US', name: 'United States' },
            bio: "New ConnectSphere user!",
            // FIX: Added missing MOCK_THEMES data.
            theme: mockThemes[0],
            language: "English",
            notifications: { email: true, push: false },
            isPrivate: false,
            blockedUsers: [],
            title: "Enthusiast",
            about: "Just joined ConnectSphere!",
            stats: { earnings: 0, spending: 0, transactions: 0 },
            verification: { email: true, phone: false, id: false },
            badges: [],
            // FIX: Corrected mock data access.
            levels: { current: mockUsers[0].levels.all[0], all: mockUsers[0].levels.all },
            connections: { followers: [], following: [] },
            familyAccount: { members: [] },
            settings: { isAnonymous: false },
            shippingPreferences: { defaultCarrier: 'USPS', handlingTime: 2 },
            localDelivery: { isEnabled: false, radius: 0, fee: 0 },
            handle: name.toLowerCase(),
        };
        setUsers(prev => [...prev, newUser]);
        setCurrentUser(newUser);
        setOnboardingStep(1);
        handleNavigate('onboarding/profile-setup');
    };
    
    // Onboarding Handlers
    const handleNextOnboarding = () => {
        if(onboardingStep === 1) { setOnboardingStep(2); handleNavigate('onboarding/personalization'); }
        else if(onboardingStep === 2) { setOnboardingStep(3); handleNavigate('onboarding/verification'); }
    }
    const handleFinishOnboarding = () => {
        setOnboardingStep(null);
        handleNavigate('home');
    }

    // Listing & Order Handlers
    const handleAddListing = (newListing: Omit<ListingDetails, 'id'>) => {
        const fullListing: ListingDetails = { ...newListing, id: `listing-${Date.now()}` };
        setListings(prev => [fullListing, ...prev]);
        handleNavigate('profile'); // Navigate to profile to see the new listing
    };

    const handleUpdateListing = (updatedListing: ListingDetails) => {
        setListings(prev => prev.map(l => l.id === updatedListing.id ? updatedListing : l));
        handleNavigate('profile');
    };
    
    const handleDeleteListing = (listingId: string) => {
        if (window.confirm("Are you sure you want to delete this listing?")) {
            setListings(prev => prev.filter(l => l.id !== listingId));
        }
    };

    // FIX: Added handleAddToCart function to manage cart state.
    const handleAddToCart = (listing: ListingDetails) => {
        setCart(prev => [...prev, listing]);
        alert(`${listing.title} added to cart!`);
    };

    // FIX: Added handleToggleFavorite function.
    const handleToggleFavorite = (listingId: string) => {
        if (!currentUser) {
            alert("Please log in to save favorites.");
            return;
        }
        setCurrentUser(prevUser => {
            if (!prevUser) return null;
            const newFavoriteIds = prevUser.favoriteIds.includes(listingId)
                ? prevUser.favoriteIds.filter(id => id !== listingId)
                : [...prevUser.favoriteIds, listingId];
            return { ...prevUser, favoriteIds: newFavoriteIds };
        });
    };
    
     const handlePlaceOrder = (cartItems: ListingDetails[]) => {
        const newOrder: Order = {
            id: `#${Math.floor(Math.random() * 90000) + 10000}`,
            date: new Date().toISOString().split('T')[0],
            items: cartItems.map(item => ({ ...item, sellerId: listings.find(l => l.id === item.id)!.sellerId })),
            total: cartItems.reduce((sum, item) => sum + item.price, 0),
            status: 'Pending',
            deliveryStatus: 'Processing',
            escrowStatus: 'In Escrow',
            buyerId: currentUser!.id,
        };
        setOrders(prev => [newOrder, ...prev]);
        setListings(prev => prev.filter(l => !cartItems.some(ci => ci.id === l.id)));
        setCart([]);
        setLastOrder(newOrder);
        handleNavigate('confirmation');
    };


    const renderContent = () => {
        // Logged out / Public pages
        if (!currentUser && onboardingStep === null) {
            switch (currentPage) {
                case 'marketing-landing': return <MarketingLandingPage onNavigate={handleNavigate} />;
                // FIX: Corrected onLogin prop to pass a user object.
                case 'login': return <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} regularUser={users.find(u => u.role === 'user')} adminUser={users.find(u => u.role === 'admin')} />;
                case 'register': return <RegisterPage onRegister={handleRegister} onNavigate={handleNavigate} />;
                case 'account-recovery': return <AccountRecoveryPage />;
                default: return <MarketingLandingPage onNavigate={handleNavigate} />;
            }
        }

        // Onboarding Flow
        if (onboardingStep !== null) {
            switch (currentPage) {
                case 'onboarding/profile-setup': return <OnboardingProfileSetup onNext={handleNextOnboarding} />;
                case 'onboarding/personalization': return <OnboardingPersonalization onNext={handleNextOnboarding} />;
                case 'onboarding/verification': return <OnboardingVerification onFinish={handleFinishOnboarding} />;
                default: return <OnboardingProfileSetup onNext={handleNextOnboarding} />;
            }
        }
        
        const effectiveUser = isAnonymous ? null : currentUser;

        // Admin Dashboard
        if (currentUser?.role === 'admin' && currentPage.startsWith('admin/')) {
            return (
                // FIX: Added activePage prop.
                <AdminDashboardLayout currentUser={currentUser} onNavigate={handleNavigate} onLogout={handleLogout} activePage={currentPage}>
                    {(() => {
                        switch (currentPage) {
                            case 'admin/dashboard': return <TrustAndSafetyDashboard />;
                            // FIX: Added missing integrations prop.
                            case 'admin/api': return <ApiManagementPage apiKeys={mockApiKeys} integrations={[]} />;
                            case 'admin/models': return <AiModelManagementPage models={mockAiModels} />;
                            case 'admin/feedback': return <UserFeedbackPage tickets={mockSupportTickets} />;
                            case 'admin/risk': return <RiskScoringPage riskEntities={mockRiskEntities} />;
                            case 'admin/biometrics': return <BehavioralBiometricsPage alerts={mockAdminAlerts} />;
                            case 'admin/language': return <LanguageSettingsPage languages={mockLanguageSettings} onAddLanguage={() => {}} />;
                            case 'admin/currency': return <CurrencySettingsPage currencies={mockCurrencySettings} paymentGateways={mockPaymentGateways} conversionSettings={mockConversionSettings} onSave={() => {}} />;
                            case 'admin/performance': return <SystemPerformancePage alerts={mockPerformanceAlerts} />;
                            case 'admin/notifications': return <NotificationManagementPage notifications={mockSystemNotifications} />;
                            // FIX: Added missing settings prop.
                            case 'admin/recommendations': return <RecommendationSettingsPage settings={mockCarouselSettings} onSave={() => {}} />;
                            default: return <TrustAndSafetyDashboard />;
                        }
                    })()}
                </AdminDashboardLayout>
            );
        }

        // User/Seller Dashboard
        if (currentPage.startsWith('dashboard/')) {
            return (
                // FIX: Added activePage prop.
                <UserDashboardLayout currentUser={currentUser!} onNavigate={handleNavigate} onLogout={handleLogout} activePage={currentPage}>
                    {(() => {
                        switch (currentPage) {
                            // FIX: Corrected prop name from onAddListing to onCreateListing.
                            case 'dashboard/listings': return <ListingCreator currentUser={currentUser!} onCreateListing={handleAddListing} onUpdateListing={handleUpdateListing} listingToEdit={pageData as ListingDetails | undefined} />;
                            case 'dashboard/orders': return <OrderManagementPage orders={orders.filter(o => o.items.some(i => i.sellerId === currentUser!.id))} />;
                            case 'dashboard/analytics': return <ListingAnalyticsPage analytics={listings.filter(l => l.sellerId === currentUser!.id)} />;
                            // FIX: Added missing listings prop.
                            case 'dashboard/promotions': return <PromotionsPage listings={listings.filter(l => l.sellerId === currentUser!.id)} />;
                            // FIX: Added missing suggestions prop.
                            case 'dashboard/cross-posting': return <CrossPostingPage suggestions={mockCrossPostSuggestions} />;
                            // FIX: Added missing rules and impacted props.
                            case 'dashboard/lifecycle': return <AutomatedLifecyclePage rules={mockAutomationRules} impacted={mockImpactedListings} />;
                            case 'dashboard/bulk-management': return <BulkListingManagementPage />;
                            case 'dashboard/templates': return <TemplatesDuplicationPage listings={listings.filter(l => l.sellerId === currentUser!.id)} />;
                            case 'dashboard/boost': return <BoostListingsPage listings={listings.filter(l => l.sellerId === currentUser!.id)} boostHistory={mockBoostHistory} />;
                            case 'dashboard/shipping': return <ShippingToolsPage preferences={currentUser!.shippingPreferences} onSave={() => {}} />;
                            case 'dashboard/delivery': return <LocalDeliverySettingsPage settings={currentUser!.localDelivery} onSave={() => {}} />;
                            case 'dashboard/scheduling': return <SchedulingPage />;
                            case 'dashboard/transactions': return <TransactionHistoryPage transactions={orders} />;
                            case 'dashboard/personal-analytics': return <PersonalAnalyticsPage user={currentUser!} />;
                            case 'dashboard/account-health': return <AccountHealthPage user={currentUser!} />;
                            // FIX: Added missing props to HomePage
                            default: return <HomePage listings={listings} currentUser={effectiveUser} onNavigate={handleNavigate} categories={mockCategories} onToggleFavorite={handleToggleFavorite} />;
                        }
                    })()}
                </UserDashboardLayout>
            );
        }

        // Main App (Logged In)
        switch (currentPage) {
            // FIX: Added missing props to HomePage
            case 'home': return <HomePage listings={listings} currentUser={effectiveUser} onNavigate={handleNavigate} categories={mockCategories} onToggleFavorite={handleToggleFavorite} />;
            // FIX: Added missing onToggleFavorite prop.
            case 'explore': return <ExplorePage listings={listings} currentUser={effectiveUser} onNavigate={handleNavigate} onToggleFavorite={handleToggleFavorite}/>;
            // FIX: Added missing props.
            case 'messages': return <MessagesPage currentUser={currentUser!} conversations={mockConversations} allUsers={users} onSendMessage={() => {}} />;
            // FIX: Corrected props passed to ProfilePage.
            case 'profile': return <ProfilePage currentUser={currentUser!} userListings={listings.filter(l => l.sellerId === currentUser!.id)} onNavigate={handleNavigate} onEditListing={(l) => handleNavigate('dashboard/listings', l)} onDeleteListing={handleDeleteListing} />;
            case 'settings': return <SettingsPage user={currentUser!} onSave={() => {}} onNavigate={handleNavigate} />;
            case 'achievements': return <AchievementsPage user={currentUser!} />;
            case 'profile-customization': return <ProfileCustomizationPage currentTheme={currentUser!.theme} onSave={() => {}} />;
             // FIX: Corrected props passed to ProfilePage.
            case 'portfolio': return <ProfilePage currentUser={currentUser!} userListings={listings.filter(l => l.sellerId === currentUser!.id)} onNavigate={handleNavigate} onEditListing={(l) => handleNavigate('dashboard/listings', l)} onDeleteListing={handleDeleteListing} />;
            case 'connections': return <ConnectionsPage currentUser={currentUser!} users={users} onFollow={() => {}}/>;
            // FIX: Added missing submittedTickets prop.
            case 'feedback': return <FeedbackReportingPage currentUser={currentUser!} onSubmitTicket={() => {}} submittedTickets={mockSupportTickets.filter(t => t.userId === currentUser?.id)} />;
            case 'referral': return <ReferralPage user={currentUser!} referrals={mockReferrals} />;
            case 'family-account': return <FamilyAccountPage familyAccount={currentUser!.familyAccount} onInvite={() => {}} />;
            case 'anonymous-browsing': return <AnonymousBrowsingPage settings={currentUser!.settings} onSave={() => setIsAnonymous(!isAnonymous)} />;
            case 'expertise-tags': return <ExpertiseTagsPage currentUser={currentUser!} onSave={() => {}} />;
            case 'lists': return <ListsPage savedItems={listings.filter(l => currentUser!.favoriteIds.includes(l.id))} recentlyViewed={listings.slice(0,4)} />;

            case 'listing':
                const listing = listings.find(l => l.id === pageData);
                const seller = users.find(u => u.id === listing?.sellerId);
                // FIX: Added missing onToggleFavorite prop and defined handleAddToCart.
                return listing && seller ? <ListingDetailPage listing={listing} seller={seller} currentUser={effectiveUser} onNavigate={handleNavigate} onAddToCart={handleAddToCart} onToggleFavorite={handleToggleFavorite} /> : <div>Listing not found</div>;
            case 'seller-profile':
                const sellerProf = users.find(u => u.id === pageData);
                 // FIX: Corrected props for SellerProfilePage.
                return sellerProf ? <SellerProfilePage seller={sellerProf} sellerListings={listings.filter(l => l.sellerId === sellerProf.id)} currentUser={effectiveUser} onNavigate={handleNavigate} /> : <div>Seller not found</div>;
            // FIX: Added missing onToggleFavorite prop.
            case 'search': return <SearchResultsPage query={pageData as string} listings={listings} currentUser={effectiveUser} onNavigate={handleNavigate} onToggleFavorite={handleToggleFavorite} />;
            // FIX: Added missing onToggleFavorite prop.
            case 'visual-search': return <VisualSearchPage listings={listings} currentUser={effectiveUser} onNavigate={handleNavigate} onToggleFavorite={handleToggleFavorite} />;
            case 'cart': return <CartPage cart={cart} onUpdateQuantity={() => {}} onRemoveItem={() => {}} onNavigate={handleNavigate} />;
            case 'checkout': return <SecureCheckoutPage cart={cart} onPlaceOrder={() => handlePlaceOrder(cart)} selectedCountry={currentUser!.country} />;
            case 'confirmation': return <ConfirmationPage order={lastOrder} onNavigate={handleNavigate} />;
            case 'compare': return <ComparePage listings={listings.filter(l => (pageData as string[]).includes(l.id))} onNavigate={handleNavigate} />;
            case 'virtual-tours': return <VirtualToursPage />;
            
            case 'about': return <AboutPage />;
            case 'contact': return <ContactPage />;
            case 'help': return <HelpCenterPage />;
            case 'privacy': return <PrivacyPolicyPage />;
            case 'terms': return <TermsOfServicePage />;
            case 'trust-safety': return <TrustAndSafetyPage />;
            case 'careers': return <CareersPage />;
            case 'press': return <PressPage />;
            
             // FIX: Added missing props to HomePage
            default: return <HomePage listings={listings} currentUser={effectiveUser} onNavigate={handleNavigate} categories={mockCategories} onToggleFavorite={handleToggleFavorite}/>;
        }
    };

    return <div>{renderContent()}</div>;
};

export default App;
