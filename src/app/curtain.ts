import { setupDom } from './dom'

export const setupCurtain = ({ duration = 700 } = {}) => {
  const dom = setupDom([{ id: 'curtain', name: 'curtain' }])

  if (!dom) return

  const curtain = dom.curtain as HTMLElement
  curtain.style.transitionDuration = `${duration}ms`

  curtain.classList.add('removed')
  setTimeout(() => {
    curtain.style.display = 'none'
  }, duration)
}
