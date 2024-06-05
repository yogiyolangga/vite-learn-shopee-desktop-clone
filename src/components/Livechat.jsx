import { useState } from "react";

export const Livechat = ({ livechatScale, closeLiveChat }) => {
  const [widthLiveChat, setWidthLiveChat] = useState("640");
  const [visibilityButtonOpen, setVisibilityButtonOpen] = useState("hidden");
  const [visibilityButtonClose, setVisibilityButtonClose] = useState("");

  function handleWidthLiveChat() {
    setWidthLiveChat("224");
    setVisibilityButtonOpen("");
    setVisibilityButtonClose("hidden");
  }

  function resetWidthLiveChat() {
    setWidthLiveChat("640");
    setVisibilityButtonClose("");
    setVisibilityButtonOpen("hidden");
  }

  return (
    <>
      <div
        className={`w-[${widthLiveChat}px] h-[500px] bg-[#F3F3F3] rounded-md border fixed bottom-0 right-2 z-20 origin-bottom-right transition-all ${livechatScale}`}
      >
        <div
          className={`w-[${widthLiveChat}px] h-[40px] bg-white flex items-center justify-between px-4 border-b transition-all`}
        >
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-semibold text-[#EE4D2D]">
              Chat
            </span>
            <span className="text-[12px] text-[#EE4D2D]">(4)</span>
          </div>
          <div className="flex items-center gap-6">
            <div
              className={`flex items-center justify-center p-0.5 border border-black cursor-pointer ${visibilityButtonClose}`}
              onClick={handleWidthLiveChat}
            >
              <img
                src="assets/icons/arrowright-icons.png"
                alt="Arrow"
                className="w-[14px] h-[14px]"
              />
            </div>
            <div
              className={`flex items-center justify-center p-0.5 border border-black cursor-pointer ${visibilityButtonOpen}`}
              onClick={resetWidthLiveChat}
            >
              <img
                src="assets/icons/arrowright-icons.png"
                alt="Arrow"
                className="w-[14px] h-[14px] rotate-180"
              />
            </div>
            <div
              className="flex items-center justify-center p-0.5 border border-black cursor-pointer"
              onClick={closeLiveChat}
            >
              <img
                src="assets/icons/arrowright-icons.png"
                alt="Arrow"
                className="w-[14px] h-[14px] rotate-90"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <ChatList />
          <div className={`w-[415px] h-[460px] bg-[#F3F3F3] flex flex-col justify-center items-center origin-right transition-all ${visibilityButtonClose}`}>
            <img
              src="assets/img/chating.png"
              alt="Chating"
              className="w-[200px] h-[200px]"
            />
            <h1 className="font-bold text-[16px] text-[#000000]/70">
              Selamat Datang di Chat Shopee
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export const LcButton = ({ handleLivechatScale }) => {
  return (
    <>
      <div
        className="w-[100px] h-[48px] rounded-t-md fixed bottom-0 right-2 flex items-center justify-center bg-[#EE4D2D] cursor-pointer"
        onClick={handleLivechatScale}
      >
        <div className="flex justify-evenly items-center relative">
          <img
            src="assets/icons/livechat.png"
            alt="Livechat"
            className="w-[22px] h-[20px]"
          />
          <span className="text-white text-[16px] font-semibold">Chat</span>
          <div className="w-[18px] h-[18px] bg-[#EE4D2D] flex justify-center items-center rounded-full absolute -top-5 -right-7 text-white text-[12px] border-white border">
            4
          </div>
        </div>
      </div>
    </>
  );
};

export const ChatList = () => {
  return (
    <>
      <div className="w-[224px] bg-white h-full px-2">
        <div className="h-[48px] flex items-center">
          <div className="h-[35px] flex gap-2 border rounded-md items-center px-2">
            <img
              src="assets/icons/search.png"
              alt="Search"
              className="w-[20px] h-[20px]"
            />
            <input
              type="text"
              className="h-[30px] w-[170px] outline-none"
              placeholder="Cari"
            />
          </div>
        </div>
        <div className="overflow-scroll scroll-hide h-[460px] flex flex-col gap-y-2 py-1">
          <div className="h-[48px] flex items-center hover:hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
                <div className="w-[16px] h-[16px] bg-[#EE4D2D] rounded-full flex items-center justify-center text-white text-[14px]">
                  2
                </div>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
                <div className="w-[16px] h-[16px] bg-[#EE4D2D] rounded-full flex items-center justify-center text-white text-[14px]">
                  2
                </div>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
              </div>
            </div>
          </div>
          <div className="h-[48px] flex items-center hover:bg-[#F3F3F3] cursor-pointer">
            <div className="flex gap-2 items-center px-2 w-full justify-between">
              <img
                src="assets/img/rkm7.jpeg"
                alt="Chat"
                className="w-[32px] h-[32px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[16px] text-[#333333]">Store name</span>
                <span className="text-[14px] text-[#666666]">
                  Lorem dolor....
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] text-[#666666]">03/03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
