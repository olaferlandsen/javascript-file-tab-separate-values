# javascript-file-tab-separate-values



Convierte el contenido de un archivo TSV a JSON.
> Los archivos TSV usan como separador o delimitador de columna el caracter TAB.


Ejemplo TSV:
```
name	lastname	phone		email
john	smith		01342433	admin@demo.com
karl	johnson		42342234	demo@demo.com
carlos	martinez	4234234		hello@demo.com
```
> Para separar las columnas se usa la expresion regular `/\t+/` que en su lugar podria ser utilizada `/(\t+|\s{2}|\s{4})/`.
> 
> Ver linea 38 del archivo [dist/tsvToJson.ts](dist/tsvToJson.ts#L38)

Salida JSON:
```json
[
	{"name":"carlos","lastname":"martinez","phone":"4234234","email":"hello@demo.com"},
	{"name":"carlos","lastname":"martinez","phone":"4234234","email":"hello@demo.com"},
	{"name":"carlos","lastname":"martinez","phone":"4234234","email":"hello@demo.com"}
]
```

> Es necesario usar la primera fila como nombre de columnas.


> **IMPORTANTE:**
> Este proyecto fue escrito en TypeScript y compilado para ES5. Ademas, utiliza [XMLHttpRequest](https://developer.mozilla.org/es/docs/XMLHttpRequest) para obtener el contenido del archivo y [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) para convertir a formato JSON.