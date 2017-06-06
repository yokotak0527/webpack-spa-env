# file path

.vue .sass file use a path starting from ~.

```sass
div
  background : url("~img/child/fireworks.jpg")
```

↓

```css
div{
  background : url("/build/img/picture.jpg")
}
```

.js file use a path starting from ./.

```js
import layoutStyle from './sass/layout.sass';
```
