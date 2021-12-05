import { Link } from 'react-router-dom';
import './Topbar.scss';
const Topbar = ({ isOpen, setOpen }) => {
    return (
        <div className={"Topbar " + (isOpen && "active")} id="topbar">

            <div className="wrapper">
                <div className="left">
                    <div className="dashLogo">
                        <Link to="/"> <span className="logo">Auto</span><span className="logoTwo">Repair</span> </Link>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setOpen(!isOpen)}>
                        <span className="line1"></span>
                        <span className="line1"></span>
                        <span className="line1"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;