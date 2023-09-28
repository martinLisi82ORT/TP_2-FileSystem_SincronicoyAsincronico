const fs = require('fs')

function leerPackageJsonMAC(package) {
    fs.readFile(package, 'utf-8', (error, dato) => {
        if (error) throw Error('Error en operación de lectura')
        let info = {
            contenidoStr: JSON.stringify(dato, null, '\t'),
            contenidoObj: JSON.parse(dato),
            size: dato.length
        }
        console.log(info)
        let contenidoStr = JSON.stringify(info.contenidoObj, null, '\t')
        fs.writeFile('infoMAC.txt', contenidoStr, 'utf-8', error => {
            if (error) throw Error('Error en operación  de escritura')
            console.log('Archivo creado correctamente')
        })
    })
}

const package = 'package.json'
leerPackageJsonMAC(package)

