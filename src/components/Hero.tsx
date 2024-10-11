import React from "react";
import { data } from "../data/data.ts";

const Hero = () => {
    const { name } = data;
    return <div>{name}</div>;
};

export default Hero;
