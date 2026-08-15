import { BeforeAll, Before, After, AfterAll } from '@cucumber/cucumber'

import { unlink, access } from 'node:fs/promises'

async function checkFile (file) {
  let isPresent = false
  try {
    await access(file)
    isPresent = true
  } catch (e) {
  }
  return isPresent
}

BeforeAll(async function () {
  const file = 'data/events.json'
  const fileExist = await checkFile(file)
  if (fileExist) {
    await unlink(file)
  }
})

// AfterAll(function () {
// 	console.log('After everything')
// })

Before({ tags: '@db' }, async function () {
  const file = 'data/events.json'
  const fileExist = await checkFile(file)
  if (fileExist) {
	  await unlink(file)
  }
})

Before({ tags: '@db' }, async function () {
  const file1 = 'data/does-not-exist.json'
  const fileExist1 = await checkFile(file1)
  if (fileExist1) {
    await unlink(file1)
  }
  // const file2 = 'data/does-exist.json'
  // const fileExist2 = await checkFile(file2)
  // if(fileExist2){
  // 	await unlink(file2)
  // }
})
