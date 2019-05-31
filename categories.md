---
hide: true
sitemap: false
permalink: /categories
layout: default
---
<article class="post h-entry">

  {% for category in site.categories %}
    <header class="post-header">
      <h2 class="post-title p-name" itemprop="name headline">Posts with {{ page.category | escape }} category</h2>
    </header>
    <div class="post-content e-content" itemprop="articleBody">
      {% for post in site.categories[{{ category | first }}] %}
        * [{{ post.name }}]({% post.url | relative %})
      {% endfor %}
    </div>
  {% endfor %}
</article>

