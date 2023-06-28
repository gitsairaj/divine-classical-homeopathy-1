import styles from './styles.module.css';
import { useState } from 'react';
import SearchBar from '../SearchBar';
import Head from 'next/head';

export default function TreatmentComponent(){

    const [dispDef , setDispDef] = useState('');
    const [searchInput , setSearchInput] = useState('');

    // const treatments = ["ADHD" ,"Allergy" , "Asthma" , "Autism" , "DEPRESSION" ,
    //                     "Diabetes",  "Gastric disorders" ,"Kidney stones" ,"PCOD" , "Skin diseases"];

    const [treatments , setTreatments] = useState(["Anxiety", "Depression" ,"Autism" ,"Bedwetting" ,"Diabetes" ,"Thyroid disorder", "Kidney stones" ,"All skin diseases" ,"Psoriasis", "Migraine", "Rheumatism" ,"Varicose veins and ulcer" ,"Children diseases", "Joint & heel pain" ,"Hair fall" ,"Insomnia" ,"Covid 19" ,"Allergy" ,"Asthma" ,"Immunity deficiency" ,"Neuromuscular disorders", "Multiple sclerosis", "Psychiatric disorders" ,"Anaemia", "Pneumonia", "COPD" ,"Heart diseases" ,"Peptic ulcer", "IBS", "Gastritis","Ulcerative collitis","Malabsorption syndrome","Appendicitis","Piles, fissure & fistula","Gall stones","Liver diseases","Kidney diseases","Menstrual disorders","PCOD","Pre menstrual syndrome"]);

    // const defs = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    //         ];
    
    const treatmentsEmpty = [...treatments];
    const placeholder = 'Search for your problem';

    return (
        <div className={styles.wholeCont} onClick={e => setDispDef(false)}>
            <Head>
                <title>Divine Classical Homeopathy</title>
                <link rel="logo icon" href="/logo.png" />
                <meta charset="UTF-8" />
                <meta name="description" content="Homeopathy website"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, Next.js"/>
                <meta name="author" content="Shiva Gowtham Kale"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <p className={styles.heading}>Treatments We Provide</p>
            <SearchBar 
            searchList={treatments} 
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            placeholder = {placeholder}
            />
            <div className={styles.listCont}>
                {
                    treatments.filter((val) => {
                        if(searchInput === ''){
                            return val;
                        }
                        else if(val.toLowerCase().includes(searchInput.toLowerCase())){
                            return val;
                        }
                    }).map((item , index) => {
                        return (
                            <div key={index} className={ dispDef === item ? styles.eachTreatmentContDisp : styles.eachTreatmentContHide } 
                                onClick={e => {e.stopPropagation();setDispDef(item)}}>
                                    <p className={styles.cardTop}>{item}</p>
                                    {/* <div className={ dispDef === treatments1[index] ? styles.cardBottomDisp : styles.cardBottomHide}>
                                        <img src='/whatsAppLogo.png'/>
                                    </div> */}
                                    {/* <div className={dispDef === treatments[index] ? styles.defDisplay : styles.devInvisible}>{defs[index]}</div> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}