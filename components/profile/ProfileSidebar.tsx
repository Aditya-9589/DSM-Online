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
        <div className="card p-4">
            <ul className="space-y-2">
                {menu.map((item, i) => (
                    <li
                        key={i}
                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer text-sm font-medium transition
                            ${item.active
                                ? "bg-primary-gradient text-white"
                                : "hover:bg-gray-100 text-body"
                            }`}
                    >
                        {/* <item.icon size={18} /> */}
                        <Image
                            src={item.icon}
                            // src={item.active ? item.activeIcon : item.icon}
                            width={18}
                            height={18}
                            alt={item.label}
                        />
                        {item.label}
                    </li>
                ))}
            </ul>

            {/* Membership Banner */}
            <div className="mt-6">
                <Image
                    src="/images/poster.png"
                    width={300}
                    height={150}
                    alt="membership"
                    className="rounded-xl"
                />
            </div>
        </div>
    );
}
