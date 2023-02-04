import styles from './styles.module.css';
import { useState } from 'react';

export default function TreatmentComponent(){

    const [dispDef , setDispDef] = useState('');

    const treatments = ["ADHD" ,"Allergy" , "Asthma" , "Autism" , "DEPRESSION" ,
                        "Diabetes",  "Gastric disorders" ,"Kidney stones" ,"PCOD" , "Skin diseases"];
    const defs = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            ];

    return (
        <div className={styles.wholeCont}>
            <p className={styles.heading}>Treatments We Provide</p>
            <div className={styles.listCont}>
                {
                    treatments.map((item , index) => {
                        return (
                            <div key={index} className={ dispDef === treatments[index] ? styles.eachTreatmentContDisp : styles.eachTreatmentContHide } onClick={e => setDispDef(treatments[index])}>
                                <p className={styles.cardTop}>{treatments[index]}</p>
                                <div className={ dispDef === treatments[index] ? styles.cardBottomDisp : styles.cardBottomHide}>
                                    <img src='/whatsAppLogo.png'/>
                                </div>
                                <div className={dispDef === treatments[index] ? styles.defDisplay : styles.devInvisible}>{defs[index]}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}