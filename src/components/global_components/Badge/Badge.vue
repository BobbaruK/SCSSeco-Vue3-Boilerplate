<script>
export default {
  name: "Badge",
};
</script>

<template>
  <span class="scssecoBadge">
    <slot></slot>
  </span>
</template>

<style lang="scss">
.scssecoBadge {
  --badge-padding-x: 0.65em;
  --badge-padding-y: 0.35em;
  --badge-font-size: 0.75em;
  --badge-font-weight: 700;
  --badge-background: var(--clr-brandSecondaryColor);
  --badge-color: var(--clr-black);
  --badge-border-radius: 0.375rem;

  background-color: var(--badge-background);
  border-radius: var(--badge-border-radius);
  color: var(--badge-color);
  display: inline-block;
  font-size: var(--badge-font-size);
  font-weight: bold;
  line-height: 1;
  padding: var(--badge-padding-x) var(--badge-padding-y);
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;

  &:empty {
    display: none;
  }
}

.scssecoBtn {
  .scssecoBadge {
    position: relative;
    top: -1px;
  }
  &:hover,
  &:focus {
    .scssecoBadge {
      background-color: var(--clr-brandPrimaryColor);
      color: var(--clr-white);
    }
  }
}
</style>
