<script>
import translationsGlossary from "../../../../../composables/translations/translationsGlossary";
import LanguageChooser from "../../../../../components/global_components/LanguageChooser/LanguageChooser.vue";
import languages from "../../../composables/translations/languages";
import { onMounted } from "@vue/runtime-core";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~LanguageChooser~Section1",
  components: { LanguageChooser },
  props: {
    lang: String,
  },
  setup() {
    const { lpLangs, defaultLang, flagPath } = languages();
    const langsDetails = {
      lpLangs: lpLangs,
      defaultLang: defaultLang,
      flagPath: flagPath,
    };

    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });
    return { translationsGlossary, langsDetails };
  },
};
</script>

<template>
  <section id="section1" class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.l.languageChooser[lang] }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <pre><code class="language-javascript">import languages from "../../../composables/translations/languages";

export default {
  props: {
    lang: String,
  },
  setup() {
    const { lpLangs, defaultLang, flagPath } = languages();
    const langsDetails = {
      lpLangs: lpLangs,
      defaultLang: defaultLang,
      flagPath: flagPath,
    };
    return { langsDetails };
  },
};</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <LanguageChooser :lang="lang" :details="langsDetails" class="lc" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <pre><code class="language-html">&lt;LanguageChooser :lang=&quot;lang&quot; :details=&quot;langsDetails&quot; /&gt;</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.lc {
  .activeLang {
    a {
      color: var(--clr-brandPrimaryColor);
    }
  }
}
</style>
