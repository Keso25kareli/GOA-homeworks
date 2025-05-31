let product = {
    id: "LD1493",
    price: 1700,
    discount: 15
};

let discountedPrice = product.price - (product.price * product.discount / 100);

console.log(product.id + " price: " + product.price);
console.log(product.id + " new price: " + discountedPrice);