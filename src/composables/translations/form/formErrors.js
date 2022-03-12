const formErrors = () => {
  const firstNameErr = {
    id: 1,
    en: "First name must not be empty",
    it: "Il nome non deve essere vuoto",
    tr: "İsim boş bırakılamaz",
    ro: "Prenumele trebuie completat",
    hu: "Keresztnév kitöltése kötelező",
    ar: "يجب ألا يكون الاسم الأول فارغًا",
    de: "Vorname darf nicht leer sein",
    es: "El nombre archivado no debe estar vacío.",
    sv: "Namn måste fyllas i och får ej lämnas blankt",
    pt: "O nome não deve estar vazio",
    fi: "Etunimi ei saa olla tyhjä",
    pl: "Imię nie może być puste",
    th: "ชื่อต้องไม่เว้นว่าง",
    ms: "Nama pertama tidak boleh kosong",
  };
  const lastNameErr = {
    id: 2,
    en: "Last name must not be empty",
    it: "Il cognome non deve essere vuoto",
    tr: "Soyadı boş bırakılamaz",
    ro: "Numele trebuie completat",
    hu: "Vezetéknév kitöltése kötelező",
    ar: "يجب ألا يكون الاسم الأخير فارغًا",
    de: "Nachname darf nicht leer sein",
    es: "El apellido archivado no debe estar vacío",
    sv: "Efternamn måste fyllas i och får ej lämnas blankt",
    pt: "O apelido não deve estar vazio",
    fi: "Sukunimi ei saa olla tyhjä",
    pl: "Nazwisko nie może być puste",
    th: "นามสกุลต้องไม่เว้นว่าง",
    ms: "Nama keluarga tidak boleh kosong",
  };
  const emailEmptyErr = {
    id: 3,
    en: "Email must not be empty",
    it: "L'email non deve essere vuota",
    tr: "E-posta boş bırakılamaz",
    ro: "Emailul trebuie completat",
    hu: "Email cím megadása kötelező",
    ar: "يجب ألا يكون البريد الإلكتروني فارغًا",
    de: "E-Mail darf nicht leer sein",
    es: "El campo de correo electrónico no debe estar vacío.",
    sv: "E-post måste fyllas knock får ej lämnas blankt",
    pt: "O e-mail não deve estar vazio",
    fi: "Sähköposti ei saa olla tyhjä",
    pl: "E-mail nie może być pusty",
    th: "อีเมลต้องไม่เว้นว่าง",
    ms: "E-mel tidak boleh kosong",
  };
  const invalidEmailErr = {
    id: 4,
    en: "Invalid Email",
    it: "Indirizzo email non valido",
    tr: "Geçersiz e-posta",
    ro: "Email invalid",
    hu: "Érvénytelen Email cím",
    ar: "بريد إلكتروني خاطئ",
    de: "UngÃƒÂ¼ltige E-mail",
    es: "Dirección de correo electrónico no válida",
    sv: "Ogiltig e-postadress",
    pt: "E-mail inválido",
    fi: "Virheellinen sähköpostiosoite",
    pl: "Niepoprawny email",
    th: "อีเมลไม่ถูกต้อง",
    ms: "Email tidak sah",
  };
  const phoneEmptyErr = {
    id: 5,
    en: "Phone number must not be empty",
    it: "Inserire il numero di telefono",
    tr: "Telefon boş bırakılamaz",
    ro: "Numarul de telefon trebuie completat",
    hu: "Telefonszám megadása kötelező",
    ar: "يجب ألا يكون رقم الهاتف فارغًا",
    de: "Telefonnummer darf nicht leer sein",
    es: "Introduce tu número de teléfono",
    sv: "Fyll i ditt telefonnummer ",
    pt: "O telefone não deve estar vazio",
    fi: "Puhelinnumero ei saa olla tyhjä",
    pl: "Numer telefonu nie może być pusty",
    th: "หมายเลขโทรศัพท์ต้องไม่เว้นว่าง",
    ms: "Nombor telefon tidak boleh kosong",
  };
  const phoneDigitErr = {
    id: 6,
    en: "Phone number must be 6 digits or longer",
    it: "Il numero di telefono deve essere di 6 cifre o più",
    tr: "Telefon numarası 6 veya daha fazla numaradan oluşmalıdır",
    ro: "Numarul de telefon trebuie sa aiba 6 cifre sau mai multe",
    hu: "A telefonszámnak minimum 6 számjegyűnek szükséges lennie vagy többnek",
    ar: "يجب أن يتكون رقم الهاتف من 6 أرقام أو أكثر",
    de: "Telefonnummer muss 6 Ziffern oder lÃƒÂ¤nger sein",
    es: "El número de teléfono debe tener 6 dígitos o más.",
    sv: "Telefonnummer måste bestå av minst 6 siffror",
    pt: "O número de telefone deve ter 6 dígitos ou mais ",
    fi: "Puhelinnumero måste innehålla sex siffror eller längre",
    pl: "Numer telefonu musi mieć co najmniej 6 cyfr",
    th: "หมายเลขโทรศัพท์ต้องเป็นตัวเลข 6 หลักขึ้นไป",
    ms: "Nombor telefon mestilah 6 digit atau lebih lama",
  };
  const invalidPhoneErr = {
    id: 7,
    en: "Invalid Phone number",
    it: "Il numero di telefono non e valido",
    tr: "Geçersiz telefon",
    ro: "Număr de telefon invalid",
    hu: "Érvénytelen telefonszám",
    ar: "رقم الهاتف غير صحيح",
    de: "UngÃƒÂ¼ltige Telefonnummer",
    es: "Numero de telefono invalido",
    sv: "Ogiltigt telefonnummer",
    pt: "Número de telefone inválido",
    fi: "Väärä puhelinnumero",
    pl: "Nieprawidłowy numer telefonu",
    th: "หมายเลขโทรศัพท์ไม่ถูกต้อง",
    ms: "Nombor Telefon tidak sah",
  };
  const countryErr = {
    id: 8,
    en: "You must choose country",
    it: "Selezionare il Paese",
    tr: "Lütfen ülkenizi seçin",
    ro: "Trebuie sa alegi o tara",
    hu: "Kérjük, válassza ki az országot",
    ar: "يجب عليك اختيار الدولة",
    de: "Sie mÃƒÂ¼ssen ein Land wÃƒÂ¤hlen",
    es: "Debes elegir pais",
    sv: "Du måste välja land",
    pt: "Você deve escolher um país",
    fi: "Sinun on valittava maa",
    pl: "Musisz wybrać kraj",
    th: "คุณต้องเลือกประเทศ",
    ms: "Anda mesti memilih negara",
  };
  const agreementErr = {
    id: 9,
    en: `To proceed, You must agree to receive communications from ${process.env.VUE_APP_BRAND_TITLE}`,
    it: `Per procedere e' necessario approvare la ricezione dei segnali da ${process.env.VUE_APP_BRAND_TITLE}`,
    tr: `Devam etmek için ${process.env.VUE_APP_BRAND_TITLE}'dan bildirim almayı kabul edin`,
    ro: `Pentru a continua, trebuie sa fii de acord sa primesti mesaje din partea ${process.env.VUE_APP_BRAND_TITLE}`,
    hu: `A következő lépéshez, kérjük egyezzen bele, hogy kommunikációban részesül az ${process.env.VUE_APP_BRAND_TITLE} szolgáltatótól`,
    ar: `للمتابعة ، يجب أن توافق على تلقي اتصالات من ${process.env.VUE_APP_BRAND_TITLE}`,
    de: `Um fortzufahren, mÃƒÂ¼ssen Sie die Mitteilung von ${process.env.VUE_APP_BRAND_TITLE} akzeptieren.`,
    es: `Acepto recibir comunicación de ${process.env.VUE_APP_BRAND_TITLE}`,
    sv: `För att fortsätta måste du godkänna att erhålla kommunikation  från ${process.env.VUE_APP_BRAND_TITLE}`,
    pt: `Para continuar, você deve concordar em receber comunicações da ${process.env.VUE_APP_BRAND_TITLE}`,
    fi: `Jatkaaksesi, sinun on suostuttava vastaanottamaan viestintää ${process.env.VUE_APP_BRAND_TITLE}`,
    pl: `Aby kontynuować, musisz wyrazić zgodę na otrzymywanie wiadomości od ${process.env.VUE_APP_BRAND_TITLE}`,
    th: `เพื่อดำเนินการต่อ คุณต้องยอมรับที่จะรับการสื่อสารจาก ${process.env.VUE_APP_BRAND_TITLE}`,
    ms: `Untuk meneruskan, Anda mesti bersetuju untuk menerima komunikasi daripada ${process.env.VUE_APP_BRAND_TITLE}`,
  };

  return {
    firstNameErr,
    lastNameErr,
    emailEmptyErr,
    invalidEmailErr,
    phoneEmptyErr,
    phoneDigitErr,
    invalidPhoneErr,
    countryErr,
    agreementErr,
  };
};

export default formErrors;
