
# Generador de C.V.

Genera un CV actractivo con un estilo limpio pero basado en Material Designs

# Como usar

Primero instalar las dependencias:

```
$ npm install
```

Luego copiamos el archivo de data de ejemplo:

```
$ cp data.json.example data.json
```

Luego editamos

```
$ $EDITOR data.json
```

Y luego generamos el template:

```
$ npm run gencv
```

Por ultimo para obtener la versión PDF (Ojo anda mal)

```
$ npm run genpdf
```

Tendremos todo lo generado en el directorio build
