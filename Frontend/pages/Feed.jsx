import { useState } from "react";
import Filters from "../Components/Filters";
import ProductCard from "../Components/ProductCard";

// Place your allProducts array here
const allProducts = [
  {
    id: 1,
    name: "Eco Bottle",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1512446733611-9099a758e66e?w=360&q=80",
    category: "Bottles"
  },
  {
    id: 2,
    name: "Reusable Bag",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1529612700005-c83b8e54a3a3?w=360&q=80",
    category: "Bags"
  },
  {
    id: 3,
    name: "Eco Straw",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1562059390-a761a084768c?w=360&q=80",
    category: "Straws"
  }
];


export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="feed">
      <aside className="filters-container">
        <Filters selected={selectedCategory} setSelected={setSelectedCategory} />
      </aside>
      <main className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
