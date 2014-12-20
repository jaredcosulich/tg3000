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
<!--
<div class='figure'>
<img src='images/figures/fig1-2.png'/>
<div class='caption'>Attempt to draw a triangle</div>
</div>
-->
<div class='figure'>
<img src='images/figures/fig1-2.png'/>
<div class='caption'>Attempt to draw a triangle.</div>
</div>

<h3>Drawing with the Turtle</h3>
<p>
Let's draw a figure that doesn't use 90&deg; angles --- an equilateral triangle. Since the triangle has 60&deg; angles, a natural first guess at a triangle procedure is
</p>
<div class='inline-editor turtle-code'>
TO TRY.ANGLE SIZE
   REPEAT 3
      FORWARD SIZE
      RIGHT 60
</div>
<div class='inline-editor javascript-code' id='try-angle'>
function tryAngle(size) {
  for (var i=0; i<3; ++i) {
    turtle.forward(size);
    turtle.right(60);
  }
}
tryAngle(100);
</div>

<div class='inline-editor javascript-code' id='triangle'>
function triangle(size) {
  for (var i=0; i<3; ++i) {
    turtle.forward(size);
    turtle.right(120);
  }
}
triangle(100);
</div>

<p>
But <span class='textsc'>try.angle</span> doesn't work, as shown in figure 1.2. In fact, running this ``triangle'' procedure draws half of a regular hexagon. The bug in the procedure is that, whereas we normally measure geometric figures by their interior angles, turtle turning corresponds to the exterior angle at the vertex. So if we want to draw a triangle we should have the turtle turn 120°. You might practice ``playing turtle'' on a few geometric figures until it becomes natural for you to think of measuring a vertex by how much the turtle must turn in drawing the vertex, rather than by the usual interior angle. Turtle angle has many advantages over interior angle, as you will see.
</p>
<p>
<div class='figure'>
<img src='images/figures/fig1-3.png'/>
<div class='caption'>(a) Initial attempt to draw house fails (b) Interface steps are needed</div>
</div>
<div class='inline-editor javascript-code' id='house-fail'>
function square(size) {
  for (var i=0; i<4; ++i) {
  turtle.forward(size);
  turtle.right(90);
  }
}

function triangle(size) {
  for (var i=0; i<3; ++i) {
    turtle.forward(size);
    turtle.right(120);
  }
}

function house(side) {
  square(side);
  triangle(side);
}

house(100);
</div>
<div class='inline-editor javascript-code' id='house'>
function square(size) {
  for (var i=0; i<4; ++i) {
    turtle.forward(size);
    turtle.right(90);
  }
}

function triangle(size) {
  for (var i=0; i<3; ++i) {
    turtle.forward(size);
    turtle.right(120);
  }
}

function house(side) {
  square(side);
  turtle.forward(side);
  turtle.right(30);
  triangle(side);
}
house(100);
</div>
<p>
Now that we have a triangle and a square, we can use them as building blocks in more complex drawings --- a house, for example. But Figure 1.3 shows that simply running <span class='textsc'>square</span> followed by <span class='textsc'>triangle</span> doesn't quite work. The reason is that after <span class='textsc'>square</span> , the turtle is at neither the correct position nor the correct heading to begin drawing the roof. To fix this bug, we must add steps to the procedure that will move and rotate the turtle before the <span class='textsc'>triangle</span> procedure is run. In terms of designing programs to draw things, these extra steps serve as an interface between the part of the program that draws the walls of the house (the <span class='textsc'>square</span> procedure) and the part that draws the roof (the <span class='textsc'>triangle</span> procedure).
</p>
<div class='figure'>
<img src='images/figures/fig1-4.png'/>
<div class='caption'>Designs made by rotating a simple doodle</div>
</div>
<div class='inline-editor javascript-code' id='doodle'>
function thing() {
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(50);
  turtle.right(90);
  turtle.forward(50);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(25);
  turtle.right(90);
  turtle.forward(25);
  turtle.right(90);
  turtle.forward(50);
}

