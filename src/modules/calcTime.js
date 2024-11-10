//convert minutes to hours and minutes = 1h25m
const calcTime = (time) => {
    const hours = Math.floor(parseInt(time) / 60)
    const minutes = parseInt(time) % 60
    return `${hours}h${minutes}m`
}

export default calcTime;