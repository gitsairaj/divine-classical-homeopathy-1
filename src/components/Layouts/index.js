import { useState } from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';

export default function Layout({children}){

    const [openMenu , setOpenMenu] = useState(false);

    return (
        <div onClick={e => setOpenMenu(false)}>
            <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <main>{children}</main>
            <Footer />
        </div>
    )
}