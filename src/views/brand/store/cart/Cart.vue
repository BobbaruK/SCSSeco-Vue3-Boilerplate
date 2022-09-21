<script>
import { onUpdated, ref } from "@vue/runtime-core";
import { storeToRefs } from "pinia";

import translationsGlossary from "@/composables/global/translationsGlossary.js";
import languages from "@/composables/brand/languages";
import checkLangAndMeta from "@/composables/global/checkLangAndMeta";
import { useWebStoreBrand } from "@/stores/WebStoreBrand"; // web store

export default {
  name: "Brand~Cart",
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * Meta stuff
     */
    const documentTitleTransl = translationsGlossary.c.cart;

    const metaDescription = {
      en: `Brand - ${translationsGlossary.c.cart.en} - When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!`,
      it: `Brand - ${translationsGlossary.c.cart.it} - Quando scrivi una meta descrizione, mantienila compresa tra 140 e 160 caratteri in modo che Google possa visualizzare l'intero messaggio. Non dimenticare di includere la tua parola chiave!`,
      tr: `Brand - ${translationsGlossary.c.cart.tr} - Bir meta açıklama yazarken, Google'ın tüm mesajınızı gösterebilmesi için 140 ila 160 karakter arasında tutun. Anahtar kelimenizi eklemeyi unutmayın!`,
      ro: `Brand - ${translationsGlossary.c.cart.ro} - Când scrieți o meta-descriere, păstrați-o între 140 și 160 de caractere, astfel încât Google să vă poată afișa întregul mesaj. Nu uitați să includeți cuvântul cheie!`,
      hu: `Brand - ${translationsGlossary.c.cart.hu} - Ha metaleírást ír, tartsa 140 és 160 karakter között, hogy a Google megjeleníthesse a teljes üzenetet. Ne felejtse el megadni a kulcsszót!`,
      ar: `Brand - ${translationsGlossary.c.cart.ar} - عند كتابة وصف تعريفي ، احتفظ به بين 140 و 160 حرفًا حتى يتمكن Google من عرض رسالتك بالكامل. لا تنس تضمين كلمتك الرئيسية!`,
      de: `Brand - ${translationsGlossary.c.cart.de} - Halten Sie beim Schreiben einer Meta-Beschreibung zwischen 140 und 160 Zeichen, damit Google Ihre gesamte Nachricht anzeigen kann. Vergessen Sie nicht, Ihr Keyword anzugeben!`,
      es: `Brand - ${translationsGlossary.c.cart.es} - Cuando escriba una meta descripción, manténgala entre 140 y 160 caracteres para que Google pueda mostrar su mensaje completo. ¡No olvides incluir tu palabra clave!`,
      sv: `Brand - ${translationsGlossary.c.cart.sv} - När du skriver en metabeskrivning, behåll den mellan 140 och 160 tecken så att Google kan visa hela ditt meddelande. Glöm inte att inkludera ditt sökord!`,
      pt: `Brand - ${translationsGlossary.c.cart.pt} - Ao escrever uma meta descrição, mantenha-a entre 140 e 160 caracteres para que o Google possa exibir sua mensagem inteira. Não se esqueça de incluir sua palavra-chave!`,
      fi: `Brand - ${translationsGlossary.c.cart.fi} - Kun kirjoitat metakuvausta, pidä se 140–160 merkin pituisena, jotta Google voi näyttää koko viestisi. Muista lisätä avainsanasi!`,
      pl: `Brand - ${translationsGlossary.c.cart.pl} - Pisząc metaopis, zachowaj długość od 140 do 160 znaków, aby Google mogło wyświetlić całą wiadomość. Nie zapomnij podać słowa kluczowego!`,
      th: `Brand - ${translationsGlossary.c.cart.th} - เมื่อเขียนคำอธิบายเมตา ให้มีความยาวระหว่าง 140 ถึง 160 อักขระ เพื่อให้ Google สามารถแสดงข้อความทั้งหมดของคุณได้ อย่าลืมใส่คีย์เวิร์ดของคุณ!`,
      ms: `Brand - ${translationsGlossary.c.cart.ms} - Apabila menulis perihalan meta, simpan antara 140 dan 160 aksara supaya Google boleh memaparkan keseluruhan mesej anda. Jangan lupa sertakan kata kunci anda!`,
    };

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#FFA900");
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#FFA900");
    });

    /**
     * Cart stuff
     */
    const webStore = useWebStoreBrand(); // web store
    const { cartTotal } = storeToRefs(webStore);

    webStore.cartFetch();

    return { webStore, cartTotal, translationsGlossary };
  },
};
</script>
<template>
  <section id="section1" class="brandCart">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.c.cart[lang] }}</h1>
          <div class="cartProducts">
            <div v-if="webStore.cart.length" class="cartProductsInner">
              <div v-for="(product, index) in webStore.cart" :key="index" class="cartProduct">
                <img :src="product.thumbnail" :alt="product.title" width="150" height="150" />
                <h2>
                  <router-link :to="{ name: 'Product', params: { lang: lang, productID: product.id } }">
                    {{ product.title }}
                  </router-link>
                </h2>
                <div class="price unitPrice">
                  <div>{{ translationsGlossary.u.unitPrice[lang] }}</div>
                  ${{ product.price }}
                </div>
                <div class="price fullPrice">
                  <div>{{ translationsGlossary.t.totalPrice[lang] }}</div>
                  ${{ product.price * product.cartQuantity }}
                </div>
                <div class="actions">
                  <div class="quantity">
                    <button class="scssecoBtn" @click="webStore.decreaseQuantity(product.id)">-</button>
                    <input type="number" :value="product.cartQuantity" />
                    <button class="scssecoBtn" @click="webStore.increaseQuantity(product.id)">+</button>
                  </div>
                  <a href="" @click.prevent="webStore.removeItemFromCart(product.id)">{{
                    translationsGlossary.r.remove[lang]
                  }}</a>
                </div>
              </div>
            </div>
            <div v-else class="msg">
              <h2>{{ translationsGlossary.n.noProductInCart[lang] }}</h2>
            </div>
            <div v-if="webStore.cart.length != 0" class="cartProductFooter">
              <div class="emptyCart">
                <button class="scssecoBtn" @click="webStore.removeAllItemsFromCart">
                  {{ translationsGlossary.e.emptyCart[lang] }}
                </button>
              </div>
              <div class="total">{{ translationsGlossary.t.total[lang] }}: {{ cartTotal }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../../../assets/scss/brand/abstracts/mixins" as mxns;

section#section1.brandCart {
  --gap: 1rem;
  @include mxns.mediamin(md) {
    --gap: 2rem;
  }

  .cartProducts,
  .cartProducts .cartProductsInner,
  .cartProducts .cartProductFooter,
  .cartProduct,
  .actions,
  .quantity {
    display: flex;
    flex-wrap: nowrap;
    gap: var(--gap);
  }
  .cartProducts {
    align-items: stretch;
    flex-direction: column;
    .cartProductsInner {
      align-content: flex-start;
      align-items: stretch;
      flex-direction: column;
      justify-content: center;
      .cartProduct {
        align-content: center;
        align-items: center;
        border-radius: var(--borderRadius);
        border: 1px solid var(--clr-brandPrimaryColor-dark);
        flex-direction: row;
        justify-content: flex-start;
        padding: 0.5rem;
        img {
          height: 150px;
          object-fit: cover;
          width: 150px;
        }
        .price {
          align-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          justify-content: center;
          &.unitPrice {
            margin-inline-start: auto;
          }
        }

        .actions {
          align-content: center;
          align-items: center;
          flex-direction: column;
          gap: 0.3rem;
          justify-content: center;
          .quantity {
            gap: 0.3rem;
          }
          button,
          input {
            border: 1px solid var(--clr-brandPrimaryColor-900);
            border-radius: 5px;
            height: 30px;
            width: 30px;
          }
          button {
            align-content: center;
            display: grid;
            justify-content: center;
            line-height: 1;
          }
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"] {
            -moz-appearance: textfield;
            -webkit-appearance: none;
            margin: 0;
            text-align: center;
          }
        }
      }
    }
    .cartProductFooter {
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>
