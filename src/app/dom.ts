type Selector = {
  name: string
  class?: string
  id?: string
}

type Dom = Record<string, Element | Element[]> | null

export const setupDom = (selectors: Selector[]): Dom => {
  const dom: Dom = {}

  for (let i = 0; i < selectors.length; i += 1) {
    const selector = selectors[i]

    if (selector.id) {
      const element = document.getElementById(selector.id)
      if (!element) {
        // eslint-disable-next-line no-console
        console.error(`Element with id ${selector.id} not found`)
        return null
      }

      dom[selector.name] = element
      continue // eslint-disable-line no-continue
    }

    if (selector.class) {
      const elements = document.getElementsByClassName(selector.class)
      if (!elements.length) {
        // eslint-disable-next-line no-console
        console.error(`Element with class ${selector.class} not found`)
        return null
      }

      dom[selector.name] = Array.from(elements)
      continue // eslint-disable-line no-continue
    }

    // eslint-disable-next-line no-console
    console.error(`Invalid selector for ${selector.name}`)
    return null
  }

  return dom
}
