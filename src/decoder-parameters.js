/**
 *  A decoder parameters function to transform params format in object format
 *
 * @export
 * @param {*} data - string with key/value to transform
 * @param {*} [serialize] - Serialize to convert keys into output keys [optional]
 * @returns
 */
function decoderParameters (data = '', serialize) {
  const params = decodeURI(data.startsWith('?') ? data.slice(1) : data);
  const paramsSplit = params.split('&');

  return paramsSplit.reduce((previous, current) => {
    const [index, value] = current.split('=');

    const key = (serialize && serialize[index]) || index;

    previous[key] = getValueTransformed(value);

    return previous;
  }, {});
}

function getValueTransformed (value) {
  if ((value.startsWith('[') && value.endsWith(']')) || (value.startsWith('{') && value.endsWith('}'))) {
    return JSON.parse(value);
  }

  return value;
}
