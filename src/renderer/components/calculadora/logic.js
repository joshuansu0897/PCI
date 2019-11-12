'use strict'
const submitFormButton = document.getElementById('form')
const responseText = document.getElementById('response')

submitFormButton.addEventListener('submit', (event) => {
  event.preventDefault()

  const demandaDia = document.getElementById('demandaDia').value
  if (!demandaDia) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Demanda Diaria' es necesario.`,
      icon: 'error',
    })
    return
  }

  const desvEstandar = document.getElementById('desvEstandar').value
  if (!desvEstandar) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Desviacion Estandar' es necesario.`,
      icon: 'error',
    })
    return
  }

  const nStock = document.getElementById('nStock').value
  if (!nStock) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Nivel Stock' es necesario.`,
      icon: 'error',
    })
    return
  }

  const invInicial = document.getElementById('invInicial').value
  if (!invInicial) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Inventario Inicial' es necesario.`,
      icon: 'error',
    })
    return
  }

  const tiempoReposicion = document.getElementById('tiempoReposicion').value
  if (!tiempoReposicion) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Tiempo Reposición' es necesario.`,
      icon: 'error',
    })
    return
  }

  const tiempoRevision = document.getElementById('tiempoRevision').value
  if (!tiempoRevision) {
    Swal.fire({
      title: 'Error',
      text: `El campo 'Tiempo Revisión' es necesario.`,
      icon: 'error',
    })
    return
  }

  responseText.innerHTML = demandaDia
})