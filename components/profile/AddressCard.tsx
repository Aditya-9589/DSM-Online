"use client";

import ProfileCardWrapper from "./ProfileCardWrapper";
import { MapPin, Edit, PlusSquare } from "lucide-react";

const addresses = [
    {
        id: 1,
        country: "India",
        state: "Madhya Pradesh",
        city: "Bhopal",
        ZipCode: "462001",
        street: "2118 Satya Kabeer E solution indrapuri C sector",
    },
];

export default function AddressCard() {
    const address = addresses[0];

    return (
        <ProfileCardWrapper
            title="Address"
            description="Manage your details with ease."
            action={
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <button className="bg-primary-gradient text-white flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition hover:shadow-md">
                        <PlusSquare size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span>Add Address</span>
                    </button>
                    <button className="bg-primary-gradient text-white flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition hover:shadow-md">
                        <span>Edit</span>
                        <Edit size={12} className="sm:w-3.5 sm:h-3.5" />
                    </button>
                </div>
            }
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-8 gap-x-6 sm:gap-x-10 text-sm mt-1 sm:mt-2">
                <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-muted">
                        <MapPin size={14} className="sm:w-4 sm:h-4 shrink-0" />
                        <p className="text-xs sm:text-sm">Country</p>
                    </div>
                    <p className="text-heading font-medium text-sm sm:text-base">{address.country}</p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-muted">
                        <MapPin size={14} className="sm:w-4 sm:h-4 shrink-0" />
                        <p className="text-xs sm:text-sm">State</p>
                    </div>
                    <p className="text-heading font-medium text-sm sm:text-base">{address.state}</p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-muted">
                        <MapPin size={14} className="sm:w-4 sm:h-4 shrink-0" />
                        <p className="text-xs sm:text-sm">City</p>
                    </div>
                    <p className="text-heading font-medium text-sm sm:text-base">{address.city}</p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-muted">
                        <MapPin size={14} className="sm:w-4 sm:h-4 shrink-0" />
                        <p className="text-xs sm:text-sm">Zip Code</p>
                    </div>
                    <p className="text-heading font-medium text-sm sm:text-base">{address.ZipCode}</p>
                </div>

                <div className="col-span-1 sm:col-span-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-muted">
                        <MapPin size={14} className="sm:w-4 sm:h-4 shrink-0" />
                        <p className="text-xs sm:text-sm">Street</p>
                    </div>
                    <p className="text-heading font-medium text-sm sm:text-base">{address.street}</p>
                </div>
            </div>
        </ProfileCardWrapper>
    );
}
