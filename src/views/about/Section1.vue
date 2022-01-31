<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ title }}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente iusto distinctio quisquam illo saepe omnis, quidem et temporibus accusantium hic at fugit. Quasi omnis temporibus perferendis eaque tenetur debitis facere facilis eos atque commodi tempora quod sapiente veritatis, doloribus neque placeat maxime provident, cupiditate asperiores. Unde eveniet nulla asperiores cumque natus qui vitae vero laudantium modi velit, quae error, tenetur optio recusandae explicabo a voluptatum, fugiat assumenda voluptate tempora. Nihil, quos. Cum perspiciatis quibusdam eos laborum voluptatum nesciunt pariatur, soluta doloribus distinctio explicabo reiciendis minima omnis libero magnam, unde illo totam odio dolorum maxime quae aut at quaerat? Voluptate, in quidem velit unde sunt commodi, assumenda quia ducimus, illum maiores deserunt maxime magni dignissimos officia pariatur delectus rem reprehenderit? Reprehenderit, sed incidunt! Quasi sed repellat doloremque illo beatae minima, fuga facere ullam perferendis magnam quisquam rem, reiciendis vel architecto ex ab fugiat culpa ducimus saepe laboriosam et. Aliquam perferendis eum totam non rem reprehenderit alias ex! Tempora consequuntur in doloremque iure quae, similique enim voluptas molestiae aliquid deleniti delectus, dolorum, adipisci explicabo at harum deserunt voluptates quisquam. Suscipit ut nisi, non assumenda optio eum perspiciatis nam ea itaque facilis rem. At nobis minus perferendis explicabo recusandae tenetur ipsam earum veritatis alias dignissimos, eius quaerat adipisci ad eaque corporis temporibus voluptate, aliquam ea consequuntur. Recusandae voluptatibus porro magni sit dicta? Aliquam tenetur quidem facere dolorum suscipit cum minus delectus inventore praesentium quo iure, tempora laborum eligendi debitis est totam ullam cupiditate earum dicta? Soluta voluptatum minus odio assumenda minima aut omnis sint ad accusantium cumque. Modi quia, consequatur, distinctio repellat suscipit quam architecto blanditiis, tempore nulla illum inventore. Non, suscipit! Provident vitae in libero esse quas culpa odio distinctio quae totam odit ducimus tempora autem quis ad voluptatem officiis iusto, sequi est! Laudantium harum eveniet explicabo temporibus sequi tempore libero.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import aboutSection1Transl from "../../composables/translations/pages/about/aboutSection1Transl";
import switchLang from "../../composables/translations/switchLang";

export default {
  name: "AboutSection1",
  components: {},
  props: ["lang"],
  setup(props) {
    const title = ref();
    const { titleTransl } = aboutSection1Transl();
    switchLang(title, titleTransl, props.lang);

    return { title };
  },
};
</script>

<style></style>
