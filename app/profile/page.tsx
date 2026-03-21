
import {
    FeatureHighlights,
    ProfileEditableSections,
    ProfileSidebar,
    RelatedProducts,
} from "@/components/profile";


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
                        <ProfileSidebar activeItem="Profile" />
                    </div>

                    {/* Right Content */}
                    <div className="col-span-12 lg:col-span-9 min-w-0">
                        <div className="rounded-[28px] bg-[#f8f7f5] p-4 sm:p-6 md:rounded-[34px] md:p-8">
                            <div className="mb-1 md:mb-2">
                                <h1 className="text-heading inline-block min-w-[120px] max-w-full border-b-4 border-orange-500 pb-2 text-2xl font-semibold md:min-w-[180px] md:text-[2.125rem]">
                                    Profile
                                </h1>
                            </div>
                            <ProfileEditableSections />
                        </div>
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
