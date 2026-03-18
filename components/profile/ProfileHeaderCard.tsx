"use client";

import Image from "next/image";

export default function ProfileHeaderCard() {
    return (
        <div className="card relative overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[24px]">
            <div className="p-4 sm:p-5 md:p-8">
                {/* Top Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-5">
                    {/* Left */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-[var(--border-light)] shrink-0">
                            <Image
                                src="/images/user-profile.png"
                                width={64}
                                height={64}
                                alt="avatar"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Name + Badge */}
                        <div className="min-w-0">
                            <h2 className="text-heading text-base sm:text-lg font-semibold">
                                Aisha Sheikh
                            </h2>

                            <div className="flex items-center gap-2 mt-0.5 sm:mt-1">
                                <span className="text-muted text-[10px] sm:text-xs">
                                    Manage your detail with ease
                                </span>
                            </div>
                            <div className="flex items-start gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                                <span className="text-muted text-[10px] sm:text-xs shrink-0">
                                    Address: 
                                </span>
                                <span className="text-black text-xs sm:text-sm break-words">
                                    2118 Thornridge Cir. Syracuse, Connecticut 35679
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
