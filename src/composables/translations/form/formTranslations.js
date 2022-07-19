import { ref } from "vue";

const formTranslations = (lang, obj) => {
  const firstNameTransl = {
    en: "First Name",
    it: "Nome",
    tr: "İsim",
    ro: "Prenume",
    hu: "Keresztnév",
    ar: "الاسم الأول",
    de: "Vorname",
    es: "Nombre",
    sv: "Förnamn",
    pt: "Nome próprio",
    fi: "Etunimi",
    pl: "Imię",
    th: "ชื่อจริง",
    ms: "Nama pertama",
  };
  const lastNameTransl = {
    en: "Last Name",
    it: "Cogname",
    tr: "Soyisim",
    ro: "Nume",
    hu: "Vezetéknév",
    ar: "الاسم الأخير",
    de: "Nachname",
    es: "Apellidos",
    sv: "Efternamn",
    pt: "Apelido",
    fi: "Sukunimi",
    pl: "Nazwisko",
    th: "นามสกุล",
    ms: "Nama terakhir",
  };
  const emailTransl = {
    en: "Email",
    it: "Email",
    tr: "E-posta",
    ro: "Email",
    hu: "Email",
    ar: "البريد الالكتروني",
    de: "Email",
    es: "Correo electrónico",
    sv: "E-postadress",
    pt: "Email",
    fi: "Sähköposti",
    pl: "Email",
    th: "อีเมล",
    ms: "E-mel",
  };
  const countryTransl = {
    en: "Country",
    it: "Paese",
    tr: "Ülke",
    ro: "Țară",
    hu: "Ország",
    ar: "بلد",
    de: "Land",
    es: "País",
    sv: "Land",
    pt: "País",
    fi: "Maa",
    pl: "Kraj",
    th: "ประเทศ",
    ms: "Negara",
  };
  const phoneTransl = {
    en: "Phone",
    it: "Telefono",
    tr: "Telefon",
    ro: "Telefon",
    hu: "Telefonszám",
    ar: "هاتف",
    de: "Telefon",
    es: "Teléfono",
    sv: "Telefonnummer",
    pt: "Telefone",
    fi: "Puhelinnumero",
    pl: "Telefonu",
    th: "โทรศัพท์",
    ms: "Telefon",
  };
  const agreementTransl = {
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

  const firstName = ref(firstNameTransl);
  const lastName = ref(lastNameTransl);
  const email = ref(emailTransl);
  const country = ref(countryTransl);
  const phone = ref(phoneTransl);
  const agreement = ref(agreementTransl);
  const submitBtn = ref(obj);

  return { firstName, lastName, email, country, phone, agreement, submitBtn };
};

export default formTranslations;
