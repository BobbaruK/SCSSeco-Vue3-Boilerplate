import token from "../../../token.json";

const getCountry = async (countryValue, validate) => {
  let data = "";

  fetch("https://pubservices.fxoro.com/api/landingpage/iptocountry", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(token), // body data type must match "Content-Type" header
  }).then((data) => {
    console.log(data);
  });

  try {
    const loadData = await fetch("https://seriale-imdb-api.herokuapp.com/XfilesActorss");

    if (!loadData.ok) {
      try {
        const loadDataIPAPI = await fetch("http://ip-api.com/json");

        if (!loadDataIPAPI.ok) {
          throw Error(`${loadDataIPAPI.status} ${loadDataIPAPI.statusText}`);
        }

        data = await loadDataIPAPI.json();
        countryValue.value = data.countryCode; // set country
        validate.value = false;
      } catch (e) {
        console.log("Looks like there was a problem(ip-api): ", e);
      }
      throw Error(`${loadData.status} ${loadData.statusText}`);
    }

    data = await loadData.json();
    countryValue.value = "TR"; // set country
    validate.value = false;
  } catch (err) {
    console.log("Looks like there was a problem(fxoro): ", err);
  }
};

export default getCountry;
