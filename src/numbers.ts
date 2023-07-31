(() => {
  let productPrice = 100;

  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;

  console.log('productInStock', productInStock);
  if (productInStock > 5) {
    console.log('is greater');
  }

  let discount = parseInt('123'); // si no se le pasa un number a parseInt me devuelve Nan tener cuidado con eso
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);
})();
