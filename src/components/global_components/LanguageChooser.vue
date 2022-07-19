<script>
export default {
  name: "LanguageChooser",
  props: {
    lang: String,
    details: Object,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="lang-chooser">
    <ul>
      <li v-for="(lng, index) in details.lpLangs" :key="index">
        <router-link :to="{ name: $route.name, params: { lang: lng } }">
          <img :src="details.flagPath[lng]" :alt="lng.toUpperCase()" width="32" height="24" />
          {{ lng.toUpperCase() }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.lang-chooser {
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
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
