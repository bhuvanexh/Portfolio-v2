import React, { useEffect, useRef } from 'react'
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
import { useInView } from 'framer-motion';
import { useOutlet, useOutletContext } from 'react-router-dom';

const Projects = () => {

    const { setLinkActive, linkActive } = useOutletContext()

    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-180px 0px -180px 0px' })
    useEffect(() => {
        if (isInView) {
            setLinkActive('Projects')
        } else {
            setLinkActive(curr => {
                if (curr == 'Projects') {
                    // console.log('project set null');
                    return null
                }
                else {
                    // console.log('project set curr', curr);
                    return curr
                }
            })
        }

    }, [isInView, linkActive])



    const projectData = [
        {
            title: "Anon's shelf",
            about: "A WebApp for users to discover, explore, and organize their favorite Movies and TV shows in a personalized watchlist. The app includes features like a search bar, content filters, trailers, and category-specific navigation.",
            url: 'https://github.com/bhuvanexh/anon-s-shelf',
            img: { vid: anonVid, img: { full: null, phone: [anonPhone] } },
            left: false
        },
        {
            title: 'AnonPad',
            about: 'A Notes Management WebApp with features like language translation, word counting,speech-to-text, and task tracking. Users have secure login, their own database for saving notes, and a design that works smoothly on any device.',
            url: 'https://github.com/bhuvanexh/notesAppFrontend',
            img: { vid: null, img: { full: [noteFull1, noteFull2], phone: [notePhone] } },
            left: true
        },
        {
            title: 'Timetable Generation and Management App',
            about: 'Automated college timetable scheduling for efficiency and reducing manual errors. It allows admins to manage rules, subjects, and teacher assignments, and teachers to submit class and lab needs. It detects conflicts and offers accessible schedules for both students and teachers.',
            url: 'https://github.com/bhuvanexh/timetable-generator-frontend',
            img: { vid: null, img: { full: [ttFull1, ttFull2], phone: [ttPhone1, ttPhone2, ttPhone3] } },
            left: false
        },
        {
            title: 'S.B Air Engineer',
            about: 'Buisness Website I built for company as an intern to effectively showcase their services and products for attracting and engaging customers',
            url: 'https://github.com/bhuvanexh/S.B_Air',
            img: { vid: sbAirVid, img: { full: null, phone: null } },
            left: true
        },
    ]
    const projectEls = projectData.map((proj, index) => {
        let { title, about, url, img, left } = proj
        return <ProjectBox index={index} title={title} about={about} url={url} img={img} left={left} />
    })

    return (
        <div id='projects' ref={ref}>
            {...projectEls}
        </div>
    )
}

export default Projects