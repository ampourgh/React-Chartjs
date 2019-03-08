const sample = [
 {
  city: "January",
  value: "78.3"
 },
 {
  city: "February",
  value: "28.5"
 },
 {
  city: "March",
  value: "59.3"
 },
 {
  city: "April",
  value: "17.8"
 },
 {
  city: "May",
  value: "17.8"
 },
 {
  city: "June",
  value: "37.8"
 },
 {
  city: "July",
  value: "77.8"
 },
 {
  city: "August",
  value: "17.8"
 },
 {
  city: "September",
  value: "67.8"
 },
 {
  city: "October",
  value: "50"
 },
 {
  city: "November",
  value: "17.8"
 },
 {
  city: "December",
  value: "42.6"
 }
];

const margin = 60;
const width = 800 - 2 * margin;
const height = 300 - 2 * margin;

const svg = d3.select("svg");

const chart = svg
 .append("g")
 .attr("transform", `translate(${margin},${margin})`);

const xScale = d3
 .scaleBand()
 .range([0, width])
 .domain(sample.map(s => s.city))
 .padding(0.1);

const yScale = d3
 .scaleLinear()
 .range([height, 0])
 .domain([0, 100]);

yScale(20);

const makeYLines = () => d3.axisLeft().scale(yScale);

chart
 .append("g")
 .attr("class", "yLines")
 .call(
  makeYLines()
   .tickSize(-width, 0, 0)
   .tickFormat("")
 );

chart
 .append("g")
 .attr("transform", `translate(0,${height})`)
 .attr("class", "axis")
 .call(d3.axisBottom(xScale));

chart
 .append("g")
 .attr("class", "axis")
 .call(d3.axisLeft(yScale));

const barGroups = chart
 .selectAll()
 .data(sample)
 .enter()
 .append("g");

const bars = barGroups
 .append("rect")
 .attr("class", "bar")
 .attr("x", d => xScale(d.city) + xScale.bandwidth() * 0.1)
 .attr("y", yScale(0))
 .attr("width", xScale.bandwidth() * 0.8)
 .attr("height", 0);

bars
 .transition()
 .duration(1000)
 .ease(d3.easeCubic)
 .attr("y", d => yScale(d.value))
 .attr("height", d => height - yScale(d.value));

bars.on("mouseenter", function(d, i) {
 const b = d3
  .select(this)
  .transition()
  .duration(300)
  .attr("class", "bar-highlight")
  .attr("x", d => xScale(d.city))
  .attr("width", xScale.bandwidth());

 const y = yScale(d.value);

 const limit = chart.append("g").attr("class", "limit");

 line = limit
  .append("line")
  .attr("class", "limit")
  .attr("y1", y)
  .attr("y2", y)
  .attr("x1", 0)
  .attr("x2", width);

 limit
  .append("circle")
  .attr("cx", xScale(d.city) + xScale.bandwidth() / 2)
  .attr("cy", y)
  .attr("r", 0)
  .attr("class", "limitLabelCircle")
  .transition()
  .duration(500)
  .attr("r", 25);

 limit
  .append("text")
  .text(d.value)
  .attr("dx", xScale(d.city) + xScale.bandwidth() / 2)
  .attr("dy", y + 6)
  .attr("opacity", 0)
  .attr("class", "limitLabelText")
  .transition()
  .duration(500)
  .delay(500)
  .attr("opacity", 1);

 //   .attr('x1', xScale(d.city))
 //   .attr('x2', xScale(d.city)+xScale.bandwidth())
 //   .transition()
 //   .duration(2000)
 //   .attr('x1',0)
 //   .attr('x2',width);

 // barGroups.filter((v) => v.city != d.city)
 //     .append('line')
 //     .attr('class', 'limitDiff')
 //     .attr('x1', (v) => xScale(v.city) + xScale.bandwidth() / 2)
 //     .attr('x2', (v) => xScale(v.city) + xScale.bandwidth() / 2)
 //     .attr('y1', y)
 //     .attr('y2', y)
 //     .transition()
 //     .duration(2000)
 //     .attr('y1', (v) => yScale(v.value));

 const limitDiff = barGroups
  .filter(v => v.city != d.city)
  .append("g")
  .attr("class", "limit")
  .attr(
   "transform",
   v =>
    "translate(" +
    (xScale(v.city) + xScale.bandwidth() / 2) +
    "," +
    yScale(v.value) +
    ")"
  );

 limitDiff
  .append("line")
  .attr("class", "limitDiff")
  .attr("x1", 0)
  .attr("x2", 0)
  .attr("y1", v => y - yScale(v.value))
  .attr("y2", v => y - yScale(v.value))
  .transition()
  .duration(2000)
  .attr("y1", 0);

 const limitPoints = limitDiff.append("g");

 limitPoints
  .append("circle")
  .attr("class", "limitDiffPoint")
  .attr("r", 0)
  .transition()
  .delay(2000)
  .duration(1500)
  .ease(d3.easeBounce)
  .attr("r", 12);

 limitPoints
  .append("text")
  .text(v => Math.round(v.value - d.value))
  .attr("class", "limitText")
  .attr("dy", 4)
  .attr("opacity", 0)
  .transition()
  .delay(3000)
  .duration(500)
  .attr("opacity", 1);
});

bars.on("mouseleave", function(d, i) {
 d3
  .select(this)
  .transition()
  .duration(300)
  .attr("class", "bar")
  .attr("x", d => xScale(d.city) + xScale.bandwidth() * 0.1)
  .attr("width", xScale.bandwidth() * 0.8);

 chart.selectAll(".limit").remove();
 //chart.selectAll('.limitDiff').remove();
 //chart.selectAll('.limitDiffPoint').remove();
});
