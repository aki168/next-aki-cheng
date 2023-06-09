import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const mdFilesDirec = join(process.cwd(), "_posts");

export const getSlugList = () => fs.readdirSync(mdFilesDirec);

type Items = {
  [key: string]: string
}

export const getPostBySlug = (filename: string, fields: string[]) => {
  const onlySlug = filename.replace(/\.md$/, "");
  const fullPath = join(mdFilesDirec, `${onlySlug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const thisFile = matter(fileContent);

  const items: Items = {};

  fields.forEach((field)=>{
    if (field === "slug") items[field] = onlySlug
    if (field === "content") items[field] = thisFile.content
    if (thisFile.data[field]) items[field] = thisFile.data[field]
    return items 
  })
  return items
};

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getSlugList();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields));
    // .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
  return posts;
};
