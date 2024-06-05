import { useState } from "react";

export const Kategori = () => {
  const [translate, setTranslate] = useState("");
  const [rightArrowOpacity, setRightArrowOpacity] = useState("opacity-100");
  const [leftArrowOpacity, setLeftArrowOpacity] = useState("opacity-0");

  function slideNext() {
    setTranslate("-translate-x-[23%]");
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
    }, 1000)
  }
  return (
    <>
      <div className="relative w-[1190px] mx-auto my-8 shadow-sm border-[0.5px] group border-[#000000] border-opacity-30 bg-white">
        <div
          id="right-arrow"
          onClick={slideNext}
          className={`w-[25px] h-[25px] rounded-full bg-white shadow-sm group-hover:scale-150 transition-all duration-300 cursor-pointer shadow-black absolute z-10 flex items-center justify-center right-0 translate-x-3 top-[50%] translate-y-1 ${rightArrowOpacity}`}
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
          className={`w-[25px] h-[25px] rounded-full bg-white shadow-sm group-hover:scale-150 transition-all duration-300 cursor-pointer shadow-black absolute z-10 flex items-center justify-center left-0 -translate-x-3 top-[50%] translate-y-1 ${leftArrowOpacity}`}
        >
          <img
            src="/assets/icons/arrowright-icons.png"
            alt="Arrow Right"
            className="w-[10px] h-[10px] opacity-70 rotate-180"
          />
        </div>
        <span className="h-[35px] text-[15px] text-opacity-80 flex items-center pl-4">
          Kategori
        </span>
        <div className="w-[1190px] overflow-hidden">
          <div
            className={`flex w-fit transition-all duration-1000 ${translate}`}
          >
            <Category name={"Elektronik"} src={"/assets/img/elektronik.png"} />
            <Category name={"Komputer & Aksesoris"} src={"/assets/img/komputer.png"} />
            <Category name={"Handphone & Aksesoris"} src={"/assets/img/handphone.png"} />
            <Category name={"Pakaian Pria"} src={"/assets/img/pakaian-pria.png"} />
            <Category name={"Sepatu Pria"} src={"/assets/img/sepatu-pria.png"} />
            <Category name={"Tas Pria"} src={"/assets/img/tas-pria.png"} />
            <Category name={"Aksesoris Fashion"} src={"/assets/img/aksesoris.png"} />
            <Category name={"Jam Tangan"} src={"/assets/img/jam-tangan.png"} />
            <Category name={"Kesehatan"} src={"/assets/img/kesehatan.png"} />
            <Category name={"Hobi & Koleksi"} src={"/assets/img/hobi.png"} />
            <Category name={"Olahraga & Outdoor"} src={"/assets/img/olahraga.png"} />
            <Category name={"Souvenir & Party Supplies"} src={"/assets/img/souvenir.png"} />
            <Category name={"Voucher"} src={"/assets/img/voucher.png"} />
          </div>
          <div
            className={`flex w-fit transition-all duration-1000 ${translate}`}
          >
            <Category name={"Makanan & Minuman"} src={"/assets/img/makanan.png"} />
            <Category name={"Perawatan & Kecantikan"} src={"/assets/img/perawatan.png"} />
            <Category name={"Perlengkapan Rumah"} src={"/assets/img/perlengkapan.png"} />
            <Category name={"Pakaian Wanita"} src={"/assets/img/pakaian-wanita.png"} />
            <Category name={"Fashion Muslim"} src={"/assets/img/fashion-muslim.png"} />
            <Category name={"Fashion Bayi & Anak"} src={"/assets/img/fashion-bayi.png"} />
            <Category name={"Ibu & Bayi"} src={"/assets/img/ibu-bayi.png"} />
            <Category name={"Sepatu Wanita"} src={"/assets/img/sepatu-wanita.png"} />
            <Category name={"Tas Wanita"} src={"/assets/img/tas-wanita.png"} />
            <Category name={"Otomotif"} src={"/assets/img/otomotif.png"} />
            <Category name={"Buku & Alat Tulis"} src={"/assets/img/buku.png"} />
            <Category name={"Fotografi"} src={"/assets/img/fotografi.png"} />
            <Category name={"ShopeePay Sekitarmu"} src={"/assets/img/shopeepay.png"} />
          </div>
        </div>
      </div>
    </>
  );
};

export const Category = ({ name, src }) => {
  return (
    <>
      <div className="w-[119px] h-[149px] flex flex-col items-center justify-evenly border-t-[0.5px] border-r-[0.5px] borderb-[0.5px] border-[#C7C7C7] cursor-pointer hover:shadow-md hover:border-2">
        <img src={src} alt="Elektronik" className="w-[88px] h-[88px]" />
        <span className="text-[15px] text-center text-[#000000CC]">{name}</span>
      </div>
    </>
  );
};
