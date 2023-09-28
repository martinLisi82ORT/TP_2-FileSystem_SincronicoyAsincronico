const fs = require('fs')

const leerPackageJson = async (package) => {
    try {
        let dato = await fs.promises.readFile(package, 'utf8')
        let info = {
            contenidoStr: JSON.stringify(dato, null, '\t'),
            contenidoObj: JSON.parse(dato),
            size: dato.length
        }
        console.log(info)

        await fs.promises.writeFile('infoMAPAA.txt', dato)
        console.log('Archivo creado correctamente')

    } catch (error) {
        console.log('Error en operación de lectura o escritura')
    }
}

const package = 'package.json'
leerPackageJson(package)

