export function monggoseTransformBasic(doc, ret) {
  return transformId(ret);
}

export function transformId(doc) {
  doc.id = doc._id.toString();
  delete doc._id;
  delete doc.__v;
  return doc;
}
