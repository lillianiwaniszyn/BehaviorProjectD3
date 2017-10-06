class1();
function class1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.class;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 checked=true />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2 />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3 />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4 />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
		if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5 />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
		if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}
		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
		if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
		if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
		if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}
		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
		if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}
		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
		if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
		if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average*</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}



function date1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.date2;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2 checked=true />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3 />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4 />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
		if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5 />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
		if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}
		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
		if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
		if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
		if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}
		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
		if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}
		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
		if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
		if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average*</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function bus1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Bus;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3 checked=true />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4 />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
		if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5 />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
		if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}
		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
		if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
		if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
		if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}
		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
		if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}
		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
		if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
		if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average11();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function familyDinner1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Family_dinner;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4 checked=true />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5 />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
		if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}
		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
		if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
		if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
		if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}
		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
		if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}
		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
		if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
		if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function park1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Park;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5 checked=true />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
		if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
		if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
		if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}
		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
		if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}
		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
		if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
		if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function church1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Church;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5  />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
				if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 checked=true/>church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);

		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
		if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
		if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}
		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
		if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}
		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
		if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
		if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function jobInterview1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Job_interview;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5  />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
				if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
				if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 checked=true/>job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);

		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
		if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}
		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
		if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}
		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
		if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
		if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function sidewalk1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Sidewalk;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5  />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
				if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
				if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
				if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 checked=true/>sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);

		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
		if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}
		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
		if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
		if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function movies1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Movies;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5  />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
				if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
				if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
				if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
				if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}

		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 checked=true/>movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);

		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
		if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
		if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function bar1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Bar;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5  />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
				if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
				if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
				if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
				if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}

		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
				if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 checked=true/>bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);

		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
		if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function elevator1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Elevator;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5  />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
				if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
				if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
				if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
				if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}

		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
				if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
				if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}

		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 checked=true/>elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);

		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
		if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function restroom1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Restroom;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5  />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
				if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
				if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
				if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
				if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}

		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
				if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
				if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}

		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
				if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 checked=true/>restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);

		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
		if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function ownRoom1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Own_room;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5  />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
				if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
				if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
				if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
				if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}

		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
				if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
				if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}

		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
				if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
				if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}

		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 checked=true/>own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);

		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
		if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function dormLounge1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Dorm_lounge;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5  />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
				if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
				if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
				if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
				if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}

		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
				if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
				if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}

		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
				if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
				if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}

		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
				if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 checked=true/>dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);

		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
		if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function footballGame1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Football_game;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5  />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
				if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
				if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
				if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
				if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}

		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
				if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
				if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}

		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
				if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
				if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}

		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
				if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
				if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 checked=true/>football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);

		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 />Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);
		if (svg.select("#check16").node().checked == true){
			d3.selectAll("svg").remove();
			average1();
			
		}
		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}
function average1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = d.behavior;
        d.value = +d.Average;
		var headerNames = d3.keys(data[0]);
		//console.log(headerNames);
    });
	
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
  
 svg.append("foreignObject")
		.attr("x", -50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1  />class</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
			if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			class1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check2  />date</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 50)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check3  />bus</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			bus1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check4  />family dinner</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
				if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			familyDinner1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 210)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check5  />park</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
				if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			park1();
			
		}

		});	

 svg.append("foreignObject")
		.attr("x", 260)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check6 />church</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
				if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			church1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 325)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check7 />job interview</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
				if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			jobInterview1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 425)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check8 />sidewalk</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
				if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			sidewalk1();
			
		}

		});	
	
		
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
				if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			movies1();
			
		}

		});
 svg.append("foreignObject")
		.attr("x", 565)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check10 />bar</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
				if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			bar1();
			
		}

		});		
 svg.append("foreignObject")
		.attr("x", 610)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 />elevator</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
				if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			elevator1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 680)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 />restroom</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check12").node().checked);
				if (svg.select("#check12").node().checked == true){
			d3.selectAll("svg").remove();
			restroom1();
			
		}

		});		
 svg.append("foreignObject")
		.attr("x", 760)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />own room</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check13").node().checked);
				if (svg.select("#check13").node().checked == true){
			d3.selectAll("svg").remove();
			ownRoom1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check14").node().checked);
				if (svg.select("#check14").node().checked == true){
			d3.selectAll("svg").remove();
			dormLounge1();
			
		}

		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check15").node().checked);
				if (svg.select("#check15").node().checked == true){
			d3.selectAll("svg").remove();
			footballGame1();
			
		}

		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 checked=true/>Average**</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check16").node().checked);

		});			
		
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "#663399")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}