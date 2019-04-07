// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateTrashTalk function
function generateTrashTalk(target) {

  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  // create a collection to store things user picked up
  let collection = ['身為一個']

  switch (target) {
    case 'engineer':
      collection = collection.concat('工程師，', sample(task.engineer))
      break
    case 'designer':
      collection = collection.concat('設計師，', sample(task.designer))
      break
    case 'entrepreneur':
      collection = collection.concat('創業家，', sample(task.entrepreneur))
      break
  }

  collection = collection.concat('，', sample(phrase), '吧!')

  return collection.join('')
}

// export generateTrashTalk function for other files to use
module.exports = generateTrashTalk
