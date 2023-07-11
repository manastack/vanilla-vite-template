import { setupCurtain } from './curtain'
import { setupMobileMenu } from './mobile-menu'
import { setupTitles } from './titles'

import '../styles/main.css'

const app = () => {
  setupTitles()
  setupMobileMenu()
  setupCurtain()
}

document.addEventListener('DOMContentLoaded', app)
