import React from 'react'
import About from './About/About'
import Home from './home/Home'
import Projects from './Projects/Projects'

const Landing = () => {
    return (
        <div>
            <Home />
            <Projects />
            <About />
        </div>
    )
}

export default Landing