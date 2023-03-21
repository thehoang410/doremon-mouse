

const body = document.querySelector('body')

body.addEventListener('mousemove', (event) => {
  const eyes = document.querySelectorAll('.eye-black')

  eyes.forEach(eye => {
    const x = eye.getBoundingClientRect().right + eye.clientWidth / 2
    const y = eye.getBoundingClientRect().bottom + eye.clientHeight / 2
    
  

    const radian = Math.atan2(event.pageX - x, event.pageY - y)
    const rotate = radian * (180 / Math.PI) * -1

    eye.style.transform = `rotate(${rotate}deg)`

  })
})
console.log(eye.clientHeight / 2)