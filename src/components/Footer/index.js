import styles from './styles.module.css';
import Link from 'next/link';

export default function Footer(){

    const treatments1 = ["DEPRESSION", "PCOD" , "Skin diseases" , "Allergy" , "Autism"];
    const treatments2 = ["ADHD" , "Asthma" , "Gastric disorders" , "Kidney stones" , "Diabetes"];

    return (
        <div className={styles.wholeCont}>
            <div className={styles.topCont}>
                <div className={styles.topLCont}>
                    <img src='/logo.png' className={styles.topLImage} />
                    <Link href='/' legacyBehavior>
                      <a target='_blank'>
                        <div className={styles.topL1Cont}>
                            <img src='/locationIcon.png' />
                            <p>Plot no. 38, Shop no 4, Gayatri Sankul CHS, Sector 20, Kharghar, Navi Mumbai, Maharashtra 410210</p>
                        </div>
                      </a>
                    </Link>
                    <div className={styles.topL1Cont}>
                        <img src='/callIcon.png' />
                        <p>+91 9028191233</p>
                    </div>
                    <div className={styles.topL1Cont}>
                        <img src='/emailIcon.png' />
                        <p>drvarsha87@gmail.com</p>
                    </div>
                </div>
                <div className={styles.topRCont}>
                    <p className={styles.topRBHeader} >Quick Links</p>
                    <div className={styles.topRBCont}>
                        <div className={styles.topRB1Cont}>
                            {
                                treatments1.map((item) => {
                                    return (<Link key={item} href='/treatments' className={styles.eachQuickLink}>
                                                {item}
                                            </Link>)
                                })
                            }
                        </div>
                        <div className={styles.topRB2Cont}>
                            {
                                treatments2.map((item) => {
                                    return (<Link key={item} href='/treatments' className={styles.eachQuickLink}>
                                                {item}
                                            </Link>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.endCont}>
                <p>@2023 All Copyrights Reserved</p>
            </div>
        </div>
    )
}