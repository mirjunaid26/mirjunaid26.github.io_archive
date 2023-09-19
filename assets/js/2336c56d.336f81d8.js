"use strict";(self.webpackChunkhpc_tutorial_website=self.webpackChunkhpc_tutorial_website||[]).push([[4911],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:6},s="Introduction to SLURM",i={unversionedId:"tutorial-basics/slurm",id:"tutorial-basics/slurm",title:"Introduction to SLURM",description:"Docusaurus Plushie",source:"@site/docs/tutorial-basics/slurm.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/slurm",permalink:"/docs/tutorial-basics/slurm",draft:!1,editUrl:"https://mirjunaid26.github.io/docs/tutorial-basics/slurm.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to request access on GLiCID Cluster?",permalink:"/docs/tutorial-basics/request-access"},next:{title:"GUIX",permalink:"/docs/tutorial-basics/guix"}},u={},l=[],c={toc:l},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-slurm"},"Introduction to SLURM"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus Plushie",src:r(2965).Z,width:"1200",height:"1098"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://slurm.schedmd.com/documentation.html"},"SLURM"))," (Simple Linux Utility for Resource Management) is a popular job scheduling and workload management system used in many high-performance computing environments. SLURM allows users to submit and manage jobs on a cluster of computers. It provides a framework for allocating resources (such as CPU cores, memory, and GPUs) and scheduling jobs efficiently."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Logging in: To use SLURM, you need access to a cluster where SLURM is installed. Log in to the cluster using SSH or any other method provided by your system administrator."),(0,o.kt)("li",{parentName:"ul"},"Job Script: Create a job script that describes the resources required for your job and the commands to be executed. A typical SLURM job script is a shell script with special directives recognized by SLURM. Here's an example job script:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#!/bin/bash\n#SBATCH --job-name=myjob\n#SBATCH --output=output.txt\n#SBATCH --nodes=1\n#SBATCH --ntasks-per-node=4\n\n# Commands to run\necho "Hello, World!"\n\n')),(0,o.kt)("p",null,'In this example, the job script specifies the job name, the output file name, the number of nodes, and the number of tasks per node. The last line is a sample command to print "Hello, World!".'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Submitting a Job: Use the sbatch command to submit your job script to SLURM:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sbatch job_script.sh\n\n")),(0,o.kt)("p",null,"This will submit your job to the SLURM scheduler for execution."),(0,o.kt)("p",null,"You will then be given a message with the ID for that job:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Submitted batch job 208\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Checking Job Status: You can check the status of your jobs using the squeue command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"squeue -u your_username\n")),(0,o.kt)("p",null,"This will display information about your jobs, such as job ID, job name, status, and other details."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Managing Jobs: You can cancel a running job using the scancel command followed by the job ID:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scancel job_id\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To view detailed information about a specific job, including its resource usage, use the scontrol command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scontrol show job job_id\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Job Output: By default, SLURM captures the standard output and standard error of your job in a file. In the job script example, the output is redirected to output.txt. After the job finishes, you can examine this file to see the job's output.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://slurm.schedmd.com/documentation.html"},"SLURM Official Docs"))))}m.isMDXComponent=!0},2965:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/slurm-f240e7d141db178f71f6a64e85529439.png"}}]);