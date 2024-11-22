import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mari.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps and games.
          </h1>
          <p className="mb-8 leading-relaxed">
            From Games, to Digital Art. Let’s create
            something incredible together. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://scontent.fmnl31-1.fna.fbcdn.net/v/t39.30808-6/462240032_564278769300688_8469642525635698606_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGI81sMeYklDqbGQiCvm1dlcMI7c0lOzodwwjtzSU7Oh5aWk1xp-eXfEv835B_1lMQRzvtlattfctYvt8ccsjWm&_nc_ohc=sV9WcDSoqUMQ7kNvgGDK-yW&_nc_zt=23&_nc_ht=scontent.fmnl31-1.fna&_nc_gid=Ak8xVmx88toaj3ASwC4dYob&oh=00_AYDU4vLXVmaOo23ogYwGFyYNVp8ut92Pgc0dKZo0n75Gtg&oe=6746B62F"
          />
        </div>
      </div>
    </section>
  );
}
