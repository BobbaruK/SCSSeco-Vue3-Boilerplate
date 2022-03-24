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
    en: "E-mail",
    it: "E-mail",
    tr: "E-posta",
    ro: "E-mail",
    hu: "E-mail",
    ar: "البريد الالكتروني",
    de: "E-mail",
    es: "Correo electrónico",
    sv: "E-postadress",
    pt: "E-mail",
    fi: "Sähköposti",
    pl: "E-mail",
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
    en: `Yes, I agree to receive communications from ${process.env.VUE_APP_BRAND_TITLE}`,
    it: `Sì, accetto di ricevere comunicazioni da ${process.env.VUE_APP_BRAND_TITLE}`,
    tr: `Evet, ${process.env.VUE_APP_BRAND_TITLE}'den iletişim almayı kabul ediyorum`,
    ro: `Da, sunt de acord să primesc comunicări de la ${process.env.VUE_APP_BRAND_TITLE}`,
    hu: `Igen, beleegyezek, hogy üzeneteket kapjak a ${process.env.VUE_APP_BRAND_TITLE}-tól`,
    ar: `نعم ، أوافق على تلقي اتصالات من ${process.env.VUE_APP_BRAND_TITLE}`,
    de: `Ja, ich stimme zu, Mitteilungen von ${process.env.VUE_APP_BRAND_TITLE} zu erhalten`,
    es: `Sí, acepto recibir comunicaciones de ${process.env.VUE_APP_BRAND_TITLE}`,
    sv: `Ja, jag samtycker till att ta emot kommunikation från ${process.env.VUE_APP_BRAND_TITLE}`,
    pt: `Sim, concordo em receber comunicações da ${process.env.VUE_APP_BRAND_TITLE}`,
    fi: `Kyllä, suostun vastaanottamaan viestejä ${process.env.VUE_APP_BRAND_TITLE}:lta`,
    pl: `Tak, zgadzam się na otrzymywanie wiadomości od ${process.env.VUE_APP_BRAND_TITLE}`,
    th: `ใช่ ฉันตกลงที่จะรับการสื่อสารจาก${process.env.VUE_APP_BRAND_TITLE}`,
    ms: `Ya, saya bersetuju menerima komunikasi daripada ${process.env.VUE_APP_BRAND_TITLE}`,
  };

  const gdprTransl = {
    en: "I hereby consent to the processing and transferring of my personal data to third parties and that I may be contacted from such parties to receive communication on products or services.",
    it: "Acconsento al trattamento e al trasferimento dei miei dati personali a terzi e di poter essere contattato da tali soggetti per ricevere comunicazioni su prodotti o servizi.",
    tr: "Kişisel verilerimin işlenmesine ve üçüncü şahışlara aktarılmasına, bu şahışlardan ürün veya hizmetler ile alakalı bilgilendirme için benimle iletişime geçilebilmesine izin veriyorum.",
    ro: "Sunt de acord cu prelucrarea și transferul datelor mele cu caracter personal către terți și pot fi contactat de catre aceste părți pentru a primi comunicări cu privire la produse sau servicii.",
    hu: "Ezúton hozzájárulok személyes adataim feldolgozásához és harmadik felek részére történő továbbításához, valamint ahhoz, hogy ezek a felek kapcsolatba léphessenek velem a termékekkel vagy szolgáltatásokkal kapcsolatos kommunikáció céljából.",
    ar: "أوافق بموجب هذا على معالجة ونقل بياناتي الشخصية إلى أطراف ثالثة وأنه قد يتم الاتصال بي من هذه الأطراف لتلقي الخدمات أوالمنتجات.",
    de: "",
    es: "Por la presente, doy mi consentimiento para el procesamiento y la transferencia de mis datos personales a terceros y que dichos terceros puedan contactarme para recibir comunicaciones sobre productos o servicios.",
    sv: "Jag samtycker härmed till behandling och överföring av mina personuppgifter till tredje part och att jag kan komma att kontaktas från sådana parter för att ta emot kommunikation om produkter eller tjänster.",
    pt: "",
    fi: "",
    pl: "Wyrażam zgodę na przetwarzanie i przekazywanie moich danych osobowych podmiotom trzecim oraz na kontaktowanie się ze mną przez te podmioty w celu otrzymywania komunikacji dotyczącej produktów lub usług.",
    th: "",
    ms: "",
  };

  const firstName = ref(firstNameTransl);
  const lastName = ref(lastNameTransl);
  const email = ref(emailTransl);
  const country = ref(countryTransl);
  const phone = ref(phoneTransl);
  const agreement = ref(agreementTransl);
  const gdpr = ref(gdprTransl);
  const submitBtn = ref(obj);

  return { firstName, lastName, email, country, phone, agreement, gdpr, submitBtn };
};

export default formTranslations;
