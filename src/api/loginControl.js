import svgCaptcha from 'svg-captcha'

class LoginControl {
  constructor() {}
  async getCaptcha (ctx) {
    const captcha = svgCaptcha.create({
      noise: Math.floor(Math.random() * 5),
      background: '#cccccc'
    })
    ctx.body = {
      code: 200,
      data: captcha.data
    }
  }
}

export default new LoginControl()