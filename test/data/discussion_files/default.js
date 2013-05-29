(function(){var m=Handlebars.template;(Handlebars.discovery=Handlebars.discovery||{}).templates=m(function(g,l,e,h,a){function b(a,b,j){var c="",f;c+='\n        <section id="';(f=e.id)?f=f.call(a,{hash:{},data:b}):(f=a.id,f=typeof f===r?f.apply(a):f);c+=o(f)+'" class="';(f=e.className)?f=f.call(a,{hash:{},data:b}):(f=a.className,f=typeof f===r?f.apply(a):f);c+=o(f)+'">\n            <header class="discovery-col-header">\n\n                ';if((f=e["if"].call(a,b.index===b.length-1,{hash:{},inverse:i.noop,
fn:i.program(3,u,b),data:b}))||f===0)c+=f;c+="\n\n                ";if((f=e["if"].call(a,a.type==="organic",{hash:{},inverse:i.noop,fn:i.programWithDepth(k,b,j),data:b}))||f===0)c+=f;c+="\n                ";if((f=e["if"].call(a,a.type==="promoted",{hash:{},inverse:i.noop,fn:i.program(7,d,b),data:b}))||f===0)c+=f;c+='\n\n            </header>\n            <ul class="discovery-posts">\n            </ul>\n        </section>\n    ';return c}function u(a,b){var f="";f+='\n                    \n                    <div class="discovery-options">\n                        <span class="publisher-anchor-color"><a href="#" class="discovery-help" data-action="discovery-help">'+
o(e.t.call(a,gettext("What's this?"),{hash:{},data:b}))+"</a></span>\n                    </div>\n                ";return f}function k(a,b,f){var c="";c+="\n                    <h2>"+o(e.t.call(a,gettext("Also on %(forumName)s"),{hash:{forumName:{partial:"forumName",context:f.forum,executePartial:!0}},data:b}))+"</h2>\n                ";return c}function d(a,b){var f="";f+="\n                    <h2>"+o(e.t.call(a,gettext("Around The Web"),{hash:{},data:b}))+"</h2>\n                ";return f}function j(a,
b,j){var c="",d,k;c+='\n        <li class="discovery-post" id="discovery-link-';if((d=e["if"].call(a,a.id,{hash:{},inverse:i.program(19,t,b),fn:i.program(17,f,b),data:b}))||d===0)c+=d;c+='">\n            <header class="discovery-post-header">\n                <h3 title="';(d=e.title)?d=d.call(a,{hash:{},data:b}):(d=a.title,d=typeof d===r?d.apply(a):d);c+=o(d)+'">\n                    <a ';if((d=i.invokePartial(h.linkAttributes,"linkAttributes",a,e,h,b))||d===0)c+=d;c+=' data-role="discovery-thread-title" class="title publisher-anchor-color line-truncate" data-line-truncate="2">\n                        '+
o(e.html.call(a,a.title,{hash:{},data:b}))+"\n                    </a>\n\n                    ";if((k=e["if"].call(a,(d=j.variant,d==null||d===!1?d:d.inlineMeta),{hash:{},inverse:i.noop,fn:i.program(21,w,b),data:b}))||k===0)c+=k;c+="\n\n                </h3>\n\n                ";if((k=e.unless.call(a,(d=j.variant,d==null||d===!1?d:d.inlineMeta),{hash:{},inverse:i.noop,fn:i.program(29,m,b),data:b}))||k===0)c+=k;c+="\n\n            </header>\n\n            ";if((k=e["if"].call(a,(d=j.variant,d==null||
d===!1?d:d.contentPreviews)&&a.preview,{hash:{},inverse:i.noop,fn:i.program(34,x,b),data:b}))||k===0)c+=k;c+="\n\n        </li>\n    ";return c}function f(a,b){var d="",c;d+="organic";(c=e.id)?c=c.call(a,{hash:{},data:b}):(c=a.id,c=typeof c===r?c.apply(a):c);d+=o(c);return d}function t(a,b){var d="",c;d+="promoted";(c=e.body_id)?c=c.call(a,{hash:{},data:b}):(c=a.body_id,c=typeof c===r?c.apply(a):c);d+=o(c);return d}function w(a,b){var d="",c;d+="\n                        ";if((c=e["if"].call(a,a.posts>
0,{hash:{},inverse:i.program(24,n,b),fn:i.program(22,y,b),data:b}))||c===0)d+=c;d+="\n                        ";if((c=e["if"].call(a,a.brand,{hash:{},inverse:i.noop,fn:i.program(27,q,b),data:b}))||c===0)d+=c;d+="\n                    ";return d}function y(a,b){var d="",c;d+='\n                            <span class="inline-meta">\n                                ';if((c=i.invokePartial(h.discoveryPostCount,"discoveryPostCount",a,e,h,b))||c===0)d+=c;d+="\n                            </span>\n                        ";
return d}function n(a,b){var d="",c;d+="\n                            ";if((c=e["if"].call(a,a.createdAgo,{hash:{},inverse:i.noop,fn:i.program(25,s,b),data:b}))||c===0)d+=c;d+="\n                        ";return d}function s(a,b){var d="",c;d+='\n                                <span class="inline-meta">';(c=e.createdAgo)?c=c.call(a,{hash:{},data:b}):(c=a.createdAgo,c=typeof c===r?c.apply(a):c);d+=o(c)+"</span>\n                            ";return d}function q(a,b){var d="",c;d+='\n                            <span class="inline-meta">\n                                ';
(c=e.brand)?c=c.call(a,{hash:{},data:b}):(c=a.brand,c=typeof c===r?c.apply(a):c);d+=o(c)+"\n                            </span>\n                        ";return d}function m(a,b){var d="",c;d+='\n                    <ul class="meta">\n                        ';if((c=e["if"].call(a,a.posts>0,{hash:{},inverse:i.noop,fn:i.program(30,z,b),data:b}))||c===0)d+=c;d+="\n                        ";if((c=e["if"].call(a,a.createdAgo,{hash:{},inverse:i.noop,fn:i.program(32,A,b),data:b}))||c===0)d+=c;d+="\n                    </ul>\n                ";
return d}function z(a,b){var d="",c;d+='\n                            <li class="comments">\n                                ';if((c=i.invokePartial(h.discoveryPostCount,"discoveryPostCount",a,e,h,b))||c===0)d+=c;d+="\n                            </li>\n                        ";return d}function A(a,b){var d="",c;d+='\n                            <li class="time">';(c=e.createdAgo)?c=c.call(a,{hash:{},data:b}):(c=a.createdAgo,c=typeof c===r?c.apply(a):c);d+=o(c)+"</li>\n                        ";
return d}function x(a,b){var d="",c;d+="\n                ";if((c=i.invokePartial(h.discoveryContentPreview,"discoveryContentPreview",a,e,h,b))||c===0)d+=c;d+="\n            ";return d}function B(){return'target="_blank" rel="nofollow"'}function C(a,d){var b="";b+="\n        "+o(e.t.call(a,gettext("1 comment"),{hash:{},data:d}))+"\n    ";return b}function D(a,d){var b="";b+="\n        "+o(e.t.call(a,gettext("%(numPosts)s comments"),{hash:{numPosts:a.posts},data:d}))+"\n    ";return b}this.compilerInfo=
[2,">= 1.0.0-rc.3"];var e=e||g.helpers,h=h||g.partials,a=a||{},g="",p,o=this.escapeExpression,r="function",i=this;if((p=e.partial.call(l,"discoveryMain",{hash:{},inverse:i.noop,fn:i.programWithDepth(function(a,d,f){var c="",j;c+='\n<div id="';(j=e.id)?j=j.call(a,{hash:{},data:d}):(j=a.id,j=typeof j===r?j.apply(a):j);c+=o(j)+'" class="discovery-main">\n    <div id="discovery-note" style="display:none;">\n        <div class="alert">\n        <a href="#" class="close" data-action="discovery-help-close" title="'+
o(e.t.call(a,gettext("Close this box"),{hash:{},data:d}))+'">\u00d7</a>\n        '+o(e.t.call(a,gettext("Disqus helps you find new and interesting content, discussions and products. Some sponsors and ecommerce sites may pay us for these recommendations and links. %(learnMore)s or %(feedback)s."),{hash:{learnMore:{partial:"learnMore",context:f,executePartial:!0},feedback:{partial:"feedback",context:f,executePartial:!0}},data:d}))+"\n        </div>\n    </div>\n\n    ";if((j=e.each.call(a,a.sections,
{hash:{},inverse:i.noop,fn:i.programWithDepth(b,d,a),data:d}))||j===0)c+=j;c+="\n\n</div>\n";return c},a,l),data:a}))||p===0)g+=p;g+="\n\n";if((p=e.partial.call(l,"learnMore",{hash:{},inverse:i.noop,fn:i.program(9,function(a,d){var b="";b+='\n    <a href="http://help.disqus.com/customer/portal/articles/666278-introducing-promoted-discovery-and-f-a-q-"\n        target="_blank">'+o(e.t.call(a,gettext("Learn more"),{hash:{},data:d}))+"</a>\n";return b},a),data:a}))||p===0)g+=p;g+="\n\n";if((p=e.partial.call(l,
"feedback",{hash:{},inverse:i.noop,fn:i.program(11,function(a,d){var b="";b+='\n    <a href="https://www.surveymonkey.com/s/GHK872T" target="_blank">\n        '+o(e.t.call(a,gettext("give us feedback"),{hash:{},data:d}))+"</a>\n";return b},a),data:a}))||p===0)g+=p;g+="\n\n";if((p=e.partial.call(l,"forumName",{hash:{},inverse:i.noop,fn:i.program(13,function(a,d){var b="",c;b+="\n    <strong>";(c=e.name)?c=c.call(a,{hash:{},data:d}):(c=a.name,c=typeof c===r?c.apply(a):c);b+=o(c)+"</strong>\n";return b},
a),data:a}))||p===0)g+=p;g+="\n\n";if((p=e.partial.call(l,"discoveryCollection",{hash:{},inverse:i.noop,fn:i.program(15,function(a,d){var b="",c;b+="\n    ";if((c=e.each.call(a,a.collection,{hash:{},inverse:i.noop,fn:i.programWithDepth(j,d,a),data:d}))||c===0)b+=c;b+="\n";return b},a),data:a}))||p===0)g+=p;g+="\n\n";if((p=e.partial.call(l,"linkAttributes",{hash:{},inverse:i.noop,fn:i.program(36,function(a,d){var b="",c;b+='\n    href="';(c=e.redirectUrl)?c=c.call(a,{hash:{},data:d}):(c=a.redirectUrl,
c=typeof c===r?c.apply(a):c);b+=o(c)+'" ';if((c=e["if"].call(a,a.brand,{hash:{},inverse:i.noop,fn:i.program(37,B,d),data:d}))||c===0)b+=c;b+="\n";return b},a),data:a}))||p===0)g+=p;g+="\n\n";if((p=e.partial.call(l,"discoveryContentPreview",{hash:{},inverse:i.noop,fn:i.program(39,function(a,b){var F;var E;var v;var d="",c;d+="\n    <a ";if((c=i.invokePartial(h.linkAttributes,"linkAttributes",a,e,h,b))||c===0)d+=c;d+=' class="top-comment" data-role="discovery-top-comment">\n        <img src="'+o((E=
(v=(c=(c=a.preview,c==null||c===!1?c:c.author),c==null||c===!1?c:c.avatar),c=v,c==null||c===!1?c:c.cache),c=E,typeof c===r?c.apply(a):c))+'" alt="'+o(e.t.call(a,gettext("Avatar"),{hash:{},data:b}))+'" data-role="discovery-avatar">\n        <p><span class="user" data-role="discovery-top-comment-author">'+o((F=(c=(c=a.preview,c==null||c===!1?c:c.author),c==null||c===!1?c:c.name),c=F,typeof c===r?c.apply(a):c))+'</span> &#8212; <span data-role="discovery-top-comment-snippet" class="line-truncate" data-line-truncate="3">'+
o((c=(c=a.preview,c==null||c===!1?c:c.plaintext),typeof c===r?c.apply(a):c))+"</span></p>\n    </a>\n";return d},a),data:a}))||p===0)g+=p;g+="\n\n";if((p=e.partial.call(l,"discoveryPostCount",{hash:{},inverse:i.noop,fn:i.program(41,function(a,d){var b="",c;b+="\n    ";if((c=e["if"].call(a,a.posts===1,{hash:{},inverse:i.program(44,D,d),fn:i.program(42,C,d),data:d}))||c===0)b+=c;b+="\n";return b},a),data:a}))||p===0)g+=p;g+="\n";return g})})();
DISQUS.define("discovery.collections",function(){var m=DISQUS.JSON,g=_.strip,l=DISQUS.use("discovery.helpers"),e=DISQUS.use("discovery.models"),h=Backbone.Collection.extend({url:function(a){return DISQUS.api.getURL(a)},fetch:function(a){a=a||{};a.reset=!0;return Backbone.Collection.prototype.fetch.call(this,a)},parse:function(a){return a.response}}),a=function(a){var b=a.prototype;return a.extend({url:function(){return b.url.call(this,"discovery/listTopPost.json")},parse:function(a){for(var a=b.parse.call(this,
a),d=0,k=a.length;d<k;d++)a[d].plaintext=g(a[d].message);return a}})}(h),b=function(a){var b=a.prototype;return a.extend({initialize:function(a,b){this.model=e[this.modelName];this.sourceThread=b.sourceThread;this.modelAttributes=b.modelAttributes;this.getBanditJSON=_.memoize(this.getBanditJSON)},fetch:function(a){a=a||{};a.data=a.data||{};a.data.thread=this.sourceThread.id;return b.fetch.call(this,a)},parse:function(a){a=b.parse.call(this,a);if("bandit"in a)this.bandit=a.bandit,a=a.results;if(!_.isArray(a))return[];
_.each(a,function(a){_.extend(a,this.modelAttributes)},this);return a},getBanditJSON:function(){return m.stringify(this.bandit)}})}(h),u=function(a){var b=a.prototype;return a.extend({modelName:"RelatedThread",url:function(){return b.url.call(this,"discovery/listRelated.json")},parse:function(a){return this.rejectInvalid(b.parse.call(this,a))},rejectInvalid:function(a){var b=this.sourceThread;if(DISQUS.debug)return a.slice();return _.filter(a,function(a){if(a.id==b.id||a.link==b.link)return this.reportInvalid(a,
"Link or id of related thread points back to thread on this page (circular reference)"),!1;if(a.title.search(/^https?:\/\//)===0)return this.reportInvalid(a,"Title looks like a url (begins with http:// or https://)"),!1;return!0},this)},reportInvalid:function(a,b){var d=l.log;d("An organic link failed validation:",a.title,a.link,"(id =",a.id+")");d("Reason:",b)}})}(b),k=function(a){var b=a.prototype;return a.extend({modelName:"Advertisement",url:function(){return b.url.call(this,"discovery/listPromoted.json")}})}(b),
a={PostCollection:a,RelatedThreadCollection:u,AdvertisementCollection:k};if(DISQUS.testing)a.BaseCollection=h,a.BaseContentCollection=b;return a});
DISQUS.define("discovery.helpers",function(m,g){var l=!1,e=!1,h=function(){};m.console&&(h=function(){if(e){var a=_.toArray(arguments);a.unshift("[Discovery]");m.console.log.apply?m.console.log.apply(m.console,a):m.console.log(a.join(" "))}});return{config:function(a){l=!!a.lineTruncationEnabled;e=!!a.consoleLoggingEnabled},isMobile:function(){return DISQUS.browser.mobile},log:h,allowLog:function(a){if(a===g)return e;e=!!a},allowLineTruncate:function(a){if(a===g)return l;l=!!a},lineTruncate:function(a,
b){function e(){return f.scrollHeight-f.offsetHeight>0.2*t}function k(){j.lastChild&&!_.contains(["...","\u2026"],j.lastChild.nodeValue)&&(h=j.appendChild(m.document.createTextNode(" "+g)),e()&&(j.removeChild(h),j.removeChild(j.lastChild),k()))}if(l){var d=DISQUS.logError||function(){};if(!a.closest("body").length)return void d("lineTruncate called on el not on DOM");if(a.text().length<1)return void d("lineTruncated called on empty el");if(_.any(a.children(),function(a){return a.nodeType!==3}))return void d("lineTruncate called on non-flat el");
var j=a[0],f=j;if(a.css("display")!=="block")for(;f.parentNode;)if(f=f.parentNode,$(f).css("display")==="block")break;var t=parseFloat(a.css("font-size"),10);if(e()){var b=b||{},d=b.lines||1,g=b.ellipsis,h,n=a.text();if(n.length){var s=a.width()/t,d=parseInt(s*d,10),n=n.split(/\s/),s=0;a.empty();for(var q=0,v=n.length;q<v;q++){s+=n[q].length+1;if(s>=d)break;j.appendChild(document.createTextNode(" "+n[q]))}if(e()){do h=j.removeChild(j.lastChild);while(e())}else{do h=j.appendChild(document.createTextNode(" "+
n[q++]));while(!e()&&q<v);j.removeChild(h)}g&&(_.isString(g)||(g="\u2026"),k())}}}},balancedPartition:function(a){var b=_.keys(a),e=Math.floor(_.reduce(a,function(a,b){return a+b},0)/2),k=b.length+1;e+=1;var d=Array(k),j,f;for(j=0;j<k;j++)d[j]=Array(e),d[j][0]={};for(f=1;f<e;f++)d[0][f]=!1;var t,g,h,n={};for(f=1;f<e;f++)for(j=1;j<k;j++){t=b[j-1];g=a[t];h=_.clone(d[j-1][f]);if(!h&&g<=f&&(h=_.clone(d[j-1][f-g])))h[t]=g,n=h;d[j][f]=h}return[n,_.omit(a,_.keys(n))]}}});
DISQUS.define("discovery.models",function(){var m=DISQUS.use("time"),g=function(e){var a=e.prototype;return e.extend({defaults:{redirectUrl:null,signedUrl:null,userId:null,sourceThreadId:null,forumId:null,forum:null,majorVersion:null,variant:null,isExperiment:!1},redirectPayload:function(){var a={url:this.get("signedUrl"),imp:DISQUS.juggler.impId,forum_id:this.get("forumId"),forum:this.get("forum"),thread_id:this.get("sourceThreadId"),major_version:this.get("majorVersion")};if(this.get("isExperiment"))a.variant=
this.get("variant");if(this.has("userId"))a.user_id=this.get("userId");if(this.collection&&this.collection.bandit)a.bandit=this.collection.getBanditJSON();return a},redirectUrl:function(){var a=this.get("redirectUrl"),e=this.redirectPayload();return DISQUS.serialize(a,e)},toJSON:function(){var b=a.toJSON.call(this);b.redirectUrl=this.redirectUrl();return b},toString:function(){return this.get("title")+" "+this.get("link")+" (id = "+this.id+")"}})}(Backbone.Model),l=function(e){var a=e.prototype;return e.extend({defaults:_.defaults({createdAgo:!1},
a.defaults),initialize:function(){if(this.get("createdAgo")){var a=m.assureTzOffset(this.get("createdAt")),a=moment(a,m.ISO_8601);this.set("createdAgo",a.fromNow())}},redirectPayload:function(){var b=a.redirectPayload.call(this);_.extend(b,{thread:this.id,zone:"internal_discovery"});return b},toJSON:function(){var b=a.toJSON.call(this);if(b.preview)b.preview=b.preview.toJSON();return b},toString:function(){return"organic link: "+a.toString.call(this)}})}(g),e=function(e){var a=e.prototype;return e.extend({idAttribute:"body_id",
defaults:_.defaults({brand:"",headline:"",text:"",url:"",advertisement_id:0,body_id:0,mobile:!0},a.defaults),get:function(b){if(b==="title")return this.attributes.headline;if(b==="link")return this.attributes.url;return a.get.call(this,b)},redirectPayload:function(){var b=a.redirectPayload.call(this);_.extend(b,{zone:"promoted_discovery",advertisement_id:this.get("advertisement_id"),body_id:this.get("body_id")});return b},toJSON:function(){var b=a.toJSON.call(this);b.title=b.headline;b.link=b.url;
return b},toString:function(){return"promoted link: "+a.toString.call(this)}})}(g),l={RelatedThread:l,Advertisement:e};if(DISQUS.testing)l.BaseContentModel=g;return l});
DISQUS.define("discovery",function(){var m=DISQUS.use("discovery.collections"),g=DISQUS.use("discovery.views"),l=DISQUS.use("discovery.helpers"),e=Backbone.Model.extend({defaults:{name:"default",inlineMeta:!1,contentPreviews:!0,promotedEnabled:!1,topPlacementEnabled:!1,isExperiment:!1,redirectUrl:"//redirect.disqus.com/url",listRelatedLimit:null,listPromotedLimit:null,httpTimeout:1E4,sourceThread:null,sourceForum:null,help:!1,display:!1,columnEveningEnabled:!0,numColumns:2,minPerColumn:1,maxPerColumn:2,
toleranceCoefficient:1.2,minWidthForColumnLayout:440,containerId:"discovery",topPlacementContainerId:"discovery-top",innerContainerName:"discovery-main",sectionNames:["col-organic","col-promoted"],collectionTagName:"ul",collectionClassName:"discovery-posts",consoleLoggingEnabled:DISQUS.debug,lineTruncationEnabled:!0,session:null,js:null,css:null},initialize:function(){var a=this;a.createDataReferences();a.set("innerContainerId",a.get("innerContainerName")+"-"+a.cid);a.set("sectionIds",_.map(a.get("sectionNames"),
function(b){return b+"-"+a.cid}));var b=a.get("session");a.get("topPlacementEnabled")&&b.isAnonymous()&&a.set("containerId",a.get("topPlacementContainerId"));a.once("change:display",function(){a.onComplete()});_.bindAll(a,"getContentPreviews","validateData","showData");a.run()},commonClickMetadata:function(){var a=this.get("sourceThread"),b=this.get("sourceForum"),a={redirectUrl:this.get("redirectUrl"),sourceThreadId:a.id,forumId:b.pk,forum:b.id,majorVersion:this.majorVersion(),variant:this.get("name"),
isExperiment:this.get("isExperiment")};if((b=this.get("session"))&&b.isRegistered())a.userId=b.user.id;return a},createDataReferences:function(){function a(){this.sourceThread=b.get("sourceThread");this.modelAttributes=b.commonClickMetadata()}var b=this;b.collections=[];var e=new a;e.modelAttributes.createdAgo=!0;this.threads=new m.RelatedThreadCollection(null,e);this.collections.push(this.threads);if(this.get("promotedEnabled"))this.ads=new m.AdvertisementCollection(null,new a),this.collections.push(this.ads)},
run:function(){var a=_.bind(this.onComplete,this);this.getData().then(this.validateData).then(this.showData).otherwise(a)},getData:function(){function a(){this.timeout=b.get("httpTimeout");this.data={limit:e/b.collections.length*b.get("maxPerColumn")}}var b=this,e=b.get("numColumns"),k=new a;if(b.has("listRelatedLimit"))k.data.limit=b.get("listRelatedLimit");var d=b.listRelatedRequest=when(b.threads.fetch(k));b.get("contentPreviews")&&(d=d.then(b.getContentPreviews));if(!b.get("promotedEnabled"))return d;
k=new a;b.has("listPromotedLimit")?k.data.limit=b.get("listPromotedLimit"):k.data.limit*=2;k=b.listPromotedRequest=when(b.ads.fetch(k));return when.join(d,k)},getContentPreviews:function(){var a=this.threads.filter(function(a){return!a.get("posts")});DISQUS.debug||_.each(a,function(a){l.log("Rejecting "+a);l.log("Reason: Thread at that link has no comments");this.threads.remove(a)},this);var a=this.threads.pluck("id"),b=this.collections.length,e=this.get("numColumns"),k=this.get("minPerColumn");if(a.length<
e/b*k)return when.resolve();this.previews=new m.PostCollection;return(this.listTopPostRequest=when(this.previews.fetch({data:{thread:a},timeout:this.get("httpTimeout")}))).then(_.bind(this.attachPreviews,this))},attachPreviews:function(){var a=this;a.previews.each(function(b){var e=b.get("thread");(e=a.threads.get(e.id||e))&&e.set("preview",b)})},validateCollections:function(){for(var a=this.collections,b=a.length,e=this.get("numColumns"),k=this.get("minPerColumn"),d,j;b>0;)if(j=e/a.length*k,d=a[--b],
d.length<j)a.splice(b,1),b=a.length;b=a.length;if(b>0){e=e/b*this.get("maxPerColumn");for(k=0;k<b;k++)d=a[k],d.length>e&&d.reset(d.slice(0,e))}},validateData:function(){l.isMobile()&&this.ads&&this.ads.length>0&&this.ads.remove(this.ads.where({mobile:!1}));this.validateCollections();if(this.collections.length===0)throw"Not enough data";},showData:function(){function a(a){_.extend(this,a);this.appContext=b.toJSON()}var b=this,e=document.getElementById(b.get("containerId"));if(!e)throw"No container on the DOM";
e=b.mainView=new g.MainView(new a({el:e,model:b}));e.render();var k=b.get("sectionIds"),d=b.get("collectionTagName"),j=b.get("collectionClassName");b.views=_.map(b.collections,function(b,e){return new g.BaseCollectionView(new a({collection:b,el:$("#"+k[e]+" "+d+"."+j)}))});b.views.length===2&&e.$el.find("#"+b.get("innerContainerId")).addClass("doublesection");_.invoke(b.views,"render");if(b.get("columnEveningEnabled")&&e.$el.width()>b.get("minWidthForColumnLayout"))(new g.TwoColumn({views:b.views,
fudge:this.get("toleranceCoefficient")})).render();else{var f=_.min(_.pluck(b.collections,"length"));_.each(b.views,function(a){for(;a.collection.length>f;)a.collection.pop()})}b.set("display",!0)},onComplete:function(a){var b=l.log;if(this.onCompleteCalled)return b("Error: Final reporting function called more than once");this.onCompleteCalled=!0;a&&b("It looks like there was a problem:",a);this.report()},report:function(){var a=l.log,b=this.snapshot(),e=DISQUS.juggler.client("juggler");if(!e)return void a("Cannot report app state, no client found");
a("Sending analytics data about this Discovery impression:");a("init_discovery: ",b);e.emit("init_discovery",b);this.get("darkJester")&&DISQUS.juggler.client("jester",!0).emit("init_discovery",b)},majorVersion:function(){return this.get("promotedEnabled")?"midway":"metadata"},snapshot:function(){var a=this.collections,b=this.threads,b={major_version:this.majorVersion(),internal_organic:b.length,external_organic:0,promoted:0,display:this.get("display"),placement:this.get("containerId")===this.get("topPlacementContainerId")?
"top":"bottom"};if(this.get("promotedEnabled")){var e=this.ads;_.extend(b,{promoted:e.length,promoted_ids:DISQUS.JSON.stringify(e.pluck("advertisement_id"))})}a=_.extend.apply(_,[{}].concat(_.pluck(a,"bandit")));if(!_.isEmpty(a))b.bandit=DISQUS.JSON.stringify(a);if(this.get("isExperiment"))b.variant=this.get("name");return b}}),h={};if(DISQUS.testing)h.DiscoveryApp=e;h.init=function(a){var b=_.object(_.map(["lineTruncationEnabled","consoleLoggingEnabled"],function(b){return b in a?[b,a[b]]:[b,e.prototype.defaults[b]]}));
l.config(b);return new e(a)};return h});
DISQUS.define("discovery.views",function(){var m=DISQUS.use("discovery.helpers"),g=Backbone.View.extend({initialize:function(a){if(a&&a.appContext)this.appContext=a.appContext},getTemplateContext:function(){if(!this.appContext)return{};return{variant:this.appContext}},template:function(a,b){b=b||this.templateName;return DISQUS.renderBlock(b,a)}}),l=function(a){var b=a.prototype;return a.extend({events:{"click [data-redirect]":"handleClick"},handleClick:function(a){this.swapHref(a.currentTarget)},swapHref:function(a){a.setAttribute("data-href",
a.getAttribute("href"));a.setAttribute("href",a.getAttribute("data-redirect"));_.delay(function(){a.setAttribute("href",a.getAttribute("data-href"))},100)},templateName:"discoveryCollection",initialize:function(a){b.initialize.call(this,a);this.elementsSelector="li.discovery-post";this.$elements=this.$el.find(this.elementsSelector);this.collectionName="collection";a=this.collection;a.on("remove",this.remove,this);a.on("reset",this.render,this)},truncate:function(){this.$el.find(".line-truncate").each(function(a){a=
$(a);m.lineTruncate(a,{lines:a.attr("data-line-truncate"),ellipsis:!0})})},render:function(){var a=this.getTemplateContext();a[this.collectionName]=this.collection.toJSON();this.$el.html(this.template(a));this.$elements=this.$el.find(this.elementsSelector);this.truncate();return this},remove:function(a,b,d){if(arguments.length===0)return g.prototype.remove.call(this);var e=_.toArray(this.$elements),k=e.splice(d.index,1)[0];$(k).remove();this.$elements=$(e);return this}})}(g),e=function(a,b){this.modelIds=
a||[];this.$elements=$(b||[])};_.extend(e.prototype,{height:function(){var a=this;a.heights=[];var b=$(a.$elements),e=b.first().offset().top,e=function(){var a=b.last().offset();return a.top+a.height}()-e,f=0;_.each(b,function(b){b=$(b).height();a.heights.push(b);f+=b});this.interstice=(e-f)/(b.length-1);return e}});var h=function(){this.divideIntoColumns=function(){var a=this,b=a.subviews[0];a.left=new e;a.right=new e;var j=0;b.collection.each(function(e,g){var h=j++%2===0?"left":"right";a[h].modelIds.push(e.id);
Array.prototype.push.call(a[h].$elements,b.$elements[g])})};this.removeOneFromColumn=function(a,b){var e=_.chain(a.modelIds).map(function(b,d){return[b,a.heights[d]]}).sortBy(function(a){return-1*a[1]}).find(function(a){return a[1]<=b}).value()[0],f=this.subviews[0].collection,g=f.models,h=f.get(e),l=g.indexOf(h),e=[[],[]],n,s=g.length;for(n=0;n<s;n++)e[n%2].push(g[n]);g=e[l%2];g.splice(_.indexOf(g,h),1);g=[];h=(l+1)%2;for(n=0;n<s-1;n++)g.push(e[(n+h)%2].shift());f.reset(g)};this.balanceColumns=function(){var a=
this.subviews[0],b=a.collection,e={};b.each(function(b,d){e[d]=a.$elements[d]});var f=m.balancedPartition(e),f=_.sortBy(f,"length"),g=f[0],h=b.models,l=Array(h.length);_.each(f[1],function(a,b){l[2*b]=h[b]});_.each(g,function(a,b){l[2*b+1]=h[b]});b.reset(h)};this.shortenColumn=function(a,b){this.subviews[0].collection.length%2!==0&&a===this.left?this.removeOneFromColumn(a,this.fudge*b):this.balanceColumns()}},a=function(){this.divideIntoColumns=function(){var a=this.subviews,b=a[0],a=a[1];this.left=
new e(b.collection.pluck(b.collection.model.prototype.idAttribute),b.$elements);this.right=new e(a.collection.pluck(a.collection.model.prototype.idAttribute),a.$elements)};this.shortenColumn=function(a,b){for(var e=a===this.left?this.right:this.left,f=b/e.$elements.length,g=(a===this.left?this.subviews[0]:this.subviews[1]).collection,h=_.chain(a.modelIds).map(function(b,d){return[b,a.heights[d]]}).sortBy(function(a){return a[1]}).value(),l=[],n=0,m=b,m=f;h.length;){var q=h.pop(),v=q[0],q=q[1]+a.interstice;
n+q>b&&(e=a);m=Math.abs(b-(n+q));m/=e.$elements.length;m>=f||(f=m,m=a.modelIds.indexOf(v),a.modelIds.splice(m,1),Array.prototype.splice.call(a.$elements,m,1),n+=q,l.push(v))}g.remove(l)}},b=function(b){this.fudge=b.fudge;this.subviews=b.views.slice(0,2);this.subviews.length===1?h.call(this):a.call(this)};_.extend(b.prototype,{ascendingByHeight:function(){var a=this.left,b=this.right,a=[[a,a.height()],[b,b.height()]];return _.sortBy(a,function(a){return a[1]})},evenColumns:function(a){var b=this.ascendingByHeight(),
e=b[0][0],f=b[0][1],g=b[1][0],b=b[1][1];if(f!==b){var f=b-f,h=this.fudge*f,b=_.find(g.heights,function(a){return a+g.interstice<h});if(!a&&b)return this.shortenColumn(g,f),this.divideIntoColumns(),this.evenColumns("do not recurse again");this.increaseMargins(e,f)}},increaseMargins:function(a,b){var e=b/a.$elements.length;_.each(a.$elements,function(a){var a=$(a),b=parseInt(a.css("margin-bottom"),10)+e;a.css("margin-bottom",b+"px")});(a===this.left?this.right:this.left).$elements.css("clear",a===this.right?
"left":"right")},render:function(){this.divideIntoColumns();this.evenColumns();return this}});var u=function(a){var b=a.prototype;return a.extend({templateName:"discoveryMain",events:{"click [data-action=discovery-help]":function(a){a.preventDefault();this.model.set("help",!0)},"click [data-action=discovery-help-close]":function(a){a.preventDefault();this.model.set("help",!1)}},toggleHelp:function(a){this.$el.find("#discovery-note").toggle();a.trigger("resize")},initialize:function(a){b.initialize.call(this,
a);this.model.on("change:display",this.show,this);this.model.on("change:help",this.toggleHelp,this);this.$el.css({position:"absolute",visibility:"hidden",display:"block"})},createSections:function(){var a=this.model,b=DISQUS.discovery.collections,d=b.RelatedThreadCollection,e=b.AdvertisementCollection,g=a.get("sectionNames"),h=a.get("sectionIds");return _.map(a.collections,function(a,b){var f;a instanceof d?f="organic":a instanceof e&&(f="promoted");return{id:h[b],className:g[b],type:f}})},render:function(){var a=
this.model,b=this.createSections();this.$el.html(this.template({id:a.get("innerContainerId"),sections:b,forum:a.get("sourceForum"),session:a.get("session").toJSON()}))},show:function(a){a.get("display")&&(this.$el.css({position:"static",visibility:"visible"}),a.trigger("resize"))}})}(g);return{BaseCollectionView:l,TwoColumn:b,MainView:u}});