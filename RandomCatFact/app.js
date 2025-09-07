// let btn = document.querySelector("button");
// let p = document.querySelector("#result");

// btn.addEventListener("click", async () => {
//   let fact = await getFact();
//   p.innerHTML = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     return "Fact Not Found!";
//   }
// }

// //Genrate Random Dog Image -->

// let image = document.querySelector("#img");
// document.querySelector("#btn").addEventListener("click", async () => {
//   let link = await getRandomImg();
//   image.setAttribute("src", link);
// });

// let url2 = "https://dog.ceo/api/breeds/image/random";

// async function getRandomImg() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   } catch (e) {
//     return "Image Not Found!";
//   }
// }

console.log(getRandomImg());
