import imagenotfound from "../../assets/imagenotfound.svg";
import { cn } from "../../lib/utils";

const Image = ({
  url,
  fallbackUrl = imagenotfound,
  className,
  ...restprops
}) => {
  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = imagenotfound;
  };

  return (
    <img
      className={cn("h-full w-full object-contain", className)}
      src={url}
      onError={handleImageError}
      {...restprops}
    />
  );
};

export default Image;
