import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: #f4f4f4;
  padding: 2rem;
  border-radius: 20px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
`;

const Options = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #191a23;
  gap: 0.5rem;
  cursor: pointer;

  input {
    accent-color: #b9ff66;
    width: 18px;
    height: 18px;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1rem;
    color: #191a23;
  }

  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid #191a23;
    border-radius: 10px;
    font-size: 1rem;
    background-color: #fff;
    color: #191a23;
    outline: none;

    &::placeholder {
      color: #aaa;
    }
  }

  textarea {
    resize: none;
    height: 120px;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: #191a23;
  color: #fff;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #333;
  }
`;

const GraphicContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  z-index: -1;
`;

const BigStar = styled.div`
  width: 150px;
  height: 150px;
  background-color: #191a23;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;

const SmallStar = styled(BigStar)`
  width: 50px;
  height: 50px;
  background-color: #b9ff66;
  position: absolute;
  top: 60%;
  left: 20%;
`;

const ContactForm = () => {
  const [formType, setFormType] = useState("Say Hi");

  return (
    <FormContainer>
      <Options>
        <Option>
          <input
            type="radio"
            name="formType"
            value="Say Hi"
            checked={formType === "Say Hi"}
            onChange={(e) => setFormType(e.target.value)}
          />
          Say Hi
        </Option>
        <Option>
          <input
            type="radio"
            name="formType"
            value="Get a Quote"
            checked={formType === "Get a Quote"}
            onChange={(e) => setFormType(e.target.value)}
          />
          Get a Quote
        </Option>
      </Options>
      <Field>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Name" />
      </Field>
      <Field>
        <label htmlFor="email">Email*</label>
        <input type="email" id="email" placeholder="Email" required />
      </Field>
      <Field>
        <label htmlFor="message">Message*</label>
        <textarea id="message" placeholder="Message" required />
      </Field>
      <SubmitButton type="submit">Send Message</SubmitButton>
      <GraphicContainer>
        <BigStar />
        <SmallStar />
      </GraphicContainer>
    </FormContainer>
  );
};

export default ContactForm;
