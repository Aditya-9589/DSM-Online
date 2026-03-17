import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        title: "Arduino UNO R3 Original Board",
        price: 499,
        oldPrice: 699,
        discount: 30,
        image: "/images/product-image.png",
    },
    {
        id: 2,
        title: "ESP32 WiFi + Bluetooth Module",
        price: 299,
        oldPrice: 399,
        discount: 20,
        image: "/images/product-image.png",
    },
    {
        id: 3,
        title: "Raspberry Pi 4 Model B",
        price: 5499,
        oldPrice: 5999,
        discount: 10,
        image: "/images/product-image.png",
    },
    {
        id: 4,
        title: "16x2 LCD Display Module",
        price: 149,
        oldPrice: 199,
        discount: 25,
        image: "/images/product-image.png",
    },
];

export default function RelatedProducts() {
    return (
        <section>
            <h2 className="text-heading text-xl font-semibold mb-6">
                Related Products
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}