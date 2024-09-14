# 🎴 Imágenes locales

Tras definir los atributos de un post como se vio en el [post anterior](./1_Atributos.md), ahora es necesario resolver un problema que se presenta con el atributo `cover`.

## 😤 Problema

El cover es la imagen que se muestra en la vista previa de un post, pero si se desea utilizar una imagen local, es necesario que la imagen se encuentre en la `assets` respecto al archivo del post.

```sh
docs/
├── content/
│   └── posts
│       └── any_post
│           ├── index.md
│           └── assets
│               └── cover.jpg
```

El caso es que estamos usando rutas relativas, por lo que al obtener la información del post mediante un script, la ruta de la imagen no será válida.

## ✅ Solución

Para resolver este problema, la forma más rápida de momento es un componente de Astro con importaciones dinámicas.

```ts
import type { ImageMetadata } from "astro";
import { Image } from "astro:assets";
import FallBackCover from "@/assets/images/fallback-cover.jpg";

const { slug, cover, alt, class: className } = Astro.props;
const postPath = `/src/content/posts/${slug}`;
const fixCoverPath = `${postPath}/${cover}`;

let ImageSource = FallBackCover;
try {
  const imported = await import(fixCoverPath);
  const Cover = imported.default as ImageMetadata;
  // Check if the image is not found
  if (!Cover || !Cover.src) {
    throw new Error("Imported image is not valid or not found");
  }
  ImageSource = Cover;
} catch (error) {
  console.info("Not found:", fixCoverPath);
  console.error(`Error loading the image: ${error}`);
}
```

Con esta condición, nos aseguramos de que si la imagen no se encuentra, se muestre una imagen de respaldo.