"use client";

import Image from "next/image";

type MenuItem = {
    label: string;
    icon: string;
    active?: boolean;
};

const menu: MenuItem[] = [
    { label: "Profile", icon: "/icons/profile-icons.png", active: true },
    { label: "View Invoices", icon: "/icons/view-incvoices-icon.png" },
    { label: "My Wishlist", icon: "/icons/mywishlist-icon.png" },
    { label: "My Order", icon: "/icons/myorder-icon.png" },
    { label: "Track My Order", icon: "/icons/track-order-icon.png" },
    { label: "Refer & Earn", icon: "/icons/refer-earn-icon.png" },
    { label: "Affiliate Dashboard", icon: "/icons/affiliate-dashboard-icon.png" },
    { label: "Membership", icon: "/icons/membership-icon.png" },
    { label: "Payments & Wallet", icon: "/icons/payments-wallet-icon.png" },
    { label: "Log Out", icon: "/icons/logout-icon.png" },
];

export default function ProfileSidebar() {
    return (
        <div className="card p-3 sm:p-4">
            <ul className="space-y-1 sm:space-y-2">
                {menu.map((item, i) => (
                    <li
                        key={i}
                        className={`flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 px-3 sm:px-5 rounded-[10px] sm:rounded-[12px] cursor-pointer text-xs sm:text-sm font-medium transition
                            ${item.active
                                ? "bg-primary-gradient text-white shadow-md"
                                : "hover:bg-gray-100 text-body"
                            }`}
                    >
                        <div className={`flex items-center justify-center shrink-0 ${item.active ? "brightness-0 invert" : ""}`}>
                            <Image
                                src={item.icon}
                                width={18}
                                height={18}
                                alt={item.label}
                                className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
                            />
                        </div>
                        {item.label}
                    </li>
                ))}
            </ul>

            {/* Membership Banner */}
            <div className="mt-4 sm:mt-6">
                <Image
                    src="/images/poster.png"
                    width={300}
                    height={150}
                    alt="membership"
                    className="rounded-xl w-full h-auto"
                />
            </div>
        </div>
    );
}
