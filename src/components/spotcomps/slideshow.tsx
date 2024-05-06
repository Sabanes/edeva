"use client";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://images.pexels.com/photos/19125509/pexels-photo-19125509/free-photo-of-lake-in-scotland.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    "https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&w=1200  ",  ];
  return (
    <ImagesSlider className=" opacity-80 w-[200px] md:w-[300px] h-[300px] md:h-[400px]  object-cover" images={images}>
    </ImagesSlider>
  );
}
