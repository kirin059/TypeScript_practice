{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function addNum(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {  // 이 함수는 Promise를 반환하며, 해당 인자는 number형이구나 를 알 수 있다
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs');
  printName('Ellie');  // 정해진 인자 갯수대로 전달해야함  >> lastName인자에 ?(물음표)를 붙임으로써, "문자열로 전달해도되고 전달하지 않아도 된다(optional)" 라는 뜻
  printName('Anna');

  // Default parameter
  function printMessage(message: string = 'default message') {   // 기본값을 지정해놓으면 아무값을 받지 않아도 오류없이 defalt값이 출력됨 (위와의 차이점은, ?를 지정하지않으면 에러)
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
