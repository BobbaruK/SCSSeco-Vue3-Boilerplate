<script>
import { useRoute } from "vue-router";

export default {
  name: "Form",
  props: {
    lang: String,
    showHomeIcon: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
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
                  <span v-if="index == 0 && showHomeIcon">
                    <svg idth="20" height="20" viewBox="0 0 20 20">
                      <path
                        fill="currentColor"
                        d="m16 8.5l1.53 1.53l-1.06 1.06L10 4.62l-6.47 6.47l-1.06-1.06L10 2.5l4 4v-2h2v4zm-6-2.46l6 5.99V18H4v-5.97zM12 17v-5H8v5h4z"
                      />
                    </svg>
                  </span>
                  <span v-else>
                    {{ crumb.label[lang] }}
                  </span>
                </router-link>
                <span v-else-if="index == 0 && showHomeIconProp">
                  <svg idth="20" height="20" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      d="m16 8.5l1.53 1.53l-1.06 1.06L10 4.62l-6.47 6.47l-1.06-1.06L10 2.5l4 4v-2h2v4zm-6-2.46l6 5.99V18H4v-5.97zM12 17v-5H8v5h4z"
                    />
                  </svg>
                </span>
                <span v-else>
                  {{ crumb.label[lang] }}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="chevron"
                  width="15"
                  height="15"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  v-if="index != route.meta.breadCrumbs.length - 1"
                >
                  <path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z"></path>
                </svg>
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
