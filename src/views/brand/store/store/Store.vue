<script>
import { useRouter } from "vue-router";
import { onUpdated, ref } from "@vue/runtime-core";

import translationsGlossary from "@/composables/global/translationsGlossary.js";
import languages from "@/composables/brand/languages";
import checkLangAndMeta from "@/composables/global/checkLangAndMeta";
import { useWebStoreBrand } from "@/stores/WebStoreBrand"; // web store

import Loader from "@/components/global/Loader.vue";

export default {
  name: "Brand~Store",
  components: { Loader },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * Meta stuff
     */
    const documentTitleTransl = translationsGlossary.s.store;

    const metaDescription = {
      en: `Brand - ${translationsGlossary.s.store.en} - When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!`,
      it: `Brand - ${translationsGlossary.s.store.it} - Quando scrivi una meta descrizione, mantienila compresa tra 140 e 160 caratteri in modo che Google possa visualizzare l'intero messaggio. Non dimenticare di includere la tua parola chiave!`,
      tr: `Brand - ${translationsGlossary.s.store.tr} - Bir meta açıklama yazarken, Google'ın tüm mesajınızı gösterebilmesi için 140 ila 160 karakter arasında tutun. Anahtar kelimenizi eklemeyi unutmayın!`,
      ro: `Brand - ${translationsGlossary.s.store.ro} - Când scrieți o meta-descriere, păstrați-o între 140 și 160 de caractere, astfel încât Google să vă poată afișa întregul mesaj. Nu uitați să includeți cuvântul cheie!`,
      hu: `Brand - ${translationsGlossary.s.store.hu} - Ha metaleírást ír, tartsa 140 és 160 karakter között, hogy a Google megjeleníthesse a teljes üzenetet. Ne felejtse el megadni a kulcsszót!`,
      ar: `Brand - ${translationsGlossary.s.store.ar} - عند كتابة وصف تعريفي ، احتفظ به بين 140 و 160 حرفًا حتى يتمكن Google من عرض رسالتك بالكامل. لا تنس تضمين كلمتك الرئيسية!`,
      de: `Brand - ${translationsGlossary.s.store.de} - Halten Sie beim Schreiben einer Meta-Beschreibung zwischen 140 und 160 Zeichen, damit Google Ihre gesamte Nachricht anzeigen kann. Vergessen Sie nicht, Ihr Keyword anzugeben!`,
      es: `Brand - ${translationsGlossary.s.store.es} - Cuando escriba una meta descripción, manténgala entre 140 y 160 caracteres para que Google pueda mostrar su mensaje completo. ¡No olvides incluir tu palabra clave!`,
      sv: `Brand - ${translationsGlossary.s.store.sv} - När du skriver en metabeskrivning, behåll den mellan 140 och 160 tecken så att Google kan visa hela ditt meddelande. Glöm inte att inkludera ditt sökord!`,
      pt: `Brand - ${translationsGlossary.s.store.pt} - Ao escrever uma meta descrição, mantenha-a entre 140 e 160 caracteres para que o Google possa exibir sua mensagem inteira. Não se esqueça de incluir sua palavra-chave!`,
      fi: `Brand - ${translationsGlossary.s.store.fi} - Kun kirjoitat metakuvausta, pidä se 140–160 merkin pituisena, jotta Google voi näyttää koko viestisi. Muista lisätä avainsanasi!`,
      pl: `Brand - ${translationsGlossary.s.store.pl} - Pisząc metaopis, zachowaj długość od 140 do 160 znaków, aby Google mogło wyświetlić całą wiadomość. Nie zapomnij podać słowa kluczowego!`,
      th: `Brand - ${translationsGlossary.s.store.th} - เมื่อเขียนคำอธิบายเมตา ให้มีความยาวระหว่าง 140 ถึง 160 อักขระ เพื่อให้ Google สามารถแสดงข้อความทั้งหมดของคุณได้ อย่าลืมใส่คีย์เวิร์ดของคุณ!`,
      ms: `Brand - ${translationsGlossary.s.store.ms} - Apabila menulis perihalan meta, simpan antara 140 dan 160 aksara supaya Google boleh memaparkan keseluruhan mesej anda. Jangan lupa sertakan kata kunci anda!`,
    };

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#FFA900");
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#FFA900");
    });

    /**
     * Store stuff
     */
    const webStore = useWebStoreBrand(); // web store

    webStore.cartFetch();

    // go to individual product
    const router = useRouter();

    const goToProduct = (e, id) => {
      router.push({ name: "Product", params: { productID: id.toString() } });
    };

    const addToCart = (e, id) => {
      webStore.addToBag(id);
    };

    return { webStore, goToProduct, addToCart, translationsGlossary };
  },
};
</script>

<template>
  <section id="section1" class="products">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.s.store[lang] }}</h1>
          <Loader v-if="webStore.loading" />
          <div v-else class="products">
            <div v-for="(product, index) in webStore.products" :key="product.id" class="product">
              <img :src="product.thumbnail" :alt="product.title" />
              <h2>{{ product.title }}</h2>
              <p>Category: {{ product.category }}</p>
              <p>Description: {{ product.description }}</p>
              <p>Price: ${{ product.price }}</p>
              <p>Stock: {{ product.stock }}</p>
              <div class="btns">
                <button class="scssecoBtn" @click="goToProduct($event, product.id)">
                  {{ translationsGlossary.d.details[lang] }}
                </button>
                <button
                  class="scssecoBtn"
                  :class="{ notOnStock: product.stock == 0 }"
                  @click="addToCart($event, product.id)"
                  :disabled="product.cartQuantity > 0 || product.stock == 0"
                >
                  {{ translationsGlossary.a.addToCart[lang] }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.products {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  .product {
    border: 1px solid var(--clr-brandPrimaryColor-dark);
    border-radius: var(--borderRadius);
    box-shadow: 0px 0px 5px 0px var(--clr-brandPrimaryColor-light);
    align-content: center;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
    img {
      object-fit: cover;
      height: 220px;
      width: auto;
      align-self: center;
    }
    .btns {
      margin-top: auto;
      align-self: stretch;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
}
</style>
