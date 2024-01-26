import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";

const Profile = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => setProfileMenu((curr) => !curr)}
      >
        <BsFillPersonFill />
      </div>
      <div>
        {profileMenu && (
          <div className="w-[20%] fixed bottom-[5%] top-[80px] right-[5%] bg-[hsl(0,0%,10%)]  z-40">
            <ul>
              <li className="flex gap-4 items-center ">
                <span>icon</span>
                <h2 className="flex flex-col items-center">
                  title<span>subtitle</span>
                </h2>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
