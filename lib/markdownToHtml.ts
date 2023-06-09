import { remark } from "remark";
import html from "remark-html";

const mkToHtml = async(mk:string) => {
  const result = await remark().use(html).process(mk);
  return result.toString();
}

export default mkToHtml;