"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";

export interface WishlistProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    oldPrice?: number;
    image: string;
}

interface WishlistItemCardProps {
    product: WishlistProduct;
}

export default function WishlistItemCard({
    product,
}: WishlistItemCardProps) {
    return (
        <article className="card p-5 sm:p-6 md:p-8 rounded-[20px] md:rounded-[28px]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 md:gap-8">
                <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px] rounded-[18px] border border-[var(--border-light)] bg-white shrink-0 overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-3 sm:p-4 md:p-5"
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-heading text-xl sm:text-2xl md:text-[2.1rem] font-semibold leading-tight">
                        {product.title}
                    </h3>

                    <p className="text-heading/80 text-sm sm:text-base md:text-[1.15rem] leading-relaxed mt-3 line-clamp-2">
                        {product.description}
                    </p>

                    <div className="flex items-end gap-2 sm:gap-3 mt-4">
                        <span className="text-[#E47B25] text-2xl sm:text-[2rem] font-bold leading-none">
                            {"\u20B9"}{product.price}
                        </span>
                        {product.oldPrice && (
                            <span className="text-muted text-lg sm:text-xl line-through leading-none">
                                {"\u20B9"}{product.oldPrice}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-3 mt-5">
                        <button
                            type="button"
                            className="bg-primary-gradient text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition hover:shadow-md"
                        >
                            Add To Cart
                        </button>

                        <button
                            type="button"
                            aria-label={`Remove ${product.title} from wishlist`}
                            className="text-[#7A7A7A] hover:text-[#BA460F] transition"
                        >
                            <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
