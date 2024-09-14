## 🪅 Atributos

Muy aparte del propio contenido de un blog, es importante tener en cuenta los atributos que lo definen. Estos atributos son los que permiten identificar y clasificar el contenido, y son los que permiten a los usuarios encontrar y acceder a la información que buscan.

```yaml
---
title: Post de ejemplo
summary: Este es un post de ejemplo explicando los atributos de un post.
date: 2024-09-13
tags:
  - ejemplo
  - atributos
  - post
keywords:
  - ejemplo
  - atributos
  - post
  - blog
  - contenido
  - clasificación
  - identificación
authors: Juan alcachofa
cover: ./assets/cover.webp
---
```

## 🚀 Preparando el entorno

Lo primordial es configurar el [Content Collections](https://docs.astro.build/en/guides/content-collections/) que es una manera que AstroJS nos permite trabajar con contenido markdown, json o yaml. Entonces, creamos un directorio `src/content` en el cual guardaremos un archivo de configuración `config.ts` con el siguiente contenido:

```ts
import { defineCollection } from "astro:content";
// Importar esquemas

// Definir colecciones

export const collections = {
  /* ... */
};
```

Con esto ya tenemos todo listo para empezar a trabajar con el _Content Collections_ y poder mantener un control de los atributos de nuestros posts.

## ✍️ Definiendo colecciones

Por los atributos anteriores, podemos definir dos atributos complejos: `tags` y `authors`, entonces estos serán colecciones. Además, tenemos lo principal que es el post, el cual también será una colección.

### 🏷️ Tags

> Un tag es una palabra clave que se asigna a un post para clasificarlo y agruparlo con otros posts similares, estos **son únicos y conocidos en el entorno**.

Dado que los tags son únicos y conocidos, entonces es necesario tener los tags definidos para que puedan ser usados en los posts y así no tener tags duplicados, mal escritos o que no existan. Ahora bien, definimos el esquema de los tags tenemos:

```json
// src/content/tags/scheme.ts
{
  "name": "programación",
  "description": "Contenido relacionado con la programación",
  "color": "#f0f0f0",
  "icon": "👨‍💻",
  "date": "2024-09-13"
}
```

### 👨‍💻 Authors

> Un autor es la persona que escribe un post, estos **son únicos y conocidos en el entorno**.

Dado que los autores son únicos y que necesitan formas de ser identificados, entonces es necesario tener a los autores como una colección para ser usados en los posts. Ahora bien, definimos el esquema de los autores tenemos:

```json
// src/content/authors/scheme.ts
{
  "name": "Juan alcachofa",
  "username": "juan-alcachofa",
  "description": "Desarrollador web y escritor de contenido",
  "avatar": "./assets/avatar.webp",
  "date": "2024-09-13",
  "social": {
    "twitter": "juan-alcachofa",
    "github": "juan-alcachofa"
    // ... más redes sociales
  }
}
```

### 📄 Posts

> Un post es una publicación en el blog, estos **son únicos y conocidos en el entorno**.

El post tiene atributos que son referencias a las dos anteriores colecciones, siendo controlable gracias a `zod` y al método `reference` de `astro:content`.
