import "./sidebar.css";
import { faHandshake,faHome,faClipboardList ,faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar=()=>{

    return(
        <>

        <div className=" container-sidebar">
            <div className="title-sidebar"><FontAwesomeIcon className="icon-sidebar" icon={faScrewdriverWrench} />ADMIN</div>
            <ul>
                <li><a className ="links-sidebar"href="./rooms"><FontAwesomeIcon className="icon-sidebar" icon={faHome} />Salas</a></li>
                <li><a className ="links-sidebar" href="./meets"><FontAwesomeIcon className="icon-sidebar" icon={faHandshake} />Reuniones</a></li>
                <li><a className ="links-sidebar" href="./queries"><FontAwesomeIcon className="icon-sidebar" icon={faClipboardList} /> Consultas</a></li>
            </ul> 

        </div>
        </>
    );
}
export default Sidebar;