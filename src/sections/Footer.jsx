import React from "react";
import { footerLinks, footerLogos } from "../data/data";

function Footer() {
  return (
    <footer className="mt-[100px] w-full h-fit flex justify-center items-center bg-[#1a1a1a] py-[50px]">
      {/* footer-wrapper */}
      <div className="w-[70%] flex justify-between items-center xl:flex-col xl:space-y-[50px] xl:items-start sm:items-center">
        {/* links-wrapper */}
        <div className="w-[50%] flex items-center justify-between 3xl:w-[70%] xl:w-full lg:flex-col lg:items-center lg:space-y-[50px]">
          {footerLinks.map((link) => (
            <div
              key={link.id}
              className="max-w-[200px] flex flex-col space-y-[30px]"
            >
              <h2 className="text-[lightgray] lg:text-center">{link.title}</h2>
              {link.desc.map((descTitle) => (
                <a
                  className="text-[white] lg:text-center"
                  key={descTitle.id}
                  href={descTitle.href}
                >
                  {descTitle.descText}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* icons-wrapper */}
        <div className="flex flex-col items-end space-y-[30px] md:hidden">
          <div className="flex items-center justify-center space-x-[20px]">
            {footerLogos.map((image) => (
              <a target="_blank" href={image.href} rel="noreferrer" key={image.id}>
                <img
                  className="w-[30px] img-hover"
                  src={image.src}
                  alt={image.src}
                />
              </a>
            ))}
          </div>

          <a href="#hero" className="text-[white] hover:text-aqua xl:hidden">Подняться</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
