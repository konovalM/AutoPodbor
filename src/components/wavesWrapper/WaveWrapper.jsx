import React from 'react'
import styles from './WaveWrapper.module.scss'
import f from './wave.svg'
export const WaveWrapper = ({children, ...props}) => {
    return (
      <div className={styles.wrapper}>
        {/* <svg
          width="366"
          height="3300"
          viewBox="0 0 366 3300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.img}
        >
          <path
            d="M0 25.9074C127.338 48.7674 250.608 -42.4732 366 25.9074V3285C230.783 3331.42 127.338 3251.96 0 3285V25.9074Z"
            fill="white"
          />
        </svg> */}

        <img {...props} className={styles.img} />
        {/* <img src={f} alt="" className={styles.img}/> */}
        {children}
      </div>
    );
};

