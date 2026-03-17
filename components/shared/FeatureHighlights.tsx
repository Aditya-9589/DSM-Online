import Image from "next/image";

const features = [
    {
        title: "Genuine Components",
        desc: "100% Original Products",
        icon: "/icons/genuine-components-icon.png",
    },
    {
        title: "Bulk Order Support",
        desc: "Special Pricing for Quantity",
        icon: "/icons/bulk-order-support-icon.png",
    },
    {
        title: "Technical Assistance",
        desc: "Expert Help Available",
        icon: "/icons/technical-assistance-icon.png",
    },
    {
        title: "Secure Payments",
        desc: "Safe & Encrypted Checkout",
        icon: "/icons/secure-payments-icon.png",
    },
];

export default function FeatureHighlights() {
    return (
        <section className="bg-white border border-[var(--border-light)] rounded-2xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {features.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-section rounded-xl flex items-center justify-center">
                            <Image src={item.icon} width={24} height={24} alt={item.title} />
                        </div>

                        <div>
                            <p className="text-heading font-semibold text-sm">{item.title}</p>
                            <p className="text-muted text-xs">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
