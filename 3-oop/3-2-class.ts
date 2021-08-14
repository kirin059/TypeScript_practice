{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        // 멤버변수(class내에서는 멤버변수에 const 또는 let을 붙이지 않는다, 함수도 마찬가지로 function을 따로 붙이지 않는다)
        static BEANS_GRAMM_PER_SHOT: number = 7  // class level(static을 붙인경우)
        coffeeBeans: number = 0;                 // instance (object) level(static을 안 붙인경우)

        constructor(beans: number) {
            this.coffeeBeans = beans;
        }

        static makeMachine(coffeeBeens: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeens)
        }
        
        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {  // class level에서 사용(static)하기 때문에 this가 아닌 CoffeeMaker(class이름)를 붙여줌
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;  
            return {
                shots,
                hasMilk: false,
            }
        };

    }

    const maker = new CoffeeMaker(32)  // maker안에는 커피콩이 32개 전달된다
    const maker2 = CoffeeMaker.makeMachine(3)
    const maker3 = CoffeeMaker.makeMachine(5)
}