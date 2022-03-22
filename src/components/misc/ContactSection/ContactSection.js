import Button from "../Button/Button"

import './ContactSection.css'

const ContactSection = ({ color, title, buttonProps: { text, type } }) => {
  return (
    <div className="ContactSection">
      <h1 className="mb-4" style={{ color: color }}>{title}</h1>
      <Button type={type}>{text}</Button>
    </div>
  );
};

export default ContactSection;