import React from "react"
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile"
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from './work'
import Image from 'next/image'

const Works = () => (
    <TileWrapper numOfPages={3}>
        <TileBackground><WorkBackground></WorkBackground></TileBackground>
        <TileContent>
            <Tile
                page={0}
                renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>I&apos;ve built:</div>
                            <div className="text-4xl md:text-5xl font-semibold">
                                <WorkLink href="https://hub.docker.com/repository/docker/owens518/iteration3">Search and Rescue Drone Simulation</WorkLink> using OpenCV to locate obstacles and rescuee.
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image src='/assets/rescue.png' layout="responsive" width={1916} height={1080} alt="resc"></Image>
                        </WorkRight>
                    </WorkContainer>
                )}>
            </Tile>
        
       
            <Tile
                page={1}
                renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div className="text-4xl md:text-5xl font-semibold">Next-word prediction using N-gram language modeling with NLTK.</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image src='/assets/nltk.png' layout="responsive" width={592/ 0.8} height={644/ 0.9} alt='nltk'></Image>
                        </WorkRight>
                    </WorkContainer>
                )}>
            </Tile>
    
            <Tile
                page={2}
                renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div className="text-4xl md:text-5xl font-semibold">
                                <WorkLink href="https://github.com/TheAndrew-O/Bots">Web scraper</WorkLink> to track item availability and auto-purchase.
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image src='/assets/selen.png' layout='responsive' width={2932} height={718} alt='selen'></Image>
                        </WorkRight>
                    </WorkContainer>
                )}>
            </Tile>
        </TileContent>
    </TileWrapper>
)

export default Works