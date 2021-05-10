(this["webpackJsonpportfolio-site-react"]=this["webpackJsonpportfolio-site-react"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(8),c=n.n(o),s=n(6),r=n(0),l=function(e){return Object(r.jsx)("h2",{className:"heading-secondary heading-secondary--".concat("light"===e.color?"light":"dark"),children:e.children})},d=function(e){return Object(r.jsx)("footer",{className:"footer",children:"Created by Johnatan Fallen \xa9 2021"})},h=function(e){return Object(r.jsxs)("div",{className:"contact-form__field",children:[Object(r.jsx)("label",{htmlFor:"".concat(e.name.toLowerCase()),children:e.name}),Object(r.jsx)("input",{id:"".concat(e.name.toLowerCase()),name:"".concat(e.name.toLowerCase()),type:e.type,required:!0})]})},m=function(e){return Object(r.jsx)("button",{type:"submit",className:"form-button",children:"Send"})},j=function(e){return Object(r.jsxs)("div",{className:"contact-form__field",children:[Object(r.jsx)("label",{htmlFor:"".concat(e.name.toLowerCase()),children:e.name}),Object(r.jsx)("textarea",{id:"".concat(e.name.toLowerCase()),name:"".concat(e.name.toLowerCase()),cols:30,rows:5})]})},u=function(e){return Object(r.jsx)("div",{className:"contact-form__container",children:Object(r.jsxs)("form",{action:"https://usebasin.com/f/1c2e277eb8a4",method:"POST",className:"contact-form",children:[Object(r.jsx)(h,{name:"Name",type:"text"}),Object(r.jsx)(h,{name:"Email",type:"email"}),Object(r.jsx)(j,{name:"Message"}),Object(r.jsx)(m,{})]})})},b=n(3),p=n(4),f=n.n(p),g=function(e){return Object(r.jsxs)("h1",{className:"heading-primary",children:[Object(r.jsx)("span",{className:"heading-primary__name",children:e.name}),Object(r.jsx)("span",{className:"heading-primary__job-title",children:e.jobTitle})]})},x=function(e){return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)(g,{name:"Johnatan Fallen",jobTitle:"Web Developer"}),Object(r.jsxs)("div",{className:"social__container u-margin-top-medium",children:[Object(r.jsx)("a",{href:"https://github.com/johnatanf/",target:"_blank",rel:"noreferrer",className:"social-item",children:Object(r.jsx)(f.a,{className:"icon icon--social",iconSet:b,icon:"github"})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/johnatanfallen/",target:"_blank",rel:"noreferrer",className:"social-item",children:Object(r.jsx)(f.a,{className:"icon icon--social",iconSet:b,icon:"linkedin2"})})]}),Object(r.jsx)("a",{href:"#section-portfolio",className:"button button--heading",children:Object(r.jsxs)("div",{className:"button__content",children:["View portfolio",Object(r.jsx)(f.a,{className:"icon icon--dark",iconSet:b,icon:"circle-down"})]})})]})},O=function(e){return Object(r.jsx)("main",{children:e.children})},k=function(e){return Object(r.jsx)("nav",{className:"navigation",children:Object(r.jsxs)("ul",{className:"navigation__container",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#section-portfolio",className:"navigation__link",children:"Portfolio"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#section-contact",className:"navigation__link",children:"Contact Me"})})]})})},N=function(e){return Object(r.jsx)("h3",{className:"heading-tertiary",children:e.children})},w=function(e){return Object(r.jsx)("span",{className:"skill",children:e.skill})},v=function(e){return Object(r.jsx)("div",{className:"skills-container",children:e.skills.map((function(e){return Object(r.jsx)(w,{skill:e},e)}))})},_=function(e){return Object(r.jsxs)("div",{className:"project-item",children:[Object(r.jsxs)("div",{className:"project-item__details",children:[Object(r.jsx)(N,{children:e.name}),Object(r.jsx)("p",{className:"project-item__details-description",children:e.description}),Object(r.jsx)(v,{skills:e.skills}),Object(r.jsxs)("div",{className:"project-item__container-buttons",children:[Object(r.jsx)("a",{href:e.demoLink,target:"_blank",rel:"noreferrer",className:"button button--demo",children:"Live Demo"}),Object(r.jsx)("a",{href:e.sourceCodeLink,target:"_blank",rel:"noreferrer",className:"button button--source",children:Object(r.jsxs)("div",{className:"button__content",children:["Source Code",Object(r.jsx)(f.a,{className:"icon icon--light",iconSet:b,icon:"github"})]})})]})]}),Object(r.jsx)("div",{className:"project-item__image project-item__image--".concat(e.imageName)})]})},S=function(e){return Object(r.jsx)("div",{className:"projects-container",children:e.projects.map((function(e){return Object(r.jsx)(_,{name:e.name,description:e.description,demoLink:e.demoLink,sourceCodeLink:e.sourceCodeLink,imageName:e.imageName,skills:e.skills},e.name)}))})},y=function(e){return Object(r.jsx)("section",{id:e.id,className:e.className,children:e.children})};n(18);s.a.initialize("UA-196659371-1"),s.a.pageview(window.location.pathname+window.location.search);var C=[{name:"Todo-list",description:"A simple todo-list where you can create and delete tasks, mark a task as complete, and set a task's priority and due date.",demoLink:"https://johnatanf.github.io/todo-list/",sourceCodeLink:"https://github.com/johnatanf/todo-list",imageName:"todo",skills:["HTML","CSS","React"]},{name:"Country Data",description:"A web app where you can learn more about countries. Searching the name of a country displays more information about it, such as its currencies or land area. You can also rank countries according to a statistic (such as population) to see how they compare with each other.",demoLink:"https://johnatanf.github.io/country-data/",sourceCodeLink:"https://github.com/johnatanf/country-data",imageName:"country",skills:["HTML","CSS","React"]},{name:"Book App",description:"The Book App allows you to save books to your reading list so you can keep track of what to read. Requires a user account (which only takes a minute to make!)",demoLink:"https://johnatanf.github.io/book-app-frontend",sourceCodeLink:"https://github.com/johnatanf/book-app-frontend",imageName:"book",skills:["HTML","SCSS","React","MongoDB","Express","Node.js"]},{name:"Restaurant website",description:"A restaurant website with three basic pages (homepage, about us and reservation).",demoLink:"https://johnatanf.github.io/restaurant-website/",sourceCodeLink:"https://github.com/johnatanf/restaurant-website",imageName:"restaurant",skills:["HTML","SCSS","JavaScript"]},{name:"Hotel website",description:"A website for a hotel, containing a homepage, reservation page, and individual pages for each room type.",demoLink:"https://johnatanf.github.io/rental-website/",sourceCodeLink:"https://github.com/johnatanf/rental-website",imageName:"rental",skills:["HTML","SCSS","GatsbyJS"]}],L=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{}),Object(r.jsx)(x,{}),Object(r.jsxs)(O,{children:[Object(r.jsxs)(y,{id:"section-portfolio",className:"section-portfolio",children:[Object(r.jsx)(l,{color:"dark",children:"Portfolio"}),Object(r.jsx)(S,{projects:C})]}),Object(r.jsxs)(y,{id:"section-contact",className:"section-contact",children:[Object(r.jsx)(l,{color:"light",children:"Contact Me"}),Object(r.jsx)(u,{})]})]}),Object(r.jsx)(d,{})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),M()},3:function(e){e.exports=JSON.parse('{"IcoMoonType":"selection","icons":[{"icon":{"paths":["M1024 512c0-282.77-229.23-512-512-512s-512 229.23-512 512 229.23 512 512 512 512-229.23 512-512zM96 512c0-229.75 186.25-416 416-416s416 186.25 416 416-186.25 416-416 416-416-186.25-416-416z","M317.256 354.744l-90.512 90.512 285.256 285.254 285.254-285.256-90.508-90.508-194.746 194.744z"],"tags":["circle-down","down","circle-bottom","arrow"],"defaultCode":59971,"grid":16,"attrs":[]},"attrs":[],"properties":{"ligatures":"circle-down, down3","name":"circle-down","order":31,"id":324,"prevSize":32},"setIdx":2,"setId":1,"iconIdx":323},{"icon":{"paths":["M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"],"tags":["github","brand","octacat","social"],"defaultCode":60080,"grid":16,"attrs":[]},"attrs":[],"properties":{"ligatures":"github, brand40","name":"github","order":32,"id":433,"prevSize":32},"setIdx":2,"setId":1,"iconIdx":432},{"icon":{"paths":["M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z","M64 384h192v576h-192v-576z","M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"],"tags":["linkedin","brand","social"],"defaultCode":60106,"grid":16,"attrs":[]},"attrs":[],"properties":{"ligatures":"linkedin2, brand65","name":"linkedin2","order":33,"id":459,"prevSize":32},"setIdx":2,"setId":1,"iconIdx":458}],"height":1024,"preferences":{"showGlyphs":true,"showQuickUse":true,"showQuickUse2":true,"showSVGs":true,"fontPref":{"prefix":"icon-","metadata":{"fontFamily":"icomoon"},"metrics":{"emSize":1024,"baseline":6.25,"whitespace":50},"embed":false},"imagePref":{"prefix":"icon-","png":false,"useClassSelector":true,"color":0,"bgColor":16777215,"classSelector":".icon","name":"icomoon","height":32,"columns":16,"margin":16},"historySize":50,"showCodes":true,"gridSize":16}}')}},[[19,1,2]]]);
//# sourceMappingURL=main.01fb5168.chunk.js.map