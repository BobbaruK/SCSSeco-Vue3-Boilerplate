<template>
  <div class="lang-chooser">
    <ul>
      <li v-for="(lng, index) in lpLangs" :key="index">
        <router-link :to="{ name: $route.name, params: { lang: lng } }">
          <img :src="flagPath[lng]" :alt="lng.toUpperCase()" width="32" height="24" />
          {{ lng.toUpperCase() }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import languages from "../composables/translations/languages";
export default {
  name: "LanguageChooser",
  props: ["lang"],
  setup(props) {
    const { lang, defaultLang, flagPath } = languages();
    const lpLangs = lang;


    return { lpLangs, defaultLang, flagPath };
  },
};
</script>

<style lang="scss">
.lang-chooser {
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
		gap: .5rem;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      a {
        align-content: center;
        align-items: center;
				flex-direction: column;
        display: flex;
        gap: 0.5rem;
        justify-content: flex-start;
        &.router-link-active,
        &.router-link-exact-active {
          font-weight: bold;
        }
        img {
          max-width: 2rem;
					width: 100%;
        }
      }
    }
  }
}
</style>
