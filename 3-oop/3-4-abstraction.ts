{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // 외부적으로 사용하는 이름. 즉, 해당 Interface를 사용하여 외부에서 접근가능한 함수만 노출시킬 수 있다.
    interface CoffeeMaker  {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {

        private static BEANS_GRAMM_PER_SHOT: number = 7
        private coffeeBeans: number = 0;

        private constructor(beans: number) {
            this.coffeeBeans = beans;
        }

        static makeMachine(coffeeBeens: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeens)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }
        


        private grindBeans(shots:number) {
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beens!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
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

    const maker: CoffeeMaker = CoffeeMachine.makeMachine(32)  

    maker.fillCoffeeBeans(32)  // interface에 없기때문에 호출안됨 (maker의 타입이 인터페이스(=CoffeeMaker)이기 때문)
    maker.makeCoffee(2)
    // 정말 필요한 함수만 노출가능
}