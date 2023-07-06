import React from "react";
import Linked from "./Linked";

export default function Sosmed() {
  <div className="flex flex-col gap-6 mb-6">
    <h5>My Social Media</h5>
    <Linked
      icon={"instagram"}
      title={"Instagram"}
      link={"https://instagram.com"}
    />
    <Linked icon={"github"} title={"Github"} link={"https://github.com"} />
    <Linked
      icon={"linkedin"}
      title={"Linkedin"}
      link={"https://linkedin.com"}
    />
  </div>;
}
