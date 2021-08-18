{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {

        private static BEANS_GRAMM_PER_SHOT: number = 7
        private coffeeBeans: number = 0;

        private constructor(beans: number) {
            this.coffeeBeans = beans;
        }

        static makeMachine(coffeeBeens: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeens)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }
        


        private grindBeans(shots:number) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beens!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
        }
        private preheat(): void {
            console.log('heating up...')
        }
        private extract(shots: number) : CoffeeCup {
            return {
                shots,
                hasMilk: false,
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots)
        };

    }

    const maker = CoffeeMaker.makeMachine(32)  
    // maker.fillCoffeeBeans(32)
    // maker.extract(23)
    // maker.grindBeans(12)
    // maker.preheat
    // 위처럼 커피를 만들기 위해서는 여러개의 함수를 호출해야한다. 인터페이스가 너무 장황해지므로 
    // 간략하게 makeCoffee함수만 호출해서 커피를 만들고 싶다면 "정보은닉"을 통해 간단화 할 수 있다 (private붙여주기)

    maker.fillCoffeeBeans(32)
    maker.makeCoffee(2)
    // 정말 필요한 함수만 노출가능
}