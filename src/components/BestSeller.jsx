import { useState } from "react";

export const BestSeller = () => {
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
      <div className="my-6 w-[1190px] mx-auto bg-white shadow-md shadow-black/50 rounded-md">
        <div className="w-full h-[61px] border-b-[0.5px] border-[#33333342] flex justify-between items-center px-5 mb-4">
          <span className="text-[16px] font-medium text-[#EE4D2D]">
            PRODUK TERLARIS
          </span>
          <div className="flex gap-2 items-center h-[61px] cursor-pointer">
            <span className="text-[16px] font-light text-[#EE4D2D]">
              Lihat Semua
            </span>
            <img
              src="assets/icons/arrowright-orange.png"
              alt="Arrow"
              className="w-[15px] h-[15px]"
            />
          </div>
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
          <div className="w-[1190px] overflow-hidden">
            <div className={`w-fit flex transition-all ${translate}`}>
              <BestProduct
                src={"assets/img/fs1.png"}
                selled={"Penjualan/Bulan 3RB+"}
                name={"Nescafe Gold"}
              />
              <BestProduct
                src={"assets/img/pt2.jpeg"}
                selled={"Penjualan/Bulan 1RB+"}
                name={"TWS"}
              />
              <BestProduct
                src={"assets/img/pt3.jpeg"}
                selled={"Penjualan/Bulan 10RB+"}
                name={"HMNS Perfume"}
              />
              <BestProduct
                src={"assets/img/pt4.jpeg"}
                selled={"Penjualan/Bulan 6RB+"}
                name={"Nescafe Sachet"}
              />
              <BestProduct
                src={"assets/img/pt5.jpeg"}
                selled={"Penjualan/Bulan 4RB+"}
                name={"Blender Portable"}
              />
              <BestProduct
                src={"assets/img/pt6.jpeg"}
                selled={"Penjualan/Bulan 2RB+"}
                name={"Perangkap Nyamuk"}
              />
              <BestProduct
                src={"assets/img/pt5.jpeg"}
                selled={"Penjualan/Bulan 4RB+"}
                name={"Blender Portable"}
              />
              <BestProduct
                src={"assets/img/fs1.png"}
                selled={"Penjualan/Bulan 3RB+"}
                name={"Nescafe Gold"}
              />
              <BestProduct
                src={"assets/img/pt4.jpeg"}
                selled={"Penjualan/Bulan 6RB+"}
                name={"Nescafe Sachet"}
              />
              <BestProduct
                src={"assets/img/pt6.jpeg"}
                selled={"Penjualan/Bulan 2RB+"}
                name={"Perangkap Nyamuk"}
              />
              <BestProduct
                src={"assets/img/pt2.jpeg"}
                selled={"Penjualan/Bulan 1RB+"}
                name={"TWS"}
              />
              <BestProduct
                src={"assets/img/pt3.jpeg"}
                selled={"Penjualan/Bulan 10RB+"}
                name={"HMNS Perfume"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const BestProduct = ({ src, selled, name }) => {
  return (
    <>
      <div className="w-[198px] h-[265px] flex flex-col justify-start items-center gap-3 cursor-pointer">
        <div className="relative">
          <img src={src} alt={name} className="w-[180px] h-[180px]" />
          <div className="flex justify-center items-center w-[180px] h-[25px] bottom-0 absolute bg-[#00000042]">
            <span className="text-[#FFFFFF] font-bold">{selled}</span>
          </div>
          <div
            className="pentagon w-[32px] h-[40px] bg-gradient-to-b from-[#F9663B] to-[#F04333] absolute left-0 top-0
             text-white text-[14px] flex items-center justify-center font-bold"
          >
            TOP
          </div>
        </div>
        <span className="text-[14px] font-bold text-[#555555] w-[180px]">
          {name}
        </span>
      </div>
    </>
  );
};
