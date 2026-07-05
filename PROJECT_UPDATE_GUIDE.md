# Project Update Guide

The portfolio project list lives in `src/main.jsx` inside the `projects` array.

To add a new project later:

1. Add a screenshot to `public/assets/`.
2. Copy one project object in the `projects` array.
3. Change the `slug`, `name`, `image`, `stack`, `description`, `live`, `github`, `challenges`, and `future` fields.
4. Move the object higher or lower in the array to control display order.

Example image path:

```js
image: "/assets/my-project.png"
```

Use an empty string for links that are not ready yet:

```js
live: "",
github: ""
```
