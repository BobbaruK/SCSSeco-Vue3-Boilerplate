<script>
import checkLangAndMeta from "../../composables/translations/checkLangAndMeta";
import languages from "../../composables/translations/languages";
import "../../assets/scss/globals/scsseco_global.scss";
import "../../assets/scss/thankyou/scsseco_thankyou.scss";
import { onUpdated } from "@vue/runtime-core";
export default {
  name: "ThankYou",
  props: {
    lang: String,
  },
  setup(props) {
    const documentTitleTransl = {
      en: "Thank You",
      it: "Grazie",
      tr: "Teşekkürler",
      ro: "Mulțumesc",
      hu: "Köszönöm",
      ar: "شكرا لكم",
      de: "Danke schön",
      es: "Gracias",
      sv: "Tack",
      pt: "Obrigada",
      fi: "Kiitos",
      pl: "Dziękuję",
      th: "th",
      ms: "ms",
    };

    const metaDescritopn = {
      en: "Thank You(en) - When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!",
      it: "Thank You(it) - Quando scrivi una meta descrizione, mantienila compresa tra 140 e 160 caratteri in modo che Google possa visualizzare l'intero messaggio. Non dimenticare di includere la tua parola chiave!",
      tr: "Thank You(tr) - Bir meta açıklama yazarken, Google'ın tüm mesajınızı gösterebilmesi için 140 ila 160 karakter arasında tutun. Anahtar kelimenizi eklemeyi unutmayın!",
      ro: "Thank You(ro) - Când scrieți o meta-descriere, păstrați-o între 140 și 160 de caractere, astfel încât Google să vă poată afișa întregul mesaj. Nu uitați să includeți cuvântul cheie!",
      hu: "Thank You(hu) - Ha metaleírást ír, tartsa 140 és 160 karakter között, hogy a Google megjeleníthesse a teljes üzenetet. Ne felejtse el megadni a kulcsszót!",
      ar: "Thank You(ar) - عند كتابة وصف تعريفي ، احتفظ به بين 140 و 160 حرفًا حتى يتمكن Google من عرض رسالتك بالكامل. لا تنس تضمين كلمتك الرئيسية!",
      de: "Thank You(de) - Halten Sie beim Schreiben einer Meta-Beschreibung zwischen 140 und 160 Zeichen, damit Google Ihre gesamte Nachricht anzeigen kann. Vergessen Sie nicht, Ihr Keyword anzugeben!",
      es: "Thank You(es) - Cuando escriba una meta descripción, manténgala entre 140 y 160 caracteres para que Google pueda mostrar su mensaje completo. ¡No olvides incluir tu palabra clave!",
      sv: "Thank You(sv) - När du skriver en metabeskrivning, behåll den mellan 140 och 160 tecken så att Google kan visa hela ditt meddelande. Glöm inte att inkludera ditt sökord!",
      pt: "Thank You(pt) - Ao escrever uma meta descrição, mantenha-a entre 140 e 160 caracteres para que o Google possa exibir sua mensagem inteira. Não se esqueça de incluir sua palavra-chave!",
      fi: "Thank You(fi) - Kun kirjoitat metakuvausta, pidä se 140–160 merkin pituisena, jotta Google voi näyttää koko viestisi. Muista lisätä avainsanasi!",
      pl: "Thank You(pl) - Pisząc metaopis, zachowaj długość od 140 do 160 znaków, aby Google mogło wyświetlić całą wiadomość. Nie zapomnij podać słowa kluczowego!",
      th: "Thank You(th) - เมื่อเขียนคำอธิบายเมตา ให้มีความยาวระหว่าง 140 ถึง 160 อักขระ เพื่อให้ Google สามารถแสดงข้อความทั้งหมดของคุณได้ อย่าลืมใส่คีย์เวิร์ดของคุณ!",
      ms: "Thank You(ms) - Apabila menulis perihalan meta, simpan antara 140 dan 160 aksara supaya Google boleh memaparkan keseluruhan mesej anda. Jangan lupa sertakan kata kunci anda!",
    };

    const { lang } = languages();
    checkLangAndMeta(props.lang, lang, documentTitleTransl, metaDescritopn);
    onUpdated(() => {
      checkLangAndMeta(props.lang, lang, documentTitleTransl, metaDescritopn);
    });

    const title = {
      en: "Thank You, Bitch!",
      it: "Grazie, puttana!",
      tr: "Teşekkürler, Kaltak!",
      ro: "Mulțumesc, cățea!",
      hu: "Köszönöm Szuka!",
      ar: "شكرا أيتها العاهرة!",
      de: "Danke, Hündin!",
      es: "¡Gracias, perra!",
      sv: "Tack, Bitch!",
      pt: "Obrigado, cadela!",
      fi: "Kiitos, Narttu!",
      pl: "Dziękuję, suko!",
      th: "ขอบคุณ นังบ้า!",
      ms: "Terima kasih, Jalang!",
    };

    return { title };
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 thankYou">
        <h1>{{ title[lang] }}</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.thankYou {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  a {
    cursor: pointer;
  }
}
</style>
