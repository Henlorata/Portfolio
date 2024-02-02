const randNum = (min, max) => {
    return Math.round(Math.random() * (max-min) + min)
}

export const about = () => {
    document.getElementById('randNum').innerHTML += randNum(100, 1000)
}