"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[1645],{9508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>T,contentTitle:()=>N,default:()=>E,frontMatter:()=>I,metadata:()=>V,toc:()=>O});var s=t(5893),r=t(1151),a=t(7294),l=t(6010),i=t(2466),c=t(6550),o=t(469),u=t(1980),d=t(7392),h=t(12);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,c.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,u]=g({queryString:t,groupId:s}),[d,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,h.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),v=(()=>{const e=c??d;return x({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,r]),tabValues:r}}var b=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=c[t].value;s!==r&&(u(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,l.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=v(e);return(0,s.jsxs)("div",{className:(0,l.Z)("tabs-container",f.tabList),children:[(0,s.jsx)(j,{...e,...n}),(0,s.jsx)(w,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,s.jsx)(k,{...e,children:p(e.children)},String(n))}const S={tabItem:"tabItem_Ymn6"};function D(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.Z)(S.tabItem,r),hidden:t,children:n})}const I={sidebar_position:4},N="Device Settings",V={id:"disc/device-settings/device-settings",title:"Device Settings",description:"Sync between personal devices",source:"@site/docs/disc/device-settings/device-settings.mdx",sourceDirName:"disc/device-settings",slug:"/disc/device-settings/",permalink:"/docs/disc/device-settings/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/disc/device-settings/device-settings.mdx",tags:[],version:"current",lastUpdatedBy:"dextermallo",lastUpdatedAt:1701176761,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Disc",permalink:"/docs/category/disc"}},T={},O=[{value:"1. Setting up a macOS / Linux Device",id:"1-setting-up-a-macos--linux-device",level:2},{value:"1.1. Application",id:"11-application",level:3},{value:"1.2. Package Manager",id:"12-package-manager",level:2},{value:"1.2. Terminals",id:"12-terminals",level:3},{value:"1.3. Dev Utils",id:"13-dev-utils",level:3},{value:"1.4. Fine-tuning",id:"14-fine-tuning",level:3},{value:"2. Setting up a Workstation",id:"2-setting-up-a-workstation",level:2}];function C(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"device-settings",children:"Device Settings"}),"\n",(0,s.jsx)(n.p,{children:"Sync between personal devices"}),"\n",(0,s.jsx)(n.p,{children:"key items:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"use container"}),"\n",(0,s.jsx)(n.li,{children:"use same package manager"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1-setting-up-a-macos--linux-device",children:"1. Setting up a macOS / Linux Device"}),"\n",(0,s.jsx)(n.h3,{id:"11-application",children:"1.1. Application"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["General","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.microsoft.com/en-us/edge",children:"Microsoft Edge"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["install VSCode command ",(0,s.jsx)(n.code,{children:"code"})," via searching in VSCode with shift + cmd + P"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.raycast.com/",children:"Raycast (macOS)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.notion.so/",children:"Notion (macOS)"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Optional","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://freemacsoft.net/appcleaner/",children:"AppCleaner"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://apps.apple.com/us/app/horo-timer-for-menu-bar/id1437226581?mt=12",children:"Horo"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.sublimetext.com/",children:"Sublime Text"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://iina.io/",children:"IINA"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.postman.com/",children:"Postman"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.virtualbox.org/",children:"VirtualBox"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.mediaatelier.com/CheatSheet/",children:"CheatSheet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://fig.io/",children:"Fig"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://tbswitcher.rugarciap.com/",children:"Turbo Boost Switcher"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://dbeaver.io/",children:"DBeaver"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"12-package-manager",children:"1.2. Package Manager"}),"\n",(0,s.jsxs)(y,{values:[{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],children:[(0,s.jsx)(D,{value:"macos",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'# REF: https://brew.sh/\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})})}),(0,s.jsx)(D,{value:"linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"@TODO: WIP\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["install brew","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'# https://docs.brew.sh\nxcode-select --install\n\nmkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew\n\neval "$(homebrew/bin/brew shellenv)"\nbrew update --force --quiet\nchmod -R go-w "$(brew --prefix)/share/zsh"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["install via Brewfile","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"brew bundle\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["install oh my zsh & powerlevel10k","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'# install oh my zsh\n# https://ohmyz.sh/#install\nsh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n\n# install powerlevel10k\n# https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k\ngit clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k\n# install font\nhttps://github.com/romkatv/powerlevel10k#manual-font-installation\n\n# plugins\n# https://github.com/unixorn/awesome-zsh-plugins#plugins\n# https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md\n# https://github.com/marlonrichert/zsh-autocomplete\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["install nvm","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'# https://github.com/nvm-sh/nvm#installing-and-updating\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n\n# update ~/.zshrc\nexport NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"12-terminals",children:"1.2. Terminals"}),"\n",(0,s.jsx)(n.h3,{id:"13-dev-utils",children:"1.3. Dev Utils"}),"\n",(0,s.jsx)(n.h3,{id:"14-fine-tuning",children:"1.4. Fine-tuning"}),"\n",(0,s.jsxs)(y,{values:[{label:"macOS",value:"macos"},{label:"Linux",value:"linux"}],children:[(0,s.jsxs)(D,{value:"macos",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"- others\n"})}),(0,s.jsx)(n.h1,{id:"scale-up-magic-mouse-speed",children:"scale up magic mouse speed"}),(0,s.jsx)(n.p,{children:"defaults write -g com.apple.mouse.scaling  6"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"- [sudo permission with ID Touch](https://it.digitaino.com/use-touchid-to-authenticate-sudo-on-macos/)\n\n1. Disable spotlight.\n2. Delete unused App.\n3. Disable Siri.\n4. Maximum keyboard and trackpad speed.\n5. Adjust control center.\n"})})]}),(0,s.jsx)(D,{value:"linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"@TODO: WIP\n"})})}),(0,s.jsx)(D,{value:"workstation",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"@TODO: WIP\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"2-setting-up-a-workstation",children:"2. Setting up a Workstation"})]})}function E(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(C,{...e})}):C(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var s=t(7294);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);