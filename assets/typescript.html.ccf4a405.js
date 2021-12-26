import{_ as c,r as t,o as l,c as r,a,b as n,F as A,d as s,e}from"./app.6202d73a.js";const i={},u=n("h1",{id:"typescript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#"),s(" Typescript")],-1),k=n("p",null,"Typescript\u7ED9Javascript\u5E26\u6765\u4E86\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u5E26\u6765\u4E86\u66F4\u667A\u80FD\u7684\u63D0\u793A\u548C\u4E1D\u6ED1\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0CJavascript\u4E2D\u53D8\u91CF\u53EF\u4EE5\u8D4B\u503C\u4EFB\u610F\u7C7B\u578B\u7684\u503C\uFF0C\u8FD9\u5728\u5927\u578B\u7CFB\u7EDF\u4E2D\u4F1A\u589E\u52A0\u4EE3\u7801\u7684\u7EF4\u62A4\u96BE\u5EA6\uFF0CTypescript\u6709\u70B9\u50CF\u4E09\u4F53\u4EBA\uFF0C\u6BCF\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u6BCF\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u7ED3\u6784\u90FD\u5BF9\u5916\u6E05\u6670\u53EF\u89C1\uFF0C\u662F\u6784\u5EFA\u5927\u578B\u9879\u76EE\u548C\u6846\u67B6\u7684\u5FC5\u5907\u6280\u672F",-1),b=e(`<p>Typescript\u662F\u56FE\u7075\u5B8C\u5907\u7684\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u7C7B\u578B\u53EF\u4EE5\u5199\u9012\u5F52\uFF0C\u521D\u5B66\u8005\u4E0D\u8981\u9677\u5165\u590D\u6742\u7684\u7C7B\u578B\u4F53\u64CD\uFF0C\u800C\u662F\u8981\u4E13\u6CE8\u529F\u80FD\u7684\u5B9E\u73B0,\u6211\u7528\u4EE3\u7801\u6F14\u793A\u51E0\u4E2A\u4F7F\u7528\u573A\u666F, \u8FD9\u4E9B\u4EE3\u7801\u641E\u660E\u767D\u5C31\u7B97\u5165\u95E8\u4E86</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 1. \u81EA\u5DF1\u5B9A\u4E49\u53D8\u91CF\u53EF\u4EE5\u8BBE\u7F6E\u57FA\u672C\u7C7B\u578B</span>
<span class="token keyword">let</span> courseName<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;\u73A9\u8F6CVue3\u5168\u5BB6\u6876&#39;</span>
<span class="token keyword">let</span> price<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">129</span>
<span class="token keyword">let</span> isOnline<span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">let</span> courseSales<span class="token operator">:</span><span class="token keyword">undefined</span>
<span class="token keyword">let</span> me<span class="token operator">:</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">]</span>
<span class="token comment">// 2. \u5BF9\u8C61\u7C7B\u578B</span>
<span class="token keyword">interface</span> <span class="token class-name">course</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
    price<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    avatar<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">boolean</span><span class="token punctuation">,</span>
    <span class="token keyword">readonly</span> address<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">//3 \u51FD\u6570\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">addType</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token builtin">number</span>
<span class="token keyword">interface</span> <span class="token class-name">addType1</span><span class="token punctuation">{</span>
    <span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> add2<span class="token operator">:</span><span class="token function-variable function">addType</span>  <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 4. \u5BBF\u4E3B\u73AF\u5883\u7684\u7C7B\u578BTS\u63D0\u4F9B\u4E86</span>
<span class="token keyword">let</span> w<span class="token operator">:</span>Window <span class="token operator">=</span> window
<span class="token keyword">let</span> ele<span class="token operator">:</span>HTMLElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token operator">:</span>MouseEvent<span class="token punctuation">)</span><span class="token punctuation">{</span>
    w<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token comment">// 5 \u6CDB\u578B \uFF08\u96BE\u70B9\uFF09</span>
<span class="token comment">// &lt;T&gt;\u5C31\u662F&lt;\u67D0\u79CD\u7C7B\u578B&gt;\u7684\u610F\u601D\uFF0C\u5C31\u662F\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7C7B\u578B\u53D8\u91CF\uFF0C\u901A\u8FC7extends\u63A7\u5236\u7C7B\u578B</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">test</span><span class="token generic class-name"><span class="token operator">&lt;</span>\u67D0\u79CD\u7C7B\u578B<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>args<span class="token operator">:</span>\u67D0\u79CD\u7C7B\u578B<span class="token punctuation">)</span><span class="token operator">:</span>\u67D0\u79CD\u7C7B\u578B<span class="token punctuation">{</span>
    <span class="token keyword">return</span> args
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">ExtendsType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">boolean</span></span> <span class="token operator">?</span> <span class="token string">&quot;\u91CD\u5B66\u524D\u7AEF&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u73A9\u8F6CVue3&quot;</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getProperty</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> o<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">ReturnType1<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">infer</span> <span class="token constant">P</span> <span class="token operator">?</span><span class="token constant">P</span><span class="token operator">:</span><span class="token builtin">never</span> 

<span class="token comment">// 6. \u7528\u5230\u6846\u67B6\u4E2D\u7684\u6E90\u7801</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> Ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token builtin">string</span> value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">interface</span> <span class="token class-name">Todo</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
  done<span class="token operator">:</span><span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> todos<span class="token operator">:</span>Ref<span class="token operator">&lt;</span>Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>title<span class="token operator">:</span><span class="token string">&#39;\u5B66\u4E60Vue&#39;</span><span class="token punctuation">,</span>done<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>IProps<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;App&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>hello world<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 7.\u7F51\u7EDC\u63A5\u53E3\u7684\u7C7B\u578B</span>
<span class="token comment">// \u9650\u5236\u524D\u540E\u7AEF\u63A5\u53E3\u7684Typescript\u7C7B\u578B\uFF0C\u9650\u5236\u53C2\u6570\u4F20\u9012\uFF0C\u524D\u540E\u7AEF\u8054\u8C03\u723D\u6B6A\u6B6A</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">API</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span>obj<span class="token operator">:</span>Api<span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Api</span><span class="token punctuation">{</span>
    <span class="token string">&#39;/course/buy&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        id<span class="token operator">:</span><span class="token builtin">number</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/course/comment&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        id<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;/course/buy&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;/course/comment&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>message<span class="token operator">:</span><span class="token string">&#39;\u560E\u560E\u597D\u770B&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;/course/comment&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//\u5982\u679Cmessage\u5FC5\u4F20 \u7C7B\u578B\u63D0\u9192\u7F3A\u5C11\u53C2\u6570</span>
<span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;/course/404&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//\u63A5\u53E3\u4E0D\u5B58\u5728 \u7C7B\u578B\u62A5\u9519</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h2 id="\u6280\u672F\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u6587\u6863" aria-hidden="true">#</a> \u6280\u672F\u6587\u6863</h2>`,3),g={href:"https://www.tslang.cn/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"},m=s("TS\u4E2D\u6587\u7F51"),d={href:"https://www.typescriptlang.org/play?ssl=414&ssc=5&pln=402&pc=1#code/FDD0oAgRgOgwv9UAIehvH0NHqwA2BTALhAxgPYCuATgM5YByAhgLZYBc5OpAlgHYDmEAvBAHJAlc6AbeIBqxLAGZAFoqA27UBuFgMy4IAB3b4mHYnQBGWUn2gAmAJwq8bcgHkOGTkz2FC2Gh2OtJlgiQpYAZRpsckZiDgATLAAzRwifHDYGUkYdDAxjNIwfBkYAbRZ2bgAaHX1DAF1jPIAiQHJNQGJ1GuKoAA4K4AY8gAYq-ihgHABPNSwIQFg5QHvlQF+AzKwAN0MQcAh3IcnAU7lAejNAb7lAVXk0QBh-wBiVACsaeZpyfHY1HEBCm0BTVUAuZUBqJQgIQF4dQHnEwEQdQApXCBgSCAK+VAFnagEk5QAbyt9DoB9OUAWPKAaojABXGgCQFQBccmsfGsACoAC04XBxHCGAGE-JQIIw1sYBmsKWQqfwBAAPVnKIgcciuLAwDCELgACgZlL5NBgehg+AAlCBgRBAFnmgD45CCABTTAGxKgAp1QAAcmDACFugC51QD2ZoBQxUOgBXrQBBmoA-6MA0F5qsEgwCQ5oBfTWKgD10wAceq7joA4NT9rsAkHKAKjlANJyOuAWDKEHtgBHowBgShAAN7u73ugOugC+wC5POw-MFQvjCbyAldAgqvGr3Tled5heFJZ6Ver5YEcuweGuhFIWHI1Wb7YqxVjdsTZczldHQ-TlY6CpMcDQgBUAwAQKhBAQAfIErQAb8Zt-oBTc01gAPFEOAdW1AGTegCY5fU6kM+IhMrBQakQQpErdlAxGFmieZJCkTkxTffpc1AzxSEkCAVkAUqNAExUkBhlGXwXwCIg+2MdsIB3AQ51wwQpx8Hs+zfRhn38DDezGFkKxIzCsBMalKMoaisJZHVABog+jQAAKj4oEIEEpcIEAUuNAGPlSFAFhNQAhc0AT+1AEMY-Ujk2QBGV3gQAaczQQBZRLXQAYAKPYBhIgNA8iqLZAAdTQARvzQUcf0MczAEYdQB4Q0AZxVAAF3GzAFo5QBR-UAbwyZEAC4TAF+EqyL2MwSPmitZnN2Fy0H1GzIsIrZ1zQFKAH4IC2SZAEgEwA9HUAcgMPkAaDlACN0-VEMAQ-lAHsDJytkALn9fkAMLlAHXlQB0eUATfiQ2Kw5AHfowBTCJkFK+xoCJCHsIYIEAcAtADHouqQUAb+jxmmQA7+UATlNDk2+1AAZ1QABdURRDItAYBOBwQxohoLQIEAQPNACLtQA300AF9T7RTYzovtQBYFQvZhWCJYoPo+QB3uUAHgtUl0X9zMB6KIE6v6ii4GHosAJujAAg9QAWTUAeYVMoRr9nF5dxkY+MaJqmscDrx7hgBzLsIEArBGX8Rg7qe167WMZMgbHH7GGEcQYNkRQBGJiAwfyABWMxigEKApDMadufR7HGCujBKFFvb9sYGpEgYGAuCwLAAGs9HcLgYF7Lgahp4AGaZygYC17DpBgch8WjLhWU4U4iWlDhlDAASUqkOBAF-FSyVNQQ4I6+w5ACHlSzjkAFfjAD21QAeBU0wAKWMAKDkwphQ4Qs2SEjkAW+jAFWbK1SpS6LonCfBEkmiBY6FRPGETtAZUYNP07QZMcxMiPAAsIwA++MAeH1s5zvcthhfVIUOQBEI0AG7lAH95f5W8s9vLM73gAD4e7QCB9QryFxoiAYTOiwBod0Ad1ij2dQBOhzklrDjXlCsCPQBeo0Abs8z9xEYsAIldEtHUgBsuRrh8OEmw17nUutdLAkII5HDPlICOxwz4mAjvcZ0gAqTTqG8FKEdvKAFz5QAbI7QP+NlHcgBJb0AM6KgA6VIvJCfKEBABoRoAUAD0roBMidEAdcOANzYE3M+QpWQswcqQUcQxxGQ0MF3CAEj3qwz7DgMgHhWQQAANQQCGAAbltiIqAo4TAyn0TiCI59GAighuUSRegbG-hlHvRR-B+GCMmqImRtipFeMcb4wwSjooqLURADR2i9G23fqsCx-9UL8GsRI4o9iJFON3hI8xEQTA0hiQAj4rj66Nw4J4hRsjJE6P8aQeRiiubKNwCEsJOj9E5jOhwC6pAro3T-gAqANTooJNKUkhxcihmkFtnTFB2SIixNfHkiAbjCnFMSeUkptiqmlMCSTOppB1FaMabbFYEdNJHicoAelNACAxuMQAMCqJUTocJymxAAvbmJSEgAsTRDGgQA2-GABkIwAs4mAF944A8yhEeD7IsfwizSlrNsfooFTdQWGEoMUz83B5HIq4DCgpwKIDwvBWIlZv5CJoqhQSncaLCLzEIGwCIGyIBsGiBAIU79CD0o0dWFkEiOw0tqao7ZEAqClNETAHAhAAj-W4EKGUbs1AOBwEKAQHYYA4sRZK04lKinyplKY7mWYIBYHVmMOlDKmUsr4NWQQaLOW9Nhpsnl6ipUyrlQqpVWAJUwFVZwR1WrYY5hzM6oUUATBSDlH6gQHt0iEA7MsYOJkAAsy5UCAFrTQAAFEpUAMr6y9AD90YAO9TAAMSg+Lh+pHqAEwFQ4gANvMACXRIJpjZoLYAG0V-iAE7TcuKVs2sT5BwegWBxgIkQhAUcgAxeS2GNQRixiougkFgNtzpDiAAEjZ0Tzs1OR7UhEya8IAwlWAOQ+Hxj7l0AFoKaBk2bEAMeRgBmxR6lmwAGRm8Nge0+BEAABKWBro4AdmMK1CjO0szRfo2GsRfyMAJm4Dgttb0dLGBOt9NKO25A-GK9F3Nh2JEWIBlwwHbawo8G4bZQo22MCfS+t9W5INii7kB59HAP31gLAKYUbaYAwawHKWGdLGUAOZWhfwirn0jqwGygQ5H3Adg-SsVjxqGVts3RAEjL5JVIbYIsfjgmA4yg-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-FjJybiFqEQvqC5BCClDev-nejdDJv4BLNBl+s8dzLYfAbYpErkm+g0VUQ7hAIJcJfSiFZQGFSsBJYxscNFXlA+D4MbIwAlY0clQIIxsoHTMbFACVWKIldUSyGoAIDBRtJhdFbIfZdGI5YAB6KqAu6DUsFuqyl3VA4AAqhABpYACRKCaCoOZXVqlEAE12UAAGu+AAJqmSoBBiADCiqPGPMhLkmNiNapdMqmQEfwPNSdY5RAMphANlDUD8tpoALJKgA9141Dvg1AWFAQ2xRLHUOXkDTIsH-WjVnXKYBErB-XXWA3dK8ACBPVvXKBQ0A3TLREg2nUAKlmIwQ2QDI2g0AImBw3fXSBI3xVijlXE3ARbjw0vWvWk2oRvo2BKGczcx5DGyWUQBvrkAVAjIwUGVc1oCAA68hiKlfspADnJVIAMdygAgB7UKABxchVHPH5ZDWTS+EzcofwC0dapTRUvoq8RAAja9brd8cfl1MWoAAbyTk0wV8gAQ4ZL5RyXovyGw4ANVe7TRLnvKoDrmtlzn6jFQKUrC4h5DrkVBDxiGABzcsVt5IAGvKJF650l6c1ecpztrtpAPZZ5EA65w1ANKVQlHGaZQohAmZ9kX6md2ZwdVQd5mRhAeQjGHQOYKBbaDRcBdVatzNmt3MX1As0gNQjADhosj1tNvdDhtsKdjRbtuG9VhRMslNkaY9VRE9Td09Ag4wtN1ZEAx0gwuS650R4m7NKtowzKHCSpIY5l6ACoC1jlgAcCqVTpyHCADPBoANKx6cMIgA4Jr-D6iAC70YdahAAGIuDGApEBGM1KGyFWiAA55nBQ+BHIcIAG56gAKHIRxpxrl1FORpx1Fb2oRPq2pA3nXGBXU50Sp7ycDWVGB1H3V1GpALABKYNjD-2EAsHYNqK4P0O7yyFENpLrINRpwSKHAMqpIkMBLkNOSABRRgfKgIABragAFQqYUwgYM-1jBdakA0BDAV59Z4OXXZ2jUQBKMqNsGCNGBjYBGZRjZUNgq0M6OkDKOqM459YsG6M2MU7qMFDwalADLKYVA41waIzfilJbjKaR4mStC8V2iAB52oABhGKUETl6gAd26AAN0S2YADHamFkOlxN01xE0gS4JXRiMH0UQ1wkBeTk0RRATzSshy8mwoTgADc5oB1FW6JDBBQB8MiOAAE8oAEgJHyR4UcwUxUbV+UgAnhkWN1Np1sCNMaM0rB0c2pX50VC4xB0h1xWoRqD1MZOEDGDDMNMYAHmrNsMrDHAVRoA6gPKHCAAE+TNIAN+egAFUo5rLNp2rMwg5xwjW05oKhRK3M4CrMs363gkDFko7jhBRAzFxF62tEfD5P4C-PwaEQAu1GzERAgvWrvEDF3X-ORCwvAsm0rDOgtQ9RICLxLx7rniADwOoAMN+UJshZLl6b4EAVoew1TdRj2NVEA4dqzMdJF4Jxw7x1eshUSDL2u2zR5F1KYOqHwKwlLb4QzjLArmdWji10z9KaZLNsMeQ5DOlIdmZKr9dFjqzDRCwbAWAiO-AfLNVqZNxo4usF22AH1O4NQ7xNQu8+iKBfxRdsFNxur8w+rhrWTlrRRNQ0JlhzQRTsxLM4egMZTYrUJl6zEtL1TaAx1muxAUQEAhwLL3kgAKkqAAmaeuRlK80dayAm1EAK8eRY-GwcYW4eZnUKwQ9o1ndlLMWCu+OuWYn9d0MYKW4m6+GwTUK6DUNTVONTdxBWKOIIIOwIF4y28YDUIO79UdcDfm2W529272wIP2wIKO8O2uzxAINTRWDjX9SwUu4RFOzxDbAqJS1IBAPS-U6M1s-qG04AEr6gAEk6aSHAPuAB90e5nOsVGgBiPlMfg+Ini0m0uBtJjBB+mYR2bDDQLfviL2IU3+s+jykwGptFPMDlqhoTBwKLLUnoShgE96rZuAAAALOtDPXvBAmDjOX5CTRSTM6XyuwWzMswbM3uUfzOeOLMQaSA2B3DAosEsdjMTo425XQeXa9j5SHCDrWU7FkBYD6hoeEB0DjC5R5QWMTo8eFLRECcYCUdCcgAoE0CMDqe8eTTRHgdfpsgciizSdIeMAocfAKd0CMCab6Y5gRuXoXuxuoA2ALE4Bvgpu4jptZvFQQDHDGtQCAD5StMIAB9ugAs8o8u5I+cXZFtCv9y5uoQ6ugqessFJd+emsTTmt2u7PjERFtE3G1WusTTuvZdfOtHZMQB+swk-UvGtHgvrGAA8sa6PqDaCLJiwJJZaQ4fkHIJGgIAMrygAsyZDfGQUuRtQCAAq3oABIW6XYw4XFbWdl9A4DHirHd+tKrHN6rsFmrmLkAlLJgi3y3EA7b5bGdx5+DsrN1tbCi1DRgLMTbM3Hn53B9K35HOnVH9xEAdHHgW3THh3Id93A46tLWKx1qMPsPcP91EA2nbHFdxX8PaPcPGrCzwx8o8oUST65AxAGAXOnNk0+AOxbBeQUAI4APJgnjMFSlowDccRZXt1YwlPxiHQUSFIAi5P1bi1sU1PE1G3qwpI5kQreQMAkvGdkvMAY1C4Coh2x2p2oAqWqvQqACLmgWHR5sls3WoABO5AoA+Ir5BMxsoAt+bAMqQwre785AMAh2dA2Q73Maolz1V9r1kk62GvpWOARwmoic7TZ01+5+qw3sz2cyn+ggNAYf5AgccpfYgu-YsqZAGAkBxQihpwNIpIZu6msZMfMAZ+LAQoKf6fShIeQHABijagbAXMtsCfkgRfAgoAbaoAegxAQwIsyYVKfdThwA9fSfcqzfYoQ-dAlOnf3fRiDA5A5ANAhsfMmYV8Agvf-fjfQ-L4I-Y-xQXfEQPf0F4AEDU-M-hsvkLTEAgAcAaAAScmgHnoAEmJzUicffWAifq-LfMa3QMa4-O-UAThuBkk4wEjWoLapf3FKb1gQn3SAPHyf4N8cAqZcHrnTSo6M6ibWLgin0YBnkM+jADrNXzyC4gUSWtXPvmXz6F9k+pADAKX1OBjEIASBE-IFRA5YCa+-3Jvi3zb4d87O-3FjDvxQqgsqBLXa1EwOH63Yx+bA-WhwJGS8C4eh-WfkwA7L603OkAMpkHzPxp0UwTeYoFgXfyR8BARHBmKAGgjJkGAreHLPTTGCPkhgBgJvOMwsGKsdwOZFYAzCNxYBvIdQb4GvH+xDAAAQkMCbznIA+bTSyIQWOCABZlUAApemPH8EgAgAA",target:"_blank",rel:"noopener noreferrer"},B=s("\u5728\u7EBF\u7EC3\u4E60"),w={href:"https://pro.ant.design/",target:"_blank",rel:"noopener noreferrer"},Q=s("Ant Design Pro\u5B98\u7F51"),h=n("h2",{id:"\u514D\u8D39\u6587\u7AE0\u548C\u6559\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u514D\u8D39\u6587\u7AE0\u548C\u6559\u7A0B","aria-hidden":"true"},"#"),s(" \u514D\u8D39\u6587\u7AE0\u548C\u6559\u7A0B")],-1),I={href:"https://juejin.cn/post/6926794697553739784",target:"_blank",rel:"noopener noreferrer"},f=s("\u6398\u91D1| TypeScript \u9AD8\u7EA7\u7528\u6CD5"),C={href:"https://juejin.cn/post/6844904184894980104",target:"_blank",rel:"noopener noreferrer"},E=s("\u6398\u91D1| \u4E00\u6587\u8BFB\u61C2 TypeScript \u6CDB\u578B\u53CA\u5E94\u7528"),M={href:"https://juejin.cn/post/6872111128135073806",target:"_blank",rel:"noopener noreferrer"},y=s("\u6398\u91D1| \u4E00\u4EFD\u4E0D\u53EF\u591A\u5F97\u7684 TS \u5B66\u4E60\u6307\u5357\uFF081.8W\u5B57\uFF09"),D=e('<h2 id="\u514D\u8D39\u89C6\u9891" tabindex="-1"><a class="header-anchor" href="#\u514D\u8D39\u89C6\u9891" aria-hidden="true">#</a> \u514D\u8D39\u89C6\u9891</h2><div class="custom-container warning"><p class="custom-container-title">@todo</p><p>B\u7AD9\u5F55\u5236</p></div><h2 id="\u4E66\u7C4D\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u4E66\u7C4D\u63A8\u8350" aria-hidden="true">#</a> \u4E66\u7C4D\u63A8\u8350</h2>',3),F={href:"https://ts.xcatliu.com/",target:"_blank",rel:"noopener noreferrer"},G=s("TypeScript \u5165\u95E8\u6559\u7A0B"),K={href:"https://jkchao.github.io/typescript-book-chinese/#why",target:"_blank",rel:"noopener noreferrer"},T=s("\u6DF1\u5165\u7406\u89E3 TypeScript"),x=n("h2",{id:"\u4ED8\u8D39\u8BFE\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ED8\u8D39\u8BFE\u7A0B","aria-hidden":"true"},"#"),s(" \u4ED8\u8D39\u8BFE\u7A0B")],-1),R={href:"https://time.geekbang.org/column/intro/100094401?code=r78oEOqzZRyXf4pq6sDsv55Txm-8xGuB94dQMOW19Q8%3D&page=A",target:"_blank",rel:"noopener noreferrer"},H=s("\u6781\u5BA2\u65F6\u95F4| \u5E26\u4F60\u73A9\u8F6CVue3\u5168\u5BB6\u6876");function U(N,Y){const o=t("roadmap"),p=t("ExternalLinkIcon");return l(),r(A,null,[u,k,a(o,{data:[{title:"Typescript",download:!0,x:400,y:20},{title:"\u5B66\u4E60\u76EE\u6807",y:200,left:[["\u57FA\u7840\u7C7B\u578B"],["Interface"],["\u590D\u5408\u7C7B\u578B"],["\u64CD\u4F5C\u7B26",[["keyof"],["in"]]],["\u51FD\u6570\u7C7B\u578B"]],right:[["Vue+TS"],["React+TS"],["\u6CDB\u578B<T>",[["extends"],["infer"],["Partial"],["Record"],["Omit"]]],["\u7F51\u7EDC\u63A5\u53E3\u7C7B\u578B"]]},{title:"\u4F7F\u7528TS\u5F00\u53D1\u9879\u76EE",y:120}]}),b,n("ul",null,[n("li",null,[n("a",g,[m,a(p)])]),n("li",null,[n("a",d,[B,a(p)])]),n("li",null,[n("a",w,[Q,a(p)])])]),h,n("ul",null,[n("li",null,[n("a",I,[f,a(p)])]),n("li",null,[n("a",C,[E,a(p)])]),n("li",null,[n("a",M,[y,a(p)])])]),D,n("ul",null,[n("li",null,[n("a",F,[G,a(p)])]),n("li",null,[n("a",K,[T,a(p)])])]),x,n("ul",null,[n("li",null,[n("a",R,[H,a(p)])])])],64)}var q=c(i,[["render",U]]);export{q as default};
