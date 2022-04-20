import React from "react";
import { Button } from "../../GlobalStyles";
import {
  FooterContainer,
  FooterSubcription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubcription>
        <FooterSubHeading>
          Join Our Exclusive Membership to Receive the Latest NEWS and TRENDS
        </FooterSubHeading>
        <FooterSubText>You Can Unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubcription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinksTitle>About Us</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Tearms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Contacts Us</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Tearms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Videos</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Tearms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinksTitle>Social Media</FooterLinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Tearms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
