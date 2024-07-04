import React from 'react'
import ProjectBox from './ProjectBox';
import anonVid from '../../assets/anonVid.mp4'
import anonPhone from '../../assets/anonPhone.png'
import noteFull1 from '../../assets/noteFull1.png'
import noteFull2 from '../../assets/noteFull2.png'
import notePhone from '../../assets/notePhone.png'
import ttFull1 from '../../assets/ttFull1.png'
import ttFull2 from '../../assets/ttFull2.png'
import ttPhone1 from '../../assets/ttPhone1.png'
import ttPhone2 from '../../assets/ttPhone2.png'
import ttPhone3 from '../../assets/ttPhone3.png'
import sbAirVid from '../../assets/sbAirVid.mp4'

const Projects = () => {
    const projectData = [
        {
            title: 'i didnt wanna be the one to forget',
            about: 'kinda relied on you for being a friend, take it i dw take it no more, and well never feel alone and thought everything i wanna say, kinda relied on you being a friend',
            url: 'google.com',
            img: { vid: anonVid, img: { full: null, phone: [anonPhone] } },
            left: false
        },
        {
            title: 'i didnt wanna be the one to forget',
            about: 'kinda relied on you for being a friend, take it i dw take it no more, and well never feel alone and thought everything i wanna say, kinda relied on you being a friend',
            url: 'google.com',
            img: { vid: null, img: { full: [noteFull1, noteFull2], phone: [notePhone] } },
            left: true
        },
        {
            title: 'i didnt wanna be the one to forget',
            about: 'kinda relied on you for being a friend, take it i dw take it no more, and well never feel alone and thought everything i wanna say, kinda relied on you being a friend',
            url: 'google.com',
            img: { vid: null, img: { full: [ttFull1, ttFull2], phone: [ttPhone1, ttPhone2, ttPhone3] } },
            left: false
        },
        {
            title: 'i didnt wanna be the one to forget',
            about: 'kinda relied on you for being a friend, take it i dw take it no more, and well never feel alone and thought everything i wanna say, kinda relied on you being a friend',
            url: 'google.com',
            img: { vid: sbAirVid, img: { full: null, phone: null } },
            left: true
        },
    ]
    const projectEls = projectData.map((proj, index) => {
        let { title, about, url, img, left } = proj
        return <ProjectBox index={index} title={title} about={about} url={url} img={img} left={left} />
    })

    return (
        <div id='projects' >
            {...projectEls}
        </div>
    )
}

export default Projects