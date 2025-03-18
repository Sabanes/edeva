import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Transition from "../../components/transition/Transition";
import Menu from "../../sections/navigation/navigation";
import Footer from "../../sections/footer/footer";
import ScrollToTop from "../../components/totop/Totop";
import contactData from "../../data/contact.json";
import DOMPurify from 'dompurify';
import "./index.module.css";

const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  USER_ID: import.meta.env.VITE_EMAILJS_USER_ID
};

const INITIAL_FORM_STATE = { name: "", email: "", message: "" };

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);

  const sanitizeInput = (value) => DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Eva Vieira De Almeida",
          from_email: form.email,
          to_email: "sabatchkuaseli@gmail.com",
          message: form.message,
        },
        EMAILJS_CONFIG.USER_ID
      );

      setForm(INITIAL_FORM_STATE);
      alert("Thank you. I will get back to you as soon as possible.");
    } catch (error) {
      console.error("Sending failed:", error);
      alert("Ahh, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: sanitizeInput(value) }));
  };

  const { 
    promo_text, 
    button, 
    contact_info, 
    form: formContent 
  } = contactData;

  return (
    <ScrollToTop>
      <Menu />
      
      <div className="h-svh w-full pb-10 flex flex-col items-center justify-center overflow-x-hidden bg-[var(--main)]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center md:pb-0 relative top-5"
        >
          <h1 className="text-center md:text-[13vw] pb-10 pt-2 text-[16vw] uppercase leading-none text-white">
            <span className="text-5xl">→</span>No need <br /> 
            <span className="md:text-[13vw] text-[16vw] md:pr-7">TO BE SHY</span>
          </h1>
          <a href=" ">
          <button className="px-8 py-2 md:px-10 md:py-2 text-white border rounded-full hover:bg-white/10 transition-colors">
          {promo_text.content}
          </button>
          </a>
        </motion.div>
      </div>

      <div className="flex md:flex-row flex-col md:justify-center py-12 md:text-left text-center items-center md:gap-[6.7rem] gap-12">
        <ContactSection title={contact_info.contacts.title}>
        <a href={`mailto:${contact_info.contacts.email}`} className="text-md underline lighter">{contact_info.contacts.email}</a>
        <a href={`tel:${contact_info.contacts.phone}`} className="text-md underline lighter">{contact_info.contacts.phone}</a>
        </ContactSection>

        <ContactSection title={contact_info.social.title}>
          <SocialLink href={contact_info.social.instagram_url} label={contact_info.social.instagram} />
          <SocialLink href={contact_info.social.facebook_url} label={contact_info.social.facebook} />
        </ContactSection>

        <ContactSection title={contact_info.location.title}>
          <SocialLink href={contact_info.location.google_maps_url} label={contact_info.location.google_maps} />
          <SocialLink href={contact_info.location.apple_maps_url} label={contact_info.location.apple_maps} />
        </ContactSection>

        {/* <ContactSection title={contact_info.company.title}>
          <SocialLink href={contact_info.company.company_url} label={contact_info.company.company_name} />
        </ContactSection> */}
      </div>

      <div className="xl:mt-12 flex flex-col gap-10 mb-10 md:px-[6rem] px-3 overflow-hidden bg-[var(--main)] rounded-2xl w-[90%] mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-[0.75] pl-5 py-10 w-[90%]"
        >
          <div className="mb-8">
            <h3 className="text-white md:text-[30px] text-[20px] tracking-wide light">
              {formContent.title}
            </h3>
            <h3 className="text-white font-semibold md:text-[50px] text-[35px] tracking-wide">
              {formContent.subtitle}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
            <FormField
              label={formContent.name_label}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={formContent.name_placeholder}
            />

            <FormField
              label={formContent.email_label}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={formContent.email_placeholder}
            />

            <FormField
              label={formContent.message_label}
              name="message"
              type="textarea"
              value={form.message}
              onChange={handleChange}
              placeholder={formContent.message_placeholder}
            />

            <button 
              type="submit" 
              disabled={loading}
              className="bg-[#222] py-2 px-7 rounded-full outline-none w-fit text-[#e2e2e2] font-bold border border-[#c6c6c6] hover:bg-[#333] transition-colors"
            >
              {loading ? formContent.loading_button : formContent.submit_button}
            </button>
          </form>
        </motion.div>
      </div>


        <Footer />

    </ScrollToTop>
  );
};

// Reusable Components
const ContactSection = ({ title, children }) => (
  <div className="flex flex-col mx-4">
    <h2 className="font-regular text-xl uppercase mb-2">{title}</h2>
    <div className="flex flex-col gap-1">
      {children}
    </div>
  </div>
);

const SocialLink = ({ href, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-md font-thin underline"
  >
    {label}
  </a>
);

const FormField = ({ label, type = 'text', ...props }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    {type === 'textarea' ? (
      <textarea
        {...props}
        className="bg-transparent py-4 px-6 placeholder:text-secondary text-white outline-none border-b border-b-white rounded-none"
        rows="7"
      />
    ) : (
      <input
        type={type}
        {...props}
        className="py-4 px-6 placeholder:text-secondary text-white outline-none border-b border-b-white bg-transparent rounded-none"
      />
    )}
  </label>
);

export default Transition(Contact);