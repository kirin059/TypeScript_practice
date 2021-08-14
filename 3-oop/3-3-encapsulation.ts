{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // public : 따로 지정하지는 않음(default), 어디서든지 접근할 수 있으며 외부 인터페이스를 구성
    // private: 클래스 내부에서만 접근할 수 있으며 내부 인터페이스를 구성할 때 쓰임(클래스 외부에서 접근 불가)
    // protected : 상속할 때, 외부에서는 접근할 수 없고, 클래스를 상속한 객체만 접근할 수 있도록 설정 

    class CoffeeMaker {
        // 내부 상태를 private하게 지정(외부에서 접근 불가)
        private static BEANS_GRAMM_PER_SHOT: number = 7  
        private coffeeBeans: number = 0;                

        private constructor(beans: number) {
            this.coffeeBeans = beans;
        }

        static makeMachine(coffeeBeens: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeens)
        }

        // 기본적으로 public으로 되어있음(따로 지정 X)
        // 커피 콩을 외부에서 추가할 수 없게 설정해 놓았으니(private), 커피콩을 추가하는 함수를 만들어서 커피콩이 추가되도록 설정
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
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

    const maker = new CoffeeMaker(32)  // constructor를 private으로 지정해놓아서 new 생성자로 불러올 수 없다.
    const maker1 = CoffeeMaker.makeMachine(32)  // 클래스 내부의 static함수를 통해 접근하는 방식으로 객체를 만들 수 있다