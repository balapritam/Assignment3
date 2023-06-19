function squareRootSumOfSquares(numbers) {
    const sumOfSquares = numbers.reduce((accumulator, number) => accumulator + Math.pow(number, 2), 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
  }
  
  
  const numbers = [3, 4, 5];
  console.log(squareRootSumOfSquares(numbers));  
  