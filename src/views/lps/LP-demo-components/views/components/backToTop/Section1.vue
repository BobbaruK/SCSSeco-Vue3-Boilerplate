<script>
import { onMounted } from "@vue/runtime-core";

import translationsGlossary from "@/composables/global/translationsGlossary";

import BackToTop from "@/components/global/BackToTop/BackToTop.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~BackToTop~Section1",
  components: { BackToTop },
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
          <h1>{{ translationsGlossary.b.backToTop[lang] }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <pre><code class="language-html">&lt;BackToTop /&gt;</code></pre>
          <p>
            to change from <code>position: fixed</code>(default) to <code>position: absolute</code>, run this function:
          </p>
          <pre><code class="language-javascript">import BackToTopSwitchPosition from "@/composables/global/backToTop/backToTopPositioning";

export default {
  name: "LP~DemoComponents",
  components: { Header, BreadCrumbs, Footer },
  setup() {

    BackToTopSwitchPosition();

    return {};
  },
};</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <BackToTop style="position: static !important; margin-top: 100vh" />
          <div></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
