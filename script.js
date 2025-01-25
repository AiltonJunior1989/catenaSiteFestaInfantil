
const myObserver = new IntersectionObserver(entries => {
  console.log(
    entries)
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Olá')
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))

