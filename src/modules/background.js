const background = () => {
    const body = document.querySelector('body')
    const gameSection = document.querySelector('.game')
    const playerBlock = document.createElement('div')
    playerBlock.classList.add('player-block')

    body.style.background = "url(./img/bag.jpg) no-repeat center / cover"
    gameSection.style.position = "relative"
    playerBlock.style.position = "absolute"
    playerBlock.style.bottom = "100px"
    playerBlock.style.left = "50%"
    playerBlock.style.marginLeft = "-75px"
    playerBlock.style.width = "150px"
    playerBlock.style.height = "450px"
    playerBlock.style.background = "url(./img/hero.png) no-repeat center / cover"

    gameSection.append(playerBlock)
}

export default background