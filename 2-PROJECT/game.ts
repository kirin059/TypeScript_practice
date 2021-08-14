{
    /**
     * Let's make a game 🕹
     */

    const position = { x: 0, y: 0 };

    type Direction = 'up' | 'down' | 'left' | 'right';
    function move(Direction: Direction) {   // return 하지 않으므로 void가 생략된것과 같음
        switch (Direction) {
            case 'up':
                position.y += 1;
                break;
            case 'down':
                position.y -= 1;
                break;
            case 'left':
                position.x -= 1;
                break;
            case 'right':
                position.x += 1;
                break;
            default:
                throw new Error(`unknown direction: ${Direction}`)
        }
    }

    console.log(position); // { x: 0, y: 0}
    move('up');
    console.log(position); // { x: 0, y: 1}
    move('down');
    console.log(position); // { x: 0, y: 0}
    move('left');
    console.log(position); // { x: -1, y: 0}
    move('right');
    console.log(position); // { x: 0, y: 0}

}

// ts-node game.ts