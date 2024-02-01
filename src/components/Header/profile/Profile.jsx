import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsFillPersonFill } from "react-icons/bs";

import { z } from "zod";
import { useAuth } from "../../../Providers/AuthContext";


const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "password should be at least 6 charaters long."),
});
const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const {login,isLoggedin,logout}=useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    setError("");
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          headers: { projectID: "2wxufmodyvcq",'Content-Type':'application/json' },

          body: JSON.stringify({ email, password, appType: "ecommerce" }),
          method: "POST",
        }
      );
      if (!response.ok) {
        const json = await response.json();
        setError(json.message)
        throw new Error(json.message);
      }
      const json = await response.json();
      login(json.data.name,json.token)
      reset()
    } catch (error) {
      console.log(error.message);
    }
   
  };
  return (
    <>
     {isLoggedin ? <button onClick={logout}>Logout</button> : <button className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <BsFillPersonFill />
      </button>}
      {isModalOpen && (
        <>
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed top-0 bottom-0 right-0 left-0 bg-[#353535]/80"
          />
          <div className="min-w-[36rem] min-h-[36rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121212] p-4 flex items-center justify-center">
            <form
              className="flex gap-4 flex-col "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                placeholder="email"
                type="text"
                className="px-4 py-2 text-black"
                {...register("email")}
              />
              {errors.email && <small>{errors.email.message}</small>}
              <input
                placeholder="password"
                type="password"
                className="px-4 py-2 text-black"
                {...register("password")}
              />
              {errors.password && <small>{errors.password.message}</small>}
              {error && <small>{error}</small>}
              <button className="px-4 py-2 bg-emerald-500" type="submit">
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
