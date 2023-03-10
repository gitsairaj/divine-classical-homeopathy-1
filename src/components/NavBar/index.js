import { useState, useEffect } from "react";
import styles from './styles.module.css';
import Link from 'next/link';

export default function Navbar({ openMenu ,setOpenMenu}) {

    const [page , setPage] = useState('Home');

    return (
        <>
        <div className={styles.navbarCont} onClick={e => setOpenMenu(false)} >
            <Link href='https://api.whatsapp.com/send?phone=9028191233' legacyBehavior>
              <a target='_blank'>
                <div className={styles.navbarChatCont}>
                    <img src='/whatsAppLogo.png' className={styles.navbarChatImg} />
                    <div className={styles.navbarChatTextCont}>
                        <p>Chat with Dr</p>
                    </div>
                </div>
              </a>
            </Link>
            <Link href='/'><img src={"/logo.png"} className={styles.navbarBox1} /></Link>
            <div className={styles.mobileMenu} onClick={e => {e.stopPropagation(),setOpenMenu(!openMenu)}}>
                <hr className={styles.mobileMenuBars} />
                <hr className={styles.mobileMenuBars} />
                <hr className={styles.mobileMenuBars} />
            </div>
            {openMenu && <div className={styles.navbarOptionsContM} onCLick={e => e.stopPropagation()}>
                <Link href='/'>
                    <div className={styles.navbarOptions} onClick={e => {e.stopPropagation() ,setPage('Home'),setOpenMenu(false)}}>
                        Home
                    </div>
                </Link>
                <Link href='/treatments'>
                    <div className={styles.navbarOptions} onClick={e => {e.stopPropagation() ,setPage('Treatments'),setOpenMenu(false)}}>
                        Treatments
                    </div>
                </Link>
                <Link href='/reviews'>
                    <div className={styles.navbarOptions} onClick={e => {e.stopPropagation() ,setPage('Reviews'),setOpenMenu(false)}}>
                        Reviews
                    </div>
                </Link>
                <Link href='/aboutme'>
                    <div className={styles.navbarOptions} onClick={e => {e.stopPropagation() ,setPage('About Me'),setOpenMenu(false)}}>
                        About Me
                    </div>
                </Link>
            </div>
            }

            <div className={styles.navbarOptionsCont}>
                <Link href='/' onClick={e => setPage('Home')}>
                    <div className={styles.navbarOptions} 
                        style={{color: page === 'Home' ? "#ff8985" : null}}>
                        Home
                    </div>
                </Link>
                <Link href='/treatments' onClick={e => setPage('Treatments')}>
                    <div className={styles.navbarOptions} 
                        style={{color: page === 'Treatments' ? "#ff8985" : null}}>
                        Treatments
                    </div>
                </Link>
                <Link href='/reviews' onClick={e => setPage('Reviews')}>
                    <div className={styles.navbarOptions} 
                        style={{color: page === 'Reviews' ? "#ff8985" : null}}>
                        Reviews
                    </div>
                </Link>
                <Link href='/aboutme' onClick={e => setPage('About Me')}>
                    <div className={styles.navbarOptions} 
                        style={{color: page === 'About Me' ? "#ff8985" : null}}>
                        About Me
                    </div>
                </Link>
            </div>

            <Link href='https://api.whatsapp.com/send?phone=9028191233' legacyBehavior>
              <a target='_blank' className={styles.bookingButton}>
                <div>
                    Book Appointment
                </div>
              </a>
            </Link>
        </div>
        <div className={styles.adjustBox}></div>
        </>
    )
}