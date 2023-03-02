import styles from './styles.module.css';
import Image from 'next/image';

export default function AboutMeComponent() {

    const allDays = [1,2,3,4,5,6,7];

    return (
        <div className={styles.wholeCont}>
            <div className={styles.topCont}>
                <div className={styles.topLCont}>
                    <p className={styles.heading1}>Biography</p>
                    <p className={styles.name}>Dr Varsha Magar</p>
                    <p className={styles.desc}>Dr Varsha Magar passed BHMS in 2012 and went on to assist Dr. Atul Jaggi & Dr. Latika Jaggi from 2012 to 2015. During this period, she acquired the Diploma from IACH. She practices at Nashik and Kharghar, Navi Mumbai, Maharashtra, India.</p>
                    <p className={styles.desc}>BHMS<br/>PGDPC<br/>Dip IACH (Greece)<br/>Asst. Co ordinator of E learning (IACH)</p>
                    <p className={styles.name}>Experience : 10 Years</p>
                </div>
            </div>
            <div className={styles.description}>
                <p className={styles.heading1}>Biography</p>
                <p className={styles.name}>Dr Varsha Magar</p>
                <p className={styles.desc}>Dr Varsha Magar passed BHMS in 2012 and went on to assist Dr. Atul Jaggi & Dr. Latika Jaggi from 2012 to 2015. During this period, she acquired the Diploma from IACH. She practices at Nashik and Kharghar, Navi Mumbai, Maharashtra, India.</p>
                <p className={styles.desc2}>BHMS<br/>PGDPC<br/>Dip IACH (Greece)<br/>Asst. Co ordinator of E learning (IACH)</p>
                <p className={styles.name}>Experience : 10 Years</p>
            </div>
            <div className={styles.bottomCont}>
                <p className={styles.scheduleHeading}>Clinic Timing</p>
                <div className={styles.scheduleCont}>
                    <div className={styles.eachDayCont}>
                        <p className={styles.day}>Monday : </p>
                        <p className={styles.day}>Tuesday : </p>
                        <p className={styles.day}>Wednesday : </p>
                        <p className={styles.day}>Thursday : </p>
                        <p className={styles.day}>Friday : </p>
                        <p className={styles.day}>Saturday : </p>
                        <p className={styles.day}>Sunday : </p>
                    </div>
                    <div className={styles.eachDayCont}>
                    {
                        allDays.map((item) => {
                            return (
                                <div key={item} className={styles.timeCont}>
                                    <p className={styles.day}> 10 <p className={styles.to}>to</p> 2 am </p>
                                    <p className={styles.to}>-</p>
                                    <p className={styles.day}> 5 <p className={styles.to}>to</p> 9 pm</p>
                                </div>
                            )
                        })
                    }
                    </div> 
                </div>
                <p className={styles.redText}>* Clinic also open on Sunday *</p>
            </div>
        </div>
    )
}