import React from "react";
import Link from "next/link";

import * as Icon from "react-icons/ai";
import * as IconBi from "react-icons/bi";
import { Colors } from "../constant/Colors";

const SetupIcons = (media) => {
  const primary = Colors.primary;
  if (media === "instagram") {
    return <Icon.AiFillInstagram color={primary} size={48} />;
  } else if (media === "github") {
    return <Icon.AiFillGithub color={primary} size={48} />;
  } else if (media === "linkedin") {
    return <Icon.AiFillLinkedin color={primary} size={48} />;
  } else if (media === "discord") {
    return <IconBi.BiLogoDiscord color={primary} size={48} />;
  }
};

export default function Linked({ icon, title, link }) {
  return (
    <>
      <Link
        href={link}
        className="bg-white px-[12px] py-[14px] rounded-md border-0 shadow-lg flex items-center gap-4 hover:bg-hover-gradient hover:text-white hover:transition hover:scale-105 duration-200 transform ease-linear"
      >
        <div className="hover:animate-spin">{SetupIcons(icon)}</div>
        <h2 className="text-black text-lg ">{title}</h2>
      </Link>
    </>
  );
}
