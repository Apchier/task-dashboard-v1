import CardElement from "../../elements/dashboard/CardElement";
import { FaShoppingCart } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { FaShoppingBag } from "react-icons/fa";

export default function Card() {
    return (
        <div className="flex flex-wrap -mx-6">
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                <CardElement>
                    <CardElement.icon icon={<TiGroup className="text-[2rem] text-white" />} className={"bg-blue-500"} />
                    <CardElement.desc amount="8,282" text="New Users" />
                </CardElement>
            </div>

            <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                <CardElement>
                    <CardElement.icon icon={<FaShoppingCart className="text-[2rem] text-white" />} className={"bg-orange-600"} />
                    <CardElement.desc amount="200,521" text="Total Orders" />
                </CardElement>
            </div>

            <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                <CardElement>
                    <CardElement.icon icon={<FaShoppingBag className="text-[2rem] text-white" />} className={"bg-pink-600"} />
                    <CardElement.desc amount="215,542" text="Available Products" />
                </CardElement>
            </div>
        </div>
    )
}