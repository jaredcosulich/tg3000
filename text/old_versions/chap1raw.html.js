define(function() {return function () {/*

\chapter{Introduction to Turtle Geometry}
\begin{quote}We start with the simplest vocabulary of images, with ``left'' and ``right'' and ``one, two, three,'' and before we know how it happened the words and numbers have conspired to make a match with nature: we catch in them the pattern of mind and matter as one.

Jacob Bronowski, {\em The Reach of Imagination}\end{quote}

This chapter is an introduction on three levels. First, we introduce you to a new kind of geometry called turtle geometry. The most important thing to remember about turtle geometry is that it is a mathematics designed for exploration, not just for presenting theorems and proofs. When we do state and prove theorems, we are trying to help you to generate new ideas and to think about and understand the phenomena you discover.

The technical language of this geometry is our second priority. This may look as if we're describing a computer language, but our real aim is to establish a notation for the range of complicated things a turtle can do in terms of the simplest things it knows. lf you wish to actually program a computer-controlled turtle using one of the standard programing languages, you will need to know more details than are presented here; see appendixes A and B.

Finally, this chapter will introduce some of the important themes to be elaborated in later chapters. These themes permeate not only geometry but all of mathematics, and we aim to give you rich and varied experiences with them.

\section{Turtle Graphics}
Imagine that you have control of a little creature called a turtle that exists in a mathematical plane or, better yet, on a computer display screen. The turtle can respond to a few simple {\em commands}: \textsc{forward} moves the turtle, in the direction it is facing, some number of units. \textsc{right} rotates it in place, clockwise, some number of degrees. \textsc{back} and \textsc{left} cause the opposite movements. The number that goes with a command to specify how much to move is called the command's {\em input}.

\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-1}
\caption{A sequence of turtle commands}
\end{center}
\end{figure}

In describing the effects of these operations, we say that \textsc{forward} and \textsc{back} change the turtle's {\em position} (the point on the plane where the turtle is located); \textsc{right} and \textsc{left} change the turtle's {\em heading} (the direction in which the turtle is facing). 

The turtle can leave a trace of the places it has been: The position-changing commands can cause lines to appear on the screen. This is controlled by the commands \textsc{penup} and \textsc{pendown}. When the pen is down, the turtle draws lines. Figure 1.1 illustrates how you can draw on the display screen by steering the turtle with \textsc{forward}, \textsc{back}, \textsc{right}, and \textsc{left}.

\subsection{Procedures}
Turtle geometry would be rather dull if it did not allow us to teach the
turtle new commands. But luckily all we have to do to teach the turtle a
new trick is to give it a list of commands it already knows. For example,
here's how to draw a square with sides 100 units long:
\begin{verbatim}
TO SQUARE
   FORWARD 100
   RIGHT 90
   FORWARD 100
   RIGHT 90
   FORWARD 100
   RIGHT 90
   FORWARD 100
\end{verbatim}
This is an example of a {\em procedure}. (Such definitions are also commonly referred to as programs or functions.) The first line of the procedure (the {\em title line}) specifies the procedure's name. We've chosen to name this procedure \textsc{square}, but we could have named it anything at all. The rest of the procedure (the body) specifies a list of instructions the turtle is to carry out in response to the \textsc{square} command. There are a few useful tricks for writing procedures. One of them is called {\em iteration}, meaning repetition --- doing something over and over. Here's a more concise way of telling the turtle to draw a square, using iteration:

\begin{verbatim}
TO SQUARE
   REPEAT 4
      FORWARD 100
      RIGHT 90
\end{verbatim}
This procedure will repeat the indented commands \textsc{forward} 100 and \textsc{right} 90 four times.

Another trick is to create a \textsc{square} procedure that takes an input for the size of the square. To do this, specify a name for the input in the title line of the procedure, and use the name in the procedure body:

\begin{verbatim}
TO SQUARE SIZE
   REPEAT 4
      FORWARD SIZE
      RIGHT 90
\end{verbatim}
Now, when you use the command, you must specify the value to be used for the 
input, so you say \textsc{square 100}, just like \textsc{forward 100}. 

The chunk \textsc{forward size}, \textsc{right 90}  might be useful in other 
contexts, which is a good reason to make it a procedure in its own right:


\begin{verbatim}
TO SQUAREPIECE SIZE
   FORWARD SIZE
   RIGHT 90
\end{verbatim}
Now we can rewrite \textsc{square} using \textsc{squarepiece} as

\begin{verbatim}
TO SQUARE SIZE
   REPEAT 4
   SQUAREPIECE SIZE
\end{verbatim}
Notice that the input to \textsc{square}, also called \textsc{size}, 
is passed in turn as an input to \textsc{squarepiece}. \textsc{squarepiece} 
can be used as a {\em subprocedure} in other places as well --- for example, in drawing 
a rectangle:

\begin{verbatim}
TO RECTANGLE SIDE1 SIDE2
   REPEAT 2
      SQUAREPIECE SIDE1
      SQUAREPIECE SIDE2
\end{verbatim}
To use the \textsc{rectangle} procedure you must specify its two inputs, for
example, \textsc{rectangle 100 50}.

When programs become more complex this kind of input notation
can be a bit hard to read, especially when there are procedures such as
\textsc{rectangle} that take more than one input. Sometimes it helps to use
parentheses and commas to separate inputs to procedures. For example,
the \textsc{rectangle} procedure can be written as

\begin{verbatim}
TO RECTANGLE (SIDE1, SIDE2)
   REPEAT 2
       SQUAREPIECE (SIDE1)
       SQUAREPIECE (SIDE2)
\end{verbatim}
If you like, you can regard this notation as a computer language that
has been designed to make it easy to interact with turtles. Appendix
A gives some of the details of this language. It should not be diflicult
to rewrite these procedures in any language that has access to the basic
turtle commands \textsc{forward}, \textsc{back}, \textsc{right}, \textsc{left}, \textsc{penup}, and \textsc{pendown}.


\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-2}
\caption{Attempt to draw a triangle}
\end{center}
\end{figure}

Appendix B gives some tips on how to implement these commands in
some of the more common computer languages, and includes sample
translations of turtle procedures.

\subsection{Drawing with the Turtle}
Let's draw a figure that doesn't use $90^{\circ}$ angles --- an equilateral triangle. Since the triangle has $60^{\circ}$ angles, a natural first guess at a triangle procedure is

\begin{verbatim}
TO TRY.ANGLE SIZE
   REPEAT 3
      FORWARD SIZE
      RIGHT 60
\end{verbatim}
But \textsc{try.angle} doesn't work, as shown in figure 1.2. In fact, running this ``triangle'' procedure draws half of a regular hexagon. The bug in the procedure is that, whereas we normally measure geometric figures by their interior angles, turtle turning corresponds to the exterior angle at the vertex. So if we want to draw a triangle we should have the turtle turn 120°. You might practice ``playing turtle'' on a few geometric figures until it becomes natural for you to think of measuring a vertex by how much the turtle must turn in drawing the vertex, rather than by the usual interior angle. Turtle angle has many advantages over interior angle, as you will see.

\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-3}
\caption{(a) Initial attempt to draw house fails (b) Interface steps are needed}
\end{center}
\end{figure}


Now that we have a triangle and a square, we can use them as building blocks in more complex drawings --- a house, for example. But Figure 1.3 shows that simply running \textsc{square} followed by \textsc{triangle} doesn't quite work. The reason is that after \textsc{square}, the turtle is at neither the correct position nor the correct heading to begin drawing the roof. To fix this bug, we must add steps to the procedure that will move and rotate the turtle before the \textsc{triangle} procedure is run. In terms of designing programs to draw things, these extra steps serve as an interface between the part of the program that draws the walls of the house (the \textsc{square} procedure) and the part that draws the roof (the \textsc{triangle} procedure).

\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-4}
\caption{Designs made by rotating a simple doodle}
\end{center}
\end{figure}


In general, thinking of procedures as a number of main steps separated by interfaces is a useful strategy for planning complex drawings. Using procedures and subprocedures is also a good way to create abstract designs. Figure 1.4 shows how to create elaborate patterns by rotating a simple ``doodle''.

After all these straight line drawings, it is natural to ask whether the turtle can also draw curves --- circles, for example. One easy way to do this is to make the turtle go \textsc{forward} a little bit and then turn \textsc{right} a little bit, and repeat this over and over:

\begin{verbatim}
TO CIRCLE
   REPEAT FOREVER
      FORWARD 1
      RIGHT 1
\end{verbatim}
\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-5}
\caption{\textsc{forward} 1, \textsc{right} 1, repeated draws a circle}
\end{center}
\end{figure}

This draws a circular arc, as shown in figure 1.5. Since this program
goes on ``forever'' (until you press the stop button on your computer), it
is not very useful as a subprocedure in creating more complex iigures.
More useful would be a version of the \textsc{circle} procedure that would
draw the figure once and then stop. When we study the mathematics of
turtle geometry, we'll see that the turtle circle closes precisely when the
turtle has turned through $360^{\circ}$. So if we generate the circle in chunks
of \textsc{forward} 1, \textsc{right} 1, the circle will close after 
precisely 360 chunks:

\begin{verbatim}
TO CIRCLE
   REPEAT 360
      FORWARD 1
      RIGHT 1
\end{verbatim}
If we repeat the basic chunk fewer than 360 times, we get circular arcs.
For instance, 180 repetitions give a semicircle, and 60 repetitions give a
$60^{\circ}$ arc. The following procedures draw left and right arcs of \textsc{deg} degrees
on a circle of size \textsc{r}:

\begin{verbatim}
T0 ARCR R DEG
   REPEAT DEG
   FORWARD R
   RIGHT 1

TO ARCL R DEG
   REPEAT DEG
      FORWARD R
      LEFT 1
\end{verbatim}
(See figure 1.6 and exercise 3 for more on making drawings with arcs.)

The circle program above actually draws regular 360-gons, of course,
rather than ``real'' circles, but for the purpose of making drawings on
the display screen this difference is irrelevant. (See exercises 1 and 2.)

\subsection{Turtle Geometry versus Coordinate Geometry}

We can think of turtle commands as a way to draw geometric figures on
a computer display. But we can also regard them as a way to describe
figures. Let's compare turtle descriptions with a more familiar system
for representing geometric figures --- the Cartesian coordinate system, in
which points are specified by two numbers, the $x$ and $y$ coordinates relative to a pair of axes drawn in the plane. To put Cartesian coordinates
into our computer framework, imagine a ``Cartesian turtle'' whose moves
are directed by a command called \textsc{setxy}. \textsc{setxy} takes two numbers as
inputs. These numbers are interpreted as at and y coordinates, and the
turtle moves to the corresponding point. We could draw a rectangle with
\textsc{setxy} using

\begin{verbatim}
TO CARTESIAN.RECTANGLE (WIDTH, HEIGHT)
   SETXY (WIDTH, 0)
   SETXY (WIDTH, HEIGHT)
   SETXY (O, HEIGHT)
   SETXY (O, O)
\end{verbatim}

\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-6}
\caption{Some shapes that can be made using arcs}
\end{center}
\end{figure}

You are probably familiar with the uses of coordinates in geometry:
studying geometric figures via equations, plotting graphs of numerical
relationships, and so on. Indeed, Descartes' marriage of algebra and
geometry is one of the fundamental insights in the development of mathematics. Nevertheless, these kinds of coordinate systems --- Cartesian,
polar, or what have you --- are not the only ways to relate numbers to
geometry. The turtle \textsc{forward} and \textsc{right} commands give an alternative way of measuring figures in the plane, a way that complements the
coordinate viewpoint. The geometry of coordinates is called coordinate
geometry we shall refer to the geometry of \textsc{forward} and \textsc{right} as turtle
geometry. And even though we will be making use of coordinates later
on, let us begin by studying turtle geometry as a system in its own right.
Whereas studying coordinate geometry leads to graphs and algebraic
equations, turtle geometry will introduce some less familiar, but no less
important, mathematical ideas.

\subsubsection{Intrinsic versus Extrinsic}

One major difference between turtle geometry and coordinate geometry
rests on the notion of the {\em intrinsic} properties of geometric figures. An
intrinsic property is one which depends only on the figure in question,
not on the figure's relation to a frame of reference. The fact that a
rectangle has four equal angles is intrinsic to the rectangle. But the
fact that a particular rectangle has two vertical sides is {\em extrinsic}, for
an external reference frame is required to determine which direction is
``vertical.'' Turtles prefer intrinsic descriptions of figures. For example,
the turtle program to draw a rectangle can draw the rectangle in any
orientation (depending on the turtle's initial heading), but the program
\textsc{cartesian.rectangle} shown above would have to be modified if we
did not want the sides of the rectangle drawn parallel to the coordinate
axes, or one vertex at (0,0).

\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-7}
\caption{Modifying the turtle program still produces a circle. Modifying the equation gives an ellipse.}
\end{center}
\end{figure}

Another intrinsic property is illustrated by the turtle program for
drawing a circle: Go \textsc{forward} a little bit, turn \textsc{right} a little bit, and
repeat this over and over. Contrast this with the Cartesian coordinate
representation for a circle, $x^2 + y^2 = r^2$. The turtle representation
makes it evident that the curve is everywhere the same, since the process
that draws it does the same thing over and over. This property of the
circle, however, is not at all evident from the Cartesian representation.
Compare the modified program
\begin{verbatim}
TO CIRCLE
   REPEAT FOREVER
      FORWARD 2
      RIGHT 1
\end{verbatim}with the modified equation $x^2 + 2y^2 = r^2$. (See figure 1.7.) The drawing
produced by the modified program is still everywhere the same, that is, a
circle. In fact, it doesn't matter what inputs we use to \textsc{forward} or \textsc{right}
(as long as they are small). We still get a circle. The modified equation,
however, no longer describes a circle, but rather an ellipse whose sides
look different from its top and bottom. A turtle drawing an ellipse would
have to turn more per distance traveled to get around its ``pointy'' sides
than to get around its flatter top and bottom. This notion of ``how
pointy something is,'' expressed as the ratio of angle turned to distance
traveled, is the intrinsic quantity that mathematicians call {\em curvature}.
(See exercises 2 and 4.)

\subsubsection{Local versus Global}

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

\subsubsection{Procedures versus Equations} 

A final important difference between turtle geometry and coordinate
geometry is that turtle geometry characteristically describes geometric
objects in terms of procedures rather than in terms of equations. In 
formulating turtle-geometric descriptions we have access to an entire range
of procedural mechanisms (such as iteration) that are hard to capture in
the traditional algebraic formalism. Moreover, the procedural descriptions 
used in turtle geometry are readily modified in many ways. This
makes turtle geometry a fruitful arena for mathematical exploration.
Let's enter that arena now.

\subsection{Some Simple Turtle Programs}

If we were setting out to explore coordinate geometry we might begin
by examining the graphs of some simple algebraic equations. Our investigation of turtle geometry begins instead by examining the geometric
figures associated with simple procedures. Here's one of the simplest:
Go \textsc{forward} some fixed amount, turn \textsc{right} some fixed amount, 
and repeat this sequence over and over. This procedure is called \textsc{poly}.

\begin{verbatim}
TO POLY SIDE ANGLE
   REPEAT FOREVER
      FORWARD SIDE
      RIGHT ANGLE
\end{verbatim}
It draws shapes like those in figure 1.8.

\textsc{poly} is a generalization of some procedures we've already seen. Setting
the angle inputs equal to 90, 120, and 60, we get, respectively, squares,
equilateral triangles, and regular hexagons. Setting the angle input equal
to 1 gives a circle. Spend some time exploring \textsc{poly}, examining how the
figures vary as you change the inputs. Observe that rather than drawing
each figure only once, \textsc{poly} makes the turtle retrace the same path over
and over. (Later on we'll worry about how to make a version of \textsc{poly}
that draws a figure once and then stops.)

Another way to explore with \textsc{poly} is to modify not only the inputs,
but also the program; for example (see figure 1.9),

\begin{verbatim}
TO NEWPOLY SIDE ANGLE
   REPEAT FOREVER
      FORWARD SIDE
      RIGHT ANGLE
      FORWARD SIDE
      RIGHT (2 * ANGLE)
\end{verbatim}
(The symbol ``*'' denotes multiplication.) You should have no difficulty
inventing many variations along these lines, particularly if you use such
procedures as \textsc{square} and \textsc{triangle} as subprocedures to 
replace or supplement \textsc{forward} and \textsc{right}.

\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-8}
\caption{Shapes drawn by \textsc{poly}}
\end{center}
\end{figure}

\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-9}
\caption{Shapes drawn by \textsc{newpoly}}
\end{center}
\end{figure}

\subsubsection{Recursion}

One particularly important way to make new procedures and vary old
ones is to employ a program control structure called {\em recursion}; that is,
to have a procedure use itself as a subprocedure, as in

\begin{verbatim}
TO POLY SIDE ANGLE
   FORWARD SIDE
   RIGHT ANGLE
   POLY SIDE ANGLE
\end{verbatim}
The final line keeps the process going over and over by including ``do \textsc{poly} again'' as part of the definition of \textsc{poly}.

\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-10}
\caption{Shapes drawn by \textsc{polyspi}}
\end{center}
\end{figure}

One advantage of this slightly different way of representing \textsc{poly} is
that it suggests some further modifications to the basic program. For
instance, when it comes time to do \textsc{poly} again, call it with different
inputs: 

\begin{verbatim}
TO POLYSPI SIDE ANGLE
   FORWARD SIDE
   RIGHT ANGLE
   POLYSPI (SIDE + 1, ANGLE)
\end{verbatim}
Figure 1.10 shows some sample \textsc{polyspi} figures. Look carefully at how
the program generates these figures: Each time the turtle goes \textsc{forward}
it goes one unit farther than the previous time.

\begin{figure}
\begin{center}
\includegraphics[scale=1]{fig1-11}
\caption{The vertices of a \textsc{polyspi}}
\end{center}
\end{figure}

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

\item $[P]$ Suppose we have a function called \textsc{random} that outputs a random
digit (0 through 9). Play around with the procedure

\begin{verbatim}
TO RANDPOLY SIDE ANGLE
   REPEAT FOREVER
      IF RANDOM = 0 THEN PENDOWN
         ELSE PENUP
      FORWARD SIDE
      RIGHT ANGLE
\end{verbatim}
Use this program as the basis for some psychology experiments. For
instance, what is the average number of sides that must be drawn before
people can recognize which \textsc{poly} it is?
\item $[D]$ Find some local and intrinsic way to describe an ellipse. Write
a program that makes the turtle draw ellipses, where the inputs specify
the size and eccentricity of the ellipse. [A]
\end{enumerate}







*/}});