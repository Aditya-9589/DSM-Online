import {
    FeatureHighlights,
    ProfileSidebar,
    RelatedProducts,
    WishlistPanel,
} from "@/components/profile";

export default function MyWishlistPage() {
    return (
        <main className="bg-section py-4 sm:py-6 md:py-8">
            <div className="container-main py-4 sm:py-6 md:py-8">
                <p className="text-xs sm:text-sm text-gray-400 mb-4">
                    HOME &gt; MY ACCOUNT &gt;{" "}
                    <span className="text-orange-500">MY WISH LIST</span>
                </p>

                <div className="mb-5 md:mb-7">
                    <h1 className="text-heading text-2xl sm:text-3xl font-semibold">
                        My Account
                    </h1>
                    <div className="w-40 sm:w-48 h-1 bg-primary-gradient rounded-full mt-3" />
                </div>

                <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
                    <div className="col-span-12 lg:col-span-3 min-w-0">
                        <ProfileSidebar activeItem="My Wishlist" />
                    </div>

                    <div className="col-span-12 lg:col-span-9 min-w-0">
                        <WishlistPanel />
                    </div>
                </div>

                <div className="mt-6 md:mt-10">
                    <RelatedProducts />
                </div>

                <div className="mt-6 md:mt-10">
                    <FeatureHighlights />
                </div>
            </div>
        </main>
    );
}
