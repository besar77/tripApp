import React from "react";
import Title from "./Title";
import { tours } from "../data";

export default function Tours() {
  return (
    <div>
      <section className="section" id="tours">
        <Title title={"featured"} subTitle={"tours"} />

        <div className="section-center featured-center">
          {tours.map((t) => (
            <article className="tour-card" key={t.id}>
              <div className="tour-img-container">
                <img src={t.img} className="tour-img" alt="" />
                <p className="tour-date">{t.tourDate}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{t.tourTitle}</h4>
                </div>
                <p>{t.tourTitleText}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {t.tourFooterSpan}
                  </p>
                  <p>{t.tourFooterDays}</p>
                  <p>{t.tourFooterPrice}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
