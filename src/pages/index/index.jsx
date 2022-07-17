import "../index/style.css";
import { Sidebar } from "../../components/Sidebar"
import { HeaderPag } from "../../components/HeaderPag";
import { PainelControle } from "../../components/PainelControle";


export const Index = () => {
    return(
        <div>
            <HeaderPag/>
            <div className="containerPag">
                <Sidebar />
                <PainelControle/>
            </div>
        </div>
    )
}