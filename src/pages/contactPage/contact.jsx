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
        'service_jj77n8i',
        'template_fjxbpjo',
        {
          from_name: form.name,
          to_name: "Eva Vieira De Almeida",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        'X3v5FKAjvLvcryoqL'
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



//list as many as you'd like
gsap.registerPlugin(ScrollTrigger);


useGSAP(() => {
  gsap.to(".purple", { rotation: 360, duration: 2, ease: "bounce.in" });
  // ✅ safe, created during execution, selector text scoped
  gsap.to(".greeni", { 
    rotation: 920,
    duration: 1,
    x: 0,
    scrollTrigger: {
      trigger: '.boxi',
      scrub: true,
    }
  });
  




}, {})

  return (
  <ScrollToTop>

    <Menu />


    <div className="h-svh w-full pb-10 flex flex-col items-center  justify-center  overflow-x-hidden bg-white">
      <div className="flex flex-col items-center justify-center relative top-5">
        <p
        className="purple uppercase border border-[#1b211e]  rounded-full px-3">Try 1 lesson for free</p> {/* Link to form */}
        <motion.h1
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
        className="text-center md:text-[9vw] pb-10 pt-2 text-[15vw] uppercase leading-none text-[#1b211e] ">
       <span>→</span>No need <br /> <span className="md:text-[9vw] text-[11vw] md:pr-7">to</span>
        be shy {/* change ""Feel free to reach out"" */}
        </motion.h1>

          <button class="greeni boxi group relative  md:px-10 px-8 md:py-2 py-1 overflow-hidden rounded-full bg-black md:text-lg shadow">
            <div class="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span class="relative text-white group-hover:text-black uppercase">→ Move </span>
          </button>

          <p className=" text-center pt-10 md:max-w-[40%] max-w-[95%]"> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore quis eaque modi deserunt qui dolorum impedit saepe ducimus! Voluptatibus est veritatis ex nulla, error omnis tempore odio debitis repellat!</p>

        </div>

        
      </div>


<div className="flex md:flex-row flex-col md:justify-center py-10 md:text-left text-center items-center md:gap-[6rem] gap-10">

          <motion.div
                    initial={{opacity: 0, x: -100, }}
                    whileInView={{opacity: 1, x: 0, }}
                    transition={{duration: 1}}
          
          className="flex flex-col">
            <h2 className="font-bold text-xl uppercase">Contacts</h2>
            <p className="text-md lighter">exapmle@gmail.com</p>
            <p className="text-md lighter">+233-333-333</p>
          </motion.div>


          <motion.div 
                    initial={{opacity: 0, x: -100, }}
                    whileInView={{opacity: 1, x: 0, }}
                    transition={{duration: 1, delay: 0.5}}
          className="flex flex-col">
            <h2 className="font-bold text-xl uppercase">Social</h2>
            <p className="text-md lighter underline">Instagram &#8599;</p>
            <p className="text-md lighter underline">Facebook &#8599;</p>
          </motion.div>

          <motion.div
                        initial={{opacity: 0, x: -100, }}
                        whileInView={{opacity: 1, x: 0, }}
                        transition={{duration: 1, delay: 1}}

          className="flex flex-col">
            <h2 className="font-bold text-xl uppercase">Location</h2>
            <p className="text-md lighter underline">Google Maps &#8599;</p>
            <p className="text-md lighter underline">Apple Maps &#8599;</p>
          </motion.div>

          <motion.div
                        initial={{opacity: 0, x: -100, }}
                        whileInView={{opacity: 1, x: 0, }}
                        transition={{duration: 1, delay: 1.5}}
            className="flex flex-col">
            <h2 className="font-bold text-xl uppercase">Our Company</h2>
            <p className="text-md lighter underline">Mahatma &#8599;</p>

          </motion.div>
          
          </div> 
      







    <div
      className={`xl:mt-12 flex  flex-col gap-10 mb-10 md:px-[6rem] px-3 overflow-hidden bg-[var(--main)] rounded-2xl w-[90%] mx-auto `}
    >

      <motion.div

      initial={{
        opacity: 0, x: 100
      }}
      whileInView={{opacity: 1, x:0}}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 1,
}}
        className='flex-[0.75] pl-5 py-10 w-[90%]'
      >
        <h3 className= "text-white  md:text-[30px] sm:text-[20px] xs:text-[20px] text-[10px] tracking-wide light">Questions?</h3>
        <h3 className= "text-white font-semibold md:text-[50px] sm:text-[40px] xs:text-[35px] text-[20px] tracking-wide">ASK HERE...</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white  font-medium mb-4'>Your Name 😁</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Whta's your name?"
              className='py-4 px-6 placeholder:text-secondary text-white  outline-none border-b border-b-white bg-transparent geist lighter rounded-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Best Email 📧</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your e-mail address?"
              className='  py-4 px-6 placeholder:text-secondary text-white  outline-none border-b border-b-white bg-transparent geist lighter rounded-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white   font-medium mb-4'>Your question 💬 </span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to ask?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white   outline-none border-b border-b-white bg-transparent geist lighter rounded-none'
            />
          </label>

          <button
            type='submit'
            className='bg-[#222] py-2 px-7 rounded-full outline-none w-fit text-[#e2e2e2]  font-bold border border-[#c6c6c6]'
          >
            {loading ? "Sending..." : "Send "}
          </button>
        </form>
      </motion.div>






    </div>
    <motion.span
                initial={{
                  opacity: 0, y: -100
                }}
                whileInView={{opacity: 1, y:0}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 1,
                }}>
                 <Footer /> 
                 
    </motion.span>
</ScrollToTop>  
  );
};

export default Transition(Contact);
 