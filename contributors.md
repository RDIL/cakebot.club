---
title: Contributors
layout: default
---

Cakebot would not be possible without the help, time, and dedication of the following people (and bot):

{% for contributor in site.data.contributors %}
  {% assign github=contributor.github %}
  * {% avatar user=github %} {{ contributor.name }} - @{{ contributor.github }}  
{% endfor %}
