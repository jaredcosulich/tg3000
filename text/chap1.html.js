define(function() {return function () {/*
<h2>Introduction to Turtle Geometry</h2>
<div class='quote'>
  We start with the simplest vocabulary of images, with ``left'' and ``right'' and ``one, two, three,'' and before we know how it happened the words and numbers have conspired to make a match with nature: we catch in them the pattern of mind and matter as one.
  <p>Jacob Bronowski, <em>The Reach of Imagination</em></p>
</div>

<p>
  This chapter is an introduction on three levels. First, we introduce you to a new kind of geometry called turtle geometry. The most important thing to remember about turtle geometry is that it is a mathematics designed for exploration, not just for presenting theorems and proofs. When we do state and prove theorems, we are trying to help you to generate new ideas and to think about and understand the phenomena you discover.
</p>

<p>
  The technical language of this geometry is our second priority. This may look as if we're describing a computer language, but our real aim is to establish a notation for the range of complicated things a turtle can do in terms of the simplest things it knows. lf you wish to actually program a computer-controlled turtle using one of the standard programing languages, you will need to know more details than are presented here; see appendixes A and B.
</p>

<p>
  Finally, this chapter will introduce some of the important themes to be elaborated in later chapters. These themes permeate not only geometry but all of mathematics, and we aim to give you rich and varied experiences with them.
</p>

<h3>Turtle Graphics</h3>
<p>
  Imagine that you have control of a little creature called a turtle that exists in a mathematical plane or, better yet, on a computer display screen. The turtle can respond to a few simple {\em commands}: \textsc{forward} moves the turtle, in the direction it is facing, some number of units. \textsc{right} rotates it in place, clockwise, some number of degrees. \textsc{back} and \textsc{left} cause the opposite movements. The number that goes with a command to specify how much to move is called the command's {\em input}.
</p>

<p>
  In describing the effects of these operations, we say that \textsc{forward} and \textsc{back} change the turtle's {\em position} (the point on the plane where the turtle is located); \textsc{right} and \textsc{left} change the turtle's {\em heading} (the direction in which the turtle is facing). 
</p>

<p>
  The turtle can leave a trace of the places it has been: The position-changing commands can cause lines to appear on the screen. This is controlled by the commands \textsc{penup} and \textsc{pendown}. When the pen is down, the turtle draws lines. Figure 1.1 illustrates how you can draw on the display screen by steering the turtle with \textsc{forward}, \textsc{back}, \textsc{right}, and \textsc{left}.
</p>

<h3>Procedures</h3>
<p>
  Turtle geometry would be rather dull if it did not allow us to teach the
  turtle new commands. But luckily all we have to do to teach the turtle a
  new trick is to give it a list of commands it already knows. For example,
  here's how to draw a square with sides 100 units long:
</p>

<div class='turtle-code'>
TO SQUARE
   FORWARD 100
   RIGHT 90
   FORWARD 100
   RIGHT 90
   FORWARD 100
   RIGHT 90
   FORWARD 100
</div>

<div class='javascript-code'>
function square() {
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
}
square();
</div>

<p>
  This is an example of a {\em procedure}. (Such definitions are also commonly referred to as programs or functions.) The first line of the procedure (the {\em title line}) specifies the procedure's name. We've chosen to name this procedure \textsc{square}, but we could have named it anything at all. The rest of the procedure (the body) specifies a list of instructions the turtle is to carry out in response to the \textsc{square} command. There are a few useful tricks for writing procedures. One of them is called {\em iteration}, meaning repetition --- doing something over and over. Here's a more concise way of telling the turtle to draw a square, using iteration:
</p>

<div class='turtle-code'>
TO SQUARE
   REPEAT 4
      FORWARD 100
      RIGHT 90
</div>
<p>
  This procedure will repeat the indented commands \textsc{forward} 100 and \textsc{right} 90 four times.
</p>

<p>
  Another trick is to create a \textsc{square} procedure that takes an input for the size of the square. To do this, specify a name for the input in the title line of the procedure, and use the name in the procedure body:
</p>
*/}});