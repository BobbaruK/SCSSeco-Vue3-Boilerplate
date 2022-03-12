import token from "../../../token.json";

const getCountry = async (countryValue, validate) => {
  const logs = process.env.VUE_APP_LOG_ERRORS;
  const logStylesAPI = ["font-size: 14px", "font-weight: bold"].join(";");
  const logStylesAPImsg = ["font-size: 12px", "font-weight: bold", "color: magenta"].join(";");

  // TODO resolve fetch post
  // fetch("https://pubservices.fxoro.com/api/landingpage/iptocountry", {
  //   method: "POST", // GET, POST, PUT, DELETE, etc.
  //   mode: "no-cors", // no-cors, *cors, same-origin
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Content-Encoding": "deflate, gzip",
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: JSON.stringify(token), // body data type must match "Content-Type" header
  // })
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.log(err));

  // try {
  //   const response = await fetch("https://pubservices.fxoro.com/api/landingpage/iptocountry", {
  //     method: "POST",
  //     // mode: "no-cors", // no-cors, *cors, same-origin
  //     headers: {
  //       // Accept: "application/json",
  //       // "Content-Type": "application/json",
  //       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  //     },
  //     body: JSON.stringify(token),
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // } catch (err) {
  //   console.log(err);
  // }

  try {
    let data = "";
    //* Main country API
    const loadDataFXAPI = await fetch("https://seriale-imdb-api.herokuapp.com/XfilesActorss");

    if (!loadDataFXAPI.ok) {
      throw Error(`${loadDataFXAPI.status} ${loadDataFXAPI.statusText}`);
    }

    data = await loadDataFXAPI.json();
    countryValue.value = "TR"; // set country
    validate.value = false;
  } catch (err) {
    if (logs === "true") {
      console.log(`%cLooks like there was a problem with main API(s):`, logStylesAPI, err);
      console.log("%c> Loading backup API(s)...", logStylesAPImsg);
    }

    try {
      let data = "";
      //* Backup country API
      const loadDataIPAPI = await fetch("http://ip-api.com/json/?fields=countryCode");

      if (!loadDataIPAPI.ok) {
        throw Error(`${loadDataIPAPI.status} ${loadDataIPAPI.statusText}`);
      }

      data = await loadDataIPAPI.json();
      countryValue.value = data.countryCode; // set country
      validate.value = false;

      if (logs === "true") {
        console.log("%c> Backup API(s) loaded", logStylesAPImsg);
      }
    } catch (e) {
      validate.value = false;

      if (logs === "true") {
        console.log(`%cLooks like there was a problem with backup API(s):`, logStylesAPI, e);
        console.log("%c> Cannot fetch backup API(s). Please select country manually!", logStylesAPImsg);
      }
    }
  }
};

export default getCountry;
