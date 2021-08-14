{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}  // 전달된 인자를 함수 내부에서 변경할 수 없도록 readonly설정 (push, reduce 등 변경불가)

  // Tuple -> interface, type alias, class (tuple대신 객체 형태 사용 권장) / 서로 다른 타입을 사용할 수 있다
  let student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  
  const [name, age] = student;  // 튜플을 object destructuring 형태로 받는 것을 권장 (student[0] 방식으로 index로 찾는 것은 번거롭기 때문)
}
