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
		if (svg.select("#check1").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
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
			date1();
			
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
			date1();
			
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
			date1();
			
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
		console.log(svg.select("#check7").node().checked);
		if (svg.select("#check7").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
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
		console.log(svg.select("#check8").node().checked);
		if (svg.select("#check8").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
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
		console.log(svg.select("#check9").node().checked);
		if (svg.select("#check9").node().checked == true){
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
        .html("<form><input type=checkbox id=check9 />movies</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
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
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
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
			date1();
			
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
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
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
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 850)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />dorm lounge</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});	
 svg.append("foreignObject")
		.attr("x", 950)
		.attr("y", 250)
        .attr("width", 150)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />football game</form>")
		.on("click", function(d, i){
		console.log(svg.select("#check11").node().checked);
		if (svg.select("#check11").node().checked == true){
			d3.selectAll("svg").remove();
			date1();
			
		}
		});		
 svg.append("foreignObject")
		.attr("x", 1060)
		.attr("y", 250)
        .attr("width", 100)
        .attr("height", 100)
        .append("xhtml:body")
        .html("<form><input type=checkbox id=check13 />Average</form>")
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
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
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