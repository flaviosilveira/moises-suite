---
layout: default
---

<div id="content" class="container">
  <!--<a href="#" role="button" class="button-copy-dialogues">Copiar Diálogos</a>-->
  <div class="dialogues">
    {% for dialog in site.data.dialogues %}
      <div class="dialogues__item dialogues__item--{{ dialog.name }} js-{{ dialog.name }}">
        {% assign image = dialog.name | append: '.png' | prepend: '/assets/images/' %}
        {% assign image2x = dialog.name | append: '@2x.png' | prepend: '/assets/images/' %}
        <figure class="dialogues__photo js-photo">
          <img srcset="{{ image2x | relative_url }}" src="{{ image | relative_url }}" alt="foto do {{ dialog.name }}" title="foto do {{ dialog.name }}">
        </figure>
        <p class="dialogues__dialog">{{ dialog.dialog }}</p>
      </div>
    {% endfor %}
  </div>
</div>
