const myObj = {
  id: 1,
  price: 35,
  description: "very nice",
};

for (const key in myObj) {
  console.log(`${key}: ${myObj[key]} `);
}
