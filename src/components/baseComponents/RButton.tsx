import React from 'react';

interface RButtonProps {
  children?: React.ReactNode;
  // existing props
}

const RButton = ({ children, ...props }: RButtonProps & { children?: React.ReactNode }) => {
  return (
    <button
      className="relative inline-block px-2.5 py-1.5 font-bold text-base tracking-wider text-[#17192b] bg-[#17192b] border-2 border-[#17192b] rounded-lg overflow-hidden outline-none cursor-pointer transition-all duration-400 group"
      {...props}
    >
      <span className="relative z-10 transition-colors duration-400 group-hover:text-white">
        {children}
      </span>
      <span
        className="absolute top-0 left-[-10%] w-[120%] h-full bg-gray-300 transform skew-x-[30deg] transition-transform duration-400 cubic-bezier(0.3, 1, 0.8, 1) group-hover:translate-x-full z-0"
      />
    </button>
  );
};

export default RButton;
