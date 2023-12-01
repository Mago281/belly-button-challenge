# belly-button-challenge

![image](https://github.com/Mago281/belly-button-challenge/assets/131424690/1f9919f6-c12b-4fe5-8bac-26555ca6d9ba)
![image](https://github.com/Mago281/belly-button-challenge/assets/131424690/29575d13-b8e7-47c0-8942-bf90292f63ce)


---

## Background

________________________________________

I have been tasked to build an interactive dashboard to explore the Belly Button Biodiversity dataset which catalogues the microbes that colonise human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

________________________________________


1. Used the D3 library to read in `samples.json` that were provided as part of this challenge.
   

2.  Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
      - Used `sample_values` as the values for the bar chart.

      - Used `otu_ids` as the labels for the bar chart.

      - Used `otu_labels` as the hovertext for the chart.

      The horizontal bar chart with a dropdown menu below relates to Test Subject ID: 1490

       <img src="https://github.com/Mago281/belly-button-challenge/assets/131424690/9de24c9c-f27e-41c3-a7df-a90f0fa0cbd7" width="250" height="250">

    
3.  Created a bubble chart that displayed each sample.
      - Used `otu_ids` for the x values.
      - Used `sample_values` for the y values.
      - Used `sample_values` for the marker size.
      - Used `otu_ids` for the marker colors.
      - Used `otu_labels` for the text values.
    
    The bubble chart below relates to Test Subject ID: 1490
    
    <img src="https://github.com/Mago281/belly-button-challenge/assets/131424690/a9a02912-7673-4bb1-84cb-74492ee195db" width="800" height="320">


4.  Displayed the sample metadata i.e. an individual's demographic information.
    
    The sample metadata of the demographic information for Test Subject ID: 1490: 
    
    <img src="https://github.com/Mago281/belly-button-challenge/assets/131424690/3e427278-508d-43c1-b73c-b3b3ab1ef233" width="200" height="300">

   
5.  Displayed each key-value pair from the metadata JSON object on the page

    <img src="https://github.com/Mago281/belly-button-challenge/assets/131424690/af9dde91-e798-4767-94aa-da8ffc2a2506" width="500" height="300" />


6.  Ensured that all the plots would be updated each time a new sample is selected.


7.  Deployed my app to a free static page hosting service and selected Test Subject ID: 1601

      ![image](https://github.com/Mago281/belly-button-challenge/assets/131424690/ce542777-6e1d-4c07-a886-db47f9105726)





