import React from 'react'
import 'index.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Placeholder = () => {
  // const [width, setWidth] = React.useState(window.innerWidth)

  // React.useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth)
  //   window.addEventListener("resize", handleResize)
  //   return () => window.removeEventListener("resize", handleResize)
  // }, [])

  return (
    <SkeletonTheme baseColor="#F7F7F7" highlightColor="#fff">
      <div className="grid-container">
        {[...Array(9)].map((_, i) => (
          <div key={i}>
            <Skeleton height={150} width={150} style={{ margin: "2px" }} />
            <p><Skeleton height={6} width={100} style={{ margin: "2px" }} /></p>

            <p><Skeleton height={6} width={140} style={{ margin: "2px" }} /></p>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  )
}

export default Placeholder
