import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import imageDatas from '../../utils/data';
const Work = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(imageDatas)
    },[images])
    
    return (
        <div className={styles.workContainer}>
            {images.map((image, i) => (
                <div className={styles.imageItem}>
                    <img src={image.url} key={i} alt={image.name} width={616} height={520}/>
                </div>
            ))}
        </div>
    )
}

export default Work;