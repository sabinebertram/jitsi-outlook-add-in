function dec2hex (dec) {
  return dec < 10
    ? '0' + String(dec)
    : dec.toString(16)
}

function generateId (len) {
  var arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
}

function generateHTMLContent (id, callname) {
  return `
  <hr>
  <h2><a href="https://meet.jit.si/${id}/${callname}">Join Jitsi Meeting<a></h2>
  <p><a href="https://jitsi.org/">What is Jitsi?</a> | <a href="https://meet.jit.si/${id}/static/dialInInfo.html?room=${callname}">Dial-in Info</a></p>
  <hr>
  `
}

module.exports = {
  generateId,
  generateHTMLContent
}