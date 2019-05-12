/* global MutationObserver */

const call = (currentTarget, event) => {
  if (currentTarget[event]) {
    currentTarget[event].call(currentTarget, {currentTarget})

    currentTarget[event] = null
  }
}

const traverse = (target, event) => {
  call(target, event)

  for (const child of target.childNodes) {
    traverse(child, event)
  }
}

const config = {attributes: true, childList: true, characterData: true, subtree: true}

const callback = (mutations) => {
  for (const mutation of mutations) {
    const target = mutation.target

    call(target, 'onappend')

    for (const added of mutation.addedNodes) {
      traverse(added, 'onappend')
    }

    for (const removed of mutation.removedNodes) {
      traverse(removed, 'onremove')
    }
  }
}

export default (target) => {
  const observer = new MutationObserver(callback)

  observer.observe(target, config)

  return observer.disconnect
}
