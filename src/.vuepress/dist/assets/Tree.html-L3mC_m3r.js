import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as i,c as u,e as c,w as a,a as l,b as n,d as s}from"./app-i4TuCgvk.js";const k="/assets/binary_tree_terminology-3FfcDG8M.png",d="/assets/binary_tree_dfs-aub8vGQT.png",m={},b=l('<h2 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h2><p>树是一种非线性数据结构。如果一种树中每个节点最多只有两个子节点，那么我们将它称为 “二叉树”。二叉树的每个节点包含节点值、左子节点引用和右子节点引用。</p><p>二叉树的常用术语如图所示：</p><ul><li><p>根节点：二叉树的顶层节点。</p></li><li><p>叶节点：没有子节点的节点，即度为 0。</p></li><li><p>边：连接两个节点的线段。</p></li><li><p>节点所在的层：根节点所在层为 1，向下递增。</p></li><li><p>节点的度：子节点的数量。</p></li><li><p>节点的深度：根节点到该节点的距离。</p></li><li><p>节点的高度：最远叶节点到该节点的距离。</p></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>我们将 “深度” 和 “高度” 定义为 “经过的边的数量”，也有些说法是将其定义为 “经过的节点的数量”。在这种情况下，深度和高度都需要加 1。</p></div><figure><img src="'+k+'" alt="二叉树的常用术语" tabindex="0" loading="lazy"><figcaption>二叉树的常用术语</figcaption></figure><p>二叉树还有几个比较重要的特性：</p>',7),v=n("ul",null,[n("li",null,[n("p",null,[s("二叉树第 n 层的最大节点数为："),n("code",null,"2^(n - 1)"),s("，例如第 3 层的最大节点数为 4。")])]),n("li",null,[n("p",null,[s("高度为 m 的二叉树的最大节点总数为："),n("code",null,"2^(n + 1) - 1"),s("，例如高度为 2 的二叉树的最大节点总数为 7。")])]),n("li",null,[n("p",null,[s("对于非空二叉树，如果叶节点（度为 0）数为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mn",null,"0")]),n("annotation",{encoding:"application/x-tex"},"n0")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord"},"0")])])]),s("，度为 2 的非叶节点数为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mn",null,"2")]),n("annotation",{encoding:"application/x-tex"},"n2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord"},"2")])])]),s("，则满足关系："),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mn",null,"0")]),n("annotation",{encoding:"application/x-tex"},"n0")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord"},"0")])])]),s(" = "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mn",null,"2")]),n("annotation",{encoding:"application/x-tex"},"n2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mord"},"2")])])]),s(" + 1。")])])],-1),y=n("h2",{id:"二叉树遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二叉树遍历","aria-hidden":"true"},"#"),s(" 二叉树遍历")],-1),w=n("p",null,[s("二叉树常见的遍历方式有前序遍历、中序遍历和后序遍历等，它们都属于"),n("strong",null,"深度优先遍历"),s("。就像是绕着整棵二叉树的外围走一圈，在每个节点都会遇到三个位置，分别对应前序遍历、中序遍历和后序遍历。")],-1),h=n("figure",null,[n("img",{src:d,alt:"二叉搜索树的前序、中序、后序遍历",tabindex:"0",loading:"lazy"}),n("figcaption",null,"二叉搜索树的前序、中序、后序遍历")],-1),g=n("p",null,"深度优先遍历通常基于递归实现。通过代码分析，遍历开始后，先递归访问左子节点，如果左子节点为 null，再访问右子节点，如果右子节点不为 null，继续递归访问其左子节点；否则，执行结束，当前函数出栈。在上一层执行栈中，访问右子节点。",-1),f=n("p",null,"前序遍历、中序遍历和后序遍历的区别在于，它们的访问时机不同：前序遍历的访问时机是在递归处理左子节点之前；中序遍历的访问时机是在递归处理左子节点和访问上一层的右子节点之间，即递归处理左子节点的函数出栈后；后序遍历的访问时机是在递归处理右子节点之后，即递归处理右子节点的函数出栈后。",-1),T=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("Pair"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
  val`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),s(`
  
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"="),s(` key
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"="),s(` val
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  pair`),n("span",{class:"token operator"},":"),s(" Pair"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(`
  left`),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
  right`),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
  
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("pair"),n("span",{class:"token operator"},":"),s(" Pair"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("pair "),n("span",{class:"token operator"},"="),s(` pair
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"NodeType"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"root"'),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},'"left"'),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},'"right"'),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("BinaryTree"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  root`),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(`
  
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Pair"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(" root "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 前序遍历
   */`),s(`
  `),n("span",{class:"token function"},"preTraverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" type"),n("span",{class:"token operator"},":"),s(" NodeType"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"root"'),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 递归遍历节点
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"target"),s(` - 目标节点
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"type"),s(` - 节点类型（根节点、左子节点、右子节点）
     */`)]),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(" type"),n("span",{class:"token operator"},":"),s(" NodeType"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(`
      `),n("span",{class:"token comment"},"// 1. 访问目标节点"),s(`
      `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" type"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 2. 递归处理左子节点"),s(`
      `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"left"'),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 3. 递归处理右子节点"),s(`
      `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"right"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 中序遍历
   */`),s(`
  `),n("span",{class:"token function"},"syncTraverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" type"),n("span",{class:"token operator"},":"),s(" NodeType"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"root"'),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 递归遍历节点
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"target"),s(` - 目标节点
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"type"),s(` - 节点类型（根节点、左子节点、右子节点）
     */`)]),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(" type"),n("span",{class:"token operator"},":"),s(" NodeType"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(`
      `),n("span",{class:"token comment"},"// 1. 递归处理左子节点"),s(`
      `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"left"'),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 2. 访问目标节点"),s(`
      `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" type"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 3. 递归处理右子节点"),s(`
      `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"right"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},`/**
   * 后序遍历
   */`),s(`
  `),n("span",{class:"token function"},"postTraverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" type"),n("span",{class:"token operator"},":"),s(" NodeType"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"root"'),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 递归遍历节点
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"target"),s(` - 目标节点
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"type"),s(` - 节点类型（根节点、左子节点、右子节点）
     */`)]),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(" type"),n("span",{class:"token operator"},":"),s(" NodeType"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(`
      `),n("span",{class:"token comment"},"// 1. 递归处理左子节点"),s(`
      `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"left"'),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 2. 递归处理右子节点"),s(`
      `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"right"'),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 3. 访问目标节点"),s(`
      `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" type"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=l('<h2 id="二叉搜索树" tabindex="-1"><a class="header-anchor" href="#二叉搜索树" aria-hidden="true">#</a> 二叉搜索树</h2><p>二叉搜索树是一种特殊的二叉树，它满足以下条件：</p><ul><li><p>对于根节点，左子树中所有节点的值 &lt; 根节点的值 &lt; 右子树中所有节点的值。</p></li><li><p>任意节点的左、右子树也是二叉搜索树，同样满足上述条件。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>二叉搜索树与<strong>二分查找</strong>的原理相似，查找效率非常高。</p></div>',4),x=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},[s("BinarySearchTree"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},[s("BinaryTree"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" Pair"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 插入节点
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"pair"),s(` - 节点的值（键值对）
   */`)]),s(`
  `),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("pair"),n("span",{class:"token operator"},":"),s(" Pair"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"TreeNode"),n("span",{class:"token punctuation"},"("),s("pair"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token comment"},"// 根节点为 null，直接插入到根节点"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(` node
      `),n("span",{class:"token keyword"},"return"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 递归比较节点
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"current"),s(` - 当前节点
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"target"),s(` - 目标节点
     */`)]),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("pair"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"<"),s(" target"),n("span",{class:"token punctuation"},"."),s("pair"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 目标节点更大，向左子树插入"),s(`
        `),n("span",{class:"token comment"},"// 左子树为 null，直接插入"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("target"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(" target"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(` current
        `),n("span",{class:"token comment"},"// 左子树存在节点，继续比较"),s(`
        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 目标节点小于插入的节点，向右子树插入"),s(`
        `),n("span",{class:"token comment"},"// 右子树为 null，直接插入"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("target"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(" target"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(` current
        `),n("span",{class:"token comment"},"// 右子树存在节点，继续比较"),s(`
        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 查找节点
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"target"),s(` - 目标节点的 key
   */`)]),s(`
  `),n("span",{class:"token function"},"search"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token punctuation"},")"),s(`
    
    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 递归查找节点
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"current"),s(` - 当前节点
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"target"),s(` - 目标节点
     */`)]),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("current"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("pair"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},">"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("pair"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"<"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"recursion"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("pair"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"==="),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(` current
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token comment"},"/* 循环实现 */"),s(`
    `),n("span",{class:"token comment"},"// let current = this.root"),s(`
    `),n("span",{class:"token comment"},"// while (current) {"),s(`
    `),n("span",{class:"token comment"},"//   if (current.pair.key > target) {"),s(`
    `),n("span",{class:"token comment"},"//     current = current.left"),s(`
    `),n("span",{class:"token comment"},"//     continue"),s(`
    `),n("span",{class:"token comment"},"//   }"),s(`
    `),n("span",{class:"token comment"},"//   if (current.pair.key < target) {"),s(`
    `),n("span",{class:"token comment"},"//     current = current.right"),s(`
    `),n("span",{class:"token comment"},"//     continue"),s(`
    `),n("span",{class:"token comment"},"//   }"),s(`
    `),n("span",{class:"token comment"},"//   if (current.pair.key === target) return current"),s(`
    `),n("span",{class:"token comment"},"// }"),s(`
    `),n("span",{class:"token comment"},"// return null"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 移除节点
   * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"target"),s(` - 目标节点的 key
   */`)]),s(`
  `),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"left"'),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},'"right"'),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"left"'),s(`
    `),n("span",{class:"token keyword"},"let"),s(" parent"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`root
    
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current "),n("span",{class:"token operator"},"&&"),s(" target "),n("span",{class:"token operator"},"!=="),s(" current"),n("span",{class:"token punctuation"},"."),s("pair"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      type `),n("span",{class:"token operator"},"="),s(" target "),n("span",{class:"token operator"},"<"),s(" current"),n("span",{class:"token punctuation"},"."),s("pair"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},'"left"'),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"right"'),s(`
      parent `),n("span",{class:"token operator"},"="),s(` current
      current `),n("span",{class:"token operator"},"="),s(" parent"),n("span",{class:"token punctuation"},"["),s("type"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("current"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"warn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"target: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s(" target "),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," is not found"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token comment"},"/* 找到目标节点 */"),s(`
    
    `),n("span",{class:"token comment"},"// current => both (left & right)"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"&&"),s(" current"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 查找后继节点，并用后继节点替换目标节点的位置"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" successor "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getSuccessor"),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},","),s(" parent"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("parent"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 根节点（没有父节点）"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(` successor
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 非根节点"),s(`
        parent`),n("span",{class:"token punctuation"},"["),s("type"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` successor
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"return"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token comment"},"// current => only left | only right | none"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("parent"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 根节点（没有父节点）"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root "),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"||"),s(" current"),n("span",{class:"token punctuation"},"."),s(`right
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"// 非根节点"),s(`
      parent`),n("span",{class:"token punctuation"},"["),s("type"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"||"),s(" current"),n("span",{class:"token punctuation"},"."),s(`right
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 查找后继节点
     * `),n("span",{class:"token keyword"},"@description"),s(` 也就是找 > 目标节点的下一个节点（右节点的最后一个左子节点）
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"target"),s(` - 目标节点
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"parent"),s(` - 目标节点的父节点
     */`)]),s(`
    `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getSuccessor"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" parent"),n("span",{class:"token operator"},":"),s(" TreeNode"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" successorParent "),n("span",{class:"token operator"},"="),s(` parent
      `),n("span",{class:"token keyword"},"let"),s(" successor "),n("span",{class:"token operator"},"="),s(` target
      `),n("span",{class:"token keyword"},"let"),s(" current "),n("span",{class:"token operator"},"="),s(" target"),n("span",{class:"token punctuation"},"."),s(`right
      
      `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("current"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        successorParent `),n("span",{class:"token operator"},"="),s(` successor
        successor `),n("span",{class:"token operator"},"="),s(` current
        current `),n("span",{class:"token operator"},"="),s(" current"),n("span",{class:"token punctuation"},"."),s(`left
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token comment"},"// 将目标节点的左子节点赋值给后继节点的 left 指针"),s(`
      successor`),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" target"),n("span",{class:"token punctuation"},"."),s(`left
      `),n("span",{class:"token comment"},"// 如果后继节点不是目标节点的右子节点，可能是 target.right.left.left..."),s(`
      `),n("span",{class:"token comment"},"// 也就是隔层替换目标节点"),s(`
      `),n("span",{class:"token comment"},"// 需要改变后继节点的父节点的 left 指针和后继节点的 right 指针"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("successor "),n("span",{class:"token operator"},"!=="),s(" target"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 将后继节点的右子节点（可能为 null，但不影响）赋值给它的父节点的 left 指针"),s(`
        `),n("span",{class:"token comment"},"// 不需要考虑后继节点的左子节点，因为后继节点是最后一个左子节点"),s(`
        successorParent`),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"="),s(" successor"),n("span",{class:"token punctuation"},"."),s(`right
        `),n("span",{class:"token comment"},"// 将目标节点的右子节点赋值给后继节点的 right 指针"),s(`
        successor`),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"="),s(" target"),n("span",{class:"token punctuation"},"."),s(`right
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"return"),s(` successor
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 最大值
   * `),n("span",{class:"token keyword"},"@description"),s(` 一直向右查找子节点
   */`)]),s(`
  `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`root
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s(`right
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},"."),s(`pair
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   * 最小值
   * `),n("span",{class:"token keyword"},"@description"),s(` 一直向左查找子节点
   */`)]),s(`
  `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" node "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s(`root
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s(`left
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" node"),n("span",{class:"token punctuation"},"."),s(`pair
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("h2",{id:"平衡树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#平衡树","aria-hidden":"true"},"#"),s(" 平衡树")],-1),M=n("h2",{id:"红黑树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#红黑树","aria-hidden":"true"},"#"),s(" 红黑树")],-1);function P(S,B){const o=r("Tabs");return i(),u("div",null,[b,v,y,w,h,g,f,c(o,{id:"90",data:[{id:"TS"}],"tab-id":"code"},{title0:a(({value:t,isActive:e})=>[s("TS")]),tab0:a(({value:t,isActive:e})=>[T]),_:1}),_,c(o,{id:"119",data:[{id:"TS"}],"tab-id":"code"},{title0:a(({value:t,isActive:e})=>[s("TS")]),tab0:a(({value:t,isActive:e})=>[x]),_:1}),N,M])}const V=p(m,[["render",P],["__file","Tree.html.vue"]]);export{V as default};
