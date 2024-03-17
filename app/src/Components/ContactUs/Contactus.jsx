
import React, { useState, useEffect } from 'react';
import { FaRegAddressBook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from 'axios';
import './Contactus.css'

const Contactus = () => {

    return (
        <div className='Baba'>
            <section>

                <div class="section-header">
                    <div class="Acontainer">
                        <h2>Contact Us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>

                <div class="Acontainer">
                    <div class="row">

                        <div class="contact-info">
                            <div class="contact-info-item">
                                <div class="contact-info-content">
                                    <h4><FaRegAddressBook />Address</h4>
                                    <p>B-803 Embark Heights,<br /> Bandra, Mumbai <br />450001</p>
                                </div>
                            </div>

                            <div class="contact-info-item">
                                <div class="contact-info-content">
                                    <h4><FaPhoneAlt />Phone</h4>
                                    <p>571-457-2321</p>
                                </div>
                            </div>

                            <div class="contact-info-item">
                                <div class="contact-info-content">
                                    <h4><MdEmail />Email</h4>
                                    <p>shareplates@contact.org.in</p>
                                </div>
                            </div>
                        </div>

                        <div class="contact-form">
                            <form action="" id="contact-form">
                                <h2>Help Us Get Better</h2>
                                <div class="input-box">
                                    <input type="text" required="true" name=""/>
                                        <span>Full Name</span>
                                </div>

                                <div class="input-box">
                                    <input type="email" required="true" name="" />
                                    <span>Email</span>
                                </div>

                                <div class="input-box">
                                    <textarea required="true" name=""></textarea>
                                    <span>Share Your Experience</span>
                                </div>

                                <div class="input-box">
                                    <input type="submit" value="Send" name="" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
}

export default Contactus