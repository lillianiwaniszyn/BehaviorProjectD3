$(function(){
	resetData()});
function resetData(){
    var tooltip = d3.select(".tooltip");
    var $container = $('.chart-container'),
        τ = 2 * Math.PI,
        width = $container.width(),
        height = $container.height(),
        innerRadius = Math.min(width,height)/4,
        //innerRadius = (outerRadius/4)*3,
        fontSize = (Math.min(width,height)/4);

var dataset = {
 
	Apple:[],


    Bad: [{"name":"Church", "color" :"#A9A1F0", "count":1.96, "avg":"1.96"},{"name":"     Job interview","count":3.27, "avg":"3.27"},{"name":"Church ","count":3.46 , "avg":"3.46"},
	{"name":" Church","count":3.68, "avg":"3.68"},{"name":"Job interview ","count":3.69 , "avg":"3.69"},{"name":" Job interview","count":3.74 , "avg":"3.74"},
	{"name":"Movies","count":3.97, "avg":"3.97"},{"name":"  Job interview","count":4.00 , "avg":"4.00"},{"name":"   Job interview","count":4.57 , "avg":"4.57"},
	{"name":"Family dinner","count":4.83 , "avg":"4.83"},{"name":"    Job interview","count":5.00 , "avg":"5.00"},{"name":"Movies ","count":5.09 , "avg":"5.09"},
	{"name":"  Church","count":5.85 , "avg":"5.85"},{"name":"Church  ","count":7.01 , "avg":"7.01"},{"name":"   Church","count":7.48 , "avg":"7.48"}
	],
        
		Good: [{"name":"Own room","count":1.96, "category" : "Fight"},{"name":" Own room","count":3.27, "category" : "Belch"},{"name":"Park","count":3.46, "category" : "Run"},
	{"name":"Football game","count":3.68, "category" : "Shout"},{"name":"  Own room","count":3.69, "category" : "Sleep"},{"name":" Park","count":3.74, "category" : "Jump"},
	{"name":"Own room ","count":3.97, "category" : "Argue"},{"name":"Own room  ","count":4.00, "category" : "Cry"},{"name":"Own room   ","count":4.57, "category" : "Mumble"},
	{"name":"   Own room","count":4.83, "category" : "Write"},{"name":"Date","count":5.00, "category" : "Kiss"},{"name":"Own room    ","count":5.09, "category" : "Read"},
	{"name":"Family dinner ","count":5.85, "category" : "Eat"},{"name":"Bar","count":7.01, "category" : "Laugh"},{"name":"    Own room","count":7.48, "category" : "Talk"}
	]
};
    
var color = d3.scale.ordinal()    
.range(["#b20000","#cc0000","#e50000","#ff0000","#ff1919","#ff3232","#ff4c4c","#ff6666","#ff7f7f","#ff9999","#ffb2b2","#ffc9c9","#ffd0d0","#ffd8d8","#ffe0e0",
"#004600","#005000","#005a00","#006400","#197319","#328332","#4c924c","#66a266","#7fb17f","#99c199","#b2d0b2","#cce0cc","#d1e3d1","#d6e6d6","#e5efe5"]);


var pie = d3.layout.pie()
    .value(function(d) { return d.count; })
    .sort(null);

var arc = d3.svg.arc();

var svg = d3.select('.chart-container').append("svg")
        .attr("width", '100%')
        .attr("height", '100%')
        .attr('viewBox','0 0 '+Math.min(width,height) +' '+Math.min(width,height) )
        .attr('preserveAspectRatio','xMinYMin')
        .append("g")
        .attr("transform", "translate(" +  width / 2 + "," + height / 2 + ")");

var gs = svg.selectAll("g").data(d3.values(dataset)).enter().append("g") //.attr("class", "arc");
//var gs = svg.selectAll("g").data(d3.values(dataset)).enter().remove("g")
    
var path = gs.selectAll("path")
    .data(function(d) { return pie(d); })
    .enter()
    .append("g").attr("class", "arc")
    .append("path")
    .attr("id",function(d){ return "yyy"+d.data.name})
    //.attr("fill", function(d, i) { return color(i); })
.attr("fill", function(d, i) { return color(d.data.name); })
    .attr("d", function(d, i, j)
          { return arc.innerRadius(innerRadius+(40*j)).outerRadius(innerRadius+40+(40*j))(d); })
   




//text labels
var text=svg.selectAll("g.arc") 
 .insert("text")
 .style("font-size","10px")
 .style("fill","#000")
  .attr("text-anchor", "start")
 .attr("dy",30)



     
 .append("textPath")
	.attr("startOffset", "50%")
     .attr("xlink:href",function(d){ return "#yyy"+d.data.name})
     .attr("startOffset",5)

.text(function(d) { return d.data.name }); //.toFixed(2)


//add outside labels

var text=svg.selectAll("g.arc") 
 .insert("text")
 .style("font-size","15px")
 .style("font-weight","bold")
 .style("fill","#000")
  .attr("text-anchor", "start")
 .attr("dy",0)



     
 .append("textPath")
	.attr("startOffset", "50%")
     .attr("xlink:href",function(d){ return "#yyy"+d.data.name})
     .attr("startOffset",5)

.text(function(d) { return d.data.category }); //.toFixed(2)


svg.append("foreignObject")
		.attr("x", 350)
		.attr("y", -100)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
        .on("click", function(d, i){


			
            console.log(svg.select("#check1").node().checked);
			
			if (svg.select("#check1").node().checked == true){
							svg.append('text')
var text=svg.selectAll("g.arc") 
 .insert("text")
 .style("font-size","15px")
 .style("font-weight","bold")
 .style("fill","#000")
  .attr("text-anchor", "start")

 .attr("dy",50)



     
 .append("textPath")
	.attr("startOffset", "50%")
	  .attr("id", "fontli")
     .attr("xlink:href",function(d){ return "#yyy"+d.data.name})
     .attr("startOffset",5)

.text(function(d) { return d.data.avg });	
			}
			else {
			d3.selectAll("#fontli").remove();
			}
			
        });

svg.append("foreignObject")
		.attr("x", 350)
		.attr("y", 0)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2 /></form>")
        .on("click", function(d, i){
            console.log(svg.select("#check2").node().checked);
			if (svg.select("#check2").node().checked == true){
				console.log("lillian");
				d3.selectAll("svg").remove();
				updateData();

			}
			else {
			d3.select("#message1").remove();
			}
			
        });
		
		
svg.append("foreignObject")
		.attr("x", 350)
		.attr("y", 100)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3 /></form>")
        .on("click", function(d, i){
            console.log(svg.select("#check3").node().checked);
						if (svg.select("#check3").node().checked == true){
				console.log("lillian");
				d3.selectAll("svg").remove();
				redData();

			}
			else {
			d3.select("#message1").remove();
			}
        });	
svg.append('text')
             .attr('class', 'barsEndlineText')
             .attr('text-anchor', 'middle')
              .attr("x", 500)
             .attr("y", 115)
             .text('Display Worst Places for Behavior')	
			 
svg.append('text')
             .attr('class', 'barsEndlineText')
             .attr('text-anchor', 'middle')
              .attr("x", 500)
             .attr("y", 15)
             .text('Display Best Places for Behavior')	

svg.append('text')
             .attr('class', 'barsEndlineText')
             .attr('text-anchor', 'middle')
              .attr("x", 475)
             .attr("y", -85)
             .text('Display Average Values')				 
		
}
function updateData(){
    var tooltip = d3.select(".tooltip");
    var $container = $('.chart-container'),
        τ = 2 * Math.PI,
        width = $container.width(),
        height = $container.height(),
        innerRadius = Math.min(width,height)/4,
        //innerRadius = (outerRadius/4)*3,
        fontSize = (Math.min(width,height)/4);

var dataset = {
 
	Apple:[],


    Bad: [{"name":"Church", "color" :"#A9A1F0", "count":1.96},{"name":"     Job interview","count":3.27},{"name":"Church ","count":3.46},
	{"name":" Church","count":3.68},{"name":"Job interview ","count":3.69},{"name":" Job interview","count":3.74},
	{"name":"Movies","count":3.97},{"name":"  Job interview","count":4.00},{"name":"   Job interview","count":4.57},
	{"name":"Family dinner","count":4.83},{"name":"    Job interview","count":5.00},{"name":"Movies ","count":5.09},
	{"name":"  Church","count":5.85},{"name":"Church  ","count":7.01},{"name":"   Church","count":7.48}
	],
        
		Good: [{"name":"Own room","count":1.96, "category" : "Fight"},{"name":" Own room","count":3.27, "category" : "Belch"},{"name":"Park","count":3.46, "category" : "Run"},
	{"name":"Football game","count":3.68, "category" : "Shout"},{"name":"  Own room","count":3.69, "category" : "Sleep"},{"name":" Park","count":3.74, "category" : "Jump"},
	{"name":"Own room ","count":3.97, "category" : "Argue"},{"name":"Own room  ","count":4.00, "category" : "Cry"},{"name":"Own room   ","count":4.57, "category" : "Mumble"},
	{"name":"   Own room","count":4.83, "category" : "Write"},{"name":"Date","count":5.00, "category" : "Kiss"},{"name":"Own room    ","count":5.09, "category" : "Read"},
	{"name":"Family dinner ","count":5.85, "category" : "Eat"},{"name":"Bar","count":7.01, "category" : "Laugh"},{"name":"    Own room","count":7.48, "category" : "Talk"}
	]
};
   
var dataset2 = {
 
	Apple:[],


    Bad: [],
        
		Good: [{"name":"Own room","count":1.96, "category" : "Fight"},{"name":" Own room","count":3.27, "category" : "Belch"},{"name":"Park","count":3.46, "category" : "Run"},
	{"name":"Football game","count":3.68, "category" : "Shout"},{"name":"  Own room","count":3.69, "category" : "Sleep"},{"name":" Park","count":3.74, "category" : "Jump"},
	{"name":"Own room ","count":3.97, "category" : "Argue"},{"name":"Own room  ","count":4.00, "category" : "Cry"},{"name":"Own room   ","count":4.57, "category" : "Mumble"},
	{"name":"   Own room","count":4.83, "category" : "Write"},{"name":"Date","count":5.00, "category" : "Kiss"},{"name":"Own room    ","count":5.09, "category" : "Read"},
	{"name":"Family dinner ","count":5.85, "category" : "Eat"},{"name":"Bar","count":7.01, "category" : "Laugh"},{"name":"    Own room","count":7.48, "category" : "Talk"}
	]
};
    
var color = d3.scale.ordinal()    
.range(["#004600","#005000","#005a00","#006400","#197319","#328332","#4c924c","#66a266","#7fb17f","#99c199","#b2d0b2","#cce0cc","#d1e3d1","#d6e6d6","#e5efe5"]);

//var color = d3.scale.category20();

var pie = d3.layout.pie()
    .value(function(d) { return d.count; })
    .sort(null);

var arc = d3.svg.arc();

var svg = d3.select('.chart-container').append("svg")
        .attr("width", '100%')
        .attr("height", '100%')
        .attr('viewBox','0 0 '+Math.min(width,height) +' '+Math.min(width,height) )
        .attr('preserveAspectRatio','xMinYMin')
        .append("g")
        .attr("transform", "translate(" +  width / 2 + "," + height / 2 + ")");

var gs = svg.selectAll("g").data(d3.values(dataset2)).enter().append("g") //.attr("class", "arc");
//var gs = svg.selectAll("g").data(d3.values(dataset)).enter().remove("g")
    
var path = gs.selectAll("path")
    .data(function(d) { return pie(d); })
    .enter()
    .append("g").attr("class", "arc")
    .append("path")
    .attr("id",function(d){ return "yyy"+d.data.name})
    //.attr("fill", function(d, i) { return color(i); })
.attr("fill", function(d, i) { return color(d.data.name); })
    .attr("d", function(d, i, j)
          { return arc.innerRadius(innerRadius+(40*j)).outerRadius(innerRadius+40+(40*j))(d); })
   




//text labels
var text=svg.selectAll("g.arc") 
 .insert("text")
 .style("font-size","10px")
 .style("fill","#000")
  .attr("text-anchor", "start")
 .attr("dy",30)



     
 .append("textPath")
	.attr("startOffset", "50%")
     .attr("xlink:href",function(d){ return "#yyy"+d.data.name})
     .attr("startOffset",5)

.text(function(d) { return d.data.name }); //.toFixed(2)


//add outside labels

var text=svg.selectAll("g.arc") 
 .insert("text")
 .style("font-size","15px")
 .style("font-weight","bold")
 .style("fill","#000")
  .attr("text-anchor", "start")
 .attr("dy",0)



     
 .append("textPath")
	.attr("startOffset", "50%")
     .attr("xlink:href",function(d){ return "#yyy"+d.data.name})
     .attr("startOffset",5)

.text(function(d) { return d.data.category }); //.toFixed(2)


svg.append("foreignObject")
		.attr("x", 350)
		.attr("y", -100)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
        .on("click", function(d, i){


			
            console.log(svg.select("#check1").node().checked);
			
			if (svg.select("#check1").node().checked == true){
				//d3.selectAll("svg").remove();
				//resetData();
				var text=svg.selectAll("g.arc") 
 .insert("text")
 .style("font-size","15px")
 .style("font-weight","bold")
 .style("fill","#000")
  .attr("text-anchor", "start")

 .attr("dy",50)



     
 .append("textPath")
	.attr("startOffset", "50%")
	  .attr("id", "fontlil")
     .attr("xlink:href",function(d){ return "#yyy"+d.data.name})
     .attr("startOffset",5)

.text(function(d) { return d.data.count });
			}
			else {
			d3.selectAll("#fontlil").remove();
			}
			
        });

svg.append("foreignObject")
		.attr("x", 350)
		.attr("y", 0)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2 /></form>")
        .on("click", function(d, i){
            console.log(svg.select("#check2").node().checked);
						if (svg.select("#check2").node().checked == true){
				d3.selectAll("svg").remove();
				resetData();
			}
			else {
			d3.select("#message1").remove();
			}
			
        });
		
		
svg.append("foreignObject")
		.attr("x", 350)
		.attr("y", 100)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3 /></form>")
        .on("click", function(d, i){
            console.log(svg.select("#check3").node().checked);
        });	
svg.append('text')
             .attr('class', 'barsEndlineText')
             .attr('text-anchor', 'middle')
              .attr("x", 500)
             .attr("y", 115)
             .text('Display Worst Places for Behavior')	
			 
svg.append('text')
             .attr('class', 'barsEndlineText')
             .attr('text-anchor', 'middle')
              .attr("x", 500)
             .attr("y", 15)
             .text('Display Best Places for Behavior')	

svg.append('text')
             .attr('class', 'barsEndlineText')
             .attr('text-anchor', 'middle')
              .attr("x", 475)
             .attr("y", -85)
             .text('Display Average Values')				 
		
}
function redData(){
    var tooltip = d3.select(".tooltip");
    var $container = $('.chart-container'),
        τ = 2 * Math.PI,
        width = $container.width(),
        height = $container.height(),
        innerRadius = Math.min(width,height)/4,
        //innerRadius = (outerRadius/4)*3,
        fontSize = (Math.min(width,height)/4);

var dataset = {
 
	Apple:[],


    Bad: [{"name":"Church", "color" :"#A9A1F0", "count":1.96, "category" : "Fight"},{"name":"     Job interview","count":3.27, "category" : "Belch"},{"name":"Church ","count":3.46, "category" : "Run"},
	{"name":" Church","count":3.68, "category" : "Shout"},{"name":"Job interview ","count":3.69, "category" : "Sleep"},{"name":" Job interview","count":3.74, "category" : "Jump"},
	{"name":"Movies","count":3.97, "category" : "Argue"},{"name":"  Job interview","count":4.00, "category" : "Cry"},{"name":"   Job interview","count":4.57, "category" : "Mumble"},
	{"name":"Family dinner","count":4.83, "category" : "Write"},{"name":"    Job interview","count":5.00, "category" : "Kiss"},{"name":"Movies ","count":5.09, "category" : "Read"},
	{"name":"  Church","count":5.85, "category" : "Eat"},{"name":"Church  ","count":7.01, "category" : "Laugh"},{"name":"   Church","count":7.48,"category" : "Talk"}
	],
        
		Good: []
};
   

    
var color = d3.scale.ordinal()    
.range(["#b20000","#cc0000","#e50000","#ff0000","#ff1919","#ff3232","#ff4c4c","#ff6666","#ff7f7f","#ff9999","#ffb2b2","#ffc9c9","#ffd0d0","#ffd8d8","#ffe0e0"]);

//var color = d3.scale.category20();

var pie = d3.layout.pie()
    .value(function(d) { return d.count; })
    .sort(null);

var arc = d3.svg.arc();

var svg = d3.select('.chart-container').append("svg")
        .attr("width", '100%')
        .attr("height", '100%')
        .attr('viewBox','0 0 '+Math.min(width,height) +' '+Math.min(width,height) )
        .attr('preserveAspectRatio','xMinYMin')
        .append("g")
        .attr("transform", "translate(" +  width / 2 + "," + height / 2 + ")");

var gs = svg.selectAll("g").data(d3.values(dataset)).enter().append("g") //.attr("class", "arc");
//var gs = svg.selectAll("g").data(d3.values(dataset)).enter().remove("g")
    
var path = gs.selectAll("path")
    .data(function(d) { return pie(d); })
    .enter()
    .append("g").attr("class", "arc")
    .append("path")
    .attr("id",function(d){ return "yyy"+d.data.name})
    //.attr("fill", function(d, i) { return color(i); })
.attr("fill", function(d, i) { return color(d.data.name); })
    .attr("d", function(d, i, j)
          { return arc.innerRadius(innerRadius+(40*j)).outerRadius(innerRadius+40+(40*j))(d); })
   




//text labels
var text=svg.selectAll("g.arc") 
 .insert("text")
 .style("font-size","10px")
 .style("fill","#000")
  .attr("text-anchor", "start")
 .attr("dy",30)



     
 .append("textPath")
	.attr("startOffset", "50%")
     .attr("xlink:href",function(d){ return "#yyy"+d.data.name})
     .attr("startOffset",5)

.text(function(d) { return d.data.name }); //.toFixed(2)


//add outside labels

var text=svg.selectAll("g.arc") 
 .insert("text")
 .style("font-size","15px")
 .style("font-weight","bold")
 .style("fill","#000")
  .attr("text-anchor", "start")
 .attr("dy",0)



     
 .append("textPath")
	.attr("startOffset", "50%")
     .attr("xlink:href",function(d){ return "#yyy"+d.data.name})
     .attr("startOffset",5)

.text(function(d) { return d.data.category }); //.toFixed(2)


svg.append("foreignObject")
		.attr("x", 350)
		.attr("y", -100)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
        .on("click", function(d, i){


			
            console.log(svg.select("#check1").node().checked);
			
			if (svg.select("#check1").node().checked == true){
				//d3.selectAll("svg").remove();
				//resetData();
								var text=svg.selectAll("g.arc") 
 .insert("text")
 .style("font-size","15px")
 .style("font-weight","bold")
 .style("fill","#000")
  .attr("text-anchor", "start")

 .attr("dy",50)



     
 .append("textPath")
	.attr("startOffset", "50%")
	  .attr("id", "fontlillian")
     .attr("xlink:href",function(d){ return "#yyy"+d.data.name})
     .attr("startOffset",5)

.text(function(d) { return d.data.count });
			}
			else {
			d3.selectAll("#fontlillian").remove();
			}
			
        });

svg.append("foreignObject")
		.attr("x", 350)
		.attr("y", 0)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2 /></form>")
        .on("click", function(d, i){
            console.log(svg.select("#check2").node().checked);
						if (svg.select("#check2").node().checked == true){
				d3.selectAll("svg").remove();
				resetData();
			}
			else {
			d3.select("#message1").remove();
			}
			
        });
		
		
svg.append("foreignObject")
		.attr("x", 350)
		.attr("y", 100)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3 /></form>")
        .on("click", function(d, i){
            console.log(svg.select("#check3").node().checked);
			if (svg.select("#check3").node().checked == true){
				d3.selectAll("svg").remove();
				resetData();
			}
			else {
			d3.select("#message1").remove();
			}
        });	
svg.append('text')
             .attr('class', 'barsEndlineText')
             .attr('text-anchor', 'middle')
              .attr("x", 500)
             .attr("y", 115)
             .text('Display Worst Places for Behavior')	
			 
svg.append('text')
             .attr('class', 'barsEndlineText')
             .attr('text-anchor', 'middle')
              .attr("x", 500)
             .attr("y", 15)
             .text('Display Best Places for Behavior')	

svg.append('text')
             .attr('class', 'barsEndlineText')
             .attr('text-anchor', 'middle')
              .attr("x", 475)
             .attr("y", -85)
             .text('Display Average Values')				 
		
}

