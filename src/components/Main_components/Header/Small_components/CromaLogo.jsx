import { NavLink} from "react-router-dom";

const CromaLogo = () => {
  return (
    <NavLink to="/">
    <div className="w-[75px] md:w-[130px]">
    <img
    className="croma_logo w-full h-full"
     src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
     alt="Croma_Logo"></img>
 </div>
 </NavLink>
    
  );
};

export default CromaLogo;
