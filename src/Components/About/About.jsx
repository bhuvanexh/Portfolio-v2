import React from 'react'

const About = () => {
    return (
        <div id='about' className='min-h-screen flex px-2 sm:px-6 xl:px-12 pt-20 pb-32 justify-center relative'>
            <div className='max-w-[1000px] items-center flex flex-col lg:flex-row gap-10'>
                <div className=' w-[95%] md:w-[80%] lg:self-start lg:w-[50%] flex flex-col gap-3 sm:gap-5'>
                    <h4 className='text-2xl sm:text-3xl font-semibold text-white'>Hey there</h4>
                    <p className='text-lg sm:text-xl text-[#CFCFCF]'>
                        I’m Bhuvanesh Choudhary, currently living in Bikaner and pursuing a B.Tech in Computer Science at the University College of Engineering and Technology Bikaner. I work as a frontend developer, focusing on creating engaging web applications with MERN stack. I love experimenting with code to bring ideas to life and making the web a more interactive and enjoyable place.
                    </p>
                    <p className='text-lg sm:text-xl text-[#CFCFCF]'>
                        In my spare time, I enjoy watching movies, exploring new TV shows, listening to music, and diving into different corners of the internet. I’ve always infused a personal touch of my hobbies into most of my projects and I’m always keen on discovering new projects or ideas, so feel free to get in touch!
                    </p>
                    <span className='sm:text-lg font-semibold text-[#00EEFF]'>---- Send me a message</span>
                </div>
                <div className=' w-[95%] md:w-[80%] lg:w-[50%] pb-10 lg:pt-44'>
                    <div className='bg-slate-400 h-[70vh]'></div>
                </div>
            </div>
            <div className='text-[#CFCFCF] absolute bottom-8 w-full flex justify-center md:pr-[150px]'>
                <span >
                    Crafted by Bhuvanesh Choudhary
                </span>
            </div>
        </div>
    )
}

export default About