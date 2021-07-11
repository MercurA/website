import React, { useEffect, useState } from 'react';
import Image from 'next/image';
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
                <div className={styles.imageItem} key={i+1}>
                    <Image src={image.url} key={i} alt={image.name} layout="intrinsic" width={450} height={400}/>
                </div>
            ))}
        </div>
    )
}

export default Work;