/**
 * @description
 * 对于一些简单的动画，没有执行顺序的动画我们使用该Api即可
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
      <div className="box green"></div>
      <div className="box orange"></div>
      <div className="box grey"></div>
    </div>
  )
}
