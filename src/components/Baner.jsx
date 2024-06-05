import { useState, useEffect, useRef, useCallback } from "react";

export const Baner = () => {
  const baners = [
    {
      url: "assets/img/baner1.jpg",
    },
    {
      url: "assets/img/baner2.jpg",
    },
    {
      url: "assets/img/baner3.jpg",
    },
    {
      url: "assets/img/baner4.jpg",
    },
    {
      url: "assets/img/baner5.jpg",
    },
  ];
  return (
    <>
      <div className="w-full mt-[120px] bg-white border border-[#BFBFBF] shadow-sm pt-6">
        <div className="w-[1196px] h-[257px] flex gap-2 mx-auto rounded-[5px]">
          <ImageSlider baners={baners} />
          <div className="flex flex-col justify-between h-[257px]">
            <div>
              <img
                src="/assets/img/baner2.jpg"
                className="w-[420px] h-[126px] rounded-[5px]"
                alt="Baner"
              />
            </div>
            <div>
              <img
                src="/assets/img/baner3.jpg"
                alt="Baner"
                className="w-[420px] h-[126px] rounded-[5px]"
              />
            </div>
          </div>
        </div>
        <div className="w-[1196px] mx-auto py-1">
          <QuickAccess />
        </div>
      </div>
    </>
  );
};

export const ImageSlider = ({ baners }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const timerRef = useRef(null);

  const showNextImage = useCallback(() => {
    setImageIndex((index) => {
      if (index === baners.length - 1) return 0;
      return index + 1;
    });
  });

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return baners.length - 1;
      return index - 1;
    });
  }

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      showNextImage();
    }, 7000);
    return () => clearTimeout(timerRef.current);
  }, [showNextImage]);

  return (
    <>
      <div className="relative w-[766px] h-[257px] cursor-pointer group">
        <div className="w-full h-full flex overflow-hidden rounded-[5px]">
          {baners.map((url) => (
            <img
              key={url.url}
              src={url.url}
              alt="Slider"
              className="w-[766px] h-[257px] rounded-[5px] flex-shrink-0 flex-grow-0 ease-in-out duration-300"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <div
          onClick={showPrevImage}
          className="w-[35px] h-[60px] bg-[#0000002E] absolute mt-auto mb-auto top-0 bottom-0 cursor-pointer justify-center items-center rounded-[3px]  opacity-0 flex group-hover:opacity-100 duration-500"
        >
          <img
            src="/assets/icons/arrow-left.png"
            alt="Arrow Left"
            className="w-[10px]"
          />
        </div>
        <div
          onClick={showNextImage}
          className="w-[35px] h-[60px] bg-[#0000002E] absolute mt-auto mb-auto top-0 bottom-0 right-0 cursor-pointer justify-center items-center rounded-[3px]  opacity-0 flex group-hover:opacity-100 duration-500"
        >
          <img
            src="/assets/icons/arrow-right.png"
            alt="Arrow Right"
            className="w-[10px]"
          />
        </div>
        <div className="absolute bottom-4 left-[50%] -translate-x-[50%] flex gap-2">
          {baners.map((_, index) => (
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

export const QuickAccess = () => {
  return (
    <>
      <div className="w-full flex justify-evenly items-center">
        <a
          href="/"
          className="w-[97px] h-[108px] flex hover:-translate-y-0.5 flex-col items-center justify-center gap-2"
        >
          <img
            src="assets/icons/local-icons.png"
            alt="Shopee Pilih Lokal"
            className="w-[45px] h-[45px]"
          />
          <span className="text-[12px] text-[#000000] text-center">
            Shopee Pilih Lokal
          </span>
        </a>
        <a
          href="/"
          className="w-[97px] h-[108px] flex hover:-translate-y-0.5 flex-col items-center justify-center gap-2"
        >
          <img
            src="assets/icons/mall-icons.png"
            alt="Shopee Pilih Lokal"
            className="w-[45px] h-[45px]"
          />
          <span className="text-[12px] text-[#000000] text-center">
            Shopee Mall
          </span>
        </a>
        <a
          href="/"
          className="w-[97px] h-[108px] flex hover:-translate-y-0.5 flex-col items-center justify-center gap-2"
        >
          <img
            src="assets/icons/pulsa-icons.png"
            alt="Shopee Pilih Lokal"
            className="w-[45px] h-[45px]"
          />
          <span className="text-[12px] text-[#000000] text-center">
            Pulsa, Tagihan, dan Tiket
          </span>
        </a>
        <a
          href="/"
          className="w-[97px] h-[108px] flex hover:-translate-y-0.5 flex-col items-center justify-center gap-2"
        >
          <img
            src="assets/icons/fashion-icons.png"
            alt="Shopee Pilih Lokal"
            className="w-[45px] h-[45px]"
          />
          <span className="text-[12px] text-[#000000] text-center">
            inFashion
          </span>
        </a>
        <a
          href="/"
          className="w-[97px] h-[108px] flex hover:-translate-y-0.5 flex-col items-center justify-center gap-2"
        >
          <img
            src="assets/icons/supermarket-icons.png"
            alt="Shopee Pilih Lokal"
            className="w-[45px] h-[45px]"
          />
          <span className="text-[12px] text-[#000000] text-center">
            Shopee Supermarket
          </span>
        </a>
        <a
          href="/"
          className="w-[97px] h-[108px] flex hover:-translate-y-0.5 flex-col items-center justify-center gap-2"
        >
          <img
            src="assets/icons/cod-icons.png"
            alt="Shopee Pilih Lokal"
            className="w-[45px] h-[45px]"
          />
          <span className="text-[12px] text-[#000000] text-center">
            Bayar Di Tempat
          </span>
        </a>
        <a
          href="/"
          className="w-[97px] h-[108px] flex hover:-translate-y-0.5 flex-col items-center justify-center gap-2"
        >
          <img
            src="assets/icons/termurah-icons.png"
            alt="Shopee Pilih Lokal"
            className="w-[45px] h-[45px]"
          />
          <span className="text-[12px] text-[#000000] text-center">
            Termurah Di Shopee
          </span>
        </a>
        <a
          href="/"
          className="w-[97px] h-[108px] flex hover:-translate-y-0.5 flex-col items-center justify-center gap-2"
        >
          <img
            src="assets/icons/gratis-ongkir-icons.png"
            alt="Shopee Pilih Lokal"
            className="w-[45px] h-[45px]"
          />
          <span className="text-[12px] text-[#000000] text-center">
            Gratis Ongkir dan Voucher
          </span>
        </a>
        <a
          href="/"
          className="w-[97px] h-[108px] flex hover:-translate-y-0.5 flex-col items-center justify-center gap-2"
        >
          <img
            src="assets/icons/barokah-icons.png"
            alt="Shopee Pilih Lokal"
            className="w-[45px] h-[45px]"
          />
          <span className="text-[12px] text-[#000000] text-center">
            Shopee Barokah
          </span>
        </a>
        <a
          href="/"
          className="w-[97px] h-[108px] flex hover:-translate-y-0.5 flex-col items-center justify-center gap-2"
        >
          <img
            src="assets/icons/promo-icons.png"
            alt="Shopee Pilih Lokal"
            className="w-[45px] h-[45px]"
          />
          <span className="text-[12px] text-[#000000] text-center">
            Semua Promo
          </span>
        </a>
      </div>
    </>
  );
};
