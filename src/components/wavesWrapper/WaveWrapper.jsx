import React from 'react'
import styles from './WaveWrapper.module.scss'
import carAndTrees from "../../assets/images/carDesktop.png";
import carAndTreesMobile from "../../assets/images/carMobile.png";
import trees from '../../assets/images/bashDesktop.png'
import treesMobile from '../../assets/images/bashMobile.png'


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

        {children}
          <picture>
              <source srcSet={carAndTreesMobile} media="(max-width: 807px)" />
              <img
                  src={carAndTrees}
                  alt={"carAndTrees"}
                  className={styles.carAndTrees}
              />
          </picture>
          <picture>
              <source srcSet={treesMobile} media="(max-width: 807px)" />
              <img src={trees} alt={"trees"} className={styles.trees} />
          </picture>

      </div>
    );
};

