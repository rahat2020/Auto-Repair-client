import React from 'react';
import style from './Appointment.module.css';
import LeftMan from '../../../img/LeftMan.png';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
export default function Appointment() {

    const history = useHistory();
    function sendMail (e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_pyu83mf',
            'template_i440tzb', 
            e.target,
            'user_Np4T9qbdgv2Y7ju11odv7')
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        title: 'Hey yoo dude!',
                        text: 'Your email has been sent Rahat successfully',
                        icon: 'success'
                    }).then((result) => {
                        if (result) {
                            history.push('/')
                            console.log(result)
                        }
                    })
                }
                if (response.status === 401) {
                    alert('data is not uploaded')
                }
            })
            .catch(err =>{
                console.log(err.message)
            })
    }
    return (
        <section className="mb-2" id={style.appointment}>
            <div data-aos="fade-up" className="container">
                <div className={style.headTitle}>
                    <h3 className={style.title}>get free appointment</h3>
                    <FontAwesomeIcon icon={faChevronDown} className={style.fontIcon}/>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div data-aos="fade-up" className={style.colLeft}>
                            <img className={style.LeftImg} src={LeftMan} alt="" />
                        </div> 
                    </div>
                    <div className="col-md-8">
                        <div data-aos="fade-up" className="mb-5" id={style.colRight}>
                            <div data-aos="zoom-in-up" className="container" id={style.form}>
                                <form class="row g-3"  onSubmit={sendMail}>
                                    <div class="col-md-6">
                                        <input type="email" class="form-control" placeholder="Email" name="user_email" />
                                    </div>
                                    <div class="col-md-6">
                                        <input type="name" class="form-control" placeholder="Name" name="name" />
                                    </div>
                                    <div class="col-12">
                                        <textarea type="text" rows="5" class="form-control" placeholder="Your message" name="message"/>
                                    </div>
                                    <div class="col-12">
                                       <button class={style.slideContact}>Send message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
