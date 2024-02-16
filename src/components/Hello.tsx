interface People{
  person: {
    id: number;
    name: string;
    message: string;
    emoji: string;
    seatNumbers: number[];
  }[]
}


export default function Hello(props: People) {
  return( 
  <div>
   {props.person.map((person) =>(
    <h2 key={person.id}>
      {person.message} {person.name} {person.emoji}. Your seat number is {person.seatNumbers}.
    </h2>
   ))}
  </div>
  );
}

// export default function Hello(props: {name: string, message: string, emoji: string, seatNumbers: number[]}){
//   return(
//     <h1>{props.message} {props.name} {props.emoji} {props.seatNumbers}</h1>
//   )
// }