import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import data from "./components/data";

const datas = [...data];
console.log(datas);

function App() {
  const [data, setData] = useState(datas);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={data} />
    </div>
  );
}

export default App;
