{
  
    class CoffeeMaker {
        
        static BEANS_GRAMM_PER_SHOT = 7  
        coffeeBeans = 0;                 

        constructor(beans) {
            this._coffeeBeans = beans;  // js에는 private 기능이 없어서 밑줄로 대신한다
        }

        static makeMachine(coffeeBeens) {
            return new CoffeeMaker(coffeeBeens)
        }

        fillCoffeeBeans(beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }
        
        makeCoffee(shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {  
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
  
            return {
                shots,
                hasMilk: false,
            }
        };
    }

    const maker = CoffeeMaker.makeMachine(32) 
    console.log(maker.coffeeBeans)
    // const maker2 = CoffeeMaker.makeMachine(3)   // 생성자 함수를 통해 호출하는 것이 아니라 "클래스에서 직접 함수 호출"
    // console.log(maker2)
    // console.log(CoffeeMaker.makeMachine(4))




    // getter & setter
    class User {
        firstName;
        lastName;
        //fullName;   fullName을 변수 말고 getter를 통해 함수로 정의한다 (호출할때는 객체 호출하듯 user.fullName)
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            //this.fullName = `${firstName} ${lastName}`
        }

        // getter와 setter 설정하기 
        // getter: class내부에 설정해놓은 getter는 외부에서 호출해서 오직 읽을 수 만 있다
        // setter: class내부에 설정해놓은 setter는 외부에서 값을 변경하여 적용시킬 수 있다
        internalAge = 4;
        get age() {
            return this.internalAge;
        }
        set age(num) {
            if (num < 0) {
                throw new Error('no');
            }
            this.internalAge = num;
        }
    }

    const user = new User('steve', 'jobs');
    console.log(user.fullName); // steve jobs
    user.firstName = 'biba';
    console.log(user.fullName) // steve jobs

    // user.internalAge  << 접근불가
    user.age = 6;
    console.log(user.age)

}