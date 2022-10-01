import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

//component for follow me links
function FollowSocial() {
  const { links } = useContext(DataContext);

  let inst = "";
  let face = "";
  let linke = "";

  links.forEach((s) => {
    inst = s.instagram;
    face = s.facebook;
    linke = s.linkedln;
  });

  const socialApp = [
    {
      id: 0,
      name: "Facebook",
      classes: "iconfont-wrapper bg-facebook m-2",
      icon: "socicon-facebook socicon",
      links: face,
    },
    {
      id: 1,
      name: "Instagram",
      classes: "iconfont-wrapper bg-instagram m-2",
      icon: "socicon-instagram socicon",
      links: inst,
    },
    {
      id: 2,
      name: "Linkeldn",
      classes: "iconfont-wrapper bg-linkedin m-2",
      icon: "socicon-linkedin socicon",
      links: linke,
    },
    {
      id: 3,
      name: "GitHub",
      classes: "iconfont-wrapper bg-github m-2",
      icon: "socicon-github socicon",
      links: "https://github.com/CHANCENY",
    },
  ];

  return (
    <div className="social-list align-center">
      {socialApp.map((social) => (
        <a
          className={social.classes}
          target="_blank"
          href={social.links}
          key={social.id}
          rel="noreferrer"
        >
          <span className={social.icon}></span>
        </a>
      ))}
    </div>
  );
}

export default FollowSocial;
