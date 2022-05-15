import React from "react"
import Image from "next/image"

const AboutMe: React.FC = () => {
    return (
        <section className={"flex flex-col bg-white py-20 text-3xl md:text-4xl"}>
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
            <script>
                AOS.init();
            </script>
            <div className="container mx-auto px-11" data-aos='zoom-in' data-aos-delay='100'>
                <p className="text-center max-w-5xl mx-auto text-4xl">
                    <strong>About Me</strong>
                </p>
                <p className="leading-tight max-w-5xl mx-auto text-3xl tracking-wide">
                    I am a college student majoring in computer science at the University of Minnesota.
                    I have experience with web development and personal projects on natural language processing and computer vision.
                    My specialties include coding in Python for things such as data analysis to parsing and language modeling.
                    For frontend development, I have experience with React, Angular, and Next.js.
                </p>
            </div>
            <script>
                AOS.init();
            </script>
            <div className="container mx-auto px-11 text-center mt-28" data-aos="fade-right">
                <h2><strong>What I Use</strong></h2>
            </div>
            <header></header>
            <h3></h3>
            <h4></h4>
        </section>
    )
}

export default AboutMe