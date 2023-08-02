(() => {
  let productTitle = 'My amazing product';
  productTitle = 'Hola';
  console.log(productTitle);
  const productDescription = 'bla bla bla';
  let productPrice = 100;

  const summary: string = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
  `;

  console.log(summary);
})();
