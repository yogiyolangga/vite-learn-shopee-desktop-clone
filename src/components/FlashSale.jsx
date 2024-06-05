import { useState } from "react";

export const FlashSale = () => {
  return (
    <>
      <div className="w-[1196px] rounded-[5px] mx-auto bg-white shadow-md">
        <div className="w-full pl-3 py-2 text-black flex justify-between gap-3 h-[40px] items-center">
          <div className="w-full flex gap-3">
            <img
              src="/assets/img/flashsale-logo.png"
              alt="FlashSale"
              className="w-[155px] h-[30px]"
            />
            <CountDown />
            <p className="text-[10px] text-[#0000002e]">
              Animasi CountDown Belum
            </p>
          </div>
          <div className="flex items-center w-[20%] justify-end pr-4 gap-3">
            <a href="/" className="text-[15px] text-[#EE4D2D]">
              Lihat Semua
            </a>
            <img
              src="/assets/icons/arrowright-orange.png"
              alt="Arrow"
              className="w-[12px] h-[12px]"
            />
          </div>
        </div>
        <ListProduct />
      </div>
    </>
  );
};

export const CountDown = () => {
  let targetTime = new Date("Mar 15, 2030 10:37:25").getTime();

  function addZero(number) {
    return number < 10 ? "0" + number : number;
  }

  setInterval(() => {
    let now = new Date().getTime();
    let distance = targetTime - now;
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").textContent = addZero(hours);
    document.getElementById("minutes").textContent = addZero(minutes);
    document.getElementById("seconds").textContent = addZero(seconds);
  }, 1000);

  return (
    <>
      <div className="flex gap-1">
        <div
          id="hours"
          className="w-[25px] h-[25px] bg-black text-white flex justify-center items-center rounded-sm"
        ></div>
        <div
          id="minutes"
          className="w-[25px] h-[25px] bg-black text-white flex justify-center items-center rounded-sm"
        ></div>
        <div
          id="seconds"
          className="w-[25px] h-[25px] bg-black text-white flex justify-center items-center rounded-sm"
        ></div>
      </div>
    </>
  );
};

