
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

Lo que si funciona es abrir el archivo template.html con el Firefox y darle 
imprimir, se puede imprimir como PDF y el resultado tendría que ser válido.

    Nota: Firefox tiene una opción (en la pestañas de opciones en imprimir) para 
    imprimir los colores de background.

Tendremos todo lo generado en el directorio build

## Personalizar

En el archivo ```src/main.scss``` se pueden retocar los colores por defecto, 
también se pueden definir mas variables de [muicss](https://www.muicss.com/)
para verlas todas recomiendo [esta
página](https://www.muicss.com/docs/v1/css-js/customization)
