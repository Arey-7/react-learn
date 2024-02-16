export default function Fruit({
  name,
  emoji,
  price,
  soldOut
}: {
  name: string;
  emoji: string;
  price: number;
  soldOut: boolean;
}) {
  return (
    <>
      {/* {emoji} {name}: ${price} */}
      {!soldOut ? (
        <li>
          {emoji} {name}: ${price}
        </li>
      ) : (
        <li>
          {emoji} {name}: ${price} {<>"Sold Out"</>}
        </li>
      )}
    </>
  );
}
