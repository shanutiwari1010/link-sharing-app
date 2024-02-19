import React from "react";
import { Button } from "../ui/button";
import { Link, Cat ,CircleUserRound} from "lucide-react";


function MyComponent() {
  return (
    <header className="flex justify-center bg-white m-4 mt-7 rounded-xl items-center py-4">
      <div className="flex items-center gap-2 ml-5">
        <Cat className="size-12" />
        <h3 className="text-2xl font-bold">catlinks</h3>
      </div>

      <div className="flex w-full justify-center items-center">
        <Button
          variant="secondry"
          size="sm"
          className="bg-[#EEECFF] text-purple-500 px-6"
        >
          <Link className=" text-purple-500 size-4 mr-2" />
          Links
        </Button>

        <Button variant="secondry" size="lg" className="text-md text-gray-500 font-bold">
          <CircleUserRound  className="size-5 text-gray-500 mr-1 "/>
          Profile Details
        </Button>
      </div>
      <Button variant="secondry" size="sm" className=" border border-purple-500 text-purple-500 mr-5 text-sm px-6">
        Preview
      </Button>
    </header>
  );
}

export default MyComponent;
