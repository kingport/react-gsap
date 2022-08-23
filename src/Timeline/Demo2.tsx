/**
 * @description
 * 时间线使排序和复杂的编排变得非常容易。
 * 时间线就像是多个 Tween
 */
import React from "react";
import gsap from "gsap";

export default function () {
  let tween:any = null

  const init = () => {
    tween = gsap.to('.demo2-box', {
      duration: 4,
      x: 500,
      rotation: 360,
      ease: 'none', // 动画类型 
      paused: true // 是否暂停 动画将在创建后立即暂停(元素创建时动画不执行)
    })
  }

  React.useEffect(() => {
    init()
  }, [])

  // 开始
  const play = () => {
    tween?.play()
  }
  // 暂停
  const pause = () => {
    tween?.pause()
  }
  // 恢复
  const resume = () => {
    tween?.resume()    
  }
  // 动画反转
  const reverse = () => {
    tween?.reverse()      
  }
  // 重新开始
  const restart = () => {
    tween?.restar()          
  }

  
  return (
    <div className="demo2">
      <div className="demo2-box green"></div>   
      <div className="nav">
        <button onClick={play} id="play">play()</button>
        <button onClick={pause} id="pause">pause()</button>
        <button onClick={resume} id="resume">resume()</button>
        <button onClick={reverse} id="reverse">reverse()</button>
        <button onClick={restart} id="restart">restart()</button>
      </div>
    </div>
  )
}
