import React, { useRef, useEffect } from 'react';

const Home = () => {
    const letters = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    const headingRef = useRef(null);

    useEffect(() => {
        const heading = headingRef.current;

        if (heading) {
            heading.dataset.value = 'BHUVANESH CHOUDHARY';

            let iteration = 0;
            const interval = setInterval(() => {
                heading.innerText = heading.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return heading.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iteration >= heading.dataset.value.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        }
    }, [letters]);

    return (
        <div id='home' className='h-screen min-h-[550px] flex justify-center items-center'>
            <div className='w-full px-4 sm:w-[80%] lg:min-w-[650px] xl:min-w-[780] flex flex-col gap-3'>
                <h3 ref={headingRef} className='sm:text-xl lg:text-3xl roboto sm:tracking-[5px] xl:tracking-[8px] text-[#9FA5A5]' >BHUVANESH CHOUDHARY</h3>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-4'>
                        <h2 className='text-5xl sm:text-6xl lg:text-8xl raleway font-semibold text-white'>
                            FullStack
                        </h2>
                        <span className=' grow lg:grow-0 w-[35%] h-[3px]  bg-[#1f6161]'>
                        </span>
                    </div>
                    <div>
                        <h2 className='text-5xl sm:text-6xl lg:text-8xl raleway font-semibold text-white'>
                            Developer
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
