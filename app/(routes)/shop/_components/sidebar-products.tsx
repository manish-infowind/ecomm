import SidebarItems from "./sidebar-items";
import PriceInput from "./price-input";

// Mock data
const mockCategories = [
  {
    id: "1",
    category: "clothing",
  },
  {
    id: "2",
    category: "footwear",
  },
  {
    id: "3",
    category: "electronics",
  },
];

const mockProducts = [
  {
    id: "1",
    price: "29.99",
    finalPrice: 0,
  },
  {
    id: "2",
    price: "89.99",
    finalPrice: 79.99,
  },
  {
    id: "3",
    price: "149.99",
    finalPrice: 0,
  },
];

const SidebarProducts = () => {
  return (
    <div className="w-1/6 max-sm:w-full p-4 flex flex-col gap-y-1">
      <p className="font-semibold mt-1">Category</p>
      <SidebarItems category={mockCategories} />
      <PriceInput data={mockProducts} />
    </div>
  );
};

export default SidebarProducts;