<script>
import { onMounted, onUpdated, ref, watchEffect } from "@vue/runtime-core";

import translationsGlossary from "@/composables/global/translationsGlossary.js";
import languages from "@/composables/brand/languages";
import checkLangAndMeta from "@/composables/global/checkLangAndMeta";
import { useWebStoreBrand } from "@/stores/WebStoreBrand"; // web store

import Loader from "@/components/global/Loader.vue";

export default {
  name: "Brand~Product",
  components: { Loader },
  props: {
    lang: String,
    productID: String,
  },
  setup(props) {
    /**
     * Meta stuff
     */
    const documentTitleTransl = translationsGlossary.p.product;

    const metaDescription = {
      en: `Brand - ${translationsGlossary.p.product.en} - When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!`,
      it: `Brand - ${translationsGlossary.p.product.it} - Quando scrivi una meta descrizione, mantienila compresa tra 140 e 160 caratteri in modo che Google possa visualizzare l'intero messaggio. Non dimenticare di includere la tua parola chiave!`,
      tr: `Brand - ${translationsGlossary.p.product.tr} - Bir meta açıklama yazarken, Google'ın tüm mesajınızı gösterebilmesi için 140 ila 160 karakter arasında tutun. Anahtar kelimenizi eklemeyi unutmayın!`,
      ro: `Brand - ${translationsGlossary.p.product.ro} - Când scrieți o meta-descriere, păstrați-o între 140 și 160 de caractere, astfel încât Google să vă poată afișa întregul mesaj. Nu uitați să includeți cuvântul cheie!`,
      hu: `Brand - ${translationsGlossary.p.product.hu} - Ha metaleírást ír, tartsa 140 és 160 karakter között, hogy a Google megjeleníthesse a teljes üzenetet. Ne felejtse el megadni a kulcsszót!`,
      ar: `Brand - ${translationsGlossary.p.product.ar} - عند كتابة وصف تعريفي ، احتفظ به بين 140 و 160 حرفًا حتى يتمكن Google من عرض رسالتك بالكامل. لا تنس تضمين كلمتك الرئيسية!`,
      de: `Brand - ${translationsGlossary.p.product.de} - Halten Sie beim Schreiben einer Meta-Beschreibung zwischen 140 und 160 Zeichen, damit Google Ihre gesamte Nachricht anzeigen kann. Vergessen Sie nicht, Ihr Keyword anzugeben!`,
      es: `Brand - ${translationsGlossary.p.product.es} - Cuando escriba una meta descripción, manténgala entre 140 y 160 caracteres para que Google pueda mostrar su mensaje completo. ¡No olvides incluir tu palabra clave!`,
      sv: `Brand - ${translationsGlossary.p.product.sv} - När du skriver en metabeskrivning, behåll den mellan 140 och 160 tecken så att Google kan visa hela ditt meddelande. Glöm inte att inkludera ditt sökord!`,
      pt: `Brand - ${translationsGlossary.p.product.pt} - Ao escrever uma meta descrição, mantenha-a entre 140 e 160 caracteres para que o Google possa exibir sua mensagem inteira. Não se esqueça de incluir sua palavra-chave!`,
      fi: `Brand - ${translationsGlossary.p.product.fi} - Kun kirjoitat metakuvausta, pidä se 140–160 merkin pituisena, jotta Google voi näyttää koko viestisi. Muista lisätä avainsanasi!`,
      pl: `Brand - ${translationsGlossary.p.product.pl} - Pisząc metaopis, zachowaj długość od 140 do 160 znaków, aby Google mogło wyświetlić całą wiadomość. Nie zapomnij podać słowa kluczowego!`,
      th: `Brand - ${translationsGlossary.p.product.th} - เมื่อเขียนคำอธิบายเมตา ให้มีความยาวระหว่าง 140 ถึง 160 อักขระ เพื่อให้ Google สามารถแสดงข้อความทั้งหมดของคุณได้ อย่าลืมใส่คีย์เวิร์ดของคุณ!`,
      ms: `Brand - ${translationsGlossary.p.product.ms} - Apabila menulis perihalan meta, simpan antara 140 dan 160 aksara supaya Google boleh memaparkan keseluruhan mesej anda. Jangan lupa sertakan kata kunci anda!`,
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

    // get product
    const product = ref();
    watchEffect(() => {
      if (!webStore.loading) {
        product.value = webStore.products.filter((product) => {
          if (product.id == props.productID) {
            return product;
          }
        });
      }
    });

    const addToCart = (e, id) => {
      webStore.addToBag(id);
    };

    return { webStore, product, addToCart, translationsGlossary };
  },
};
</script>

<template>
  <section id="section1" class="productPage">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Loader v-if="webStore.loading" />
          <div v-else class="product">
            <div class="content">
              <img :src="product[0].images[0]" :alt="product[0].title" width="500" height="500" class="feturedImage" />
              <div>
                <h1>{{ product[0].title }}</h1>
                <p>Brand: {{ product[0].brand }}</p>
                <p>Description: {{ product[0].description }}</p>
                <p>Price: ${{ product[0].price }}</p>
                <p>Rating: {{ product[0].rating }}</p>
                <p>Stock: {{ product[0].stock }}</p>
                <button
                  class="scssecoBtn"
                  :class="{ notOnStock: product[0].stock == 0 }"
                  @click="addToCart($event, product[0].id)"
                  :disabled="product[0].cartQuantity > 0 || product[0].stock == 0"
                >
                  {{ translationsGlossary.a.addToCart[lang] }}
                </button>
              </div>
            </div>
            <div class="productImgs">
              <img v-for="(image, index) in product[0].images" :key="index" :src="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../../../assets/scss/brand/abstracts/mixins" as mxns;

.product {
  .content {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    @include mxns.mediamin(md) {
      flex-wrap: nowrap;
    }
  }
  .productImgs {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-start;
    margin-top: 2rem;
    img {
      object-fit: cover;
      height: 100px;
      max-width: 150px;
      width: auto;
    }
  }
  img.feturedImage {
  }
}
</style>
