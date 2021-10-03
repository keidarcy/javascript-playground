const Client = require('ssh2-sftp-client');
const client = new Client();
const fs = require('fs');
const stringToStream = require('string-to-stream');
const iconv = require('iconv-lite');

const config = {
  host: 'localhost',
  port: 2222,
  username: '<username>',
  // password: 'pass',
  privateKey: fs.readFileSync('<private key path>'),
  // privateKey: Buffer.from(process.env.test_key),
};

let data;

(async () => {
  try {
    const localFolder = '/tmp/';
    const remotePath = '/<remote path>';
    await client.connect(config);

    data = await client.list(remoteFolder);
    console.log('list:', data);

    data = await client.put(
      iconv.encode('日本語\r\nこれは日本語\r\nににに', 'Shift_JIS') /** string buffer */,
      remotePath
    );

    console.log('put:', data);
    // data = await client.fastPut(localFile, remoteFileremoteFile);
    // console.log('fastPut:', data);

    data = await client.delete(remotePath);
    console.log('delete:', data);

    data = await client.list(remotePath);
    console.log('list:', data);

    client.get(remotePath, localFolder);

    client.end();
  } catch (error) {
    client.end();
  }
})();
