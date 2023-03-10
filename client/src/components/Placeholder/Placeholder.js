import React from 'react'
import 'index.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Placeholder = () => {

  return (
    <SkeletonTheme baseColor="#F7F7F7" highlightColor="#fff">
      <div className="grid-container">
        {[...Array(12)].map((_, i) => (
          <div key={i}>
            <Skeleton height={230} width={230} style={{ margin: "2px" }} />
            <Skeleton height={6} width={100} style={{ margin: "2px" }} />
            <Skeleton height={6} width={70} style={{ margin: "2px" }} />
            <Skeleton height={6} width={140} style={{ margin: "2px" }} />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  )
}

export default Placeholder
