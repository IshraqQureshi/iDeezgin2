name = input("ENTER FILE NAME : ")
hand = open(name)

for line in hand:
    line = line.rstrip()
  #  words = line.split()
    
    if "From " in line:
        print(line[25]) 
