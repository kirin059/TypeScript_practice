{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

    // number
    const num: number = -6;

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = false;

    // undefined
    let name: undefined; // 💩 (optional로 쓰임 >> 타입 지정 후, | undefined를 조건으로 붙여준다)
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefined {
      return undefined;
    }

    // null   
    let person: null; // 💩  (optional로 쓰임 >> 타입 지정 후, | null을 조건으로 붙여준다)
    let person2: string | null;

    // unknown 💩  >> 어떤 종류의 데이터가 담길지 모를 때 사용 (가급적 사용하지 않기)
    let notSure: unknown = 0;  
    notSure = 'he';
    notSure = true;

    // any 💩  >> 어떤 종류의 데이터든 사용 가능 (가급적 사용하지 않기)
    let anything: any = 0;
    anything = 'hello';

    // void   >> 함수에서 아무것도 리턴하지 않을 때 void타입 지정 / 주로 함수에 지정
    function print(): void {
      console.log('hello');
      return;
    }
    let unusable: void = undefined; // 💩

    // never  >> 에러를 핸들링 할 때 주로 사용(함수에서 아무것도 리턴하지 않는다) / 또는 while문 등으로 무한반복하여 리턴없이 반복될 때 사용
    function throwError(message: string): never {
      // message -> server (log)
      throw new Error(message);
    }
    function repetitive(): never {
      while (true) {
        // 반복문(리턴하는 것이 없다. 무한반복)
      }
    }
    let neverEnding: never; // 💩

  
    // objet
    let obj: object; // 💩  어떤 타입이든 담을 수 있기 때문에 가급적 구체적으로 명시하는 것이 좋다
    function acceptSomeObject(obj: object) {}  // 원시타입을 제외한 모든 object타입을 담을 수 있다(배열도)
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });
}
