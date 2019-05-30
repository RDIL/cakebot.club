---
title: Contributors
layout: default
---

## Contributors

Cakebot would not be possible without the help, time, and dedication of the following people:

{% for contributor in site.data.contributors %}
  {% capture usernm %}
    {{contributor.github}}
  {% endcapture %}
  * {% avatar {{ usernm }} size=50 %} {{ contributor.name }} - @{{ contributor.github }}
{% endfor %}
