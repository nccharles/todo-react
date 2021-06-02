import "./styles.css";
import { useState } from "react";
export default function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const updateItem = (i) => {
    setItem(i.target.value);
  };
  const handleAdd = () => {
    let myList = [...list];
    myList.push({ id: myList.length + 1, name: item, done: false });
    setList(myList);
    setItem("");
  };
  const handleChange = (index) => {
    let myList = [...list];
    let objIndex = myList.findIndex((obj) => obj.id === index);
    myList[objIndex].done = !myList[objIndex].done;
    setList(myList);
  };

  return (
    <div className="App">
      <input type="text" value={item} onChange={updateItem} />
      <button onClick={handleAdd}>add</button>
      <p>You added {list.length} Items</p>
      <ul className="List">
        {list.map((i) => (
          <li
            className={i.done ? "is-done Item" : "Item"}
            onClick={handleChange.bind(this, i.id)}
            key={i.id}
          >
            {i.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
