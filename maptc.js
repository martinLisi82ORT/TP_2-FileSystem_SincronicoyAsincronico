const fs = require('fs')

const leerPackageJson = package => {
    return new Promise((resolve, reject) => {
        fs.readFile(package, 'utf8', (error, dato) => {
            if (error) {
                reject('Error en operación de lectura')
            } else
                resolve(dato)
        })
    })
}

const guardarPackageJsonMAPTC = dato => {
    return new Promise((resolve, reject) => {
        fs.writeFile('infoMAPTC.txt', dato, 'utf8', error => {
            if (error) {
                reject('Error en operación de escritura')
            } else
                resolve(console.log('Archivo creado correctamente'))
        })
    })
}

const package = 'package.json'
leerPackageJson(package)
    .then(dato => {
        const info = {
            contenidoStr: JSON.stringify(dato, null, '\t'),
            contenidoObj: JSON.parse(dato),
            size: dato.length
        }
        console.log(info)
        return leerPackageJson(package)
    }).then(package => {
        guardarPackageJsonMAPTC(package)
    })
    .catch(error => console.log(error))


