import "../HeaderPag/style.css";
import { FaBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import imgAdmin from "../../img/eu.jpg"


export const HeaderPag = () => {
    return(
        <div className="containerHeaderPag">
            <div className="iconsHeaderPag">
                <FaBell size={25} color="white" />
                <MdMessage size={25} color="white" />
                <hr />
                <img src={imgAdmin} alt="oi" className="imgAdmin" />
            </div>
        </div>
    )
}