// eslint-disable-next-line unicorn/prefer-top-level-await
import('./bootstrap').then(({ mount }) => {
  mount(document.querySelector('#root'))
})
