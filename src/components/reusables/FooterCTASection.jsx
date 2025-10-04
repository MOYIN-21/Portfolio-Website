import React from "react";
import { Link } from "react-router-dom";

const FooterCTASection = ({
  title,
  description,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  icon, 
}) => {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-6 text-center space-y-4 mt-20">
      
      <p className="playfair-text-semantic-heading2 leading-8 text-2xl">
        {title}
      </p>

      <p className="text-inter-regular text-lg leading-6 text-[#D9D9D9]">
        {description}
      </p>

      <div className="flex flex-row gap-3">
        {primaryLink ? (
          <Link
            to={primaryLink}
            className="inline-flex items-center gap-2 text-inter-medium text-sm leading-6 rounded-md text-[#FAFAFA] py-2.5 px-3 cursor-pointer"
          >
            {primaryText}
          </Link>
        ) : (
          <button className="inline-flex items-center gap-2 text-inter-medium text-sm leading-6 rounded-md text-[#FAFAFA] py-2.5 px-3">
            {primaryText}
          </button>
        )}

        {secondaryText && secondaryLink && (
          <span className="flex flex-row gap-2 items-center w-fit">
            <Link
              to={secondaryLink}
              className="inline-flex items-center gap-2 text-inter-medium text-sm leading-6 rounded-md border border-[#262626] bg-[#141414] text-[#FAFAFA] py-2.5 px-3"
            >
              {icon && <span className="text-[#FAFAFA]">{icon}</span>}
              {secondaryText}
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default FooterCTASection;
