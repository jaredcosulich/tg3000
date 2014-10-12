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
  Imagine that you have control of a little creature called a turtle that exists in a mathematical plane or, better yet, on a computer display screen. The turtle can respond to a few simple <em>commands</em>: <span class='textsc'>forward</span> moves the turtle, in the direction it is facing, some number of units. <span class='textsc'>right</span> rotates it in place, clockwise, some number of degrees. <span class='textsc'>back</span> and <span class='textsc'>left</span> cause the opposite movements. The number that goes with a command to specify how much to move is called the command's <em>input</em>.
</p>
<p>
  In describing the effects of these operations, we say that <span class='textsc'>forward</span> and <span class='textsc'>back</span> change the turtle's <em>position</em> (the point on the plane where the turtle is located); <span class='textsc'>right</span> and <span class='textsc'>left</span> change the turtle's <em>heading</em> (the direction in which the turtle is facing). 
</p>
<p>
  The turtle can leave a trace of the places it has been: The position-changing commands can cause lines to appear on the screen. This is controlled by the commands <span class='textsc'>penup</span> and <span class='textsc'>pendown</span>. When the pen is down, the turtle draws lines. Figure 1.1 illustrates how you can draw on the display screen by steering the turtle with <span class='textsc'>forward</span>, <span class='textsc'>back</span>, <span class='textsc'>right</span>, and <span class='textsc'>left</span>.
</p>
<h3>Procedures</h3>
<p>
  Turtle geometry would be rather dull if it did not allow us to teach the
  turtle new commands. But luckily all we have to do to teach the turtle a
  new trick is to give it a list of commands it already knows. For example,
  here's how to draw a square with sides 100 units long:
</p>
<div class='inline-editor turtle-code'>
TO SQUARE
   FORWARD 100
   RIGHT 90
   FORWARD 100
   RIGHT 90
   FORWARD 100
   RIGHT 90
   FORWARD 100
</div>
<div class='inline-editor javascript-code' id='basic-square'>
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
  This is an example of a <em>procedure</em>. (Such definitions are also commonly referred to as programs or functions.) The first line of the procedure (the <em>title line</em>) specifies the procedure's name. We've chosen to name this procedure <span class='textsc'>square</span>, but we could have named it anything at all. The rest of the procedure (the body) specifies a list of instructions the turtle is to carry out in response to the <span class='textsc'>square</span> command. There are a few useful tricks for writing procedures. One of them is called <em>iteration</em>, meaning repetition --- doing something over and over. Here's a more concise way of telling the turtle to draw a square, using iteration:
</p>
<div class='inline-editor turtle-code'>
TO SQUARE
   REPEAT 4
      FORWARD 100
      RIGHT 90
</div>
<div class='inline-editor javascript-code' id='square-loop'>
function square() {
  for (var i=0; i<4; ++i) {
    turtle.forward(100);
    turtle.right(90);
  }
}
square();
</div>
<p>
  This procedure will repeat the indented commands <span class='textsc'>forward</span> 100 and <span class='textsc'>right</span> 90 four times.
</p>
<p>
  Another trick is to create a <span class='textsc'>square</span> procedure that takes an input for the size of the square. To do this, specify a name for the input in the title line of the procedure, and use the name in the procedure body:
</p>
<div class='inline-editor turtle-code'>
TO SQUARE SIZE
   REPEAT 4
      FORWARD SIZE
      RIGHT 90
</div>
<div class='inline-editor javascript-code' id='square-size'>
function square(size) {
  for (var i=0; i<4; ++i) {
    turtle.forward(size);
    turtle.right(90);
  }
}
square(100);
</div>
<p>
Now, when you use the command, you must specify the value to be used for the 
input, so you say <span class='textsc'>square 100</span>, just like <span class='textsc'>forward 100</span>. 
</p>
<p>
The chunk <span class='textsc'>forward size</span>, <span class='textsc'>right 90</span>  might be useful in other 
contexts, which is a good reason to make it a procedure in its own right:
</p>
<div class='inline-editor turtle-code'>
TO SQUAREPIECE SIZE
   FORWARD SIZE
   RIGHT 90
</div>
<div class='inline-editor javascript-code' id='square-piece'>
function squarePiece(size) {
  turtle.forward(size);
  turtle.right(90);
}
squarePiece(100);
</div>
<p>
Now we can rewrite <span class='textsc'>square</span> using <span class='textsc'>squarepiece</span> as
</p>
<div class='inline-editor turtle-code'>
TO SQUARE SIZE
   REPEAT 4
   SQUAREPIECE SIZE
</div>
<div class='inline-editor javascript-code' id='square-square-piece'>
function squarePiece(size) {
  turtle.forward(size);
  turtle.right(90);
}

function square(size) {
  for (var i=0; i<4; ++i) {
    squarePiece(size);
  }
}
square(100);
</div>
<p>
Notice that the input to <span class='textsc'>square</span>, also called <span class='textsc'>size</span>, 
is passed in turn as an input to <span class='textsc'>squarepiece</span>. <span class='textsc'>squarepiece</span> 
can be used as a <em>subprocedure</em>in other places as well --- for example, in drawing 
a rectangle:
</p>
<div class='inline-editor turtle-code'>
TO RECTANGLE SIDE1 SIDE2
   REPEAT 2
      SQUAREPIECE SIDE1
      SQUAREPIECE SIDE2
</div>
<div class='inline-editor javascript-code' id='rectangle'>
function squarePiece(size) {
  turtle.forward(size);
  turtle.right(90);
}

function rectangle(side1, side2) {
  for (var i=0; i<2; ++i) {
    squarePiece(side1);
    squarePiece(side2);
  }
}
rectangle(100, 50);
</div>
<p>
To use the <span class='textsc'>rectangle</span> procedure you must specify its two inputs, for
example, <span class='textsc'>rectangle 100 50</span>.
</p>
<!-- UNNECESSARY WITH JS
<p>
When programs become more complex this kind of input notation
can be a bit hard to read, especially when there are procedures such as
<span class='textsc'>rectangle</span> that take more than one input. Sometimes it helps to use
parentheses and commas to separate inputs to procedures. For example,
the <span class='textsc'>rectangle</span> procedure can be written as
</p>
<div class='inline-editor turtle-code'>
TO RECTANGLE (SIDE1, SIDE2)
   REPEAT 2
       SQUAREPIECE (SIDE1)
       SQUAREPIECE (SIDE2)
</div>
-->
<p>
If you like, you can regard this notation as a computer language that
has been designed to make it easy to interact with turtles. Appendix
A gives some of the details of this language. It should not be diflicult
to rewrite these procedures in any language that has access to the basic
turtle commands <span class='textsc'>forward</span>, <span class='textsc'>back</span>, <span class='textsc'>right</span>, <span class='textsc'>left</span>, <span class='textsc'>penup</span>, and <span class='textsc'>pendown</span>.
</p>








*/}});