thing();
</div>


<div class='inline-editor javascript-code' id='doodle1'>
function thing() {
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(50);
  turtle.right(90);
  turtle.forward(50);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(25);
  turtle.right(90);
  turtle.forward(25);
  turtle.right(90);
  turtle.forward(50);
}

function thing1() {
  for (var i=0; i<4; ++i) {
    thing();
  }
}

thing1();
</div>

<div class='inline-editor javascript-code' id='doodle2'>
function thing() {
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(50);
  turtle.right(90);
  turtle.forward(50);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(25);
  turtle.right(90);
  turtle.forward(25);
  turtle.right(90);
  turtle.forward(50);
}

function thing2() {
  for (var i=0; i<999; ++i) {
    thing();
    turtle.right(10);
    turtle.forward(50);
  }
}

thing2();
</div>

<div class='inline-editor javascript-code' id='doodle3'>
function thing() {
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(50);
  turtle.right(90);
  turtle.forward(50);
  turtle.right(90);
  turtle.forward(100);
  turtle.right(90);
  turtle.forward(25);
  turtle.right(90);
  turtle.forward(25);
  turtle.right(90);
  turtle.forward(50);
}


function thing3() {
  for (var i=0; i<999; ++i) {
    thing();
    turtle.left(45);
    turtle.forward(100);
  }
}

thing3();
</div>
<p>
In general, thinking of procedures as a number of main steps separated by interfaces is a useful strategy for planning complex drawings. Using procedures and subprocedures is also a good way to create abstract designs. Figure 1.4 shows how to create elaborate patterns by rotating a simple ``doodle''.
</p>
<p>
After all these straight line drawings, it is natural to ask whether the turtle can also draw curves --- circles, for example. One easy way to do this is to make the turtle go <span class='textsc'>forward</span> a little bit and then turn <span class='textsc'>right</span> a little bit, and repeat this over and over:
</p>
<div class='inline-editor turtle-code'>
TO CIRCLE
   REPEAT FOREVER
      FORWARD 1
      RIGHT 1
</div>
<div class='inline-editor javascript-code' id='circle'>
function circle() {
  for (var i=0; i<999; ++i) {
    turtle.forward(1);
    turtle.right(1);
  }
}
circle();
</div>
<div class='figure'>
<img src='images/figures/fig1-5.png'/>
<div class='caption'><span class='textsc'>forward</span> 1, <span class='textsc'>right</span> 1, repeated draws a circle</div>
</div>


<p>
This draws a circular arc, as shown in figure 1.5. Since this program
goes on ``forever'' (until you press the stop button on your computer), it
is not very useful as a subprocedure in creating more complex iigures.
More useful would be a version of the <span class='textsc'>circle</span>  procedure that would
draw the figure once and then stop. When we study the mathematics of
turtle geometry, we'll see that the turtle circle closes precisely when the
turtle has turned through $360^{\circ}$. So if we generate the circle in chunks
of <span class='textsc'>forward</span>  1, <span class='textsc'>right</span>  1, the circle will close after 
precisely 360 chunks:
</p>

<div class='inline-editor turtle-code'>
TO CIRCLE
   REPEAT 360
      FORWARD 1
      RIGHT 1
</div>
<div class='inline-editor javascript-code' id='circle-360'>
function circle() {
  for (var i=0; i<360; ++i) {
    turtle.forward(1);
    turtle.right(1);
  }
}
circle();
</div>


<p>
If we repeat the basic chunk fewer than 360 times, we get circular arcs.
For instance, 180 repetitions give a semicircle, and 60 repetitions give a
60&deg; arc. The following procedures draw left and right arcs of <span class='textsc'>deg</span>  degrees
on a circle of size <span class='textsc'>r</span> :
</p>

<div class='inline-editor turtle-code'>
T0 ARCR R DEG
   REPEAT DEG
   FORWARD R
   RIGHT 1

