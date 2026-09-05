import{r as w,j as M}from"./index-BNjRJUvN.js";import{P as z,S,C as b,N as C,a as F,b as R,M as T,W as I}from"./three.module-XYu6xLv5.js";const P=`
varying vec2 vUv;
uniform float uTime;
uniform float mouse;
uniform float uEnableWaves;

void main() {
    vUv = uv;
    float time = uTime * 5.;
    float waveFactor = uEnableWaves;
    vec3 transformed = position;
    transformed.x += sin(time + position.y) * 0.5 * waveFactor;
    transformed.y += cos(time + position.z) * 0.15 * waveFactor;
    transformed.z += sin(time + position.x) * waveFactor;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`,A=`
varying vec2 vUv;
uniform float mouse;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime;
    vec2 pos = vUv;
    float move = sin(time + mouse) * 0.01;
    float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
    float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
    float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
    float a = texture2D(uTexture, pos).a;
    gl_FragColor = vec4(r, g, b, a);
}
`;Math.map=function(u,t,e,i,s){return(u-t)/(e-t)*(s-i)+i};const E=typeof window<"u"?window.devicePixelRatio:1;class B{constructor(t,{fontSize:e,fontFamily:i,charset:s,invert:o,hueRotate:a}={}){this.renderer=t,this.domElement=document.createElement("div"),this.domElement.style.position="absolute",this.domElement.style.top="0",this.domElement.style.left="0",this.domElement.style.width="100%",this.domElement.style.height="100%",this.pre=document.createElement("pre"),this.domElement.appendChild(this.pre),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.domElement.appendChild(this.canvas),this.deg=0,this.hueRotate=a??0,this.invert=o??!0,this.fontSize=e??12,this.fontFamily=i??"'Courier New', monospace",this.charset=s??" .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",this.context.webkitImageSmoothingEnabled=!1,this.context.mozImageSmoothingEnabled=!1,this.context.msImageSmoothingEnabled=!1,this.context.imageSmoothingEnabled=!1,this.onMouseMove=this.onMouseMove.bind(this),document.addEventListener("mousemove",this.onMouseMove)}setSize(t,e){this.width=t,this.height=e,this.renderer.setSize(t,e),this.reset(),this.center={x:t/2,y:e/2},this.mouse={x:this.center.x,y:this.center.y}}reset(){this.context.font=`${this.fontSize}px ${this.fontFamily}`;const t=this.context.measureText("A").width;this.cols=Math.floor(this.width/(this.fontSize*(t/this.fontSize))),this.rows=Math.floor(this.height/this.fontSize),this.canvas.width=this.cols,this.canvas.height=this.rows,this.pre.style.fontFamily=this.fontFamily,this.pre.style.fontSize=`${this.fontSize}px`,this.pre.style.margin="0",this.pre.style.padding="0",this.pre.style.lineHeight="1em",this.pre.style.position="absolute",this.pre.style.left="0",this.pre.style.top="0",this.pre.style.zIndex="9"}render(t,e){this.renderer.render(t,e);const i=this.canvas.width,s=this.canvas.height;this.context.clearRect(0,0,i,s),this.context&&i&&s&&this.context.drawImage(this.renderer.domElement,0,0,i,s),this.asciify(this.context,i,s),this.hue()}onMouseMove(t){this.mouse={x:t.clientX*E,y:t.clientY*E}}get dx(){return this.mouse.x-this.center.x}get dy(){return this.mouse.y-this.center.y}hue(){if(!this.hueRotate){this.domElement.style.filter&&(this.domElement.style.filter="");return}const t=Math.atan2(this.dy,this.dx)*180/Math.PI;this.deg+=(t-this.deg)*.075;const e=Math.max(-this.hueRotate,Math.min(this.hueRotate,this.deg));this.domElement.style.filter=`hue-rotate(${e.toFixed(1)}deg)`}asciify(t,e,i){if(e&&i){const s=t.getImageData(0,0,e,i).data;let o="";for(let a=0;a<i;a++){for(let m=0;m<e;m++){const h=m*4+a*4*e,[r,n,c,d]=[s[h],s[h+1],s[h+2],s[h+3]];if(d===0){o+=" ";continue}let x=(.3*r+.6*n+.1*c)/255,v=Math.floor((1-x)*(this.charset.length-1));this.invert&&(v=this.charset.length-v-1),o+=this.charset[v]}o+=`
`}this.pre.innerHTML=o}}dispose(){document.removeEventListener("mousemove",this.onMouseMove)}}class D{constructor(t,{fontSize:e=200,fontFamily:i="Arial",color:s="#fdf9f3"}={}){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.txt=t,this.fontSize=e,this.fontFamily=i,this.color=s,this.font=`600 ${this.fontSize}px ${this.fontFamily}`}resize(){this.context.font=this.font;const t=this.context.measureText(this.txt),e=Math.ceil(t.width)+20,i=Math.ceil(t.actualBoundingBoxAscent+t.actualBoundingBoxDescent)+20;this.canvas.width=e,this.canvas.height=i}render(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.font=this.font;const e=10+this.context.measureText(this.txt).actualBoundingBoxAscent;this.context.fillText(this.txt,10,e)}get width(){return this.canvas.width}get height(){return this.canvas.height}get texture(){return this.canvas}}class L{constructor({text:t,asciiFontSize:e,textFontSize:i,textColor:s,planeBaseHeight:o,enableWaves:a,hueRotate:m,fontFamily:h},r,n,c){this.textString=t,this.fontFamily=h??"IBM Plex Mono",this.asciiFontSize=e,this.textFontSize=i,this.textColor=s,this.hueRotate=m,this.planeBaseHeight=o,this.container=r,this.width=n,this.height=c,this.enableWaves=a,this.camera=new z(45,this.width/this.height,1,1e3),this.camera.position.z=30,this.scene=new S,this.mouse={x:this.width/2,y:this.height/2},this.onMouseMove=this.onMouseMove.bind(this)}async init(){try{await document.fonts.load(`600 200px "${this.fontFamily}"`),await document.fonts.load(`500 12px "${this.fontFamily}"`)}catch{}await document.fonts.ready,this.setMesh(),this.setRenderer()}setMesh(){this.textCanvas=new D(this.textString,{fontSize:this.textFontSize,fontFamily:this.fontFamily,color:this.textColor}),this.textCanvas.resize(),this.textCanvas.render(),this.texture=new b(this.textCanvas.texture),this.texture.minFilter=C;const t=this.textCanvas.width/this.textCanvas.height,e=this.planeBaseHeight,i=e*t,s=e;this.geometry=new F(i,s,36,36),this.material=new R({vertexShader:P,fragmentShader:A,transparent:!0,uniforms:{uTime:{value:0},mouse:{value:1},uTexture:{value:this.texture},uEnableWaves:{value:this.enableWaves?1:0}}}),this.mesh=new T(this.geometry,this.material),this.scene.add(this.mesh)}setRenderer(){this.renderer=new I({antialias:!1,alpha:!0}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,0),this.filter=new B(this.renderer,{fontFamily:this.fontFamily,fontSize:this.asciiFontSize,invert:!0,hueRotate:this.hueRotate}),this.container.appendChild(this.filter.domElement),this.setSize(this.width,this.height),this.container.addEventListener("mousemove",this.onMouseMove),this.container.addEventListener("touchmove",this.onMouseMove)}setSize(t,e){this.width=t,this.height=e,this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.filter.setSize(t,e),this.center={x:t/2,y:e/2}}load(){this.animate()}onMouseMove(t){const e=t.touches?t.touches[0]:t,i=this.container.getBoundingClientRect(),s=e.clientX-i.left,o=e.clientY-i.top;this.mouse={x:s,y:o}}animate(){const t=()=>{this.animationFrameId=requestAnimationFrame(t),this.render()};t()}render(){const t=new Date().getTime()*.001;this.textCanvas.render(),this.texture.needsUpdate=!0,this.mesh.material.uniforms.uTime.value=Math.sin(t),this.updateRotation(),this.filter.render(this.scene,this.camera)}updateRotation(){const t=Math.map(this.mouse.y,0,this.height,.5,-.5),e=Math.map(this.mouse.x,0,this.width,-.5,.5);this.mesh.rotation.x+=(t-this.mesh.rotation.x)*.05,this.mesh.rotation.y+=(e-this.mesh.rotation.y)*.05}clear(){this.scene.traverse(t=>{t.isMesh&&typeof t.material=="object"&&t.material!==null&&(Object.keys(t.material).forEach(e=>{const i=t.material[e];i!==null&&typeof i=="object"&&typeof i.dispose=="function"&&i.dispose()}),t.material.dispose(),t.geometry.dispose())}),this.scene.clear()}dispose(){cancelAnimationFrame(this.animationFrameId),this.filter&&(this.filter.dispose(),this.filter.domElement.parentNode&&this.container.removeChild(this.filter.domElement)),this.container.removeEventListener("mousemove",this.onMouseMove),this.container.removeEventListener("touchmove",this.onMouseMove),this.clear(),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss())}}function U({text:u="David!",asciiFontSize:t=8,textFontSize:e=200,textColor:i="#fdf9f3",planeBaseHeight:s=8,enableWaves:o=!0,glyphColor:a="#fdf9f3",hueRotate:m=0,fontFamily:h="IBM Plex Mono"}){const r=w.useRef(null),n=w.useRef(null);return w.useEffect(()=>{if(!r.current)return;let c=!1,d=null,x=null;const v=async(g,p,l)=>{const f=new L({text:u,asciiFontSize:t,textFontSize:e,textColor:i,planeBaseHeight:s,enableWaves:o,hueRotate:m,fontFamily:h},g,p,l);return await f.init(),f};return(async()=>{const{width:g,height:p}=r.current.getBoundingClientRect();if(g===0||p===0){d=new IntersectionObserver(async([l])=>{if(!c&&l.isIntersecting&&l.boundingClientRect.width>0&&l.boundingClientRect.height>0){const{width:f,height:y}=l.boundingClientRect;d.disconnect(),d=null,c||(n.current=await v(r.current,f,y),!c&&n.current&&n.current.load())}},{threshold:.1}),d.observe(r.current);return}n.current=await v(r.current,g,p),!c&&n.current&&(n.current.load(),x=new ResizeObserver(l=>{if(!l[0]||!n.current)return;const{width:f,height:y}=l[0].contentRect;f>0&&y>0&&n.current.setSize(f,y)}),x.observe(r.current))})(),()=>{c=!0,d&&d.disconnect(),x&&x.disconnect(),n.current&&(n.current.dispose(),n.current=null)}},[u,t,e,i,s,o,m,h]),M.jsx("div",{ref:r,className:"ascii-text-container",style:{position:"absolute",width:"100%",height:"100%","--ascii-glyph":a},children:M.jsx("style",{children:`
        .ascii-text-container canvas {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          image-rendering: optimizeSpeed;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
        }
        .ascii-text-container pre {
          margin: 0;
          user-select: none;
          padding: 0;
          line-height: 1em;
          text-align: left;
          position: absolute;
          left: 0;
          top: 0;
          color: var(--ascii-glyph, #fdf9f3);
          z-index: 9;
        }
      `})})}export{U as default};
