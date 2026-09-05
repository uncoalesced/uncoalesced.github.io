import{r as h,j as z}from"./index-BNjRJUvN.js";import{R as le,T as ce,P as fe,M as me}from"./Triangle-CvCRX4L3.js";import{C as N}from"./Color-YRkaOI4u.js";const d=20,he=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,de=`#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uRadius;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;

out vec4 fragColor;

float sdRoundedRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float shapeSDF(vec2 p) { return sdRoundedRect(p, uHalfSize, uRadius); }

float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 1e-6);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = shapeSDF(p);
  vec2 L = vec2(cos(uAngle), sin(uAngle));

  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;

  vec2 nEll = normalize(p / (uHalfSize * uHalfSize) + 1e-6);
  float phi = acos(clamp(abs(dot(nEll, L)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(uShineSize - uShineFade, uShineSize + uShineFade + 1e-4, phi);
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float hi = line * rim * edgeClamp * uIntensity;

  vec3 col = uBaseColor * base + uLineColor * hi;
  float a = clamp(base + hi, 0.0, 1.0);
  fragColor = vec4(col, a);
}
`,xe=({children:q="Get Started",size:j="lg",radius:A=18,tint:$="#ffffff",tintOpacity:D=0,blur:W=0,textColor:X="#f5f5f5",lineColor:Y="#ffffff",baseColor:G="#525252",intensity:O=1,shineSize:U=10,shineFade:V=40,thickness:J=1,speed:K=.35,followMouse:Q=!0,proximity:Z=250,autoAnimate:ee=!1,disabled:te=!1,onClick:ne,className:y="",type:oe="button",as:P="button",...ae})=>{const F=h.useRef(null),B=h.useRef(null),p=h.useRef({});p.current={radius:A,lineColor:Y,baseColor:G,intensity:O,shineSize:U,shineFade:V,thickness:J,speed:K,followMouse:Q,proximity:Z,autoAnimate:ee},h.useEffect(()=>{const s=F.current,r=B.current;if(!s||!r)return;const i=window.devicePixelRatio||1,v=new le({alpha:!0,premultipliedAlpha:!0,antialias:!0,dpr:i}),o=v.gl;o.clearColor(0,0,0,0),o.enable(o.BLEND),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA);const g=new ce(o);g.attributes.uv&&delete g.attributes.uv;const a=new fe(o,{vertex:he,fragment:de,uniforms:{uCenter:{value:[0,0]},uHalfSize:{value:[1,1]},uRadius:{value:0},uAngle:{value:2.4},uPx:{value:i},uLineColor:{value:[1,1,1]},uBaseColor:{value:[.32,.32,.32]},uIntensity:{value:1},uShineSize:{value:.17},uShineFade:{value:.7},uThickness:{value:1},uBaseWidth:{value:i}}}),se=new me(o,{geometry:g,program:a});r.appendChild(o.canvas);const u={w:1,h:1},E=()=>{const n=s.getBoundingClientRect(),e=n.width,t=n.height;u.w=e,u.h=t,v.setSize(e+d*2,t+d*2),a.uniforms.uCenter.value=[(d+e/2)*i,(d+t/2)*i],a.uniforms.uHalfSize.value=[e/2*i,t/2*i]},L=new ResizeObserver(E);L.observe(s),E();let l=null,x=0;const _=n=>{const e=s.getBoundingClientRect(),t=e.left+e.width/2,R=e.top+e.height/2,H=Math.max(e.left-n.clientX,0,n.clientX-e.right),w=Math.max(e.top-n.clientY,0,n.clientY-e.bottom),m=Math.hypot(H,w);if(m===0){const re=(n.clientX-t)/(e.width/2),ue=(R-n.clientY)/(e.height/2);l=Math.atan2(2/e.height,-2/e.width)+re*.3+ue*.15}else l=Math.atan2(R-n.clientY,n.clientX-t);const M=Math.max(0,1-m/Math.max(p.current.proximity,1));x=M*M*(3-2*M)};window.addEventListener("pointermove",_);let b=2.4,I=2.4,C=0,T=performance.now(),S=0;const c=new N,f=new N,k=n=>{S=requestAnimationFrame(k);const e=Math.min((n-T)/1e3,.05);T=n;const t=p.current;I+=t.speed*e;const w=((t.followMouse&&l!=null&&(!t.autoAnimate||x>0)?l:I)-b+Math.PI*3)%(Math.PI*2)-Math.PI;b+=w*(1-Math.exp(-e*7));const m=t.autoAnimate?1:x;C+=(m-C)*(1-Math.exp(-e*8)),c.set(t.lineColor),f.set(t.baseColor),a.uniforms.uAngle.value=b,a.uniforms.uRadius.value=Math.min(t.radius,Math.min(u.w,u.h)/2)*i,a.uniforms.uLineColor.value=[c.r,c.g,c.b],a.uniforms.uBaseColor.value=[f.r,f.g,f.b],a.uniforms.uIntensity.value=t.intensity*C,a.uniforms.uShineSize.value=t.shineSize*Math.PI/180,a.uniforms.uShineFade.value=t.shineFade*Math.PI/180,a.uniforms.uThickness.value=t.thickness*i,v.render({scene:se})};return S=requestAnimationFrame(k),()=>{var n;cancelAnimationFrame(S),L.disconnect(),window.removeEventListener("pointermove",_),o.canvas.parentNode===r&&r.removeChild(o.canvas),(n=o.getExtension("WEBGL_lose_context"))==null||n.loseContext()}},[]);const ie=P==="button";return z.jsxs(P,{ref:F,...ie?{type:oe,disabled:te}:{},onClick:ne,...ae,className:`specular-button specular-button--${j}${y?` ${y}`:""}`,style:{"--sb-radius":`${A}px`,"--sb-tint":$,"--sb-tint-opacity":D,"--sb-blur":`${W}px`,"--sb-text-color":X},children:[z.jsx("span",{ref:B,className:"specular-button__fx","aria-hidden":"true"}),z.jsx("span",{className:"specular-button__label",children:q})]})};export{xe as default};
