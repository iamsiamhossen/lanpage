const button = ({ text, onClick, className = "" }) => {
    return (
      <button
        onClick={onClick}
        className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default button;