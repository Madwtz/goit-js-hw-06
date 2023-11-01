const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");
const totalCategories = categoryItems.length;
console.log("Number of categories: " + totalCategories);
 
categoryItems.forEach((category) => {
   
const categoryName = category.querySelector("h2").textContent;

   
const categoryElements = category.querySelectorAll("ul li");
const totalElements = categoryElements.length;

console.log("Category: " + categoryName);
console.log("Elements: " + totalElements);
});

