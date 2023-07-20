import Mustache from 'mustache'
import * as fs from 'fs'

export const get = async function({ request }) {
    const data = await request.formData()
    console.log('api data', data)
    const template = fs.readFileSync('../../templates/leader.mustache')
    const output = Mustache.render(template, data, [ '<%', '%>' ])
    fs.writeFileSync('../test/test.mdx', output)
}