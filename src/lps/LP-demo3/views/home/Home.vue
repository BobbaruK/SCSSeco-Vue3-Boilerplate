<script>
import languages from "../../composables/translations/languages";
import checkLangAndMeta from "../../../../composables/translations/checkLangAndMeta";
import Section1 from "./Section1.vue";
import { onUpdated } from "@vue/runtime-core";

export default {
  name: "Demo3Home",
  components: { Section1 },
  emits: ["showForm", "formDetails"],
  props: {
    lang: String,
  },
  setup(props, ctx) {
    const documentTitleTransl = {
      en: "Demo3",
      it: "Demo3",
      tr: "Demo3",
      ro: "Demo3",
      hu: "Demo3",
      ar: "Demo3",
      de: "Demo3",
      es: "Demo3",
      sv: "Demo3",
      pt: "Demo3",
      fi: "Demo3",
      pl: "Demo3",
      th: "Demo3",
      ms: "Demo3",
    };

    const metaDescription = {
      en: "Demo3 - Home(en) - When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!",
      it: "Demo3 - Home(it) - Quando scrivi una meta descrizione, mantienila compresa tra 140 e 160 caratteri in modo che Google possa visualizzare l'intero messaggio. Non dimenticare di includere la tua parola chiave!",
      tr: "Demo3 - Home(tr) - Bir meta açıklama yazarken, Google'ın tüm mesajınızı gösterebilmesi için 140 ila 160 karakter arasında tutun. Anahtar kelimenizi eklemeyi unutmayın!",
      ro: "Demo3 - Home(ro) - Când scrieți o meta-descriere, păstrați-o între 140 și 160 de caractere, astfel încât Google să vă poată afișa întregul mesaj. Nu uitați să includeți cuvântul cheie!",
      hu: "Demo3 - Home(hu) - Ha metaleírást ír, tartsa 140 és 160 karakter között, hogy a Google megjeleníthesse a teljes üzenetet. Ne felejtse el megadni a kulcsszót!",
      ar: "Demo3 - Home(ar) - عند كتابة وصف تعريفي ، احتفظ به بين 140 و 160 حرفًا حتى يتمكن Google من عرض رسالتك بالكامل. لا تنس تضمين كلمتك الرئيسية!",
      de: "Demo3 - Home(de) - Halten Sie beim Schreiben einer Meta-Beschreibung zwischen 140 und 160 Zeichen, damit Google Ihre gesamte Nachricht anzeigen kann. Vergessen Sie nicht, Ihr Keyword anzugeben!",
      es: "Demo3 - Home(es) - Cuando escriba una meta descripción, manténgala entre 140 y 160 caracteres para que Google pueda mostrar su mensaje completo. ¡No olvides incluir tu palabra clave!",
      sv: "Demo3 - Home(sv) - När du skriver en metabeskrivning, behåll den mellan 140 och 160 tecken så att Google kan visa hela ditt meddelande. Glöm inte att inkludera ditt sökord!",
      pt: "Demo3 - Home(pt) - Ao escrever uma meta descrição, mantenha-a entre 140 e 160 caracteres para que o Google possa exibir sua mensagem inteira. Não se esqueça de incluir sua palavra-chave!",
      fi: "Demo3 - Home(fi) - Kun kirjoitat metakuvausta, pidä se 140–160 merkin pituisena, jotta Google voi näyttää koko viestisi. Muista lisätä avainsanasi!",
      pl: "Demo3 - Home(pl) - Pisząc metaopis, zachowaj długość od 140 do 160 znaków, aby Google mogło wyświetlić całą wiadomość. Nie zapomnij podać słowa kluczowego!",
      th: "Demo3 - Home(th) - เมื่อเขียนคำอธิบายเมตา ให้มีความยาวระหว่าง 140 ถึง 160 อักขระ เพื่อให้ Google สามารถแสดงข้อความทั้งหมดของคุณได้ อย่าลืมใส่คีย์เวิร์ดของคุณ!",
      ms: "Demo3 - Home(ms) - Apabila menulis perihalan meta, simpan antara 140 dan 160 aksara supaya Google boleh memaparkan keseluruhan mesej anda. Jangan lupa sertakan kata kunci anda!",
    };

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#122932");
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#122932");
    });

    // form call
    const formCall = (e) => {
      ctx.emit("showForm");
    };

    const eFormDets = (e) => {
      ctx.emit("formDetails", e);
    };

    return { formCall, eFormDets };
  },
};
</script>

<template>
  <Section1 :lang="lang" @showForm="formCall" @formDetails="eFormDets" />
</template>
