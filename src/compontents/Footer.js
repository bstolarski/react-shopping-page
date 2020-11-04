import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #626262;
  font-size: 13px;
  height: 40px;
  
`;


const Footer = () =>{
  return(
      <FooterWrapper>
          <span>Built by Bartłomiej Stolarski</span>
      </FooterWrapper>
  )
};

export default Footer