
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Meets from '../pages/meets/meets';
import Rooms from '../pages/rooms/rooms';



const Rutas=()=>{
    return(


        <Router>
            <Routes>
                <Route path="/rooms" element={<Rooms/>}></Route>
                <Route path="/meets" element={<Meets/>}></Route>
                
            </Routes>
        </Router>
    )
}

export default Rutas;