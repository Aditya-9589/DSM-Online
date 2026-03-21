"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

interface ProfileHeaderCardProps {
    fullName: string;
    description: string;
    address: string;
}

export default function ProfileHeaderCard({
    fullName,
    description,
    address,
}: ProfileHeaderCardProps) {
    return (
        <div className="card overflow-hidden rounded-[24px] border-white bg-white shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:rounded-[28px]">
            <div className="p-5 sm:p-6 md:p-9">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[#efe7db] sm:h-24 sm:w-24">
                        <Image
                            src="/images/user-profile.png"
                            width={96}
                            height={96}
                            alt="avatar"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="min-w-0">
                        <h2 className="text-3xl font-semibold leading-tight text-heading sm:text-[2.125rem]">
                            {fullName}
                        </h2>
                        <p className="mt-2 text-lg text-[#9a909d]">{description}</p>
                        <div className="mt-5 flex flex-wrap items-center gap-2 text-lg">
                            <span className="font-medium text-[#9a909d]">Address :</span>
                            <MapPin size={18} className="text-[#6e646f]" />
                            <span className="break-words font-medium text-[#3e3a3d]">
                                {address}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
