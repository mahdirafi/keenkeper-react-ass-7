 
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      
      <h1 className="text-7xl font-bold text-[#244D3F]">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#244D3F] text-white rounded hover:bg-[#0f221c] duration-300"
      >
        Back To Home
      </Link>

    </div>
  );
};

export default ErrorPage;