import{G as t,U as d,b as p}from"./index-Dw2Svxa_.js";class h{constructor(){this.supportCascades=!1}loadCubeData(i,e,c,n,a){if(Array.isArray(i))return;const s=t(i);if(s){e.width=s.width,e.height=s.width;try{d(e,s),p(e,i,s).then(()=>{e.isReady=!0,e.onLoadedObservable.notifyObservers(e),e.onLoadedObservable.clear(),n&&n()},l=>{a==null||a("Can not upload environment levels",l)})}catch(l){a==null||a("Can not upload environment file",l)}}else a&&a("Can not parse the environment file",null)}loadData(){throw".env not supported in 2d."}}export{h as _ENVTextureLoader};
