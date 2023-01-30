import React from 'react'
import 'index.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Placeholder = () => {
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <SkeletonTheme baseColor="#F7F7F7" highlightColor="#fff">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              width: width > 800 ? "25%" : "50%"
            }}
          >
            <Skeleton height={150} width={150} style={{ margin: "2px" }} />
            <p>
              <Skeleton height={6} width={100} style={{ margin: "2px" }} />
            </p>
            <p>
              <Skeleton height={6} width={140} style={{ margin: "2px" }} />
            </p>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  )
}

export default Placeholder



// const Placeholder = () => {
//   return (
//     <SkeletonTheme baseColor={"#F7F7F7"} highlightColor="#fff">
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {[...Array(3)].map((_, i) => (
//           <div key={i} style={{ display: "flex", flexDirection: "column" }}>
//             <Skeleton height={150} width={150} style={{ margin: "5px" }} />
//             <p>
//               <Skeleton height={6} width={100} style={{ margin: "5px" }} />
//             </p>
//             <p>
//               <Skeleton height={6} width={140} style={{ margin: "5px" }} />
//             </p>
//           </div>
//         ))}
//       </div>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {[...Array(3)].map((_, i) => (
//           <div key={i} style={{ display: "flex", flexDirection: "column" }}>
//             <Skeleton height={150} width={150} style={{ margin: "5px" }} />
//             <p>
//               <Skeleton height={6} width={100} style={{ margin: "5px" }} />
//             </p>
//             <p>
//               <Skeleton height={6} width={140} style={{ margin: "5px" }} />
//             </p>
//           </div>
//         ))}
//       </div>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {[...Array(3)].map((_, i) => (
//           <div key={i} style={{ display: "flex", flexDirection: "column" }}>
//             <Skeleton height={150} width={150} style={{ margin: "5px" }} />
//             <p>
//               <Skeleton height={6} width={100} style={{ margin: "5px" }} />
//             </p>
//             <p>
//               <Skeleton height={6} width={140} style={{ margin: "5px" }} />
//             </p>
//           </div>
//         ))}
//       </div>
//     </SkeletonTheme>
//   )
// }

// export default Placeholder

  // < Skeleton count = { 5} height = { 100} width = { 100} style = {{ margin: '10px' }} />
  // <div style={{ display: 'flex', flexWrap: 'wrap', width: '300px', height: '300px' }}></div>
