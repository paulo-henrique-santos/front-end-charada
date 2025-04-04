const baseUrl = "http://127.0.0.1:5000/"
const aleatorio = "charada"
let per = document.getElementById('pergunta')
let res = document.getElementById('resposta-container')
let input_res = document.getElementById('input-resposta')
let res_charada = ''


async function getCharada() {
    try {
        const charada = await fetch(baseUrl + aleatorio)

        const charadaJson = await charada.json()
        per.innerHTML = `<p>${charadaJson.pergunta}</p> `
        res_charada = charadaJson.resposta
    } 
    catch (error){
        console.log('Erro ao chamar a API:'+error)
    }
}

getCharada()

function revelarCharada() {
    input_res.readOnly = true
    input_res = input_res.value.toLowerCase().replace(/\s/g, '').replace('.', '')
    res_charada_baixa = res_charada.toLowerCase().replace(/\s/g, '').replace('.', '')

    if (res_charada_baixa == input_res) {
        res.innerHTML =` <p class="text-green-500">Acertou! A resposta é "${res_charada}"</p> `
    }
    else {
        res.innerHTML =` <p class="text-red-500">Você errou!! A resposta é "${res_charada}"</p> `
    }

}

