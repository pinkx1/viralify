import React from "react";
import styled from "styled-components";
import normalLinkedinLogo from "../assets/images/normalLinkedinLogo.png";
import normalFacebookLogo from "../assets/images/104498_facebook_icon.svg";
import normalTwitterLogo from "../assets/images/normalTwitterLogo.png";

// Основной контейнер для футера
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 55px 60px 50px;
  gap: 30px;
  background: #191a23;
  border-radius: 45px 45px 0px 0px;
  max-width: 1440px;
  margin: 0 auto;
`;

const NavigationAndContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 66px;
`;

const NavAndSocials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  span {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;

  a {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-decoration: underline;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;

  div {
    width: 30px;
    height: 30px;
    background: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;


const ContactsAndSubscription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 154px;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0; /* Устанавливаем базовое значение */
  
  p {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #ffffff;
    margin: 10px 0; /* Контролируем отступы между элементами */
  }

  h4 {
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
    background: #b9ff66;
    padding: 5px 10px;
    border-radius: 7px;
    width: fit-content;
    margin: 0 0 20px 0; /* Отступ снизу фиксированный */
  }
`;


const SubscriptionBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 58px 40px;
  gap: 20px;
  background: #292a32;
  border-radius: 14px;

  input {
    width: 285px;
    height: 67px;
    padding: 0 15px;
    border: 1px solid #ffffff;
    border-radius: 14px;
    background: none;
    font-family: "Space Grotesk";
    font-size: 18px;
    color: #ffffff;

    &::placeholder {
      color: #ffffff;
    }
  }

  button {
    width: 249px;
    height: 68px;
    background: #b9ff66;
    border: none;
    border-radius: 14px;
    font-family: "Space Grotesk";
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #000000;
    cursor: pointer;

    &:hover {
      background: #a3e65a;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  hr {
    border: 1px solid #ffffff;
    width: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    p, a {
      font-family: "Space Grotesk";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #ffffff;
    }

    a {
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NavigationAndContacts>
        <NavAndSocials>
          <Logo>
            <span>Viralify</span>
          </Logo>
          <NavLinks>
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
          </NavLinks>
          <SocialIcons>
            <div>
              <img src={normalLinkedinLogo} alt="LinkedIn" />
            </div>
            <div>
              <img src={normalFacebookLogo} alt="Facebook" />
            </div>
            <div>
              <img src={normalTwitterLogo} alt="Twitter" />
            </div>
          </SocialIcons>
        </NavAndSocials>
        <ContactsAndSubscription>
          <Contacts>
            <h4>Contact us:</h4>
            <p>Email: info@viralify.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
          </Contacts>
          <SubscriptionBlock>
            <input type="email" placeholder="Email" />
            <button>Subscribe to news</button>
          </SubscriptionBlock>
        </ContactsAndSubscription>
      </NavigationAndContacts>
      <FooterBottom>
        <hr />
        <div>
          <p>© 2023 Viralify. All Rights Reserved.</p>
          <a href="#privacy-policy">Privacy Policy</a>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
