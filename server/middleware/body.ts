import formidable from "formidable"
import { firstValues } from 'formidable/src/helpers/firstValues.js';

/**
 * @param {import('http').IncomingMessage} req
 */
function parseMultipartNodeRequest(req) {
    return new Promise((resolve, reject) => {
        /** @see https://github.com/node-formidable/formidable/ */
        const form = formidable({ multiples: true });
        form.parse(req, (error, fields, files) => {
            if (error) {
                reject(error);
                return;
            }
            const data = firstValues(form, fields, [])
            resolve({ ...data, ...files });
        });
    });
}

export default defineEventHandler(async(event) => {
  const headers = getRequestHeaders(event);
  const method = event.method

  let body;
  if(method.toLowerCase() != "get") {
      if (headers["content-type"]?.includes("multipart/form-data")) {
          body = await parseMultipartNodeRequest(event.node.req);
          event.context.body = body;
      } else {
          body = await readBody(event);
          event.context.body = body;
      }
  }
})