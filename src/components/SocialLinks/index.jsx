import React from "react";
import { Equal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Link } from "lucide-react";
import { Input } from "@/components/ui/input"


function CustomSocialLinks() {
  return (
    <div className="bg-gray-100 m-10 rounded-xl">
      <div className="flex justify-between mt-5 font-extrabold text-gray-500">
        <h3 className="flex items-center gap-1  ml-4">
          {" "}
          <Equal className=""/> Link #1
        </h3>
        <button className="text-gray-500 font-normal mr-4">Remove</button>
      </div>
      <p className="m-4 mb-1 text-gray-500 text-sm font-semibold">Platform</p>
      <Select >
        <SelectTrigger className="mt-0 mx-4 max-w-screen-xl">
          <SelectValue placeholder="Links" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="github">Github</SelectItem>
          <SelectItem value="youtube">YouTube</SelectItem>
          <SelectItem value="linkdin">Linkdin</SelectItem>
          <SelectItem value="twitter">Twitter</SelectItem>
        </SelectContent>
      </Select>

      <p className="text-gray-500 text-sm  m-4 mb-0 font-semibold">Link</p>
      <Input className="max-w-screen-xl mx-4 mb-5" />
    </div>
  );
}

function SocialLinks({ links, onAdd, onRemove, onUpdate }) {
  return (
    <div>
      {links.map((link, index) => (
        <SocialLinks
          key={index}
          platform={link.platform}
          link={link.link}
          onRemove={() => onRemove(index)}
          onUpdate={(platform, link) => onUpdate(index, platform, link)}
        />
      ))}
      <Button
        variant="secondary"
        size="lg"
        className="bg-gray-100 mx-10 border border-purple-500 text-purple-500 py-6"
        onClick={onAdd}
      >
        + Add new link
      </Button>
    </div>
  );
}



export default CustomSocialLinks;
