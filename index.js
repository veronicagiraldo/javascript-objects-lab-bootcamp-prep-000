var recipes ={}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 const newObj = Object.assign({}, object)

  delete newObj[key]

  return newObj
}
