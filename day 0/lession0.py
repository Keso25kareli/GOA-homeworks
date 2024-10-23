from turtle import *

#we want to paint a house

#step 1: draw a house

speed (9)
width(7)
color("orange")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#end of spuare

#drawing a door
forward(70)
color("brown")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
right(90)
forward(60)
end_fill()
#end of door

#drawing a roof
penup()
forward(70)
right(90)
goto(200, 200)
pendown()
left(30)
begin_fill()
color("red")
forward(200)
right(-120)
forward(200)
right(240)
forward(200)
end_fill()
#end of the roof

#drawing a right window
penup()
right(90)
color("blue")
forward (120)
right(90)
forward(50)
pendown()
right(90)
begin_fill()
forward(90) #height of the door
right(90)
forward(40) #width of the door
right(90)
forward(90)
right(90)
forward(40)
end_fill()
#end of the right window

#drawing a left window
penup()
forward(100)
pendown()
color("blue")
begin_fill()
right(90)
forward(90)
left(90)
forward(40)
left(90)
forward(90)
left(90)
forward(40)
end_fill()
#end of the left window

#drawing a grass
right(90)
penup()
forward(85)
right(90)
forward(140)
pendown()
begin_fill()
color("green")
left(90)
forward(40)
left(90)
forward(440)
left(90)
forward(45)
left(90)
forward(440)
end_fill()
#end of grass

#drawing a soil
penup()
left(90)
forward(40)
pendown()
color("brown")
begin_fill()
left(90)
forward(440)
left(90)
right(180)
forward(20)
right(90)
forward(440)
right(90)
forward(20)
end_fill()
#end of soil



exitonclick()



