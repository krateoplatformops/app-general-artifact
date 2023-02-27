const fs = require('fs')
const path = require('path')

const files = []
const extensions = ['.js', '.jsx']

const scan = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const location = path.join(dir, file)
    if (fs.lstatSync(location).isDirectory()) {
      scan(location)
    } else {
      const ext = path.extname(location).toLowerCase()
      if (extensions.includes(ext)) {
        const content = fs.readFileSync(location, 'utf8')
        files.push({ name: location, content })
      }
    }
  })
}

const loadContent = (file) => {
  // var, let, const
  // const decl = [
  //   { r: 'let ', good: true },
  //   { r: 'const ', good: true },
  //   { r: 'var ', good: false }
  // ]
  // decl.forEach((d) => {
  //   const match = code.match(RegExp(d.r, 'gm'))
  //   if (match && !d.good) {
  //     console.log(file)
  //   }
  // })
  // functions
  // const func = ['function {0,}\\(', '= {0,}\\(']
  // code.split('\n').forEach((line) => {
  //   const match = line.match(RegExp(func.join('|'), 'gm'))
  //   if (match) {
  //     const w = line.trim().split(' ')
  //     let i = w.indexOf('function')
  //     if (i > -1) {
  //       console.log(w[i + 1].split('(')[0], file)
  //     } else {
  //       i = w.indexOf('=')
  //       if (w[i][0] === '=') {
  //         console.log(w[i - 1])
  //       } else {
  //         console.log(w[i].split('=')[0])
  //       }
  //     }
  //   }
  // })
}

const checkImport = () => {
  files.forEach((f) => {
    const file = path.basename(f.name)
    const fileNoExt = file.replace(path.extname(file), '')
  })
}

const base = './src'
scan(base)
checkImport()
