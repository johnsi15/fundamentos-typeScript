(() => {
  const numbers = [1, 2, 43, 65, 57, 57];
  console.log(numbers);

  numbers.push(100);
  console.log(numbers);

  const numbers2: number[] = [1, 2, 43, 65, 57, 57];
  console.log(numbers2);

  const produstList = ['Hello', false];
  console.log(produstList);

  const mixed: (number | string | boolean)[] = ['Hello', false];
  mixed.push(100);
  mixed.push('World');
  mixed.push(true);
  // mixed.push({ name: 'Juan' })
  console.log(mixed);
})();

console.log('hola');
