import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const people= [
    {
    id: 1,
    name: "Aaron",
    message: "Wassup",
    emoji: "🤓",
    seatNumbers: [7,7,7],
  },
  {
    id: 2,
    name: "Clio",
    message: "How's it going",
    emoji: "😆",
    seatNumbers: [9,5,3,3],
  },
  {
    id: 3,
    name: "Annie",
    message: "Praise the Lord,",
    emoji: "🙏",
    seatNumbers: [2, 4],
  },
]


  return (
    <>
      <Form />
    </>
  );
}

export default App;
