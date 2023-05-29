// import { Button } from "antd";
// import { Button } from "antd";

import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";


function App() {
  return (
    <>
      <Header/>
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)] pb-64">
          {/* yukarıda scroll verdik ve pb-64 ile de scroll un sonunda boşluk bıraktık */}
          {/* bu bir slider kutuphanesi ile d eyapılabılır */}
          <Categories/>
        </div>
        <div className="products flex-[8]">
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
