import React from "react";
import Accordian from "../../components/Ui/Accordian";

const BottomInfo = () => {
  const productInfo = [
    {
      id: 1,
      heading: "Overview",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, deleniti, autem sint nisi nihil repudiandae distinctio expedita sapiente consequuntur animi quam quaerat ad optio adipisci quo explicabo repellat esse inventore consequatur illum. In commodi debitis voluptatum illum culpa necessitatibus sunt, accusantium aliquam! Aut, modi! Iure molestias excepturi incidunt reprehenderit alias!",
    },
    {
      id: 2,
      heading: "Product Showcase",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptates obcaecati magnam nam cumque quos adipisci sed quaerat, nemo accusantium, id ratione soluta vitae neque aperiam amet beatae debitis eaque, earum nihil dolorum illum. Id quo optio commodi repellat dolor assumenda accusamus dolores asperiores inventore doloremque ratione vero ullam eligendi, possimus consectetur laborum minima. Adipisci iure, molestias est laborum, tempora, atque tempore facere voluptatem rerum sint quaerat omnis soluta sapiente",
    },
    {
      id: 3,
      heading: "Reviews",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores obcaecati ipsa distinctio magnam possimus veritatis ea? Dolore cumque amet eum exercitationem! Possimus, excepturi quasi. Earum, illo minus nobis eligendi sed perferendis dolorum nisi molestias dolorem consequuntur. Aperiam praesentium voluptatem architecto! Quasi qui similique culpa non harum quaerat animi aperiam consequatur tempora architecto praesentium provident aliquam magnam, a corrupti! Saepe delectus quisquam hic repudiandae, quidem fugiat praesentium quas et iusto quasi in blanditiis deserunt placeat cumque mollitia. A illo veritatis dolores?",
    },
  ];
  return (
    <div className="bottomSection px-[.9375rem]">
      <div className="w-full p-5 drop-shadow-xl">
        <div>
          <div className="py-10 ">
            {productInfo &&
              productInfo.map((productInfo) => {
                return <Accordian key={productInfo.id} data={productInfo} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomInfo;
