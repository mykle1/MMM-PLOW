## MMM-WWX

#### *** Weather Widgets Xtreme! ***

* Driven by the Darksky API yet you don't need an API key!

## Examples

#### Minimal view - (config style: "default-small",)

![](images/minimal.png)

#### Minimal plus current conditions - (config style: "small",)

![](images/minimalPlus.png)

#### 7 day forecast - (config style: "default",)

![](images/7day.png)

#### 7 day forecast with current conditions - (config style: "default",)

![](images/7dayPlus.png)

#### Hourly bar graph with or without text forecast - (config style: "graph-bar",)

![](images/barGraph.png)

#### Temp, Precip, Humidity, Wind, Pressure, UV and Visibility line graphs - (config style: "graph" and config graphType: "wind_graph",)

![](images/temperature.png)
![](images/precip.png)

#### Multiple instances by simply adding more config entries

![](images/multiple.png)

## Installation

* `git clone https://github.com/mykle1/MMM-WWX` into the `~/MagicMirror/modules` directory.

## Config.js entry and options


```
{
disabled: false,
module: 'MMM-WWX',
position: 'middle center',
config: {
   languages: "en",                          // en, de, es, fr, it, nl, ar, zh, x-pig-latin
   style: "default",                         // See Style list
   latLong: "12.345,-67.8910",               // Your latitude and longitude seperated by a comma
   title: "New Dorp",                        // Location seems logical
   tempUnits: "us",                          // us = F - uk = C
   textColor: "ffffff",                      // Hex color codes. No # !!!
   font: "default",                          // See font list
   htColor: "ffffff",                        // high temp color. Hex color codes. No #
   ltColor: "00dfff",                        // low temp color. Hex color codes. No #
   displaySum: "yes",                        // Display Summary, yes or no
   displayHeader: "yes",                     // yes or no
   timeColor: "ffffff",                      // for graph-bar. Hex color codes. No #
   tempColor: "00dfff",                      // for graph-bar. Hex color codes. No #
   currentDetails: "true",                   // for graph-bar. Hex color codes. No #
   graphType: "precip_graph",                // when style is graph
   lineColor: "dd66cf",                      // when style is graph
   markerColor: "ffffff",                    // when style is graph
   }
},
```

## Config style list

* small
* default-small
* default
* graph_bar
* graph


## Attention!

* Not all config options apply to every style

## Font List

* Default
* Trebuchet MS
* Georgia
* Times New Roman
* Arial
* Verdana
* Palatino
* Serif
* Sans Serif

## Language List

* English en
* Deutsch de
* Spanish es
* French fr
* Italian it
* Nederlands nl
* Arabic ar
* Chinese zh
* Pig Latin x-pig-latin

## Attention!

* Not all config options apply to every style

## My unending gratitude to sdetweil and cowboysdude

* Thank you, my friends!
