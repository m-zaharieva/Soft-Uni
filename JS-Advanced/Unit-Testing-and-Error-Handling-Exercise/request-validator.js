function requestValidator(httpObject) {
    validatesMethod(httpObject);
    validatesUri(httpObject); 
    validVersion(httpObject);
    validMessage(httpObject);

    function validatesMethod(httpObj) {
        let validInputs = ['GET', 'POST', 'DELETE', 'CONNECT'];
        if (!validInputs.includes(httpObj.method) || httpObj.method === undefined) {
            throw new Error('Invalid request header: Invalid Method');
        }
    }

    function validatesUri(httpObj) {
        let regex = /^[\w\.\*]+$/;
        if (!regex.test(httpObj.uri) || httpObj.uri === undefined) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function validVersion(httpObj) {
        let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        if (!validVersions.includes(httpObj.version) || httpObj.version === undefined) {
            throw new Error('Invalid request header: Invalid Version');
        } 
    }

    function validMessage(httpObj) {
        let regex = /^[\W]*$|^[^<>\\&'"]+$/; 
        if (!regex.test(httpObj.message) || httpObj.message === undefined) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return httpObject;
}

console.log(requestValidator(
    {
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
      }
))