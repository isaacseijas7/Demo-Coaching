import React, { useRef } from "react";
import { Header } from "components/landing/Header";
import { Banner } from "components/landing/Banner";
import { SectionClients } from "components/landing/SectionClients";
import { SectionAbout } from "components/landing/SectionAbout";
import { SectionChangeYourLife } from "components/landing/SectionChangeYourLife";
import { SectionFreeConsultation } from "components/landing/SectionFreeConsultation";
import { SectionChooseYourCoach } from "components/landing/SectionChooseYourCoach";
import { SectionFaq } from "components/landing/SectionFaq";
import { SectionStories } from "components/landing/SectionStories";
import { SectionCourses } from "components/landing/SectionCourses";
import { SectionSubscribeNewsletter } from "components/landing/SectionSubscribeNewsletter";
import { SectionContact } from "components/landing/SectionContact";
import { Footer } from "components/landing/Footer";
import { ScrollToTop } from "components/landing/ScrollToTop";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 10);

const Home = () => {
  const headerRef = useRef(null);
  const headerScroll = (event) => {
    event.preventDefault();
    if (typeof headerRef === "object") {
      scrollToRef(headerRef);
    }
  };

  const aboutRef = useRef(null);
  const aboutScroll = (event) => {
    event.preventDefault();
    if (typeof aboutRef === "object") {
      scrollToRef(aboutRef);
    }
  };

  const changeyourlifeRef = useRef(null);
  const changeyourlifeScroll = (event) => {
    event.preventDefault();
    if (typeof changeyourlifeRef === "object") {
      scrollToRef(changeyourlifeRef);
    }
  };

  const chooseyourcoachRef = useRef(null);
  const chooseyourcoachScroll = (event) => {
    event.preventDefault();
    if (typeof chooseyourcoachRef === "object") {
      scrollToRef(chooseyourcoachRef);
    }
  };

  const faqRef = useRef(null);
  const faqScroll = (event) => {
    event.preventDefault();
    if (typeof faqRef === "object") {
      scrollToRef(faqRef);
    }
  };

  const coursesRef = useRef(null);
  const coursesScroll = (event) => {
    event.preventDefault();
    if (typeof coursesRef === "object") {
      scrollToRef(coursesRef);
    }
  };

  const contactRef = useRef(null);
  const contactScroll = (event) => {
    event.preventDefault();
    if (typeof contactRef === "object") {
      scrollToRef(contactRef);
    }
  };

  return (
    <>
      <Header
        refProp={headerRef}
        headerScroll={headerScroll}
        aboutScroll={aboutScroll}
        changeyourlifeScroll={changeyourlifeScroll}
        chooseyourcoachScroll={chooseyourcoachScroll}
        faqScroll={faqScroll}
        coursesScroll={coursesScroll}
        contactScroll={contactScroll}
      />
      <Banner chooseyourcoachScroll={chooseyourcoachScroll} />
      <SectionClients />
      <SectionAbout
        refProp={aboutRef}
        chooseyourcoachScroll={chooseyourcoachScroll}
      />
      <SectionChangeYourLife
        refProp={changeyourlifeRef}
        chooseyourcoachScroll={chooseyourcoachScroll}
      />
      <SectionFreeConsultation />
      <SectionChooseYourCoach refProp={chooseyourcoachRef} />
      <SectionFaq refProp={faqRef} />
      <SectionStories chooseyourcoachScroll={chooseyourcoachScroll}/>
      <SectionCourses refProp={coursesRef} />
      <SectionSubscribeNewsletter />
      <SectionContact refProp={contactRef} />
      <Footer chooseyourcoachScroll={chooseyourcoachScroll} />
      <ScrollToTop headerScroll={headerScroll} />
    </>
  );
};

export { Home };
