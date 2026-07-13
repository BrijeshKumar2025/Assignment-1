let products = [
  { productid: 501, title: "Leather Wallet", price: 45.00, category: "Fashion", rating: 4.2, isFeatured: true },
  { productid: 502, title: "Wireless Earbuds", price: 85.00, category: "Electronics", rating: 4.9, isFeatured: true },
  { productid: 503, title: "Smart Watch", price: 220.00, category: "Electronics", rating: 4.6, isFeatured: true },
  { productid: 504, title: "Noise Cancelling Headphones", price: 150.00, category: "Electronics", rating: 4.4, isFeatured: false },
  { productid: 505, title: "Cheap Charging Cable", price: 12.00, category: "Electronics", rating: 2.8, isFeatured: false },
  { productid: 506, title: "Gaming Mouse", price: 60.00, category: "Electronics", rating: 4.7, isFeatured: true },
  { productid: 507, title: "Coffee Maker", price: 110.00, category: "Home & Kitchen", rating: 4.3, isFeatured: true },
  { productid: 508, title: "Blender", price: 95.00, category: "Home & Kitchen", rating: 3.9, isFeatured: false },
  { productid: 509, title: "Air Fryer", price: 130.00, category: "Home & Kitchen", rating: 4.8, isFeatured: true },
  { productid: 510, title: "Toaster", price: 25.00, category: "Home & Kitchen", rating: 3.4, isFeatured: false },
  { productid: 511, title: "Microwave Oven", price: 80.00, category: "Home & Kitchen", rating: 4.1, isFeatured: true },
  { productid: 512, title: "Running Shoes", price: 120.00, category: "Fashion", rating: 4.5, isFeatured: true },
  { productid: 513, title: "Cotton T-Shirt", price: 15.00, category: "Fashion", rating: 3.6, isFeatured: false },
  { productid: 514, title: "Denim Jeans", price: 55.00, category: "Fashion", rating: 4.0, isFeatured: true },
  { productid: 515, title: "Sunglasses", price: 35.00, category: "Fashion", rating: 3.1, isFeatured: false }
];

let displayproducts =() => {
    for (let i = 0; i < products.length; i++) {
console.log("Product ID: " , products[i].productid)
console.log("Title: " , products[i].title)
console.log("Price: $" , products[i].price)
console.log("Category: " , products[i].category)
console.log("Rating: " , products[i].rating,"Stars")
console.log("Featured: " , products[i].isFeatured)
    }};
    // task 2
    let totalvaluation = () => {
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            total += products[i].price;
            
        }console.log("Total Catalog Value: $" , total.toFixed(2));
    };
    //task 3
    let premiumproducts = () => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].price > 100.00) {
                console.log(products[i].title,"- $" , products[i].price);

            }
        }
    };
    //Applying Cyber Monday Discount
    let cybermondaydiscount = () => {
        for (let i = 0; i < products.length; i++) {
          products[i].price *=0.90; // Apply 10% discount
          console.log("Price: $" , products[i].price);
        }
    };




































    console.log(displayproducts());
    console.log(totalvaluation());
    console.log(premiumproducts());