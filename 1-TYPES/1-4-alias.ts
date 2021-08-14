{
  /**
   * Type Aliases (=새로운 타입을 정의할 수 있음을 뜻함)
   */
  type Text = string;  // Text 라는 변수는 string 타입을 갖고 있다고 정의
  const name: Text = 'ellie';  // 타입은 Text(=string)
  const address: Text = 'korea';
  type Num = number;

  type Student = {  // Student 라는 타입 정의
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',   // Student라는 타입은 name은 string만 가능, age는 number만 가능
    age: 12,
  };

  /**
   * String Literal Types (= 특정 문자열을 타입으로 지정)
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';

  type JSON = 'json';           // 타입이 JSON
  const json: JSON = 'json';    // 타입이 JSON이면 값은 'json'만 올 수 있다

  type Boal = true;
  // const example: Boal = false;  >>  error!!
}
