<template>
<div>

  <Editor
    :value="value"
    :plugins="plugins"
    @change="handleChange"
    :uploadImages="uploadImage"
    :locale="zhHans"
  />
  <Viewer
      class="viewer"
      :tabindex="2" 
      :sanitize="23"
      :value="value"
      :plugins="plugins"
      :locale="zhHans"
    ></Viewer>
</div>
</template>

<script>
import "bytemd/dist/index.min.css";
import { Editor,Viewer } from "@bytemd/vue";
import breaks from "@bytemd/plugin-breaks"; // 支持break
import frontmatter from "@bytemd/plugin-frontmatter"; // 解析frontmatter
import gemoji from "@bytemd/plugin-gemoji"; // 支持表情简码
import gfm from "@bytemd/plugin-gfm"; //支持 GFM（自动链接文字、删除线、表格、任务列表）
import highlightssr from "@bytemd/plugin-highlight-ssr"; // 突出显示代码块（兼容ssr）
import mathssr from "@bytemd/plugin-math-ssr"; // 支持数学公式（兼容ssr）
import mediumZoom from "@bytemd/plugin-medium-zoom"; //缩放图片
import mermaid from "@bytemd/plugin-mermaid"; // 支持更多图标

import zhHans from "bytemd/lib/locales/zh_Hans.json";
import gfmLocale from "@bytemd/plugin-gfm/locales/zh_Hans.json";
import mathLocale from "@bytemd/plugin-math/locales/zh_Hans.json";
import mermaidLocale from "@bytemd/plugin-mermaid/locales/zh_Hans.json";
import 'juejin-markdown-themes/dist/channing-cyan.min.css'

//将所有的扩展功能放入插件数组中
const plugins = [
  breaks(),
  frontmatter(),
  gemoji(),
  gfm({ locale: gfmLocale }),
  highlightssr(),
  mathssr({ locale: mathLocale }),
  mediumZoom(),
  mermaid({ locale: mermaidLocale }),
];

export default {
  name: "UploadArticle",
  components: { Editor,Viewer  },
  data() {
    return {
      value: "",
      plugins,
      zhHans,
    };
  },
  methods: {
    handleChange(v) {
      this.value = v;
      console.log(document.querySelector('.viewer').querySelectorAll('h1,h2,h3,h4,h5,h6'));
    },
    uploadImage(files) {
      console.log(files);
    },
  },
};
</script>

<style>
</style>