export default function appendQueryString(url, queryVars) {
  const firstSeperator = url.indexOf('?') == -1 ? '?' : '&';
  let queryStringParts = [];
  for (var key in queryVars) {
    if (Array.isArray(queryVars[key])) {
      queryVars[key].forEach(val => {
        queryStringParts.push(key + '[]=' + encodeURIComponent(val));
      });
    } else {
      queryStringParts.push(key + '=' + encodeURIComponent(queryVars[key]));
    }
  }
  const queryString = queryStringParts.join('&');
  return url + firstSeperator + queryString;
}
