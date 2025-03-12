import React from 'react';
import './cv.css';
import Data from './Data';
import Card from "./Card"
const CV = () => {
  return (
    <section className="cv container section" id="cv">
      <h5>Skills I have</h5>
      <h2 className="section__title">       Experience</h2>
        <div className="cv__container grid">
          <div className="timeline grid">
            {Data.map((val, id) => {
              if (val.category === "education") {
                return(
                  <Card key={id}
                     icon={val.icon}
                     title={val.title}
                     year={val.year}
                     desc={val.desc} />
                )
              }
              return null;
            })}
          </div>

          <div className="timeline grid">
            {Data.map((val, index) => {
              if(val.category === "job_experience") {
                return(
                  <Card key={index}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc} />
                )
              }
              return null;
            })}
          </div>
        </div>
        

    </section>
  )
}

export default CV