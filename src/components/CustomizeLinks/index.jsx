import React from "react";
import { Button } from "../ui/button";
import CustomSocialLinks from "../SocialLinks/index";
import { useState, useEffect } from "react";

function CustomizeLinks() {
  const [links, setLinks] = useState([]);

  const addNewLink = () => {
    setLinks([...links, { platform: "", link: "" }]);
  };

  const removeLink = (index) => {
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

      {links.map((link, index) => (
        <CustomSocialLinks
          key={index}
          platform={link.platform}
          link={link.link}
          onRemove={() => removeLink(index)}
          onUpdate={(platform, link) => updateLink(index, platform, link)}
        />
      ))}

      <Button
        onClick={addNewLink}
        variant="secondary"
        sixe="lg"
        className="bg-gray-100 mx-10 border border-purple-500 text-purple-500 py-6"
      >
        + Add new links
      </Button>

      <CustomSocialLinks links={links} />
    </div>
  );
}

export default CustomizeLinks;

// const [socialLinks, setSocialLinks] = useState([
//   // Initial list of social links
//   { id: 1, name: 'Twitter', url: 'https://twitter.com' },
//   // Add more social links as needed
// ]);

// const handleAddLink = () => {
//   // Generate a new unique ID for the new link
//   const newLinkId = Math.max(...socialLinks.map(link => link.id), 0) + 1;

//   // Add a new social link to the state
//   setSocialLinks(prevLinks => [
//     ...prevLinks,
//     { id: newLinkId, name: 'New Link', url: '#' },
//   ]);
//     };
