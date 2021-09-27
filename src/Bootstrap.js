let loader = [
    'Header',
    // "Main",
    // "Aside",
    // "Footer"
]

loader.forEach(component => {
    fetch(`components/${component}.html`).then(data => data.text()).then(c => {
        let parent = document.createElement(component.toLowerCase())
        parent.innerHTML = c
        let script = parent.children[1]
        parent.removeChild(parent.children[1])
        let fff = {

        }
        eval(script.innerText)
        window.component.bind(parent.children[0])()
        document.body.appendChild(parent)
    })
})
