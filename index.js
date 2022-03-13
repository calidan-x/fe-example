const fs = require('fs')
const { createSVG, createTTF, createWOFF } = require('svgtofont/lib/utils')
const path = require('path')

const options = {
  src: path.resolve(process.cwd(), 'src/icon/svg'),
  dist: path.resolve(process.cwd(), 'src/icon'),
  fontName: 'font',
  startUnicode: 0xea01
}

function generateCss(fontUnicode) {
  let cssContent = `
@font-face {
    font-family: "${options.fontName}";
    src: url("${options.fontName}.woff?t=1647176396127") format("woff")
}

.Icon {
    font-family: '${options.fontName}' !important;
    font-size:16px;
    font-style:normal;
    display:inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`

  for (const key in fontUnicode) {
    cssContent +=
      '.' + key + `:before { content: "\\${fontUnicode[key].charCodeAt(0).toString(16)}" }\n`
  }
  fs.writeFileSync(options.dist + '/font.css', cssContent)
}

function generateReact(fontUnicode) {
  let reactContent = `
interface IconProps {
    fontSize: string;
    color: string;
}
`

  Object.keys(fontUnicode).forEach(key => {
    reactContent += `export const ${key} = (props:IconProps) => <i style={props} className='Icon ${key}'/>\n`
  })
  fs.writeFileSync(options.dist + '/index.tsx', reactContent)
}

async function creatFont() {
  const unicodeObject = await createSVG(options)
  const ttf = await createTTF(options) // SVG Font => TTF]
  await createWOFF(options, ttf) // TTF => WOFF
  generateCss(unicodeObject)
  generateReact(unicodeObject)
  fs.unlinkSync(`${options.dist}/${options.fontName}.ttf`)
  fs.unlinkSync(`${options.dist}/${options.fontName}.svg`)
}

creatFont()
