/* eslint-disable no-unreachable */
/* eslint-disable no-console */
import localforage from 'localforage'

const pengaturan = localforage.createInstance({ name: 'pengaturan' })

// initial default darkmode
pengaturan.getItem('darkMode').then((res) => {
  if (!res) {
    pengaturan.setItem('darkMode', false)
  }
})

// initial default fontsize
pengaturan.getItem('fontSize').then((res) => {
  if (!res) {
    pengaturan.setItem('fontSize', '')
  }
})

// // load surat list
// const loadData = async () => {
//   const surat = await store.getItem('surat')
//   store.setItem('installed', false)
//   if (surat === null) {
//     const data = require('~/assets/list.json')
//     data.map((item, i) => {
//       data[i].list = require(`~/assets/surat/${item.nomor}.json`)
//     })
//     store
//       .setItem('surat', data)
//       .then((e) =>
//         console.log('%c Quran data installed!', 'background: #aaffaa')
//       )
//       .catch((e) => console.log(e))
//   }
// }

// export const setInstall = () => {
//   store.setItem('installed', true)
//   return store.getItem('installed')
// }

// const getData = () => {
//   return store.getItem('surat')
// }

// loadData()

export default pengaturan
