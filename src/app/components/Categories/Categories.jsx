import React from 'react';


function Categories() {
  const { selectedCategory, updateSelectedCategory } = useFoodContext();
  const allCategories = ["Minutas", "Ensaladas", "Platos", "Guarniciones"];

  return (
    <section className="flex gap-4 justify-center items-center pt-8">
      {allCategories.map((category, index) => (
        <button
          key={index}
          className={selectedCategory === category.toLowerCase() ? "active" : ""}
          onClick={() => updateSelectedCategory(category.toLowerCase())}
        >
          {category}
        </button>
      ))}
    </section>
  );
}

export default Categories;
