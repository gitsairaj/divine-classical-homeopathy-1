import { useState } from "react";
import styles from './styles.module.css';
// import Treatments from "../Treatments";
// import Reviews from "../ReviewsPage";
// import AboutMe from '../AboutMePage';

export default function HomeComponent(){

    return (
        <div className={styles.wholeCont}>
            <div className={styles.topBox}>
                {/* <AboutMe /> */}
            </div>
            <div className={styles.midBox}>
                <div className={styles.midLBox}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3237178522136!2d73.07218811490077!3d19.049499587103053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3cd113b922f%3A0x7a7cc965ef16770b!2sDivine%20CLASSICAL%20HOMEOPATHY%20Clinic!5e0!3m2!1sen!2sin!4v1674812621397!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{border:"0"}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className={styles.midLBox}>
                    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                    <div class="elfsight-app-9f4c57ef-0119-4dd9-91c1-1fbf249cfbd6"></div>
                </div>
            </div>
            {/* <Treatments />
            <Reviews /> */}
        </div>
    )
}