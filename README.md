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

Salida JSON:
```json
[
	{"name":"carlos","lastname":"martinez","phone":"4234234","email":"hello@demo.com"},
	{"name":"carlos","lastname":"martinez","phone":"4234234","email":"hello@demo.com"},
	{"name":"carlos","lastname":"martinez","phone":"4234234","email":"hello@demo.com"}
]
```

> Es necesario usar la primera fila como nombre de columnas.