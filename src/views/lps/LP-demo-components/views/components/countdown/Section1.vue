<script>
import { onMounted } from "@vue/runtime-core";

import translationsGlossary from "@/composables/global/translationsGlossary";

import Countdown from "@/components/global/Countdown/Countdown.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~Countdown~Section1",
  components: { Countdown },
  props: {
    lang: String,
  },
  setup() {
    const dateTo = new Date(`October 10 2022 13:00:00`);
    const dateFrom = new Date(`September 10 2022 13:00:00`);
    const dateToStop = new Date(`September 10 2022 13:00:00`);

    const countdownDetails0 = {
      countdownID: "countDown0",
      countdownTo: dateTo,
    };
    const countdownDetails1 = {
      countdownID: "countDown1",
      countdownTo: dateTo,
      hideWeeks: "true",
    };
    const countdownDetails2 = {
      countdownID: "countDown2",
      countdownTo: dateTo,
      hideDays: "true",
    };
    const countdownDetails3 = {
      countdownID: "countDown3",
      countdownTo: dateTo,
      hideHours: "true",
    };
    const countdownDetails4 = {
      countdownID: "countDown4",
      countdownTo: dateTo,
      hideMinutes: "true",
    };
    const countdownDetails5 = {
      countdownID: "countDown5",
      countdownTo: dateTo,
      hideSeconds: "true",
    };
    const countdownDetails6 = {
      countdownID: "countDown6",
      countdownTo: dateTo,
      autoRemove: "false",
      hideMinutes: "true",
      hideSeconds: "true",
    };
    const countdownDetails7 = {
      countdownID: "countDown7",
      countdownTo: dateTo,
      autoRemove: "false",
      hideDays: "true",
      hideMinutes: "true",
    };
    const countdownDetails8 = {
      countdownID: "countDown8",
      countdownTo: dateTo,
      autoRemove: "false",
      hideWeeks: "true",
      hideHours: "true",
    };

    const countdownDetails0_1 = {
      countdownID: "countDown0_1",
      countdownTo: dateFrom,
    };
    const countdownDetails1_1 = {
      countdownID: "countDown1_1",
      countdownTo: dateFrom,
      hideWeeks: "true",
    };
    const countdownDetails2_1 = {
      countdownID: "countDown2_1",
      countdownTo: dateFrom,
      hideDays: "true",
    };
    const countdownDetails3_1 = {
      countdownID: "countDown3_1",
      countdownTo: dateFrom,
      hideHours: "true",
    };
    const countdownDetails4_1 = {
      countdownID: "countDown4_1",
      countdownTo: dateFrom,
      hideMinutes: "true",
    };
    const countdownDetails5_1 = {
      countdownID: "countDown5_1",
      countdownTo: dateFrom,
      hideSeconds: "true",
    };
    const countdownDetails6_1 = {
      countdownID: "countDown6_1",
      countdownTo: dateFrom,
      autoRemove: "false",
      hideMinutes: "true",
      hideSeconds: "true",
    };
    const countdownDetails7_1 = {
      countdownID: "countDown7_1",
      countdownTo: dateFrom,
      autoRemove: "false",
      hideDays: "true",
      hideMinutes: "true",
    };
    const countdownDetails8_1 = {
      countdownID: "countDown8_1",
      countdownTo: dateFrom,
      autoRemove: "false",
      hideWeeks: "true",
      hideHours: "true",
    };

    const countdownDetails0_2 = {
      countdownID: "countDown0_2",
      countdownTo: dateToStop,
      stopEnd: "true",
    };
    const countdownDetails1_2 = {
      countdownID: "countDown1_2",
      countdownTo: dateToStop,
      stopEnd: "true",
      hideWeeks: "true",
    };
    const countdownDetails2_2 = {
      countdownID: "countDown2_2",
      countdownTo: dateToStop,
      stopEnd: "true",
      hideDays: "true",
    };
    const countdownDetails3_2 = {
      countdownID: "countDown3_2",
      countdownTo: dateToStop,
      stopEnd: "true",
      hideHours: "true",
    };
    const countdownDetails4_2 = {
      countdownID: "countDown4_2",
      countdownTo: dateToStop,
      stopEnd: "true",
      hideMinutes: "true",
    };
    const countdownDetails5_2 = {
      countdownID: "countDown5_2",
      countdownTo: dateToStop,
      stopEnd: "true",
      hideSeconds: "true",
    };
    const countdownDetails6_2 = {
      countdownID: "countDown6_2",
      countdownTo: dateToStop,
      stopEnd: "true",
      autoRemove: "false",
      hideMinutes: "true",
      hideSeconds: "true",
    };
    const countdownDetails7_2 = {
      countdownID: "countDown7_2",
      countdownTo: dateToStop,
      stopEnd: "true",
      autoRemove: "false",
      hideDays: "true",
      hideMinutes: "true",
    };
    const countdownDetails8_2 = {
      countdownID: "countDown8_2",
      countdownTo: dateToStop,
      stopEnd: "true",
      autoRemove: "false",
      hideWeeks: "true",
      hideHours: "true",
    };
    
    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });

    return {
      translationsGlossary,
      dateTo,
      dateFrom,
      dateToStop,
      countdownDetails0,
      countdownDetails1,
      countdownDetails2,
      countdownDetails3,
      countdownDetails4,
      countdownDetails5,
      countdownDetails6,
      countdownDetails7,
      countdownDetails8,
      countdownDetails0_1,
      countdownDetails1_1,
      countdownDetails2_1,
      countdownDetails3_1,
      countdownDetails4_1,
      countdownDetails5_1,
      countdownDetails6_1,
      countdownDetails7_1,
      countdownDetails8_1,
      countdownDetails0_2,
      countdownDetails1_2,
      countdownDetails2_2,
      countdownDetails3_2,
      countdownDetails4_2,
      countdownDetails5_2,
      countdownDetails6_2,
      countdownDetails7_2,
      countdownDetails8_2,
    };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.c.countdown[lang] }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div>
            <pre><code class="language-javascript">const countdownDetails = {
  countdownID: "countDown6_2",                            // String (default: "")       - css id
  countdownTo: new Date(`September 10 2022 13:00:00`),    // Date() (default: {})       - date object
  stopEnd: "false",                                       // String (default: "false")  - stop at the end of countdown
  autoRemove: "true",                                     // String (default: "true")   - auto-remove all other elements. ex: if remove minutes will also remove hours, days and weeks
  hideSeconds: "true",                                    // String (default: "false")  - hide seconds
  hideMinutes: "true",                                    // String (default: "false")  - hide minutes
  hideHours: "true",                                      // String (default: "false")  - hide hours
  hideDays: "true",                                       // String (default: "false")  - hide days
  hideWeeks: "true",                                      // String (default: "false")  - hide weeks
};</code></pre>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>
            Count to <strong>{{ dateTo }}</strong>
          </h3>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails0 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails0" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails1 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails1" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails2 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails2" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails3 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails3" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails4 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails4" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails5 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails5" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails6 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails6" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails7 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails7" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails8 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails8" :lang="lang" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>
            Count From <strong>{{ dateFrom }}</strong>
          </h3>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails0_1 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails0_1" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails1_1 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails1_1" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails2_1 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails2_1" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails3_1 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails3_1" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails4_1 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails4_1" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails5_1 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails5_1" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails6_1 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails6_1" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails7_1 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails7_1" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails8_1 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails8_1" :lang="lang" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>
            Count From <strong>{{ dateToStop }}</strong> with <strong>stopEnd: true</strong>
          </h3>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails0_2 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails0_2" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails1_2 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails1_2" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails2_2 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails2_2" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails3_2 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails3_2" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails4_2 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails4_2" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails5_2 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails5_2" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails6_2 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails6_2" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails7_2 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails7_2" :lang="lang" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-javascript">{{ countdownDetails8_2 }}</code></pre>
            <Countdown :countdownDetails="countdownDetails8_2" :lang="lang" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
