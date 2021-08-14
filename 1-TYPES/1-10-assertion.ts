{
  /**
   * Type Assertions 💩 (타입을 강요할 때)
   */
  function jsStrFunc(): any {  // 타입을 any로 지정
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length);  // 결과값이 string이라는 것을 확신할 때, as 키워드를 사용해서 length라는 API를 사용할 수 있다
  console.log((<string>result).length);



  const wrong: any = 5;  // 타입을 any로 지정
  console.log((wrong as Array<number>).push(1)); // 😱  숫자를 받는 배열이라고 확신하고 1이라는 숫자를 push 하면 오류가 남



  function findNumbers(): number[] | undefined {  // type을 배열과 undefined로 설정
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱  numbers는 숫지일 수도 있고 undefined 일 수 있기 때문에 push를 적용하는 것에 경고가 뜸

  const button = document.querySelector('class')!;
}
