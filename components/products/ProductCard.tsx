"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
    return (
        <div className="card p-4 group relative transition hover:-translate-y-1 hover:shadow-lg">

            {/* Discount Badge */}
            {product.discount && (
                <div className="absolute top-3 left-3 bg-primary-gradient text-white text-xs px-2 py-1 rounded-md font-semibold">
                    {product.discount}% OFF
                </div>
            )}

            {/* Wishlist */}
            <button className="absolute top-3 right-3 bg-white border border-[var(--border-light)] rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
                <Heart size={16} />
            </button>

            {/* Image */}
            <div className="relative w-full h-40 mb-4">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                />
            </div>

            {/* Title */}
            <h3 className="text-heading font-semibold text-sm line-clamp-2 mb-2">
                {product.title}
            </h3>

            {/* Price */}
            <div className="flex items-center gap-2 mb-4">
                <span className="text-heading font-bold text-base">
                    ₹{product.price}
                </span>

                {product.oldPrice && (
                    <span className="text-muted line-through text-sm">
                        ₹{product.oldPrice}
                    </span>
                )}
            </div>

            {/* Add To Cart */}
            <button className="w-full py-2 rounded-lg bg-primary-gradient text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                Add to Cart
            </button>
        </div>
    );
}