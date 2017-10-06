class1();
function class1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 900 - margin.left - margin.right,
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
        d.date = d.class;
        d.value = +d.date;
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
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
		if (svg.select("#check1").node().checked == true){
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
        .html("<form><input type=checkbox id=check1 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check2").node().checked);
		if (svg.select("#check2").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
 svg.append("foreignObject")
		.attr("x", 100)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check3").node().checked);
		if (svg.select("#check3").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 150)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check4").node().checked);
		if (svg.select("#check4").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 200)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check5").node().checked);
		if (svg.select("#check5").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 250)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check6").node().checked);
		if (svg.select("#check6").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});
 svg.append("foreignObject")
		.attr("x", 300)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check7").node().checked);
		if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 350)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check8").node().checked);
		if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 400)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check9").node().checked);
		if (svg.select("#check9").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 450)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check10").node().checked);
		if (svg.select("#check10").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 500)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check11 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 550)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check12 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});
 svg.append("foreignObject")
		.attr("x", 600)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 650)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check14 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 700)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check15 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 750)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check16 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});			
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "steelblue")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}



function date1(){
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
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
        d.date = d.date;
        d.value = +d.date;
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
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Mean Appropriateness Ratings");
 svg.append("foreignObject")
		.attr("x", 0)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check1 /></form>")
		.on("click", function(d, i){
		console.log(svg.select("#check1").node().checked);
		if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});
	

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "steelblue")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


});}