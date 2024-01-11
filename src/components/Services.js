import React from "react";
import Title from "./Title";
import { services } from "../data";

export default function Services() {
  return (
    <div>
      <section className="section services" id="services">
        <Title title={"out"} subTitle={"services"} />

        <div className="section-center services-center">
          {services.map((s) => (
            <article className="service" key={s.id}>
              <span className="service-icon">
                <i className={s.className}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{s.serviceTitle}</h4>
                <p className="service-text">{s.serviceText}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
