import React from "react";
import Accordian from "../../components/Ui/Accordian";

const BottomInfo = ({productDetails}) => {
  const {description, ratings, name } = productDetails;
  
  return (
    <div className="bottomSection px-[.9375rem]">
      <div className="w-full p-5 drop-shadow-xl">
        <div>
          <div className="py-10 ">
            <Accordian title='Overview'>
              <div dangerouslySetInnerHTML={{ __html: description }}/>
            </Accordian>
            <Accordian title='Reviews'>
              <div>ratings component</div>
            </Accordian>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomInfo;