async function fetchInstagram(url) {
  return await fetch(url + "?__a=1", {
    headers: {
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "es-US,es;q=0.9,en-US;q=0.8,en;q=0.7,es-419;q=0.6"
    }
  }).then((data) => data.json());
}
export default fetchInstagram;
