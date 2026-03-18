
// import ProfileSidebar from "@/components/profile/ProfileSidebar";
// import ProfileHeaderCard from "@/components/profile/ProfileHeaderCard";
// import PersonalInfoCard from "@/components/profile/PersonalInfoCard";
// import CompanyInfoCard from "@/components/profile/CompanyInfoCard";
// import AddressCard from "@/components/profile/AddressCard";
// import RelatedProducts from "@/components/profile/RelatedProducts";
// import FeatureHighlights from "@/components/profile/FeatureHighlights";

import { ProfileSidebar, ProfileHeaderCard, PersonalInfoCard, CompanyInfoCard, AddressCard, FeatureHighlights, RelatedProducts } from "@/components/profile";


export default function ProfilePage() {
    return (
        <main className="bg-section py-4 sm:py-6 md:py-8">
            {/* <div className="max-w-7xl mx-auto px-4"> */}
            <div className="container-main py-4 sm:py-6 md:py-8">
                {/* Breadcrumb */}
                <p className="text-xs sm:text-sm text-gray-400 mb-3 md:mb-4">
                    HOME &gt; MY ACCOUNT &gt;{" "}
                    <span className="text-orange-500">PROFILE</span>
                </p>

                {/* Grid Layout */}
                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {/* Sidebar */}
                    <div className="col-span-12 lg:col-span-3 min-w-0">
                        <ProfileSidebar />
                    </div>

                    {/* Right Content */}
                    <div className="col-span-12 lg:col-span-9 space-y-4 md:space-y-6 min-w-0">
                        <div className="mb-1 md:mb-2">
                            <h1 className="text-heading text-xl md:text-2xl font-bold inline-block pb-2 border-b-4 border-orange-500 min-w-[120px] md:min-w-[150px] max-w-full">
                                Profile
                            </h1>
                        </div>
                        <ProfileHeaderCard />
                        <PersonalInfoCard />
                        <CompanyInfoCard />
                        <AddressCard />
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-6 md:mt-10">
                    <RelatedProducts />
                </div>

                {/* Bottom Features */}
                <div className="mt-6 md:mt-10">
                    <FeatureHighlights />
                </div>
            </div>
        </main>
    );
}
