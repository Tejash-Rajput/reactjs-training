import React, { useMemo, useState } from "react";
import "./styles/styles.scss";
/**
 * App Component - Displays a searchable list of images.
 * @component
 * @returns {JSX.Element} The main application component.
 */
const App = () => {
  const [filter, setFilter] = useState("");
  /**
   * Generates a list of 10,000 images with unique IDs and names.
   * @type {Array<{ id: number, name: string, image: string }>}
   */
  const listOfImages = useMemo(() => {
    return Array.from({ length: 10_000 }, (_, i) => ({
      id: i + 1,
      name: `item ${i + 1}`,
      image: `https://picsum.photos/200/200?random=${i + 1}`,
    }));
  }, []);
  /**
   * Filters images based on the search input.
   * @type {Array<{ id: number, name: string, image: string }>}
   */
  const filteredItems = useMemo(() => {
    return listOfImages.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, listOfImages]);

  return (
    <div className="container">
      <input
        type="text"
        className="search-box"
        placeholder="Search items..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="item-list">
        {filteredItems.map((item) => (
          <div className="item-card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="item-image"
              loading="lazy"
            />
            <p className="item-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
