var recipes ={}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value


  delete newObj[key]

  return newObj
}
function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)
  delete Object[key]
  return object 
  
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete Object[key]
  return object
}