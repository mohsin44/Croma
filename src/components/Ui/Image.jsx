import imagenotfound from "../../assets/imagenotfound.svg";

const Image = ({ url, fallbackUrl = imagenotfound, ...restprops }) => {
  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = imagenotfound;
  };

  return <img src={url} onError={handleImageError} {...restprops} />;
};

export default Image;
