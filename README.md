# CsvToJson


About the project:
 It is a simple project that converts the CSV file(Census.csv) into JSON files(Agewise.json,Statewise.json,Categorywise.json), based on the requirements to make the charts and graphs,using JavaScript ES-6, which works for the given csv file and conditions specific to project only.

Prerequisites: Your system must have latest version of node js installed.

Technologies used: JavaScript

Description: save.csv is a file that contains data in form of comma seperated values. The data from the file is received in asynchronous manner, using readStream. 
The index.js ia a javaScript file that creates three JSON files,for plotting graphs of:

a)Age wise literate persons in all the states.
b} state wise males and females populations.
c) Education category wise all india combined data.

3 graphs files are-
1. Age.html
2 State.html
3. Category.html

Given : save.csv (size : 677.6 kB)
 Logic: 1. Convert csv to Required JSONs 
        2. Convert JSONs to required D3s 

 Minimum System requirements:

S/W : Any Operating System H/W : 512 MB RAM, 100 GB Hard Disk, Web Browser, local server
