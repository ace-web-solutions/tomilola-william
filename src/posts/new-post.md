---
slug: "{{slug}}"
title: New Post
excerpt: All configuration options for Netlify CMS are specified in a config.yml
  file, in the folder where you access the editor UI (usually in the /admin
  folder).
image: /uploads/article-details-small.jpg
uploadDate: 2022-03-20T13:43:29.108Z
---
## Configuration File

All configuration options for Netlify CMS are specified in a `config.yml` file, in the folder where you access the editor UI (usually in the `/admin` folder).

Alternatively, you can specify a custom config file using a link tag:

```html
<!-- Note the "type" and "rel" attribute values, which are required. -->
<link href="path/to/config.yml" type="text/yaml" rel="cms-config-url">
```

To see working configuration examples, you can [start from a template](https://www.netlifycms.org/docs/start-with-a-template) or check out the [CMS demo site](https://cms-demo.netlify.com/). (No login required: click the login button and the CMS will open.) You can refer to the demo [configuration code](https://github.com/netlify/netlify-cms/blob/master/dev-test/config.yml) to see how each option was configured.

You can find details about all configuration options below. Note that [YAML syntax](https://en.wikipedia.org/wiki/YAML#Basic_components) allows lists and objects to be written in block or inline style, and the code samples below include a mix of both.