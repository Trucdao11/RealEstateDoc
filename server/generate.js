const { faker } = require('@faker-js/faker');

var database = { products: [] };

for (var i = 1; i <= 300; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: Number(faker.commerce.price()), // Chuyển về number
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.number.int({ min: 1, max: 100 }) // Sửa lại
  });
}

console.log(JSON.stringify(database, null, 2)); // Format JSON đẹp hơn
