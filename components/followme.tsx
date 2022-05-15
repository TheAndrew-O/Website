import React from "react"
import { WorkLink } from "./work"
import Image from 'next/image'

const FollowMe: React.FC = () => (
    <section className="bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32">
        
        <div className="flex flex-col justify-center itmes-center hover:animate-bounce">
            <h2 className="text-4xl mb-10 font-bold text-center">
                <span className="whitespace-nowrap">
                    Follow me @
                </span>
            </h2>
        </div>
        <div className="flex justify-evenly">
                <div>
                    <a href="https://github.com/TheAndrew-O"><Image className="hover:animate-pulse" src='/assets/github.png' height={150} width={150} alt='git'></Image></a>
                </div>
                <div>
                    <a href="https://hub.docker.com/u/owens518"><Image className="hover:animate-pulse" src='/assets/docker.png' height={150} width={200} alt='git'></Image></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/andrewjowens1/"><Image className="hover:animate-pulse" src='/assets/linkedin.png' height={150} width={150} alt='git'></Image></a>
                </div>
        </div>
    </section>
    
)

export default FollowMe