import "./style.css";
import Calendar from "react-calendar";
import Donut from "../../components/Donut";
import AreaChart from "../../components/AreaChart";


export const PainelControle = () => {
    return(
        <div className="containerPainelControle">
            <div className="containerSelect">
                    <div className="select">
                        <div className="row">
                            <h4 className="txtSelect">Período</h4>
                            <select>
                                <option value="0" default></option>
                                <option value="1">Há 1 semana</option>
                                <option value="2">Há 1 mês</option>
                                <option value="3">Há mais de um mês</option>
                            </select>
                        </div>
                        <div className="row">
                            <h4 className="txtSelect">Dentista</h4>
                            <select>
                                <option value="0" default></option>
                                <option value="1">Dra Camily</option>
                            </select>
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
                
                <div className="chart">
                    <div className="containerChart1">
                        <h4 className="titleChart">Pacientes</h4>
                        <div className="chart1">
                            <Donut />
                        </div>
                    </div>

                    <div className="containerChart2">
                        <h4 className="titleChart">Atendidos realizados</h4>
                        <div className="chart2">
                            <AreaChart />
                        </div>
                    </div>

                    <div className="calendar">
                        <Calendar />
                    </div> 
                </div>
        </div>
    )
}