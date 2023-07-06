import React from "react";

import * as Icon from "react-icons/ai";

export default function CustomIcon({ media }) {
  const primary = "#F4D19B";
  if (media === "instagram") {
    return <Icon.AiFillInstagram color={primary} size={64} />;
  } else if (media === "github") {
    return <Icon.AiFillGithub color={primary} size={64} />;
  } else if (media === "linkedin") {
    return <Icon.AiFillLinkedin color={primary} size={64} />;
  }
}
