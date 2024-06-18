import React from "react";
import blog from "../../public/blogapp.jpg";

export const Projects = () => {
  const cardItem = [
    {
      id: 1,
      logo: blog,
      name: "Blog Application",
    },
  ];

  return (
    <>
    <div>
      <div className="bg-zinc-300 md:min-h-screen h-auto pb-9">
        <div className="md:max-w-6xl md:mx-auto ml-4 mr-4 ">
          <h1 className="md:text-4xl text-2xl font-semibold pt-10">Projects</h1>
          <div className="flex flex-col gap-10 mt-10 md:grid md:grid-cols-3 ">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className="md:w-[340px] w-full h-[390px] p-1 text-justify border border-stone-300 bg-zinc-200 shadow-xl hover:scale-105 transition-transform duration-300 rounded-md"
                key={id}
              >
                <img
                  src={logo}
                  alt=""
                  className="md:w-[320px] w-full h-[220px] ml-1 rounded-md border shadow-md"
                />
                <div className="m-1 gap-2 flex flex-col ml-2 mr-2">
                  <h1 className="mt-2 font-bold">{name}</h1>
                  <p className="font-medium">
                    This is a Blog-Application website made with MERN stack.
                  </p>
                  <div className="flex justify-between mt-3">
                    <button className="ml-6 border border-zinc-400 p-2 rounded-md text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 active:bg-none">
                      <a href="https://app-mern-blog-100.onrender.com/">Visit App</a>
                    </button>
                    <button className="mr-6 border border-zinc-400 p-2 rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 active:bg-none">
                      <a href="https://github.com/krunal-ar-panhal/app-mern-blog.git">Source Code</a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border border-black"/>
      </div>
    </>
  );
};
