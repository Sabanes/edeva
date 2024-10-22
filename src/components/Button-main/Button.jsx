const Button = ({ buttonText, className }) => {
  return (
      <button className={`my-10 group relative px-4 py-2 overflow-hidden rounded-full bg-[var(--main)] md:text-md text-sm shadow border ${className}`}>
        <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-white group-hover:text-[var(--main)] uppercase">
          {buttonText}
        </span>
      </button>
  );
};

export default Button;