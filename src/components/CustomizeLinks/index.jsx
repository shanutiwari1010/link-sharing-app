import React, { useState } from "react";
import { Button } from "../ui/button";
import SocialLinks from "../SocialLinks/index";

function CustomizeLinks() {
  const [links, setLinks] = useState([]);

  const addNewLink = () => {
    setLinks([...links, { platform: "", link: "" }]);
  };

  const removeLink = (index, platform) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const updateLink = (index, platform, link) => {
    const updatedLinks = [...links];
    updatedLinks[index] = { platform, link };
    setLinks(updatedLinks);
  };

  return (
    <div className="flex flex-col m-5 bg-white rounded-xl">
      <h1 className="font-bold m-10 mb-5 text-4xl">Customize your links</h1>
      <p className="text-md text-gray-500 m-10 mt-0">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>

      <Button
        onClick={addNewLink}
        variant="secondary"
        size="lg"
        className="bg-gray-100 mx-10 border border-purple-500 text-purple-500 py-6"
      >
        + Add new link
      </Button>

      {links.map((link, index) => (
        <SocialLinks
          key={index}
          id={index}
          platform={link.platform}
          link={link.link}
          onRemove={() => removeLink(index, link.platform)}
          onUpdate={(platform, link) => updateLink(index, platform, link)}
          s
        />
      ))}
    </div>
  );
}

export default CustomizeLinks;

//

//   const addNewLink = () => {
//     const timestamp = Date.now(); // Unique ID using timestamp
//     setLinks([...links, { id: timestamp, platform: "", link: "" }]);
//   };

//   const removeLink = (id) => {
//     const updatedLinks = links.filter((link) => link.id !== id);
//     setLinks(updatedLinks);
//   };

//   const updateLink = (id, platform, link) => {
//     const updatedLinks = links.map((linkItem) =>
//       linkItem.id === id ? { ...linkItem, platform, link } : linkItem
//     );
//     setLinks(updatedLinks);
//   };

//   r
