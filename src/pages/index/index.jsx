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
                    <div className="info color1">
                        <h1 className="txtN">20</h1>
                        <h4>Pacientes agendados</h4>
                    </div>
                    <div className="info color2">
                        <h1 className="txtN">12</h1>
                        <h4>Pacientes confirmados</h4>
                    </div>
                    <div className="info color3">
                        <h1 className="txtN">10</h1>
                        <h4>Pacientes atendidos</h4>
                    </div>
                    <div className="info color4">
                        <h1 className="txtN">3</h1>
                        <h4>Pacientes que faltaram</h4>
                    </div>
                </div>
                
                <div className="dashboard">
                    <div className="infoGraphic">
                        <h4>Pacientes</h4>
                    </div>

                    <div className="infoGraphic">
                        <h4>Especialidades</h4>
                    </div>

                    <div className="infoGraphic">
                        <h4>Conveniados</h4>
                    </div>

                    
                </div>

                
            </div>
            
        </div>
    )
}