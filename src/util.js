/**
 * 从localStorage中取出指定名称空间中指定key中的数据，并以json格式返回
 * @param {*} namespace
 * @param {*} key
 */
export const getJsonDataFromStorage = (namespace, key) => {
  const dataStorage = localStorage.getItem(namespace);

  if (_.isEmpty(dataStorage)) return '';

  const data = _.get(dataStorage, key);

  if (_.isEmpty(data)) return '';

  return JSON.parse(data);
};

/**
 * 将json数据同步存储到localStorage中
 * @param {*} jsonData
 * @param {*} namespace
 * @param {*} key
 */
export const sync2Storage = (jsonData, namespace, key) => {
  const dataStorage = localStorage.getItem(namespace);

  let result;
  if (!dataStorage) {
    result = {[namespace]: {[key]: jsonData}};
  } else {
    const jsonNamespace = JSON.parse(dataStorage);
    jsonNamespace[key] = jsonData;
    result = jsonNamespace;
  }

  result = JSON.stringify(result);
  localStorage.setItem(namespace, result);

  return result;
};
