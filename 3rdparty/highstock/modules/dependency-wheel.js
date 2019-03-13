/*
  Highcharts JS v7.0.3 (2019-02-06)
 Dependency wheel module

 (c) 2010-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define(function(){return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){(function(c){c.NodesMixin={createNode:function(l){function h(a,b){return c.find(a,function(a){return a.id===b})}var a=h(this.nodes,l),b=this.pointClass,m;a||(m=this.options.nodes&&h(this.options.nodes,l),a=(new b).init(this,c.extend({className:"highcharts-node",isNode:!0,id:l,y:1},
m)),a.linksTo=[],a.linksFrom=[],a.formatPrefix="node",a.name=a.name||a.options.id,a.getSum=function(){var b=0,g=0;a.linksTo.forEach(function(a){b+=a.weight});a.linksFrom.forEach(function(a){g+=a.weight});return Math.max(b,g)},a.offset=function(b,g){for(var d=0,f=0;f<a[g].length;f++){if(a[g][f]===b)return d;d+=a[g][f].weight}},a.hasShape=function(){var b=0;a.linksTo.forEach(function(a){a.outgoing&&b++});return!a.linksTo.length||b!==a.linksTo.length},this.nodes.push(a));return a}}})(c);(function(c){var l=
c.seriesType,h=c.seriesTypes.sankey.prototype;l("dependencywheel","sankey",{center:[],curveFactor:.6,startAngle:0},{orderNodes:!1,getCenter:c.seriesTypes.pie.prototype.getCenter,createNodeColumns:function(){var a=[this.createNodeColumn()];this.nodes.forEach(function(b){b.column=0;a[0].push(b)});return a},getNodePadding:function(){return this.options.nodePadding/Math.PI},createNode:function(a){var b=h.createNode.call(this,a);b.index=this.nodes.length-1;b.getSum=function(){return b.linksFrom.concat(b.linksTo).reduce(function(a,
b){return a+b.weight},0)};b.offset=function(a){function c(a){return a.fromNode===b?a.toNode:a.fromNode}var g=0,d,f=b.linksFrom.concat(b.linksTo),q;f.sort(function(a,b){return c(a).index-c(b).index});for(d=0;d<f.length;d++)if(c(f[d]).index>b.index){f=f.slice(0,d).reverse().concat(f.slice(d).reverse());q=!0;break}q||f.reverse();for(d=0;d<f.length;d++){if(f[d]===a)return g;g+=f[d].weight}};return b},translate:function(){var a=this.options,b=2*Math.PI/(this.chart.plotHeight+this.getNodePadding()),m=this.getCenter(),
l=(a.startAngle-90)*c.deg2rad;h.translate.call(this);this.nodeColumns[0].forEach(function(c){var d=c.shapeArgs,f=m[0],g=m[1],h=m[2]/2,k=h-a.nodeWidth,n=l+b*d.y,d=l+b*(d.y+d.height);c.shapeType="arc";c.shapeArgs={x:f,y:g,r:h,innerR:k,start:n,end:d};c.dlBox={x:f+Math.cos((n+d)/2)*(h+k)/2,y:g+Math.sin((n+d)/2)*(h+k)/2,width:1,height:1};c.linksFrom.forEach(function(c){var d,e=c.linkBase.map(function(e,h){e*=b;var m=Math.cos(l+e)*(k+1),n=Math.sin(l+e)*(k+1),p=a.curveFactor;d=Math.abs(c.linkBase[3-h]*b-
e);d>Math.PI&&(d=2*Math.PI-d);d*=k;d<k&&(p*=d/k);return{x:f+m,y:g+n,cpX:f+(1-p)*m,cpY:g+(1-p)*n}});c.shapeArgs={d:["M",e[0].x,e[0].y,"A",k,k,0,0,1,e[1].x,e[1].y,"C",e[1].cpX,e[1].cpY,e[2].cpX,e[2].cpY,e[2].x,e[2].y,"A",k,k,0,0,1,e[3].x,e[3].y,"C",e[3].cpX,e[3].cpY,e[0].cpX,e[0].cpY,e[0].x,e[0].y]}})})}})})(c)});
//# sourceMappingURL=dependency-wheel.js.map