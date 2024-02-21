// // SocialLinks.js
// import React from "react";
// import { Equal } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "../ui/button";
// import { Link } from "lucide-react";
// import { Input } from "@/components/ui/input";

// function SocialLinks({ idx, onRemove }) {
//   const handleRemove = () => {
//     onRemove(idx);
//   };

//   return (
//     <div className="bg-gray-100 m-10 rounded-xl">
//       <div className="flex justify-between mt-5 font-extrabold text-gray-500">
//         <h3 className="flex items-center gap-1  ml-4">
//           {" "}
//           <Equal className="" /> Link #{idx + 1}
//         </h3>
//         <button className="text-gray-500 font-normal mr-4" onClick={handleRemove}>
//           Remove
//         </button>
//       </div>
//       <p className="m-4 mb-1 text-gray-500 text-sm font-semibold">Platform</p>
//       <Select>
//         <SelectTrigger className="mt-0 mx-4 max-w-screen-xl">
//           <SelectValue placeholder="Links" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="github">Github</SelectItem>
//           <SelectItem value="youtube">YouTube</SelectItem>
//           <SelectItem value="linkedin">LinkedIn</SelectItem> {/* Corrected typo */}
//           <SelectItem value="twitter">Twitter</SelectItem>
//         </SelectContent>
//       </Select>

//       <p className="text-gray-500 text-sm  m-4 mb-0 font-semibold">Link</p>
//       <Input className="max-w-screen-xl mx-4 mb-5" />
//     </div>
//   );
// }

// export default SocialLinks;

// SocialLinks.js
import React from "react";
import { Equal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function SocialLinks({ id, platform, link, onRemove, onUpdate }) {
  const handleRemove = () => {
    onRemove(id, platform);
  };

  const handleLinkChange = (e) => {};

  return (
    <div className="bg-gray-100 m-10 rounded-xl">
      <div className="flex justify-between mt-5 font-extrabold text-gray-500">
        <h3 className="flex items-center gap-1  ml-4">
          <Equal className="" /> Link #{id}
        </h3>
        <button
          className="text-gray-500 font-normal mr-4"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
      <p className="m-4 mb-1 text-gray-500 text-sm font-semibold">Platform</p>
      <Select
        onValueChange={(value) => {
          onUpdate(value, link);
        }}
      >
        <SelectTrigger className="mt-0 mx-4 max-w-screen-xl">
          <SelectValue placeholder="Links" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="github">Github</SelectItem>
          <SelectItem value="youtube">YouTube</SelectItem>
          <SelectItem value="linkedin">LinkedIn</SelectItem>
          <SelectItem value="twitter">Twitter</SelectItem>
        </SelectContent>
      </Select>

      <p className="text-gray-500 text-sm m-4 mb-0 font-semibold">Link</p>
      <Input
        className="max-w-screen-xl mx-4 mb-5"
        value={link}
        onChange={(e) => {
          onUpdate(platform, e.target.value);
        }}
      />
    </div>
  );
}

export default SocialLinks;
