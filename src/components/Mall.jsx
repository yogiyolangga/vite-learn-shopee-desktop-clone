import { useCallback, useEffect, useRef, useState } from "react";

export const Mall = () => {
  return (
    <>
      <div className="w-[1190px] mx-auto bg-white shadow-md rounded-md">
        <Top />
        <MallProduct />
      </div>
    </>
  );
};

export const Top = () => {
  return (
    <>
      <div className="w-full flex justify-between px-2 h-[60px] mb-2 border-b">
        <div className="flex items-center gap-3 w-fit px-3">
          <a href="/" className="text-[17px] font-semibold text-[#D0011B]">
            SHOPEE MALL
          </a>
          <span>|</span>
          <img
            src="/assets/icons/return-icons.png"
            alt="Return Icons"
            className="w-[17px] h-[17px]"
          />
          <span className="text-[16px] font-medium text-[#333333]">
            7 Hari Pengembalian
          </span>
          <img
            src="/assets/icons/verif-icons.png"
            alt="Verif Icons"
            className="w-[17px] h-[17px]"
          />
          <span className="text-[16px] font-medium text-[#333333]">
            100% Ori
          </span>
          <img
            src="/assets/icons/bus-icons.png"
            alt="Bus Icons"
            className="w-[17px] h-[17px]"
          />
          <span className="text-[16px] font-medium text-[#333333]">
            Gratis Ongkir
          </span>
        </div>
        <a href="/" className="flex items-center gap-1 px-3">
          <span className="text-[#D0011B] font-light text-[14px]">
            Lihat Semua
          </span>
          <div className="w-[28px] h-[28px] flex justify-center items-center bg-[#D0011B] rounded-full">
            <img
              src="/assets/icons/arrow-right.png"
              alt="Arrow Right"
              className="w-[15px] h-[15px]"
            />
          </div>
        </a>
      </div>
    </>
  );
};

