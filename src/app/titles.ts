import { setupDom } from './dom'

export const setupTitles = () => {
  const dom = setupDom([{ class: 'title', name: 'titles' }])

  if (!dom) return

  const titles = dom.titles as HTMLElement[]
  titles.forEach((title, i) => {
    const isEven = i % 2 === 0
    const randomDeg = Math.floor(Math.random() * 20) + 1
    const deg = isEven ? randomDeg : -randomDeg
    title.style.transform = `rotate(${deg}deg)`
  })
}
