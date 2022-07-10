import "../Sidebar/style.css";
import { FaTooth } from "react-icons/fa";
import {AiOutlineDashboard} from "react-icons/ai";
import {AiOutlineUserAdd} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { FaBookMedical } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { BsBoxArrowLeft } from "react-icons/bs";

export const Sidebar = () => {
    return(
        <div className="containerSidebar">
            <div className="row">
                <FaTooth className="iconPainel" size={40}/>
                <h3 className="txt">ODONTOSYSTEM</h3>
            </div>
            <hr />
            <div className="column">
                <div className="row">
                    <AiOutlineDashboard className="iconPainel" size={30} />
                    <h4 className="txt">Painel de gestão</h4>
                </div>
                <hr />
                <div className="row">
                    <AiOutlineUserAdd className="icons" size={20} />
                    <h4 className="txt">Cadastrar paciente</h4>
                </div>
                <div className="row">
                    <AiOutlineUserAdd className="icons" size={20} />
                    <h4 className="txt">Cadastrar dentista</h4>
                </div>
                <div className="row">
                    <FiUsers className="icons" size={20} />
                    <h4 className="txt">Listar pacientes</h4>
                </div>
                <div className="row">
                    <FiUsers className="icons" size={20} />
                    <h4 className="txt">Listar dentistas</h4>
                </div>
                <div className="row">
                    <FaBookMedical className="icons" size={20} />
                    <h4 className="txt">Agendar consultas</h4>
                </div>
                <div className="row">
                    <FaBook className="icons" size={20} />
                    <h4 className="txt">Consultas agendadas</h4>
                </div>
                <div className="row sair">
                    <BsBoxArrowLeft className="icons" size={20} />
                    <h4 className="txt">Sair</h4>
                </div>
            </div>
        </div>
    )
}