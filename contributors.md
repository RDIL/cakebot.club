---
title: Contributors
layout: default
---

Cakebot would not be possible without the help, time, and dedication of the following people:

{% for contributor in site.data.contributors %}
  * {% avatar contributor.github %} {{ contributor.name }} - @{{ contributor.github }}  
{% endfor %}
