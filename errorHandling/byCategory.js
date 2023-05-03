function filterByCategory(products) {
    return function(category) {
      return products.filter(function(product) {
        if (product.category === category) {
          return true;
        }
      });
    }
  }
  
  
  const products = [{name:"shirt" , category: "clothing"},
  {name:"pant" , category: "clothing"},
  {name:"phone" , category: "gazet"},
  {name:"Tshirt" , category: "clothing"}];
  
  var clothingProducts = filterByCategory(products)("clothing");
  
  console.log(clothingProducts);