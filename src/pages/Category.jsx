import React from "react";

const categoryData = [
  {
    name: "Menswear",
  },
  {
    name: "Beauty",
  },
  {
    name: "Accessories",
  },
  {
    name: "Footwear",
  },
  {
    name: "Ethnic Wear",
  },
  {
    name: "Home Decor",
  },
];

function Category() {
  return (
    <>
      <div className="category-container">
        <h3>Categories</h3>
        <div className="category-cards">
          {categoryData.map((cat, i) => {
            return (
              <div className="card" key={i}>
                <h5> {cat.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Category;
