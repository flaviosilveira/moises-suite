---
layout: default
---

<div id="content" class="container">
  <div class="dialogues">
    {% for dialog in site.data.dialogues %}
      <div class="dialogues__item dialogues__item--{{ dialog.class }} js-{{ dialog.class }}">
        {% assign image = dialog.class | append: '.png' | prepend: '/assets/images/' %}
        {% assign image2x = dialog.class | append: '@2x.png' | prepend: '/assets/images/' %}
        <figure class="dialogues__photo js-photo">
          <img srcset="{{ image2x | relative_url }}" src="{{ image | relative_url }}" alt="foto do {{ dialog.class }}">
        </figure>
        <p class="dialogues__dialog">{{ dialog.dialog }}</p>
      </div>
    {% endfor %}
  </div>
</div>
