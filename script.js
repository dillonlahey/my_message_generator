function generateRandomNumber(num) {
    // from 0 -> 1
    return Math.floor(Math.random() * num)
}

const manifestIdeas = {
    trueName: ['dj provai', 'saoirse', 'moglai', 'cillian'],
    northCounty: ['armagh', 'fermanagh', 'tyrone', 'antrim', 'derry', 'down'],
    kneeCapSong: ['get yer brits out', 'fine art', 'c e a r t a', 'sick in the head', 'better way to live']
}

let irishManifest = []

for (let item in manifestIdeas) {
    let optionIdx = generateRandomNumber(manifestIdeas[item].length)

    switch(item) {
        case 'trueName':
            irishManifest.push(`Your true name is ${manifestIdeas[item][optionIdx]}.`)
            break
        case 'northCounty':
            irishManifest.push(`Your county in the North is ${manifestIdeas[item][optionIdx]}.`)
            break
        case 'kneeCapSong':
            irishManifest.push(`Your Kneecap song of the week is ${manifestIdeas[item][optionIdx]}.`)
            break
        default:
            irishManifest.push(`Insufficient information. tiocfadh ar la.`)
    }
}

function formatManifestation(manifest) {
    const formatted = irishManifest.join('\n')
    console.log(formatted)
}

formatManifestation(irishManifest);