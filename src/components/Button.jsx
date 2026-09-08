const Button = (prop) => {
  const { title, className, ...props } = prop;
  return (
    <button
      className={`text-base font-semibold mx-auto min-w-max text-white bg-customBlue transform transition-transform duration-300 hover:scale-95 px-5 py-2 inline-block  rounded-xl  ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;



