import Link from "next/link";
import { IconContext } from "react-icons";
import { DivProps } from "react-html-props";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const Contact = ({ children, className, ...rest }: DivProps) => {
  return (
    <IconContext.Provider value={{ size: "1.8em" }}>
      <div
        className={`flex flex-col space-y-4 max-w-xl mx-auto mt-4 text-left ${className}`}
        {...rest}>
        <div className="flex space-x-2 items-center">
          <FaGithub className="" />
          <a
            className="no-underline font-light text-black hover:underline hover:text-black"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/sanjayez">
            Check out git repos!
          </a>
          <IconContext.Provider value={{ size: "0.8em" }}>
            <GoLinkExternal />
          </IconContext.Provider>
        </div>
        <div className="flex space-x-2 items-center">
          <FaLinkedin className="" />
          <a
            className="no-underline font-light text-black hover:underline hover:text-black"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sanjaysid/">
            Let&apos;s connect!
          </a>
          <IconContext.Provider value={{ size: "0.8em" }}>
            <GoLinkExternal />
          </IconContext.Provider>
        </div>
        {children}
      </div>
    </IconContext.Provider>
  );
};

export default Contact;
