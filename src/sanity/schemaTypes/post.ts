// src/sanity/snchemaTypes/post.ts
export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "mainImage", title: "Main Image", type: "image" },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
  ],
};