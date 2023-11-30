# belly-button-challenge

![image](https://github.com/Mago281/belly-button-challenge/assets/131424690/1f9919f6-c12b-4fe5-8bac-26555ca6d9ba)
![image](https://github.com/Mago281/belly-button-challenge/assets/131424690/29575d13-b8e7-47c0-8942-bf90292f63ce)


![image](https://github.com/Mago281/belly-button-challenge/assets/131424690/83e74821-2b90-4f29-8770-724c4c0fc4b5)
![image](https://github.com/Mago281/belly-button-challenge/assets/131424690/000aa189-384c-418a-9647-823157672af6)

---

## Background

________________________________________

I have been tasked to build an interactive dashboard to explore the Belly Button Biodiversity dataset which catalogues the microbes that colonise human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

________________________________________


1. Used the D3 library to read in `samples.json` from the URL `https://2u-data-curriculumteam.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json` .
   

2.  Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
      - Used `sample_values` as the values for the bar chart.

      - Used `otu_ids` as the labels for the bar chart.

      - Used `otu_labels` as the hovertext for the chart.

      ![image](https://github.com/Mago281/belly-button-challenge/assets/131424690/cfbcad51-a054-49c1-8e0b-64bc14b2e2b2)


3.  Created a bubble chart that displayed each sample.
      - Used `otu_ids` for the x values.
      - Used `sample_values` for the y values.
      - Used `sample_values` for the marker size.
      - Used `otu_ids` for the marker colors.
      - Used `otu_labels` for the text values.
      ![image](https://github.com/Mago281/belly-button-challenge/assets/131424690/ae1b7217-f98c-43ec-ac1f-1be3e04bce53)


4.  Displayed the sample metadata i.e. an individual's demographic information.


5.  Displayed each key-value pair from the metadata JSON object on the page
      ![image](https://github.com/Mago281/belly-button-challenge/assets/131424690/bce0f260-137b-4034-8321-a057c5859563)


6.  Ensured that all the plots would be updated each time a new sample is selected.


7.  Deployed my app to a free static page hosting service

      ![image](https://github.com/Mago281/belly-button-challenge/assets/131424690/ce542777-6e1d-4c07-a886-db47f9105726)

       [Belly Button Biodiversity Dashboard](file:///C:/Users/Magdalene/Mago281/belly-button-challenge/index.html)




