import React, { useEffect, useState } from "react";
import "../index.scss";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Progress,
} from "@material-tailwind/react";
import ComplexNavbar from "../Components/ComplexNav";
import CardComponent from "../Components/Card";
import colorStore from "../Store/ThemeColorStore";
import { observer } from "mobx-react-lite";
import { TIMEOUT } from "dns";
import { skills, skills2 } from "../Data/Skills";
import TonyIMG from "../Images/Tony.jpg";

const TitleArr = ["FRONTEND", "JAVASCRIPT", "REACT", "UI/UX", "WEB APP"];

const Homepage = observer(() => {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(TitleArr[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === TitleArr.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      setTitle(TitleArr[index]);
    }, 500);

    return () => clearInterval(interval);
  });

  return (
    <div className="px-0 lg:px-12 py-6">
      <div className="flex-col-reverse flex lg:flex-row-reverse pt-20 items-center">
        <img
          className="w-full lg:h-96 lg:w-1/3 object-cover rounded lg:rounded-l-full shadow-xl shadow-blue-gray-900/50 ml-auto"
          src={TonyIMG}
          alt="Tony Kim"
        />
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            className={`font-playfair text-6xl xl:text-8xl ${colorStore.themeColorClass}--text`}
          >
            Hi I'm Tony,
          </h1>
          <h2 className="font-roboto text-3xl text-gray-600 mt-6">
            A {title} DEVELOPER
          </h2>
          <p className="font-roboto text-gray-600 mt-6">
            Currently a Frontend Engineer in the Experience Design (UX) Practice
            at
            <a className="text-credera-red" href="https://credera.com/">
              &nbsp;Credera.&nbsp;
            </a>
            I am passionate about crafting seamless and intuitive digital
            experiences. With a strong background in both design and
            development, I specialize in creating user-centric frontend
            solutions that strike the perfect balance between aesthetics and
            functionality.
          </p>
        </div>
      </div>
      <h2 className="font-roboto text-3xl text-gray-600 pt-20">
        MY TECH STACK
      </h2>
      <div className="flex gap-4">
        <div className="lg:w-1/3 w-1/2">
          {skills.map((skill) => {
            return (
              <>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography className="mt-2" color="blue" variant="h6">
                    {skill.name}
                  </Typography>
                </div>
                <Progress value={skill.value} color="blue" />
              </>
            );
          })}
        </div>
        <div className="lg:w-1/3 w-1/2">
          {skills2.map((skill) => {
            return (
              <>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography className="mt-2" color="blue" variant="h6">
                    {skill.name}
                  </Typography>
                </div>
                <Progress value={skill.value} color="blue" />
              </>
            );
          })}
        </div>
      </div>
      <h2 className="font-roboto text-3xl text-gray-600 pt-20 ">
        A LITTLE BIT MORE ABOUT ME
      </h2>
      <p className="font-roboto text-gray-600 mt-6 w-1/2 mb-12 w-full xl:w-1/2">
        When I'm not coding, you'll often find me exploring new places and
        cultures, and documenting that experience with a creative medium. Check
        out this video that I've made after visiting Barcelona, Spain!
      </p>
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/aVQ3aRnQauE?autoplay=1&controls=0&frameborder=0&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
});

export default Homepage;
