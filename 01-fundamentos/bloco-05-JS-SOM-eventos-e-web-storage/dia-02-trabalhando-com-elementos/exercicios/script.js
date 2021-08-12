let titleH1 = document.createElement('h1')
    titleH1.innerText = 'Exercício 5.2 - JavaScript DOM'

    document.body.appendChild(titleH1)

let mainTag = document.createElement('main')
    mainTag.className = 'main-content'

    document.body.appendChild(mainTag)

let sectionTag = document.createElement('section')
    sectionTag.className = 'center-content'
    
    mainTag.appendChild(sectionTag)

let paragraph1 = document.createElement('p')
    paragraph1.innerText = "Primeiro parágrafo"

    sectionTag.appendChild(paragraph1)

let sectionLeft = document.createElement('section')
    sectionLeft.className = 'left-content'

    mainTag.appendChild(sectionLeft)

let sectionRight = document.createElement('section')
    sectionRight.className = 'right-content'

    mainTag.appendChild(sectionRight)