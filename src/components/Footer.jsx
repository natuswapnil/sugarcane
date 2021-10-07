import React from "react";

function Footer(props) {
  const buttonList = props.buttonList || [];
  return (
    <div className="footer text-center">
      <div className=" py-5 fixed-bottom bg-dark">
        {buttonList.map((buttonInfo) => (
          <button type="button" key={buttonInfo.key} className={buttonInfo.className} onClick={buttonInfo.onClick}>{buttonInfo.title}</button>
        ))}
      </div>
    </div>
  );
}

export default Footer;