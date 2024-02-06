function Categories() {
  const {selectedCategory, updateSelectedCategory} = useFoodContext();
  const allCategories = ["Minutas", "Ensaladas", "Platos", "Guarniciones"];

  return (
    <section className="flex items-center justify-center gap-4 pt-8">
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
