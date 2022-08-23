/**
 * @description
 * 时间线使排序和复杂的编排变得非常容易。
 * 时间线就像是多个 Tween
 */
import React from "react";
import gsap from "gsap";

export default function () {

  const init = () => {
    // const tl = gsap.timeline();
    // tl.to('.demo3-box', {
    //   x: 100,
    //   duration: 4
    // })
    // .to('.demo3-box', {
    //   y: 100
    // })
    // .to('.demo3-box', {
    //   x: 0
    // })
    // .to('.demo3-box', {
    //   y: 0
    // })

    // 使用keyframs 更加简洁的方式
    gsap.to('.demo3-box', {
      keyframes: [
        {x: 100}, 
        {y: 100},
        {x: 0, onComplete: () => {
          console.log('该动画完成后的回调')
        }}, 
        {y: 0},
      ],
      transformOrigin: 'center center', // 旋转中心
      rotate: 360, // 旋转角度
      duration: 4, // 动画持续时间
    })
  }

  React.useEffect(() => {
    init()
  }, [])

  
  return (
    <div className="demo3">
      <div className="demo3-box green box-size"></div> 
    </div>
  )
}
