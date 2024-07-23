/* eslint-disable react/prop-types */
const CardElement = ({ children }) => {
    return (
        <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            {children}
        </div>
    )
}

const Icon = ({ icon, className }) => {
    return (
        <div className={`p-3 bg-indigo-600 bg-opacity-75 rounded-full ${ className }`}>
            {icon}
        </div>
    )
}

const Desc = ({ amount, text }) => {
    return (
        <div className="mx-5">
            <h4 className="text-2xl font-semibold text-gray-700">{amount}</h4>
            <div className="text-gray-500">{text}</div>
        </div>
    )
}

CardElement.icon = Icon
CardElement.desc = Desc
export default CardElement