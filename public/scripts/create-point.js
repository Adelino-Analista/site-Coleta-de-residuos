function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]")


  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {

      for (const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
      }

    })
}

populateUFs()

function getCities(event) {
  const citySelect = document.querySelector("[name=city]")
  const stateInput = document.querySelector("[name=state]")

  const ufvalue = event.target.value

  const indexOfSelectedStarte = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedStarte].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`

  citySelect.innerHTML = "<option value>Selecine a Cidade<option>"
  citySelect.disabled = true

  fetch(url)
    .then(res => res.json())
    .then(cities => {

      for (const city of cities) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      }

      citySelect.disabled = false
    })
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)

//tens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
  const itemLi = event.target

  //adicionar o remover uma classe com javascript
  itemLi.classList.toggle("selected")

  const itemId = itemLi.dataset.id

  //verificar se existem item selecinandos, se sim
  //pega os items selecinandos

  const alreadySelected = selectedItes.findIndex(item => {
    const itemFound = item == itemId //isso sera false o true
    return itemFound
  })

  //se ja tiver selecinado,
  if (alreadySelected >= 0) {
    //tirar da seleçao    
    const filteredItems = selectedItems.filter(item => {
      const itemIsDifferent = item != itemId //false
      return itemIsDifferent
    })

    selectedItems = selectedItems
  }
  else {
    selectedItems.push(itemId)
  }

  console.log('selectedItems:', selectedItems)
  //atualizar a capo escondido com os itens
  collectedItems.value = selectedItems

}