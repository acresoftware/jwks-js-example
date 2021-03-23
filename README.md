# jwks-js-example
A quick JavaScript example for converting a PEM public key to JWKS.
# Generating a RSA Public Key

A common mechanism for generating an RSA Public Key pair is to use openssh.  

The first step is to create the private key.  To create a 4096bit RSA key with the passphrase 'passphrase' execute the following command:

`ssh-keygen -t rsa -P "passphrase" -b 4096 -m PEM -f private_key.pem`

You can then extract the public key by entering:

`ssh-keygen -f private_key.pem -e -m PEM > public_key.pem`

# Using this example

Once you have generated a key, update the following line to point to the location of your public key:

`var pem = fs.readFileSync('public_key.pem');`

You can then enter `npm start` or `node index.js` to run the example.