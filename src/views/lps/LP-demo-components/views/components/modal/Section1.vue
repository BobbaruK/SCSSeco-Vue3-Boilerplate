<script>
import { onMounted, ref } from "@vue/runtime-core";

import translationsGlossary from "@/composables/global/translationsGlossary";

import Modal from "@/components/global/Modal/Modal.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~Modal~Section1",
  components: { Modal },
  props: {
    lang: String,
  },
  setup() {
    const showSimpleModal = ref(false);
    const showCustomWidthModal = ref(false);
    const showDelayedModal = ref(false);

    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });
    return { showSimpleModal, showCustomWidthModal, showDelayedModal, translationsGlossary };
  },
};
</script>

<template>
  <section id="section1" class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.m.modal[lang] }}</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <pre><code class="language-javascript">const modalDetails = {
  modalID: "custom-modal",          // String (default: "")       - css id
  maxWidth: "1250px",               // String (default: 500px)    - max width
  delay: 2500,                      // Number (default: none)     - time before modal pop
};</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12" style="margin-bottom: 3rem">
          <button class="scssecoBtn" @click="showSimpleModal = !showSimpleModal">
            {{ translationsGlossary.m.modal[lang] }}
          </button>
          <p>simple modal</p>
          <div>
            <pre><code class="language-javascript">import Modal from "@/components/global/Modal/Modal.vue";
setup() {
  const showSimpleModal = ref(false);

  return { showSimpleModal };
},</code></pre>
            <pre><code class="language-html">&lt;Modal
  :lang=&quot;lang&quot;
  :modalDetails=&quot;{ 
    modalID: 'simple-modal'                     
  }&quot;
  v-model=&quot;showSimpleModal&quot;
  @closeModal=&quot;showSimpleModal = false&quot;
&gt;
  &lt;span class=&quot;h2&quot;&gt;Simple Modal&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident ab dolor sapiente, accusantium ea itaque
    perspiciatis laudantium pariatur ex?
  &lt;/p&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam temporibus natus numquam officia optio.
  &lt;/p&gt;
  &lt;button class=&quot;scssecoBtn&quot; @click=&quot;showSimpleModal = !showSimpleModal&quot;&gt;
    {{ translationsGlossary.c.close[lang] }}
  &lt;/button&gt;
&lt;/Modal&gt;</code></pre>
          </div>
        </div>
        <div class="col-12" style="margin-bottom: 3rem">
          <button class="scssecoBtn" @click="showCustomWidthModal = !showCustomWidthModal">
            {{ translationsGlossary.m.modal[lang] }}
          </button>
          <p>custom width modal</p>
          <div>
            <pre><code class="language-javascript">import Modal from "@/components/global/Modal/Modal.vue";
setup() {
  const showCustomWidthModal = ref(false);
  
  return { showCustomWidthModal };
},</code></pre>
            <pre><code class="language-html">&lt;Modal
  :lang=&quot;lang&quot;
  :modalDetails=&quot;{ 
    modalID: 'customWidth-modal',
    maxWidth: '1250px',
  }&quot;
  v-model=&quot;showCustomWidthModal&quot;
  @closeModal=&quot;showCustomWidthModal = false&quot;
&gt;
  &lt;span class=&quot;h2&quot;&gt;Custom Width Modal&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident ab dolor sapiente, accusantium ea itaque
    perspiciatis laudantium pariatur ex?
  &lt;/p&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam temporibus natus numquam officia optio.
  &lt;/p&gt;
  &lt;button class=&quot;scssecoBtn&quot; @click=&quot;showCustomWidthModal = !showCustomWidthModal&quot;&gt;
    {{ translationsGlossary.c.close[lang] }}
  &lt;/button&gt;
&lt;/Modal&gt;</code></pre>
          </div>
        </div>
        <div class="col-12" style="margin-bottom: 3rem">
          <button class="scssecoBtn" @click="showDelayedModal = !showDelayedModal">
            {{ translationsGlossary.m.modal[lang] }}
          </button>
          <p>delayed modal</p>
          <div>
            <pre><code class="language-javascript">import Modal from "@/components/global/Modal/Modal.vue";
setup() {
  const showDelayedModal = ref(false);
  
  return { showDelayedModal };
},</code></pre>
            <pre><code class="language-html">&lt;Modal
  :lang=&quot;lang&quot;
  :modalDetails=&quot;{
    modalID: 'delayed-modal',
    maxWidth: '650px',
    delay: 2500,
  }&quot;
  v-model=&quot;showDelayedModal&quot;
  @closeModal=&quot;showDelayedModal = false&quot;
&gt;
  &lt;span class=&quot;h2&quot;&gt;Delayed Modal&lt;/span&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident ab dolor sapiente, accusantium ea itaque
    perspiciatis laudantium pariatur ex?
  &lt;/p&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam temporibus natus numquam officia optio.
  &lt;/p&gt;
  &lt;button class=&quot;scssecoBtn&quot; @click=&quot;showDelayedModal = !showDelayedModal&quot;&gt;
    {{ translationsGlossary.c.close[lang] }}
  &lt;/button&gt;
&lt;/Modal&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Modal
    :lang="lang"
    :modalDetails="{
      modalID: 'simple-modal',
    }"
    v-model="showSimpleModal"
    @closeModal="showSimpleModal = false"
  >
    <span class="h2">Simple Modal</span>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident ab dolor sapiente, accusantium ea itaque
      perspiciatis laudantium pariatur ex?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam temporibus natus numquam officia optio.
    </p>
    <button class="scssecoBtn" @click="showSimpleModal = !showSimpleModal">
      {{ translationsGlossary.c.close[lang] }}
    </button>
  </Modal>
  <Modal
    :lang="lang"
    :modalDetails="{
      modalID: 'customWidth-modal',
      maxWidth: '1250px',
    }"
    v-model="showCustomWidthModal"
    @closeModal="showCustomWidthModal = false"
  >
    <span class="h2">Custom Width Modal</span>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident ab dolor sapiente, accusantium ea itaque
      perspiciatis laudantium pariatur ex?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam temporibus natus numquam officia optio.
    </p>
    <button class="scssecoBtn" @click="showCustomWidthModal = !showCustomWidthModal">
      {{ translationsGlossary.c.close[lang] }}
    </button>
  </Modal>
  <Modal
    :lang="lang"
    :modalDetails="{
      modalID: 'delayed-modal',
      maxWidth: '650px',
      delay: 2500,
    }"
    v-model="showDelayedModal"
    @closeModal="showDelayedModal = false"
  >
    <span class="h2">Delayed Modal</span>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident ab dolor sapiente, accusantium ea itaque
      perspiciatis laudantium pariatur ex?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam temporibus natus numquam officia optio.
    </p>
    <button class="scssecoBtn" @click="showDelayedModal = !showDelayedModal">
      {{ translationsGlossary.c.close[lang] }}
    </button>
  </Modal>
</template>

<style></style>
