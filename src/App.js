import React from "react";
import styles from "./style.module.css";

const Grid = () => {
  return (
    <div className={styles.main}>
      <div className={styles.nav_bar}>
        <div>
          <b className={styles.logoName}>EDYODA</b>
          <br></br>
          <a href="#" className={styles.logo_base}>
            Stories
          </a>
        </div>
        <div>EXPLORE CATEGORIES</div>
        <p>
          EdYoda is free learning and knowledge sharing platform for techies
        </p>
        <button className={styles.nav_button}>Go To Main Website</button>
      </div>

      <div>
        <h1 className={styles.heading}>Trending Posts</h1>
        <div className={styles.top_images}>
          <img
            className={styles.latestimage}
            src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg"
          ></img>
          <div className={styles.image_2}>
            <a>
              <img
                className={styles.image_2}
                src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg"
              ></img>

              <img
                className={styles.image_2}
                src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className={styles.heading_3}>Latest Post</h1>
        <div>
          <p className={styles.heading_4}>Filter By Category</p>
        </div>
        <div className={styles.heading_5}>
          <button className={styles.button_2}>All</button>
          <button className={styles.button_2}>Artificial Intelligence</button>
          <button className={styles.button_2}>Cloud computing</button>
          <button className={styles.button_2}>Devop</button>
          <button className={styles.button_2}>Programming Language</button>
          <button className={styles.button_2}>
            Mobile Application Development
          </button>
          <button className={styles.button_2}>Technology And tools</button>
          <br></br>
          <button className={styles.button_2}>Get a job in Tect Company</button>
          <button className={styles.button_2}>Others</button>
        </div>
      </div>
      <section className={styles.grid}>
        <div>
          <a href="#">
            <div className={styles.card}>
              <div>
                <img
                  className={styles.imgg}
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg"
                ></img>
                <div className={styles.heads}>
                  <h2>Fresh Graduate or IT professionals-2..</h2>
                  <h4>
                    <a>kalyani Murthi</a> | 13 may 2022
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                    has been the industry' standard dummy text ever since the
                    1500s,<br></br>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type<br></br>
                    specimen book.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#">
            <div className={styles.card}>
              <div>
                <img
                  className={styles.imgg}
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg"
                ></img>
                <div className={styles.heads}>
                  <h2>Fresh Graduate or IT professionals-2..</h2>
                  <h4>
                    <a>kalyani Murthi</a> | 13 june 2022
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                    has been the industry' standard dummy text ever since the
                    1500s,<br></br>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type<br></br>
                    specimen book.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#">
            <div className={styles.card}>
              <div>
                <img
                  className={styles.imgg}
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"
                ></img>
                <div className={styles.heads}>
                  <h2>Fresh Graduate or IT professionals-2..</h2>
                  <h4>
                    <a>kalyani Murthi</a> | 23 may 2022
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                    has been the industry' standard dummy text ever since the
                    1500s,<br></br>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type<br></br>
                    specimen book.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#">
            <div className={styles.card}>
              <div>
                <img
                  className={styles.imgg}
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png"
                ></img>
                <div className={styles.heads}>
                  <h2>Fresh Graduate or IT professionals-2..</h2>
                  <h4>
                    <a>kalyani Murthi</a> | 23 july 2022
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                    has been the industry' standard dummy text ever since the
                    1500s,<br></br>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type<br></br>
                    specimen book.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#">
            <div className={styles.card}>
              <div>
                <img
                  className={styles.imgg}
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg"
                ></img>
                <div className={styles.heads}>
                  <h2>Fresh Graduate or IT professionals-2..</h2>
                  <h4>
                    <a>kalyani Murthi</a> | 29 may 2022
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                    has been the industry' standard dummy text ever since the
                    1500s,<br></br>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type<br></br>
                    specimen book.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#">
            <div className={styles.card}>
              <div>
                <img
                  className={styles.imgg}
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg"
                ></img>
                <div className={styles.heads}>
                  <h2>Fresh Graduate or IT professionals-2..</h2>
                  <h4>
                    <a>kalyani Murthi</a> | 14 jan 2022
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                    has been the industry' standard dummy text ever since the
                    1500s,<br></br>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type<br></br>
                    specimen book.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#">
            <div className={styles.card}>
              <div>
                <img
                  className={styles.imgg}
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png"
                ></img>
                <div className={styles.heads}>
                  <h2>Fresh Graduate or IT professionals-2..</h2>
                  <h4>
                    <a>kalyani Murthi</a> | 19 august 2022
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                    has been the industry' standard dummy text ever since the
                    1500s,<br></br>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type<br></br>
                    specimen book.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#">
            <div className={styles.card}>
              <div>
                <img
                  className={styles.imgg}
                  src="https://edyoda.s3.amazonaws.com/media/blog-images/WhatsApp_Image_2019-06-19_at_17.55.10.jpeg"
                ></img>
                <div className={styles.heads}>
                  <h2>Fresh Graduate or IT professionals-2..</h2>
                  <h4>
                    <a>kalyani Murthi</a> | 12 may 2022
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                    has been the industry' standard dummy text ever since the
                    1500s,<br></br>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type<br></br>
                    specimen book.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Grid;
