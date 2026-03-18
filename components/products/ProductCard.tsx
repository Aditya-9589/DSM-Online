"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

interface Product {
    id: number;
    title: string;
    price: number;
    oldPrice?: number;
    discount?: number;
    image: string;
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="card p-2.5 sm:p-3 md:p-4 relative rounded-[12px] sm:rounded-[14px] md:rounded-[16px] flex flex-col justify-between h-full">

            {/* Trending Badge */}
            <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-primary-gradient text-white text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg font-medium flex items-center gap-0.5 sm:gap-1 z-10">
                <Image src="/icons/trending-fire-icon.png" width={6} height={6} alt="trending" className="object-contain w-[5px] h-[5px] sm:w-[6px] sm:h-[6px]" />
                Trending
            </div>

            {/* Wishlist */}
            <button className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white border border-orange-200 text-orange-400 rounded-full p-1 sm:p-1.5 opacity-100 transition hover:bg-orange-50 z-10">
                <Heart size={10} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
            </button>

            {/* Image */}
            <div className="relative w-full h-28 sm:h-36 md:h-48 mb-2 sm:mb-3 md:mb-4 bg-white rounded-lg">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-2 sm:p-3 md:p-4"
                />
            </div>

            <div className="flex-grow flex flex-col">
                {/* Title & Rating */}
                <div className="flex justify-between items-start mb-1 sm:mb-2 gap-1 sm:gap-2">
                    <h3 className="text-heading font-semibold text-[11px] sm:text-xs md:text-sm line-clamp-2">
                        {product.title}
                    </h3>
                    <div className="flex text-yellow-400 text-[8px] sm:text-[10px] md:text-xs shrink-0 pt-0.5">
                        ★★★★★
                    </div>
                </div>

                {/* Categories */}
                <div className="flex gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <span className="text-[8px] sm:text-[10px] text-muted border border-[var(--border-light)] rounded px-1 sm:px-1.5 py-0.5">Category</span>
                    <span className="text-[8px] sm:text-[10px] text-muted border border-[var(--border-light)] rounded px-1 sm:px-1.5 py-0.5">Sub category</span>
                </div>

                {/* Description */}
                <p className="text-muted text-[9px] sm:text-[10px] md:text-[11px] line-clamp-2 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                    Bluetooth 4.0 Module NRF51822 lorem ipsum lorem ipsum lorem ipsum.
                </p>

                {/* Price & Action */}
                <div className="flex items-center justify-between mt-auto gap-1">
                    <div>
                        <p className="text-[8px] sm:text-[10px] text-muted mb-0.5">Price</p>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                            <span className="text-heading font-bold text-xs sm:text-sm md:text-base">
                                ₹{product.price}
                            </span>
                            {product.oldPrice && (
                                <span className="text-muted line-through text-[9px] sm:text-[10px] md:text-xs">
                                    ₹{product.oldPrice}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Add To Cart */}
                    <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-primary-gradient text-white text-[9px] sm:text-[10px] md:text-xs font-semibold transition hover:shadow-md shrink-0">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                        <span className="hidden sm:inline">Add To Cart</span>
                        <span className="sm:hidden">Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
}