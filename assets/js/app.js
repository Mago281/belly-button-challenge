// 1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculumteam.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json .
function buildMetadata(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  let metadata = data.metadata;

  // Filter data for the object with the desired sample number
  // (filter is similar to the loc function in Pandas)
  let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
  let result = resultArray[0];

  // Use D3 to select the dropdown menu
  let PANEL = d3.select('#sample-metadata');

  // Use `.html("") to clear any existing metadata
  PANEL.html("");

  // Use d3 inside the loop to append new tags for each key-value in the metadata
  for (key in result) {
    PANEL.append('h6').text(`${key.toUpperCase()}: ${result[key]}`);
  };

  }
  )};


//(Class 3 Activities 08, 09, 10)
// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  function buildCharts(sample) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
      let samples = data.samples;
      let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
      let result = resultArray[0];

      let otu_ids = result.otu_ids;
      let otu_labels = result.otu_labels;
      let sample_values = result.sample_values;


    // 3. Create a bubble chart that displays each sample
    // https://plotly.com/python/bubble-charts/  - provided by JW
    var bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      margin:  { t: 0 },
      hovermode: 'closest',
      xaxis: { title: 'OTU ID' },
      margin: { t: 30 }
    };
    var bubbleData = [
      {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: 'Earth'
        } 
      }
    ]

    Plotly.newPlot('bubble', bubbleData, bubbleLayout);

    let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    let barData = [
      {
        x: sample_values.slice(0, 10).reverse(),
        y: yticks,
        text: otu_labels.slice(0, 10).reverse(),
        type: 'bar',
        orientation: 'h',
      }
    ];

    let barLayout = {
      title: 'Top 10 Bacteria Cutures Found',
      margin: { t: 30, l: 150 }
    };

    Plotly.newPlot('bar', barData, barLayout);
  })
  };

// 4. Display the sample metadata, i.e., an individual's demographic information.
// 5. Display each key-value pair from the metadata JSON object somewhere on the page.
// 6. Update all the plots when a new sample is selected. 
//    Additionally, you are welcome to create any layout that you would like for your dashboard.

function init() {
  // Get a reference from the dropdown select element
  let selector = d3.select('#selDataset');

  // Use the list of sample names to populate the select options
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    let sampleOfNames = data.names;

    for (let i = 0; i < sampleOfNames.length; i++) {
      selector
        .append('option')
        .text(sampleOfNames[i])
        .property('value', sampleOfNames[i]);
    };

    // Use the first sample from the list of names to build the initial plots
    let firstSample = sampleOfNames[0];
    buildMetadata(firstSample);
    buildCharts(firstSample);
    // buildBarChart(firstSample);
    // buildBubbleChart(firstSample);
  });
} 


function optionChanged(sampleID) {
  // function that's called when user changes dropdown
  // sample id / name is input to function
  buildMetadata(sampleID);
  buildCharts(sampleID);
  // buildBarChart(sampleID);
  // buildBubbleChart(sampleID);
}

// Initialise the dashboard
init();