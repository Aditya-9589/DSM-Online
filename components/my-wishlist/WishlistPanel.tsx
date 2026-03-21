import WishlistItemCard, { WishlistProduct } from "./WishlistItemCard";

const wishlistProducts: WishlistProduct[] = [
    {
        id: 1,
        title: "Bluetooth HC-05 Wireless UART Module",
        description: "Bluetooth 4.0 Module NRF51822 lorem ipsum lorem ipsum lorem ipsum lorem ipsum...",
        price: 273,
        oldPrice: 473,
        image: "/images/mywishlist-image.png",
    },
    {
        id: 2,
        title: "Bluetooth HC-05 Wireless UART Module",
        description: "Bluetooth 4.0 Module NRF51822 lorem ipsum lorem ipsum lorem ipsum lorem ipsum...",
        price: 273,
        oldPrice: 473,
        image: "/images/mywishlist-image.png",
    },
    {
        id: 3,
        title: "Bluetooth HC-05 Wireless UART Module",
        description: "Bluetooth 4.0 Module NRF51822 lorem ipsum lorem ipsum lorem ipsum lorem ipsum...",
        price: 273,
        oldPrice: 473,
        image: "/images/mywishlist-image.png",
    },
    {
        id: 4,
        title: "Bluetooth HC-05 Wireless UART Module",
        description: "Bluetooth 4.0 Module NRF51822 lorem ipsum lorem ipsum lorem ipsum lorem ipsum...",
        price: 273,
        oldPrice: 473,
        image: "/images/mywishlist-image.png",
    },
];

export default function WishlistPanel() {
    return (
        <section className="card p-5 sm:p-6 md:p-8 lg:p-10 rounded-[20px] md:rounded-[28px]">
            <div className="mb-6 md:mb-8">
                <h2 className="text-heading text-2xl sm:text-3xl font-semibold">
                    My Wish List
                </h2>
                <div className="w-36 sm:w-44 h-1 bg-primary-gradient rounded-full mt-4" />
            </div>

            <div className="space-y-5 md:space-y-7">
                {wishlistProducts.map((product) => (
                    <WishlistItemCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
