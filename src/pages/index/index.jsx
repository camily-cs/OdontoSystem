import "../index/style.css";
import { Sidebar } from "../../components/Sidebar"
import { HeaderPag } from "../../components/HeaderPag";

export const Index = () => {
    return(
        <div>
            <Sidebar />
            <div className="containerPag">
                <HeaderPag />
                <div className="containerSelect">
                    <div className="select">
                        <div className="row">
                            <h4 className="txtSelect">Período</h4>
                            <select />
                        </div>
                        <div className="row">
                            <h4 className="txtSelect">Dentista</h4>
                            <select />
                        </div>
                    </div>
                </div>
                <div className="containerInfo row">
                    <div className="pacAgendados">
                        <h1>1</h1>
                        <h4>Pacientes agendados</h4>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}