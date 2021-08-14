{
  /**
   * Enum  >> 관련된 "상수"값들을 한 곳에 모아서 관리할 수 있게 하는 기능
   */
  // JavaScript (enum이 존재하지 않음(묶을 수 있는 기능이 없다) >> Object.freeze를 대체함)
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // Object.freeze라는 기능을 사용해서 묶어줄 수 있다(=enum의 기능과 같음)
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;  // 0


  // TypeScript  
  enum Days {   // emun 사용 (enum에 따로 값을 지정하지 않으면 "자동"으로 0부터 +1) / 문자열은 예외, 직접지정) / 첫글자만 대문자인것이 컨벤션
    Monday,  // 0
    Tuesday,  // 1
    Wednesday,  // 2
    Thursday,  // 3
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);  // 0
  let day: Days = Days.Saturday;  // day는 자동적으로 Days라는 enum을 타입으로 갖는다.
  console.log(day) // 5

  day = 10;  // enumm의 문제점 >> enum으로 타입이 지정된 변수에는 아무 숫자나 다 받을 수 있다.
  console.log(day);  // 타입보장 안됨


  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';  // union type을 사용하는 것을 권장
  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}
