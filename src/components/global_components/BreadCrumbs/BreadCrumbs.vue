<script>
import { useRoute } from "vue-router";

export default {
  name: "Form",
  props: {
    lang: String,
  },
  setup() {
    const route = useRoute();

    return { route };
  },
};
</script>

<template>
  <section id="breadCrumbsSection" class="breadCrumbsWrapper" v-if="route.meta.breadCrumbs">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav>
            <ul>
              <li v-for="(crumb, index) in route.meta.breadCrumbs" :key="index">
                <router-link
                  :to="{ name: crumb.href, params: { lang: lang } }"
                  v-if="crumb.href && index != route.meta.breadCrumbs.length - 1"
                >
                  <span v-if="index == 0">
                    <img src="@/assets/imgs/misc/LineMdHomeTwotone.svg" alt="Home Icon" width="20" height="20" />
                  </span>
                  <span v-else>
                    {{ crumb.label[lang] }}
                  </span>
                </router-link>
                <span v-else-if="index == 0">
                  <img src="@/assets/imgs/misc/LineMdHomeTwotone.svg" alt="Home Icon" width="20" height="20" />
                </span>
                <span v-else>
                  {{ crumb.label[lang] }}
                </span>
                <img
                  src="@/assets/imgs/misc/IcTwotoneChevronRight.svg"
                  alt="Home Icon"
                  width="15"
                  height="15"
                  class="chevron"
                  v-if="index != route.meta.breadCrumbs.length - 1"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
section#breadCrumbsSection.breadCrumbsWrapper {
  --gap: 0.5rem;

  padding: 0.5rem 0;
  nav {
    ul {
      align-content: center;
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: var(--gap);
      justify-content: flex-start;
      list-style-type: none;
      line-height: 1;
      margin: 0;
      padding: 0;
      li {
        align-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: var(--gap);
        height: 30px;
        justify-content: flex-start;
        img.chevron {
        }
      }
    }
  }
}

html[dir="rtl"] {
  section#breadCrumbsSection.breadCrumbsWrapper {
    nav {
      ul {
        img.chevron {
          transform: scale(-1);
        }
      }
    }
  }
}
</style>
