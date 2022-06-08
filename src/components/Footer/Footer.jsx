import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container, Legend, SocialContainer, SocialLink } from "./Footer.style";

const Footer = () => {
  return (
    <Container>
      <Legend>
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </Legend>
      <SocialContainer>
        <SocialLink href="https://github.com/ShamedCD" target={"_blank"}>
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/shamedcalderon/"
          target={"_blank"}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialLink>
      </SocialContainer>
    </Container>
  );
};

export default Footer;
