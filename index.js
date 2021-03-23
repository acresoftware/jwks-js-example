const fs = require('fs');
const rsaPemToJwk = require('rsa-pem-to-jwk');
const uuid= require('uuid').v4; 

var pem = fs.readFileSync('public_key.pem');

var keyMetadata = {};
keyMetadata.use =  'sig';
keyMetadata.nbf = Math.round(Date.now()/1000);
keyMetadata.kid = uuid();
var jwks = {};
jwks.keys = [];
jwks.keys[0] = rsaPemToJwk(pem, keyMetadata, 'public');
fs.writeFileSync('jwks.json', JSON.stringify(jwks, null, 2));