TO ARCL R DEG
   REPEAT DEG
      FORWARD R
      LEFT 1
</div>
<div class='inline-editor javascript-code' id='arc'>
function arcr(length, degrees) {
  for (var i=0; i< degrees; ++i) {
    turtle.forward(length);
    turtle.right(1);
  }
}

function arcl(length, degrees) {
  for (var i=0; i< degrees; ++i) {
    turtle.forward(length);
    turtle.left(1);
  }
}

arcr(1, 60);
arcl(1, 60);
</div>

<p>
(See figure 1.6 and exercise 3 for more on making drawings with arcs.)
</p>

<p>
The circle program above actually draws regular 360-gons, of course,
rather than ``real'' circles, but for the purpose of making drawings on
the display screen this difference is irrelevant. (See exercises 1 and 2.)
</p>


<h3>Turtle Geometry versus Coordinate Geometry</h3>

<p>
We can think of turtle commands as a way to draw geometric figures on
a computer display. But we can also regard them as a way to describe
figures. Let's compare turtle descriptions with a more familiar system
for representing geometric figures --- the Cartesian coordinate system, in
which points are specified by two numbers, the $x$ and $y$ coordinates relative to a pair of axes drawn in the plane. To put Cartesian coordinates
into our computer framework, imagine a ``Cartesian turtle'' whose moves
are directed by a command called <span class='textsc'>setXY</span> . <span class='textsc'>setXY</span>  takes two numbers as
inputs. These numbers are interpreted as at and y coordinates, and the
turtle moves to the corresponding point. We could draw a rectangle with
<span class='textsc'>setXY</span>  using
</p>

<div class='inline-editor turtle-code'>
TO CARTESIAN.RECTANGLE (WIDTH, HEIGHT)
   SETXY (WIDTH, 0)
   SETXY (WIDTH, HEIGHT)
   SETXY (O, HEIGHT)
   SETXY (O, O)
</div>
<div class='inline-editor javascript-code' id='cartesian-rectangle'>
function cartesianRectangle(width, height) {
  turtle.setXY(width, 0);
  turtle.setXY(width, height);
  turtle.setXY(0, height);
  turtle.setXY(0, 0);
}
cartesianRectangle(100, 200);
</div>



<div class='figure'>
<img src='images/figures/fig1-6.png'/>
<div class='caption'>Some shapes that can be made using arcs</div>
</div>

<div class='inline-editor javascript-code' id='circles'>
function arcr(length, degrees) {
  for (var i=0; i< degrees; ++i) {
    turtle.forward(length);
    turtle.right(1);
  }
}

function circles() {
  for (var i=0; i<9; ++i) {
    arcr(1, 360);
    turtle.right(40);
  }
}
circles();
</div>

<div class='inline-editor javascript-code' id='sun'>
function arcl(length, degrees) {
  for (var i=0; i< degrees; ++i) {
    turtle.forward(length);
    turtle.left(1);
  }
}

function arcr(length, degrees) {
  for (var i=0; i< degrees; ++i) {
    turtle.forward(length);
    turtle.right(1);
  }
}

function ray(length) {
  for (var i=0; i<2; ++i) {
    arcl(length, 90);
    arcr(length, 90);
  }
}

function sun(size) {
  for (var i=0; i<9; ++i) {
    ray(size);
    turtle.right(160);
  }
}

sun(1);
</div>

<div class='inline-editor javascript-code' id='flower'>
function arcr(length, degrees) {
  for (var i=0; i< degrees; ++i) {
    turtle.forward(length);
    turtle.right(1);
  }
}

function petal(size) {
  arcr(size, 60);
  turtle.right(120);
  arcr(size, 60);
  turtle.right(120);
}

function flower(size) {
  for (var i=0; i<6; ++i) {
    petal(size);
    turtle.right(60);
  }
}

flower(3);
</div>

