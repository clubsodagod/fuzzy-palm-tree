// Enum for Partnership Interest
export enum PartnershipInterest {
    Buyer = 'Buyer',
    Seller = 'Seller',
    JointVenture = 'JointVenture',
}

  // Buyer Section
export interface BuyerSection {
    propertyTypes: string[]; // e.g., ['Single-family homes', 'Multifamily units']
    preferredLocations: string[];
    investmentCriteria: {
        budgetRange: string;
        minUnits: number;
        maxUnits: number;
        expectedRateOfReturn: string;
        specificRequirements?: string;
    };
    fundingPreApproved: boolean;
}

  // Seller Section
export interface SellerSection {
    propertyType: string;
    location: string;
    propertyDetails: {
        sizeSqFt: number;
        numberOfUnits: number;
        occupancyRate: number;
        currentRentRates: string;
        askingPrice: string;
        existingLiensOrMortgages: boolean;
    };
    sellerFinancingOpen: boolean;
}

  // Joint Venture Section
export interface JointVentureSection {
    investmentStructure: string[]; // e.g., ['Equity Partnership', 'Profit Sharing']
    capitalContribution: string;
    investmentTimeHorizon: string;
    specificProjectInMind: boolean;
    projectDetails?: string; // Only if specificProjectInMind is true
}

  // Main Form Interface
export interface RealEstatePartnershipForm {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    companyName?: string; // Optional
    rolePosition: string;
    partnershipInterest: PartnershipInterest[];
    buyerSection?: BuyerSection; // Optional, based on partnershipInterest
    sellerSection?: SellerSection; // Optional, based on partnershipInterest
    jointVentureSection?: JointVentureSection; // Optional, based on partnershipInterest
    additionalInformation?: string; // Optional
}
