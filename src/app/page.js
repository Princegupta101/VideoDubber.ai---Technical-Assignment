"use client";
import { Noto_Sans } from "next/font/google";
import Head from "next/head";
import { useState } from "react";

const notoSansFont = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
});

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={notoSansFont.className}>
      <Head>
        <title>VideoDubber - Fast Video Translator</title>
        <meta
          name="description"
          content="Translate videos in your own voice, globalize in a click!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center p-4 text-[0.95rem] font-medium">
        <div className="text-2xl flex items-center justify-center w-8 h-8 font-bold bg-primary text-white p-1 rounded-full">
          P
        </div>
        <input
          type="search"
          placeholder="Search ( ctrl + k )"
          className="w-full max-w-md mx-5 px-2 p-1.5 border rounded bg-gray-100 hidden xl:block"
        />
        <nav className="hidden xl:flex space-x-5">
          {["Launches", "Products", "News", "Community", "Advertise"].map((item) => (
            <a key={item} href="#" className="">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-primary text-white px-4 py-1.5 rounded">
            Subscribe
          </button>
          <button className="bg-secondary text-primary px-4 py-1.5 rounded">
            Sign in
          </button>
          <button className="xl:hidden" onClick={toggleMenu}>
            <img src="/menu.png" alt="Menu Icon" className="w-8 h-8" />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="xl:hidden flex flex-col items-center space-y-2 p-4 bg-gray-100 border-t">
          <input
            type="search"
            placeholder="Search ( ctrl + k )"
            className="w-full max-w-md p-2 border rounded bg-gray-200"
          />
          <nav className="flex flex-col space-y-2">
            {["Launches", "Products", "News", "Community", "Advertise"].map((item) => (
              <a key={item} href="#" className="block">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main className="w-full h-full flex justify-center items-center py-8 px-10">
        <div>
          <div className="text-sm text-gray-500">
            <a href="#" className="hover:underline">
              Home
            </a>{" "}
            &gt;
            <a href="#" className="hover:underline">
              {" "}
              Product
            </a>{" "}
            &gt; VideoDubber - Fast Video Translator
          </div>
          <div className="main-box flex md:flex-row flex-col justify-center gap-6 md:items-end mt-8">
            <div className="md:w-[60%] w-[100%] ">
              <div className="mt-4">
                <div className="w-20 h-12">
                  <img
                    src="/logo.png"
                    alt="VideoDubber Icon"
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-2xl font-bold mt-5">
                  VideoDubber - Fast Video Translator
                </h1>
              </div>
              <p className="mt-2 text-2xl font-extralight text-gray-500">
                Translate videos in your own voice, globalize in a click!
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <button className="bg-white text-black border text-base px-4 font-semibold py-5 w-24 rounded mr-4">
                Visit 
              </button>
              <div className="flex items-center">
                <button className="bg-primary text-white text-base px-4 font-semibold py-5 w-52 rounded" onClick={toggleModal}>
                  UPVOTE 58
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 overflow-y-auto h-full w-full flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
            <div className="flex justify-end text-3xl">
              <button onClick={toggleModal} className="text-gray-600 hover:text-gray-900">&times;</button>
            </div>
            <div className="text-center">
              <img src="/kitty.avif" alt="ProductHunt Cat" className="mx-auto w-20 h-20" />
              <h2 className="text-2xl font-semibold mt-4 text-gray-700">Sign up to vote</h2>
              <p className="text-gray-500 mt-2 font-normal text-basic w-[85%] m-auto">
                Join our community of friendly folks discovering and sharing the latest products in tech.
              </p>
              <button className="bg-white border w-fit m-auto px-10 border-gray-300 rounded mt-4  py-2 flex justify-center items-center space-x-2">
                <img src="/google.png" alt="Google" className="w-6 h-6" />
                <span>Sign in with Google</span>
              </button>
              <div className="flex justify-center space-x-4 mt-4">
                {["twitter", "facebook", "apple-logo", "linkedin"].map((icon) => (
                  <button key={icon} className="p-4 border text-white rounded">
                    <img src={`/${icon}.png`} className="w-5" alt={icon} />
                  </button>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4 font-thin">
                We'll never post to any of your accounts without your permission.
              </p>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}