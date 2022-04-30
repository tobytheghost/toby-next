import React, { useEffect } from 'react'

const useTypewriter = (typewriter, content) => {
  useEffect(() => {
    if (!typewriter || !typewriter.current) return

    let interval = setInterval(typeText, 100)
    let textState = 0
    let partIndex = 0

    function typeText () {
      const text = content[textState].substring(0, partIndex + 1)
      typewriter.current.innerHTML = text
      partIndex++

      if (text === content[textState]) {
        clearInterval(interval)
        setTimeout(() => (interval = setInterval(deleteText, 50)), 1000)
      }
    }

    function deleteText () {
      const text = content[textState].substring(0, partIndex - 1)
      typewriter.current.innerHTML = text
      partIndex--

      if (text === '') {
        clearInterval(interval)
        if (textState == content.length - 1) {
          textState = 0
        } else {
          textState++
        }
        partIndex = 0
        setTimeout(() => {
          interval = setInterval(typeText, 100)
        }, 200)
      }
    }

    return () => {
      clearInterval(interval)
    }
  }, [])
}

export default useTypewriter
