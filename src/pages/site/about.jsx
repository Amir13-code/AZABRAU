import VideoHero from "./../../components/site/VideoHero";

export default function About() {
  return (
    <div>
      <VideoHero
        bgImage="/about/abouthero.png"
        videoUrl="https://www.youtube.com/watch?v=SLU7xn-Qi8M"
      />

      <section className="bg-[#F4EDE4] py-32 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16 px-6 relative">
          <div className="relative md:w-1/2 pt-12 top-[120px]">
            <div className="absolute left-[80px] top-[-248px] bottom-[-330px] w-[1px] bg-[#E5D8C9]"></div>
            <h1 className="text-[170px] font-bold text-[#E7D8C5] absolute -top-20 -left-6 leading-none select-none">
              01
            </h1>
            <div className="-mt-17 ml-36">
              <h2 className="text-4xl font-playfair text-[#6B3F1D] leading-tight">
                Biz <br /> Kimik?
              </h2>
            </div>
          </div>
          <div className="">
            <img
              src="/about/image1.jpg"
              alt=""
              className="w-[715px] h-[398px] object-cover  shadow-sm"
            />
          </div>
        </div>
        <div className="max-w-6xl w-[829px] h-[353px]  mx-auto px-6 mt-20">
          <div className="bg-[#E7D8C5] p-10  -mt-20 -ml-26 text-[#4A3928] leading-7 shadow-sm">
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
              dignissim sed euismod ipsum vivamus cursus tristique elit velit.
              Diam fringilla amet fames justo morbi risus velit odio. Commodo id
              sagittis aliquam tempor. Dui volutpat risus, venenatis feugiat
              est. Mattis diam sed urna sed sed augue. Lacus, risus sed donec
              placerat euismod ut ut.
            </p>

            <p>
              Adipiscing est et risus, magna lectus. Viverra amet augue tempus
              donec fringilla aliquam fringilla eget. Facilisis suspendisse
              sociis ut viverra id nisi, feugiat. Parturient lectus gravida eget
              sem donec gravida sed aliquam. Morbi sed aliquam egestas et
              lectus.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto top-[00px] flex flex-col md:flex-row-reverse  gap-16 px-6 relative">
          <div className="relative md:w-1/2 pt-12 ">
            <div className="absolute left-[-570px] top-[-100px] h-[50px] w-[1px] bg-[#E5D8C9] z-0"></div>
            <div className="absolute left-[-570px] top-[-50px] h-[0.5px] w-[943px] bg-[#E5D8C9] z-0"></div>

            <div className="absolute right-[80px] top-[-50px] bottom-[-450px] w-[0.5px] bg-[#E5D8C9] z-0"></div>

            <h1 className="text-[170px] font-bold text-[#E7D8C5] absolute top-20 right-[-17px] leading-none select-none z-10">
              02
            </h1>

            <div className="mt-24 mr-36 relative z-20">
              <h2 className="text-4xl font-playfair text-[#6B3F1D] leading-tight">
                Bizim <br /> Missiyamız
              </h2>
            </div>
          </div>

          <div className="">
            <img
              src="/about/image1.jpg"
              className="w-[715px] h-[398px] object-cover shadow-sm"
              alt=""
            />
          </div>
        </div>

        <div className=" relative max-w-6xl w-[829px] mx-auto px-6 mt-20">
          <div className="bg-[#E7D8C5] p-10 -mt-20 ml-auto text-[#4A3928] leading-7 shadow-sm">
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
              dignissim sed euismod ipsum vivamus cursus tristique elit velit.
              Diam fringilla amet fames justo morbi risus velit odio. Commodo id
              sagittis aliquam tempor. Duis volutpat risus, venenatis feugiat
              est.
            </p>

            <p>
              Viverra amet augue tempus donec fringilla aliquam fringilla eget.
              Facilisis suspendisse sociis ut viverra id nisi. Parturient lectus
              gravida eget sem. Morbi sed aliquam egestas et, lectus.
            </p>
          </div>
          <div className="absolute left-[-57px] top-[175px] h-[0.5px] w-[90px] bg-[#E5D8C9] z-0"></div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16 px-6 relative">
          <div className="relative md:w-1/2 pt-12">
            <div className="absolute left-[80px] top-[-68px] bottom-[-300px] w-[0.5px] bg-[#E5D8C9] z-0"></div>

            <h1 className="text-[170px] font-bold text-[#E7D8C5] absolute top-30 left-[-20px] leading-none select-none z-10">
              03
            </h1>

            <div className="mt-24 ml-40 left-[-15px] top-[30px] relative z-20">
              <h2 className="text-4xl  font-playfair text-[#6B3F1D] leading-tight">
                Niyə <br /> Biz?
              </h2>
            </div>
          </div>

          <div>
            <img
              src="/about/image1.jpg"
              className="w-[715px] h-[398px] mt-[12px] object-cover shadow-sm"
              alt=""
            />
          </div>
        </div>

        <div className="max-w-6xl w-[829px] mx-auto px-6 mt-20">
          <div className="bg-[#E7D8C5] p-10 -mt-20 -ml-26 text-[#4A3928] leading-7 shadow-sm">
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
              dignissim sed euismod ipsum vivamus cursus tristique elit velit.
              Diam fringilla amet fames justo morbi risus velit odio. Commodo id
              sagittis aliquam tempor.
            </p>

            <p>
              Adipiscing est et risus, magna lectus. Parturient lectus gravida
              eget sem donec gravida sed aliquam. Nascetur cursus enim nascetur
              amet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
