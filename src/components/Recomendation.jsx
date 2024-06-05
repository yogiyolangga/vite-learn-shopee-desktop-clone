import { Products } from "../Products.json";

export const Recomendation = () => {
  return (
    <>
      <div className="w-[1200px] h-[60px] flex justify-center items-center bg-white shadow-md rounded-md border-b-[5px] border-[#EE4D2D] mx-auto text-[16px] text-[#EE4D2D] font-medium mb-3">
        REKOMENDASI
      </div>
      <div className="w-[1180px] mx-auto flex flex-wrap gap-2">
        {Products.map((prd) => (
          <ProductList
            key={prd.id}
            mall={prd.mall}
            star={prd.star}
            diskon={prd.diskon}
            src={prd.src}
            frame={prd.frame}
            name={prd.name}
            komisi={prd.komisi}
            reversal={prd.reversal}
            price={prd.price}
            selled={prd.selled}
          />
        ))}
      </div>
      <div className="mt-5 w-[125px] h-[40px] bg-[#FFFFFF] shadow-sm border border-[#333333] rounded-sm flex justify-center items-center mx-auto text-[#555555] border-opacity-20 text-[14px] cursor-pointer hover:bg-[#000000]/5">Lihat Lainnya</div>
    </>
  );
};

export const ProductList = ({
  mall,
  star,
  diskon,
  src,
  frame,
  name,
  komisi,
  reversal,
  price,
  selled,
}) => {
  return (
    <>
      <div className="w-[190px] h-[295px] flex flex-col items-center justify-evenly border-[1px] bg-white relative cursor-pointer hover:outline outline-1 hover:-translate-y-[1px] ease-in-out duration-300 outline-[#F04333]">
        <div className="relative">
          <img src={src} alt="" className="w-[185px] h-[185px]" />
          <img
            src={frame}
            alt="Frame"
            className={`w-[185px] h-[185px] absolute top-0 left-0 ${frame === "" ? "hidden" : ""}`}
          />
        </div>
        <div id="mall" className={`${mall === "mall" ? "" : "hidden"}`}>
          <div className="w-[27px] h-[16px] flex items-center justify-center  text-white text-[12px] bg-[#D0011B] absolute top-1 -left-1.5">
            Mall
          </div>
          <div className="w-0 h-0 border-t-[6px] border-[#D0011B] border-solid border-l-[6px] border-l-transparent absolute -left-1.5 top-[20px]"></div>
        </div>
        <div id="star" className={star === "star" ? "" : "hidden"}>
          <div className="w-[27px] h-[16px] flex items-center justify-center  text-white text-[12px] bg-[#F04333] absolute top-1 -left-1.5">
            Star
          </div>
          <div className="w-0 h-0 border-t-[6px] border-[#F04333] border-solid border-l-[6px] border-l-transparent absolute -left-1.5 top-[20px]"></div>
        </div>
        <div className={`w-[35px] h-[16px] bg-[#FFE97A] absolute top-0 right-0 text-[12px] text-[#EE4D2D] flex items-center justify-center ${diskon === "" ? "hidden" : ""}`}>
          {`${diskon}%`}
        </div>
        <span className="text-[16px] text-[#000000] text-opacity-80 px-1 line-clamp-2">
          {name}
        </span>
        <div className="px-1 w-full flex justify-between">
          <img
            src={komisi}
            alt="Komisi Extra"
            className={`w-[69px] h-[16px] ${komisi === "" ? "hidden" : ""}`}
          />
          <span
            className={`border border-[#EE4D2D] text-[10px] text-[#EE4D2D] flex items-center h-[16px] px-1.5 ${
              reversal === "" ? "hidden" : ""
            }`}
          >
            {reversal}
          </span>
        </div>
        <div className="flex justify-between items-end w-full px-1 self-end">
          <h3 className="text-[10px] text-[#EE4D2D]">
            Rp <span className="text-[16px] text-[#EE4D2D]">{price}</span>
          </h3>
          <span className="text-[12px] text-[#000000] text-opacity-50">
            {selled} Terjual
          </span>
        </div>
      </div>
    </>
  );
};
