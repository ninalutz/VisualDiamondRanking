import cv2



def process_images(NAME):
      directory = "../" #output directory
      filename = "../" + NAME +".png" #image to cut

      img = cv2.imread(filename)
      img2 = img

      height, width, channels = img.shape

      # Number of pieces Horizontally 
      W_SIZE  = 5 
      # Number of pieces Vertically to each Horizontal  
      H_SIZE = 10

      counter = 0

      for ih in range(H_SIZE ):
         for iw in range(W_SIZE ):
         
            x = width/W_SIZE * iw 
            y = height/H_SIZE * ih
            h = (height / H_SIZE)
            w = (width / W_SIZE )
            print(x,y,h,w)
            counter+=1
            img = img[int(y):int(y+h), int(x):int(x+w)]
            cv2.imwrite(directory + str(counter) +  ".png",img)
            img = img2

names = ["A Pakistani woman"]

for n in names:
      process_images(n)
