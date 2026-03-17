"use client";

import Image from "next/image";

export default function ProfileHeaderCard() {
    return (
        <div className="card relative overflow-hidden">
            {/* Gradient Top Strip */}
            <div className="h-2 bg-primary-gradient" />

            <div className="p-5 md:p-6">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="w-16 h-16 rounded-full overflow-hidden border border-[var(--border-light)]">
                            <Image
                                src="/images/user-profile.png"
                                width={64}
                                height={64}
                                alt="avatar"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Name + Badge */}
                        <div>
                            <h2 className="text-heading text-lg font-semibold">
                                Aisha Sheikh
                            </h2>

                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-muted text-xs">
                                    Manage your detail with ease
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-muted text-xs">
                                    Address: 
                                        <span className="text-black text-sm" > 
                                            2118 Thornridge Cir. Syracuse, Connecticut 35679
                                        </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Wallet */}
                    {/* <div className="bg-section rounded-xl px-5 py-3 flex items-center gap-6">
                        <div>
                            <p className="text-muted text-xs">Wallet Coins</p>
                            <p className="text-heading font-semibold text-base">2450</p>
                        </div>

                        <div className="w-px h-10 bg-[var(--border-light)]" />

                        <div>
                            <p className="text-muted text-xs">Total Orders</p>
                            <p className="text-heading font-semibold text-base">32</p>
                        </div>

                        <div className="w-px h-10 bg-[var(--border-light)]" />

                        <div>
                            <p className="text-muted text-xs">Wishlist</p>
                            <p className="text-heading font-semibold text-base">12</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
