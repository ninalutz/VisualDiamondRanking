# VisualDiamondRanking

## A free to use Diamond Ranking tool for qualitative interviews
Please do use this tool for your studies! But if you do, please email me (ninalutz@uw.edu) that you did and attribute the use of the tool in your paper to me (Nina Lutz). Feedback or questions are always welcome! I make a lot of these little tools for my visual research work at UW and I want to make them as usable for researchers from all over, especially folks who may not have as much as a technical background to dev out these types of softwares. 

## How to use - with your own images
1. Add your own images in a folder, i.e. "My Images". Your images should be numbered, named "1.png", "2.png", etc. You can see the "Person" folder for an example. 
2. Pick the pyramid file that you want: 9, 12, 20, or 30. Then in this code put the name of your folder in place of "Person", how many images you have in place of 50, and the width and height of your images in place of the 80 numbers.
   ```
    window.onload = function() {
                placeImage("Person/", 50, ".png", 80, 80);
     };
*Note: For Pyramid with 9, this code is slightly different as it uses the "FishDebugs" folder. 

3. If you want to change up the size of the pyramid boxes, you can do that by going to this code and changing these numbers:
```
   .pyramidbox {width: 200px;
     height: 100px;
     padding: 10px;
     border: 3px solid black;
     background-color: #F5F5F5;
     }
```
## How to use - stable diffusion output 
If you are in particular using this pyramid for Stable Diffusion, there is a python script call slicedifusion.py that you can run on your image to split it into 50 separate images from the Stable Diffusion grid. 

## Questions? Need more help? 
Please email me ninalutz@uw.edu :D 
