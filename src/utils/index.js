// 防抖函数
function debounce(fn, delay) {
  let timer
  return function () {
    let args = arguments
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// 节流函数 - 时间戳版
function throttle(fn, delay) {
  let last = 0
  return function () {
    const _this = this
    const args = arguments
    let now = Date.now()
    if (now - last > delay) {
      fn.apply(_this, args)
      last = now
    }
  }
}

// 节流函数 - 定时器版
function throttle2(fn, delay) {
  let timer
  return function () {
    const args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, timeout)
    }
  }
}
