<div class="font-large">

```pug {all|1-6|all}
form.grid(
  hx-post="/posts"
  hx-target="#posts-results",
  enctype="multipart/form-data",
  hx-swap="innerHTML"
)
  input(type="text", name="post")
  button(type="submit") Submit
```

</div>
