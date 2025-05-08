export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 font-medium text-white bg-black rounded-lg cursor-pointer hover:bg-gray-800 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}