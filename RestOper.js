<<<<<<< HEAD
const sumOfNumber = (...nos) => {
    var tot = 0;
    for (let i = 0; i < nos.length; i++) {
      tot += nos[i];
    }
    return tot;
  };
  
  console.log(sumOfNumber(1,2,3,4,5,6,7,8,9,10));
  //n(n+1)/2
  
  const sumOfNumbers = (a,b,...nos) => {
      var tot = 0;
      console.log(`The starting number ${a} and ${b}`)
      for (let i = 0; i < nos.length; i++) {
        tot += nos[i];
      }
      return tot;
    };
=======
const sumOfNumber = (...nos) => {
    var tot = 0;
    for (let i = 0; i < nos.length; i++) {
      tot += nos[i];
    }
    return tot;
  };
  
  console.log(sumOfNumber(1,2,3,4,5,6,7,8,9,10));
  //n(n+1)/2
  
  const sumOfNumbers = (a,b,...nos) => {
      var tot = 0;
      console.log(`The starting number ${a} and ${b}`)
      for (let i = 0; i < nos.length; i++) {
        tot += nos[i];
      }
      return tot;
    };
>>>>>>> 76c4be755747aed2de1d59260d14cc4ec9a92740
    console.log(sumOfNumbers(10,20,1,2,3,4,5,6,7,8,9,10));