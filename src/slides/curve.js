const cmz = require('cmz')
const styles = cmz.inline('', `
.bg {
  min-height: 101vh;
}

.images {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.image {
  width: 30vw;
  margin-left: -4vw;
  border: 0.5vw solid #fff;
  border-radius: 200vw;
}

.image:first-child {
  margin-left: 0;
}
`, {
  'image': 'substep substep-fade-up'
})

const tag = require('../util/tag').bind(null, styles)

module.exports = function () {
  return tag('slide.&', {}, [
    tag('img.bg', { src: 'src/images/curve-axes.png' }),
    tag('.images', {}, [
      tag('img.image', { src: 'src/images/curve-line.png', style: 'z-index: 2' }),
    ])
  ])
}
