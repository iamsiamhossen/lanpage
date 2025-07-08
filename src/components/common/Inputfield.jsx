const inputfield = ({ placeholder, className = "" }) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className={`border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    );
  };
  
  export default inputfield;