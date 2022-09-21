import { useEffect, useState } from 'react'

function useScroll(pos) {
    const [scroll, setScroll] = useState(0);
    const handleScroll = () => {
      if(window.scrollY >= pos) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    })

    return scroll
}

export default useScroll