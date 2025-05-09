const Card = ({ title, icon, skills }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 m-4 md:m-0">
        <div className="mb-6 flex justify-center text-cyan-400">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-center mb-4 text-black">{title}</h3>
        <ul className="space-y-2 ">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
                <svg
                    className="h-5 w-5 mr-2 text-cyan-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path d="M5 13l4 4L19 7"></path>
                </svg>
              <span className="text-gray-500">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Card;