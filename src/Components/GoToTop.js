// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function GoToTop() {
//     const routePath = useLocation()
//     const onTop = () => {
//         window.scrollTo(0, 0)
//     }
//     useEffect(() => {
//         onTop()
//     }, [routePath])

//     return null
// }

// import { useEffect } from 'react'
// import {useLocation} from 'react-router-dom'

// function GoToTop() {
//     const {pathname} = useLocation()

//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [pathname])

//     return null
// }

// export default GoToTop

import {useEffect, useRef} from 'react'
import {useLocation} from 'react-router-dom'

function GoToTop() {
    const {location} = useLocation()
    const scrollYRef = useRef(0)

    useEffect(() => {
      // Save scroll position when the component unmounts
      return () => {
        sessionStorage.setItem(location, JSON.stringify(scrollYRef.current))
      }
    }, [location])

    useEffect(() => {
      // Restore scroll position when navigating to the page
      const scrollPosition = sessionStorage.getItem(location)
      if (scrollPosition) {
        window.scrollTo(0, JSON.parse(scrollPosition))
      } else {
        window.scrollTo(0, 0)
      }
    }, [location])

    const handleScroll = () => {
      scrollYRef.current = window.scrollY
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return null
}

export default GoToTop