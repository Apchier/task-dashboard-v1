/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AsideLink = ({ to, children }) => {
    return (
        <Link to={to} className="flex items-center w-full px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
            {children}
        </Link>
    );
};

const Icon = ({ icon, text, className }) => {
    return (
        <div className={`${className}`}>
            {icon}
            <span className="mx-3">{text}</span>
        </div>
    );
};

AsideLink.Icon = Icon;
export default AsideLink;
