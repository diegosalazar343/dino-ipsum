export default class DinoService {

  static dinoIpsum(keyword) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const urls = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=15`;
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        }  else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
