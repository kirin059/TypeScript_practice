{
  
    class CoffeeMaker {
        // 멤버변수(class내에서는 멤버변수에 const 또는 let을 붙이지 않는다, 함수도 마찬가지로 function을 따로 붙이지 않는다)
        static BEANS_GRAMM_PER_SHOT = 7  // class level  (static을 붙인경우)
        coffeeBeans = 0;                 // instance (object) level  (static을 안 붙인경우)

        constructor(beans) {
            this.coffeeBeans = beans;
        }

        // makeMachine 함수에 static을 붙였기 때문에 인스턴스에서 사용할 수 없다. 해당 함수를 외부에서 호출하고 싶다면 "변수 maker2" 처럼 가능
        static makeMachine(coffeeBeens) {
            return new CoffeeMaker(coffeeBeens)
        }
        
        makeCoffee(shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {  // class level에서 사용(static)하기 때문에 this가 아닌 CoffeeMaker(class이름)를 붙여줌
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            console.log(this.coffeeBeans)
            return {
                shots,
                hasMilk: false,
            }
        };
    }

    const maker = new CoffeeMaker(32)  // maker안에는 커피콩이 32개 전달된다
    console.log(maker.makeCoffee(2))
    // const maker2 = CoffeeMaker.makeMachine(3)   // 생성자 함수를 통해 호출하는 것이 아니라 "클래스에서 직접 함수 호출"
    // console.log(maker2)
    // console.log(CoffeeMaker.makeMachine(4))
}