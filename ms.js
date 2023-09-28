const fs = require('fs')

function leerPackageJsonMS(package) {
    try {
        let dato = fs.readFileSync(package, 'utf-8')
        let info = {
            contenidoStr: JSON.stringify(dato, null, '\t'),
            contenidoObj: JSON.parse(dato),
            size: dato.length
        }

        console.log(info)
        // let contenidoStr = JSON.stringify(info, null, '\t')
        fs.writeFileSync('infoMS.txt', dato)
        console.log('Archivo creado correctamente')
    }
    catch (error) {
        console.log('Error en operación  de escritura')
    }
}

const package = 'package.json'
leerPackageJsonMS(package)