<p>
You are probably familiar with the uses of coordinates in geometry:
studying geometric figures via equations, plotting graphs of numerical
relationships, and so on. Indeed, Descartes' marriage of algebra and
geometry is one of the fundamental insights in the development of mathematics. Nevertheless, these kinds of coordinate systems --- Cartesian,
polar, or what have you --- are not the only ways to relate numbers to
geometry. The turtle <span class='textsc'>forward</span>  and <span class='textsc'>right</span>  commands give an alternative way of measuring figures in the plane, a way that complements the
coordinate viewpoint. The geometry of coordinates is called coordinate
geometry we shall refer to the geometry of <span class='textsc'>forward</span>  and <span class='textsc'>right</span>  as turtle
geometry. And even though we will be making use of coordinates later
on, let us begin by studying turtle geometry as a system in its own right.
Whereas studying coordinate geometry leads to graphs and algebraic
equations, turtle geometry will introduce some less familiar, but no less
important, mathematical ideas.
</p>

<h4>Intrinsic versus Extrinsic</h4>

<p>
One major difference between turtle geometry and coordinate geometry
rests on the notion of the <em>intrinsic</em> properties of geometric figures. An
intrinsic property is one which depends only on the figure in question,
not on the figure's relation to a frame of reference. The fact that a
rectangle has four equal angles is intrinsic to the rectangle. But the
fact that a particular rectangle has two vertical sides is <em>extrinsic</em>, for
an external reference frame is required to determine which direction is
``vertical.'' Turtles prefer intrinsic descriptions of figures. For example,
the turtle program to draw a rectangle can draw the rectangle in any
orientation (depending on the turtle's initial heading), but the program
<span class='textsc'>cartesian.rectangle</span> shown above would have to be modified if we
did not want the sides of the rectangle drawn parallel to the coordinate
axes, or one vertex at (0,0).
</p>

<div class='figure'>
<img src='images/figures/fig1-7.png'/>
<div class='caption'>Modifying the turtle program still produces a circle. Modifying the equation gives an ellipse.</div>
</div>

<p>
Another intrinsic property is illustrated by the turtle program for
drawing a circle: Go <span class='textsc'>forward</span> a little bit, turn <span class='textsc'>right</span> a little bit, and
repeat this over and over. Contrast this with the Cartesian coordinate
representation for a circle, $x^2 + y^2 = r^2$. The turtle representation
makes it evident that the curve is everywhere the same, since the process
that draws it does the same thing over and over. This property of the
circle, however, is not at all evident from the Cartesian representation.
</p>
<p>
Compare the modified program
</p>

<div class='inline-editor turtle-code'>
TO CIRCLE
   REPEAT FOREVER
      FORWARD 2
      RIGHT 1
</div>

<div class='inline-editor javascript-code' id='circle2'>
function circle() {
  for (var i=0; i<999; ++i) {
    turtle.forward(2);
    turtle.right(1);
  }
}

circle();
</div>

<p>
with the modified equation $x^2 + 2y^2 = r^2$. (See figure 1.7.) The drawing
produced by the modified program is still everywhere the same, that is, a
circle. In fact, it doesn't matter what inputs we use to <span class='textsc'>forward</span> or <span class='textsc'>right</span>
(as long as they are small). We still get a circle. The modified equation,
however, no longer describes a circle, but rather an ellipse whose sides
look different from its top and bottom. A turtle drawing an ellipse would
have to turn more per distance traveled to get around its ``pointy'' sides
than to get around its flatter top and bottom. This notion of ``how
pointy something is,'' expressed as the ratio of angle turned to distance
traveled, is the intrinsic quantity that mathematicians call <em>curvature</em>.
(See exercises 2 and 4.)
</p>

<h4>Local versus Global</h4>

<p>
The turtle representation of a circle is not only more intrinsic than the
Cartesian coordinate description. It is also more local; that is, it deals
with geometry a little piece at a time. The turtle can forget about the
rest of the plane when drawing a circle and deal only with the small part
of the plane that surrounds its current position. By contrast, $ x^2 + y^2 = r^2 $ relies on a large-scale, global coordinate system to deline its properties.
And defining a circle to be the set of points equidistant from some fixed
point is just as global as using $ x^2 + y^2 = r^2$. The turtle representation
does not need to make reference to that ``faraway'' special point, the
center. In later chapters we will see how the fact that the turtle does its
geometry by feeling a little locality of the world at a time allows turtle
geometry to extend easily out of the plane to curved surfaces.
</p>

<h4>Procedures versus Equations</h4> 

<p>
A final important difference between turtle geometry and coordinate
geometry is that turtle geometry characteristically describes geometric
objects in terms of procedures rather than in terms of equations. In 
formulating turtle-geometric descriptions we have access to an entire range
of procedural mechanisms (such as iteration) that are hard to capture in
the traditional algebraic formalism. Moreover, the procedural descriptions 
used in turtle geometry are readily modified in many ways. This
makes turtle geometry a fruitful arena for mathematical exploration.
</p>
<p>
Let's enter that arena now.
</p>
<h3>Some Simple Turtle Programs</h3>

<p>
If we were setting out to explore coordinate geometry we might begin
by examining the graphs of some simple algebraic equations. Our investigation of turtle geometry begins instead by examining the geometric
figures associated with simple procedures. Here's one of the simplest:
</p>
<p>
Go <span class='textsc'>forward</span> some fixed amount, turn <span class='textsc'>right</span> some fixed amount, 
and repeat this sequence over and over. This procedure is called <span class='textsc'>poly</span>.
</p>
<div class='inline-editor turtle-code'>
TO POLY SIDE ANGLE
   REPEAT FOREVER
      FORWARD SIDE
      RIGHT ANGLE
</div>
<div class='inline-editor javascript-code' id='poly'>
function poly(side, angle) {
  for (var i=0; i<999; ++i) {
    turtle.forward(side);
    turtle.right(angle);
  }
}

poly(30, 30);
</div>

<p>
It draws shapes like those in figure 1.8.
</p>

<p>
<span class='textsc'>poly</span> is a generalization of some procedures we've already seen. Setting
the angle inputs equal to 90, 120, and 60, we get, respectively, squares,
equilateral triangles, and regular hexagons. Setting the angle input equal
to 1 gives a circle. Spend some time exploring <span class='textsc'>poly</span>, examining how the
figures vary as you change the inputs. Observe that rather than drawing
each figure only once, <span class='textsc'>poly</span> makes the turtle retrace the same path over
and over. (Later on we'll worry about how to make a version of <span class='textsc'>poly</span>
that draws a figure once and then stops.)
</p>
<p>
Another way to explore with <span class='textsc'>poly</span> is to modify not only the inputs,
but also the program; for example (see figure 1.9),
</p>
<div class='inline-editor turtle-code'>
TO NEWPOLY SIDE ANGLE
   REPEAT FOREVER
      FORWARD SIDE
      RIGHT ANGLE
      FORWARD SIDE
      RIGHT (2 * ANGLE)
</div>
<div class='inline-editor javascript-code' id='newpoly'>
function newPoly(side, angle) {
  for (var i=0; i<999; ++i) {
    turtle.forward(side);
    turtle.right(angle);
    turtle.forward(side);
    turtle.right(2 * angle);
  }
}

newPoly(30, 144);
</div>

<p>
(The symbol ``*'' denotes multiplication.) You should have no difficulty
inventing many variations along these lines, particularly if you use such
procedures as <span class='textsc'>square</span> and <span class='textsc'>triangle</span> as subprocedures to 
replace or supplement <span class='textsc'>forward</span> and <span class='textsc'>right</span>.
</p>
<div class='figure'>
<img src='images/figures/fig1-8.png'/>
<div class='caption'>Shapes drawn by <span class='textsc'>poly</span></div>
</div>

<div class='figure'>
<img src='images/figures/fig1-9.png'/>
<div class='caption'>Shapes drawn by <span class='textsc'>newpoly</span></div>
</div>

<h4>Recursion</h4>
<p>
One particularly important way to make new procedures and vary old
ones is to employ a program control structure called <em>recursion</em>; that is,
to have a procedure use itself as a subprocedure, as in
</p>
<div class='inline-editor turtle-code'>
TO POLY SIDE ANGLE
   FORWARD SIDE
   RIGHT ANGLE
   POLY SIDE ANGLE
</div>
<div class='inline-editor javascript-code' id='poly-recursion'>
function poly(side, angle) {
  turtle.forward(side);
  turtle.right(angle);
  poly(side, angle);
}

poly(50, 95);
</div>

<p>
The final line keeps the process going over and over by including ``do <span class='textsc'>poly</span> again'' as part of the definition of <span class='textsc'>poly</span>.
</p>

<div class='figure'>
<img src='images/figures/fig1-10.png'/>
<div class='caption'>Shapes drawn by <span class='textsc'>polyspi</span></div>
</div>

<p>
One advantage of this slightly different way of representing <span class='textsc'>poly</span> is
that it suggests some further modifications to the basic program. For
instance, when it comes time to do <span class='textsc'>poly</span> again, call it with different
inputs: 
</p>

<div class='inline-editor turtle-code'>
TO POLYSPI SIDE ANGLE
   FORWARD SIDE
   RIGHT ANGLE
   POLYSPI (SIDE + 1, ANGLE)
</div>
<div class='inline-editor javascript-code' id='poly-recursion-spiral'>
function polySpiral(side, angle) {
  turtle.forward(side);
  turtle.right(angle);
  polySpiral(side + 5, angle);
}

polySpiral(10, 95);
</div>

<p>
Figure 1.10 shows some sample <span class='textsc'>polyspi</span> figures. Look carefully at how
the program generates these figures: Each time the turtle goes <span class='textsc'>forward</span>
it goes one unit farther than the previous time.
</p>

<div class='figure'>
<img src='images/figures/fig1-11.png'/>
<div class='caption'>The vertices of a <span class='textsc'>polyspi</span></div>
</div>

A more general form of \textsc{polyspi} uses a third input (\textsc{inc}, for increment)
to allow us to vary how quickly the sides grow:

\begin{verbatim}
TO POLYSPI (SIDE, ANGLE, INC)
   FORWARD SIDE
   RIGHT ANGLE
   POLYSPI (SIDE + INC, ANGLE, INC)
\end{verbatim}
In addition to trying \textsc{polyspi} with various inputs, make up some of your
own variations. For example, subtract a bit from the side each time,
which will produce an inward spiral. Or double the side each time, or
divide it by two. Figure 1.11 illustrates a pattern made drawing only the
vertices of \textsc{polyspi}, shown at four scales of magnification (see 
exercise 13).  

\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-12}
\caption{Examples of \textsc{inspi}}
\end{center}
\end{figure}

