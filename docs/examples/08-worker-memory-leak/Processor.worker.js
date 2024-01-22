importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

async function process(array) {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("finished");
      resolve(new Uint8Array(array));
    }, 50);
  });
  return Comlink.transfer(result, [result.buffer]);
}

const service = {
  process,
};

Comlink.expose(service);
