import styles from './styles.module.css';
import Head from 'next/head';

export default function ReviewsComponent(){

    const imgNames = ['/reviewsImg1.png','/reviewsImg2.jpg','/reviewsImg3.png',
                    '/reviewsImg4.jpg','/reviewsImg5.jpg','/reviewsImg6.png'];
    const vidNames = [{'1':'/reviewsVid1a.mp4' , '2':'/reviewsVid1b.mp4'}];

    return (
        <div className={styles.wholeCont}>
            <Head>
                <title>Divine Classical Homeopathy</title>
                <link rel="logo icon" href="/logo.png" />
                <meta charset="UTF-8" />
                <meta name="description" content="Homeopathy website"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, Next.js"/>
                <meta name="author" content="Shiva Gowtham Kale"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <h3 className={styles.heading} >Customer Reviews</h3>
            <div className={styles.imageCont}>
            {
                imgNames.map((item) => {
                    return (
                        <img key={item} src={item} className={styles.eachImg} />
                    )
                })
            }
            </div>
            <div className={styles.videoCont}>
            {
                vidNames.map((item , index) => {
                    return (
                        <div key={index} className={styles.eachVidCont}>
                            <div className={styles.eachVidContBA}>
                                <p>Before</p>
                                <video src={vidNames[index]['1']} type='video/mp4' controls className={styles.eachVid}/>
                            </div>
                            <div className={styles.eachVidContBA}>
                                <p>After</p>
                                <video src={vidNames[index]['2']} type='video/mp4' controls className={styles.eachVid}/>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}