export const Footer = () => {
  return (
    <>
      <div className="w-[1200px] mx-auto py-8 flex justify-between border-b">
        <Services />
        <Explore />
        <Payment />
        <Sosmed />
        <Download />
      </div>
      <div className="w-[1200px] mx-auto">
        <Copyright />
      </div>
    </>
  );
};

export const Services = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-[14px] text-[#000000]/80">
          Layanan Pelanggan
        </h1>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Bantuan
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Metode Pembayaran
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          ShopeePay
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Koin Shopee
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Lacak Pesanan Pembeli
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Lacak Pengiriman Penjual
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Gratis Ongkir
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Pengembalian Barang & Dana
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Garansi Shopee
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Hubungi Kami
        </a>
      </div>
    </>
  );
};

export const Explore = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-[14px] text-[#000000]/80">
          Jelajahi Shopee
        </h1>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Tentang Kami
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Karir
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Kebijakan Shopee
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Kebijakan Privasi
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Blog
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Shopee Mall
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Seller Centre
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Flash Sale
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Kontak Media
        </a>
        <a href="/" className="text-[14px] text-[#000000]/60">
          Shopee Affiliate
        </a>
      </div>
    </>
  );
};

export const Payment = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-[14px] font-semibold">Pembayaran</h1>
        <div className="flex flex-wrap w-[170px] gap-1.5 gap-y-2">
          <img
            src="assets/icons/seabank.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/bca.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/bni.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/bri.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/bsi.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/cimb.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/mandiri.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/permatabank.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/alfamart.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/alfamidi.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/dandan.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/indomart.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/jcb.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/visa.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/spay.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
          <img
            src="assets/icons/creditcard.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Payment"
          />
        </div>
        <h1 className="text-[14px] font-semibold mt-6">Pengiriman</h1>
        <div className="flex flex-wrap w-[170px] gap-1.5 gap-y-2">
          <img
            src="assets/icons/spx.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/j&t.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/j&tcargo.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/jne.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/ninja.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/sicepat.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/grab.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/gosend.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/pasaja.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/indahcargo.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/idexpress.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/indopaket.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/anteraja.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/blurbird.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
          <img
            src="assets/icons/sentralcargo.png"
            className="w-[52px] h-[22px] rounded-[3px] shadow-sm shadow-black/50"
            alt="Delivery"
          />
        </div>
      </div>
    </>
  );
};

export const Sosmed = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-[14px] font-semibold">Ikuti Kami</h1>
        <div className="flex items-center gap-1">
          <img
            src="assets/icons/facebook-icons1.png"
            alt="Facebook"
            className="w-[16px] h-[16px]"
          />
          <a href="/" className="text-[12px] text-[#000000]/65 font-light">
            Facebook
          </a>
        </div>
        <div className="flex items-center gap-1">
          <img
            src="assets/icons/instagram-icons1.png"
            alt="Instagram"
            className="w-[16px] h-[16px]"
          />
          <a href="/" className="text-[12px] text-[#000000]/65 font-light">
            Instagram
          </a>
        </div>
        <div className="flex items-center gap-1">
          <img
            src="assets/icons/twitter-icons.png"
            alt="Twitter"
            className="w-[16px] h-[16px]"
          />
          <a href="/" className="text-[12px] text-[#000000]/65 font-light">
            Twitter
          </a>
        </div>
        <div className="flex items-center gap-1">
          <img
            src="assets/icons/linkedin-icons.png"
            alt="Linkedln"
            className="w-[16px] h-[16px]"
          />
          <a href="/" className="text-[12px] text-[#000000]/65 font-light">
            Linkedln
          </a>
        </div>
        <div className="flex items-center gap-1">
          <img
            src="assets/icons/college-icons1.png"
            alt="College"
            className="w-[16px] h-[16px]"
          />
          <a href="/" className="text-[12px] text-[#000000]/65 font-light">
            Kampus Shopee
          </a>
        </div>

        <h1 className="text-[14px] font-semibold">Keamanan</h1>
        <img
          src="assets/icons/certificated.png"
          alt="Keamanan"
          className="w-[112px] h-[52px] shadow-sm shadow-black/50"
        />
      </div>
    </>
  );
};

export const Download = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-[14px] text-[#000000] font-semibold">
          Download Aplikasi Shopee
        </h1>
        <div className="flex gap-3">
          <img
            src="assets/icons/barcode-download.png"
            alt="Barcode"
            className="w-[80px] h-[80px]"
          />
          <div className="flex flex-col gap-1">
            <div className="w-[76px] h-[24px] rounded-[3px] bg-[#D9D9D9] shadow-sm shadow-black/60 flex items-center justify-center">
              <img
                src="assets/icons/appstore.png"
                alt="App Store"
                className="w-[68px] h-[16px]"
              />
            </div>
            <div className="w-[76px] h-[24px] rounded-[3px] bg-[#D9D9D9] shadow-sm shadow-black/60 flex items-center justify-center">
              <img
                src="assets/icons/googleplay.png"
                alt="Google Play"
                className="w-[68px] h-[16px]"
              />
            </div>
            <div className="w-[76px] h-[24px] rounded-[3px] bg-[#D9D9D9] shadow-sm shadow-black/60 flex items-center justify-center">
              <img
                src="assets/icons/appgalery.png"
                alt="App Galery"
                className="w-[68px] h-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Copyright = () => {
  return (
    <>
      <div className="py-4 flex justify-between">
        <h1 className="text-[12px] text-[#000000]/50">
          &copy; Shopee 2024. Hak Cipta Dilindungi
        </h1>
        <div className="flex gap-1">
          <span className="text-[12px] text-[#000000]/50">Negara :</span>
          <a href="/" className="text-[#000000]/50 text-[12px]">
            Singapura
          </a>
          <span className="text-[12px] text-[#000000]/50">|</span>
          <a href="/" className="text-[#000000]/50 text-[12px]">
            Indonesia
          </a>
          <span className="text-[12px] text-[#000000]/50">|</span>
          <a href="/" className="text-[#000000]/50 text-[12px]">
            Thailand
          </a>
          <span className="text-[12px] text-[#000000]/50">|</span>
          <a href="/" className="text-[#000000]/50 text-[12px]">
            Malaysia
          </a>
          <span className="text-[12px] text-[#000000]/50">|</span>
          <a href="/" className="text-[#000000]/50 text-[12px]">
            Vietnam
          </a>
          <span className="text-[12px] text-[#000000]/50">|</span>
          <a href="/" className="text-[#000000]/50 text-[12px]">
            Filipina
          </a>
          <span className="text-[12px] text-[#000000]/50">|</span>
          <a href="/" className="text-[#000000]/50 text-[12px]">
            Brazil
          </a>
          <span className="text-[12px] text-[#000000]/50">|</span>
          <a href="/" className="text-[#000000]/50 text-[12px]">
            Mexico
          </a>
          <span className="text-[12px] text-[#000000]/50">|</span>
          <a href="/" className="text-[#000000]/50 text-[12px]">
            Colombia
          </a>
          <span className="text-[12px] text-[#000000]/50">|</span>
          <a href="/" className="text-[#000000]/50 text-[12px]">
            Chile
          </a>
          <span className="text-[12px] text-[#000000]/50">|</span>
          <a href="/" className="text-[#000000]/50 text-[12px]">
            Taiwan
          </a>
        </div>
      </div>
    </>
  );
};
