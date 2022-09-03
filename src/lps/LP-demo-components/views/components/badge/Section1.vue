<script>
import translationsGlossary from "../../../../../composables/translations/translationsGlossary";
import Badge from "../../../../../components/global_components/Badge/Badge.vue";
import { onMounted } from "@vue/runtime-core";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~Badge~Section1",
  components: { Badge },
  props: {
    lang: String,
  },
  setup() {
    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });
    return { translationsGlossary };
  },
};
</script>

<template>
  <section id="section1" class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.b.badge[lang] }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <pre><code class="language-html">&lt;Badge&gt;New&lt;/Badge&gt;</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h1>H1 Example <Badge>New</Badge></h1>
          <h2>H2 Example <Badge>New</Badge></h2>
          <h3>H3 Example <Badge>New</Badge></h3>
          <h4>H4 Example <Badge>New</Badge></h4>
          <h5>H5 Example <Badge>New</Badge></h5>
          <h6>H6 Example <Badge>New</Badge></h6>
          <div>
            <button class="scssecoBtn" type="submit">Example <Badge>New</Badge></button>
          </div>
          <div>
            <pre><code class="language-html">&lt;h1&gt;H1 Example &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h1&gt;
&lt;h2&gt;H2 Example &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h2&gt;
&lt;h3&gt;H3 Example &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h3&gt;
&lt;h4&gt;H4 Example &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h4&gt;
&lt;h5&gt;H5 Example &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h5&gt;
&lt;h6&gt;H6 Example &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h6&gt;
&lt;button class=&quot;scssecoBtn&quot; type=&quot;submit&quot;&gt;
  Example 
  &lt;Badge&gt;New&lt;/Badge&gt;
&lt;/button&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
