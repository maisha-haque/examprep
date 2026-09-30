import React, { useContext, useState } from "react";
import { DataContext } from "./contextAPI/DataContext";
import Image from "../common/Image";
import useCartStore from "/src/store/usecartCount.js";

const Shop = () => {

  // context api const 

  const { allData } = useContext(DataContext);

  // zustand cart button const

  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const count = useCartStore((state) => state.count);


  // filter consts

  const [category, setCategory] = useState("all");

  const filteredProducts = allData.filter((item) => {
    if (category === "all") {
      return true;
    }
    return item.category === category;
  });

  // the return for products / items 

  return (

    <div className="py-10">
      <div className="w-330 m-auto">


        {/* filter thingy  */}

        <div className="flex gap-4 mb-10">

          <button onClick={() => setCategory("all")}>
            All
          </button>

          <button onClick={() => setCategory("beauty")}>
            Beauty
          </button>

          <button onClick={() => setCategory("fragrances")}>
            Fragrances
          </button>

          <button onClick={() => setCategory("furniture")}>
            Furniture
          </button>

          <button onClick={() => setCategory("groceries")}>
            Groceries
          </button>

        </div>

        {/* the context api product thing */}


        <div className="flex flex-wrap justify-between gap-y-3">

          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="w-[23%] py-8 px-8 mt-3 bg-blue-300 text-white"
            >
              <Image imgSrc={item.thumbnail} />

              <h4 className="mt-3">
                {item.title}
              </h4>

              <h4 className="mt-2">
                ${item.price}
              </h4>

              <h4 className="mt-1">
                {item.category}
              </h4>

              {/* zustand buttons for add/remove */}


              <button
                onClick={increment}
                className="mt-4 px-4 py-2 bg-blue-500 text-white"
              >
                ADD TO CART
              </button>

              <button onClick={decrement}
               disabled={count === 0}
              className="px-3 py-2 ml-4 text-white bg-blue-500">
                -
              </button>
            </div>
          ))}

        </div>



      </div>
    </div>
  );
};

export default Shop;