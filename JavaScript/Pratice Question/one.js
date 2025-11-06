const Product = {
    Pname: "Parker Jotter Standard CT Ball Pen (Black)",
    rating: 4,
    Isdeal: 'True',
    price: 270,
    offer: '10% off',
};
document.querySelector("#Product_Info").innerHTML = 
`Product Name: ${Product.Pname} <br>
Rating: ${Product.rating} stars <br>
Price: Rs.${Product.price} (${Product.offer}) <br>
Deal: ${Product.Isdeal}`;
// console.log(`Product Name: ${Product.Pname}
// Rating: ${Product.rating} stars
// Price: Rs.${Product.price} (${Product.offer})
// Deal: ${Product.Isdeal}`);