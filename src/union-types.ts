(() => {
  let userId: string | number;
  userId = '123';
  userId = 123;

  function greeting(myText: string | number) {
    // console.log(myText);
    if (typeof myText === 'string') {
      console.log(myText.toLowerCase());
    } else {
      console.log(myText.toFixed(1));
    }
  }

  greeting('Hola');
  greeting(123);
})();
