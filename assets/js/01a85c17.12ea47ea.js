"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4013],{1938:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(8933),r=a(1987),l=a(1892),i=a(3414),c=a(845),s=a(2590),m=a(158),o="sidebar_qO4J",u="sidebarItemTitle_UtWj",g="sidebarItemList_JAtL",b="sidebarItem_oCoi",d="sidebarItemLink_ku6I",E="sidebarItemLinkActive_pdVA";function p(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(g,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:b},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:E},e.title))})))))}var f=a(197);function v(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function N(e){return r.createElement(f.Zo,{component:v,props:e})}function h(e){var t=e.sidebar,a=(0,c.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(N,{sidebar:t}):r.createElement(p,{sidebar:t}):null}var k=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,c=e.children,s=(0,n.Z)(e,k),m=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(h,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},a))))}},2188:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(1987),r=a(1892),l=a(158);var i=a(8723),c=a(7344),s=a(1938),m=a(3557),o="tag_NjQg";function u(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:o},n.createElement(m.Z,e))}))),n.createElement("hr",null))}function g(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return n.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return n.createElement(u,{key:e.letter,letterEntry:e})})))}var b=a(4674);function d(e){var t=e.tags,a=e.sidebar,m=(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return n.createElement(i.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},n.createElement(i.d,{title:m}),n.createElement(b.Z,{tag:"blog_tags_list"}),n.createElement(s.Z,{sidebar:a},n.createElement("h1",null,m),n.createElement(g,{tags:t})))}},3557:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(1987),r=a(1892),l=a(2590),i="tag_ADjX",c="tagRegular_SNgJ",s="tagWithCount_IYZN";function m(e){var t=e.permalink,a=e.label,m=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(i,m?s:c)},a,m&&n.createElement("span",null,m))}}}]);