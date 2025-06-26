import ProductCard from "@/components/ui/product-card";

export const metadata = {
  title: "Shop | Kemal Store",
  description: `Shop for e-ecommerce, selling products, and new productivity`,
};

// Mock products data
const mockProducts = [
  {
    id: "1",
    title: "Sample T-Shirt",
    description: "A comfortable cotton t-shirt",
    price: "29.99",
    featured: true,
    imageURLs: ["/logo.png"],
    category: "clothing",
  },
  {
    id: "2",
    title: "Running Shoes",
    description: "High-performance running shoes",
    price: "89.99",
    featured: false,
    imageURLs: ["/logo.png"],
    category: "footwear",
  },
  {
    id: "3",
    title: "Wireless Headphones",
    description: "Premium wireless headphones",
    price: "149.99",
    featured: true,
    imageURLs: ["/logo.png"],
    category: "electronics",
  },
  {
    id: "4",
    title: "Laptop Bag",
    description: "Durable laptop bag",
    price: "59.99",
    featured: false,
    imageURLs: ["/logo.png"],
    category: "accessories",
  },
];

const ShopPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {mockProducts?.map((product: any) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default ShopPage;