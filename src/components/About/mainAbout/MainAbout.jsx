import React, { useEffect, useState } from "react";
import styles from "./MainAbout.module.scss";
import slider1 from "../../../assets/images/aboutPage/abou1.jpg";
import slider2 from "../../../assets/images/aboutPage/abou1.jpg";
// import slider2 from "./wheels.png";

import slider3 from "../../../assets/images/aboutPage/abou1.jpg";
import slider4 from "../../../assets/images/aboutPage/abou1.jpg";
import { Carousel } from "react-bootstrap";
import { ReactComponent as Next } from "../../../assets/images/aboutPage/next.svg";
import { ReactComponent as Prev } from "../../../assets/images/aboutPage/prev.svg";
import spare1 from "../../../assets/images/aboutPage/spare1.png";
import spare2 from "../../../assets/images/aboutPage/spare2.png";
import { getCompanyInfo } from "../../../api/companyInfoAPI";
import miniImng from "./mini.jpg";
const Slider = () => {
  return (
    <>
      <div className={styles.itemWrapper}>
        <img className={styles.item} src={localStorage.getItem('about_photo1')} alt="First slide" />
      </div>
    </>
  );
};

export const MainAbout = () => {
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      await getCompanyInfo().then(setCompanyInfo);
    }
    fetchData()
  }, [companyInfo]);


  return (
    <section className={styles.wrapper}>
      <img src={spare1} alt={"spare1"} className={styles.spare1} />
      <img src={spare2} alt={"spare2"} className={styles.spare2} />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>О компании</h1>
          <div dangerouslySetInnerHTML={{ __html: localStorage.getItem('about_company_info') }} />
        </div>
        <div className={styles.sliderWrapp}>
          <Slider />
          <div className={styles.thumbnails}>
            <div className={styles.thumbnailWrapper}>
              <img src={localStorage.getItem('about_photo2')} alt="" />
            </div>
            <div className={styles.thumbnailWrapper}>
              <img src={localStorage.getItem('about_photo3')} alt="" />
            </div>
            <div className={styles.thumbnailWrapper}>
              <img src={localStorage.getItem('about_photo4')} alt="" />
            </div>
            <div className={styles.thumbnailWrapper}>
              <img src={localStorage.getItem('about_photo5')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
