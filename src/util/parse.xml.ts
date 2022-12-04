const xml2jsParser = require("xml2js").parseString;

export const parseXml2Json = async (xml: string) => {
  if (!xml || xml.trim() === "") {
    return Promise.resolve(null);
  }
  return new Promise((resolve, reject) => {
    xml2jsParser(xml, (err: any, result: any) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};
