"use client";

import ProfileCardWrapper from "./ProfileCardWrapper";
import Image from "next/image";

const addresses = [
    {
        id: 1,
        country: "India",
        state: "Madhya Pradesh",
        city: "Bhopal",
        ZipCode: "462001",
        street: "2118 Satya Kabir E solution, indrapuri, C sector",
        // name: "Aisha Sheikh",
        // phone: "+91 9876543210",
        // address:
        //     "Plot no 3 -113 R3 ground floor, C-sector, Indrapuri, Bhopal, Madhya Pradesh 462022",
    },
    // {
    //     id: 2,
    //     name: "Office Address",
    //     phone: "+91 9123456789",
    //     address:
    //         "DSM Electro Pvt Ltd, Zone-2 MP Nagar, Near Jyoti Talkies, Bhopal, Madhya Pradesh",
    // },
];

export default function AddressCard() {
    return (
        <ProfileCardWrapper
            title="Address"
            action={
                <button className="bg-primary-gradient text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:opacity-90 transition">
                    + Add New
                </button>
            }
        >
            {/* Address Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {addresses.map((item) => (
                    <div
                        key={item.id}
                        className="border border-[var(--border-light)] rounded-[14px] p-4 bg-white relative hover:shadow-sm transition"
                    >
                        {/* Actions */}
                        <div className="absolute top-3 right-3 flex gap-2">
                            <button className="p-1 hover:bg-gray-100 rounded transition">
                                <Image
                                    src="/icons/edit-icon.png"
                                    width={16}
                                    height={16}
                                    alt="edit"
                                />
                            </button>

                            <button className="p-1 hover:bg-gray-100 rounded transition">
                                <Image
                                    src="/icons/delete-icon.png"
                                    width={16}
                                    height={16}
                                    alt="delete"
                                />
                            </button>
                        </div>

                        {/* Content */}
                        <div>
                            <p className="text-muted text-xs mb-1">Country</p>
                            <p className="text-heading font-medium text-sm">
                                {item.country}
                            </p>

                            <p className="text-muted text-xs mb-1">State</p>
                            <p className="text-heading font-medium text-sm">
                                {item.state}
                            </p>
                        </div>

                        <div>
                            <p className="text-muted text-xs mb-1">City</p>
                            <p className="text-heading font-medium text-sm">
                                {item.city}
                            </p>

                            <p className="text-muted text-xs mb-1">Zip Code</p>
                            <p className="text-heading font-medium text-sm">
                                {item.ZipCode}
                            </p>
                        </div>

                        <div>
                            <p className="text-muted text-xs mb-1">Street</p>
                            <p className="text-heading font-medium text-sm">
                                {item.street}
                            </p>
                        </div>

                        {/* <p className="text-heading font-semibold text-sm mb-1">
                            {item.name}
                        </p> */}

                        {/* <p className="text-body text-sm mb-2">{item.phone}</p> */}

                        {/* <p className="text-muted text-sm leading-relaxed">{item.address}</p> */}
                    </div>
                ))}
            </div>
        </ProfileCardWrapper>
    );
}