Another way to produce an inward spiral (curve of increasing curvature) is to increment the angle each time:

\begin{verbatim}
TO INSPI (SIDE, ANGLE, INC)
   FORWARD SIDE
   RIGHT ANGLE
   INSPI (SIDE, ANGLE + INC, INC)
\end{verbatim}
Run \textsc{inspi} and watch how it works. The turtle begins spiraling
inward as expected. But eventually the path begins to unwind as the
angle is incremented past $180^{\circ}$. Letting \textsc{inspi} continue, we 
find that it eventually produces a symmetrical closed figure which the turtle 
retraces over and over as shown in figure 1.12. You should find this surprising.
Why should this succession of \textsc{forward}s and \textsc{right}s bring the 
turtle back precisely to its starting point, so that it will then retrace its own path?
We will see in the next section that this closing phenomenon reflects the
elegant mathematics underlying turtle geometry.

\subsubsection{Exercises for Section \thesection}

\begin{enumerate}
\item We said in the text that when the inputs to the \textsc{poly} 
procedure are small, the resulting figure will be indistinguishable from a circle. Do
some experiments to see how large you can make the inputs and still
have the figure look like a circle. For example, is an angle of $20^{\circ}$ 
small enough to draw acceptable circles?

\item The sequence of figures \textsc{poly(2,2)}, \textsc{poly(1,1)}, \textsc{poly(.5, .5)}
all with the same curvature (turning divided by distance traveled), approaches ``in the limit'' a true mathematical circle. What is the radius
of the circle?  
\item $[P]$ Write a procedure that draws circular arcs. Inputs should specify
the number of degrees in the arc as well as the size of the circle. Can
you use the result of exercise 2 so that the size input is the radius of the
circle? [A]
\item Although the radius of a circle is not ``locally observable'' to a turtle
who is drawing the circle, that length is intimately related to a local
quantity called the ``radius of curvature,'' defined to be equal to $1 \div$
curvature, or equivalently, to distance divided by angle. What is the
relation between radius and radius of curvature for a \textsc{poly} with small
inputs as above? Do this when angle is measured in radians as well as
in degrees. [A]
\item $[P]$ Construct some drawings using squares, rectangles, triangles,
circles, and circular arc programs.
\item $[P]$ lnvent your own variations on the model of \textsc{polyspi} and \textsc{inspi}.
\item How many different 9-sided figures can \textsc{poly} draw (not counting
differences in size or orientation)? What angle inputs to \textsc{poly} produce
these figures? How about 10-sided figures? [A]
\item $[PD]$ A rectangle is a square with two different side lengths. More
generally, what happens to a \textsc{poly} that uses two different side lengths
as in the following program?

