(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = [];

  myDynamicVar = 'Hola';
  const rts = (myDynamicVar as string).toLowerCase();
  console.log(rts);

  myDynamicVar = 1212;

  const rts2 = (<number>myDynamicVar).toFixed();
  console.log(rts2);
})();
