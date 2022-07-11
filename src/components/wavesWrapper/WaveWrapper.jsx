import React from 'react'
import styles from './WaveWrapper.module.scss'
import carAndTrees from "../../assets/images/carDesktop.png";
import carAndTreesMobile from "../../assets/images/carMobile.png";
import trees from '../../assets/images/bashDesktop.png'
import treesMobile from '../../assets/images/bashMobile.png'


export const WaveWrapper = ({children, ...props}) => {
    return (
      <div className={styles.wrapper}>
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

