/**
 * @description
 * 如果你想让第一个动画更长怎么办,这可能会变得非常混乱，
 * 但 GSAP 的时间线让它变得非常简单：
 */ 
import gsap from "gsap";
import React from "react";


export default function() {

  const init = () => {
    // 元素从静态开始
    gsap.to('.box', {
      // 旋转角度 从 0-27
      rotation: 27,
      // x轴移动距离 从 0-100
      x: 100,
      // 动画持续时间 
      duration: 1
    })
  }

  React.useEffect(() => {
    init()
  }, [])

  return (
    <div>    
      <div className="timeline-demo-1">
        <p className="title">Meet The Freds</p>
        <img src='' />
      </div>
    </div>
  )
}
