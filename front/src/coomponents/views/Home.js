import React from "react";
import NextButton from "../parts/Nextbutton";
import { member } from "../../data/member";
import twitter from "../../assets/img/twitter-logo.png";
import github from "../../assets/img/github-logo.png";

const Home = () => {
    return (
      <div> 
        <div align="center">
          <h1 className="text-6xl mt-24">タイトル</h1>
          <h2 className="text-3xl mt-8 mb-28" >エンジニア</h2>
          <NextButton path="CreateRoom" name="はじめる"/>
        </div>

        <div align="center" className="mt-12">
          
          <div className="shadow-xl my-12 bg-thin-purple py-5">
          <div className="text-lg text-doer-purple font-bold mb-5">CREATORS & CONTRIBUTORS</div>
            {member.map((memberData) =>{
              return(
                <div className="border-l-8 border-thick-purple mt-2 p-2 bg-white rounded  shadow-lg w-60 flex justify-center items-center justify-items-stretch mt-2">
                  <a className="w-32 text-xs flex justify-self-start">{memberData.name}</a>
                  <a 
                    className="px-2 inline-block flex justify-self-start mr-2 hover:opacity-70"
                    href={`https://twitter.com/${memberData.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer">
                      
                      <img className="w-[20px]" src={twitter} alt="Twitter" />
                      {/* <span className="ml-1 text-[0.8rem]">@{memberData.twitter}</span> */}
                  </a>
                  <a
                    className="flex justify-self-start hover:opacity-70"
                    href={`https://github.com/${memberData.github}`}
                    target="_blank"
                    rel="noopener noreferrer">
                      <img className="w-[20px]" src={github} alt="Twitter" />
                      {/* <span className="ml-1 text-[0.8rem]">@{memberData.github}</span> */}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
};

export default Home