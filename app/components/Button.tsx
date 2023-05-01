import { DetailedHTMLProps, ButtonHTMLAttributes, forwardRef } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <button
      className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ${className}`}
      {...rest}
      ref={ref}>
      {children}
    </button>
  );
});
    
Button.displayName = 'Button';

export default Button;  
