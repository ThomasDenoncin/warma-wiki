import Astro from 'astro'
import Mustache from 'mustache'
import * as fs from 'fs'

if (Astro.request.method === "POST") {
    const data = await Astro.request
    console.log('api data', data)
    const template = fs.readFileSync('../../templates/leader.mustache')
    const output = Mustache.render(template, data, [ '<%', '%>' ])
    fs.writeFileSync('../test/test.mdx', output)
}