\begin{verbatim}
TO DOUBLEPOLY (SIDE1, SIDE2, ANGLE)
   REPEAT FOREVER
   POLYSTEP SIDE1 ANGLE
   POLYSTEP SIDE2 ANGLE
\end{verbatim}
In particular, how does the symmetry of \textsc{doublepoly} relate to that of
\textsc{poly} with the same \textsc{angle} input?  
\item $[D]$ Which encloses the larger area --- \textsc{poly(5, 5)} or \textsc{poly(6,6)}?
\item $[P]$ Find inputs to \textsc{inspi} that give a nonclosed figure. Can you give
a convincing argument that the figure is really nonclosed rather than,
say, a closed figure too big to fit on the display screen? [A]
\item $[P]$ If the display system you are using allows ``wraparound,'' you
can get some interesting effects by trying \textsc{poly}s with very large sides.
Explore these figures.  
\item There are three kinds of ``interchanges'' we can perform on turtle
programs: interchanging \textsc{right} and \textsc{left}, interchanging \textsc{forward} and
\textsc{back}, and (for programs that terminate) reversing the sequence of instructions. Describe in geometric terms the effect of each of these operations, both by itself and in combination with the others. Start with the
class of programs that close (return the turtle to its initial position and
heading). [HA]
\item $[P]$ The pattern made by the vertices of \textsc{polyspi} can be an interesting object of study. The dots seem to group into various ``arms,'' either
straight or curving left or right. To draw these patterns, you can use
the procedures

\begin{verbatim}
TO SPIDOT ANGLE
   SUBSPIDOT 0 ANGLE

TO SUBSPIDOT SIDE ANGLE
   FORWARD SIDE
   DOT
   RIGHT ANGLE
   SUBSPIDOT (SIDE + 1, ANGLE)

TO DOT
   PENDOWN
   FORWARD
   BACK 1
   PENUP
\end{verbatim}
For example, predict what you will see between \textsc{spidot 90}, which has
four arms, and \textsc{spidot 120}, which has three. Can you explain the
sequence of figures you actually do see? Figure 1.11 shows how the figure
drawn by the same \textsc{spidot} program seems to have different numbers
of spiral arms when viewed at different scales of magnification, which
can be accomplished by changing the increment to \textsc{side} in \textsc{subspidot}.
Study this phenomenon.  






*/}});