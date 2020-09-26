import markdown_it_sub from "markdown-it-sub";
import markdown_it_sup from "markdown-it-sup";
import markdown_it_footnote from "markdown-it-footnote";
import markdown_it_task_lists from "markdown-it-task-lists";
import markdown_it_attrs from "markdown-it-attrs";
import markdown_it_imsize from "markdown-it-imsize";

import { MarkdownConfig } from "vuepress/config";

export default <MarkdownConfig>{
  lineNumbers: true,
  extendMarkdown: (md) => {
    md.set({ breaks: true });
    md.use(markdown_it_sub);
    md.use(markdown_it_sup);
    md.use(markdown_it_footnote);
    md.use(markdown_it_task_lists);
    md.use(markdown_it_attrs, {});
    md.use(markdown_it_imsize);
  },
};
