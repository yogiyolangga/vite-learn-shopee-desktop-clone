export const Header = () => {
  return (
    <>
      <div className="w-full h-[120px] bg-gradient-to-b from-[#F04333] to-[#F9663B] py-2 fixed z-20 top-0">
        <Navbar />
        <HeaderNav />
      </div>
    </>
  );
};

export const Navbar = () => {
  return (
    <>
      <div className="w-[1197px] mx-auto flex justify-between pb-3">
        <nav className="flex flex-row gap-1">
          <a href="#seller" className="text-[12px] text-white hover:opacity-70">
            Seller Centre
          </a>
          <span className="text-white text-[12px]">|</span>
          <div className="flex items-center relative group">
            <a
              href="#download"
              className="text-[12px] text-white hover:opacity-70"
            >
              Download
            </a>
            <div className="bg-transparent scale-0 group-hover:scale-100 hover:scale-100 absolute z-10 top-3 py-4">
              <div className="w-[184px] h-[244px] bg-white rounded-sm top-4 flex flex-col justify-between items-center py-0.5 shadow-md">
                <img
                  src="/assets/img/barcode-download.png"
                  alt="Download"
                  className="w-[180px] h-[180px]"
                />
                <div className="w-full p-0.5 flex flex-wrap justify-start items-center">
                  <img
                    src="/assets/img/appstore.png"
                    alt="App"
                    className="w-[80px] h-auto"
                  />
                  <img
                    src="/assets/img/googleplay.png"
                    alt="App"
                    className="w-[80px] h-auto"
                  />
                  <img
                    src="/assets/img/appgalery.png"
                    alt="App"
                    className="w-[80px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <span className="text-white text-[12px]">|</span>
          <div className="flex flex-row w-fit gap-0.5">
            <span className="text-[12px] text-white">Ikuti kami di&nbsp;</span>
            <a href="#facebook">
              <img
                src="/assets/icons/facebook-icons.png"
                alt="Facebook"
                className="w-[15px] h-[15px]"
              />
            </a>
            <a href="#facebook">
              <img
                src="/assets/icons/instagram-icons.png"
                alt="Facebook"
                className="w-[15px] h-[15px]"
              />
            </a>
            <a href="#facebook">
              <img
                src="/assets/icons/college-icons.png"
                alt="Facebook"
                className="w-[15px] h-[15px]"
              />
            </a>
          </div>
        </nav>
        <nav className="flex flex-row gap-3">
          <div className="relative group">
            <a
              href="#notif"
              className="text-[12px] text-white hover:opacity-70 flex gap-1"
            >
              <img
                src="/assets/icons/notification-icons.png"
                alt="Notif"
                className="w-[15px] h-[15px]"
              />
              <span>Notifikasi</span>
            </a>
            <img
              src="/assets/icons/up-arrow.png"
              className="w-[28px] h-[10px] absolute z-[11] top-4 right-3 transition-all scale-0 group-hover:scale-100 group-hover:opacity-100 hover:scale-100 hover:opacity-100"
              alt="Uparrow"
            />
            <div className=" py-2 absolute z-10 origin-top-right top-4 right-1 transition-all scale-0 group-hover:scale-100 group-hover:opacity-100 hover:scale-100 hover:opacity-100">
              <div className="flex flex-col w-[400px] rounded-sm bg-white py-2 border border-[#00000042] shadow-md">
                <span className="px-2 mb-2 text-[14px] text-[#00000042]">
                  Notifikasi Baru Diterima
                </span>
                <div className="bg-[#FFF2EE] flex gap-1 py-2 px-2">
                  <img
                    src="/assets/img/rkm1.jpeg"
                    alt="Notif"
                    className="w-[40px]  h-[40px]"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] text-[#000000CC]">
                      Pesanan Diserahkan ke Jasa Kirim
                    </span>
                    <span className="text-[12px] text-[#0000008A]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minima tempore sit commodi magnam!
                    </span>
                  </div>
                </div>
                <div className="bg-[#FFFFFF] flex gap-1 py-2 px-2">
                  <img
                    src="/assets/img/rkm4.jpeg"
                    alt="Notif"
                    className="w-[40px]  h-[40px]"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] text-[#000000CC]">
                      Pesanan Diserahkan ke Jasa Kirim
                    </span>
                    <span className="text-[12px] text-[#0000008A]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minima tempore sit commodi magnam!
                    </span>
                  </div>
                </div>
                <div className="bg-[#FFF2EE] flex gap-1 py-2 px-2">
                  <img
                    src="/assets/img/rkm6.jpeg"
                    alt="Notif"
                    className="w-[40px]  h-[40px]"
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] text-[#000000CC]">
                      Pesanan Diserahkan ke Jasa Kirim
                    </span>
                    <span className="text-[12px] text-[#0000008A]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minima tempore sit commodi magnam!
                    </span>
                  </div>
                </div>
                <a href="/#notifikasi" className="text-center py-2">
                  Tampilkan Semua
                </a>
              </div>
            </div>
          </div>
          <a
            href="#help"
            className="text-[12px] text-white hover:opacity-70 flex gap-1"
          >
            <img
              src="/assets/icons/help-icons.png"
              alt="Bantuan"
              className="w-[15px] h-[15px]"
            />
            <span>Bantuan</span>
          </a>
          <div className="relative group">
            <a
              href="#language"
              className="text-[12px] text-white hover:opacity-70 flex gap-1"
            >
              <img
                src="/assets/icons/internet-icons.png"
                alt="Bantuan"
                className="w-[15px] h-[15px]"
              />
              <span>Bahasa Indonesia</span>
              <img
                src="/assets/icons/arrowdown-icons.png"
                alt="Arrow"
                className="w-[15px] h-[15px]"
              />
            </a>
            <img
              src="/assets/icons/up-arrow.png"
              className="w-[28px] h-[10px] absolute z-[11] top-4 right-12 transition-all scale-0 group-hover:scale-100 group-hover:opacity-100 hover:scale-100 hover:opacity-100"
              alt="Uparrow"
            />
            <div className="w-[200px] py-3 absolute origin-top-right top-2.5 right-2 z-10 transition-all scale-0 group-hover:scale-100 group-hover:opacity-100 hover:scale-100 hover:opacity-100">
              <div className="shadow-md">
                <a
                  href="/"
                  className="w-full h-[40px] text-[#0000008A] flex items-center text-center bg-white px-3 rounded-sm hover:text-[#EE4D2D]"
                >
                  Bahasa Indonesia
                </a>
                <a
                  href="/"
                  className="w-full h-[40px] text-[#0000008A] flex items-center text-center bg-white px-3 rounded-sm hover:text-[#EE4D2D]"
                >
                  English
                </a>
              </div>
            </div>
          </div>
          <div className="relative group">
            <a
              href="#language"
              className="text-[12px] text-white hover:opacity-70 flex gap-1"
            >
              <img
                src="/assets/icons/user-icons.png"
                alt="Bantuan"
                className="w-[15px] h-[15px]"
              />
              <span>varker</span>
            </a>
            <img
              src="/assets/icons/up-arrow.png"
              className="w-[28px] h-[10px] absolute z-[11] top-4 right-3 transition-all opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 hover:scale-100 hover:opacity-100"
              alt="Uparrow"
            />
            <div className="absolute top-6 right-1 z-10 origin-top-right w-[165px] transition-all opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 hover:scale-100 hover:opacity-100">
              <div className="flex flex-col gap-5 bg-white px-4 rounded-sm py-2 border border-[#0000004E] shadow-md">
                <a
                  href="/"
                  className="text-[14px] text-[#000000BE] font-semibold hover:text-[#00BFA5]"
                >
                  Akun Saya
                </a>
                <a
                  href="/"
                  className="text-[14px] text-[#000000BE] font-semibold hover:text-[#00BFA5]"
                >
                  Pesanan Saya
                </a>
                <a
                  href="/"
                  className="text-[14px] text-[#000000BE] font-semibold hover:text-[#00BFA5]"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export const HeaderNav = () => {
  return (
    <>
      <div className="flex pt-2 justify-start gap-16 items-center max-w-[1197px] mx-auto">
        <a href="/" className="-translate-y-2">
          <img
            src="/assets/img/shopee-logo.png"
            alt="Logo"
            className="w-[160px] h-[50px]"
          />
        </a>
        <div className="flex flex-col gap-y-2">
          <div className="w-[797px] h-[40px] rounded-[5px] shadow-md flex items-center p-1 bg-white">
            <input
              type="text"
              className="w-[750px] h-[36px] rounded-[5px] flex text-[15px] px-4 items-center"
              placeholder="Cek Produk Terlaris Disini"
            />
            <button className="flex justify-center items-center w-[71px] h-[35px] rounded-[5px] bg-[#F55437] hover:bg-[#FB6445]">
              <img
                src="/assets/icons/search-icons.png"
                alt="Search"
                className="w-[15px] h-[15px]"
              />
            </button>
          </div>
          <div className="flex justify-start gap-4 opacity-90">
            <a href="#search" className="text-[13px] text-white font-light">
              Case iPhone 14 Pro Max
            </a>
            <a href="#search" className="text-[13px] text-white font-light">
              Sepatu Pria
            </a>
            <a href="#search" className="text-[13px] text-white font-light">
              Jaket Motor
            </a>
            <a href="#search" className="text-[13px] text-white font-light">
              Gitar Listrik
            </a>
            <a href="#search" className="text-[13px] text-white font-light">
              Lampu Tidur
            </a>
            <a href="#search" className="text-[13px] text-white font-light">
              Lemari Kecil
            </a>
            <a href="#search" className="text-[13px] text-white font-light">
              Lampu Pintar
            </a>
            <a href="#search" className="text-[13px] text-white font-light">
              Kado Lucu
            </a>
          </div>
        </div>
        <div className="relative cursor-pointer group">
          <img
            src="/assets/icons/cart-icons.png"
            alt="Cart"
            className="w-[40px] h-[40px]"
          />
          <div className="w-[20px] h-[16px] rounded-[48%] flex items-center justify-center absolute bg-white top-0.5 -right-2">
            <span className="text-[10px] text-[#F55437] font-semibold">3</span>
          </div>
          <img
            src="/assets/icons/up-arrow.png"
            alt="Arrow Up"
            className="w-[28px] h-[10px] absolute z-10 -bottom-0.5 left-2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all"
          />
          <div className="w-[400px] bg-white py-1 absolute -right-1 z-10 rounded-sm border-zinc-800 shadow-lg scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out origin-top-right">
            <span className="text-[14px] text-[#00000042] my-10 px-2">
              Baru Ditambahkan
            </span>
            <div className="flex items-center justify-between py-3 hover:bg-black/5 px-2">
              <div className="flex gap-1">
                <img
                  src="/assets/img/cart-item1.jpeg"
                  alt="Cart Item"
                  className="w-[42px] h-[42px]"
                />
                <span className="text-[14px] text-[#000000CC] font-semibold">
                  Jam Tangan Pria Automatic Brown...
                </span>
              </div>
              <span className="text-[14px] text-[#EE4E2D] font-semibold self-start">
                Rp.75.202
              </span>
            </div>
            <div className="flex items-center justify-between py-3 hover:bg-black/5 px-2">
              <div className="flex gap-1">
                <img
                  src="/assets/img/cart-item2.jpeg"
                  alt="Cart Item"
                  className="w-[42px] h-[42px]"
                />
                <span className="text-[14px] text-[#000000CC] font-semibold">
                  Sepatu Pria Hitam Anti Slip ...
                </span>
              </div>
              <span className="text-[14px] text-[#EE4E2D] font-semibold self-start">
                Rp.125.202
              </span>
            </div>
            <div className="flex items-center justify-between py-3 hover:bg-black/5 px-2">
              <div className="flex gap-1">
                <img
                  src="/assets/img/cart-item3.jpeg"
                  alt="Cart Item"
                  className="w-[42px] h-[42px]"
                />
                <span className="text-[14px] text-[#000000CC] font-semibold">
                  Helm Cross Original Anti Lecet...
                </span>
              </div>
              <span className="text-[14px] text-[#EE4D2D] font-semibold self-start">
                Rp.705.202
              </span>
            </div>
            <div className="w-full flex justify-end px-2">
              <a href="/" className="w-[200px] h-[34px] rounded-sm bg-[#EE4D2D] flex text-[14px] text-white items-center justify-center hover:bg-opacity-80">Tampilkan Keranjang Belanja</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
