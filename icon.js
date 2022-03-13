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
    src: url("${options.fontName}.woff?t=${Date.now()}") format("woff")
}

.Icon {
    font-family: '${options.fontName}' !important;
    font-size: initial;
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
import { CSSProperties } from 'react';
import './font.css'

interface IconProps {
  className?: string;
  fontSize?: string;
  color?: string;
  style?: CSSProperties;
}

const CommonIcon = (iconName: string) => ({ className, fontSize, color, style }: IconProps) => <i style={{ color, fontSize, ...style }} className={\`Icon $\{iconName} $\{className} \`} />
`

  Object.keys(fontUnicode).forEach(key => {
    reactContent += `export const ${key} = CommonIcon('${key}')\n`
  })
  fs.writeFileSync(options.dist + '/index.tsx', reactContent)
}

function generateShowHtml(fontUnicode) {
  let showContent = `
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="font.css" />
  </head>
  <style>
    *{
      font-family: arial;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  </style>
  <body>
`

  Object.keys(fontUnicode).forEach(key => {
    showContent += `<i class="Icon ${key}" ></i> &lt;${key} /&gt;<br>\n`
  })

  showContent += `
    </body>
  </html>  
  `
  fs.writeFileSync(options.dist + '/icon-show.html', showContent)
}

async function creatFont() {
  const unicodeObject = await createSVG(options)
  const ttf = await createTTF(options) // SVG Font => TTF]
  await createWOFF(options, ttf) // TTF => WOFF
  generateCss(unicodeObject)
  generateReact(unicodeObject)
  generateShowHtml(unicodeObject)
  fs.unlinkSync(`${options.dist}/${options.fontName}.ttf`)
  fs.unlinkSync(`${options.dist}/${options.fontName}.svg`)
}

creatFont()
