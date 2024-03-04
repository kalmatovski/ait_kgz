import React from "react";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-slate-700 w-full h-screen  p-24">
      <div className="w-full flex items-center flex-col">
        <h1 className="font-serif text-4xl pb-7">About me</h1>
        <p className="font-extralight">
          Я начинающий, замотивированный программист. Всегда готов к новым
          обучениям и трудолюбив:)
        </p>
        <div className="flex">
          <p className="w-1/4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            labore harum modi eveniet quisquam laudantium at minima totam. Fugit
            atque ducimus eum!
          </p>
          <p className="w-1/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            labore harum modi eveniet quisquam laudantium at minima totam. Fugit
            atque ducimus eum!
          </p>
          <p className="w-1/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            labore harum modi eveniet quisquam laudantium at minima totam. Fugit
            atque ducimus eum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
