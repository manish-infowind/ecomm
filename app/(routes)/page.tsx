import CarouselFeatured from "@/components/CarouselFeatured";
import { CarouselSpacing } from "@/components/CarouselSpacing";
import Footer from "@/components/footer";
import TitleHeader from "@/components/title-header";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

// Mock data
const mockCategories = [
  {
    id: "1",
    category: "clothing",
    billboardId: "1",
  },
  {
    id: "2",
    category: "footwear",
    billboardId: "2",
  },
  {
    id: "3",
    category: "electronics",
    billboardId: "3",
  },
];

const mockFeaturedProducts = [
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
    featured: true,
    imageURLs: ["/logo.png"],
    category: "footwear",
  },
];

const HomePage = () => {
  return (
    <>
      <Container>
        <Billboard />
      </Container>
      <TitleHeader title="Top Category" url="/shop" />
      <CarouselSpacing data={mockCategories} />
      <div className="mb-24">
        <TitleHeader title="Featured Products" url="/featured" />
        {mockFeaturedProducts.length > 0 && (
          <CarouselFeatured data={mockFeaturedProducts} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;