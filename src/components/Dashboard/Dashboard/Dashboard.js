import React, { useState } from 'react'
import Menu from '../Menu/Menu';
import Route from '../RouteDiv/RouteDiv';
import Topbar from '../Topbar/Topbar';
import style from './Dashboard.module.css';

export default function Dashboard() {
    const [isOpen, setOpen] = useState(false)
    return (
        <section className="" id={style.Dashboard}>
            <Topbar isOpen={isOpen} setOpen={setOpen} />
            <Menu isOpen={isOpen} setOpen={setOpen} />
            <div className="col mt-5 pt-5 mx-5">
                <div className={style.colRight}>
                    <Route />
                </div>
            </div>
        </section>
    )
}