export const ListProduct = () => {
  const [translate, setTranslate] = useState("");
  const [rightArrowOpacity, setRightArrowOpacity] = useState("opacity-100");
  const [leftArrowOpacity, setLeftArrowOpacity] = useState("opacity-0");

  function slideNext() {
    setTranslate("-translate-x-[50%]");
    setTimeout(() => {
      setRightArrowOpacity("opacity-0");
      setLeftArrowOpacity("opacity-100");
    }, 1000);
  }

  function slideprev() {
    setTranslate("translate-x-0");
    setTimeout(() => {
      setRightArrowOpacity("opacity-100");
      setLeftArrowOpacity("opacity-0");
    }, 1000);
  }
  return (
    <>
      <div className="relative group">
        <div
          id="right-arrow"
          onClick={slideNext}
          className={`w-[25px] h-[25px] rounded-full bg-white shadow-sm group-hover:scale-150 transition-all duration-300 cursor-pointer shadow-black absolute z-10 flex items-center justify-center right-0 translate-x-3 top-[45%] ${rightArrowOpacity}`}
        >
          <img
            src="/assets/icons/arrowright-icons.png"
            alt="Arrow Right"
            className="w-[10px] h-[10px] opacity-70"
          />
        </div>
        <div
          id="left-arrow"
          onClick={slideprev}
          className={`w-[25px] h-[25px] rounded-full bg-white shadow-sm group-hover:scale-150 transition-all duration-300 cursor-pointer shadow-black absolute z-10 flex items-center justify-center left-0 -translate-x-3 top-[45%] ${leftArrowOpacity}`}
        >
          <img
            src="/assets/icons/arrowright-icons.png"
            alt="Arrow Right"
            className="w-[10px] h-[10px] opacity-70 rotate-180"
          />
        </div>

        <div className="px-3 w-[1194px] overflow-hidden">
          <div
            className={`w-fit flex justify-center gap-3 transition-all duration-1000 ${translate}`}
          >
            <Product
              diskon={"99%"}
              mall={"mall"}
              star={""}
              price={"1"}
              stok={"STOK TERBATAS"}
              wstok={5}
              src={"/assets/img/fs1.png"}
            />
            <Product
              diskon={"63%"}
              mall={""}
              star={"star"}
              price={"36.900"}
              stok={"STOK TERBATAS"}
              wstok={10}
              src={"/assets/img/fs2.jpeg"}
            />
            <Product
              diskon={"25%"}
              mall={"mall"}
              star={""}
              price={"49.875"}
              stok={"24 TERJUAL"}
              wstok={24}
              src={"/assets/img/fs3.png"}
            />
            <Product
              diskon={"79%"}
              mall={"mall"}
              star={""}
              price={"10.265"}
              stok={"STOK TERBATAS"}
              wstok={10}
              src={"/assets/img/fs4.png"}
            />
            <Product
              diskon={"59%"}
              mall={""}
              star={"star"}
              price={"18.500"}
              stok={"STOK TERBATAS"}
              wstok={10}
              src={"/assets/img/fs5.jpeg"}
            />
            <Product
              diskon={"29%"}
              mall={"mall"}
              star={""}
              price={"25.202"}
              stok={"STOK TERBATAS"}
              wstok={10}
              src={"/assets/img/fs6.png"}
            />
            <Product
              diskon={"99%"}
              mall={"mall"}
              star={""}
              price={"1"}
              stok={"STOK TERBATAS"}
              wstok={10}
              src={"/assets/img/fs1.png"}
            />
            <Product
              diskon={"99%"}
              mall={"mall"}
              star={""}
              price={"1"}
              stok={"STOK TERBATAS"}
              wstok={10}
              src={"/assets/img/fs1.png"}
            />
            <Product
              diskon={"99%"}
              mall={"mall"}
              star={""}
              price={"1"}
              stok={"STOK TERBATAS"}
              wstok={10}
              src={"/assets/img/fs1.png"}
            />
            <Product
              diskon={"99%"}
              mall={"mall"}
              star={""}
              price={"1"}
              stok={"STOK TERBATAS"}
              wstok={10}
              src={"/assets/img/fs1.png"}
            />
            <Product
              diskon={"99%"}
              mall={"mall"}
              star={""}
              price={"1"}
              stok={"STOK TERBATAS"}
              wstok={10}
              src={"/assets/img/fs1.png"}
            />
            <Product
              diskon={"99%"}
              mall={"mall"}
              star={""}
              price={"1"}
              stok={"STOK TERBATAS"}
              wstok={10}
              src={"/assets/img/fs1.png"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const Product = ({ diskon, mall, star, price, stok, wstok, src }) => {
  return (
    <>
      <div className="w-[186px] h-[252px]">
        <div className="relative flex flex-col justify-center items-center">
          <img src={src} alt="Item1" className="w-[167px] h-[170px]" />
          <div className="w-[39px] h-[16px] bg-[#FFE97A] absolute top-0 right-0 text-[12px] text-[#EE4D2D] flex items-center justify-between pr-3">
            <img
              src="/assets/icons/petir-icons.png"
              alt="Diskon"
              className="w-[9.8px] h-[16px] -translate-x-1"
            />
            {diskon}
          </div>
          <div id="mall" className={mall === "mall" ? "" : "hidden"}>
            <div className="w-[27px] h-[16px] flex items-center justify-center  text-white text-[12px] bg-[#D0011B] absolute top-1 -left-0.5">
              Mall
            </div>
            <div className="w-0 h-0 border-t-[6px] border-[#D0011B] border-solid border-l-[6px] border-l-transparent absolute -left-0.5 top-[20px]"></div>
          </div>
          <div id="star" className={star === "star" ? "" : "hidden"}>
            <div className="w-[27px] h-[16px] flex items-center justify-center  text-white text-[12px] bg-[#F04333] absolute top-1 -left-0.5">
              Star
            </div>
            <div className="w-0 h-0 border-t-[6px] border-[#F04333] border-solid border-l-[6px] border-l-transparent absolute -left-0.5 top-[20px]"></div>
          </div>
          <span className="text-[#F04333] font-semibold text-[15px]">
            Rp {price}
          </span>
          <div className="w-[147px] h-[16px] rounded-[8px] bg-[#F9663B] bg-opacity-30 flex items-center justify-center relative">
            <span className="text-[12px] text-white font-semibold">{stok}</span>
            <div
              style={{ width: `${wstok}%` }}
              className="h-[16px] rounded-l-[8px] bg-[#F04333] absolute left-0"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};