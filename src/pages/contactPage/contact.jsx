import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import Transition from "../../components/transition/Transition";
import Menu from "../../sections/navigation/navigation";
import Footer from "../../sections/footer/footer";
import ScrollToTop from "../../components/totop/Totop";
import Button from "../../components/Button-main/Button";
import contactData from "../../data/contact.json"; // Importing JSON data
import "./index.module.css"; // Importing CSS file

// Register GSAP plugins at the top level, outside of any functions
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Eva Vieira De Almeida",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  // Register GSAP animations within the hook
  useGSAP(() => {
    gsap.to(".purple", { rotation: 360, duration: 2, ease: "bounce.in" });
    gsap.to(".greeni", { 
      rotation: 920,
      duration: 1,
      x: 0,
      scrollTrigger: {
        trigger: '.boxi',
        scrub: true,
      }
    });
  }, []);

  return (
    <ScrollToTop>
      <Menu />

      <div className="h-svh w-full pb-10 flex flex-col items-center justify-center overflow-x-hidden bg-white">
        <div className="flex flex-col items-center justify-center relative top-5">
          <p className="purple uppercase border border-[#1b211e] rounded-full px-3">
            {contactData.promo_text.content}
          </p> 
          <motion.h1
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="text-center md:text-[9vw] pb-10 pt-2 text-[15vw] uppercase leading-none text-[#1b211e]"
          >
            <span>→</span>No need <br /> 
            <span className="md:text-[9vw] text-[11vw] md:pr-7">TO BE SHY</span>
          </motion.h1>

          <Button buttonText={contactData.button.cta} className="greeni boxi group relative md:px-10 px-8 md:py-2 py-1 overflow-hidden rounded-full bg-black md:text-lg shadow" />
          
          <p className="text-center pt-10 md:max-w-[40%] max-w-[95%]">{contactData.description.content}</p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:justify-center py-10 md:text-left text-center items-center md:gap-[6rem] gap-10">
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex flex-col">
          <h2 className="font-bold text-xl uppercase">{contactData.contact_info.contacts.title}</h2>
          <p className="text-md lighter">{contactData.contact_info.contacts.email}</p>
          <p className="text-md lighter">{contactData.contact_info.contacts.phone}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="flex flex-col">
          <h2 className="font-bold text-xl uppercase">{contactData.contact_info.social.title}</h2>
          <p className="text-md lighter underline"><a href={contactData.contact_info.social.instagram_url}>{contactData.contact_info.social.instagram} &#8599;</a></p>
          <p className="text-md lighter underline"><a href={contactData.contact_info.social.facebook_url}>{contactData.contact_info.social.facebook} &#8599;</a></p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }} className="flex flex-col">
          <h2 className="font-bold text-xl uppercase">{contactData.contact_info.location.title}</h2>
          <p className="text-md lighter underline"><a href={contactData.contact_info.location.google_maps_url}>{contactData.contact_info.location.google_maps} &#8599;</a></p>
          <p className="text-md lighter underline"><a href={contactData.contact_info.location.apple_maps_url}>{contactData.contact_info.location.apple_maps} &#8599;</a></p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1.5 }} className="flex flex-col">
          <h2 className="font-bold text-xl uppercase">{contactData.contact_info.company.title}</h2>
          <p className="text-md lighter underline"><a href={contactData.contact_info.company.company_url}>{contactData.contact_info.company.company_name} &#8599;</a></p>
        </motion.div>
      </div>

      <div className="xl:mt-12 flex flex-col gap-10 mb-10 md:px-[6rem] px-3 overflow-hidden bg-[var(--main)] rounded-2xl w-[90%] mx-auto">
        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 100, duration: 1 }} className="flex-[0.75] pl-5 py-10 w-[90%]">
          <h3 className="text-white md:text-[30px] sm:text-[20px] xs:text-[20px] text-[10px] tracking-wide light">{contactData.form.title}</h3>
          <h3 className="text-white font-semibold md:text-[50px] sm:text-[40px] xs:text-[35px] text-[20px] tracking-wide">{contactData.form.subtitle}</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">{contactData.form.name_label}</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={contactData.form.name_placeholder}
                className="py-4 px-6 placeholder:text-secondary text-white outline-none border-b border-b-white bg-transparent geist lighter rounded-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">{contactData.form.email_label}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={contactData.form.email_placeholder}
                className="py-4 px-6 placeholder:text-secondary text-white outline-none border-b border-b-white bg-transparent geist lighter rounded-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">{contactData.form.message_label}</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={contactData.form.message_placeholder}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-b border-b-white bg-transparent geist lighter rounded-none"
              />
            </label>

            <button type="submit" className="bg-[#222] py-2 px-7 rounded-full outline-none w-fit text-[#e2e2e2] font-bold border border-[#c6c6c6]">
              {loading ? contactData.form.loading_button : contactData.form.submit_button}
            </button>
          </form>
        </motion.div>
      </div>

      <motion.span initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, duration: 1 }}>
        <Footer />
      </motion.span>
    </ScrollToTop>
  );
};

// Export the component at the top level
export default Transition(Contact);