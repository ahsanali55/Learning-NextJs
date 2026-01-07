"use client"
import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="flex gap-5">
       

        <img src="/download.jpg" width={360}  alt="" />
        <Image
        loader={(props) => {
          return props.src
        }}
        src="https://i.pinimg.com/736x/42/d8/9a/42d89a7eababa7f1aa3f46811f17d556.jpg" width={300} height={600} alt="Motivation-pic"  />
      </div>
    </>
  );
};

export default Home;
