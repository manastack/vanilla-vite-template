import { setupDom } from './dom'

export const setupMobileMenu = () => {
  const mobileMenuButtonName = 'mobileMenuButton'
  const mobileMenuName = 'mobileMenu'
  const mobileMenuOverlayName = 'mobileMenuOverlay'

  const selectors = [
    { id: 'mobile-menu', name: mobileMenuName },
    { id: 'mobile-menu-button', name: mobileMenuButtonName },
    { id: 'mobile-menu-overlay', name: mobileMenuOverlayName },
  ]

  const dom = setupDom(selectors)
  if (!dom) return

  const mobileMenuButton = dom[mobileMenuButtonName] as HTMLElement
  const mobileMenu = dom[mobileMenuName] as HTMLElement
  const mobileMenuOverlay = dom[mobileMenuOverlayName] as HTMLElement

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenuOverlay.classList.toggle('hidden')
  })

  mobileMenuOverlay.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenuOverlay.classList.toggle('hidden')
  })

  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenuOverlay.classList.toggle('hidden')
  })
}