export const MallProduct = () => {
  const [translate, setTranslate] = useState("");
  const [rightArrowOpacity, setRightArrowOpacity] = useState("opacity-100");
  const [leftArrowOpacity, setLeftArrowOpacity] = useState("opacity-0");

  function slideNext() {
    setTranslate("-translate-x-[50%]");
    setTimeout(() => {
      setRightArrowOpacity("opacity-0");
      setLeftArrowOpacity("opacity-100");
    }, 300);
  }

  function slideprev() {
    setTranslate("translate-x-0");
    setTimeout(() => {
      setRightArrowOpacity("opacity-100");
      setLeftArrowOpacity("opacity-0");
    }, 300);
  }
  return (
    <>
      <div className="w-full flex relative">
        <div className="w-[390px] h-[463.89px]">
          <Slider />
        </div>
        <div className="relative group">
          <div
            onClick={slideNext}
            className={`flex items-center justify-center w-[25px] h-[25px] rounded-full bg-white absolute shadow-md shadow-black/40 -right-2 z-10 top-[50%] -translate-y-[50%] group-hover:scale-150 transition-all duration-300 cursor-pointer ${rightArrowOpacity}`}
          >
            <img
              src="assets/icons/arrowright-icons.png"
              alt="Arrow Right"
              className="w-[15px] h-[15px]"
            />
          </div>
          <div
            onClick={slideprev}
            className={`flex items-center justify-center w-[25px] h-[25px] rounded-full bg-white absolute shadow-md shadow-black/40 -left-2 z-10 top-[50%] -translate-y-[50%] group-hover:scale-150 transition-all duration-300 cursor-pointer ${leftArrowOpacity}`}
          >
            <img
              src="assets/icons/arrowright-icons.png"
              alt="Arrow Right"
              className="w-[15px] h-[15px] rotate-180"
            />
          </div>
          <div className="w-[800px] overflow-hidden">
            <div
              className={`w-[1600px] flex flex-wrap transition-all duration-500 ${translate}`}
            >
              <BrandMall src={"assets/img/sm1.png"} disc={"Diskon s/d 80%"} />
              <BrandMall src={"assets/img/sm2.png"} disc={"Diskon s/d 50%"} />
              <BrandMall src={"assets/img/sm3.png"} disc={"Diskon s/d 40%"} />
              <BrandMall src={"assets/img/sm4.png"} disc={"Diskon s/d 30%"} />
              <BrandMall src={"assets/img/sm5.png"} disc={"Diskon s/d 70%"} />
              <BrandMall src={"assets/img/sm6.png"} disc={"Diskon s/d 40%"} />
              <BrandMall src={"assets/img/sm7.png"} disc={"Diskon s/d 60%"} />
              <BrandMall src={"assets/img/sm8.png"} disc={"Diskon s/d 80%"} />
              <BrandMall src={"assets/img/sm8.png"} disc={"Diskon s/d 70%"} />
              <BrandMall src={"assets/img/sm7.png"} disc={"Diskon s/d 60%"} />
              <BrandMall src={"assets/img/sm6.png"} disc={"Diskon s/d 40%"} />
              <BrandMall src={"assets/img/sm5.png"} disc={"Diskon s/d 50%"} />
              <BrandMall src={"assets/img/sm4.png"} disc={"Diskon s/d 30%"} />
              <BrandMall src={"assets/img/sm3.png"} disc={"Diskon s/d 60%"} />
              <BrandMall src={"assets/img/sm2.png"} disc={"Diskon s/d 80%"} />
              <div className="w-[200px] h-[231.95px] flex justify-center items-center gap-2">
                <span className="text-[14px] text-[#D0011B] cursor-pointer">
                  Lihat Semua
                </span>
                <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#D0011B] rounded-full cursor-pointer">
                  <img
                    src="/assets/icons/arrow-right.png"
                    alt="Arrow Right"
                    className="w-[15px] h-[15px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Slider = () => {
  const malls = [
    {
      url: "assets/img/mall1.png",
    },
    {
      url: "assets/img/mall2.jpeg",
    },
    {
      url: "assets/img/mall3.jpeg",
    },
    {
      url: "assets/img/mall4.png",
    },
    {
      url: "assets/img/mall5.jpeg",
    },
    {
      url: "assets/img/mall6.jpeg",
    },
    {
      url: "assets/img/mall7.png",
    },
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const timerRef = useRef(null);

  const handleNextImage = useCallback(() => {
    setImageIndex((index) => {
      if (index === malls.length - 1) return 0;
      return index + 1;
    });
  });

  function handlePrevImage() {
    setImageIndex((index) => {
      if (index === 0) return malls.length - 1;
      return index - 1;
    });
  }

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      handleNextImage();
    }, 7000);
    return () => clearTimeout(timerRef.current);
  }, [handleNextImage]);

  return (
    <>
      <div className="relative w-full h-full flex overflow-hidden cursor-pointer group">
        {malls.map((mall) => (
          <img
            key={mall.url}
            src={mall.url}
            alt="Slider"
            className="w-[390px] h-[463.89px] flex-shrink-0 flex-grow-0 ease-in-out duration-300"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
        <div
          onClick={handlePrevImage}
          className="w-[35px] h-[60px] bg-[#0000002E] absolute mt-auto mb-auto top-0 bottom-0 cursor-pointer justify-center items-center rounded-[3px] opacity-0 flex group-hover:opacity-100 duration-500"
        >
          <img
            src="/assets/icons/arrow-left.png"
            alt="Arrow Left"
            className="w-[10px]"
          />
        </div>
        <div
          onClick={handleNextImage}
          className="w-[35px] h-[60px] bg-[#0000002E] absolute mt-auto mb-auto top-0 bottom-0 right-0 cursor-pointer justify-center items-center rounded-[3px]  opacity-0 flex group-hover:opacity-100 duration-500"
        >
          <img
            src="/assets/icons/arrow-right.png"
            alt="Arrow Right"
            className="w-[10px]"
          />
        </div>
        <div className="absolute bottom-4 left-[50%] -translate-x-[50%] flex gap-2">
          {malls.map((_, index) => (
            <div
              key={index}
              className={`w-[10px] h-[10px] border rounded-full ${
                index === imageIndex
                  ? "bg-[#EE4D2D]"
                  : "bg-[#D9D9D9] bg-opacity-60"
              }`}
              aria-label={`View Image ${index}`}
              onClick={() => setImageIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export const BrandMall = ({ src, disc }) => {
  return (
    <>
      <div className="relative w-[200px] h-[231.95px]">
        <img src={src} alt="Mall" className="w-[200px]" />
        <span className="text-[14px] text-[#D0011B] absolute bottom-2 left-[50%] -translate-x-[50%]">
          {disc}
        </span>
      </div>
    </>
  );
};
