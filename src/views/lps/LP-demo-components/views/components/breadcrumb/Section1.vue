<script>
import { onMounted } from "@vue/runtime-core";

import translationsGlossary from "@/composables/global/translationsGlossary";

import BreadCrumbs from "@/components/global/Breadcrumbs/Breadcrumbs.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~BreadCrumb~Section1",
  components: { BreadCrumbs },
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
          <h1>{{ translationsGlossary.b.breadcrumb[lang] }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <pre><code class="language-html">&lt;BreadCrumbs :lang=&quot;lang&quot; :showHomeIcon=&quot;true&quot; /&gt;</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <BreadCrumbs :lang="lang" :showHomeIcon="true" />
          router/breadCrumbs.js
          <pre><code class="language-javascript">import translationsGlossary from "../composables/translations/translationsGlossary.js";

const breadCrumbs = {
  LP: {
    DemoComponents: {
      Components: {
        BreadCrumb: [
          {
            label: translationsGlossary.h.home,
            href: "DemoComponentsHome",
          },
          {
            label: translationsGlossary.c.components,
          },
          {
            label: translationsGlossary.b.breadcrumb,
          },
        ],
      },
    },
  },
};

export default breadCrumbs;
</code></pre>

          router/index.js
          <pre><code class="language-javascript">{
  path: "breadcrumb",
  name: "DemoComponentsComponentsBreadcrumb",
  component: () => import("../lps/LP-demo-components/views/components/breadcrumb/Breadcrumb.vue"),
  props: true,
  meta: {
    breadCrumbs: breadCrumbs.LP.DemoComponents.Components.BreadCrumb,
  },
},</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
