---
layout: default
---

<div id="content" class="container">
  {% for dialog in site.data.dialogues %}
    <p class="{{ dialog.class }}">
      {% assign image = dialog.class | append: '.png' | prepend: '/assets/images/' %}
      {% assign image2x = dialog.class | append: '@2x.png' | prepend: '/assets/images/' %}
      <span><img srcset="{{ image2x | relative_url }}" src="{{ image | relative_url }}" alt="foto do {{ dialog.class }}"></span>
      {{ dialog.dialog }}
    </p>
  {% endfor %}
</div>
