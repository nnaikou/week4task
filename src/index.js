import "./styles.css";



let inputText = document.getElementById("input-show")
let button = document.getElementById("submit-data")

button.addEventListener("click", () => {
  getdata()
})




async function getdata() {

  let url = "https://api.tvmaze.com/search/shows?q="+ inputText.value
  let dataPromise = await fetch(url)
  let dataJSON = await dataPromise.json()

  const data0 = Object.values(dataJSON)
  let showAllShows = document.getElementById("all-shows-data")

  data0.forEach((x) => {

    let showData = document.createElement("div")
    showData.setAttribute("class", "show-data")

    let showInfo = document.createElement("div")
    showInfo.setAttribute("class", "show-info")

    let showTitle = document.createElement("h1")
    showTitle.innerText = x.show.name

    let showSummary = document.createElement("p")
    showSummary.innerHTML = x.show.summary

    let pic = document.createElement("img")
    try {
      pic.setAttribute("src", x.show.image.medium)
    } catch {
      pic.setAttribute("src", "null")
    }

  
    showInfo.appendChild(showTitle)
    showInfo.appendChild(showSummary)
    showData.appendChild(pic)
    showData.appendChild(showInfo)

    showAllShows.appendChild(showData)


  
  })


}