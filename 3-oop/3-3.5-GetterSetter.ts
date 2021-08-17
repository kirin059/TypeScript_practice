{
    class User {

        //fullName;   fullName을 멤버변수 말고 getter를 통해 함수로 정의한다 (호출할때는 객체 호출하듯 user.fullName)
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        constructor(private firstName:string, private lastName:string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        // getter: class내부에 설정해놓은 getter는 외부에서 호출해서 오직 읽을 수 만 있다
        // setter: class내부에 설정해놓은 setter는 외부에서 값을 변경하여 적용시킬 수 있다
       private internalAge = 4;
        get age():number {
            return this.internalAge;
        }
        set age(num:number) {
            if (num < 0) {
                console.log('error')
            }
            this.internalAge = num;
        }
    }

    const user = new User('steve', 'jobs');
    console.log(user.fullName); // steve jobs


    // user.internalAge  << 접근불가
    user.age = 6;
    console.log(user.age)
}