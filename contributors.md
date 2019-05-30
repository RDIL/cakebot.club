---
title: Contributors
layout: default
---

## Contributors

Cakebot would not be possible without the help, time, and dedication of the following people:

{% for contributor in site.data.contributors %}
{% assign usernm = contributor.github %}
* {% avatar {{ usernm }} size=50 %} {{ contributor.name }} - @{{ contributor.github }}
{% endfor %}
