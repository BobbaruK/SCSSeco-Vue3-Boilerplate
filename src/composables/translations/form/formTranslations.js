import translationsGlossary from "../translationsGlossary";

const formTranslations = () => {
  const firstName = translationsGlossary.f.firstName;
  const lastName = translationsGlossary.l.lastName;
  const email = translationsGlossary.e.email;
  const country = translationsGlossary.c.country;
  const phone = translationsGlossary.p.phone;
  const agreement = {
    en: `I agree to receive communication from ${process.env.VUE_APP_BRAND_TITLE} and consent to the processing and transferring of my personal data to third parties and that I may be contacted from such parties to receive communication on products or services.`,
    it: `Accetto di ricevere comunicazioni da ${process.env.VUE_APP_BRAND_TITLE} e acconsento al trattamento e al trasferimento dei miei dati personali a terzi e di poter essere contattato da tali soggetti a ricevere comunicazioni su prodotti o servizi.`,
    tr: `${process.env.VUE_APP_BRAND_TITLE} tarafından benimle iletişime geçilmesine ve kişisel verilerimin işlenmesine, üçüncü şahışlara aktarılmasına, bu şahışlardan ürün veya hizmetler ile alakalı bilgilendirme için benimle iletişime geçilebilmesine izin veriyorum.`,
    ro: `Sunt de acord să primesc comunicări de la ${process.env.VUE_APP_BRAND_TITLE} și sunt de acord cu prelucrarea și transferul datelor mele personale către terți și pot fi contactat de astfel de părți să primesc comunicări cu privire la produse sau servicii.`,
    hu: `Hozzájárulok ahhoz, hogy ${process.env.VUE_APP_BRAND_TITLE} kommunikációs célokból felkeressen, és beleegyezek személyes adataim feldolgozásához és továbbításához harmadik feleknek, és elfogadom, hogy azok kapcsolatba lépjenek velem termékekkel vagy szolgáltatásokkal kapcsolatban.`,
    ar: `أوافق بموجب هذا على معالجة ونقل بياناتي الشخصية إلى أطراف ثالثة وأنه قد يتم الاتصال بي من هذه الأطراف لتلقي اتصالات حول المنتجات أو الخدمات.`,
    de: ``,
    es: `Acepto recibir comunicaciones de ${process.env.VUE_APP_BRAND_TITLE} y consentimiento para el procesamiento y transferencia de mis datos personales datos a terceros y que pueda ser contactado desde dichas partes para recibir comunicaciones sobre productos o servicios.`,
    sv: `Jag samtycker till att ta emot kommunikation från ${process.env.VUE_APP_BRAND_TITLE} och samtycke till behandling och överföring av min personliga uppgifter till tredje part och att jag kan komma att kontaktas från sådana parter att ta emot kommunikation om produkter eller tjänster.`,
    pt: ``,
    fi: `Hyväksyn vastaanottavani viestejä lähettäjältä ${process.env.VUE_APP_BRAND_TITLE} ja suostun henkilötietojeni käsittelyyn ja siirtämiseen tietoja kolmansille osapuolille ja joista minuun voidaan ottaa yhteyttä tällaisten osapuolten vastaanottaa tuotteita tai palveluita koskevaa viestintää.`,
    pl: `„Wyrażam zgodę na otrzymywanie komunikacji od ${process.env.VUE_APP_BRAND_TITLE} i zgodę na przetwarzanie moich danych osobowych dane osobom trzecim i z których można się ze mną skontaktować takie strony w celu otrzymywania informacji o produktkach lub usługach."`,
    th: ``,
    ms: `Saya bersetuju menerima komunikasi daripada ${process.env.VUE_APP_BRAND_TITLE} dan persetujuan untuk memproses dan memindahkan peribadi saya data kepada pihak ketiga dan saya boleh dihubungi daripada pihak tersebut untuk menerima komunikasi mengenai produk atau perkhidmatan.`,
  };

  return { firstName, lastName, email, country, phone, agreement };
};

export default formTranslations;
