import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import { setUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  // const user = true;
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      dispatch(setUser(JSON.parse(storedUser))); // ✅ Ensure it's not undefined
    }
  }, [dispatch]);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between  mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>{" "}
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex  font-medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button className="rounded-lg" variant="outline">
                  Login
                </Button>
              </Link>
              <Link to="signup">
                <Button className="text-white bg-[#6A38C2] hover:bg-[#5b30a6] rounded-lg">
                  SignUp
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex  gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Awantika</h4>
                    <p className="text-small text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    {/* <User2 /> */}
                    <Button variant="link">
                      <Link to="/profile"> View Profile</Link>
                    </Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    {/* <LogOut /> */}
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
