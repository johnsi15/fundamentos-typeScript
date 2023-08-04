(() => {
  type UserId = string | number;
  let userId: UserId;
  userId = '123';
  userId = 123;

  // literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';

  function greeting(userId: UserId, size: Sizes) {
    // console.log(myText);
    if (typeof userId === 'string') {
      console.log(userId.toLowerCase());
      console.log(size);
    }
  }

  greeting('12334', 'M');
  greeting(12334, 'M');
})();
