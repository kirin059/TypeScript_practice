{
  /**
 * Type Inference (타입추론 >> 타입을 명시하지 않고 자동으로 추론됨)
 */
  let text = 'hello';  // 타입명시 x (자동으로 타입이 string으로 명시)
  // text = 1  << error

  function print(message = 'hello') {  // "인자는 암묵적으로 any 타입이 지정"되기 때문에 타입을 명시해주어야함
    console.log(message);
  }
  print('hello');

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);  // result 변수의 타입은 자동으로 number 타입 추론되지만 function에 number로 명시해주는것이 좋음


  function adds(x: number, y: number): number {   // 위의 add 함수도 맞지만, 더 명시적으로 함수에 타입 명시
    return x + y;
  }
  const results = adds(1, 2);
}