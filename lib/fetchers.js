export async function getAdvantage(label) {
    if (label !== 'Cavalry') return false
    const saniLabel = sanitizeLabel(label)
    console.log(`../src/pages/advantages/${saniLabel}.md`)
    const a = await fetch(`../public/advantages/${saniLabel}.md`,{
        headers : { 
            'Content-Type': 'text/xml',
            'Accept': 'text/xml'
           }
    })
    console.log('file', a)
    return a.text()
}

function sanitizeLabel(label) {
    return label.toLowerCase()
}