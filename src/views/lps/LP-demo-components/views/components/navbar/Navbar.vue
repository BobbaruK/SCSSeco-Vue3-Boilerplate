<script>
import { onUpdated } from "@vue/runtime-core";

import languages from "../../../composables/translations/languages";
import checkLangAndMeta from "@/composables/global/checkLangAndMeta";
import translationsGlossary from "@/composables/global/translationsGlossary";

import Section1 from "./Section1.vue";

export default {
  name: "LP~DemoComponents~Components~Navbar",
  components: { Section1 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = translationsGlossary.n.navbar;

    const metaDescription = {
      en: `DemoComponents - ${translationsGlossary.n.navbar.en} - When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!`,
      it: `DemoComponents - ${translationsGlossary.n.navbar.it} - Quando scrivi una meta descrizione, mantienila compresa tra 140 e 160 caratteri in modo che Google possa visualizzare l'intero messaggio. Non dimenticare di includere la tua parola chiave!`,
      tr: `DemoComponents - ${translationsGlossary.n.navbar.tr} - Bir meta açıklama yazarken, Google'ın tüm mesajınızı gösterebilmesi için 140 ila 160 karakter arasında tutun. Anahtar kelimenizi eklemeyi unutmayın!`,
      ro: `DemoComponents - ${translationsGlossary.n.navbar.ro} - Când scrieți o meta-descriere, păstrați-o între 140 și 160 de caractere, astfel încât Google să vă poată afișa întregul mesaj. Nu uitați să includeți cuvântul cheie!`,
      hu: `DemoComponents - ${translationsGlossary.n.navbar.hu} - Ha metaleírást ír, tartsa 140 és 160 karakter között, hogy a Google megjeleníthesse a teljes üzenetet. Ne felejtse el megadni a kulcsszót!`,
      ar: `DemoComponents - ${translationsGlossary.n.navbar.ar} - عند كتابة وصف تعريفي ، احتفظ به بين 140 و 160 حرفًا حتى يتمكن Google من عرض رسالتك بالكامل. لا تنس تضمين كلمتك الرئيسية!`,
      de: `DemoComponents - ${translationsGlossary.n.navbar.de} - Halten Sie beim Schreiben einer Meta-Beschreibung zwischen 140 und 160 Zeichen, damit Google Ihre gesamte Nachricht anzeigen kann. Vergessen Sie nicht, Ihr Keyword anzugeben!`,
      es: `DemoComponents - ${translationsGlossary.n.navbar.es} - Cuando escriba una meta descripción, manténgala entre 140 y 160 caracteres para que Google pueda mostrar su mensaje completo. ¡No olvides incluir tu palabra clave!`,
      sv: `DemoComponents - ${translationsGlossary.n.navbar.sv} - När du skriver en metabeskrivning, behåll den mellan 140 och 160 tecken så att Google kan visa hela ditt meddelande. Glöm inte att inkludera ditt sökord!`,
      pt: `DemoComponents - ${translationsGlossary.n.navbar.pt} - Ao escrever uma meta descrição, mantenha-a entre 140 e 160 caracteres para que o Google possa exibir sua mensagem inteira. Não se esqueça de incluir sua palavra-chave!`,
      fi: `DemoComponents - ${translationsGlossary.n.navbar.fi} - Kun kirjoitat metakuvausta, pidä se 140–160 merkin pituisena, jotta Google voi näyttää koko viestisi. Muista lisätä avainsanasi!`,
      pl: `DemoComponents - ${translationsGlossary.n.navbar.pl} - Pisząc metaopis, zachowaj długość od 140 do 160 znaków, aby Google mogło wyświetlić całą wiadomość. Nie zapomnij podać słowa kluczowego!`,
      th: `DemoComponents - ${translationsGlossary.n.navbar.th} - เมื่อเขียนคำอธิบายเมตา ให้มีความยาวระหว่าง 140 ถึง 160 อักขระ เพื่อให้ Google สามารถแสดงข้อความทั้งหมดของคุณได้ อย่าลืมใส่คีย์เวิร์ดของคุณ!`,
      ms: `DemoComponents - ${translationsGlossary.n.navbar.ms} - Apabila menulis perihalan meta, simpan antara 140 dan 160 aksara supaya Google boleh memaparkan keseluruhan mesej anda. Jangan lupa sertakan kata kunci anda!`
    };

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#590004");
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#590004");
    });

    return {};
  },
};
</script>

<template>
  <Section1 :lang="lang" />
</template>
