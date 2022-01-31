import { ref } from "vue";
import switchLang from "../switchLang";

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
  };
  const submitBtnTransl = obj;

  const firstName = ref();
  const lastName = ref();
  const email = ref();
  const country = ref();
  const phone = ref();
  const agreement = ref();
  const submitBtn = ref();

  switchLang(firstName, firstNameTransl, lang);
  switchLang(lastName, lastNameTransl, lang);
  switchLang(email, emailTransl, lang);
  switchLang(country, countryTransl, lang);
  switchLang(phone, phoneTransl, lang);
  switchLang(agreement, agreementTransl, lang);
  switchLang(submitBtn, submitBtnTransl, lang);

  return { firstName, lastName, email, country, phone, agreement, submitBtn };
};

export default formTranslations;
