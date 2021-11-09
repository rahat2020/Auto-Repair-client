import React from 'react'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Route from '../RouteDiv/RouteDiv';
import style from './Dashboard.module.css';

export default function Dashboard() {
    let { url } = useRouteMatch();
    return (
        <section className="" id={style.Dashboard}>
            <div className="row">
                <div className="col-md-3" id={style.colLeft}>
                    <div className={style.dashLogo}>
                        <Link to="/"> <span className={style.logo}>Auto</span><span className={style.logoTwo}>Repair</span> </Link>
                    </div>

                    <div className="" id={style.sideBar}>
                        <ul>
                            <li>
                                <Link className={style.li} to={`${url}/addService`}>Add Service</Link>
                            </li>
                            <li>
                                <Link className={style.li} to={`${url}/admin`}>Admin</Link>
                            </li>
                            <li>
                                <Link className={style.li} to={`${url}/addReview`}>Add Review</Link>
                            </li>
                            <li>
                                <Link className={style.li} to={`${url}/manage`}>Manage services</Link>
                            </li>
                            <li>
                                <Link className={style.li} to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="col-md-9">
                    <div className={style.colRight}>
                        <Route />
                    </div>
                </div>
            </div>
        </section>
    )
}
