import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

const socialLinks = [
  { id: 1, href: "#https://www.twitter.com", className: "fab fa-facebook" },
  { id: 2, href: "#https://www.twitter.com", className: "fab fa-twitter" },
  { id: 3, href: "#https://www.twitter.com", className: "fab fa-squarespace" },
];

const services = [
  {
    id: 1,
    className: "fas fa-wallet fa-fw",
    serviceTitle: "saving money",
    serviceText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    className: "fas fa-tree fa-fw",
    serviceTitle: "endless hiking",
    serviceText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    className: "fas fa-socks fa-fw",
    serviceTitle: "amazing comfort",
    serviceText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

const tours = [
  {
    id: 1,
    img: tour1,
    tourDate: "august 26th, 2020",
    tourTitle: "Tibet Adventure",
    tourTitleText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque" +
      "vitae tempore voluptatum maxime reprehenderit eum quod" +
      "exercitationem fugit, qui corporis.",
    tourFooterSpan: "china",
    tourFooterDays: "6 days",
    tourFooterPrice: "from $2100",
  },
  {
    id: 2,
    img: tour2,
    tourDate: "october 1th, 2020",
    tourTitle: "best of java",
    tourTitleText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque" +
      "vitae tempore voluptatum maxime reprehenderit eum quod" +
      "exercitationem fugit, qui corporis.",
    tourFooterSpan: "indonesia",
    tourFooterDays: "11 days",
    tourFooterPrice: "from $1400",
  },
  {
    id: 3,
    img: tour3,
    tourDate: "september 15th, 2020",
    tourTitle: "explore hong kong",
    tourTitleText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque" +
      "vitae tempore voluptatum maxime reprehenderit eum quod" +
      "exercitationem fugit, qui corporis.",
    tourFooterSpan: "hong kong",
    tourFooterDays: "8 days",
    tourFooterPrice: "from $5000",
  },
  {
    id: 4,
    img: tour4,
    tourDate: "december 5th, 2019",
    tourTitle: "kenya highlights",
    tourTitleText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque" +
      "vitae tempore voluptatum maxime reprehenderit eum quod" +
      "exercitationem fugit, qui corporis.",
    tourFooterSpan: "kenya",
    tourFooterDays: "20 days",
    tourFooterPrice: "from $3300",
  },
  {
    id: 4,
    img: tour4,
    tourDate: "december 5th, 2019",
    tourTitle: "kenya highlights Test",
    tourTitleText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque" +
      "vitae tempore voluptatum maxime reprehenderit eum quod" +
      "exercitationem fugit, qui corporis.",
    tourFooterSpan: "kenya",
    tourFooterDays: "20 days",
    tourFooterPrice: "from $3300",
  },
];

export { pageLinks, socialLinks, services, tours };
