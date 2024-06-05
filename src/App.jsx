import { Header } from "./components/Header";
import { Baner } from "./components/Baner";
import { Kategori } from "./components/Kategori";
import { FlashSale } from "./components/FlashSale";
import { Mall } from "./components/Mall";
import { BestSeller } from "./components/BestSeller";
import { Recomendation } from "./components/Recomendation";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Float } from "./components/Float";
import { LcButton, Livechat } from "./components/Livechat";
import { useState } from "react";

export default function App() {
  const [livechatScale, setLivechatScale] = useState("scale-0");

  function handleLivechatScale() {
    setLivechatScale("scale-100")
  }

  function closeLiveChat() {
    setLivechatScale("scale-0");
  }
  return (
    <>
      <div>
        <Header />
        <Baner />
        <Kategori />
        <FlashSale />
        <Advertisment />
        <Mall />
        <BestSeller />
        <Recomendation />
        <About />
        <Footer />
        <Float />
        <LcButton handleLivechatScale={handleLivechatScale} />
        <Livechat livechatScale={livechatScale} closeLiveChat={closeLiveChat} />
      </div>
    </>
  );
}

export const Advertisment = () => {
  return (
    <>
    <div className="w-full py-6">
      <img src="/assets/img/baner-promo.png" alt="Baner Promo" className="w-[1190px] h-[109.45px] mx-auto shadow-md" />
    </div>
    </>
  )
}