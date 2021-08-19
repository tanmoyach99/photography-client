import React from "react";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import HomeBanner from "../components/homeBanner/Homebanner";
import Introduction from "../components/Introduction/Introduction";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Service/Service";
import TopBanner from "../components/TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TopBanner />
      <Introduction />
      <HomeBanner />
      <Service />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
