import{j as ne}from"./three-vendor-Dh123G4p.js";import{r as ae}from"./react-vendor-CIP6LD3P.js";const Oe=U=>{ae.useEffect(()=>{const l=U.current;if(!l)return;let f={SIM_RESOLUTION:64,DYE_RESOLUTION:512,DENSITY_DISSIPATION:3.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,PRESSURE_ITERATIONS:10,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!1,COLOR_UPDATE_SPEED:10};function ue(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}const E=[];E.push(new ue);const{gl:t,ext:p}=ce(l);p.supportLinearFiltering||(f.DYE_RESOLUTION=256,f.SHADING=!1);function ce(e){const r={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let i=e.getContext("webgl2",r);const o=!!i;o||(i=e.getContext("webgl",r)||e.getContext("experimental-webgl",r));let n,a;o?(i.getExtension("EXT_color_buffer_float"),a=i.getExtension("OES_texture_float_linear")):(n=i.getExtension("OES_texture_half_float"),a=i.getExtension("OES_texture_half_float_linear")),i.clearColor(0,0,0,1);const u=o?i.HALF_FLOAT:n.HALF_FLOAT_OES;let v,s,g;return o?(v=D(i,i.RGBA16F,i.RGBA,u),s=D(i,i.RG16F,i.RG,u),g=D(i,i.R16F,i.RED,u)):(v=D(i,i.RGBA,i.RGBA,u),s=D(i,i.RGBA,i.RGBA,u),g=D(i,i.RGBA,i.RGBA,u)),{gl:i,ext:{formatRGBA:v,formatRG:s,formatR:g,halfFloatTexType:u,supportLinearFiltering:a}}}function D(e,r,i,o){if(!le(e,r,i,o))switch(r){case e.R16F:return D(e,e.RG16F,e.RG,o);case e.RG16F:return D(e,e.RGBA16F,e.RGBA,o);default:return null}return{internalFormat:r,format:i}}function le(e,r,i,o){const n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,4,4,0,i,o,null);const a=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)==e.FRAMEBUFFER_COMPLETE}class se{constructor(r,i){this.vertexShader=r,this.fragmentShaderSource=i,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(r){let i=0;for(let n=0;n<r.length;n++)i+=Me(r[n]);let o=this.programs[i];if(o==null){let n=m(t.FRAGMENT_SHADER,this.fragmentShaderSource,r);o=W(this.vertexShader,n),this.programs[i]=o}o!=this.activeProgram&&(this.uniforms=k(o),this.activeProgram=o)}bind(){t.useProgram(this.activeProgram)}}class S{constructor(r,i){this.uniforms={},this.program=W(r,i),this.uniforms=k(this.program)}bind(){t.useProgram(this.program)}}function W(e,r){let i=t.createProgram();return t.attachShader(i,e),t.attachShader(i,r),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)||console.trace(t.getProgramInfoLog(i)),i}function k(e){let r=[],i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;o++){let n=t.getActiveUniform(e,o).name;r[n]=t.getUniformLocation(e,n)}return r}function m(e,r,i){r=fe(r,i);const o=t.createShader(e);return t.shaderSource(o,r),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)||console.trace(t.getShaderInfoLog(o)),o}function fe(e,r){if(r==null)return e;let i="";return r.forEach(o=>{i+="#define "+o+`
`}),i+e}const R=m(t.VERTEX_SHADER,`
       precision highp float;
   
       attribute vec2 aPosition;
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform vec2 texelSize;
   
       void main () {
           vUv = aPosition * 0.5 + 0.5;
           vL = vUv - vec2(texelSize.x, 0.0);
           vR = vUv + vec2(texelSize.x, 0.0);
           vT = vUv + vec2(0.0, texelSize.y);
           vB = vUv - vec2(0.0, texelSize.y);
           gl_Position = vec4(aPosition, 0.0, 1.0);
       }
   `);m(t.VERTEX_SHADER,`
       precision highp float;
   
       attribute vec2 aPosition;
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       uniform vec2 texelSize;
   
       void main () {
           vUv = aPosition * 0.5 + 0.5;
           float offset = 1.33333333;
           vL = vUv - texelSize * offset;
           vR = vUv + texelSize * offset;
           gl_Position = vec4(aPosition, 0.0, 1.0);
       }
   `),m(t.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       uniform sampler2D uTexture;
   
       void main () {
           vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
           sum += texture2D(uTexture, vL) * 0.35294117;
           sum += texture2D(uTexture, vR) * 0.35294117;
           gl_FragColor = sum;
       }
   `);const ve=m(t.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
   
       void main () {
           gl_FragColor = texture2D(uTexture, vUv);
       }
   `),me=m(t.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
       uniform float value;
   
       void main () {
           gl_FragColor = value * texture2D(uTexture, vUv);
       }
   `);m(t.FRAGMENT_SHADER,`
       precision mediump float;
   
       uniform vec4 color;
   
       void main () {
           gl_FragColor = color;
       }
   `);const de=`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform sampler2D uTexture;
       uniform sampler2D uDithering;
       uniform vec2 ditherScale;
       uniform vec2 texelSize;
   
       vec3 linearToGamma (vec3 color) {
           color = max(color, vec3(0));
           return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
       }
   
       void main () {
           vec3 c = texture2D(uTexture, vUv).rgb;
   
       #ifdef SHADING
           vec3 lc = texture2D(uTexture, vL).rgb;
           vec3 rc = texture2D(uTexture, vR).rgb;
           vec3 tc = texture2D(uTexture, vT).rgb;
           vec3 bc = texture2D(uTexture, vB).rgb;
   
           float dx = length(rc) - length(lc);
           float dy = length(tc) - length(bc);
   
           vec3 n = normalize(vec3(dx, dy, length(texelSize)));
           vec3 l = vec3(0.0, 0.0, 1.0);
   
           float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
           c *= diffuse;
       #endif
   
           float a = max(c.r, max(c.g, c.b));
           gl_FragColor = vec4(c, a);
       }
   `,he=m(t.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       uniform sampler2D uTarget;
       uniform float aspectRatio;
       uniform vec3 color;
       uniform vec2 point;
       uniform float radius;
   
       void main () {
           vec2 p = vUv - point.xy;
           p.x *= aspectRatio;
           vec3 splat = exp(-dot(p, p) / radius) * color;
           vec3 base = texture2D(uTarget, vUv).xyz;
           gl_FragColor = vec4(base + splat, 1.0);
       }
   `),xe=m(t.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       uniform sampler2D uVelocity;
       uniform sampler2D uSource;
       uniform vec2 texelSize;
       uniform vec2 dyeTexelSize;
       uniform float dt;
       uniform float dissipation;
   
       vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
           vec2 st = uv / tsize - 0.5;
   
           vec2 iuv = floor(st);
           vec2 fuv = fract(st);
   
           vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
           vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
           vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
           vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
   
           return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
       }
   
       void main () {
       #ifdef MANUAL_FILTERING
           vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
           vec4 result = bilerp(uSource, coord, dyeTexelSize);
       #else
           vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
           vec4 result = texture2D(uSource, coord);
       #endif
           float decay = 1.0 + dissipation * dt;
           gl_FragColor = result / decay;
       }`,p.supportLinearFiltering?null:["MANUAL_FILTERING"]),Te=m(t.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uVelocity, vL).x;
           float R = texture2D(uVelocity, vR).x;
           float T = texture2D(uVelocity, vT).y;
           float B = texture2D(uVelocity, vB).y;
   
           vec2 C = texture2D(uVelocity, vUv).xy;
           if (vL.x < 0.0) { L = -C.x; }
           if (vR.x > 1.0) { R = -C.x; }
           if (vT.y > 1.0) { T = -C.y; }
           if (vB.y < 0.0) { B = -C.y; }
   
           float div = 0.5 * (R - L + T - B);
           gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
       }
   `),Ee=m(t.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uVelocity, vL).y;
           float R = texture2D(uVelocity, vR).y;
           float T = texture2D(uVelocity, vT).x;
           float B = texture2D(uVelocity, vB).x;
           float vorticity = R - L - T + B;
           gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
       }
   `),Re=m(t.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform sampler2D uVelocity;
       uniform sampler2D uCurl;
       uniform float curl;
       uniform float dt;
   
       void main () {
           float L = texture2D(uCurl, vL).x;
           float R = texture2D(uCurl, vR).x;
           float T = texture2D(uCurl, vT).x;
           float B = texture2D(uCurl, vB).x;
           float C = texture2D(uCurl, vUv).x;
   
           vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
           force /= length(force) + 0.0001;
           force *= curl * C;
           force.y *= -1.0;
   
           vec2 velocity = texture2D(uVelocity, vUv).xy;
           velocity += force * dt;
           velocity = min(max(velocity, -1000.0), 1000.0);
           gl_FragColor = vec4(velocity, 0.0, 1.0);
       }
   `),ge=m(t.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uPressure;
       uniform sampler2D uDivergence;
   
       void main () {
           float L = texture2D(uPressure, vL).x;
           float R = texture2D(uPressure, vR).x;
           float T = texture2D(uPressure, vT).x;
           float B = texture2D(uPressure, vB).x;
           float C = texture2D(uPressure, vUv).x;
           float divergence = texture2D(uDivergence, vUv).x;
           float pressure = (L + R + B + T - divergence) * 0.25;
           gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
       }
   `),pe=m(t.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uPressure;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uPressure, vL).x;
           float R = texture2D(uPressure, vR).x;
           float T = texture2D(uPressure, vT).x;
           float B = texture2D(uPressure, vB).x;
           vec2 velocity = texture2D(uVelocity, vUv).xy;
           velocity.xy -= vec2(R - L, T - B);
           gl_FragColor = vec4(velocity, 0.0, 1.0);
       }
   `),x=(t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(e,r=!1)=>{e==null?(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)):(t.viewport(0,0,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,e.fbo)),r&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)});let h,c,C,I,y;const K=new S(R,ve),N=new S(R,me),_=new S(R,he),T=new S(R,xe),z=new S(R,Te),M=new S(R,Ee),F=new S(R,Re),w=new S(R,ge),b=new S(R,pe),P=new se(R,de);function j(){let e=oe(f.SIM_RESOLUTION),r=oe(f.DYE_RESOLUTION);const i=p.halfFloatTexType,o=p.formatRGBA,n=p.formatRG,a=p.formatR,u=p.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),h==null?h=O(r.width,r.height,o.internalFormat,o.format,i,u):h=q(h,r.width,r.height,o.internalFormat,o.format,i,u),c==null?c=O(e.width,e.height,n.internalFormat,n.format,i,u):c=q(c,e.width,e.height,n.internalFormat,n.format,i,u),C=L(e.width,e.height,a.internalFormat,a.format,i,t.NEAREST),I=L(e.width,e.height,a.internalFormat,a.format,i,t.NEAREST),y=O(e.width,e.height,a.internalFormat,a.format,i,t.NEAREST)}function L(e,r,i,o,n,a){t.activeTexture(t.TEXTURE0);let u=t.createTexture();t.bindTexture(t.TEXTURE_2D,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,i,e,r,0,o,n,null);let v=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,v),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,u,0),t.viewport(0,0,e,r),t.clear(t.COLOR_BUFFER_BIT);let s=1/e,g=1/r;return{texture:u,fbo:v,width:e,height:r,texelSizeX:s,texelSizeY:g,attach(A){return t.activeTexture(t.TEXTURE0+A),t.bindTexture(t.TEXTURE_2D,u),A}}}function O(e,r,i,o,n,a){let u=L(e,r,i,o,n,a),v=L(e,r,i,o,n,a);return{width:e,height:r,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,get read(){return u},set read(s){u=s},get write(){return v},set write(s){v=s},swap(){let s=u;u=v,v=s}}}function Se(e,r,i,o,n,a,u){let v=L(r,i,o,n,a,u);return K.bind(),t.uniform1i(K.uniforms.uTexture,e.attach(0)),x(v),v}function q(e,r,i,o,n,a,u){return e.width==r&&e.height==i||(e.read=Se(e.read,r,i,o,n,a,u),e.write=L(r,i,o,n,a,u),e.width=r,e.height=i,e.texelSizeX=1/r,e.texelSizeY=1/i),e}function De(){let e=[];f.SHADING&&e.push("SHADING"),P.setKeywords(e)}De(),j();let $=Date.now(),B=0;J();function J(){const e=ye();_e()&&j(),Ae(e),Fe(),Le(e),Ue(null),requestAnimationFrame(J)}function ye(){let e=Date.now(),r=(e-$)/1e3;return r=Math.min(r,.016666),$=e,r}function _e(){let e=d(l.clientWidth),r=d(l.clientHeight);return l.width!=e||l.height!=r?(l.width=e,l.height=r,!0):!1}function Ae(e){B+=e*f.COLOR_UPDATE_SPEED,B>=1&&(B=ze(B,0,1),E.forEach(r=>{r.color=X()}))}function Fe(){E.forEach(e=>{e.moved&&(e.moved=!1,be(e))})}function Le(e){t.disable(t.BLEND),M.bind(),t.uniform2f(M.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(M.uniforms.uVelocity,c.read.attach(0)),x(I),F.bind(),t.uniform2f(F.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(F.uniforms.uVelocity,c.read.attach(0)),t.uniform1i(F.uniforms.uCurl,I.attach(1)),t.uniform1f(F.uniforms.curl,f.CURL),t.uniform1f(F.uniforms.dt,e),x(c.write),c.swap(),z.bind(),t.uniform2f(z.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(z.uniforms.uVelocity,c.read.attach(0)),x(C),N.bind(),t.uniform1i(N.uniforms.uTexture,y.read.attach(0)),t.uniform1f(N.uniforms.value,f.PRESSURE),x(y.write),y.swap(),w.bind(),t.uniform2f(w.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(w.uniforms.uDivergence,C.attach(0));for(let i=0;i<f.PRESSURE_ITERATIONS;i++)t.uniform1i(w.uniforms.uPressure,y.read.attach(1)),x(y.write),y.swap();b.bind(),t.uniform2f(b.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(b.uniforms.uPressure,y.read.attach(0)),t.uniform1i(b.uniforms.uVelocity,c.read.attach(1)),x(c.write),c.swap(),T.bind(),t.uniform2f(T.uniforms.texelSize,c.texelSizeX,c.texelSizeY),p.supportLinearFiltering||t.uniform2f(T.uniforms.dyeTexelSize,c.texelSizeX,c.texelSizeY);let r=c.read.attach(0);t.uniform1i(T.uniforms.uVelocity,r),t.uniform1i(T.uniforms.uSource,r),t.uniform1f(T.uniforms.dt,e),t.uniform1f(T.uniforms.dissipation,f.VELOCITY_DISSIPATION),x(c.write),c.swap(),p.supportLinearFiltering||t.uniform2f(T.uniforms.dyeTexelSize,h.texelSizeX,h.texelSizeY),t.uniform1i(T.uniforms.uVelocity,c.read.attach(0)),t.uniform1i(T.uniforms.uSource,h.read.attach(1)),t.uniform1f(T.uniforms.dissipation,f.DENSITY_DISSIPATION),x(h.write),h.swap()}function Ue(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),we(e)}function we(e){let r=t.drawingBufferWidth,i=t.drawingBufferHeight;P.bind(),f.SHADING&&t.uniform2f(P.uniforms.texelSize,1/r,1/i),t.uniform1i(P.uniforms.uTexture,h.read.attach(0)),x(e)}function be(e){let r=e.deltaX*f.SPLAT_FORCE,i=e.deltaY*f.SPLAT_FORCE;Q(e.texcoordX,e.texcoordY,r,i,e.color)}function Pe(e){const r=X();r.r*=10,r.g*=10,r.b*=10;let i=10*(Math.random()-.5),o=30*(Math.random()-.5);Q(e.texcoordX,e.texcoordY,i,o,r)}function Q(e,r,i,o,n){_.bind(),t.uniform1i(_.uniforms.uTarget,c.read.attach(0)),t.uniform1f(_.uniforms.aspectRatio,l.width/l.height),t.uniform2f(_.uniforms.point,e,r),t.uniform3f(_.uniforms.color,i,o,0),t.uniform1f(_.uniforms.radius,Be(f.SPLAT_RADIUS/100)),x(c.write),c.swap(),t.uniform1i(_.uniforms.uTarget,h.read.attach(0)),t.uniform3f(_.uniforms.color,n.r,n.g,n.b),x(h.write),h.swap()}function Be(e){let r=l.width/l.height;return r>1&&(e*=r),e}const Z=e=>{let r=E[0],i=d(e.clientX),o=d(e.clientY);V(r,i,o,r.color)},ee=e=>{let r=E[0],i=d(e.clientX),o=d(e.clientY);H(r,-1,i,o),Pe(r)};window.addEventListener("mousedown",ee);const Y=e=>{let r=E[0],i=d(e.clientX),o=d(e.clientY),n=X();V(r,i,o,n),document.body.removeEventListener("mousemove",Y)};document.body.addEventListener("mousemove",Y),l.addEventListener("mousemove",Z);const G=e=>{const r=e.targetTouches;let i=E[0];for(let o=0;o<r.length;o++){let n=d(r[o].clientX),a=d(r[o].clientY);H(i,r[o].identifier,n,a)}document.body.removeEventListener("touchstart",G)};document.body.addEventListener("touchstart",G);const te=e=>{const r=e.targetTouches;let i=E[0];for(let o=0;o<r.length;o++){let n=d(r[o].clientX),a=d(r[o].clientY);H(i,r[o].identifier,n,a)}};window.addEventListener("touchstart",te);const re=e=>{const r=e.targetTouches;let i=E[0];for(let o=0;o<r.length;o++){let n=d(r[o].clientX),a=d(r[o].clientY);V(i,n,a,i.color)}};window.addEventListener("touchmove",re,!1);const ie=e=>{const r=e.changedTouches;let i=E[0];for(let o=0;o<r.length;o++)Xe(i)};window.addEventListener("touchend",ie);function H(e,r,i,o){e.id=r,e.down=!0,e.moved=!1,e.texcoordX=i/l.width,e.texcoordY=1-o/l.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=X()}function V(e,r,i,o){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=r/l.width,e.texcoordY=1-i/l.height,e.deltaX=Ce(e.texcoordX-e.prevTexcoordX),e.deltaY=Ie(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=o}function Xe(e){e.down=!1}function Ce(e){let r=l.width/l.height;return r<1&&(e*=r),e}function Ie(e){let r=l.width/l.height;return r>1&&(e/=r),e}function X(){let e=Ne(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function Ne(e,r,i){let o,n,a,u,v,s,g,A;switch(u=Math.floor(e*6),v=e*6-u,s=i*(1-r),g=i*(1-v*r),A=i*(1-(1-v)*r),u%6){case 0:o=i,n=A,a=s;break;case 1:o=g,n=i,a=s;break;case 2:o=s,n=i,a=A;break;case 3:o=s,n=g,a=i;break;case 4:o=A,n=s,a=i;break;case 5:o=i,n=s,a=g;break}return{r:o,g:n,b:a}}function ze(e,r,i){const o=i-r;return(e-r)%o+r}function oe(e){let r=t.drawingBufferWidth/t.drawingBufferHeight;r<1&&(r=1/r);const i=Math.round(e),o=Math.round(e*r);return t.drawingBufferWidth>t.drawingBufferHeight?{width:o,height:i}:{width:i,height:o}}function d(e){const r=window.devicePixelRatio||1;return Math.floor(e*r)}function Me(e){if(e.length==0)return 0;let r=0;for(let i=0;i<e.length;i++)r=(r<<5)-r+e.charCodeAt(i),r|=0;return r}return()=>{l.removeEventListener("mousemove",Z),window.removeEventListener("mousedown",ee),window.removeEventListener("touchstart",te),window.removeEventListener("touchmove",re),window.removeEventListener("touchend",ie),document.body.removeEventListener("mousemove",Y),document.body.removeEventListener("touchstart",G)}},[U])},He=({children:U,className:l=""})=>{const f=ae.useRef(null);return Oe(f),ne.jsxs("div",{className:`relative ${l}`,children:[U,ne.jsx("canvas",{ref:f,className:"absolute inset-0 w-full h-full pointer-events-auto z-10",style:{mixBlendMode:"screen",opacity:.8}})]})};export{He as default};
