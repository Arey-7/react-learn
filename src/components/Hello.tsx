


export default function Hello({name, message, emoji}: {name: string; message: string; emoji: string}) {
  return <h1>{message} {name} {emoji}</h1>;
}
