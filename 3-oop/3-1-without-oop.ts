{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    const BEANS_GRAMM_PER_SHOT: number = 7  // 커피 1샷 당 필요한 원두콩 갯수
    
    let coffeeBeans: number = 0;  // 총 몇개의 원두콩이 있는지(gram) - 기본 0개
    function makeCoffee(shots: number): CoffeeCup {
        if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {  // 원두의 갯수가 1샷당 필요한 원두의 갯수보다 작다면 에러
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;  // 원두콩의 그램 수를 줄인다
        return {
            shots: shots,  // 키와 값이 같으면 그냥 shots 만 써도 된다
            hasMilk: false,
        }
    };

    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;  // 원두콩 충전해주기 (21개 충전)

    const coffee = makeCoffee(2);
    console.log(coffee)
}