export function getArrayOfPages(items) {
  let copyItems = [...items]
  let lengthItems = copyItems.length
  const pages = []

  // First page
  if (lengthItems > 6) {
    pages.push(copyItems.slice(0, 5))
    copyItems = copyItems.slice(5, lengthItems)
    lengthItems = copyItems.length
  } else {
    pages.push(copyItems.slice(0, 6))
    copyItems = copyItems.slice(6, lengthItems)
    lengthItems = copyItems.length
  }

  if (lengthItems === 0) return pages

  // Middle pages
  const segments = Math.max(lengthItems / 4) - 1

  for (let i = 1; i <= segments; i++) {
    const segment = copyItems.slice(0, 4)
    pages.push(segment)
    copyItems = copyItems.slice(4, lengthItems)
    lengthItems = copyItems.length
  }

  // Last page
  if (lengthItems === 1) {
    const lastItem = copyItems[0]
    pages[pages.length - 1].push(lastItem)
    copyItems = []
    lengthItems = 0
  } else {
    const lastPage = copyItems.slice(0, 5)
    pages.push(lastPage)
    copyItems = []
    lengthItems = 0
  }

  return pages
}
