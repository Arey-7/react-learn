import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits: string[] = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

    const fruits = [
        {
            name: 'Apple',
            emoji: '🍎',
            price: 10,
            soldOut: false,
        },
        {
            name: 'Mango',
            emoji: '🥭',
            price: 7,
            soldOut: false,
        },
        {
            name: 'Banana',
            emoji: '🍌',
            price: 2,
            soldOut: true,
        },
        {
            name: 'Orange',
            emoji: '🍊',
            price: 5,
            soldOut: false,
        },
        {
            name: 'Pineapple',
            emoji: '🍍',
            price: 8,
            soldOut: true,
        },
    ]

  return (<div>
    <ol>
        {fruits.map((fruit)=>(
            <Fruit key={fruit.name} name={fruit.name} emoji={fruit.emoji} price={fruit.price} soldOut={fruit.soldOut}/>
        ))}
    </ol>
  </div>
  );
}
