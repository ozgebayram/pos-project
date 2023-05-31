// import { Button } from "antd";
// import { Button } from "antd";

import CartTotals from "./components/cart/CartTotals";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Products from "./components/products/Products";


function App() {
  return (
    <>
      <Header/>
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories  overflow-auto max-h-[calc(100vh-_-112px)] pb-64">
          {/* yukarıda scroll verdik ve pb-64 ile de scroll un sonunda boşluk bıraktık */}
          {/* bu bir slider kutuphanesi ile d eyapılabılır */}
          <Categories/>
        </div>
        <div className="products flex-[8]">
          <Products/>
        </div>
        <div className="card-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals/>
        </div>
      </div>
    </>
  );
}

//  
export default App;

// md:-mr-[24px] md:-mt-[24px] = bu özellik shopping list yazısını yukarı ve sola sıfırladı