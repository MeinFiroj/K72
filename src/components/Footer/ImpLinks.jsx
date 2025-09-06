import React from "react";
import { Link } from "react-router-dom";

const ImpLinks = () => {
  return (
    <>
      <Link to={'/'} className="uppercase hover:text-[#D3FD50] ">Politique de confidentialité</Link>
      <Link to={'/'} className="uppercase hover:text-[#D3FD50] ">Avis de confidentialité</Link>
      <Link to={'/'} className="uppercase hover:text-[#D3FD50] ">Rapport éthique</Link>
      <Link to={'/'} className="uppercase hover:text-[#D3FD50] ">options de consentment</Link>
    </>
  );
};

export default ImpLinks;
