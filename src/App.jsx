// import { Button } from "antd";
// import { Button } from "antd";

import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";


function App() {
  return (
    <>
      <Header/>
      <div className="home px-6 flex justify-between">
        <div className="categories">
          <Categories/>
        </div>
        <div className="products">
          <div>products</div>
        </div>
        <div className="card-totals">
          <div>card totals</div>
        </div>
      </div>
    </>
  );
}


export default App;
