'use strict'
let submitFormButton = document.getElementById('form')
let responseText = document.getElementById('response')

submitFormButton.addEventListener('submit', (event) => {
  event.preventDefault()

  let demandaDia = document.getElementById('demandaDia').value
  if (!demandaDia) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Demanda Diaria' es necesario.`,
      icon: 'error',
    })
    return
  }
  demandaDia = Number(demandaDia)

  let desvEstandar = document.getElementById('desvEstandar').value
  if (!desvEstandar) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Desviacion Estandar' es necesario.`,
      icon: 'error',
    })
    return
  }
  desvEstandar = Number(desvEstandar)

  let nStock = document.getElementById('nStock').value
  if (!nStock) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Nivel Stock' es necesario.`,
      icon: 'error',
    })
    return
  }
  nStock = Number(nStock)

  let invInicial = document.getElementById('invInicial').value
  if (!invInicial) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Inventario Inicial' es necesario.`,
      icon: 'error',
    })
    return
  }
  invInicial = Number(invInicial)

  let tiempoReposicion = document.getElementById('tiempoReposicion').value
  if (!tiempoReposicion) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Tiempo Reposición' es necesario.`,
      icon: 'error',
    })
    return
  }
  tiempoReposicion = Number(tiempoReposicion)

  let tiempoRevision = document.getElementById('tiempoRevision').value
  if (!tiempoRevision) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Tiempo Revisión' es necesario.`,
      icon: 'error',
    })
    return
  }
  tiempoRevision = Number(tiempoRevision)

  let tiempos = (tiempoRevision + tiempoReposicion)

  let des = (desvEstandar * desvEstandar)
  des = Math.ceil(des)

  let intervaloSeg = Math.sqrt(tiempos * des)
  intervaloSeg = intervaloSeg.toFixed(2)

  let total = (demandaDia * tiempos) + (nStock * (intervaloSeg)) - invInicial
  total = Math.ceil(total)

  responseText.innerHTML = total
})