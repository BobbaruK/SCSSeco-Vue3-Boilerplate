<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "@/composables/global/checkLangAndMeta";
import languages from "../../composables/translations/languages";

import Section1 from "./Section1.vue";

export default {
  name: "LP~Demo2~Home",
  components: { Section1 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "Demo2",
      it: "Demo2",
      tr: "Demo2",
      ro: "Demo2",
      hu: "Demo2",
      ar: "Demo2",
      de: "Demo2",
      es: "Demo2",
      sv: "Demo2",
      pt: "Demo2",
      fi: "Demo2",
      pl: "Demo2",
      th: "Demo2",
      ms: "Demo2",
    };

    const metaDescription = {
      en: "Demo2 - Home(en) - When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!",
      it: "Demo2 - Home(it) - Quando scrivi una meta descrizione, mantienila compresa tra 140 e 160 caratteri in modo che Google possa visualizzare l'intero messaggio. Non dimenticare di includere la tua parola chiave!",
      tr: "Demo2 - Home(tr) - Bir meta açıklama yazarken, Google'ın tüm mesajınızı gösterebilmesi için 140 ila 160 karakter arasında tutun. Anahtar kelimenizi eklemeyi unutmayın!",
      ro: "Demo2 - Home(ro) - Când scrieți o meta-descriere, păstrați-o între 140 și 160 de caractere, astfel încât Google să vă poată afișa întregul mesaj. Nu uitați să includeți cuvântul cheie!",
      hu: "Demo2 - Home(hu) - Ha metaleírást ír, tartsa 140 és 160 karakter között, hogy a Google megjeleníthesse a teljes üzenetet. Ne felejtse el megadni a kulcsszót!",
      ar: "Demo2 - Home(ar) - عند كتابة وصف تعريفي ، احتفظ به بين 140 و 160 حرفًا حتى يتمكن Google من عرض رسالتك بالكامل. لا تنس تضمين كلمتك الرئيسية!",
      de: "Demo2 - Home(de) - Halten Sie beim Schreiben einer Meta-Beschreibung zwischen 140 und 160 Zeichen, damit Google Ihre gesamte Nachricht anzeigen kann. Vergessen Sie nicht, Ihr Keyword anzugeben!",
      es: "Demo2 - Home(es) - Cuando escriba una meta descripción, manténgala entre 140 y 160 caracteres para que Google pueda mostrar su mensaje completo. ¡No olvides incluir tu palabra clave!",
      sv: "Demo2 - Home(sv) - När du skriver en metabeskrivning, behåll den mellan 140 och 160 tecken så att Google kan visa hela ditt meddelande. Glöm inte att inkludera ditt sökord!",
      pt: "Demo2 - Home(pt) - Ao escrever uma meta descrição, mantenha-a entre 140 e 160 caracteres para que o Google possa exibir sua mensagem inteira. Não se esqueça de incluir sua palavra-chave!",
      fi: "Demo2 - Home(fi) - Kun kirjoitat metakuvausta, pidä se 140–160 merkin pituisena, jotta Google voi näyttää koko viestisi. Muista lisätä avainsanasi!",
      pl: "Demo2 - Home(pl) - Pisząc metaopis, zachowaj długość od 140 do 160 znaków, aby Google mogło wyświetlić całą wiadomość. Nie zapomnij podać słowa kluczowego!",
      th: "Demo2 - Home(th) - เมื่อเขียนคำอธิบายเมตา ให้มีความยาวระหว่าง 140 ถึง 160 อักขระ เพื่อให้ Google สามารถแสดงข้อความทั้งหมดของคุณได้ อย่าลืมใส่คีย์เวิร์ดของคุณ!",
      ms: "Demo2 - Home(ms) - Apabila menulis perihalan meta, simpan antara 140 dan 160 aksara supaya Google boleh memaparkan keseluruhan mesej anda. Jangan lupa sertakan kata kunci anda!",
    };

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#1E1E24");
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#1E1E24");
    });

    return {};
  },
};
</script>

<template>
  <Section1 :lang="lang" />
</template>
