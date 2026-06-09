export function useReveal() {
  const observe = (el: HTMLElement) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
  }

  const vReveal = {
    mounted: (el: HTMLElement) => observe(el),
  }

  return { vReveal }
}
