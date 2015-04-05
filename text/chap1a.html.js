define(function() {return function () {/*

</br></br>

<h3>POLYs and Other Closed Paths</h3>

</br></br>

This section develops some general theorems about turtle programs by
studying one of the simplest of them, <span class='textsc'>poly</span>, which, when it closes,
exhibits clearly some properties shared by all closed paths, no matter
how complicated. Even when <span class='textsc'>poly</span> doesn't close, it can serve as a model
that clarifies symmetry and other important properties of a very general
class of programs. Careful and patient study of such a simple program
will be richly rewarded.

</br></br>

<h3>The Closed-Path Theorem and the Simple-Closed-Path Theorem</h3>

</br></br>

You have probably already noticed that <span class='textsc'>poly</span> with an angle input of
<b>360 / n</b> draws a regular n-sided polygon. But it is not always true that
(number of sides) <b>x</b> (angle) <b>= 360</b>. If you try running <span class='textsc'>poly</span> with an angle
of 144 you will see that it draws a five-pointed star, and <b>5 x 144 = 720</b>,
not 360. Noticing that 720 is exactly twice 360 might lead us to guess
the following formula:
<p><br><span class='textsc'>(number of sides)</span> x <span class='textsc'>(angle)</span> = 360 x <span class='textsc'>(an integer)</span></p>
It's not hard to see why this formula is true. The number of sides
times the angle is precisely the <em>total turning</em> done by the turtle in
walking once around the figure --- the net change in heading. If the
path is to close legitimately, and not just cross itself, then the turtle
must end its trip with the same heading it started out with. Thus,
the total turning must be some multiple of 360&deg;.

</br></br>

Total turning is the central concept here. It certainly need not be
restricted to <span class='textsc'>poly</span>. One can imagine any turtle program keeping a
running count of its turning, adding in <span class='textsc'>right</span>s and subtracting <span class='textsc'>left</span>s.
Because only <span class='textsc'>right</span>s and <span class='textsc'>left</span>s change heading, this total turning is
always exactly the total change in heading. In particular, if the path is a
closed path (one which restores the turtle's initial position and heading),
we can be confident that the net turning (<b>=</b> change of heading) is a
multiple of 360&deg;. This gives us our first turtle-geometric theorem:

</br></br>

<br>

</br></br>

<br\><b>Closed-Path Theorem</b> The total turning along any closed path is an
integer multiple of 360&deg;.

</br></br>

<br>

</br></br>

Total turning is an intrinsic property of a path. It does not depend on
where the path starts, or how it is oriented with respect to ``vertical.''
The total turning of a closed path is frequently summarized simply by
the particular integer that multiplies 360. That integer is called the
<em>rotation number</em> of the path. As an exercise, follow the turtle around
the sample paths in figure 1.13 and compute the rotation numbers.

</br></br>

Does your experience with <span class='textsc'>poly</span> suggest an improvement to the closed-path 
theorem? A little experimentation should convince you that there
are two essentially different classes of <span class='textsc'>poly</span> paths: simple polygons (such
as squares, triangles, and hexagons); and star polygons (such as five-pointed stars), which are characterized by the fact that the paths cross
themselves. The simple polygons always appear to have total turning
equal to <b>+360^{\circ}</b> or <b>-360^{\circ}</b>, depending upon the direction in which the
turtle traverses the path. The star polygons, however, always have total
turning different from <b>\pm 360^{\circ}</b>.

</br></br>

One wonders if this experimental correlation has general significance.
It is not hard to prove its validity for <span class='textsc'>poly</span>s (see exercise 11 below). But
the more important conjecture involves generalizing from <span class='textsc'>poly</span>s to any
<em>simple closed path</em> (a closed path that does not cross itself):

</br></br>

<br>

</br></br>

<br\><b>Simple-Closed-Path Theorem</b> The total turning in a simple closed path
is 360&deg; (to the right or to the left). That is to say, the rotation number
of any simple closed path is <b>\pm 1</b>.

</br></br>

<br>

</br></br>

<div class='figure'><br\><img src='images/figures/fig1-13.png'/><br\><div class='caption'>Rotation numbers of closed paths.</div><br\></div>

</br></br>

Take a look at some examples of simple closed paths to convince
yourself of the plausibility of this theorem, which is difficult to prove
rigorously. We will return to it later, in chapter 4. For now you should
note that this theorem says that there is a relation between two very
different aspects of a closed path --- the turning and the crossing points.
That makes it considerably less obvious than the closed-path theorem,
but also much more powerful. We give one example of the power here
and several more in the exercises.

</br></br>

The simple-closed-path theorem says that the sum of the exterior
angles of any simple polygon is 360&deg;. For triangles, we can rewrite this
in terms of the three interior angles <b>A</b>, <b>B</b>, and <b>C</b> to get
<p><br>(180 - A) + (180 - B) + (180 - C) = 360</p>
<br\>oindent and thus
<p><br>(A + B + C) = <span class='textsc'>the sum of interior angles</span> = 3 x 180 - 360 = 180.</p>

</br></br>

So, as a corollary of the simple-closed-path theorem, we have derived the
familiar result that the interior angles of a triangle must sum to 180&deg;.

</br></br>

(Exercises 6-9 detail some other applications of the simple-closed-path
theorem.)

</br></br>

<h3>The POLY Closing Theorem</h3>

</br></br>

The <span class='textsc'>poly</span> procedures we've written so far, iterative and recursive, have
one fault: They neverstop. That makes it generally impossible to
use them as subprocedures in more complicated programs. Moreover,
the ``inefficiency'' of a drawing program that doesn't know when it is
done may simply offend one's sensibilities. The problem of making a
<span class='textsc'>poly</span> program that stops is a mathematical one with two fundamentally
different approaches.

</br></br>

The global approach is as follows: Sit back and look ahead. Given an
<span class='textsc'>angle</span> input, compute how many times the turtle must run the basic
<span class='textsc'>poly</span> step, <span class='textsc'>forward side</span>, <span class='textsc'>right angle</span>, before the path closes and
starts again. Then you need only repeat the <span class='textsc'>poly</span> step that many times.
The local approach revolves around questions like the following: How can
the turtle know, as it is walking along, when it is done? What clue can
the turtle be watching for? We will take the second approach here, as it
turns out to be simpler. The Hrst approach, however, is mathematically
rich and is pursued in section 1.4.

</br></br>

Consider: How could a turtle, while walking along drawing a <span class='textsc'>poly</span>,
know when the figure has been completed? (A computer turtle cannot
see the lines it is drawing.) Thinking locally, the turtle knows only
two things, position and heading. Neither of these is truly local, for to
measure them usually involves a coordinate system. But the one locally
computable quantity we know about --- total turning --- can do the trick.
The closed-path theorem says that if the path closes, then total turning
must be a multiple of 360&deg;. How about the converse: If the total turning
reaches a multiple of 360&deg;, will the path be closed? This is not true for
turtle paths in general, but it is true for <span class='textsc'>poly</span>:

</br></br>

<br>

</br></br>

<br\><b>POLY Closing Theorem</b> A path drawn by the <span class='textsc'>poly</span> procedure will close
precisely when the total turning reaches a multiple of 360&deg;.

</br></br>

<br>

</br></br>

There is one bug in this theorem, one exceptional case: If the angle of
the <span class='textsc'>poly</span> is equal to 0 then the turtle just walks off along a straight
line. The path never closes, even though at every point the total
turning is 0, a perfectly good multiple of 360. But this exceptional case,
<span class='textsc'>forward side</span>, <span class='textsc'>right 0</span>, is transparent enough so that we can just leave
it out of consideration in most instances. Any multiple of 360&deg; will, of
course, have the same effect as a turn of 0.

</br></br>

<div class='figure'><br\><img src='images/figures/fig1-14.png'/><br\><div class='caption'><span class='textsc'>poly</span> lays down a sequence of equal chords.</div><br\></div>

</br></br>

We'll outline two different proofs of the <span class='textsc'>poly</span> closing theorem.

</br></br>

\textbf{Sketch of Proof 1} Have you noticed the important fact that the vertices
of <span class='textsc'>poly</span> lie on a circle? (Everything about <span class='textsc'>poly</span> seems to be circular!) We leave the proof of this geometric fact to you in exercise 2. Using this fact, one can redescribe <span class='textsc'>poly</span> as the sequential laying down of fixed-length chords on a fixed circle as shown in figure 1.14. The point is that
there is only one chord of the required length that can be produced by
the turtle starting at any given heading. (Actually there are two, but
one of them has the wrong sense --- the turtle would turn off the circle
after traversing the chord.) Thus, whenever the turtle returns to its
initial heading (total turning = any multiple of 360&deg;) it will be about to
retrace the first chord and so should stop. Notice how this proof breaks
down for the exceptional case <span class='textsc'>forward side</span>, <span class='textsc'>right 0</span>. The turtle must
do some turning or else the vertices will lie on a straight line rather than
on a circle.

</br></br>

An alternative proof is inspired less by geometry and more by ideas
from the theory of computation. It proceeds as follows.

</br></br>

\textbf{Sketch of Proof 2} Assume that we have a turtle following a <span class='textsc'>poly</span> procedure, and that at some time the turtle returns to its initial heading
(heading change = a multiple of 360&deg;) but not to its initial position. We
will show that this assumption leads to a contradiction. (The trick of
the proof is to show that the turtle must walk off to infinity in some

</br></br>

<div class='figure'><br\><img src='images/figures/fig1-15.png'/><br\><div class='caption'>The <span class='textsc'>poly</span> closing theorem. (a) Suppose the turtle returns to his initial heading, but not his initial position. (b) <b>n</b> more steps must do the same thing again. (c) From a new heading (after one <span class='textsc'>poly</span> step), chunks of <b>n</b> steps carry the turtle away on a new line.</div><br\></div>

</br></br>

direction. Then, by regrouping the sequence of commands, we'll show
that the turtle runs off to iniinity in a different direction.)

</br></br>

\indent
By assumption, the turtle returns to its initial heading after some
number (say, <b>n</b>) repetitions of the <span class='textsc'>poly</span> step. (Notice that <b>n</b> cannot
be 1 if we neglect the exceptional case <span class='textsc'>angle</span> = 0.) Draw a dotted
line connecting the turtle's initial position <b>p_0</b> to its position <b>p_n</b> after <b>n</b>
repetitions. This line makes some angle <b>\theta</b> with the turtle's initial heading
(figure 1.15a).

</br></br>

Now let the turtle continue for <b>n</b> more repetitions of the <span class='textsc'>poly</span> step.
Since the turtle starts out from <b>p_n</b> with the same heading it had when
it started at <b>p_0</b>, the effect of n more <span class='textsc'>poly</span> steps will be to do the same
thing again, moving the turtle farther out along the same line, and again
bring it back to the initial heading (figure 1.15b). Continuing with <b>n</b>
more repetitions, and <b>n</b> more, and so on, we see that the turtle must
run off infinitely far in the direction of the dotted line. Moreover, at no
point can the turtle's path stray very far from the line, since the turtle
must get back to it at the end of every <b>n</b> <span class='textsc'>poly</span> steps.
Now let's return the turtle to the initial state and run the <span class='textsc'>poly</span> step
for one iteration. We will now see the turtle at a new position <b>p_1</b> with a
different heading. lf we continue with <b>n</b> repetitions from here, the turtle
will end up on a new dotted line that lies at angle <b>\theta</b> to this new heading.
(Figure 1.15c).

</br></br>

But the problem is obvious now. Running another sequence of <b>n</b>,
then another and another, forces the turtle off infinitely far along this
new line. But the turtle cannot remain close to both dotted lines as it
marches off to infinity. This contradiction means that our assumption
that the turtle does not come back to the initial position must have been
wrong. This completes the proof.

</br></br>

This second proof demonstrates an important computational strategy:
Divide a process into meaningful chunks (for example, the parts of
the <span class='textsc'>poly</span> between equal headings), then pay close attention to the net
action of the chunks. Structuring a complex program as a group of
subprocedures illustrates the same strategy.

</br></br>

Here finally is our <span class='textsc'>poly</span> with stop rule:

</br></br>

<div class='inline-editor turtle-code'>
TO POLYSTOP SIDE ANGLE
   TURN <- O
   REPEAT
      FORWARD SIDE
      RIGHT ANGLE
      TURN <- (TURN + ANGLE)
   UNTIL REMAINDER (TURN, 360) = 0
</div><br\><br\>
Note the use of the new symbol <b>\leftarrow</b>, which means ``assign to the variable
on the left the value given on the right.'' The procedure <span class='textsc'>remainder</span> is
a function that computes the value of its first input modulo its second
input. The program also makes use of the iteration construct ``<span class='textsc'>repeat . . . until</span> (some condition)'', which keeps repeating the indented portion
until the condition is true (and always does the indented part at least
once).

</br></br>

<div class='figure'><br\><img src='images/figures/fig1-16.png'/><br\><div class='caption'>Examples of <span class='textsc'>polyroll</span>.</div><br\></div>

</br></br>

This program allows us to use <span class='textsc'>poly</span>s as building blocks in more complex figures; for example (see figure 1.16),

</br></br>

<div class='inline-editor turtle-code'>
TO POLYROLL SIDE ANGLE1 ANGLE2 I
   REPEAT FOREVER
      POLYSTOP SIDE ANGLE1
      RIGHT ANGLE2
</div><br\><br\>
<h4>Exercises for Section \thesection</h4>

</br></br>

<ul>
<li> The simple-closed-path theorem has a serious bug as it stands. It purports to give the precise multiple of 360 that describes the total turning
for a set of paths. Unfortunately, one can insert a step, <span class='textsc'>right 360</span>,
that does not change the path at all, yet changes the multiple of 360
given by total turning. These gratuitous 360s must be pruned from
the program before the theorem can hold. However, the pruning can
be somewhat complicated if the gratuitous 360s are hidden --- as, for example, <span class='textsc'>left 160</span> followed by <span class='textsc'>right 360</span> being written as <span class='textsc'>right 200</span>.
Give general rules for pruning. (Think of writing a procedure that takes
the text of a turtle procedure as input and returns the pruned version.)
Try your method on the following program:

</br></br>

<div class='inline-editor turtle-code'>
TO PRUNE.ME
   FORWARD 5
   RIGHT 360
   FORWARD 5
   LEFT 240
   FORWARD 10
   LEFT 120
   FORWARD 0
   LEFT 120
   FORWARD 10
   RIGHT 120
</div><br\><br\>
Can you give some motivation for pruning other than that it makes the
simple-closed-path theorem true? [A]

</br></br>


<div class='figure'><br\><img src='images/figures/fig1-17.png'/><br\><div class='caption'>Relate the angles <b>A</b> and <b>B</b> to the total turning over the arc.</div><br\></div>

</br></br>


</li><li> Fill in the details in the first proof of the <span class='textsc'>poly</span> closing theorem (see
``sketch of proof 1''), including a proof that the vertices of <span class='textsc'>poly</span> lie on a
circle.  
</li><li> Prove that if the angle input to <span class='textsc'>poly</span> is an irrational number, the
turtle never returns to its initial position, and yet always remains within
a finite distance from it. [A]
</li><li> <b>[P]</b> lnvent some variations on the <span class='textsc'>polyroll</span> program, perhaps modeled
after <span class='textsc'>polyspi</span> and <span class='textsc'>inspi</span>.
</li><li> Rewrite the <span class='textsc'>polystop</span> program recursively, so that it doesn't use the
<span class='textsc'>repeat</span> command. [A]
</li><li> What is the sum of the interior angles of an <b>n</b>-gon? What is the
interior angle of a regular <b>n</b>-gon? Show how these formulas can be easily
derived by using the simple-closed-path theorem.  
</li><li> Suppose we have a simple arc (an arc that does not cross itself) and
that we join the endpoints of the arc by a straight line. Suppose further
that the line and the arc do not intersect except at the endpoints (figure
1.17).  Use the simple-closed-path theorem to give a formula relating the 
total turning over the arc to the (interior) angles that the arc makes with
the line.  
</li><li> Apply the result of the previous exercise to find the angle between a
chord of a circle and the arc that it subtends (figure 1.18a). [A]
</li><li> Use the previous exercise to compute the arc of a circle subtended by
an inscribed angle (figure 1.18b). [HA]
</li><li> Proof 1 of the <span class='textsc'>poly</span> closing theorem was based on the fact that the
vertices of a <span class='textsc'>poly</span> all lie on a circle. Use the simple-closed-path theorem
to show that the amount of arc on the circumscribed <span class='textsc'>poly</span> circle from
one vertex to the next is just the angle input to the <span class='textsc'>poly</span> procedure. [H]
</li><li> We said that we would delay giving a proof of the simple-closed-path
theorem until chapter 4. Give a proof of the theorem in the special case
where the simple closed path is a <span class='textsc'>poly</span> figure. [H]
</li><li> If you take a bicycle and lock the front wheel at angle <b>\theta</b> from straight
ahead (where <b>\theta</b> is rather small), the bicycle will turn in a circle. What
is the radius of the circle, given that the length between wheel centers
of the bicycle is D?  
</ul>

</br></br>

<h3>Looping Programs</h3>

</br></br>


<div class='figure'><br\><img src='images/figures/fig1-18.png'/><br\><div class='caption'>Solve for <b>A</b> in terms of <b>\theta</b></div><br\></div>

</br></br>


We said that the turtle approach allows us to take concepts that are
useful in thinking about computation and apply them to the study of
geometry. One such concept is that of state. Of course the idea of state
is not unique to computer science. It is important in physics, chemistry,
and any other field involving configurations that are subject to change.
But we do not generally look upon geometry in this way; geometric
figures are usually regarded as static objects. Turtle geometry provides
a more dynamic perspective --- the geometry is tied to movements.
The state of the turtle is given by specifying its position and its
heading. From the state point of view, the basic turtle commands --<span class='textsc'>forward</span>, <span class='textsc'>back</span>, <span class='textsc'>left</span>, and <span class='textsc'>right</span> --- are <em>state-change operators</em>: They
cause the turtle to change state. In this section we will look at a sequence
of turtle commands purely in terms of its net effect in changing the initial
state to the final state, ignoring what comes between. Thus, a sequence
of turtle commands can be summarized as a single state-change operator.
At this level of abstraction all programs that generate a closed path are
the same --- they are all <em>state-change-equivalent</em>. They correspond to the
simplest of all state-change operators, the one that does nothing and
leaves the initial state <em>invariant</em>.

</br></br>

<h3>The Looping Lemma</h3>

</br></br>



</br></br>

There is something striking about the paths drawn by the modifications
to <span class='textsc'>poly</span> discussed at the end of section 1.1. It is as if their descent
from <span class='textsc'>poly</span> cannot be suppressed! You should have noticed the same
phenomenon in many of your own programs. Figure 1.19 shows a <span class='textsc'>poly</span>
skeleton in dotted lines underlying the elaborate surface structures of
<span class='textsc'>newpoly</span> and <span class='textsc'>inspi</span>. Can we understand this phenomenon?

</br></br>

The key observation is this: Between successive vertices of the <span class='textsc'>poly</span>
skeleton, the program does the same thing. We might say that the
program is just a decorated version of the underlying <span class='textsc'>poly</span>. That the
paths of <span class='textsc'>newpoly</span> and <span class='textsc'>inspi</span> consist of a collection of identical pieces
is evident from the pictures they draw. In the case of <span class='textsc'>newpoly</span> the
repetitive or looping behavior is clear in the program structure. <span class='textsc'>inspi</span>'s
program structure will require a second look. For now we proceed on
the basis of the visual evidence of the paths and consider the class
of programs that do the same thing over and over, regardless of the
complexity of the basic loop (the thing that is repeated).

</br></br>

<div class='figure'><br\><img src='images/figures/fig1-19.png'/><br\><div class='caption'><span class='textsc'>newpdly</span>s and <span class='textsc'>inspi</span>s with ``<span class='textsc'>poly</span> skeletons'' indicated by dashed lines. (Numbers are skeleton angles.)</div><br\></div>

</br></br>

We can peel away the decoration by focusing on the net result of the
basic loop. What is the difference between the initial state and the final
state of the turtle? By the nature of the turtle only two things can
happen: a net change of position and a net change of heading. Figure
1.20a shows the general case. Notice that we cannot assume that the
change of position is in the same direction as the turtle's original heading;
hence, we must include an angle <b>i</b> between the initial heading and the
change-of-position line.

</br></br>

<div class='figure'><br\><img src='images/figures/fig1-20.png'/><br\><div class='caption'>(a) The net result (state change) of some basic loop. (b) Repeating the net result
lays down the <span class='textsc'>poly</span> skeleton</div><br\></div>

</br></br>

When the basic loop is repeated, the same change of state must occur,
but now relative to the new heading and hence rotated by the heading
change which the turtle underwent in the first loop. We will call this
change of heading <b>T</b> (for total turn). The next loop must follow the same
pattern, and so on. Figure 1.20b shows the repeated process laying down
the skeleton <span class='textsc'>poly</span>. The angle <b>i</b> is irrelevant to the intrinsic properties of
the underlying <span class='textsc'>poly</span>-it just determines the relative orientation of the
<span class='textsc'>poly</span> with respect to the initial heading of the turtle. The important
quantity is the heading change from beginning to end of the basic loop,
the total turning <b>T</b> in the basic loop. This is the angle of turning from
one segment of the <span class='textsc'>poly</span> to the next, and it determines the iigure's
properties. We can state this result more formally:

</br></br>

<br>

</br></br>

<br\><b>Looping Lemma</b> Any program that is just a repetition of some basic
loop of turtle instructions has precisely the structure of <span class='textsc'>poly</span> with an
angle input equal to <b>T</b>, the total turning in the loop.

</br></br>

<br>

</br></br>

You should be able to say what ``has the structure of <span class='textsc'>poly</span>'' means in
detail. lt includes such things as repeatedly touching base with a circle
if total turning is not equal to a multiple of 360&deg;, and touching base
with a line if it is. It also includes the fact that the symmetry type of
the figure is the same as that of the underlying <span class='textsc'>poly</span>. For instance, if
the total turning of the basic loop is 90&deg;, the repeated loop will have the
fourfold symmetry of a square, necessarily closing in four iterations of
the loop.

</br></br>

<h3>Examples of Looping Programs</h3>

</br></br>

Let's analyze some simple looping programs. In <span class='textsc'>newpoly</span> the total
turning is <b>3 x</b> <span class='textsc'>angle</span>. If <span class='textsc'>angle</span> is 144, then <b>T = 3 x 144 = 432</b>, which is
equivalent to <b>72 = 360 \div 5</b>. Hence, the five-pointed star <span class='textsc'>newpoly</span> actually
has the structure of a pentagon (not a <span class='textsc'>poly</span> with <span class='textsc'>angle 144</span>) --- something
that might not have been apparent from just looking at the path. (The
fact that the path is simple is a clue. Also, observe that the program
visits the vertices of the underlying pentagon in sequence, as does <span class='textsc'>poly</span>
with an <span class='textsc'>angle</span> of 72, rather than skipping between vertices, as does <span class='textsc'>poly</span>
with <span class='textsc'>angle</span> 144.)

</br></br>

\indent
Let's take a look at <span class='textsc'>inspi</span> --- in particular <span class='textsc'>inspi</span> with <span class='textsc'>angle</span> equal to
2 and <span class='textsc'>increment</span> equal to 20, which draws the decorated five-pointed
star shown in figure 1.12. The program simply alternates <span class='textsc'>forward side</span>
with turning <span class='textsc'>right</span> an ever-increasing angle which is tabulated in the
following:

</br></br>

<div class='inline-editor turtle-code'>
RIGHT 2
RIGHT 2 + 20
RIGHT 2 + 2*20
RIGHT 2 + 3*20
.
.
.
RIGHT 2 + 17*20
RIGHT 2 + 18*20 = 2 + 360
</div><br\><br\>

</br></br>

<div class='figure'><br\><img src='images/figures/fig1-21.png'/><br\><div class='caption'>Spirolaterals</div><br\></div>

</br></br>

The last command has the same effect as the first, and the one to follow,
<span class='textsc'>right</span> <b>2 + 19 x 20 =</b> <span class='textsc'>right</span> <b>2 + 20 + 360</b>, is the same as the
second. The program is clearly staging a repeat performance of the first
18 steps. Computing the total turning, we find

</br></br>

<div class='figure'><br\><img src='images/figures/fig1-22.png'/><br\><div class='caption'>Generalized spirolaterals</div><br\></div>

</br></br>

We will refer to the figures drawn by <span class='textsc'>spiro</span> as simple spirolaterals. A
more general kind of spirolateral (shown in figure 1.22) maintains a basic
loop in which each vertex has the same amount of turning, but allows the
turtle to turn left rather than right at some of the vertices. To specify
these figures we need to indicate the direction of the turtle's turning
at each vertex. The corresponding <span class='textsc'>gspiro</span> procedure takes four inputs:
a side length (the length of the shortest side in the figure), an angle
through which the turtle turns left or right at each vertex, a number
<span class='textsc'>max</span> telling how many steps are in the basic loop, and a list of numbers
specifying the vertices at which the turtle should turn left. If the vertex
number is a member of the list, then the turtle turns left at the vertex;
otherwise the turtle turns right. (The <span class='textsc'>member</span> command is used to tell
whether or not something is a member of a list.) Thus, the <span class='textsc'>gspiro</span>
procedure is

</br></br>

<div class='inline-editor turtle-code'>
TO GSPIRO (SIDE, ANGLE, MAX, LIST)
   REPEAT FOREVER
      SUBGSPIRO (SIDE, ANGLE, MAX, LIST)

</br></br>

TO SUBGSPIRO (SIDE, ANGLE, MAX, LIST)
   COUNT <- 1
   REPEAT
      FORWARD SIDE * COUNT
      IF MEMBER (COUNT, LIST)
         THEN LEFT ANGLE
         ELSE RIGHT ANGLE
      COUNT <- COUNT + 1
   UNTIL COUNT > MAX
</div><br\><br\>
<div class='figure'><br\><img src='images/figures/fig1-23.png'/><br\><div class='caption'>Unexpectedly closed spirolaterals</div><br\></div>

</br></br>

The basic loop <span class='textsc'>subgspiro</span> makes <span class='textsc'>max</span> <b>-</b> <b>L</b> right turns and <b>L</b> left turns
where <b>L</b> is the number of elements in <span class='textsc'>list</span>, making a total turning of
(<span class='textsc'>max</span> <b>-</b> <b>L</b>) <b>x</b> <span class='textsc'>angle</span> <b>-</b> <b>L</b> <b>x</b> <span class='textsc'>angle</span> <b>=</b> (<span class='textsc'>max</span> <b>- 2L</b>) <b>x</b> <span class='textsc'>angle</span>.
One intriguing property of spirolaterals is that they may be closed even
when the heading change is a multiple of 360&deg;. Total turning a multiple
of 360&deg; would lead you to expect a <span class='textsc'>poly</span> substrate that would march
off on a straight line to infinity. But, by a remarkable coincidence, the
sidelength of the underlying <span class='textsc'>poly</span> (which we did not bother to compute
for any of these other programs) might turn out to be 0 as well! This
corresponds to having a looping program in which the basic loop closes
all by itself. This phenomenon deserves a name: <em>unexpectedly closed</em>. Figure 1.23 gives some examples of unexpectedly closed spirolaterals.

</br></br>

<h3>More on the Looping Lemma</h3>

</br></br>

We end the body of this section with two remarks about the looping
lemma --- one about its implications beyond predicting the symmetry of
looping programs, the other about increasing the strength of the lemma.
First, the looping lemma constrains the behavior of any looping program. Under many circumstances, it may be possible to exclude simple
looping as a way of generating a class of paths. For example, any infinite
spiral neither touches base on a lixed circle nor marches off to infinity
around a line as <span class='textsc'>poly</span> does, so it cannot be drawn by any looping program.

</br></br>

Second, it can be very valuable to know how to identify which programs are looping programs without a detailed look at each particular
case. We can give a purely program-structural criterion that serves to
identify such programs: A program must loop (or terminate) if it consists
of any combination of

</br></br>

\begin{itemize}
</li><li> fixed and finite sequences of turtle commands <span class='textsc'>forward</span>, <span class='textsc'>back</span>, <span class='textsc'>left</span>,
and <span class='textsc'>right</span> with specified numeric inputs (these are called fixed instruction sequences),
</li><li> repeats, and
</li><li> calls to programs that satisfy these properties.
\end{itemize}

</br></br>

Notice that this criterion is recursive in form.

</br></br>

<h3>Technical Summary</h3>

</br></br>

The following is a technical recap of results stated or implied in this
section. The detailed proofs of these facts are left as exercises.

</br></br>

<h4>The Canonical Form of a Turtle State-Change Operator</h4>

</br></br>

Any fixed instruction sequence of turtle commands is state-change-equivalent to a <span class='textsc'>poly</span> step sandwiched between a <span class='textsc'>right</span> I  and <span class='textsc'>left</span> I  for some angle I:

</br></br>

<div class='inline-editor turtle-code'>
RIGHT I
FORWARD D
RIGHT T
LEFT I
</div><br\><br\>
The angle <b>T</b> is precisely the total turning of the fixed instruction sequence.

</br></br>

<h4>Looping Lemma and Classification of Looping Programs</h4>

</br></br>

Any program that repeats a fixed instruction sequence (or the equivalent,
as in <span class='textsc'>inspi</span>) has the behavior of a <span class='textsc'>poly</span> with angle <b>T</b> and side <b>D</b> in the
following senses (the angle <b>T</b> may be simply determined as the total
turning in the basic loop):

</br></br>

<br\><b>Boundedness</b> If <b>T <br\>ot= 0</b> then the figure drawn by the program will lie
within a fixed distance from some circle, and hence will be bounded. In
the exceptional case, <b>T = 0</b>, the figure will lie within a fixed distance
from some line (figure 1.24).

</br></br>

<div class='figure'><br\><img src='images/figures/fig1-24.png'/><br\><div class='caption'>Any looping program is confined to a region (a) near a circle (<b>T <br\>ot= 0</b>) or (b) in the exceptional case (<b>T = 0</b>) near a line.</div><br\></div>

</br></br>

<br\><b>Closing</b> If <b>T</b> is a rational multiple of 360&deg;, the program will always
draw a closed path, with the usual exception, <b>T = 0</b>, which causes the
program to walk off to infinity. The exception to the exception is when
<b>D</b> is also zero, the equivalent of <span class='textsc'>poly 0 0</span>, in which case the program is
``unexpectedly'' closed. If <b>T</b> is irrational the program will never close.

</br></br>

<br\><b>Symmetry</b> The program must have the same rotational symmetry as
<span class='textsc'>poly d t</span>. In particular, if <b>T = 360s/r</b> where <b>s/r</b> is a fraction in lowest
terms, then the program will have <b>r</b>-fold symmetry. (We have not yet
discussed symmetry in detail. This topic will form the basis of section 1.4.)

</br></br>

<h3>Nontechnical Summary</h3>

</br></br>

Doing the same thing over and over is either circular, straight-linish, or
very dull.

</br></br>

<h4>Exercises for Section 1.3</h4>
<ul>
</li><li> <b>[P]</b> Draw at least three distinct (ignoring size) <span class='textsc'>inspi</span> figures with
sixfold symmetry.
</li><li> Give a proof of the looping lemma and the classification of looping
programs given in the technical summary. This may be done using the
form of a general state-change operator (given above) or by modifying
Proof 2 of the <span class='textsc'>poly</span> closing theorem of subsection 1.2.2. Give bounds
for the ``fixed distances'' specified in the boundedness part in terms of
the instructions in the basic loop.
</li><li> <b>[P]</b> Figure 1.23 shows some unexpectedly closed spirolaterals. Find
some more.
</li><li> What is the heading change for <span class='textsc'>inspi</span> with an <span class='textsc'>angle</span> of <b>A</b> and an
<span class='textsc'>increment</span> of 10? [A]
</li><li> <b>[D]</b> What is the heading change for <span class='textsc'>inspi</span> with an <span class='textsc'>angle</span> of <b>A</b> and
an <span class='textsc'>increment</span> of 360/<b>n</b>, where <b>n</b> is an integer? [HA]
</li><li> <b>[DP]</b> Compute the total turning, <b>T</b>, of the basic loop in the following
looping program in terms of the angle inputs <span class='textsc'>bottom</span> and <span class='textsc'>top</span>. Use
your formula to draw at least three different (ignoring size) figures with
threefold symmetry; fourfold, fivefold.  

</br></br>

<div class='inline-editor turtle-code'>
TO POLYARC (SIDE, BOTTOM, TOP)
   REPEAT FOREVER
      INSPI.STOP (SIDE, BOTTOM, TOP, 1)
      INSPI.STOP (SIDE. TOP, BOTTOM, -1)

</br></br>

TO INSPI.STOP (SIDE, START.ANG, END.ANG, INC)
   REPEAT
      FORWARD SIDE
      LEFT START.ANG
      START.ANG <- START.ANG + INC
   UNTIL START.ANG = END.ANG
</div><br\><br\>
</li><li> <b>[P]</b> Make ``even more general'' spirolaterals by allowing the turtle to
move <span class='textsc'>back</span> at certain of the vertices. Analyze this program. Find some
unexpectedly closed figures.
</li><li> <b>[DD]</b> Show that a simple spirolateral can never be unexpectedly
closed.  
</li><li> <b>[DD]</b> Can <span class='textsc'>inspi</span> produce unexpectedly closed figures?
</li><li> <b>[P]</b> Invent some disguised looping programs like <span class='textsc'>inspi</span>. Give a
formula for the total turning of the basic loop in terms of the inputs
to the procedure. Find inputs that draw figures with simple symmetry.
Find inputs that draw unbounded figures. Determine whether any of
these figures are unexpectedly closed.

</br></br>

</li><li> When we summarize turtle paths as state-change operators, the
closed paths are precisely those operators that leave the turtle's state
unchanged. This suggests the generalization of studying operators that,
when run twice (or three times, and so on), leave the state unchanged.
Describe the paths corresponding to these operators. [A]

</br></br>

</li><li> <b>[P]</b> Can you characterize ``looping programs'' in terms of the commands used in writing them? In particular, consider the following program structures, where X and Y are variables and n is some fixed number:
\begin{itemize}
</li><li> do loops
</li><li> goto statements
</li><li> assignment statements of the form <b>X \leftarrow n</b>
</li><li> assignments of the form <b>X \leftarrow Y + n</b>
</li><li> conditional statements of the form <span class='textsc'>if</span> <b>X = n</b> . . .
\end{itemize}
</ul>
\indent
For each kind of structure, say whether a program that repeats a block
of instructions consisting of basic turtle commands together with that
particular structure must necessarily be equivalent to a program which
repeats a fixed instruction sequence. Are there bad combinations, in the
sense that two structures which separately lead to looping may not loop
when combined in a single program?

</br></br>

<h3>Symmetry of Looping Programs</h3>

</br></br>

Section 1.3 showed how the symmetry of any looping program is determined by the symmetry of an underlying <span class='textsc'>poly</span> skeleton. But what determines the symmetry of the <span class='textsc'>poly</span>? To begin with, it is clear that the <span class='textsc'>side</span> input in <span class='textsc'>poly side angle</span> does not aiiect the shape of the figure at all but only determines the size. The real question is: How does the <span class='textsc'>angle</span> input affect the symmetry of <span class='textsc'>poly</span>? To be more precise, we can break this question into two questions:

</br></br>

For a given <span class='textsc'>angle</span> input, how many vertices will the resulting <span class='textsc'>poly</span> have?
Conversely, if we want to produce a <span class='textsc'>poly</span> with a specified number of
vertices, what number(s) can we use for the <span class='textsc'>angle</span> input?

</br></br>

The purpose of this section is to answer these questions, and in doing so
to provide a taste of the mathematics of number theory.

</br></br>

<h3>The Symmetry of <span class='textsc'>poly</span></h3>

</br></br>

We want to relate the number of vertices, <b>n</b>, to the input <span class='textsc'>angle</span>, which
we'll call <b>A</b> for short. The <span class='textsc'>poly</span> closing theorem of 1.2.2 gives us a very
good start. It says <span class='textsc'>poly</span> is done when the turtle has turned a multiple
of 360&deg;, that is, when <b>n</b> turns of <b>A</b> each is some multiple of 360:

</br></br>

<b>nA = 360R</b>

</br></br>

We've given the multiple the name <b>R</b> for a good reason: It is the rotation
number of the figure, as defined in subsection 1.2.1.

</br></br>

But the above equation, which defines a common multiple of <b>A</b> and
360, doesn't tell the whole story. <b>R</b> and <b>n</b> aren't just any integers
satisfying the equation; they are the smallest (positive) that do so,
corresponding to the first time heading change reaches a multiple of 360.
That is why the number <b>nA=360R</b> is called the <em>least common multiple</em>
of <b>A</b> and 360, denoted LCM(A, 360). The answer to our first question is:
For an <span class='textsc'>angle</span> input of <b>A</b>, the number of vertices of the resulting <span class='textsc'>poly</span> is
<b>n</b> = LCM(A, 360) / <b>A</b> and the rotation number is <b>R</b> = LCM(A, 360) / 360.

</br></br>

What we've done so far is little more than giving the answer a name.
How does one go about computing the least common multiple? One way,
which assumes that <b>A</b> is an integer, is to express <b>A</b> and 360 as products
of primes. Then each of the expressions <em>nA</em> and 360<b>R</b> will give a partial
view of the factorization of LCM(A, 360). For example, if <b>A</b> = 144 then
we have <b>A</b> = <b>2^4 x  3^2</b>, 360 = <b>2^3 x 3^2 x 5</b>. Using this decomposition, we
can deduce that
<p><br>\operatorname{LCM}(144,360) = n x 2^4 x 3^2 = R x 22 x 32 x 5 = 2^4 x 3^2 x 5 = 720</p>
<br\>oindent for it is easy to see that the LCM must contain at least four factors
of 2 (from <b>A</b>), one factor of 5 (from 360), and two factors of 3 (from
either <b>A</b> or 360), and from this we derive that <b>n</b> = 5 and <b>R</b> = 2.
So <span class='textsc'>poly 100 144</span> has fivefold symmetry (it consists of <b>n</b> = 5 identical
pieces identically hooked together) and rotation number 2.

</br></br>

Another way to compute the least common multiple is to solve the
equation <em>nA</em> = 360<b>R</b> exactly as the procedure <span class='textsc'>poly</span> solves it: by running until it closes! Make a list of <b>n</b> <b>x</b> <b>A</b> for <b>n</b> = 1,2,3,... and see
when <b>n</b> <b>x</b> <b>A</b> is a multiple of 360. Applying this method to our example
<b>A</b> = 144 gives

</br></br>

\begin{tabular}{l c r} 
<b>n</b> & <em>nA</em> & multiple of 360? \\
\hline
1 & 144 & no \\
2 & 288 & no \\
3 & 432 & no \\
4 & 576 & no \\
5 & 720 & yes \\
\end{tabular}

</br></br>

We can formulate this method as a procedure for computing the least
common multiple:

</br></br>

<div class='inline-editor turtle-code'>
TO LCM A B
   N <- O
   REPEAT
      N <- N + 1
      MULTIPLE <- N * A
   UNTIL REMAINDER (MULTIPLE, B) = 0
   RETURN MULTIPLE
</div><br\><br\>
Such ``brute force'' methods of computation can be very useful. We will
see in the next subsection the utility of a simple modification of this
process, called Euclid's algorithm. The <span class='textsc'>lcm</span> procedure uses <span class='textsc'>return</span> --- a
command we haven't seen before. Since the procedure is supposed to
be computing some value, we need to have some method for ``getting
the value out of the procedure.'' This is what <span class='textsc'>return</span> does. In practice
the returned value will be used as an input to another operation, for
example, <span class='textsc'>print LCM(144,360)</span>.

</br></br>

Let's turn to our second question about the symmetry of <span class='textsc'>poly</span> figures.
Suppose we want to produce figures of a given symmetry; what <span class='textsc'>angle</span>
can we use? To answer this question, let's start again with the basic
symmetry equation <em>nA</em> = 360<b>R</b>. Since we want to find values for <b>A</b> that
will produce a given value for <b>n</b>, we should be able to use any <b>A</b> that
satisfies <b>A</b> = 360<b>R</b>/<b>n</b>. The question is: What value(s) can we choose
for <b>R</b>? For instance, we can take <b>R</b> = 1, <b>A</b> = 360/<b>n</b>, which always
works --- it makes a regular <em>n-sided polygon</em>. But <b>R</b> = 2, <b>A</b> = 2 <b>x 360 / n</b>
may not work. Here's an example: Suppose we want tenfold symmetry,
<b>n</b> = 10. If we take <b>R</b> = 2, then <b>A</b> will be 72. This makes a pentagon,
not a figure with tenfold symmetry.
We've been fooled. <b>A = 360R/n</b> doesn't always give <b>n</b>-fold symmetry.
Let's look more carefully at the above guess, <b>R</b> = 2, <b>n</b> = 10.

</br></br>

Not only does the resulting pentagon not have tenfold symmetry, but it
has rotation number 1, not 2. We clearly are not justified in naming our
guesses 10 by <b>n</b> and 2 by <b>R</b>, so let's give them new names, <em>n'</em> and <em>R'</em>.
How do these relate to the real <b>n</b> and <b>R</b>?

</br></br>

Let's compute the real n and R that correspond to <b>A</b> = 360<em>R'</em>/<em>n'</em>. We
want the smallest positive integers <b>n</b> and <b>R</b> that satisfy <em>nA</em> = 360<b>R</b>. But
this equation is satisfied by all pairs of integers <b>R</b> and <b>n</b> with the property
that <b>R</b>/<b>n</b> = <em>R'</em>/<em>n'</em>. Since we want <b>R</b> and <b>n</b> to be the smallest pair with
this property, we should take them to be the numerator and denominator
of the fraction <em>R'</em>/<em>n'</em> reduced to lowest terms. In our example we had
<em>R'</em>/<em>n'</em> = 2/10 = 1/5, so <b>n</b> = 5 and <b>R</b> : 1. To put this another way,
<b>A</b> = 360<em>R'</em>/<em>n'</em> will give <em>n'</em>-fold symmetry only when <em>R'</em>/<em>n'</em> cannot be
reduced, that is to say, when <em>R'</em> and <em>n'</em> have no factors in common.
Thus, the answer to the second question above is the following:

</br></br>

To generate a <span class='textsc'>poly</span> with <b>n</b>-fold symmetry, take the <span class='textsc'>angle</span> input to be
<b>A = 360R/n</b>, where <b>R</b> is any positive integer that has no factors in
common with n.

</br></br>

<h3>Common Divisors</h3>

</br></br>

We've answered our questions about the symmetry of <span class='textsc'>poly</span> in terms of
such concepts as common multiples and common factors. Let's take a
detour from turtle geometry and turn this process around to see what
knowing about <span class='textsc'>poly</span> can tell us about these number-theoretic concepts.

</br></br>

To begin with, the previous subsection led us to consider pairs of
integers <b>n</b> and <b>R</b> that have no common factors. Such pairs are called
relatively prime. We saw that <b>A = 360R/n</b> draws an <b>n</b>-sided <span class='textsc'>poly</span>
precisely when <b>R</b> is relatively prime to <b>n</b>. We'll reinterpret this fact in
terms of a new way of looking at the <span class='textsc'>poly</span> process.

</br></br>

Think of the <b>n</b> vertices of <span class='textsc'>poly</span> lying on a circle and numbered from 0
through <b>n - 1</b>. To construct the various <b>n</b>-sided <span class='textsc'>poly</span>s we can connect
the vertices in sequence using the following sorts of rules: (1) Connect
each vertex to the very next one; (2) connect the vertices, skipping one
in between; (3) connect the vertices, skipping 2 in between; and so on.
Figure 1.25 illustrates the various patterns for <b>n = 8</b>. There are <b>n - 1</b>
possibilities, which correspond to <b>R</b> = 1,2, . . .,<b>n - 1</b> in the formula
<b>A</b> = 360<b>R</b>/<b>n</b>. For any choice of <b>R</b>, if we start at the vertex numbered
0, then that is connected to the vertex numbered <b>R</b>, which is connected
to the vertex numbered 2<b>R</b>, and so on. Since we're counting these vertices modulo n, we see that the sequence of vertices hit are precisely the

</br></br>

<div class='figure'><br\><img src='images/figures/fig1-25.png'/><br\><div class='caption'>Patterns of connecting eight points, <b>n = 8</b></div><br\></div>

</br></br>


multiples 0, <b>R</b>, 2<b>R</b>, . . . , (<b>n - 1</b>)<b>R</b> taken modulo <b>n</b>.

</br></br>

Now we saw in the previous subsection that, if <b>R</b> and <b>n</b> are relatively
prime, then the resulting <span class='textsc'>poly</span> figure will have <b>n</b> vertices. In terms of the
circle picture this means that all vertices on the circle 0, 1, 2, . . . ,<b>n - 1</b>
are reached. Consequently, if <b>R</b> and n are relatively prime, then the
multiples of <b>R</b> taken modulo <b>n</b> must include all the numbers between 0
and <b>n - 1</b>. In other words, if <em>s</em> is any integer between 0 and <b>n - 1</b>, then
there is some multiple of <b>R</b>, say <em>pR</em>, with <em>pR</em> = <em>s</em> (mod <b>n</b>). Moreover, if
<b>R</b> and <b>n</b> are not relatively prime, then at least one of the <b>n</b> vertices will
not be touched by the <span class='textsc'>poly</span> process, and so there will be some number
<em>s</em> which is not equal to <em>pR</em> (mod <b>n</b>) for any <b>p</b>. Restating the equality
modulo <b>n</b> in terms of precise equality, we have the following: 

</br></br>

Two integers <b>R</b> and <b>n</b> are relatively prime if and only if, for any integer
<em>s</em>, we can find integers <b>p</b> and <b>q</b> such that <b>pR - qn = s</b>.

</br></br>

This condition can be written in an equivalent form (exercise 10) that
reflects the fact that, if the vertex labeled 1 is hit, then all vertices must
be:

</br></br>

Two integers <b>R</b> and <b>n</b> are relatively prime if and only if there exist
integers <b>p</b> and <b>q</b> such that <b>pR + qs = 1</b>.

</br></br>

In summary: We have shown how to translate a condition about the
relative primality of two integers into a rather different condition which
has to do with representing integers as sums.

</br></br>

What exactly happens when <b>R</b> and <b>n</b> are not relatively prime? Figure 
1.25 includes some examples: Taking <b>n</b> = 8 and <b>R</b> = 2 hits all the
even vertices (the multiples of 2); <b>n</b> = 8 and <b>R</b> = 4 hits only 0 and
4 (multiples of 4); <b>n</b> = 8 and <b>R</b> = 6 hits all the multiples of 2. In
general, the vertices which are hit --- numbered 0, <b>R</b>, 2<b>R</b>, . . . , <b>(n - 1)R</b>,
taken modulo <b>n</b> --- give precisely the multiples of some integer <b>d</b>. This
integer <b>d</b> is called the greatest common divisor of <b>n</b> and <b>R</b>, and it can be
defined by stating that <b>d</b> = GCD(<b>n</b>, <b>R</b>) is the largest integer that divides
both <b>n</b> and <b>R</b>. The fact that the vertices which are hit are precisely the
multiples of <b>d</b> follows from the fact that GCD(<b>n</b>, <b>R</b>) can alternatively
be defined as the smallest positive integer that can be represented as
<em>pR</em> + <em>qn</em>, where <b>p</b> and <b>q</b> also integers. We leave it to you (exercise 11)
to verify these claims. You can see that the GCD of <b>n</b> and <b>R</b> is an
important quantity. When it is 1, <b>n</b> and <b>R</b> are relatively prime and
the <span class='textsc'>poly</span> has <b>n</b>-fold symmetry. When the GCD is not 1, it gives <b>d</b>, the
integer whose multiples are the vertices actually hit.

</br></br>

Neither definition of GCD --- as the largest common divisor, or as the
smallest positive <em>pR</em> + <em>qn</em> --- seems very helpful in actually computing
the GCD of two given integers. One method for doing so is Euclid's
algorithm. The idea of the algorithm is very simple: The common factors
of <b>n</b> and <b>R</b> are the same as the common factors of <b>n - R</b> and <b>R</b>. (Prove
this.) And so the problem of finding the GCD of <b>n</b> and <b>R</b> can be reduced
to finding the GCD of <b>n</b> - <b>R</b> and <b>R</b>:

</br></br>

<br>

</br></br>

<br\><b>Euclid's Algorithm</b> Start with two numbers. (1) If the two numbers are equal, then stop; the GCD is their common value. (2) Subtract the
smaller number from the larger and throw away the larger. (3) Repeat
the entire process using, as the two numbers, the smaller number and the difference computed in step 2.

</br></br>

<br>

</br></br>

The process produces ever smaller numbers and stops with two equal
numbers. Take as an example 360 and 144. The sequence of pairs
generated is

</br></br>

(360,144) <b>\rightarrow</b> (216,144) <b>\rightarrow</b> (72,144) <b>\rightarrow</b> (72, 72) <b>\rightarrow</b> done: GCD = 72

</br></br>

Finding the GCD of 360 and 144 can be interpreted as follows: Any <span class='textsc'>poly</span>
with an integer angle will touch some subset of the vertices of a regular
360-gon. If the angle is 144, the vertices touched will be the multiples
of 72.

</br></br>

We can translate Euclid's algorithm into a recursive computer procedure:

</br></br>

<div class='inline-editor turtle-code'>
TO EUCLID (N, R)
   IF N = R THEN RETURN N
   IF N > R THEN RETURN EUCLID (N - R, R)
   IF N < R THEN RETURN EUCLID (N, R - N)
</div><br\><br\>
There's an obvious way to speed up the algorithm: Subtract multiple
copies of the smaller number from the larger in a single step. Even better,
we can divide the smaller number into the larger, taking the smaller
number and the remainder to start the next step. This has an additional
advantage --- we will know automatically that the remainder is smaller
than the original smaller number, so it will not be necessary to test to
see which of the two inputs is smaller:

</br></br>

<div class='inline-editor turtle-code'>
TO FAST.EUCLID (N, R)
   IF N = R THEN RETURN N
   ELSE RETURN FAST.EUCLID (R, REMAINDER (N, R))
</div><br\><br\>
Note that Euclid's algorithm is very nearly the reverse of the ``brute
force'' method for finding the least common multiple given in subsection
1.4.1. In fact the algorithm gives us a new way of computing the LCM
of two numbers because of the formula
<p><br>\operatorname{LCM}(p, q) x \operatorname{GCD}(p, q) = p x q</p>
which is true for any integers <b>p</b> and <b>q</b>. (See exercise 16.)

</br></br>

As a final remark we point out that, whereas the <span class='textsc'>remainder</span> function
used in <span class='textsc'>fast.euclid</span> is defined only for integers, the operations in the
original <span class='textsc'>euclid</span> procedure make sense for any numbers. So we can define
the GCD for any two numbers (not just integers) to be the value returned
by the <span class='textsc'>euclid</span> procedure. (Exercises 15-17 invite you to investigate the
properties of this generalized GCD.) We see here how the procedural
formulation of a concept can suggest new insights and directions for
exploring. Further explorations suggested by the <span class='textsc'>euclid</span> procedure are
illustrated in exercises 18-25.

</br></br>

<h4>Exercises for Section \thesection</h4>

</br></br>

<ul>
</li><li> Determine the symmetry of <span class='textsc'>poly</span> with <b>A</b> = 350, 35, 37, 12<b>\frac{1}{2}</b>, 26<b>\frac{2}{3}</b>. For
each value of <b>A</b>, find <b>p</b> and <b>q</b> such that <b>A = 360p/q</b> where <b>p/q</b> is a
fraction reduced to lowest terms. [A]
</li><li> Using only integer angles, what are all the possible values of <b>n</b> for
which <span class='textsc'>poly</span> can draw an <b>n</b>-sided figure?  
</li><li> <b>[D]</b> Show that the <span class='textsc'>poly</span> symmetry determined by <span class='textsc'>angle</span> = 360 - <b>A</b>
is the same as the symmetry of <span class='textsc'>angle</span> : <b>A</b>. What about the symmetry
of <span class='textsc'>angle</span> : 180 - <b>A</b>? [HA]
</li><li> Consider the process of finding the least common multiple of <b>A</b> and
<em>B</em>. Show that the ``brute force'' method will find the same minimal
number <b>n</b> such that <em>nA</em> = <em>RB</em> as it will for <em>n(Ax)</em> = <em>R(Bz)</em> where <em>x</em> is
any number, and hence that LCM(<em>Ax</em>, <em>Bx</em>) = <em>x</em> <b>x</b> LCM(<b>A</b>, <em>B</em>). Use this
idea to show how to compute least common multiples of (noninteger)
rational numbers. If <b>A</b> = <b>p</b>/<b>q</b> and <em>B</em> = <em>r</em>/<em>s</em>, both fractions in lowest
terms, show how to pick sv so that one can use the prime factorization
method to compute LCM(A, B). [A]
</li><li> We saw that <b>A</b> = 360<b>R</b>/<b>n</b> will produce an <b>n</b>-pointed figure for any
integer <b>R</b> relatively prime to <b>n</b>. But how many of these <b>R</b>s actually
produce <span class='textsc'>poly</span>s that look different? How many different <span class='textsc'>poly</span>s are there
with <b>n</b> = 10, 36, 37? How many in general? [A]
</li><li> In solving the previous problem you may want to make use of the
Euler <b>\phi</b> function, which is defined for positive integers <b>n</b> to be the number
of integers less than <b>n</b> and relatively prime to it. Euler gave a formula
for <b>\phi</b>(<b>n</b>), which works as follows: Suppose that <em><b>p_1</b></em>,<em><b>p_2</b></em>, <b>...</b> are the distinct
prime factors of <b>n</b>, that is <b>n</b> = <b>p_1^ap_2^b</b> .... (For example, 3960 = <b>2^3 x
3^2 x 5 x 11</b>.) Then
<p><br>\phi(n) = n(1 - \frac{1}{p_1})(1 - \frac{1}{p_2})</p>
<br\>oindent Use this formula to compute <b>\phi</b>(1,000, 000). [A]
</li><li> <b>[D]</b> Use the fact that, for <b>R</b> relatively prime to <b>n</b>, the multiples of <b>R</b>
include all the integers 1, 2, . . . , <b>n</b> - 1 (mod <b>n</b>) to prove Fermat's Little
Theorem: If <b>p</b> is a prime and <b>R</b> is any positive integer less than <b>p</b>, then
<b>R^{p-1} = 1</b> (mod p).  
</li><li> <b>[P]</b> Fermat's Little Theorem lies behind a recently discovered way to
test by computer whether large numbers are prime. The idea is to start
with a number <b>p</b>, pick a random number <em>a</em> less than <b>p</b>, and compute
<b>a^{p-1}</b> (mod <b>p</b>). lf the answer is not 1, then <b>p</b> is not prime. Conversely,
it is known that, in general, if <b>p</b> is not prime, then most of the numbers
a less than <b>p</b> will not satisfy <b>a^{p-1} = 1</b> (mod p). So if we test, say, 10
different choices for <em>a</em> and they all satisfy Fermat's equation, then we
can be virtually certain that <b>p</b> is prime. Implement this method in a
computer program and use it to find, say, the ten largest primes less
than one billion. (There are choices for <b>p</b>, called ``Carmichael numbers,''
that will fool this test. They are nonprime, and yet satisfy the condition
<b>a^{p-1} = 1</b> (mod p) for every <em>a</em>. But they are few and far between.)
</li><li> <b>[P]</b> Write a procedure that, given a number <b>n</b>, returns a list of all the
primes dividing <b>n</b>. Use this together with Euler's formula of exercise 6
to produce a procedure that calculates the Euler <b>\phi</b> function.
</li><li> Given integers <b>R</b> and <b>n</b>, show that there exist integers <b>p</b> and <b>q</b> such
that <b>pR + qn = 1</b> if and only if, for any integer <em>s</em>, there exist integers
<b>p_s</b> and <b>q_s</b> such that <b>p_sR - q_sn = s</b>. [A]
</li><li> <b>[D]</b> Prove that if we define the greatest common divisor <b>d</b> =
GCD(<b>n</b>, <b>R</b>) as the largest integer that divides both <b>n</b> and <b>R</b>, then <b>d</b> is the
smallest positive integer that can be expressed as (integer)<b>R</b> + (integer)<b>n</b>.
Show also that the multiples of <b>R</b> taken modulo <b>n</b> are precisely the
multiples of <b>d</b>. [H]
</li><li> <b>[D]</b> Show that the <span class='textsc'>euclid</span> procedure works when its inputs are
positive integers. That is, show that it will always terminate and that
what it returns is in fact the GCD of its inputs.
</li><li> <b>[P]</b> In subsection 1.2.2 we discussed the problem of writing a <span class='textsc'>poly</span>
procedure that draws the figure once and then stops. We implemented
<span class='textsc'>polystop</span> using the ``local'' strategy of having the turtle count total
turning. Write a version of <span class='textsc'>polystup</span> which uses the ``global'' strategy
of taking the <span class='textsc'>angle</span> input and computing in advance how many times
to run the basic loop. Can you design the program so that it works not
only for integer angles but for (noninteger) rational angles as well?
</li><li> Show directly that if Euclid's algorithm returns <b>d</b> given <b>R</b> and <b>n</b> as
inputs, then there exist integers <b>p</b> and <b>q</b> such that <b>pR + qn = d</b>.  
</li><li> <b>[D]</b> Show that the <span class='textsc'>euclid</span> procedure terminates whenever its inputs
are positive rational numbers, and thus allows us to extend the definition
of greatest common divisor to all positive rational numbers. What is the
``GCD'' of <b>\frac{1}{2}</b> and <b>\frac{2}{3}</b>? of <em>a</em>/<em>b</em> and <em>c</em>/<b>d</b> where <em>a</em>, <em>b</em>, <em>c</em> and <b>d</b> are integers?
What can you say about the behavior of the algorithm when the inputs
are not both rational? [A]
</li><li> <b>[D]</b> Prove for integers <b>p</b> and <b>q</b> that GCD(<b>p</b>, <b>q</b>) <b>x</b> LCM(<b>p</b>, <b>q</b>) = <b>p x q</b>. 
Does this formula hold as well for rational numbers (with GCD defined
as the result of the <span class='textsc'>euclid</span> procedure and LCM defined as indicated in
exercise 4)?
</li><li> <b>[D]</b> What can you say about the (integer)<b>R</b> + (integer)<b>n</b> definition
of GCD as it relates to the GCD for rational numbers (defined as the
result of the <span class='textsc'>euclid</span> procedure)?
</li><li> <b>[D]</b> Modify the <span class='textsc'>euclid</span> procedure to define a procedure <span class='textsc'>dio</span> which
not only computes <b>d</b> = GCD(<b>n</b>, <b>R</b>) but also returns integers <b>p</b> and <b>q</b>
such that <b>pR + qn = d</b>. The <span class='textsc'>dio</span> procedure should take two inputs and
return a list of three numbers <b>p</b>, <b>q</b>, <b>d</b>.  
</li><li> <b>[D]</b> Show how to speed up the <span class='textsc'>dio</span> procedure by using the reduction method of the <span class='textsc'>fast.euclid</span> procedure. Write the corresponding
<span class='textsc'>fast.dio</span> program.  
</li><li> The name <span class='textsc'>dio</span> comes from ``Diophantine equations.'' These are
equations which are to be solved for integer values of the unknowns. Use
your <span class='textsc'>dio</span> or <span class='textsc'>fast.dio</span> procedures to find integers <em>x</em> and <em>y</em> which satisfy
the equation <b>17x + 117y = 1</b>; the equation <b>1234567x + 7654321y = 1</b>. [A]
</li><li> Let <b>T</b> denote the transformation <b>(mr) \rightarrow (r, n - r)</b> which is used
by the <span class='textsc'>euclid</span> program. Show that the transformation <b>S</b> defined by
<b>(x, y) \rightarrow (x + y, x)</b> is inverse to <b>T</b> in the sense that, for any pair (<em>a</em>, <em>b</em>),
<b>T(S(a,b)) = S(T(a,b)) = (a, b)</b>. If we start with the pair (1,0) and
repeatedly apply <b>S</b> we obtain
<p><br>(1,0) \rightarrow (1, 1) \rightarrow (2,1) \rightarrow (3,2) \rightarrow (5,3) \rightarrow (3,5) \rightarrow (13,3) \rightarrow \cdot \cdot \cdot </p>
<br\>oindent The sequence of numbers formed by this operation is called the Fibonacci
numbers; that is,
<p><br>F(0)=0,F(1)=1,F(2)=1,F(3)=2,F(4)=3,F(5)=5,F(6)=8</p>
<br\>oindent and so on. Use the fact that <b>S</b> and <b>T</b> are inverse to show that for any
integer <b>n</b>, <em>F</em>(n) and <em>F(n - 1)</em> are relatively prime. [A]
</li><li> <b>[P]</b> Show that <b>F(n) = F(n - 1) + F(n - 2)</b> and hence that the
Fibonacci numbers can be generated by the procedure

</br></br>

<div class='inline-editor turtle-code'>
TO FIB N
   IF N = 0 RETURN 1
   IF N = 1 RETURN 1
   RETURN FIB (N-1) + FIB (N-2)
</div><br\><br\>
Why does this procedure run so slowly? Can you find a faster method
of computing the Fibonacci numbers? [A]
</li><li> <b>[DD]</b> Expanding on the result of exercise 21, investigate the greatest
common divisor of <em>F(n)</em> and <b>F(n + k)</b>. State and prove a theorem about
GCD(<b>F(a), F(b)</b>) [HA]
</li><li> <b>[D]</b> Use the <span class='textsc'>dio</span> or <span class='textsc'>fast.dio</span> procedures (exercises 18,19) to solve
Diophantine equations of the form <b>xF(n) + yF(n - 1) = 1</b> for integers
<b>x</b> and <b>y</b>. What is the solution in general?  
</li><li> <b>[P]</b> For any pair of numbers <b>p,q</b> we can define a new sequence of
numbers <b>F(p, q; n)</b> by applying the transformation <b>S</b> of exercise 21 beginning with <b>(p, q)</b> rather than <b>(1,0)</b>. Write a program to generate these
sequences and investigate their properties. Can you express <b>F(p, q; n)</b> in
terms of the usual Fibonacci numbers? [A]
</ul>

</br></br>

<h2>Feedback, Growth, and Form</h2>
<div class='quote'>We watch an ant make his laborious way across a
wind- and wave-molded beach. He moves ahead,
angles to the right to ease his climb up a steep
dunelet, detours around a pebble, stops for a moment to exchange information with a compatriot.
Thus he makes his weaving, halting way back home.
. . . His horizons are very close, so that he deals with
each obstacle as he comes to it; he probes for ways
around or over it, without much thought for future
obstacles. It is easy to trap him into deep detours.

</br></br>

Herbert Simon, <em>The Sciences of the Artificial</em></div>

</br></br>

Chapter 1 presented the rudiments of a computational view of geometry
and introduced some themes-local versus global, intrinsic versus extrinsic, state, and fixed instruction programs --- that will be important in
chapters to come. The most important theme of all, however, is that
turtle geometry is a mathematics designed for exploring. Now it's time
to explore. This chapter presents some ideas for using turtle graphics to
investigate mathematics in an experimental and phenomenon-oriented
way. Randomness, feedback systems, growth, differential games, and
designs based on recursion are all fruitful areas. With the initiation
provided here, we hope you will take the time to investigate some of
these topics in depth.

</br></br>

<h3>The Turtle as Animal</h3>

</br></br>

We introduced the turtle as a mathematical ``animal''; let's pursue that
point of view by thinking of the turtle's motion as a behavior pattern
and the turtle programs as models of simple animal behavior. Turtle
geometry is particularly well suited to such modeling because of the
r local and intrinsic ways we specify the turtle's movements. Expressing
motions in terms of <span class='textsc'>forward</span>s and <span class='textsc'>right</span>s is a much more direct way of
dealing with an animal's behavior than, say, describing movements in
response to stimuli as changes in <em>x</em> and <em>y</em> coordinates.

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-1.png'/><br\><div class='caption'>Sample paths generated by <span class='textsc'>random</span><span class='textsc'>.move</span></div><br\></div>

</br></br>

<h3>Random Motion</h3>

</br></br>

Perhaps the simplest kind of motion to model with the turtle is random
motion (repeatedly going forward and turning random amounts). To
implement this in a procedure, let's assume that our computer language
has a random-number generator <span class='textsc'>rand (low, high)</span> that outputs a random
number between <span class='textsc'>low</span> and <span class='textsc'>high</span>. Using this we can write a procedure that
takes four inputs specifying the ranges from which to select the inputs
to <span class='textsc'>forward</span> and <span class='textsc'>left</span>:

</br></br>

<div class='inline-editor turtle-code'>
TO RANDOM.MOVE (D1, D2, A1, A2)
   REPEAT FOREVER
      LEFT RAND (A1, A2)
      FORWARD RAND (D1, D2)
</div><br\><br\>
Even with this simple program, there is much to investigate. How do
the bounds on the <span class='textsc'>forward</span>s or the turns affect the path? For instance,
unless you make A1 negative the turtle will always turn left and the Y
path will look roughly like a circle. In fact, except when A1 is chosen to
be the negative of A2, the turtle's turning will be biased in one direction 
or the other and this will be reflected in the shape of the path. Figure
2.1 shows some examples. How about the case where the turning is 
unbiased? Would you expect the turtle to go off ``to infinity''? Or will 
it instead travel in a very large circle? More generally, can you say
anything about the radius of the ``average path'' as a function of the 
bounds on the turns? One way to investigate these random motions is to
write a record-keeping procedure that repeatedly runs, say, 100 rounds
of the <span class='textsc'>random.move</span> loop and automatically records such statistics as
the turtle's heading and distance from the origin after those 100 rounds.
Can you say anything about the average values of these quantities? (See
exercises 2 and 3.)

</br></br>

Random-motion procedures such as this will often run the turtle off
the edge of the display screen. Forcing the turtle to stay on the screen
suggests modifying the random motion to model the behavior of an
animal crawling in a box. To enable the turtle to do this, we'll supply
two new procedures: <span class='textsc'>check.forward</span>, which is just like <span class='textsc'>forward</span> except
that it won't allow the turtle to move if the result would take it outside of
some fixed square box around the origin, and <span class='textsc'>stuck</span>, which tells whether
or not the last move tried to place the turtle outside of the box.
The <span class='textsc'>checked.forward</span> program works by moving the turtle ``invisibly''
to the new position, then using a subprocedure <span class='textsc'>out.of.bounds</span>? to check
whether the new position is within bounds, and finally redoing the move
visibly only if it is within bounds. This procedure makes use of some
new operations in our turtle graphics system. <span class='textsc'>hideturtle</span> causes the
turtle indicator not to be displayed; <span class='textsc'>showturtle</span> restores the indicator;
<span class='textsc'>xcor</span> and <span class='textsc'>ycor</span> output, respectively, the <b>x</b> and <b>y</b> coordinates of the
turtle; <span class='textsc'>turtle.state</span> outputs (as a list) the position and heading of
the turtle; and <span class='textsc'>setturtle</span> takes as input a list such as is produced by
<span class='textsc'>turtle.state</span> and restores the turtle to that state:

</br></br>

<div class='inline-editor turtle-code'>
TO CHECK.FORWARD DISTANCE
   OLD.POSITION <- TURTLE.STATE
   PENUP
   HIDETURTLE
   FORWARD DISTANCE
   FORWARD.FAILED <- OUT.OF.BOUNDS?
   SETTURTLE OLD.POSITION
   PENDOWN
   SHOWTURTLE
   IF NOT FORWARD.FAILED THEN FORWARD DISTANCE

</br></br>

TO STUCK
   RETURN FORWARD.FAILED

</br></br>

TO OUT.OF.BOUNDS?
   IF EITHER
         ABS (XCOR) > BOXSIZE
         ABS (YCOR) > BOXSIZE
      THEN RETURN "TRUE"
      ELSE RETURN "FALSE"
</div><br\><br\>(<span class='textsc'>abs</span> is the absolute value function.)

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-2.png'/><br\><div class='caption'>(a) Edge ``reflection'' generated by <span class='textsc'>if</span><span class='textsc'> stuck</span><span class='textsc'> then</span> <span class='textsc'>right</span> <span class='textsc'>180</span>. (b) Edge-following behavior generated by <span class='textsc'>if</span><span class='textsc'> stuck</span><span class='textsc'> then</span><span class='textsc'> wriggle</span></div><br\></div>

</br></br>

We can use these procedures to model appropriate behaviors that
will keep the turtle in the box. Here, for example, is a version of
<span class='textsc'>random.move</span> that has the turtle turn 180&deg; whenever it runs into an
edge:

</br></br>

<div class='inline-editor turtle-code'>
TO RANDOM.MOVE (D1, D2, A1, A2)
   REPEAT FOREVER
   LEFT RAND (A1. A2)
   CHECK.FORWARD RAND (D1, D2)
   IF STUCK THEN RIGHT 180
</div><br\><br\>
shows a sample path. A second possibility for edge behavior
is to have the turtle turn a little at a time, until it can go forward again.
To do this, change the last line in the above procedure to <span class='textsc'>if</span><span class='textsc'> stuck</span><span class='textsc'> then</span><span class='textsc'> wriggle</span> where <span class='textsc'>wriggle</span> is defined as

</br></br>

<div class='inline-editor turtle-code'>
TO WRIGGLE
   REPEAT
      RIGHT 1
      CHECK.FORWARD 1
   UNTIL NOT STUCK
</div><br\><br\>
Figure 2.2b shows how this variation, incorporated into a random-motion
procedure, causes the turtle to spend most of its time wandering along
the edges of the box. You may have observed the similar behavior of
a real insect trapped in a box. Of course, with a real insect, this
behavior is often interpreted as the insect trying to get out of the
box by following the walls. The turtle program calls into question
the validity of such anthropomorphizing. If edge-following behavior
can be produced by a simple combination of random motion plus wall
avoidance, are we really justified in saying that the insect is ``trying'' to
follow the edge? Could we legitimately make this claim about the turtle?

</br></br>

<h3>Directed Motion: Modeling Smell</h3>

</br></br>

We can make our simulation more elaborate by allowing the turtle's
behavior to be affected by some stimulus. For example, we could imagine
that there is some food located in the box with the turtle and design
mechanisms that allow the turtle to find the food ``by sense of smell.''
There are many different ways we could provide turtles with information
corresponding to an ability to smell. For example, the ``amount of smell''
could be a value that depends on how far the turtle is from the food (the
larger the distance, the weaker the smell); or the turtle might not sense
any particular level of smell, but at each move be able to detect whether
the smell is getting stronger or weaker.

</br></br>

We'll begin with the second possibility. This ``stronger-weaker'' kind
of smell can be modeled by

</br></br>

<div class='inline-editor turtle-code'>
TO SMELL
   IF DISTANCE.TO.FOOD > DISTANCE.LAST.TIME
      THEN RESULT <- "WEAKER"
      ELSE RESULT <- "STRONGER"
   DISTANCE.LAST.TIME <- DISTANCE . TO . FOOD
   RETURN RESULT
</div><br\><br\>
How can the turtle use this information to locate the food? One possibility is this: If the turtle finds that the smell is getting stronger, it keeps going in the same direction; otherwise it turns:

</br></br>

<div class='inline-editor turtle-code'>
TO FIND.BY.SMELL1
   REPEAT FOREVER
      FORWARD 1
      IF SMELL = "WEAKER" THEN RIGHT 1
</div><br\><br\>
<div class='figure'><br\><img src='images/figures/fig2-4.png'/><br\><div class='caption'><span class='textsc'>find</span><span class='textsc'>.by</span><span class='textsc'>.smell3</span> illustrates degeneration of the algorithm under increasing randomness.</div><br\></div>

</br></br>

such intensity information to approach or avoid stimuli. Wood lice, for
example, are observed to aggregate in moist places and avoid dry places.
It is believed that they move in random directions, but that the moisture
level governs their speed-they move more slowly when it is damp and
hence spend most of their time in moist regions. This mechanism for
aggregation is called orthokinesis. A different mechanism, klinokinesis,
is claimed to govern the behavior of paramecia in aggregating in dark
areas. In klinokinesis, the animal's speed is constant, but the rate of
turning varies with the intensity of the stimulus. (For more information on these and other orientation mechanisms, see G. Fraenkel and
D. Gunn, Orientation in Animals [New York: Dover, 1961].) Try writing procedures embodying these mechanisms, and then try inventing
new mechanisms. Good questions to guide your exploration are: How
``efficient'' is your method (how long does it take the turtle to reach the
stimulus point)? How does the turtle's path change as you vary the initial position and heading, or as you vary the parameters to the program?
How does the mechanism degenerate as you incorporate some randomness into the turtle's motion (for example, as in the <span class='textsc'>find</span><span class='textsc'>.by</span><span class='textsc'>.smell3</span>
procedure above)? Will even a slight amount of randomness destroy the
turtle's ability to reach the goal, or is your mechanism relatively stable
with respect to random distortions?

</br></br>

In a more abstract vein, investigate the mathematical properties of
simple <span class='textsc'>poly</span>like programs, but think of some aspect of the turtle's motion
as governed by the distance from some chosen point. Try, for example,

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-3.png'/><br\><div class='caption'>Paths generated by <span class='textsc'>find</span><span class='textsc'>.by</span><span class='textsc'>.smell2</span></div><br\></div>

</br></br>

Experimenting further, we can add a parameter to adjust the size of the
turtle's turns. This leads to an interesting study of how the geometry
of the path varies with the turn angle. (See figure 2.3.)

</br></br>

<div class='inline-editor turtle-code'>
TO FIND.BY.SMELL.2 (TURN)
   REPEAT FOREVER
      FORWARD 1
      IF SMELL = "WEAKER" THEN RIGHT TURN
</div><br\><br\>
A more realistic simulation would also include some of` the random
motion of section 2.1.1:

</br></br>

<div class='inline-editor turtle-code'>
TO FIND.BY.SMELL3 (D1, D2, SMELL.TURN, RAND.TURN)
   REPEAT FOREVER
      FORWARD RAND (D1, D2)
      LEFT RAND ( - RAND.TURN, RAND.TURN )
      IF SMELL = "WEAKER" THEN RIGHT SMELL.TURN
</div><br\><br\>
In this procedure the turtle's motion is governed by two opposing tendencies: a ``random motion'' scaled by <span class='textsc'>rand.turn</span> and a ``directed motion'' scaled by <span class='textsc'>smell.turn</span>. This can be highlighted by adjusting the
relative sizes of the two parameters. As an experiment, see how large
<span class='textsc'>rand.turn</span> must be with respect to <span class='textsc'>smell.turn</span> before the random motion dominates completely and the turtle makes no discernible progress
towards the food. (See figure 2.4.)

</br></br>

A different possibility for sensing ``smell'' is to have the turtle respond
to an intensity directly, rather than to a change in intensity. Biologists
have suggested various simple mechanisms by which animals can use

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-5.png'/><br\><div class='caption'>Samples of paths generated by <span class='textsc'>vary</span><span class='textsc'>.step</span> and <span class='textsc'>vary</span><span class='textsc'>.turn</span>.</div><br\></div>

</br></br>

having the turtle turn a constant angle while going forward a distance
that depends on the distance from the point:

</br></br>

<div class='inline-editor turtle-code'>
TO VARY.STEP (SIDE, ANGLE)
   REPEAT FOREVER
      FORWARD (FACTOR * SIDE)
      LEFT ANGLE
</div><br\><br\>
Or take a constant <span class='textsc'>forward</span> step and vary the turn:

</br></br>

<div class='inline-editor turtle-code'>
TO VARY.TURN (SIDE, ANGLE)
   REPEAT FOREVER
      FORWARD SIDE
      LEFT (FACTOR * ANGLE)
</div><br\><br\>
<span class='textsc'>factor</span> here can be something like

</br></br>

<div class='inline-editor turtle-code'>
TO FACTOR
   RETURN (1 / DISTANCE.TO.CHOSEN.POINT)
</div><br\><br\>
Figure 2.5 shows some sample paths. As you can see, the procedures
seem to do different sorts of things. <span class='textsc'>vary.step</span> tends to draw spirals,
whereas <span class='textsc'>vary.turn</span> tends to draw bounded figures. Investigate these
programs and come up with some conjectures about their behavior. Can
you prove your oonqectures?

</br></br>

<h3>Modeling Sight</h3>

</br></br>

As with smell, the first step in providing turtle with simulated sight is to
A decide what information the ``eye'' should receive from the environment.

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-6.png'/><br\><div class='caption'><span class='textsc'>keep.a.bearing</span>: <span class='textsc'>angle</span> = 60</div><br\></div>

</br></br>

We could hardly begin to model the complexity of human vision. A much
simpler model ignores color, shape, and texture and registers merely the
intensity of light reaching the eye. This kind of ``sight'' is not so different
from the ``smell'' discussed above. Each sense receives some kind of
intensity information from the environment. The major difference is
that sight is directional; it depends on how the turtle is facing with
respect to the stimulus. Algorithms for locating an object by sight are
therefore different from ``smelling something out.''

</br></br>

<h4>Facing a Stimulus</h4>

</br></br>

The first model for sight assumes that any creature able to see a light is
able to turn to face that light. (See exercise 10.) Investigate what new
things the turtle can do when given the ability to <span class='textsc'>face</span> a named point.
For example, getting to the point is easy: Simply face the point and go
forward. (But how does the turtle know when to stop?) Another use for
the <span class='textsc'>face</span> command is to have the turtle move while keeping some point
at a fixed bearing. The following procedure makes the turtle walk with
a fixed bearing of <span class='textsc'>angle</span> with respect to a fixed <span class='textsc'>point</span>:

</br></br>

<div class='inline-editor turtle-code'>
TO KEEP.A.BEARING POINT ANGLE
   REPEAT FOREVER
      FACE POINT
      LEFT ANGLE
      FORWARD 1
</div><br\><br\>

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-7.png'/><br\><div class='caption'>Fields of vision for two-eye model</div><br\></div>

</br></br>

If you try this procedure (figure 2.6) you will find that it causes the
turtle to spiral about the point. Does this remind you of anything? How
about a moth getting trapped by a light? Can you think of a reason
why a moth would be trying to keep a light at a fixed bearing? Some
people believe that moths and other night-flying insects have learned to
fly along straight paths by keeping the moon at a constant bearing as
they fly. Keeping a very distant light like the moon at a fixed bearing
would indeed make the insects fly straight. When they confuse the moon
with a nearby light, the fixed-bearing mechanism causes them to spiral.

</br></br>

<h4>A Two-Eye Model</h4>

</br></br>

The next model focuses on how a creature might use vision in order to
face a point. Assume that the turtle has two eyes, each with its own
tield of vision, as shown in figure 2.7. We give the turtle the ability to
tell whether a point is within each eye's field of vision:

</br></br>

<div class='inline-editor turtle-code'>
TO RIGHT.EYE.SEES POINT
   IF BEARING (POINT) > 300 THEN RETURN "TRUE"
   IF BEARING (POINT) < 10 THEN RETURN "TRUE"
   RETURN "FALSE"

</br></br>

TO LEFT.EYE.SEES POINT
   IF BEARING (POINT) > 350 THEN RETURN "TRUE"
   IF BEARING (POINT) < 60 THEN RETURN "TRUE"
   RETURN "FALSE"
</div><br\><br\>
<br\>oindent (These procedures use a subprocedure called <span class='textsc'>bearing</span> that outputs the
angle that the turtle would need to turn left in order to face a given
point. Exercise 10 outlines how <span class='textsc'>bearing</span> can be implemented.)

</br></br>


<div class='figure'><br\><img src='images/figures/fig2-8.png'/><br\><div class='caption'>Behavior of <span class='textsc'>head</span><span class='textsc'>.for</span></div><br\></div>

</br></br>

The turtle will know that it is facing roughly in the direction of a
named point when the point lies in the field of vision on at least one
side. So, as the turtle moves, it should keep checking that it can still
see the point. Otherwise it turns until it can see the point:

</br></br>

<div class='inline-editor turtle-code'>
TO HEAD.FOR POINT
   REPEAT FOREVER
      IF EITHER
         LEFT.EYE.SEES (POINT)
         RIGHT.EYE.SEES (POINT)
      THEN FORWARD 10
      ELSE LEFT 10
</div><br\><br\>
It may seem amazing that a turtle following this procedure manages to
reach the specified point despite the fact that its way of heading for the
point is so inaccurate. (See figure 2.8.) This illustrates the effectiveness
of a feedback mechanism --- constant adjustment can often compensate
for lack of accuracy. You might try combining this mechanism with
some of the random-motion procedures of subsection 2.1.1.

</br></br>

<h4>A Two-Eye Model With Intensity</h4>

</br></br>

A more elaborate model for vision registers not only the presence of
a light source in the visual field, but also the intensity that each eye
receives from the source. This intensity depends on the strength of the
source, the distance of the source from the eye, and the angle at which
the light strikes the eye. The intensity is greatest when the light hits the
eye straight on and tapers off to zero as the light source moves toward
the edge of the visual field.

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-9.png'/><br\><div class='caption'>Path generated by <span class='textsc'>find</span><span class='textsc'>.by</span><span class='textsc'>.sight</span></div><br\></div>

</br></br>

Suppose we have procedures <span class='textsc'>intensity.left</span> and <span class='textsc'>intensity.right</span>
that output the intensity each eye receives from a light source. (We'll
worry about how to design these <span class='textsc'>intensity</span> procedures later.) There is
a simple yet effective way to incorporate such intensity information in a
feedback mechanism to make the turtle approach the light source:

</br></br>

<div class='inline-editor turtle-code'>
TO FIND.BY.SIGHT SOURCE
   REPEAT FOREVER
      FORWARD 1
      IF INTENSITY.LEFT (SOURCE) > INTENSITY.RIGHT (SOURCE)
      THEN LEFT 10
      ELSE RIGHT 10
</div><br\><br\>
The turtle walks forward while trying to keep the amount of light
received at both eyes in balance. If the turtle sees more light to its
right, it turns slightly to the right. If it sees more light to its left, it
turns slightly to the left. (See figure 2.9.)

</br></br>

Some animals may actually use this mechanism for approaching light
sources. Biologists have obtained experimental evidence for this conclusion by taking an animal and masking one of its eyes. What happens
when the animal tries to approach the light? You can simulate this experiment by modifying <span class='textsc'>intensity.left</span> to always return 0 and have
the turtle follow the <span class='textsc'>find.by.sight</span> procedure. Now the turtle will always turn right, and will therefore travel in a circle. Biologists call this
behavior ``circus movement.'' It has been observed in experiments with
numerous species of insects.
A variation of this experiment is to modify <span class='textsc'>intensity.left</span> to output
half its normal value. (This corresponds to an animal with weak vision
in one eye.) What kind of path does <span class='textsc'>find.by.sight</span> produce now? Does
the animal still reach the light? How does the path degenerate to a circus
movement as the eye becomes weaker and weaker?

</br></br>

Finally, consider what happens when there are two or more light
sources. The intensity for each eye can be found by adding together
the intensities from the individual sources:

</br></br>

<div class='inline-editor turtle-code'>
TO FIND.BY.SIGHT2 (SOURCE1, SOURCE2)
   REPEAT FOREVER
      FORWARD 1
      TOTAL.LEFT <- INTENSITY.LEFT (SOURCE1)
                       + INTENSITY.LEFT (SOURCE2) 
      TOTAL.RIGHT <- INTENSITY.RIGHT (SOURCE1)
                       + INTENSITY.RIGHT (SOURCE2)
      IF TOTAL.LEFT > TOTAL.RIGHT
      THEN LEFT 10
      ELSE RIGHT 10
</div><br\><br\>
How does the turtle behave? Does it go to the stronger light? Between
the lights? Keep records of what happens for sources with different
strengths and for different initial positions of turtle and sources. This
``two-light experiment'' is often performed with real insects.
The intensity procedures used in these projects can be designed according to a model given in the book by Fraenkel and Gunn mentioned above.
They compute the intensity of light falling on the eye as <b>(S/D^2)\cos A</b>
where <b>S</b> is the strength of the source, <b>D</b> is the distance from the source,
and <b>A</b> is the angle at which light from the source strikes the eye. (See
figure 2.10.) The turtle procedure based on this would be

</br></br>

<div class='inline-editor turtle-code'>
TO INTENSITY.LEFT SOURCE
   IF NOT LEFT.EYE.SEES (SOURCE) THEN RETURN O
   FACTOR + STRENGTH / (DIST(SOURCE) | 2)
   ANGLE + BEARING (SOURCE) - 45
   RETURN (FACTOR * COS(ANGLE) 
</div><br\><br\>
<br\>oindent <span class='textsc'>strength</span> here is a parameter you supply to indicate the intensity of
the source. Note the computation of <span class='textsc'>angle</span>, which reflects the fact that
the left eye is offset 45&deg; from the turtle's heading. <span class='textsc'>intensity.right</span> is
implemented in a similar fashion.

</br></br>

<h4>Exercises for Section \thesection</h4>

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-10.png'/><br\><div class='caption'>Intensity of light seen by eye is <b>(S / D^2) \cos A</b>.</div><br\></div>

</br></br>

<ul>
</li><li> <b>[P]</b> In the <span class='textsc'>random.move</span> procedure of 2.1.1, how does the turtle's
path change if the turning is generated by <span class='textsc'>left rand(0, 50)</span> followed
by <span class='textsc'>right rand(0, 50)</span> rather than <span class='textsc'>left rand(-50,50)</span>? How is the
distribution of numbers produced by <span class='textsc'>rand(-50, 50)</span> different from that
of <span class='textsc'>rand(0, 50)</span> - <span class='textsc'>rand(0, 50)</span>? [A]
</li><li> <b>[PD]</b> Starting with the turtle facing straight up, run the <span class='textsc'>random.move</span>
procedure until the turtle exceeds distance n from the start, that is,
crosses a circle of radius <b>n</b> centered at the starting point. At what point
did the turtle intersect the circle? Repeat this process over and over
and study the distribution of intersection points on the circle. What
is its ``average value''? How does the distribution change as <b>n</b> varies?
Answer the same sort of questions about the number of steps taken
before crossing the circle.  
</li><li> <b>[PDD]</b> If the turtle follows <span class='textsc'>randommove</span> with the turn angle evenly 
distributed between -10 and 10, will you expect it to go off to infinity,
or to travel in a large circle? Make some studies of this phenomenon.
For example, graph the turtle's distance from the origin after n steps. ls
there an average graph for many tries of this experiment? Alternatively,
if the angle is not evenly distributed, the program will cause the turtle
to tend to walk in circles. But do the circles wander off to infinity? How
fast?
</li><li> <b>[P]</b> Investigate randomized <span class='textsc'>poly</span> procedures such as

</br></br>

<div class='inline-editor turtle-code'>
TO RANDOM.POLY (SIDE, ANGLE)
   REPEAT FOREVER
      FORWARD SIDE
      LEFT (ANGLE * RAND (LOW, HIGH))
</div><br\><br\>
</li><li> <b>[P]</b> In the <span class='textsc'>find.by.smell2</span> procedure of 2.1.2, how does the time
required to reach the food vary with the angle the turtle turns? In the
randomized <span class='textsc'>find.by.smell3</span> procedure, what is the average time as a
function of the <span class='textsc'>smell.turn</span> and <span class='textsc'>rand.turn</span>? (Do some experiments and
take statistics.)
</li><li> <b>[P]</b> Implement procedures for orthokinesis and klinokinesis. Which is
more efficient? Which is more stable under adding a bit of randomness?
Does the stability depend on the kind of randomness?
</li><li> <b>[P]</b> Play around with the <span class='textsc'>vary.step</span> procedure of 2.1.2. Does the
turtle always spiral inwards or outwards? Does this depend on the initial
position or heading with respect to the fixed point? Try also taking
different values for <span class='textsc'>factor</span>, such as making it directly proportional to
the distance from the point or inversely proportional to the distance
squared.
</li><li> <b>[P]</b> What can you say about the <span class='textsc'>vary.turn</span> procedure? Does the
turtle always stay within a bounded distance from the fixed point? Try
this also with the variations on <span class='textsc'>factor</span>, as in exercise 7.
</li><li> <b>[P]</b> Try procedures like <span class='textsc'>vary.step</span> and <span class='textsc'>vary.turn</span>, only this time
where <span class='textsc'>factor</span> depends on the change in distance (as with the <span class='textsc'>smell</span>
procedure of 2.1.1). For instance, suppose <span class='textsc'>factor</span> is equal to <span class='textsc'>distance</span> <b>-</b>
<span class='textsc'>distance.last.time</span>. Consider the procedure

</br></br>

<div class='inline-editor turtle-code'>
REPEAT FOREVER
   FORWARD SIDE
   LEFT FACTOR
</div><br\><br\>
<br\>oindent Prove that this can never draw a simple closed figure. [HA]

</br></br>

</li><li> <b>[P]</b> Implement the <span class='textsc'>face</span> and <span class='textsc'>bearing</span> procedures used in the sight
programs of 2.1.3. <span class='textsc'>bearing</span> should return the amount the turtle needs to
turn left in order to face the point. Then <span class='textsc'>face</span> can be immediately implemented as <span class='textsc'>left (bearing (point))</span>. <span class='textsc'>bearing</span>, in turn, can be implemented in terms of the turtle's heading and another function, <span class='textsc'>towards</span>,
which outputs the heading of the line directed from the turtle to the
point. This can be computed using an arctangent function. [A]
</li><li> <b>[P]</b> Make a careful investigation of the two- (or more) light experiment. How does the turtle's path vary with the relative intensities of
the light?
</li><li> <b>[P]</b> Suppose the turtle lives in a square room with a light at each
corner. Instead of using a rectangular coordinate system, the turtle can
``get its bearings'' by measuring the observed angles between the lights.
Suppose the turtle starts at some point <b>p</b> and records the observed
angles. Now move the turtle to a different point. Design a simple
feedback algorithm that enables the turtle to return to <b>p</b> by moving
and watching how the angles change.
</ul>

</br></br>

\section {Turtles Interacting}

</br></br>

One natural extension of the previous section's ``turtle biology'' is to
consider multiple turtles and the interactions produced by simple algorithms. As we shall see, even simple algorithms may lead to complex
phenomena, and a study of these phenomena can be an invitation to the
theory of ``differential games.''

</br></br>

<h3>Predator and Prey</h3>

</br></br>

Consider how the <span class='textsc'>find.by.smell</span> mechanism of subsection 2.1.2 would
behave if the food were also moving, as in the case of a predator trying
to catch dinner. There are many possible variations to try. Suppose, for
example, that the hunted creature, unaware of the predator's intentions,
moves round and round in a circle and that the predator follows the
prey according to the <span class='textsc'>find.by.smell2</span> procedure of 2.1.2. One way to
implement this interaction is to write separate procedures for predator
and prey that describe how each creature generates a single forward
step:

</br></br>

<div class='inline-editor turtle-code'>
TO PREY.STEP (SPEED, TURN)
   FORWARD SPEED
   RIGHT TURN

</br></br>

TO PREDATOR.STEP (SPEED, TURN)
   FORWARD SPEED
   IF SMELL = "WEAKER" THEN RIGHT TURN
</div><br\><br\>
Now supply a monitor procedure called <span class='textsc'>execute.together</span> that executes these two procedures alternately, over and over;

</br></br>

<div class='inline-editor turtle-code'>
TO EXECUTE.TOGETHER (PREDATOR.PROCESS, PREY.PROCESS)
   REPEAT FOREVER
   ; set the turtle at the predator state and
   ; execute the predator's procedure
      EXECUTE.STEP (PREDATOR.PROCESS, PREDATOR.STATE)
      ; save the predator state for next time
      PREDATOR.STATE <- TURTLE.STATE
      ; execute the prey's procedure
      EXECUTE.STEP (PREY.PROCESS, PREY.STATE)
      ;save the prey state
      PREY.STATE <- TURTLE.STATE
</div><br\><br\>
The inputs to this procedure are to be the <span class='textsc'>step</span>s above, with their inputs.
For instance,

</br></br>

<span class='textsc'>execute.together(``prey.step(1,1)'' . ``predator.step(2,90)'')</span> 
makes the prey and predator execute simultaneously.

</br></br>

The <span class='textsc'>execute.step</span> procedure is responsible for executing the process
in the right place. It makes the turtle follow a given process starting
from a given state.

</br></br>

<div class='inline-editor turtle-code'>
TO EXECUTE.STEP (PROCESS, STATE)
   ; with the pen up move the turtle to the starting state
   PENUP
   SETTURTLE STATE
   ; put the pen down and execute the process
   PENDOWN
   EXECUTE PROCESS
</div><br\><br\>
At any point during the process, the variables <span class='textsc'>predator.state</span> and
<span class='textsc'>prey.state</span> specify the position and heading of the creatures. Set
these to their initial values before starting the <span class='textsc'>execute.together</span> procedure. (Note: Some computer languages have built-in facilities for parallel
processing, which eliminate the need for such a <span class='textsc'>execute.together</span> procedure. But since these languages are not yet widespread, we show how
to implement this in a more conventional language. Also, see appendix
A for details about the <span class='textsc'>execute</span> command.)

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-11.png'/><br\><div class='caption'>Closed-path phenomenon. Predator uses <span class='textsc'>find</span><span class='textsc'>.by</span><span class='textsc'>.smell</span> with <span class='textsc'>turn</span> = 90; prey moves in circle. Predator speed is twice prey speed</div><br\></div>

</br></br>

Figure 2.11 shows the result of the two procedures with the predator's
<span class='textsc'>turn</span> equal to 90&deg; and with predator moving twice as fast as prey. As
you can see, the <span class='textsc'>find.by.smell</span> mechanism, which works so well with
a fixed food source, does very poorly when the food is moving. The
geometry of the path, however, is interesting. Notice that, after an initial
segment, the predator's path is closed. Can you see why? Investigate this
phenomenon for different <span class='textsc'>turn</span> angles in the <span class='textsc'>predator</span><span class='textsc'>.step</span> procedure
and also for varying relative speeds of predator and prey.
Now conduct a similar investigation with some of the other animal-orientation mechanisms of section 2.1. Do they all do so poorly when
the food is moving? Or consider the use of these simple algorithms
as avoidance mechanisms. For example, set up a situation in which
A a predator uses one of the sight algorithms of 2.1.3 to chase another
creature that is using an <span class='textsc'>avoid</span><span class='textsc'>.by</span><span class='textsc'>.smell</span> procedure. (Note: To convert
<span class='textsc'>find</span><span class='textsc'>.by</span><span class='textsc'>.smell</span> to <span class='textsc'>avoid</span><span class='textsc'>.by</span><span class='textsc'>.smell</span>, simply modify the procedure so
that the creature will turn whenever the smell is getting stronger.) Any
such combination of the behaviors illustrated in section 2.1 can serve as
the basis for a project.

</br></br>

<h3>Following and Chasing</h3>

</br></br>

In a slightly different framework, we can consider ``chase and evade''
strategies for two turtles. The simplest strategy is for the chasing turtle
to run directly towards the evader, and for the evader to run directly
away from the chaser. More interesting is the situation when both
creatures are constrained to stay within a square box. There are lots
of possibilities for projects here. Begin by programing simple strategies
using the <span class='textsc'>execute</span><span class='textsc'>.together</span> framework of 2.2.1. Now make the chaser
a bit smarter so that he can generally catch the evader --- for example, by
driving him into a corner. Now make the evader smarter, so that he can
avoid the trap. Now make the chaser smarter still, and so on. When you
get some really clever programs, modify the setup so that you control
one of the creatures by hand and the computer controls the other. Are
your clever procedures more skilled at the chase-evade game than you
are? As a test of skill and strategy, try varying the relative speeds of
chaser and evader. If they both move at the same speed, can the evader
always avoid being caught?

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-12.png'/><br\><div class='caption'>Spiral paths generated by four ``bugs'' starting at vertices of square.</div><br\></div>

</br></br>

It's also interesting to examine the paths generated by interacting
creatures. One example is the widely known mathematical problem
of the four ``bugs'' who start at the vertices of a square and move at
the same speed, each one following the bug to its right. Set this up
using the <span class='textsc'>execute.together</span> procedure (suitably modified to handle
four creatures) and the <span class='textsc'>follow</span> mechanism:

</br></br>

<div class='inline-editor turtle-code'>
TO FOLLOW.THAT.BUG
   FACE THAT.BUG
   FORWARD 1
</div><br\><br\>
Now make bug 1 follow bug 2, bug 2 follow bug 3, bug 3 follow bug 4,
and bug 4 follow bug 1:

</br></br>

<div class='inline-editor turtle-code'>
EXECUTE.TOGETHER "FOLLOW BUG2" "FOLLOW BUG3" 
            "FOLLOW BUG4" "FOLLOW BUG1"
</div><br\><br\>
Figure 2.12 shows the paths generated by the four bugs. As you can
see, they all meet at a single point. One notable property of the ``four
bugs'' situation is that the length of the path traveled by each bug is
equal to the side of the original square. See if you can prove that.
Modify <span class='textsc'>follow</span> to keep track of how far each bug moves, and compare
the computed value with the theoretical value.
Here is another interesting chase phenomenon with two creatures, the
chaser and the evader. The chaser heads directly towards the evader:

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-13.png'/><br\><div class='caption'>Stable configuration generated by interaction of <span class='textsc'>chase</span> and <span class='textsc'>evade</span></div><br\></div>

</br></br>

But the evader, instead of running directly away, heads at a constant 90&deg; bearing from the chaser:

</br></br>


<div class='inline-editor turtle-code'>
TO CHASE
   FACE EVADER
   FORWARD CHASE.SPEED

</br></br>

TO EVADE
   FACE CHASER
   RIGHT 90
   FORWARD EVADE.SPEED
</div><br\><br\>
When the two creatures move at the same speed, the chaser always
catches up, as you might expect. But when the evader's speed is increased, both chaser and evader begin to spiral in towards each other.
The spirals eventually degenerate into closed circles (see figure 2.13),
which are stable configurations for the chaser-evader situation. Even
though the algorithm seems ``directed,'' the creatures end up retracing
their paths over and over.

</br></br>

A multiple-turtle setup can also be used to investigate some of the
phenomena in the area of ``differential games,'' which has to do with
finding optimal strategies in situations similar to ``chase and evade.'' An
example is provided by a ``target defending'' game consisting of two
players and a target. The attacker's object is to get as close to the
target as possible; the defender's object is to intercept the first player as
far from the target as possible. Assume that both players have the same
speed and that the defender starts out closer to the target. It turns out
that this situation has a simple optimal strategy, which is the same for
both players: Each time you move, head for the point that is closest to
the target and that lies on the perpendicular bisector of the line joining
your position to your opponent's (see exercise 11). Of course, if both
players are computerized and move with optimal strategy (figure 2.14a)
the resulting paths aren't very interesting-a better idea might be to
arrange things so that you control one player and the computer controls

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-14.png'/><br\><div class='caption'>Targetrdefending game. (a) Both players following optimal strategy. (b) Attacker manually controlled; defender computer-controlled following optimal strategy. the other (see figure 2.14b). Try playing against the computer both on attack and on defense. How well can you do in comparison with the theoretical optimum?</div><br\></div>

</br></br>

Books on differential games suggest many more situations that can be
made into games between a person and a computer. In general these
are very difficult to analyze for optimal strategies; the target-defending
game explained above is unusually straightforward. There is a Way to
simplify the situation: Restrict all creatures to move on a square grid;
that is, only allow turns that are multiples of 900 and distances that
are multiples of some fixed length, or, alternatively, specify that at each
step a creature can move only to an adjacent square in the grid.

</br></br>

<h4>Exercises for Section \thesection</h4>
<ul>
</li><li> <b>[PD]</b> Can you verify, as asserted in subsection 2.2.1, that a predator
using <span class='textsc'>find</span><span class='textsc'>.by</span><span class='textsc'>.smell</span> to chase a creature moving in a circle will eventually travel in a closed path? How does this depend on the angle turned?
On the relative speeds of predator and prey? On the initial positions?
</li><li> <b>[P]</b> Set up a predator using <span class='textsc'>find</span><span class='textsc'>.by</span><span class='textsc'>.sight</span> (subsection 2.1.3) to chase
a prey using <span class='textsc'>avoid</span><span class='textsc'>.by</span><span class='textsc'>.smell</span>. Does he catch him if the two creatures
have equal speeds? Does this depend on the angles that the creatures
turn? What happens as the speeds vary?
</li><li> <b>[P]</b> Implement a general <span class='textsc'>execute</span><span class='textsc'>.together</span> facility that can handle,
say, two, three, or four creatures simultaneously. Notice that the procedure given in the text draws only the creatures' paths and not the
creatures themselves. Maybe you'd like to improve upon this.
</li><li> <b>[P]</b> Implement a general ``chase-evade'' system that allows you to
specify procedures to guide both chaser and evader, or to control either
creature by hand.
</li><li> <b>[PD]</b> Set up the ``four bugs'' simulation. Have the system calculate
the distance traveled by each bug. Does your result agree with the claim
in the text that this distance is equal to the side of the original square?
Can you prove this claim?
</li><li> <b>[PDD]</b> Suppose that, instead of four bugs, we have three bugs starting
in the vertices of an equilateral triangle. How far does each bug travel
now? Generalize this to consider <b>n</b> bugs starting at the vertices of a
regular n-gon. Given a formula for the distance traveled by each bug in
terms of the side of the <b>n</b>-gon, and check your formula by doing some
computer simulations. [A]
</li><li> <b>[P]</b> Make up and investigate some variations on the ``four bugs''
problem. For example: Suppose the bugs start on a figure that is not so
symmetric. (How about a rectangle?) Suppose one bug goes faster than
the other. Suppose instead of each bug following the one to its left, they
follow each other in some other order.
</li><li> <b>[P] </b>What kinds of initial conditions, speeds, and following mechanisms
will ensure that all bugs eventually meet at one point?
</li><li> <b>[PD]</b> Investigate the modified chase-evade simulation that yields the
stable circles of 2.2.2, assuming that the evader movers faster than the
chaser. Why does the process stabilize? When it does stabilize, what is
the approximate distance of chaser from evader? How does this distance
depend on the speeds of chaser and evader? Give a formula for the
distance.  
</li><li> <b>[P]</b> Find other chase-evade pairs that produce stable configurations.
</li><li> In the ``target-defending'' game, give a formula for the coordinates
of the point to head for when following the optimal strategy, and use
this to implement the strategy on the computer.  
</li><li> <b>[D]</b> Analyze the target-defending game in the case where the two
players have different speeds. What is the optimal strategy for each
player?  
</li><li> <b>[P]</b> Carry out a detailed study of chase-evade for creatures moving on
a grid. Invent strategies and counterstrategies. Can the evader always
avoid getting caught if the two creatures move at equal speeds? If they
move at different speeds?
</ul>

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-15.png'/><br\><div class='caption'>Equiangular spiral formed by <span class='textsc'>eqspi</span> with <span class='textsc'>angle</span> = 20, <span class='textsc'>scale</span> = 1.1.</div><br\></div>

</br></br>

<h3>Growth</h3>

</br></br>

Besides simulating animal behavior, another good source of turtle biology projects is modeling patterns of growth. In this section we'll examine
two models: the equiangular spiral, which emerges in the shapes of shells
and horns; and models for branching in the growth of trees.

</br></br>

<h3>Equiangular Spirals</h3>

</br></br>

We've already seen in section 1.1 how to transform the <span class='textsc'>poly</span> program

</br></br>

<div class='inline-editor turtle-code'>
TO POLY SIDE ANGLE
   FORWARD SIDE
   LEFT ANGLE
   POLY SIDE ANGLE
</div><br\><br\>
<br\>oindent into a program for drawing spirals:

</br></br>

<div class='inline-editor turtle-code'>
TO POLYSPI (SIDE, ANGLE, INCREMENT)
   FORWARD SIDE
   LEFT ANGLE
   POLYSPI (SIDE + INCREMENT, ANGL, INCREMENT)
</div><br\><br\>
Here is another way to make a spiral: Rather than increasing the side by
adding a fixed increment, multiply the side by a constant scale factor:

</br></br>

<div class='inline-editor turtle-code'>
TO EQSPI (SIDE, ANGLE, SCALE)
   FORWARD SIDE
   LEFT ANGLE
   EQSPI (SIDE * SCALE, ANGLE, SCALE)
</div><br\><br\>
This spiral (shown in figure 2.15) is called aniequiangular spiral (also
sometimes called a logarithmic spiral). Connecting the vertices of the
spiral to a central point shows that the spiral can be generated by 
successions of similar triangles, each one built upon the previous. This
principle of constructing a pattern through the accumulation of similar
shapes lies behind the spiral's appearance in many biological forms,
especially in shells and horns. The nautilus shell, shown in figure 2.16,
gives a clear illustration. The entire shell is constructed as a sequence of
``chambers,'' each chamber built on the previous chamber and similar to
it. (The chambers are similar because the creature doesn't change shape
as it moves from chamber to chamber; it just grows.) The result is that
corresponding points of successive chambers lie on equiangular spirals.
We'll exhibit a turtle program that mimics this kind of equiangular
growth, using quadrilateral chambers. Each quadrilateral, as indicated
in figure 2.17a, will be specified to the program by three sides and two
angles. If the turtle starts in the lower left corner, the base and sides of
the quadrilateral can be drawn by

</br></br>

<div class='inline-editor turtle-code'>
TO CHAMBER (BASE, S1, S2, A1, A2)
; save the position of the lower left vertex
   LOWER.LEFT + TURTLE.STATE
   ; draw the base and right side and save the
   ; position of the upper right vertex (see below)
   FORWARD BASE
   LEFT A2
   FORWARD S2
   UPPER.RIGHT + TURTLE.STATE
   ; return to the lower left vertex and draw the left side
   PENUP
   SETTURTLE LOWER.LEFT
   PENDOWN
   LEFT A1
   FORWARD S1
</div><br\><br\>

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-16.png'/><br\><div class='caption'>The shell of the chambered nautilus clearly exhibits the spiral-growth phenomenon.</div><br\></div>

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-17.png'/><br\><div class='caption'>The <span class='textsc'>spiral</span><span class='textsc'>.grow</span> procedure.</div><br\></div>

</br></br>

At the end of this procedure the turtle is sitting at the upper left corner
1 of the chamber, which is the same as the lower left vertex of the next
chamber. To prepare for drawing the next chamber we must point the
turtle along the base of the next chamber, that is, point the turtle
towards the upper right vertex of the chamber just drawn. We can do
this using the <span class='textsc'>face</span> procedure of section 2.1, whose implementation is
outlined in exercise 10 of that section. Having done this, we are ready
to draw the next chamber. The angles of the next chamber are the same
as before. The base of the next chamber is the top edge of the previous
chamber, and the size of the next chamber is determined by the ratio
of the old base to the new base. All together, the program for spiral
growth is

</br></br>

<div class='inline-editor turtle-code'>
TO SPIRALGROWTH (BASE, S1, S2, A1, A2)
; draw one chamber and face along the edge of the new chamber
   CHAMBER (BASE, S1, S2, A1, A2)
   FACE UPPER.RIGHT
   ; the length of the next chamber's base is the distance
   ; from the current location to the upper right corner of
   ; the chamber just drawn
   NEXT.BASE <- DISTANCE (UPPER.RIGHT)
   ; compute the ratio of the sides of the new chamber to the
   ; sides of the previous chamber
   R <- NEXT.BASE/BASE
   ; now repeat the process, using as inputs
   ; the sides and angles of the new chamber
   SPIRAL.GROWTH (NEXT.BASE, S1 * R, S2 * R, A1, A2)
</div><br\><br\>
<div class='figure'><br\><img src='images/figures/fig2-18.png'/><br\><div class='caption'>Demonstration that curves of equiangular spiral are everywhere the same. Chunk B is the same as chunk A blown up by a factor of 3</div><br\></div>

</br></br>

The recursive structure of the program implies that each chamber generates
a new chamber. There is no stop rule and the program goes on forever.
Whether the chambers increase or decrease in size depends on the initial
sides and angles. A sample ``shell'' drawn by this program is illustrated in
figure 2.17.

</br></br>

<h4>Growing Turtle Geometry</h4>

</br></br>

Equiangular spirals underlie uniform growth such as the <span class='textsc'>spiral.growth</span>
shown above in the same way that a circle underlies any turtle program
that does the same thing over and over. The reason for both of these
facts becomes clearer when one describes the equiangular spiral and the
circle as curves that are ``everywhere the same.'' In the case of a circle,
that means any chunk of the circle can match any other chunk of the
circle if you are allowed to move and turn the iirst chunk. In the case
of the spiral, one must allow changing scale (making a bigger or smaller
model of a piece), in addition to moving and turning, to show that one
piece matches another. See figure 2.18.

</br></br>

One can augment turtle geometry to make scale changes by introducing a new ``scaled forward'' command and a <span class='textsc'>grow</span> command to change
scale:

</br></br>

<div class='inline-editor turtle-code'>
TO S.FORWARD DISTANCE
   FORWARD (SCALE * DISTANCE)
 
TO GROW FACTOR
   SCALE <- (SCALE * FACTOR)
</div><br\><br\>
<br\>oindent <span class='textsc'>scale</span> should now be considered a part of the turtle state --- it's a kind
of ``size'' of the turtle that determines the size of the next step just as
heading determines the direction of the next step. (<span class='textsc'>scale</span> should start
equal to 1.)
The analog to <span class='textsc'>poly</span> is precisely <span class='textsc'>eqspi</span>:

</br></br>

<div class='inline-editor turtle-code'>
TO EQSPI (SIZE, ANGLE, FACTOR)
   REPEAT FOREVER
      S.FORWARD SIZE
      RIGHT ANGLE
      GROW FACTOR
</div><br\><br\>
You should be able to show that any looping program which involves
only <span class='textsc'>s.forward</span>, <span class='textsc'>right</span>, and <span class='textsc'>grow</span> will have an <span class='textsc'>eqspi</span> skeleton, just as
<span class='textsc'>poly</span> is the skeleton for looping programs without <span class='textsc'>grow</span> (see exercise
10). Incidentally, a circle is an ``equiangular spiral with no growth'' in
the same way a line is ``a circle with no turning.'' Finally, notice that
the chambered growth shown in figure 2.17 ensures that the growth is
uniform by having the bottom edge of one chamber be related to the
bottom edge of the preceding precisely as the ratio of top to bottom
edge of the previous chamber. Because the chambers are constructed to
be similar, that ratio never changes.

</br></br>

<h3>Branching Processes: A Lesson in Recursion</h3>

</br></br>

A different kind of growth pattern we can mimic with turtle graphics
is the branching process that characterizes the growth of trees. We'll
start by drawing a very regular binary tree, that is, a tree in which
each branch sprouts two more branches. We'll make the length of each
sprouted branch half that of the parent. Conceptually, each branch
consists of a straight line, with two more branches at its end. Notice the
fundamentally recursive nature of this description --- a branch consists of
something (the stem) plus sub-branches (things with the same structure
as the branch). In a program, that structure will appear in the standard
recursive way, as a procedure calling itself as a subprocedure.

</br></br>

If we assume that the branching angle is 45&deg;, then a first try at a
program might be

</br></br>

<div class='inline-editor turtle-code'>
TO BRANCH LENGTH
; draw the main branch
   FORWARD LENGTH
   ; turn to point along the left
   ; secondary branch and draw it
   LEFT 45
   BRANCH LENGTH / 2
   ; now draw the right secondary branch
   RIGHT 90
   BRANCH LENGTH / 2
</div><br\><br\>
But if we try this procedure, we'll find that it has a bug: The turtle starts
drawing a branch, then its left secondary branch, then that branch's
left secondary branch, and so on and so on. No right branches ever get
drawn. At some point, we must make the process stop generating new
left branches and come back to do the right branches. We'll accomplish
this by giving the <span class='textsc'>branch</span> process a second input called <span class='textsc'>level</span>, which
counts down as the program moves from each branch to its secondary.
We can think of <span class='textsc'>level</span> as labeling the type (complexity) of the branch:
A level 1 branch is a tip (a branch with no secondaries); a level 2 branch
will sprout two level 1 secondaries; a level 3 branch will sprout level 2
secondaries, and so on. The program should stop generating secondary
branches whenever the level reaches 0:

</br></br>

<div class='inline-editor turtle-code'>
TO BRANCH (LENGTH, LEVEL)
   IF LEVEL = 0 THEN RETURN
   FORWARD LENGTH
   LEFT 45
   BRANCH (LENGTH/2, LEVEL - 1)
   RIGHT 90
   BRANCH (LENGTH/2. LEVEL · 1)
</div><br\><br\>
<div class='figure'><br\><img src='images/figures/fig2-19.png'/><br\><div class='caption'>The <span class='textsc'>branch</span> procedure. (a) Version with state bug, <span class='textsc'>level</span> = 3. (b) Debugged version, <span class='textsc'>level</span> = 3. (c) Debugged version, <span class='textsc'>level</span> = 6.</div><br\></div>

</br></br>

Unfortunately, as shown in figure 2.19a, there is still a bug in the program. This bug, which is tricky to find, comes up often in such recursive descriptions: We must ensure that after drawing the left secondary
branch the turtle returns to the base of that branch, or else the <span class='textsc'>right</span> 90
instruction will not align the turtle correctly for drawing the right secondary branch. Ir1 other words, we must ensure that the process that draws
the left secondary branch restores the state of the turtle to what the
state was before the process began. The technical term for a process
that leaves the turtle in the same state in which it found it is state transparent.

</br></br>

<span class='textsc'>branch</span> will work only if its sub-branches are state-transparent. But
since the sub-branches as programs are just copies of <span class='textsc'>branch</span> itself,
<span class='textsc'>branch</span> must be made state-transparent. (In a recursive society all you
must do to make sure your offspring have some property is have it
yourself.) Here is the debugged program:

</br></br>

<div class='inline-editor turtle-code'>
TO BRANCH (LENGTH, LEVEL)
   IF LEVEL = 0 THEN RETURN
   FORWARD LENGTH
   LEFT 45
   BRANCH (LENGTH/ 2, LEVEL - 1)
   RIGHT 90
   BRANCH (LENGTH/2, LEVEL - 1)
   ; turn and back up to make the
   ; procedure state-transparent
   LEFT 45
   BACK LENGTH
</div><br\><br\>
Using this simple binary tree as a model, we can go on to construct
figures that look more like real trees. For example, we might add inputs
to the program to allow some other variation of the size of the secondary
branches besides ``divide by 2.'' Another possibility is to make the length
of stem depend not on the level, but on whether the stem belongs to a
left or a right sub-branch.

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-20.png'/><br\><div class='caption'><span class='textsc'>lbranch</span> and <span class='textsc'>rbranch</span> have <span class='textsc'>node</span> in common</div><br\></div>

</br></br>

The cleanest way to implement this idea is to have separate left and
right procedures that produce stems of different lengths. As the dashed
lines in figure 2.20 indicate, each of these must prepare for the next-level
branch. Though the preparation is not hard, it is more than half the
procedure, and both left and right branch procedures must do it. So
it makes sense to make it a subprocedure called <span class='textsc'>node</span>. We can also
make <span class='textsc'>node</span> responsible for the stop rule, which is common to the two
procedures.

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-21.png'/><br\><div class='caption'>Branching figures drawn by <span class='textsc'>lbranch</span></div><br\></div>

</br></br>


<div class='inline-editor turtle-code'>
TO LBRANCH (LENGTH, ANGLE, LEVEL)
; draw a long stem
   FORWARD (2 * LENGTH)
   ; do next level
   NODE (LENGTH, ANGLE, LEVEL)
   ; make LBRANCH state-transparent
   BACK (2 * LENGTH)
   TO RBRANCH (LENGTH, ANGLE, LEVEL)
   ; draw a short stem
   FORWARD LENGTH
   ; do next level
   NODE (LENGTH, ANGLE, LEVEL)
   ; make RBRANCH state-transparent
   BACK LENGTH

</br></br>

TO NODE (LENGTH, ANGLE, LEVEL)
   IF LEVEL = 0 THEN RETURN
   ; point along left branch and draw it
   LEFT ANGLE
   LBRANCH (LENGTH, ANGLE, LEVEL - 1)
   ; draw right branch
   RIGHT (2 * ANGLE)
   RBRANCH (LENGTH, ANGLE, LEVEL - 1)
   ; make NODE state-transparent
   LEFT ANGLE
</div><br\><br\>
You can start the process with either <span class='textsc'>lbranch</span> or <span class='textsc'>rbranch</span>. Figure 2.21
shows some of these trees. Notice that at first sight the growth pattern
looks random, even though it is actually very regular.
More information on the spiral shapes of shells, horns, claws, and teeth
can be found in On Growth and Form by D'Arcy Thompson (abridged
edition; Cambridge University Press, 1961). The branch procedure is
adapted from a model discussed in Patterns in Nature, by Peter S.
Stevens (Boston: Atlantic Monthly Press, 1974). Both of these books
are well worth having a look at if you are interested in mathematical
models in biology.

</br></br>

<h4>Exercises for Section \thesection</h4>

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-22.png'/><br\><div class='caption'>Examples of animal horns that can be modeled by <span class='textsc'>spiral.growth</span></div><br\></div>

</br></br>

<ul>
</li><li> <b>[P]</b> Figure 2.22 shows some animal horns. Can you find inputs to the
<span class='textsc'>spiral.growth</span> program that produce horns shaped like these?
</li><li> <b>[P]</b> Invent variants of the <span class='textsc'>spiral.growth</span> procedure in which the
chambers are not quadrilaterals.
</li><li> <b>[P]</b> Efficiency experts may object that our <span class='textsc'>spiral</span><span class='textsc'>.growth</span> procedure
is inefficient in that the ratio of one chamber to the next should be
computed only once, rather than each time a new chamber is drawn.
But our version is easy to modify so that this ratio (and hence the shape
of the chambers) can be varied from one chamber to the next. We might
let the left and right sides grow more slowly (with a different ratio) than
the tops and bottoms, and so get a figure which becomes stubbier as it
grows. Experiment with possibilities like these. What kinds of shapes
arise if the change in growth is periodic (seasonal)? If the rate of growth
is random?
</li><li> What is the total length of all the lines drawn by the <span class='textsc'>branch</span> procedure
for a given length and level?  
</li><li> <b>[P]</b> Modify <span class='textsc'>node</span> so that the choice of whether the left or the right
sub-branch is to be the long one is made randomly at each level.
</li><li> Make a branching model in which each left sub-branch is twice as
long as each right sub-branch and sprouts two left-right branches. What
is the total length of all the branches drawn for a given length and level?
[HA]
</li><li> <b>[P]</b> Create some variations that introduce randomness into the model
given in the previous exercise. For instance, the left branch may sprout
either one or two branches at each level.
</li><li> <b>[D]</b> Does <span class='textsc'>eqspi (2, 2, 2), eqspi (1,1,1), eqspi (.5, .5, .5)</span>,   approach
a limiting spiral the way <span class='textsc'>poly (n, n)</span> does, as <b>n</b> goes to O? Explain why
or why not. How about <span class='textsc'>eqspi</span> <b>(n, n, n + 1)</b>? How about <span class='textsc'>eqspi</span> <b>(n, n, k^{n})</b>,
<em>k</em> constant? [A]
</li><li> What parameters describe equiangular spirals the way radius or
curvature describes a circle? Relate these to the inputs of <span class='textsc'>eqspi</span>.  
</li><li> <b>[D]</b> Prove the assertion that any looping program which uses only
<span class='textsc'>s</span><span class='textsc'>.forward</span>, <span class='textsc'>right</span>, and <span class='textsc'>grow</span> has an <span class='textsc'>eqspi</span> skeleton, paralleling the
results of section 1.3. What are the angle and the growth factor for
the steps of the skeleton?  

</br></br>

</ul>

</br></br>

<h3>Recursive Designs</h3>

</br></br>

The branching models of section 2.3 could be described as recursive
designs, because these figures contain subparts which are in some sense
equivalent to the entire figure (for example, a branch is made up of
branches). We've already run into two important considerations for
writing turtle procedures to generate such designs: We need to include
some kind of stop rule so that the process eventually stops generating
more and more subiigures, and we need to keep track of the state of the
turtle in designing the interface between part and subpart. ln particular,
it helps to make each part state-transparent.

</br></br>

<h3>Nested Triangles</h3>

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-23.png'/><br\><div class='caption'>Figure drawn by <span class='textsc'>nested</span><span class='textsc'>.triangle</span></div><br\></div>

</br></br>

The nested triangle design shown in figure 2.23 illustrates these principles. The central observation is that the figure consists of a triangle
plus a smaller copy of itself at each corner, just as the trees of the
last section were forks plus smaller copies of themselves on each prong.
Thus, we imagine the turtle drawing our figure as follows: At each of
the vertices of the largest triangle, pause and construct a smaller figure
of half the size, in the corner. The smaller triangles should follow the
I same rules, drawing a still smaller triangle at each of their corners, and
so on, and so on. Finally, we'll stop generating subtriangles when the
sides get very small. All together, the procedure is

</br></br>

<div class='inline-editor turtle-code'>
TO NESTED.TRIANGLE SIZE
   IF SIZE < 10 THEN RETURN
   REPEAT 3
      NESTED.TRIANGLE SIZE / 2
      FORWARD SIZE
      RIGHT 120
</div><br\><br\>
Notice that each <span class='textsc'>nested</span><span class='textsc'>.triangle(size)</span> will be state-transparent as
long as each <span class='textsc'>nested</span><span class='textsc'>.triangle</span><span class='textsc'>(size/2)</span> drawn in its corners satisfies
that property. In turn, that state transparency depends on the state
transparency of smaller and smaller <span class='textsc'>nested</span><span class='textsc'>.triangle</span>s until, when <span class='textsc'>size</span>
is less than 10, the program stops, ensuring state transparency all the
way back up the line. A simple variation on this program draws smaller
figures outward from the corners:

</br></br>

<div class='inline-editor turtle-code'>
TO CORNER.TRI SIZE
   IF SIZE < 10 THEN RETURN
   REPEAT 3
      FORWARD SIZE
      CORNER.TRI SIZE/2
      RIGHT 120
</div><br\><br\>
Yet another way to interface a triangle to a recursive call to itself is to
stop halfway through a side and put the recursive call there:

</br></br>

<div class='inline-editor turtle-code'>
TO OUTWARD.TRI SIZE
   IF SIZE < 10 THEN RETURN
   REPEAT 3
      FORWARD SIZE / 2
      INSERT SIZE
      FORWARD SIZE / 2
      RIGHT 120

</br></br>

TO INSERT SIZE
   LEFT 120
   OUTWARD.TRI SIZE/2
   ; ensure state transparency of INSERT
   RIGHT 120
</div><br\><br\>
<div class='figure'><br\><img src='images/figures/fig2-24.png'/><br\><div class='caption'>Shapes drawn by <span class='textsc'>cornerpoly</span></div><br\></div>

</br></br>

<div class='inline-editor turtle-code'>
TO NESTEDTRIANGLE (SIZE, LEVEL)
   IF LEVEL = 0 THEN RETURN
   REPEAT 3
      NESTEDTRIANGLE (SIZE/2, LEVEL - 1)
      FORWARD SIZE
      RIGHT 120
</div><br\><br\>
These triangle procedures can be generalized to arbitrary <span class='textsc'>poly</span> figures.
The only tricky part is to make sure we know how many sides to draw,
say, as a function of the <span class='textsc'>poly</span>'s angle. As we saw in chapter 1, this
can be done by accumulating total turning and stopping when the total
turning is a multiple of 360&deg;:

</br></br>

<div class='inline-editor turtle-code'>
TO CORNERPOLY (SIZE, ANGLE, TOTALTURN)
   IF SIZE < 10 THEN RETURN
   REPEAT
      CORNERPOLYSTEP (SIZE, ANGLE)
      TOTALTURN <- TOTALTURN + ANGLE
      UNTIL REMAINDER (TOTALTURN, 360) = 0

</br></br>

TO CORNERPOLYSTEP (SIZE, ANGLE)
   FORWARD SIZE
   CORNERPOLY (SIZE/2, - ANGLE, O)
   ; using - ANGLE “symmetrizes” the figure
   RIGHT ANGLE
</div><br\><br\>
The <span class='textsc'>cornerpoly</span> procedure is invoked with the third input, <span class='textsc'>totalturn</span>,
equal to zero. Figure 2.24 shows some samples drawn by this program.
Although we've been using the side length as a stop rule for these
designs, you might prefer to stop at a particular level of recursion. For
example,

</br></br>

<h3>Snowflakes and Other Curves</h3>

</br></br>

In some instances the effect of state transparency can be achieved although there is not true state transparency. In such cases, each procedure knows the state change of its subprocedures and hence knows
what to do to compensate (if necessary). If the state change of the subprocedure is simple there are few disadvantages to this method, and if
the state change is exactly what the main procedure needs to prepare
for a next step this method can be advantageous.
This strategy is illustrated by a program to draw the snowflake curve
shown in figure 2.25. Think of this curve as a triangle in which each side
is made up of four subsides, each subside is made up of four sub-subsides,
<b>p</b> etc. Rather than making the procedure state-transparent, we'll design
each side to move the turtle forward a certain distance without changing
the heading:

</br></br>

<div class='inline-editor turtle-code'>
TO SNOWFLAKE (SIZE, LEVEL)
   REPEAT 3
   SIDE (SIZE, LEVEL)
   RIGHT 120
   TO SIDE (SIZE, LEVEL)
   IF LEVEL = 0 THEN
      FORWARD SIZE
      RETURN
   SIDE (SIZE/3, LEVEL - 1)
   LEFT 60
   SIDE (SIZE/3, LEVEL - 1)
   RIGHT 120
   SIDE (SIZE/3, LEVEL - 1)
   LEFT G0
   SIDE (SIZE/3, LEVEL - 1)
</div><br\><br\>
Until now the <span class='textsc'>level</span> = 0 process has been trivial, and has been statetransparent by virtue of doing nothing at all. Here the <span class='textsc'>level</span> = 0 action
is crucial so that the <span class='textsc'>level</span> = 1 process gets the state change expected,
<span class='textsc'>forward(size)</span>. In fact, in the snowilake procedure no <span class='textsc'>forward</span> commands will be issued except when <span class='textsc'>level</span> = 0.

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-25.png'/><br\><div class='caption'>The snowflake curve. (a) Recursive decomposition of a ``side.'' (b) Snowflake, <span class='textsc'>level</span> = 2. (c) Snowflake, <span class='textsc'>level</span> = 4</div><br\></div>

</br></br>


Another related curve is the ``C curve'' shown in figure 2.26a. A level
0 C curve is just a line; a level <b>n</b> C curve consists of two level <b>n - 1</b> C
curves at right angles to each other, followed by a 90&deg; turn to restore
the heading:

</br></br>

<div class='inline-editor turtle-code'>
TO C (SIZE, LEVEL)
   IF LEVEL = 0 THEN
      FORWARD SIZE
      RETURN
   C (SIZE, LEVEL - 1)
   RIGHT 90
   C (SIZE, LEVEL - 1)
   LEFT 90
</div><br\><br\>
<div class='figure'><br\><img src='images/figures/fig2-26.png'/><br\><div class='caption'>(a) C curve, <span class='textsc'>level</span> = 10. (b) Dragon curve, <span class='textsc'>level</span> = 11</div><br\></div>

</br></br>

The ``dragon curve'' shown in figure 2.26b is similar to the C curve;
however, there is only one 90&deg; turn, and its direction changes from level
to level. We can think of it as generated by a pair of procedures <span class='textsc'>ldragon</span>
and <span class='textsc'>rdragon</span> specified as follows: A level <b>n</b> <span class='textsc'>ldragon</span> is made up of a level
<b>n - 1</b> <span class='textsc'>ldragon</span> and a level <b>n - 1</b> <span class='textsc'>rdragon</span> with a left turn in between; a
level <b>n</b> <span class='textsc'>rdragon</span> is made up of a level <b>n - 1</b> <span class='textsc'>ldragon</span> and a level <b>n - 1</b>
<span class='textsc'>rdragon</span> with a right turn in between; a level 0 dragon is a line:

</br></br>

<div class='inline-editor turtle-code'>
TO LDRAGON (SIZE, LEVEL)
   IF LEVEL = 0 THEN
      FORWARD SIZE
      RETURN
   LDRAGON (SIZE, LEVEL - 1)
   LEFT 90
   RDRAG0N (SIZE, LEVEL - 1)
   TO RDRAGON (SIZE, LEVEL)
   IF LEVEL = 0 THEN
      FORWARD SIZE
      RETURN
   LDRAGON (SIZE, LEVEL - 1)
   RIGHT 90
   RDRAGON (SIZE, LEVEL - 1) 
</div><br\><br\>
<h3>Space-Filling Design</h3>

</br></br>

Suppose we write a program that draws something inside a square. For
the moment, we won't care what the program does, but we will insist
that the initial and final states of the turtle are related to the square
as shown in figure 2.27a. Consider a new square that consists of nine
smaller squares. We can use our simple program in each smaller square
to produce a more complicated program winding through the new square
(figure 2.27b). All we need is appropriate interfacing between subsquares.
This more complicated program relates to the new square in exactly
the same way that the simple program related to the first square, so we
can continue this process. In the end we will have a square, consisting of
nine smaller squares, each of which consists of still smaller squares, and
I so on. The process is recursive, and can be implemented in the usual
way (by writing the higher-level procedure in terms of the lower-level
one). The interfaces between the various subfigures are shown in figure
2.27b. For a level 0 process, we can use the simplest possible way of
entering and leaving a square, as assumed --- <span class='textsc'>forward(size)</span>. This gives
the following procedure:

</br></br>

<div class='inline-editor turtle-code'>
TO FILL (SIZE, LEVEL)
   IF LEVEL = 0 THEN
      FORWARD SIZE
      RETURN
      ; side of small square is 1/3 side of large square
   FILL (SIZE / 3, LEVEL - 1)
   ; interface to next subfigure is LEFT 90
   LEFT 90
   FILL (SIZE / 3, LEVEL - 1)
   ; next three subfigures have RIGHT 90 as interface
   REPEAT 3
      RIGHT 90
      FILL (SIZE / 3, LEVEL - 1)
      ; next three have LEFT 90 as interface
   REPEAT 3
      LEFT 90
      FILL (SIZE / 3, LEVEL - 1)
      ; final subfigure has RIGHT 90 interface
   RIGHT 90
   FILL (SIZE / 3, LEVEL - 1)
</div><br\><br\>
<div class='figure'><br\><img src='images/figures/fig2-27.png'/><br\><div class='caption'>The <span class='textsc'>fill</span> procedure. (a) Initial and final states for traversing a square. (b) Traversing the square, decomposed into traversing nine subsquares plus left-right interfacing. (c-e) The pattern drawn by <span class='textsc'>fill</span> at <span class='textsc'>level</span> = 1, 2, and 4.</div><br\></div>

</br></br>

This <span class='textsc'>fill</span> procedure is an example of a space-filling design. lf we
make <span class='textsc'>level</span> greater and greater, then the <span class='textsc'>fill</span> curve winds through the
square in finer and finer subdivisions. For <span class='textsc'>level</span> very large, we could
imagine <span class='textsc'>fill</span> as passing through every point of the square. <span class='textsc'>fill</span>, as
written, draws a curve that intersects itself; however, it is possible to
separate the nine subsquares with small interfaces to avoid intersection.
(See exercise 5.) If done properly, this will not affect the space-filling
property of the design.

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-28.png'/><br\><div class='caption'>The Hilbert curve. (a) <span class='textsc'>level</span>=2 (b) <span class='textsc'>level</span>=3 (c) <span class='textsc'>level</span>=5 (d) Turtle ``traverses'' square by traversing each subsquare. (e) Decomposition of level <b>n</b> Hilbert curve into four level <b>n - 1</b> curves together with interfaces. (f) Details of interfacing</div><br\></div>

</br></br>

Perhaps the most famous space-filling design is the curve (shown in
figure 2.28) invented by the German mathematician David Hilbert. As
indicated in figure 2.28e, we can think of the level <b>n</b> Hilbert curve as
made up of four level <b>n - 1</b> Hilbert curves, joined by interfaces which
are straight line segments. Another way to picture this is to imagine the
square as divided into four subsquares. The Hilbert curve traverses the
square by visiting each of the subsquares and placing the interfaces in
between. (See figure 2.28d.)

</br></br>

In designing a program to draw the Hilbert curve we must be careful
to keep track of how each level of the curve affects the state of the turtle.
Assume that the turtle begins facing along the edge of the square that
it traverses, and ends in the same direction. Then pasting together four
level <b>n - 1</b> curves to form the level n curve requires interface turns as
shown in figure 2.28f. A second tricky point is that there are really two
different level <b>n - 1</b> Hilbert curves-one that traverses its square to the
left and one that traverses to the right-and that the level <b>n</b> curve is
made up of two of each parity. Finally, notice that the interfaces alone
provide the state change assumed at each level, so we can let the level
0 curve be simply a point; then the interfaces in level 1 will provide the
state change assumed by higher levels. The complete program consists
of two procedures, <span class='textsc'>lhilbert</span> and <span class='textsc'>rhilbert</span>:

</br></br>

<div class='inline-editor turtle-code'>
TO LHILBERT (SIZE, LEVEL)
   IF LEVEL = 0 THEN RETURN
   ; rotate and draw first subcurve
   ; with opposite parity to big curve
   LEFT 90
   RHILBERT (SIZE, LEVEL - 1)
   ; interface to and draw second subcurve
   ; with same parity as big curve
   FORWARD SIZE
   RIGHT 90
   LHILBERT (SIZE, LEVEL - 1)
   ; third subcurve
   FORWARD SIZE
   LHILBERT (SIZE, LEVEL - 1)
   ; fourth subcurve
   RIGHT 90 <span class='textsc'>forward</span> SIZE
   RHILBERT (SIZE, LEVEL - 1)
   ; a final turn is needed to make the turtle
   ; end up facing outward from the large square
   LEFT 90
</div><br\><br\>
The <span class='textsc'>rhilbert</span> procedure is the same, but with all the turns reversed:

</br></br>

<div class='inline-editor turtle-code'>
TO RHILBERT (SIZE, LEVEL)
   IF LEVEL = 0 THEN RETURN
   RIGHT 90
   LHILBERT (SIZE, LEVEL - 1)
   FORWARD SIZE
   LEFT 90
   RHILBERT (SIZE, LEVEL - 1)
   FORWARD SIZE
   RHILBERT (SIZE, LEVEL - 1)
   LEFT 90
   FORWARD SIZE
   LHILBERT (SIZE, LEVEL - 1)
   RIGHT 90
</div><br\><br\>
We ean combine <span class='textsc'>lhilbert</span> and <span class='textsc'>rhilbert</span> into a single procedure by
providing a third input, equal to <b>+1</b> or <b>-1</b>, whose sign is reversed to
convert left turns to right turns:

</br></br>

<div class='inline-editor turtle-code'>
TO HILBERT (SIZE, LEVEL, PARITY)
   IF LEVEL = 0 THEN RETURN
   LEFT (PARITY * 90)
   HILBERT (SIZE, LEVEL - 1, - PARITY)
   FORWARD SIZE
   RIGHT (PARITY * 90)
   HILBERT (SIZE, LEVEL - 1 , PARITY)
   FORWARD SIZE
   HILBERT (SIZE, LEVEL - 1, PARITY)
   RIGHT (PARITY * 90)
   FORWARD SIZE
   HILBERT (SIZE, LEVEL - 1, - PARITY)
   LEFT (PARITY * 90)
</div><br\><br\>
<h4>Exercises for Section \thesection</h4>

</br></br>

<ul>
</li><li> <b>[P]</b> Try the following variant of the nested-triangle procedure, which
adds only one smaller triangle at each level connecting the midpoints of
the larger triangle:

</br></br>

<div class='inline-editor turtle-code'>
TO NEST (SIZE, LEVEL)
   IF LEVEL = 0 THEN STOP
   FORWARD SIZE / 2
   SUBNEST (SIZE, LEVEL)
   FORWARD SIZE / 2
   RIGHT 120
   FORWARD SIZE
   RIGHT 120
   FORWARD SIZE
   RIGHT 120

</br></br>

TO SUBNEST (SIZE, LEVEL)
   RIGHT 60
   NEST (SIZE / 2, LEVEL - 1)
   LEFT GO
</div><br\><br\>
Generalize this procedure to produce designs based on nested <span class='textsc'>poly</span>s.
[HA]
</li><li> What is the length of the level n snowflake curve? How much area
does it enclose? [HA]
</li><li> <b>[P]</b> Write a procedure that generalizes the (triangular) snowflake curve
to produce arbitrary ``polysnowflakes.''
</li><li> <b>[D]</b> What is the length of the level <b>n</b> Hilbert curve?  
</li><li> <b>[P]</b> The <span class='textsc'>fill</span> curve is not as elegant as it might be because it intersects
itself. Add interfaces, in the same way that <span class='textsc'>hilbert</span> has them, to
separate the squares a bit. (See figure 2.29.) Note that the net effect of
the interfaces by themselves (including turning to set up for diagonals)
is the state change assumed for each level of <span class='textsc'>fill</span>. This is the same as
with the interfaces to <span class='textsc'>hilbert</span>, and makes it possible to allow the level
0 curve to be simply <span class='textsc'>return</span>. Try this possibility for <span class='textsc'>fill</span> as well.
</li><li> <b>[P]</b> The Hilbert curve is constructed on the following model: (1) Walk
along the side of a square, and imagine filling the square. (2) Divide
the square into four subsquares. Construct a similar space-filling curve
A based on dividing a triangle into four subtriangles.

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-29.png'/><br\><div class='caption'>Interfaces to <span class='textsc'>fill</span> and resulting (level 2) design</div><br\></div>

</br></br>

</li><li> <b>[P]</b> Construct a space-filling curve on the Hilbert model, but based
on dividing a square into nine subsquares.
</li><li> <b>[PD]</b> Write a procedure to draw the space-filling curve shown in figure
2.30. (This curve was invented by the Polish mathematician Wraclaw
Sierpinski.)  
</li><li> <b>[P]</b> Invent some new space-filling designs.
</li><li> <b>[P]</b> Can you build a recursive design like <span class='textsc'>fill</span> or <span class='textsc'>hilbert</span>, but based
on entering the middle of the side of the square rather than the corner?
</li><li> <b>[P]</b> How much does the <span class='textsc'>fill</span> curve depend on the particular level
0 step used? Does <span class='textsc'>fill</span> change its character if you use some more
complicated level 0 step than <span class='textsc'>forward(size)</span>?
</li><li> <b>[P]</b> Notice that in none of our recursive designs does the turtle
have any representation of the curve except the program itself. On
the other hand, by encoding turtle commands as letters, one can construct an explicit representation in the following way: Let F stand for
<span class='textsc'>forward</span> SIZE, L for <span class='textsc'>left</span> 60, and R for <span class='textsc'>right</span> 120; then construct a
string representing the side of a snowflake curve with the rules
<p><br>S_0 = F</p>
<p><br>S_n = S_{n-1}LS_{n-1}RS_{n-1}LS_{n-1}</p>

</br></br>

In fact a program to draw the side could be enacted as follows: Initialize
<b>S \leftarrow F</b> ; apply the recursive step <b>S \leftarrow SLSRSLS</b> (juxtaposition denotes
concatenation) <b>n</b> times; have the turtle interpret the resulting string.
Try this with several known recursive designs, such as <span class='textsc'>hilbert</span> and
<span class='textsc'>snowflake</span>. Now explore the possibilities of this ``word generation''
method by varying level 0, the recursive step, and the interpretation of
letters. You may wish to add more variable symbols to the process,
for example, <b>T \leftarrow SRSLSRS</b>.

</br></br>

<div class='figure'><br\><img src='images/figures/fig2-30.png'/><br\><div class='caption'>The Sierpinski curve</div><br\></div>

</br></br>

</li><li> <b>[PD]</b> All our recursive designs have maintained the constraint that
turtle must not lift the pen. Thus, the recursive step in <span class='textsc'>fill</span> consisted
of taking a certain walk through a square and then using that walk nine
times in sequence to make a more complex walk through a square. But
I we could just as easily imagine taking any design whatsoever in a square
(not necessarily a walk through it) and gluing nine copies to make a
larger square (without making sure the designs hook up simply). (See
I figure 2.31a.) Of course the overall design will appear more impressive
if some lines do ``accidentally'' hook up. This is like tiling a floor
with more and more complex tiles. Varying the design on the level
0 tile together with the orientations for the tiles in the recursive step
makes a fascinating artistic and mathematical exploration. To aid the
exploration you may wish to implement the recursive gluing-together
steps as programs that can take arbitrary design-drawing programs,
including glued-together designs, as inputs. That way a level 3 recursive
tile will look like <span class='textsc'>glue1(glue2(glue3(shape1)))</span>. Figure 2.31b-e shows
designs that can be made in this way. See if you can find the level 0
design in each.
</ul>

</br></br>

<h2>Vector Methods in Turtle Geometry</h2>
<div class='quote'>
I am sorry that I had to torture you with these
elements of analytic geometry. The purpose of this
invention of Descartes' is nothing but to give names
to the points <b>X</b> in a plane by which we can distinguish and recognize them. This has to be done in a
systematic way because there are infinitely many of
them; and it is the more necessary as points, unlike
persons, are all completely alike, and hence we can
distinquish them only by attaching labels to them.

</br></br>

Hermann Weyl, <em>Symmetry</em>
</div>

</br></br>

In chapter 1 we emphasized how turtle geometry provides an alternative to Cartesian coordinates for exploring geometry with a computer display screen. This chapter introduces a third way to represent
geometric phenomena: vector representation. Vectors methods are, in
many ways, intermediate between pure turtle methods and coordinate
methods. We will be making use of vectors as a mode of representing
geometric phenomena that is sufficiently intrinsic and local to capture
simply some essential features of turtle geometry but also shares the algebraic nature that makes analytic geometry so generally useful. More
than that, the algebra of vectors is easily reduced to simple arithmetic
operations through the introduction of vector coordinates. Since they
link well with geometry on one side and with numerical calculation on the
other, vectors are an ideal representation to use in computer programs
dealing with geometry. Using this fact, we will show how to implement
turtle geometry from scratch on almost any computer graphics system,
how to extend turtle geometry into three dimensions, and (in later chapters) how to design exotic turtles that walk on cubes, on spheres, and
even in Einstein's curved spacetime.

</br></br>

Despite this great power and the detailed work necessary to harness
it, we encourage you not to lose sight of the most important reason
for a combined look at turtles and vectors: Turtle geometry and vector
geometry are two different representations for geometric phenomena,
and whenever we have two different representations of the same thing
we can learn a great deal by comparing representations and translating
descriptions from one representation into the other. Shifting descriptions
back and forth between representations can often lead to insights that
are not inherent in either of the representations alone.

</br></br>

We will start this chapter by looking at some of the familiar turtle
phenomena --- <span class='textsc'>poly</span>s, closed paths, and so on --- in terms of vectors. After
dealing with vectors as conceptual entities, we will reduce vectors to
coordinates and thus gain the ability to manipulate vectors on the computer.

</br></br>

<h3>Vector Analysis of Turtle Programs</h3>

</br></br>

The turtle commands <span class='textsc'>forward</span>, <span class='textsc'>back</span>, <span class='textsc'>left</span>, and <span class='textsc'>right</span> describe changes
relative to the turtle's current state. For example, the pair of commands
<span class='textsc'>right</span> 90, <span class='textsc'>forward</span> 100 results in a motion of 100 steps from the turtle's
current position and at 90&deg; from the current heading. This relativity is
exactly what allows turtle programs to be simple intrinsic descriptions
of shapes such as circles and <span class='textsc'>poly</span>s. However, if you have a global frame
of reference in mind, and absolute orientation is important to you, the
two shapes in figure 3.1a are very different; one is a square and one is
A a diamond. The orientation of the sides with respect to a global ``up''
allows one to discriminate between square and diamond, even though
intrinsically the two figures are identical. In this case, position is still
relative. One cannot transform ``squareness'' to ``diamondness'' simply
by changing the position of the figure without rotating it.

</br></br>

Motions that are absolute in direction but relative in position --- called
displacements --- are readily described by <em>vectors</em>. We can think of a
vector as an arrow of definite length and direction but arbitrary position,
pointing from beginning to end of the displacement. (Throughout the
book we denote vectors by boldface symbols such as \textbf{v} and \textbf{w}.) ln order
to make a turtle produce squares and diamonds, imagine handing it
a collection of vectors. A program to draw a figure tells the turtle
when to make the displacement described by each vector. The following
procedures correspond to figure 3.1b and c.

</br></br>

<div class='inline-editor turtle-code'>
TO SQUARE
   DISPLACE.BY S1
   DISPLACE.BY S2
   DISPLACE.BY S3
   DISPLACE.BY S4

</br></br>

TO DIAMOND
   DISPLACE.BY D1
   DISPLACE.BY D2
   DISPLACE.BY D3
   DISPLACE.BY D4
</div><br\><br\>
<div class='figure'><br\><img src='images/figures/fig3-1.png'/><br\><div class='caption'>(a) Rotating a square produces a diamond. (b-c) Vector decompositions of square and diamond</div><br\></div>

</br></br>

<h3>Vector Operations: Scalar Multiplication and Addition</h3>

</br></br>

There are a number of relations between vectors that can be useful
to a vector-following turtle. If the turtle knows how to walk along a
particular vector <b>-</b>\textbf{v}, then it should be able to walk along a vector of
the same length pointing in exactly the opposite direction. Naturally
enough, we denote this displacement by <b>-</b>\textbf{v}. Similarly, a displacement
in the direction of \textbf{v}, but 5 times as far, can be denoted by <b>5 x \textbf{v}</b> (or simply
<b>5\textbf{v}</b>). In general, <b>a\textbf{v}</b> (where <b>a</b> is a number) is a vector in the direction of \textbf{v},
but <em>a</em> times as long. (If <em>a</em> is negative, <b>a\textbf{v}</b> is opposite in direction.) This
operation is called scalar multiplication of numbers and vectors. It is
essentially just changing the scale used to measure displacement. Scalar
division can be defined by the formula <b>\textbf{v}/a = (1 / a) x \mathbf{v}</b>.

</br></br>

Besides scalar multiplication (and the special case <b>-1 x \textbf{v} = -\textbf{v}</b>)
there is one other fundamental method of producing new vectors from
old ones. Observe that performing two displacements in sequence defines
a net displacement, a net change in position. A displacement \textbf{v} followed
by a displacement \textbf{w} yields a net displacement called the vector sum,
denoted \textbf{v}+\textbf{w}. Having defined addition of vectors, we can define vector
subtraction as adding the negative:
<p><br>\textbf{v} - \textbf{w} = \textbf{v} + (-\textbf{w}) (<span class='textsc'>by definition</span>).</p>

</br></br>

Vector addition satisfies the commutative property
<p><br>\textbf{v} + \textbf{w} = \textbf{w} + \textbf{v}</p>
<br\>oindent for any vectors \textbf{v} and \textbf{w}. This is illustrated in figure 3.2a, which shows
how following along \textbf{v} and then along \textbf{w}, or alternatively \textbf{w} and then \textbf{v},
forms a parallelogram whose diagonal is the vector sum.

</br></br>

Figures 3.2b and c illustrate two more simple but important formulas
that relate scalar multiplication to addition of vectors:
<p><br>(a+b)\textbf{v}=a\textbf{v}+b\textbf{v}</p>
<p><br>a(\textbf{v} + \textbf{w}) = a\textbf{v} + a\textbf{w}</p>
<br\>oindent The special vector \textbf{0} represents no displacement at all; its length is
zero. This zero vector is analogous to the number zero, and it has many
of the same properties:
<p><br>\textbf{v} - \textbf{v} = \textbf{0}</p>
<p><br>\textbf{0} + \textbf{v} = \textbf{v}</p>
<p><br>\textbf{0} x \textbf{v} = \textbf{0}</p>
<div class='figure'><br\><img src='images/figures/fig3-2.png'/><br\><div class='caption'>Properties of vector addition</div><br\></div>

</br></br>

<h3>Vector Representations of Closed Paths</h3>

</br></br>

Now we'll take advantage of vectors to rephrase some of our analyses of
familiar turtle-geometric programs and look at some new phenomena.
We will be using the following fundamental correspondence between vectors and turtle programs: Each <span class='textsc'>forward</span> step by the turtle is a displacement and can be described by a vector; successive displacements can
be described by vector addition. Notice that the <span class='textsc'>right</span> and <span class='textsc'>left</span> commands are not directly represented by vectors; rather, they determine
the direction of the vectors generated by <span class='textsc'>forward</span> commands.
Suppose the turtle makes its first move according to some initial vector \textbf{<b>\mathbf{v_0}</b>}. If the second move is along \textbf{<b>\mathbf{v_1}</b>}, then the net displacement is just
\textbf{<b>\mathbf{v_o}</b>} + \textbf{<b>\mathbf{v_l}</b>}. The turtle's net displacement after n steps, as shown in figure
3.3, will be
<p><br>\mathbf{v_0} + \mathbf{v_1} + \cdot \cdot \cdot + \mathbf{v_{n-1}}</p>

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-3.png'/><br\><div class='caption'>Turtle's displacement as a sum of vectors</div><br\></div>

</br></br>

If the path is closed in these n steps the turtle must have returned to
its starting point, and thus the net displacement from the initial position
must be zero:
<p><br>\mathbf{v_0}+\mathbf{v_1}+ \cdot \cdot \cdot + \mathbf{v_{n-1}} = \mathbf{0}</p>

</br></br>

So if we ignore the question of whether or not the turtle's final heading
is the same as its initial heading, then we can say the turtle's path is
closed precisely when the vectors that represent the position changes
add up to zero.

</br></br>

<h3>POLY Revisited: Rotations and Linearity</h3>

</br></br>

Let's look carefully at a simple special case: <span class='textsc'>poly</span>, our archetypal looping
program from chapter 1. We'll give a new interpretation of the <span class='textsc'>poly</span>
closing theorem of subsection 1.2.2. To keep things simple let the <span class='textsc'>angle</span>
of the <span class='textsc'>poly</span> be 360/<b>n</b>, where <b>n</b> is a positive integer. The <span class='textsc'>poly</span> closing
theorem says closure will be achieved in n steps. Reinterpreting the
closure in terms of vectors, we see that proving the theorem boils down
to verifying the equation
<p><br>\mathbf{v_0}+\mathbf{v_1}+ \cdot \cdot \cdot +\mathbf{v_{n-1}} = \mathbf{0}</p>
<br\>oindent In order to do this we need some way of capturing in vector terms the
simple relationship among the vs: They are all just \textbf{<b>v_0</b>} rotated by various
multiples of the <span class='textsc'>poly</span> angle. To express this relation we define, for any
vector \textbf{v} and angle <b>A</b>, a new vector Rotate(\textbf{v},<b>A</b>), also written <b>R_A</b>(\textbf{v}),
to be the vector obtained by rotating \textbf{v} through <b>A</b>. Using this rotation
operation allows us to express the special property of the <span class='textsc'>poly</span> segments:
\textbf{<b>v_k</b>} = <b>R_{kA}</b>(\textbf{<b>v_0</b>}) <b>(A = 360/n)</b>

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-4.png'/><br\><div class='caption'>Linearity of the rotation operation</div><br\></div>

</br></br>

Now we can restate the <span class='textsc'>poly</span> closing theorem as follows:

</br></br>

<br\><b><span class='textsc'>POLY</span> Closing Theorem (Vector Form)</b> Given any vector <b>\mathbf{v_0}</b> and positive
integer <b>n</b>, let <b>A = 360/ n</b> and let <b>\mathbf{v_k} = R_{kA}(\mathbf{v_0})</b>. Then
<p><br>\mathbf{v_0}+\mathbf{v_1}+\cdot \cdot \cdot+\mathbf{v_{n-1}} = \mathbf{0}</p>

</br></br>

The proof of this theorem will be based on two fundamental properties
of the rotation operation <b>R_A</b> for any angle <b>A</b>. As figure 3.4a illustrates,
the rotation of any scalar multiple of a vector v can be obtained simply
by scaling <b>R_A(\mathbf{v})</b>:
<p><br>R_A(a\mathbf{v}) = aR_A(\mathbf{v})</p>
<br\>oindent This is called the scaling property of rotation. Rotation has another
property called additivity, which means that for any vectors \textbf{v} and \textbf{w}
<p><br>R_A(\mathbf{v} + \mathbf{w}) = R_A(\mathbf{v}) + R_A(\mathbf{w})</p>
<br\>oindent Figure 3.4b demonstrates that rotation satisfies additivity; just rotate
the whole picture for vector addition and note that each of the parts \textbf{v}
and \textbf{w} and the sum \textbf{v} + \textbf{w} get rotated while preserving their configuration
as a sum. lf an operation has both the scaling and additivity properties,
then it is said to be linear. Linearity will soon take its place beside local
vs. global and intrinsic vs. extrinsic as one of the recurring mathematical
themes of this book. 

</br></br>

Returning to the <span class='textsc'>poly</span> theorem, we wish to demonstrate that the sum
<p><br>\mathbf{V} = \mathbf{v_0} + \cdot \cdot \cdot + \mathbf{v_{n-1}}</p>
<br\>oindent satisfies \textbf{V} = \textbf{0}. The insight that proves this is that the collection of \textbf{v}s
that make up \textbf{V} is perfectly symmetrical. The sum of them could hardly
point in any direction favoring one \textbf{v} over another, and so must point in
no direction at all: \textbf{V} = \textbf{0}.

</br></br>

To turn this observation into a proof, let us rotate \textbf{V} through angle <b>A</b>
and use linearity:
<p><br>R_A(\mathbf{V}) = R_A(\mathbf{v_0} + \mathbf{v_1} + \cdot \cdot \cdot + \mathbf{V_{n-1}}) = R_A(\mathbf{v_0}) + R_A(\mathbf{v_1}) + \cdot \cdot \cdot + R_A(\mathbf{v_{n-1}})</p>
<br\>oindent But <b>R_A(\mathbf{v_0}) = \mathbf{v_1}</b> (by the definition of <b>\mathbf{v_k}</b>), and in general each <b>\mathbf{v_k}</b> is
transformed into <b>\mathbf{v_{k+1}}</b> all the way until <b>\mathbf{v_{n_1}}</b>, which gets transformed
into <b>\mathbf{v_0}</b> (since <b>nA = 360</b>). Therefore,
<p><br>R_A(\mathbf{V}) = \mathbf{v_1} + \mathbf{v_2} + \cdot \cdot \cdot +\mathbf{v_{n-1}} + \mathbf{v_0} = \mathbf{V} </p>
Note that the last equality follows from commutativity of vector addition
(the fact that order doesn't matter in a sum).
Having demonstrated that \textbf{V} doesn't change when rotated by <b>A</b>, we
complete the proof by observing that the only vector that can remain
unchanged by a rotation is the zero vector. (This statement is geometrically obvious, although later on we'll develop the machinery to prove
this using algebra rather than geometry; see exercise 2 of section 3.2.)

</br></br>

In summary,
<p><br>R_A(\mathbf{V}) = \mathbf{V} <span class='textsc'> implies that </span> \mathbf{V} = \mathbf{0}</p>
<br\>oindent and this completes the proof of the theorem.

</br></br>

<div class='figure'>
<img src='images/figures/fig3-5.png'/>
<div class='caption'>The <span class='textsc'>poly</span> equation <b>v_0 + v_1 + . . . v_k = c + R_{kA</div>(\mathbf{r_0})</b>}
</div>

</br></br>

We began this chapter by introducing vectors as a more global method
of describing turtle paths. We can capitalize on that perspective by
phrasing a global description of <span class='textsc'>poly</span> in terms of vectors. The description
we have in mind specifies that the vertices of <span class='textsc'>poly</span> lie on a fixed circle
where the angular measure of the arc between vertices is exactly the
angle input to the <span class='textsc'>poly</span> (see chapter 1, section 1.2, exercise 15). This
fact means that, instead of following along <span class='textsc'>poly</span> segments to reach a
particular vertex, we can obtain the same displacement by walking first
to the center of the circle and then along a radius. This gives
<p><br>\mathbf{v_0} + \mathbf{v_1} + \cdot \cdot \cdot + \mathbf{v_k} = \mathbf{c} + \mathbf{r_k}</p>
<br\>oindent where \textbf{c} is a constant vector pointing to the center of the circle, and the
various \textbf{<b>r_k</b>} are all radii pointing to the <span class='textsc'>poly</span>'s vertices and hence equal
in length. Using the correlation between the amount of arc between
vertices on the circle and <span class='textsc'>poly</span> angle, <b>A</b>, we can rewrite this as
<p><br>\mathbf{v_0} + \mathbf{v_1} + \cdot \cdot \cdot + \mathbf{v_k} = \mathbf{c} + R_{kA}(\mathbf{r_0})</p>

</br></br>

Figure 3.5 shows this equation geometrically. In the next subsection
we'll see how to use this formula to good advantage.
If we let lc become a continuous parameter, then <b>c+RkA(r_0)</b> represents
all the points along the circle in which <span class='textsc'>poly</span> is inscribed. We now
have three complementary descriptions of a circle --- turtle (<span class='textsc'>forward</span> 1,
<span class='textsc'>left</span> 1, etc.), Cartesian <b>(x^2 + y^2 = r^2)</b>, and vector (<b>\mathbf{c} + R_{kA}(\mathbf{r_0})</b>).

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-6.png'/><br\><div class='caption'>Interleaving segments of two <span class='textsc'>poly</span>s</div><br\></div>

</br></br>

<h3>MULTIPOLYs: Another Application of Vector Analysis</h3>

</br></br>

Let's turn now from the familiar <span class='textsc'>poly</span> to apply vector techniques to
some new programs. Our aim will not be to supply complete analyses,
but rather to sketch some partial results and suggest further problems
for you to tackle on your own.

</br></br>

Our first example is an elaboration of <span class='textsc'>poly</span> called <span class='textsc'>duopoly</span>. It is
constructed by taking two ordinary <span class='textsc'>poly</span>s and interleaving them as
shown in figure 3.6. This is the natural way of doing two <span class='textsc'>poly</span>s at
the same time if one views <span class='textsc'>poly</span> as a sequence of vectors rather than
as a sequence of turtle commands. (See <span class='textsc'>newpoly</span> in subsection 1.1.4 for
comparison.) The <span class='textsc'>duopoly</span> procedure takes four inputs, specifying the
sidelengths and the angles of the individual <span class='textsc'>poly</span>s. The interleaving is
accomplished by alternately drawing sides of the two <span class='textsc'>poly</span> figures <span class='textsc'>poly1</span>
and <span class='textsc'>poly2</span>, while making sure that the sides of the two <span class='textsc'>poly</span>s have the
same headings they would have if the <span class='textsc'>poly</span>s were drawn individually.
That is to say, if the first <span class='textsc'>poly</span>'s angle is <span class='textsc'>angle1</span> the headings of the
sides will be the successive multiples of <span class='textsc'>angle1</span>, while for the second
<span class='textsc'>poly</span> the headings will be the successive multiples of <span class='textsc'>angle2</span>. Here is
the procedure:

</br></br>

<div class='inline-editor turtle-code'>
TO DUOPOLY (SIDE1, ANGLE1, SIDE2, ANGLE2)
   C <- O
   REPEAT FOREVER
   VECTOR (C * ANGLE1, SIDE1)
   VECTOR (C * ANGLE2, SIDE2)
   C <- C + 1
</div><br\><br\>
The procedure for drawing vectors takes two inputs specifying direction
and length of the vector to be drawn:

</br></br>

<div class='inline-editor turtle-code'>
TO VECTOR (DIRECTION, LENGTH)
   SETHEADING DIRECTION
   FORWARD LENGTH
</div><br\><br\>
<div class='figure'><br\><img src='images/figures/fig3-7.png'/><br\><div class='caption'>Some examples of <span class='textsc'>duopoly</span></div><br\></div>

</br></br>


(To make the headings of our turtle vectors agree with standard mathematical conventions for directions, we specify that a heading of 0 is
horizontal facing right, and that headings increase counterclockwise.)
One of the nice things about <span class='textsc'>duopoly</span> is the great variety of iigures
that can be obtained by varying the four inputs. Figure 3.7 gives a small
sample.

</br></br>

<h4>Closure</h4>
The tirst thing to notice about these figures is that they are all closed.
By using vector methods, it is easy to see why this is true. Think of the
<span class='textsc'>duopoly</span> as a sum of vectors, and separate the vectors into two groups
corresponding to the sides of <span class='textsc'>poly1</span>(\textbf{v}) and <span class='textsc'>poly2</span>(\textbf{u}). Then the net
displacement is
<p><br>\mathbf{v_0}+\mathbf{u_0}+\mathbf{v_1}+\mathbf{u_1}+\cdot \cdot \cdot+\mathbf{v_k}+\mathbf{u_k}=(\mathbf{v_0}+\mathbf{v_1}+\cdot \cdot \cdot + \mathbf{v_k})+(\mathbf{u_0}+\mathbf{u_1}+\cdot \cdot \cdot+\mathbf{u_k})</p>

</br></br>

The first group is just the net displacement of <span class='textsc'>poly1</span>, and the second
that of <span class='textsc'>poly2</span>. Whenever each <span class='textsc'>poly</span> closes, the corresponding part (vs
or us) of the <span class='textsc'>duopoly</span> net displacement will sum to zero. The trick is to
show that there is some point where the two <span class='textsc'>poly</span>s close simultaneously.
Suppose that <span class='textsc'>poly1</span> closes in <b>n_l</b> steps -- we saw in subsection 1.4.1
how to determine <b>n_l</b> as the least common multiple of <span class='textsc'>angle1</span> and <b>360 \div</b>
<span class='textsc'>angle1</span>. Whenever C (the ``loop counter'' in the <span class='textsc'>duopoly</span> program) is
a multiple of <b>n_l</b>, the vectors in the first group can be reassembled to
form some number of complete copies of <span class='textsc'>poly1</span> and hence will sum to
zero. Similarly, whenever C is a multiple of <b>n_2</b> (the number of vertices
in <span class='textsc'>poly2</span>), the vectors in the second group will sum to zero. So if C is
a common multiple of <b>n_l</b> and <b>n_2</b>, both groups will sum to zero at the
same time. In particular, taking C to be <b>n_l x n_2</b>, or (better yet) the least
common multiple of <b>n_l</b> and <b>n_2</b>, will produce a closed figure (see exercise
7 below). For example, figure 3.7a is a <span class='textsc'>duopoly</span> with <span class='textsc'>angle1</span> <b>= 90^{\circ}</b>
<b>(n_l = 4)</b> and an <span class='textsc'>angle2</span> of 320&deg; <b>(n_2 = 9)</b>. It closes in LCM(4, 9) =
36 steps. You can easily see nine complete squares, and the remaining
segments can be reassembled to form four 9-gons.

</br></br>

In summary: <span class='textsc'>duopoly</span> closes because vector addition is commutative.
That allows us to reassociate an alternate sum of vectors from two <span class='textsc'>poly</span>s
into two pieces, each of which represents a <span class='textsc'>poly</span> and hence sums to zero.

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-8.png'/><br\><div class='caption'>Spirographs</div><br\></div>

</br></br>

<h4>Symmetry</h4>
The global vector view of <span class='textsc'>poly</span>, discussed at the end of subsection 3.1.3,
furnishes additional insight by allowing us to write a global equation for
the net displacement in <span class='textsc'>duopoly</span>. (The equation is particularly simple if
we consider only those displacements formed by an equal number of vs
and us, that is, the displacement at every other vertex of the <span class='textsc'>duopoly</span>
figure.) If we use <b>A</b> and <b>B</b> as the angles of the two <span class='textsc'>poly</span>s, we have
<p><br>\mathbf{v_0}+\mathbf{v_1}+\cdot \cdot \cdot +\mathbf{v_k} = \mathbf{c_v}+R_{kA}(\mathbf{r_v})</p>
<p><br>\mathbf{u_0}+\mathbf{u_1}+\cdot \cdot \cdot +\mathbf{u_k} = \mathbf{c_u}+R_{kB}(\mathbf{r_u})</p>
<br\>oindent where \textbf{<b>c_v</b>} and \textbf{<b>c_u</b>} are the centers of the two <span class='textsc'>poly</span> circles, and \textbf{<b>r_v</b>} and \textbf{<b>r_u</b>} are the initial radii. Thus, the vertices of the <span class='textsc'>duopoly</span> are given by
<p><br>\mathbf{c_v} + R_{kA}(\mathbf{r_v}) + \mathbf{c_u} + R_{kB}(\mathbf{r_u}) = \mathbf{c} + R_{kA}(\mathbf{r_v}) + R_{kB}(\mathbf{r_u})</p>

</br></br>

The vector <b>\mathbf{c} = \mathbf{c_v} + \mathbf{c_u}</b> represents the constant ``center'' of the
<span class='textsc'>duopoly</span>. Remember from 3.1.1 how making <b>k</b> a continuous parameter
described the whole circle circumscribing <span class='textsc'>poly</span>? We can do the same
here. Geometrically, <p><br>\mathbf{c} + R_{kA}(\mathbf{r_v}) + R_{kB}(\mathbf{r_a})</p> represents a ``two-armed spirograph'' figure formed by rotating one vector about the end of another rotating vector. As <b>k</b> increments by 1,
<b>R_{kA}(\mathbf{r_v})</b> rotates by <b>A</b> and <b>R_{kB}(\mathbf{r_u})</b> rotates by <b>B</b> (figure 3.8a). Figure
3.8b shows a typical continuous spirograph figure (with no radii). We
have shown that every <span class='textsc'>duopoly</span> is inscribed in a two-armed spirograph.

</br></br>

Let's determine the symmetry of the spirograph. Imagine watching
the figure being generated, starting from a time when the two arms
are lined up. As soon as the two arms line up again, the figure will
have completed one ``loop-the-loop'' and will be about to make another
identical one, offset at some angle from the original. If <b>B</b> denotes the
larger of the two angles, then the arms become realigned when the <b>B</b>
arm has gone a full 360&deg; plus some to catch back up to the slower <b>A</b>
arm. The new loop-the-loop will be rotated by the amount the <b>A</b> arm
turned between lineups; hence, that is the symmetry angle, <b>S</b>, of the
spirograph. In equations this is expressed as follows:<p><br>kB = 360 + kA</p> <p><br>k = \frac{360}{B-A}</p> <p><br>S = kA = \frac{360A}{B-A} = \frac{360}{B/A - 1}</p>

</br></br>

For example, a <span class='textsc'>duopoly</span> with <span class='textsc'>angle1</span> equal to 45 and <span class='textsc'>angle2</span> equal
to 9 has symmetry angle <p><br>S = \frac{360}{45/9 - 1} = 90 </p> so we should expect fourfold symmetry, and this is what we observe in
figure 3.9a. The symmetry angle depends only on the ratio of <b>B</b> to <b>A</b>. All
<span class='textsc'>duopoly</span>s with proportional angles are inscribed in similar spirographe.

</br></br>

Fortunately (since we're looking for good problems rather than easy
answers), the full story of <span class='textsc'>duopoly</span>'s symmetry is more complicated than
this one formula. Remember, the formula gives the symmetry of the
associated spirograph figure; the symmetry of the actual <span class='textsc'>duopoly</span> figure
may be different. Figure 3.9b shows <span class='textsc'>duopoly</span> with <b>A = 4</b> and <b>B = 32</b>.
Then <b>B/A = 8</b>, which implies <b>S = 360/7</b>. Indeed, the figure appears
to have sevenfold symmetry. But this symmetry is not exact; the seven
lobes are not identical. We call this curious phenomenon ``approximate
symmetry.'' We'll leave it to you to work out the conditions under which
approximate symmetry can occur and find a way to compute the exact
symmetry of a <span class='textsc'>duopoly</span> figure rather than that of the spirograph (see
exercise 5 below).

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-9.png'/><br\><div class='caption'>(a) <span class='textsc'>duopoly</span> (100, 45, 40, 9) with fourfold spirograph symmetry. (b) <span class='textsc'>duopoly</span> (35, 32, 20, 4) with sevenfold spirograph symmetry.</div><br\></div>

</br></br>

<h4>Beyond DUOPOLY</h4>

</br></br>

The <span class='textsc'>duopoly</span> procedure can be generalized to <span class='textsc'>multipoly</span>, which can
interleave any number of <span class='textsc'>poly</span>s. The input to <span class='textsc'>multipoly</span> is a list of
<span class='textsc'>[side angle]</span> pairs. The number of pairs in the list is the number of
<span class='textsc'>poly</span>s to interleave. For example,
<span class='textsc'>multipoly [ [100 90] [50 60] [20 30] ]</span>
interleaves three <span class='textsc'>poly</span>s.

</br></br>

The <span class='textsc'>multipoly</span> procedure first draws a side of the first <span class='textsc'>poly</span> in the
list, then a side of the second <span class='textsc'>poly</span>, and so on until the list is exhausted.
Then it starts again at the beginning of the list, and this process is
repeated over and over:

</br></br>

<div class='inline-editor turtle-code'>
TO MULTIPOLY INPUT.LIST
   C <- 0
   REPEAT FOREVER
      REPEAT FOR [SIDE ANGLE] IN INPUT.LIST
         VECTOR (C * ANGLE, SIDE) 
         C <- C + 1
</div><br\><br\>
(See appendix A for explanations of the <span class='textsc'>repeat</span><span class='textsc'> for</span><span class='textsc'> in</span> construct and the ``structure-directed assignment'' feature that is used to
set both variables <span class='textsc'>side</span> and <span class='textsc'>angle</span> at once.)

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-10.png'/><br\><div class='caption'>Examples of equal-sided <span class='textsc'>quadrapoly</span>s</div><br\></div>

</br></br>

There are many different kinds of <span class='textsc'>multipuly</span>s. Figure 3.10 illustrates
some <span class='textsc'>quadrapoly</span>s (<span class='textsc'>multipoly</span>s with the number of <span class='textsc'>poly</span>s equal to 4).
Notice that figure 3.10a has exact symmetry, while c and d are only approximately symmetric. <span class='textsc'>quadrapoly</span>s are a rich domain of phenomena
in which to challenge your imagination at systematic investigation.

</br></br>

<h3>Unexpectedly Closed Figures</h3>

</br></br>

Unexpectedly closed figures, introduced in subsection 1.3.2, are figures
drawn by looping programs in which the basic loop is itself closed-that
is, figures whose <span class='textsc'>poly</span> skeletons have zero sidelength. In terms of vectors
this means that the vectors in the basic loop ``unexpectedly'' sum to zero.

</br></br>


<h4>Spirolaterals</h4>

</br></br>

When we introduced spirolaterals in subsection 1.3.2 we mentioned that
the figures we called generalized spirolaterals could be unexpectedly
closed. These figures are drawn, you recall, by the <span class='textsc'>gspiro</span> program:

</br></br>

<div class='inline-editor turtle-code'>
TO GSPIRO (SIDE, ANGLE, MAX, LIST)
   REPEAT FOREVER
      SUBGSPIRO (SIDE, ANGLE, MAX, LIST)

</br></br>

TO SUBGSPIRO (SIDE, ANGLE, MAX, LIST)
   COUNT <- 1
   REPEAT
      FORWARD SIDE * COUNT
      IF MEMBER (COUNT, LIST)
         THEN RIGHT ANGLE
         ELSE LEFT ANGLE
      COUNT <- COUNT + 1
   UNTIL COUNT > MAX
</div><br\><br\>
The inputs to the program specify the sidelength of the initial side, the
angle that the turtle turns at each vertex, the number of sides in the
basic loop, and the steps at which the turtle turns <span class='textsc'>right</span> instead of <span class='textsc'>left</span>.
As an example of an unexpectedly closed spirolateral, we'll take an
<span class='textsc'>angle</span> of 360/3 = 120, a <span class='textsc'>max</span> of 11, and a <span class='textsc'>list</span> of [3 4 6 7]. To
see why the corresponding <span class='textsc'>gspiro</span> (figure 3.11) is unexpectedly closed,
notice first that any vector in the basic loop must be a multiple of either
<b>\mathbf{v_0}</b>, <b>\mathbf{v_1}</b>, or <b>\mathbf{v_2}</b>, that is, the initial vector <b>\mathbf{v_0}</b> rotated counterclockwise 0&deg;,
120&deg;, or 240&deg;, respectively. Now we compute what these multiples are.
The turtle starts out pointing along vo and goes forward distance 1. (We
suppose, for simplicity, that <span class='textsc'>side</span> is 1.) Now the turtle turns left to point
along <b>\mathbf{v_1}</b> and goes forward 2; that is, it, moves by the vector <b>2\mathbf{v_1}</b>. The
next move adds in <b>3\mathbf{v_2}</b>. Now comes a right turn (since 3 is in the <span class='textsc'>list</span>),
and so the next move adds in <b>4\mathbf{v_1}</b>. Continuing in this way, we find that
the sum of the vectors in the basic loop is <p><br>\mathbf{v_0} + 2\mathbf{v_1} + 3\mathbf{v_2} + 4\mathbf{v_l} + 5\mathbf{v_0} + 6\mathbf{v_l} + 7\mathbf{v_0} + 8\mathbf{v_2}  9\mathbf{v_0} + 10\mathbf{v_l} + 11\mathbf{v_2} = 22(\mathbf{v_0} + \mathbf{v_1} + \mathbf{v_2})</p> But we know from the vector form of the <span class='textsc'>poly</span> closing theorem (see
subsection 3.1.3) that <b>\mathbf{v_0} + \mathbf{v_l} + \mathbf{v_2} = 0</b>. Therefore, the sum of the
vectors in the basic loop is zero and the figure is unexpectedly closed.
Generalizing this analysis, we see that we'll get unexpectedly closed
spirolaterals with an <span class='textsc'>angle</span> of <span class='textsc'>a</span> <b>= 360/n</b> whenever we can arrange

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-11.png'/><br\><div class='caption'><span class='textsc'>gspiro</span> with <span class='textsc'>angle</span> = 120, <span class='textsc'>max</span> = 11, <span class='textsc'>list</span> = [3 4 6 7] is unexpectedly closed.</div><br\></div>

</br></br>

things so that the sum of the vectors in the basic loop is a multiple of
<b>\mathbf{v_0} + \mathbf{v_1} + \cdot \cdot \cdot + \mathbf{v_{n-1}}</b>. So, given <b>A = 360/n</b> and <span class='textsc'>max</span>, we can attempt
to find values of <span class='textsc'>list</span> that satisfy this property by the following ``slot process'': Start by setting up <b>n</b> ``slots'' (corresponding to the vectors <b>\mathbf{v_k}</b>).

</br></br>

Now take the numbers from 1 through <span class='textsc'>max</span> (corresponding to the amount
the turtle goes forward at each step) and distribute these among the <b>n</b>
slots so that the sum of the numbers in each slot is the same (that is,
so that in the end all the <b>\mathbf{v_k}</b> will be weighted the same amount). There
is one more restriction on assigning the numbers: If the number <em>i</em> goes
into slot <em>k</em>, then <b>i + 1</b> must go into either slot <b>k - 1</b> or <b>k + 1</b> (mod <b>n</b>);

</br></br>

That is, the turtle can only rotate through the fixed <span class='textsc'>angle</span>, left or right,
between successive steps. We'll use the term ``regular unexpectedly
closed spirolateral'' to refer to the kind of spirolateral produced by this
slot process, the kind for which the basic loop vector sum is a multiple
of <b>\mathbf{v0} + \mathbf{vl} + \cdot \cdot \cdot   + \mathbf{v_{n-1}}</b>. But there are also irregular unexpectedly
closed spirolaterals. One example is drawn by <span class='textsc'>angle</span> = 90, <span class='textsc'>max</span> = 8,
and <span class='textsc'>list</span> = [4]. The vector sum for this basic loop is
<b>8\mathbf{v_O} + 10\mathbf{v_l} + 8\mathbf{v_2} + 10\mathbf{v_3}</b>,
which equals zero, since, for <b>A = 360/4</b>, <b>\mathbf{v_0} = -\mathbf{v_2}</b> and <b>\mathbf{v_1} = -\mathbf{v_3}</b>.

</br></br>

As it turns out, if <b>A = 360/n</b> where <b>n</b> is a prime number (<b>n <br\>ot= 2</b>), all unexpectedly closed spirolaterals are regular, whereas if <b>A = 360/n</b> where <b>n</b> is an even integer no unexpectedly closed spirolaterals
are regular (see exercises 17 and 19 below).

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-12.png'/><br\><div class='caption'>Looping and initial tail of <span class='textsc'>gospel</span> figures.</div><br\></div>

</br></br>

<h4>GOSPEL</h4>

</br></br>

Our final example for vector analysis is a very simple program, but the
analysis of whether or not the program draws a closed figure turns out
to be surprisingly difficult. The program is <span class='textsc'>gospel</span>, named after the EWG
people who first studied it, Bill Gospel and Richard Schroeppel:

</br></br>

<div class='inline-editor turtle-code'>
TO GOSPEL (SIDE, ANGLE)
   LEFT ANGLE
   FORWARD SIDE
   GOSPEL (SIDE, 2 * ANGLE)
</div><br\><br\>
For an example, suppose that <span class='textsc'>angle</span> is 40 (see figure 3.12a). Then the
sequence of turns in the resulting <span class='textsc'>gospel</span> figure will be <p><br>40, 80, 160, 320, 640, 1280, 2560, 5120,...</p> or, reducing modulo 360, <p><br>40, 80, 160, 320, 280, 200, 40, 80,...</p>

</br></br>

So <span class='textsc'>gospel</span> with an <span class='textsc'>angle</span> of 40 is equivalent to the fixed instruction loop

</br></br>

<div class='inline-editor turtle-code'>
LEFT 40 FORWARD SIDE
LEFT 80 FORWARD SIDE
LEFT 160 FORWARD SIDE
LEFT 320 FORWARD SIDE
LEFT 280 FORWARD SIDE
LEFT 200 FORWARD SIDE
</div><br\><br\>
repeated over and over.

</br></br>

But <span class='textsc'>gospel</span> is not always precisely equivalent to a fixed instruction
loop. For instance, if we had taken the initial <span class='textsc'>angle</span> to be 10 the sequence
of turns (reduced modulo 360) would be <p><br>10, 20, 40, 80, 160, 320, 280, 200, 40, 80,...</p> or the same loop as before with an extra

</br></br>

<div class='inline-editor turtle-code'>
LEFT 10 FORWARD SIDE
LEFT 20 FORWARD SIDE
</div><br\><br\>
added on at the beginning. This is illustrated in figure 3.12b.

</br></br>

In general, the sequence of angles turned is <p><br><span class='textsc'><span class='textsc'>angle </span></span>, 2 x <span class='textsc'><span class='textsc'>angle </span></span>, 4 x <span class='textsc'><span class='textsc'>angle </span></span>, 8 x <span class='textsc'><span class='textsc'>angle </span></span>, ...</p> and this will start repeating over from the beginning if and only if there
is some integer <b>n</b> for which
<p><br>2^n x <span class='textsc'><span class='textsc'>angle</span></span> = <span class='textsc'><span class='textsc'>angle</span> (mod 360).</span></p>

</br></br>

If <span class='textsc'>angle</span> <b>= 360 x p/q</b> where <b>p</b> and <b>q</b> are integers with no common
factors, the above equation reduces (see exercise 24) to <b>2^n x p = p</b>
(mod <b>q</b>). This equation can always be satisfied if <b>q</b> is an odd number,
because if <b>q</b> is odd there is always some n for which <b>2^n = 1</b> (mod <b>q</b>)
(see exercise 25). The smallest positive integer n that satisfies <b>2^n = 1</b>
(mod <b>q</b>) is called the order of 2 modulo <b>q</b>. Thus,
if <span class='textsc'>angle</span> <b>= 360 x p/q</b> where <b>q</b> is odd, then <span class='textsc'>gospel</span> is equivalent to a
fixed instruction loop. The number of steps in the basic loop is equal to
the order of 2 modulo <b>q</b>.
One interesting fact about <span class='textsc'>gospel</span> is that the heading change for this
basic loop is always a multiple of 360&deg; (see exercise 26). Therefore,
whenever the figure is closed, it is automatically unexpectedly closed.

</br></br>

For a vector analysis of the basic loop, suppose that <span class='textsc'>angle</span> <b>= 360 x p/q</b>, 
let <b>n</b> be the order of 2 modulo <b>q</b>, and let <b>\mathbf{v_k}</b> denote the vector
<b>\mathbf{v_0}</b> rotated counterclockwise through (<span class='textsc'>angle</span> <b>x k</b>), where <b>\mathbf{v_0}</b> points in the turtle's initial direction. Now compute the position of the turtle at
the end of the basic loop in terms of the vectors <b>\mathbf{v_k}</b>. First the turtle
turns through <span class='textsc'>angle</span> and goes forward along the displacement <b>\mathbf{v_1}</b>. (We'll
suppose that <span class='textsc'>side</span> <b>= 1</b>). Then the turtle turns <b>2 x</b> <span class='textsc'>angle</span>, which makes
the heading <span class='textsc'>angle</span> <b>+ 2 x</b> <span class='textsc'>angle</span> <b>= 3 x </b> <span class='textsc'>angle</span>, and goes forward. So
the resulting position is <b>\mathbf{v_1} + \mathbf{v_3}</b>. Now the turtle turns <b>4 x</b> <span class='textsc'>angle</span>, which
makes the heading <b>7 x </b> <span class='textsc'>angle</span>, and goes forward to position <b>\mathbf{v_1} + \mathbf{v_3} + \mathbf{v_7}</b>.

</br></br>

Continuing for the <b>n</b> steps of the basic loop, we see that the final position
is <p><br>\mathbf{v_1} + \mathbf{v_3} + \mathbf{v_7} + \cdot \cdot \cdot+\mathbf{v_{n-1}}</p> and the loop closes if and only if this sum is zero. (Note that by the
choice of <b>n</b>, the last term in the sum above is equal to <b>\mathbf{v_0}</b>.)

</br></br>

In our example above, we had <span class='textsc'>angle</span> <b>= 40 = 360/9</b>. The powers of
2 modulo 9 are 2,4,8,7,5,1, so the order of 2 modulo 9 is 6, the basic
loop has 6 segments, and the vector sum is
<p><br>\mathbf{v_1} + \mathbf{v_3} + \mathbf{v_7} + \mathbf{v_6} + \mathbf{v_4} + \mathbf{v_0}</p>
We leave it to you (exercise 27) to verify that this sum is zero and that
hence the figure is closed.

</br></br>

<h3>Exercises for Section \thesection</h3>
<ul>
</li><li> Give geometric interpretations of vectors (displacements) in three
dimensions. Draw pictures to illustrate vector addition and scalar multiplication.
</li><li> Give a geometric definition, in terms of displacements, of vector
subtraction. Give one that does not involve ``adding the negative.'' [A]
</li><li> <b>[D]</b> Using vectors, prove that <span class='textsc'>polyspi</span> (subsection 1.1.4) cannot close.
[HA]
</li><li> State the vector form of the <span class='textsc'>poly</span> closing theorem in the case where
<b>A = 360 X p/ q</b>, and <b>p/q</b> is a fraction reduced to lowest terms. [A]
</li><li> We saw in subsection 3.1.4 how to compute the symmetry of the
spirograph associated with a given <span class='textsc'>duopuly</span>. Now find the exact symmetry. In particular, show that <span class='textsc'>duopoly</span> starts looping (in the sense
defined in section 1.3) when
<p><br>C x ( <span class='textsc'><span class='textsc'>angle1</span></span> - <span class='textsc'><span class='textsc'>angle2</span></span>) = 0 <span class='textsc'>(mod 360)</span></p>
where <b>C</b> is the loop counter, and that the symmetry angle will be <b>C x </b><span class='textsc'>angle1</span> where <b>C</b> is the smallest positive integer that satisfies the above
equation.  
</li><li> Predict the symmetry of <span class='textsc'>duopoly</span>s with <span class='textsc'>angle1</span> = 17, <span class='textsc'>angle2</span> = 1;
with <span class='textsc'>angle1</span> = 18, <span class='textsc'>angle2</span> = 2; with <span class='textsc'>angle1</span> = 28, <span class='textsc'>angle2</span> = 3; with
<span class='textsc'>angle1</span> = 101, <span class='textsc'>angle2</span> = 1; with <span class='textsc'>angle1</span> = 102, <span class='textsc'>angle2</span> = 2. Check
your answers by drawing the figures. [A]
</li><li> <b>[P]</b> In our analysis of <span class='textsc'>duopoly</span> we saw that if <span class='textsc'>poly1</span> closes in <b>n_l</b>
steps and <span class='textsc'>poly2</span> closes in <b>n_2</b> steps then the <span class='textsc'>duopoly</span> will close when the
loop counter <b>C</b> is a common multiple of <b>n_l</b> and <b>n_2</b>. But can <span class='textsc'>duopoly</span>
close for other values of <b>C</b>? In particular, is there a value of <b>C</b> smaller
than LCM(<b>n_1</b>, <b>n_2</b>) for which the <span class='textsc'>duopoly</span> will generally be closed? What
about special circumstances?
</li><li> <b>[P]</b> Compare the patterns drawn by <span class='textsc'>duopoly (s1, a1, s2, a2)</span>
with those in which the second <span class='textsc'>poly</span> is drawn by <span class='textsc'>vector (-a2, s2)</span>
rather than <span class='textsc'>vector (a2, s2)</span>. How about <span class='textsc'>vector (a2, -s2)</span>? What
about <span class='textsc'>quadrapoly</span>s where the sign of the angle input to <span class='textsc'>vector</span> alternates? What if the sign of the distance alternates (is positive for the first
and third <span class='textsc'>poly</span>s, negative for the second and fourth)? Can you make
any generalizations? (Pay attention to symmetry!)
</li><li> Generalizing our analysis of <span class='textsc'>duopoly</span>, show that every <b>n</b>th vertex
of an <b>n</b>-fold <span class='textsc'>multipoly</span> lies on an <b>n</b>-armed spirograph figure. Can you
compute the symmetry of the spirograph? [A]
</li><li> <b>[D]</b> Suppose we have a <span class='textsc'>multipoly</span> whose sequence of angles is
1,<b>-n</b>,<b>n^2</b>,<b>-n^3</b>,... Prove that the <span class='textsc'>multipoly</span> has <b>(n + 1)</b>-fold approximate symmetry. 
Show that 1, <b>n</b>, <b>n^2</b>, <b>n^3</b>, ... produces <b>(n - 1)</b>-fold
symmetry. In what sense does an ordinary clock mechanism have 11-fold
symmetry? [A]
</li><li> <b>[D]</b> Generalize the exact symmetry rule for <span class='textsc'>duopoly</span>s (exercise 5
above) to a corresponding rule for <span class='textsc'>multipoly</span>s.
</li><li> Find <span class='textsc'>multipoly</span>s with 3-, 4-, 5-, and 7-fold approximate symmetry.
</li><li> <b>[D]</b> All of our symmetry considerations have been about rotational
symmetry. There is another kind of symmetry, called bilateral symmetry. Bilaterally symmetric figures have a symmetry reflection through
an axis. (Figures 3.7a, b, and d are clearly bilaterally symmetric. Are
3.7c, e, and f?) When is <span class='textsc'>duopoly</span> exactly bilaterally symmetric? Approximately bilaterally symmetric? What is the axis of symmetry? (It's not
always the initial heading!) [HA]
</li><li> <b>[P]</b> Write and explore a <span class='textsc'>duopoly</span> (or <span class='textsc'>multipoly</span>) program that adds
the vectors from one iteration of the <span class='textsc'>repeat</span> loop and then just moves
according to that sum vector. This can be accomplished by inserting at
the beginning of the loop a step called <span class='textsc'>startvector</span>, which puts the pen
up and remembers the turtle's current position, and a step at the end
of the loop called <span class='textsc'>endvector</span>, which notes the final position and then
A draws the line from initial position to final. Study properties of figures
drawn by this program.
</li><li> <b>[P]</b> Study the behavior of parametrized classes of <span class='textsc'>multipoly</span>s.
For example, what happens to <span class='textsc'>duopoly</span> (<b>k x A1</b> , <b>S1</b>, <b>k x A2</b>, <b>S2</b>) or
<span class='textsc'>duopoly</span> (<b>A1</b>, <b>k x S</b>, <b>A2</b>, <b>(1 - k) x S</b>) or <span class='textsc'>duopoly</span> (<b>k x A1</b>, <b>k x S1</b>,
<b>k x A2</b>, <b>k x S2</b>) as k varies? Pay particular attention to critical values
of <b>k</b> such as positive or negative <b>k</b> near zero, <b>k = 1</b>, <b>k</b> large, etc. Invent
your own parametrized classes with interesting behavior.
</li><li> <b>[P]</b> A ``multi-looping program'' is one that interleaves (in the sense of
<span class='textsc'>multipoly</span>) any number of looping programs. (Looping programs were
discussed in section 1.3.) Try to formulate a general theorem that tells
how to find the symmetry of any multi-looping program.
</li><li> There is a partial converse to the vector form of the <span class='textsc'>poly</span> closing
theorem of subsection 3.1.4: Suppose that <span class='textsc'>angle</span> = 360 / n. As before, We
deiine vectors <b>\mathbf{v_k}</b> to be the initial vector <b>\mathbf{v_0}</b> rotated through (<b>k x </b> <span class='textsc'>angle</span>)
and set
<p><br>\mathbf{V}=\mathbf{v_0}+\mathbf{v_1}+\cdot \cdot \cdot+\mathbf{v_{n-1}}</p>
 We know that \textbf{V} = \textbf{0}. The converse result (which we do not prove) says
that if <b>n</b> is a prime number, then any collection of the <b>\mathbf{v_k}</b> that sums to
zero must do so by being a multiple of \textbf{V}. (Give an example to show
that this is false for nonprime <b>n</b>.) Using this converse to the theorem,
prove that any unexpectedly closed spirolateral with <span class='textsc'>angle</span> = 360 / <b>n</b> (<b>n</b>
prime) must be regular. [A]
</li><li> Show that if there is a regular unexpectedly closed spirolateral with
<span class='textsc'>angle</span> = 360/<b>n</b>, then <b>n</b> divides <span class='textsc'>max</span> <b>x (</b><span class='textsc'>max</span><b> + 1)/2</b>.  
</li><li> <b>[D]</b> Show that if <b>n</b> is even there are no regular unexpectedly closed
spirolaterals with <span class='textsc'>angle</span> <b>= 360 / n</b>.  
</li><li> For <b>n</b> an odd integer, show that we get a regular unexpectedly
closed spirolateral by taking <span class='textsc'>angle</span> = 360/<b>n</b>, <span class='textsc'>max</span> = <b>n^2</b>, and <span class='textsc'>list</span> = [<b>n</b> <b>2n</b> <b>3n</b> ... <b>n^2</b>].
</li><li> With <span class='textsc'>angle</span> = 360/<b>n</b>, <b>n</b> odd, show that we get another regular
unexpectedly closed spirolateral by taking <span class='textsc'>max</span> = <b>n^2</b> - 1 and <span class='textsc'>list</span> = [<b>n-1</b> <b>2n-1</b> <b>3n-1</b> <b>n^2-1</b>].
</li><li> <b>[P]</b> Write a computer program to do a ``brute force'' search for
unexpectedly closed spirolaterals. Given values for <span class='textsc'>angle</span> and <span class='textsc'>max</span>, the
program should test all possible values for <span class='textsc'>list</span> and record which ones
give basic loops that are closed. Can you think of ways to increase the
efiiciency of this program?
</li><li> <b>[P]</b> Write a program that uses the slot method to search for regular
unexpectedly closed spirolaterals. Can you make this search any more
efficient than the ``brute force'' search of the previous exercise?
</li><li> Show that, for <span class='textsc'>angle</span> = <b>360 x p/ q</b> where <b>p</b> and <b>q</b> have no common
factors, <b>2^{k} x</b><span class='textsc'>angle</span><b>=</b><span class='textsc'>angle</span> (mod 360) if and only if <b>2^kp : p</b> (mod <b>q</b>). [A]
</li><li> Prove that if <b>q</b> is odd there is an integer <b>k</b> for which <b>2^k = 1</b> (mod <b>q</b>).
[H]
</li><li> Prove that the heading change for the basic loop in the <span class='textsc'>gospel</span>
program with <b>A = 360 x p/q</b> (<b>q</b> odd) must be a multiple of 360.  
</li><li> Verify that if <b>A = 360/9</b> and <b>\mathbf{v_k} = R_{kA}(\mathbf{v_0})</b>, then
<b>\mathbf{v_1} + \mathbf{v_3} + \mathbf{v_7} + \mathbf{v_6} + \mathbf{v_4} + \mathbf{v_0} = \mathbf{0}</b>  
</li><li> Show that if <b>p</b> is a prime (<b>p <br\>ot=  2</b>) the order of 2 modulo <b>p</b> is at most
<b>p - 1</b>. Use this to prove that if <span class='textsc'>angle</span> = <b>360/p</b> the resulting <span class='textsc'>gospel</span>
figure is never closed.  
</li><li> <b>[D]</b> Let <b>p</b> be a prime, <b>n</b> an integer <b>></b> 1, and <span class='textsc'>angle</span> = <b>360/p^n</b>.
Show that the resulting <span class='textsc'>gospel</span> figure is closed whenever the following
condition is satisfied: For every positive integer <b>r</b>, <b>2^r + p</b> is congruent
modulo <b>p^n</b> to a power of 2.

</br></br>

<div class='figure'>
<img src='images/figures/fig3-13.png'/>
<div class='caption'>Any vector can be decomposed as <b>\mathbf{v</div> = a\mathbf{e_l} + b\mathbf{e_2}</b>.}
</div>

</br></br>

</li><li> <b>[DDP]</b> Schroeppel claims that a complete solution to the <span class='textsc'>gospel</span>
problem is that the figure will be closed for <span class='textsc'>angle</span> = <b>360 x p/q</b> where
<b>p/q</b> is a fraction reduced to lowest terms if and only if, for every prime <b>s</b>
dividing <b>q</b>, <b>s^2</b> also divides <b>q</b>; and none of the primes dividing <b>q</b> have the
``exceptional property'' that <b>2^{s-1} = 1</b> (mod 2). Can you prove or
disprove this claim? Write a computer program to find some ``exceptional
primes.''
</li><li> <b>[DP]</b> Consider variations on <span class='textsc'>gospel</span>; for example, where <span class='textsc'>angle</span> is
multiplied by 3 each time or by an arbitrary fixed amount each time.
How does this change the analysis of the program?
</ul>

</br></br>

<h3>Coordinates for Vectors</h3>

</br></br>

So far we have dealt with the vectors as arrows having fixed direction
and length. Sooner or later, however, we will want to manipulate vectors
using the computer. This means we will have to represent vectors in
terms of numbers and ordinary arithmetic operations.

</br></br>

Perhaps the most straightforward approach is to represent each vector
by the pair of numbers giving direction and length. We have already used
this method in the <span class='textsc'>vector</span> command, which was part of the <span class='textsc'>duopoly</span> and
<span class='textsc'>multipoly</span> programs. But the calculation needed if we are to add vectors
and express the result in the same format is diiiicult, and translating
from vectors to numbers in this way is not much help. 

</br></br>

Fortunately there is a better way. We saw in subsection 3.1.1 that
vector addition and scalar multiplication allow us to construct new
vectors from old ones. But you may not have noticed at that time that, if
we start with any two vectors that are not scalar multiples of each other,
every vector can be expressed as a sum of scalar multiples of these two.
Figure 3.13 shows a general vector expressed in this way. So if we use
a pair of reference vectors, say <b>\mathbf{e_1}</b> and <b>\mathbf{e_2}</b>, we can decompose any vector
<b>\mathbf{v}</b> as a sum <b>v = a\mathbf{e_l} + b\mathbf{e_2}</b> for some appropriate numbers <b>a</b> and <b>b</b>. The
reference pair <b>\mathbf{e_1}</b>,<b>\mathbf{e_2}</b> is called a <em>basis</em>, and the parts of the decomposition
<b>c\mathbf{e_1}</b> and <b>b\mathbf{e_2}</b> are called the components of <b>\mathbf{v}</b>. The numbers <b>a</b> and <b>b</b> are
called the coordinates of \textbf{v}. (Sometimes <b>a</b> and <b>b</b> are themselves referred
to as components.) We can create a correspondence between vectors and
pairs of numbers as follows:

</br></br>

\textbf{v} corresponds to the pair (<b>a</b>, <b>b</b>) precisely when <b>\mathbf{v} = a\mathbf{e_l} + b\mathbf{e_2}</b>.

</br></br>

It is important that this correspondence is one-to-one. That is, if \textbf{v}
corresponds to (<b>a</b>, <b>b</b>) and \textbf{w} corresponds to (<b>c</b>, <b>d</b>) and if <b>\mathbf{v} = \mathbf{w}</b>, then
we are justified in concluding that <b>a = c</b> and <b>b = d</b> (see exercise
5). This simple realization allows us to translate vector equations into
numerical equations at will. It is also important to realize that the
correspondence between vectors and number pairs is defined only relative
to a basis. Each basis gives rise to a different system of coordinates.
Notice, however, a few basis-invariant relations; (0,0) is always the zero
vector \textbf{0}; (1,0) is always <b>\mathbf{e_l}</b>; (0,1) is always <b>\mathbf{e_2}</b>.

</br></br>

<h3>Vector Operations in Coordinates</h3>

</br></br>

Now let's add vectors and see how the coordinates behave. Suppose \textbf{v}
corresponds to (<b>a</b>,<b>b</b>) --- that is, <b>\mathbf{v} = a\mathbf{e_l} + b\mathbf{e_2}</b> --- and \textbf{w} corresponds to
(<b>c</b>, <b>d</b>). Then <p><br>\mathbf{v} + \mathbf{w} = a\mathbf{e_1} + b\mathbf{e_2} + c\mathbf{e_1} + d\mathbf{e_2} = (a+c)\mathbf{e_1}+(b+d)\mathbf{e_2}</p> Thus, <b>\mathbf{v}+\mathbf{w}</b> corresponds to (<b>a+c</b>, <b>b+d</b>). What could be simpler! Adding
vectors is equivalent to adding corresponding coordinates. Furthermore,
scalar multiplication by a number <b>K</b> is equivalent to multiplying both
coordinates by <b>K</b>.

</br></br>

To teach our computer to manipulate vectors we need only represent
vectors as pairs of numbers (coordinates relative to a basis) and define
the procedures <span class='textsc'>add</span>, which takes as inputs two pairs of numbers, and
<span class='textsc'>multiply</span>, which takes as inputs a number and a pair:

</br></br>

<div class='inline-editor turtle-code'>
TO ADD ([A B], [C D])
   RETURN [ (A+C) (B+D)]

</br></br>

TO MULTIPLY (K, [A B])
   RETURN [K*A K*B]
</div><br\><br\>
(For simplicity, we'll pretend that the computer is smart enough to know

</br></br>

<div class='figure'>
<img src='images/figures/fig3-14.png'/>
<div class='caption'>(a) Cartesian coordinates and the standard basis for vector coordinates. (b) The length of a vector <b>\mathbf{v</div> = (\mathbf{v_x}, \mathbf{v_y})</b> is given by <b>|\mathbf{v}|^2 = \mathbf{v_x^2} + \mathbf{v_y^2}</b>}
</div>

</br></br>

that <b>+</b> is the symbol for ``<span class='textsc'>add</span>,'' so that it will now know how to interpret
expressions like ``[1 2]+[2 3]'' or ``<b>\mathbf{V} + \mathbf{W}</b>'' where <b>\mathbf{V}</b> and <b>\mathbf{W}</b> have been
defined as pairs of numbers. Similarly, the definition of <span class='textsc'>multiply</span> should
tell the computer how to interpret expressions like <b>4 * [5 6]</b> and <b>4 * \mathbf{V}</b>.
And knowing both how to add and how to multiply should tell it how to
subtract using the rule <b>\mathbf{V} - \mathbf{W} = \mathbf{V} + (-1) x \mathbf{W}</b>. Of course, most computer
languages are not this clever, so in practice you will need to spell things
out a bit more.)

</br></br>

Although we can use any basis for our vector coordinates, it is convenient to specify 
a pair of reference vectors whose lengths are 1 (unit length) and whose directions are 
perpendicular to each other. The standard choice is to use a horizontal vector \textbf{x} and a vertical vector \textbf{y}, and
to name the coordinates of a vector \textbf{v} by (<b>v_x</b>,<b>v_y</b>). In that way the 
vector coordinates are precisely the same as the Cartesian coordinates of
the tip of the vector, provided the tail is put at the Cartesian point
(0,0) (see figure 3.14a). Another advantage of the \textbf{x}, \textbf{y} basis is that the
length of a vector \textbf{v} is easily expressed in terms of the coordinates: If
\textbf{v} : (<b>v_x</b>,<b>v_y</b>), then the length of \textbf{v}, denoted <b>|\mathbf{v}|</b>, is equal to the square
root of <b>v_x^2 + v_y^2</b>. The proof of this formula, illustrated in figure 3.14b, is
a simple application of the Pythagorean theorem for right triangles.

</br></br>

<h4>A Note on Computer Languages and Vectors</h4>

</br></br>

Some computer languages aren't capable of handling vectors as single
entities. Even with these languages, the methods of this chapter will still
be useful; you just have to keep track of the separate vector components.

</br></br>

For example, instead of writing expressions like <b>\mathbf{Z} \leftarrow \mathbf{V} + \mathbf{W}</b> (where \textbf{Z},
\textbf{V}, and \textbf{W} are pairs of numbers) or <b>[ZX ZY] \leftarrow [VX VY] + [WX WY]</b>, you
could use a pair of instructions:

</br></br>

<div class='inline-editor turtle-code'>
ZX <- VX + WX
ZY <- VY + WY
</div><br\><br\>
But this is not as good as being able to deal with vectors as vectors. After
all, one of the reasons for regarding vectors as conceptual entities in
their own right is that they capture the geometric intuition of displace
ment, which is obscured if we constantly have to deal with components
separately. So if our computer language is to be a good vehicle for thinking about problems (rather than just some way of getting a machine to
do computations), then it helps to be able to deal with vectors directly.
Some computer languages (such as APL) have vector operations built in
so that it is not necessary to deiine them explicitly.

</br></br>

<h3>Rotation in Coordinates: The Linearity Principle</h3>

</br></br>

Now that we have seen that vector addition and scalar multiplication
are very simple when expressed in terms of coordinates with respect to a
basis, let's look at a more complex operation: rotation of vectors, which
we introduced in subsection 3.1.3. Rotation is trivial if we use direction
and length to represent a vector; the direction merely gets increased or
decreased and the length is unchanged. So let's hope that computing
rotations in basis coordinates is sufliciently simple that the advantage
of easy vector addition will not be offset. That hope turns out to be
more than justified, since when we tackle the problem of rotating in
three-dimensional space (section 3.4) we will see that direction-length
representation becomes hopelessly complex but computing with basis
coordinates still works nicely.

</br></br>

In solving the rotation problem, we take an indirect but instructive approach. Rather than computing the coordinates of Rotate(\textbf{v}, <b>A</b>) directly
in terms of the coordinates of \textbf{v}, we will instead look for an intrinsic intermediate representation that makes no reference to a particular choice
of coordinates. Phrasing things in such terms will be simpler and more
general; it will be the key to computing rotations in three dimensions,
as we shall see in section 3.4.

</br></br>

<div class='figure'>
<img src='images/figures/fig3-15.png'/>
<div class='caption'>The rotation formula Rotate<b>(\mathbf{v</div>, A) = (\cos A)\mathbf{v} + (\sin A)</b>Perp<b>(\mathbf{v})</b>}
</div>

</br></br>

One trick that often helps in solving vector problems is to construct
a basis from vectors that have some intrinsic relation to the quantities
involved in the problem and to decompose the vector we wish to compute
in terms of this basis. In this case \textbf{v}, the vector to be rotated, is
an obvious choice for one of the basis vectors. As a mate we can take
Perp(\textbf{v}), which we define to be equal to \textbf{v} rotated 90&deg; (in the direction
of Rotate). Thus, we propose the decomposition
Rotate(\textbf{v}, <b>A</b>) = <b>a\mathbf{v}</b> + <b>b</b>Perp(\textbf{v})
and try to solve for the quantities <b>a</b> and <b>b</b>. But these quantities are the
proportions of the rotated vector which project, respectively, parallel
and perpendicular to the original vector. As shown in figure 3.15, these
are by definition precisely the cosine and the sine of the rotation angle
A. Therefore, we have the rotation formula
<p><br>\operatorname{Rotate}(\mathbf{v}, A) = (\cos A)\mathbf{v} + (\sin A)\operatorname{Perp}(\mathbf{v})</p> As a computer procedure which takes as inputs a vector (a pair of
numbers) and an angle, this is

</br></br>

<div class='inline-editor turtle-code'>
TO ROTATE (V, A)
  RETURN COS (A) * V + SIN(A) * PERP(V)
</div><br\><br\>
This rotation computation requires only the operations of vector addition and scalar multiplication, which we already know how to perform
using coordinates, and the new operation Perp. So the rotation problem
will be completely solved if we discover how to compute the coordinates
of Perp(\textbf{v}). We'll do this by using another important concept from section 3.1.3: linearity. Since Perp is a special case of rotation, it has the
two properties which define linearity-scaling and additivity-and we
can use those properties in computing with it:
<p><br>\operatorname{Perp}(\mathbf{v}) = \operatorname{Perp}(v_x\mathbf{x} + v_y\mathbf{y}) = v_x\operatorname{Perp}(\mathbf{x}) + v_y\operatorname{Perp}(\mathbf{y})</p> So we can express Perp(\textbf{v}) in terms of Perp applied to the basis vectors
\textbf{x} and \textbf{y}. And it is easy to see that Perp(\textbf{x}) and Perp(\textbf{y}) are just
\textbf{y} and -\textbf{x}, respectively. In net we have
<p><br>\operatorname{Perp}(\mathbf{v}) = v_z\operatorname{Perp}(\mathbf{x}) + v_y\operatorname{Perp}(\mathbf{y})= v_x\mathbf{y} + v_y(-\mathbf{x})= (-v_y)\mathbf{x} + v_x\textbf{y}</p>
 which in coordinates means <p><br>\operatorname{Perp}(v_x, v_y) = (-v_y, v_x)</p>

</br></br>

As a computer procedure this is expressed as

</br></br>

<div class='inline-editor turtle-code'>
TO PERP [VX VY]
  RETURN [-VY VX]
</div><br\><br\>
which completes the reduction of rotation to operations the computer
can perform.

</br></br>

It's worth a moment to reflect on the particular use of linearity here, as
it expresses the important general compatibility of linear operations with
basis coordinatization. By taking advantage of scaling and additivity, we
reduced the problem of computing Perp(\textbf{v}) to the much simpler problem
of computing Perp for the basis vectors \textbf{x} and \textbf{y}. This reduction to
special cases is important enough to warrant a special name: the linearity
principle.

</br></br>

<br\><b>Linearity Principle</b> If L is a linear vector operation and we know how L
acts on some basis <b>\mathbf{e_l}</b> and <b>\mathbf{e_2}</b>, then we can compute L(\textbf{v}) for any vector
\textbf{v} by expressing \textbf{v} in terms of the basis. More precisely,
<p><br>\operatorname{If} \mathbf{v} = a\mathbf{e_l} + b\mathbf{e_2} \operatorname{then} \operatorname{L}(v) = a\operatorname{L}(\mathbf{e_1}) + b\operatorname{L}(\mathbf{e_2})</p>

</br></br>

Let's rephrase this principle. Expressing a vector in terms of a basis is
a way of decomposing the vector into two pieces (an <b>\mathbf{e_1}</b> and an <b>\mathbf{e_2}</b> piece),
and linear operations are ``compatible'' with this kind of decomposition.
Compatible really means that in applying a linear operation, one can
work with the pieces separately. Another way to say this is that linear
situations are those in which it really is true that ``the whole is equal
to the sum of the parts.'' Linearity is a technical form of the kind of
assumption that allows complex problems to be broken into pieces that
can be worked on independently.

</br></br>

\subsubsection {Exercises for Section \thesection}

</br></br>

<ul>
</li><li> Using the coordinate equations we derived, verify that Perp and
Rotate are linear. Suppose we define the operation L by <b>\operatorname{L}(\mathbf{v}) = |\mathbf{v}|</b> (the
length of \textbf{v}). Show that L satisfies scaling but not additivity.
</li><li> Using the rotation formula in coordinates, give an algebraic proof of
the ``obvious'' final step to the proof of the vector <span class='textsc'>poly</span> closing theorem
of subsection 3.1.3. That is, show that if <b>R_A(\mathbf{V}) = \mathbf{V}</b> for some <b>A</b> which
is not a multiple of 360, then <b>\mathbf{V} = \mathbf{0}</b>. [A]
</li><li> Use the vector form of the <span class='textsc'>poly</span> closing theorem to deduce that if
<b>A = 360 / n</b> where <b>n</b> is a positive integer, then
<p><br>\sin A + \sin 2A + \cdot \cdot \cdot + \sin (n - 1) A = 0</p>
<p><br>\cos A + \cos 2A + \cdot \cdot \cdot + \cos (n- 1) A =  -1</p>
Use the computer to check these equations numerically for various values
of 11. [A]
</li><li> Show how to translate between the (<b>v_x</b>, <b>v_y</b>) and the heading-length
representations of vectors. [A]
</li><li> When can two vectors be used as a basis? In particular, given <b>\mathbf{v1} = (v_{1x}, v_{1y})</b> 
and <b>\mathbf{v2} = (v_{2x}, v_{2y})</b> (with coordinates given with respect to
the standard <b>\mathbf{x}</b>, <b>\mathbf{y}</b> basis), what are the algebraic conditions on the four
numbers <b>v_{1x}</b>, <b>v_{1y}</b>, <b>v_{2x}</b>, <b>v_{2y}</b>, which correspond to the geometric condition
``<b>\mathbf{v1}</b> and <b>\mathbf{v2}</b> do not point along the same line.'' Show that if <b>v_{1x}</b>, <b>v_{1y}</b>, <b>v_{2x}</b>,
and <b>v_{2y}</b> satisfy this condition, then <b>\mathbf{v_1}</b> and <b>\mathbf{v_2}</b> actually are a basis. That
is, show that for every vector \textbf{v} there is exactly one pair of numbers <b>(a, b)</b>
with  <b>\mathbf{v} = a\mathbf{v_1} + b\mathbf{v_2}</b>. [HA]
</li><li> As a particular example of the previous exercise, show how to express
the standard basis vectors x and y in the form
<p><br>\mathbf{x} = a\mathbf{v_l} + b\mathbf{v_2}</p>
<p><br>\mathbf{y} = c\mathbf{v_1} + d\mathbf{v_2}</p> That is, solve for <b>a</b>, <b>b</b>, <b>c</b>, and <b>d</b> in terms of <b>v_{1x}</b>, <b>v_{1y}</b>, <b>v_{2x}</b>, and <b>v_{2y}</b>. [A]
</li><li> When do <b>\mathbf{v1}</b> and <b>\mathbf{v2}</b> form a basis such that, if one uses the coordinates
given by the basis, one always has the relation <b>Perp(a, b) = (-b, a)</b>?
Answer in terms of algebraic conditions on <b>v_{1x}</b>, <b>v_{1y}</b>, <b>v_{2x}</b>, <b>v_{2y}</b>, and also
in terms of geometric conditions on <b>\mathbf{v_1}</b> and <b>\mathbf{v_2}</b>. [HA]
</li><li> Show that <span class='textsc'>duopoly (a, b, c, -b)</span> draws an ellipse when <b>A</b>, <b>B</b>, and
<b>C</b> are small.  
</ul>

</br></br>

<h3>Implementing Turtle Vector Graphics on a Computer</h3>

</br></br>

In the first part of this chapter we got acquainted with vectors primarily
as a language for analysis. Now that we have an important set of vector
operations implemented on the computer, we are in a position to build
computer representations of complex geometric phenomena. We can
even construct and explore worlds beyond planar turtle geometry.
We'll begin by using vectors to implement the most important features
of an ordinary planar turtle. This will form a basis for constructing a
turtle that moves in three dimensions.

</br></br>

<h3>Turtle State</h3>

</br></br>

We said in chapter 1 that the state of a turtle is specified by giving the
turtle's position and heading. Once we decide how to represent those
in terms of vectors we will need to represent the state-change operators,
<span class='textsc'>forward</span>, <span class='textsc'>back</span>, <span class='textsc'>left</span>, and <span class='textsc'>right</span>, in terms of basic vector operations.
Although we have used vectors so far only to represent displacements,
there is an obvious way to represent positions with them. Simply select
some fixed reference point (call it the origin) and represent an arbitrary
position by the vector that points from the origin to the point of interest.
This is like telling someone where something is by saying how to get
there from some agreed reference point. Since what we're interested in
is getting lines to appear on a computer display, it's only natural to
choose the origin to be the (0,0) point on the display. We'll call the
position vector \textbf{P}. Furthermore, we can choose the size and orientation
of the basis vectors \textbf{x} and \textbf{y} so that the coordinates (<b>v_x, v_y</b>) of any vector
v are precisely the Cartesian <b>x</b> and <b>y</b> coordinates of the corresponding
point on the display screen.

</br></br>

Besides representing positions, we must also have some way to get
lines to appear on the screen. To accomplish this, we'll assume that our
computer graphics system is equipped with a display command <span class='textsc'>drawline([startx, starty] , [endx, endy])</span> 
 which takes as input two Cartesian coordinate pairs and draws a line
between the specified points. Most graphics systems include this command, or something similar.

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-16.png'/><br\><div class='caption'>Position and heading vectors for a planar turtle</div><br\></div>

</br></br>

Now how about heading? You've probably been thinking of turtle
heading as an angle, but there is a very direct way to specify heading as
a vector: Simply take any vector that points in the direction the turtle
is pointing. To standardize matters we'll use the vector of length 1, and
we'll call this \textbf{H}.

</br></br>

So there we have it: Turtle state is specified by \textbf{P}, which can be an
arbitrary vector, and \textbf{H}, which can be an arbitrary vector of length 1.
Next we must specify how the state-change operators change \textbf{P} and \textbf{H}.

</br></br>

<h3>State-Change Operators</h3>

</br></br>

As shown in figure 3.16, going forward some distance d displaces the
turtle's position along a vector of length d which points in the heading
direction. That is, the displacement vector is <b>d x \mathbf{H}</b>. The new position is
<b>\mathbf{P} + d\mathbf{H}</b>. Of course, <span class='textsc'>forward</span> doesn't change \textbf{H} at all. Besides changing
the turtle's state, <span class='textsc'>forward</span> must also draw a line on the display screen,
if the pen is down. We haven't mentioned details about how to keep
track of the pen. We'll leave it to you to outline a more complete
turtle implementation that takes care of this and other matters. See
the exercises at the end of this section.

</br></br>

<span class='textsc'>left</span> and <span class='textsc'>right</span> are even easier than <span class='textsc'>forward</span>, as they just rotate the
heading vector and do nothing else; <span class='textsc'>h</span> <b>\leftarrow</b> <span class='textsc'>rotate</span> (<span class='textsc'>h</span>, <span class='textsc'>angle</span>).

</br></br>

<h4>Summary: A Vector-Based Turtle Implementation</h4>

</br></br>

Here in capsule form are the state and state-change operators for a turtle,
expressed in terms of vectors. See the exercises below for details needed
in actually implementing a turtle.

</br></br>

<h4>Turtle State</h4>
The turtle's state is represented by two vectors, \textbf{P} and \textbf{H}. By convention,
\textbf{H} is always a vector of length 1.

</br></br>

<h4>State-Change Operators</h4>

</br></br>

<div class='inline-editor turtle-code'>
TO FORWARD DISTANCE
   NEW.P <- P + (DISTANCE * H)
   IF PEN.IS.DOWN THEN DRAWLINE (P, NEW.P)
   P <- NEW.P

</br></br>

TO BACK DISTANCE
   FORWARD (- DISTANCE)

</br></br>

TO LEFT ANGLE
   H <- ROTATE(H, ANGLE)

</br></br>

TO RIGHT ANGLE
   LEFT (- ANGLE)
</div><br\><br\>
<h4>Subprocedures Used in Computing Rotations</h4>

</br></br>

<div class='inline-editor turtle-code'>
TO ROTATE (VECTOR, ANGLE)
   RETURN COS (ANGLE) * VECTOR + SIN(ANGLE) * PERP(VECTOR)

</br></br>

TO PERP [VX VY]
   RETURN [ -VY VX]

</br></br>

; Basic Vector Operations

</br></br>

TO ADD ([A B], C D])
   RETURN [(A + C) (C + D)]

</br></br>

TO MULTIPLY (N, [A B])
   RETURN [N*A N*B]
</div><br\><br\>
<h4>Exercises for Section \thesection</h4>

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-17.png'/><br\><div class='caption'>Specification of triangular turtle indicator</div><br\></div>

</br></br>

The exercises below are concerned with fleshing out the details of the
vector turtle implementation. Doing them will help prepare for 
programing nonplanar turtles, which is to come.

</br></br>

<ul>
</li><li> <b>[P]</b> Show how to keep track of the turtle's pen using the <span class='textsc'>pen</span><span class='textsc'>.is</span><span class='textsc'>.down</span>
variable, which is checked by the <span class='textsc'>forward</span> procedure. Give procedures
for <span class='textsc'>penup</span> and <span class='textsc'>pendown</span>.
</li><li> <b>[P]</b> We ignored the problem of actually drawing the little triangular turtle indicator. This involves erasing and redrawing the indicator
each time we change the turtle's state. To keep things simple, suppose
there is an <span class='textsc'>eraseline</span> command that takes inputs as <span class='textsc'>drawline</span> does
and erases the specified line. Suppose the turtle is specified as an isosceles triangle of a given <span class='textsc'>turtle</span><span class='textsc'>.width</span> and <span class='textsc'>turtle</span><span class='textsc'>.height</span> (see figure
3.17). Show how to compute the three vertices of the turtle triangle
(which we can call, say, <span class='textsc'>nose</span>, <span class='textsc'>left.leg</span>, and <span class='textsc'>right.leg</span> in terms of
<span class='textsc'>turtle</span><span class='textsc'>.width</span>, <span class='textsc'>turtle</span><span class='textsc'>.height</span>, <b>P</b>, and <b>H</b>. Use this to implement procedures <span class='textsc'>drawturtle</span> and <span class='textsc'>eraseturtle</span> which are used by <span class='textsc'>forward</span> and
<span class='textsc'>left</span> to redraw the turtle indicator.  
</li><li> <b>[P]</b> Add to your implementation the procedures for <span class='textsc'>xcor</span> and <span class='textsc'>ycor</span>,
which output the (<b>x</b>, <b>y</b>) coordinates of the turtle, and <span class='textsc'>heading</span>, which
gives the angle of <b>H</b> with respect to some fixed direction.
</ul>

</br></br>

<h3>Maneuvering a Three-Dimensional Turtle</h3>

</br></br>

We (and the turtle) now proceed into new, three-dimensional territory.
If you like, you can now begin to think of the turtle as a spaceship that
moves freely in space, leaving an indication of its trail. Maneuvering the
turtle in three dimensions is the most substantial project we've discussed
so far. It contains two main parts: deciding how to move the turtle and
deciding how to display the three-dimensional path on a two-dimensional
screen. We'll treat the first of these problems here and the second in
section 3.5. Vectors play a central role in both parts of the project.
First of all, we will need three-dimensional vectors to represent threedimensional space. Conceptually this is no problem at all; a vector is still
an arrow with a certain length and with a certain direction representing
a displacement. In terms of coordinates we simply need to add a third
vector to the \textbf{x}, \textbf{y} basis. Call it \textbf{z}, and for convenience make it of length
1 (unit length) and perpendicular to both \textbf{x} and \textbf{y}. The correspondence
between vectors and coordinates is now
 \textbf{v} corresponds to (<b>v_x</b>, <b>v_y</b>, <b>v_z</b>) provided <b>\mathbf{v} = v_x\mathbf{x} + v_y\mathbf{y} + v_z\mathbf{z}</b>.

</br></br>

Vector addition and scalar multiplication still follow the same patterns:
addition and multiplication of each component, respectively.

</br></br>

As in two dimensions, position can still be specified by a vector which
we will call \textbf{P}, running from the origin (0,0,0) to the turtle's position.
Heading can still be a vector with length 1 which we'll call \textbf{H}, and
<span class='textsc'>forward</span> is still
<p><br>P \leftarrow P + DISTANCE x H</p> Now we are done with <span class='textsc'>forward</span>.

</br></br>

<h3>Rotating the Turtle</h3>

</br></br>

Although the <span class='textsc'>forward</span> command in three dimensions is a straightforward
modification of the two-dimensional version, generalizing the rotation
commands is not so simple. In fact, the problem is deeper than the
technical issue of computing rotations in three dimensions: We must
decide which three-dimensional rotation we wish to represent, which is
to say, though ``left'' has an unambiguous meaning in the plane there
are many different possibilities in three-dimensional space.
The real problem is that \textbf{H} by itself is insufficient to specify the
orientation of the turtle, as it only tells which way the turtle's nose is
pointing.

</br></br>

<div class='figure'>
<img src='images/figures/fig3-18.png'/>
<div class='caption'>Turtles in three dimensions need an extra vector, \textbf{L</div>, to specify the plane in which to rotate}
</div>

</br></br>


Two turtles with the same \textbf{H} can rotate ``<span class='textsc'>left</span>'' in different directions (see
figure 3.18). To solve the ambiguity we can add to the turtle's state a new
unit-length vector \textbf{L} which is perpendicular to \textbf{H}. We can interpret \textbf{L} as
pointing to the turtle's left. Now <span class='textsc'>left</span> can be geometrically specified as
a rotation of both \textbf{H} and \textbf{L} in the plane containing them (see figure 3.18).
Here we are rotating three-dimensional vectors through an arbitrary
angle in some arbitrary plane. Surely that seems like a terribly difficult
computation. But no, it is simple! The reason is this: When we discussed
two-dimensional rotations, we wrote down the answer in intrinsic terms.

</br></br>

Recall the rotation formula of subsection 3.2.2:
<p><br>\operatorname{Rotate}(v,A) = (cos A)v + (sin A)\operatorname{Perp}(v)</p>
 Now, Perp(\textbf{H}) is \textbf{L}. Therefore we have
<p><br>\operatorname{Rotate}(\mathbf{H}, A) = (cos A)\mathbf{H} + (sin A)\mathbf{L}</p>
 And Perp(\textbf{L}) is <b>-\mathbf{H}</b>, so
<p><br>\operatorname{Rotate}(\mathbf{L},A) : (cos A)\mathbf{L} - (sin A)\mathbf{H}</p>
 Does that seem too simple? By writing down the rotation of a twodimensional vector in intrinsic form, we automatically have a completely
general formula for rotating any vector through any angle about any axis
(perpendicular to the vector) in any dimensional space, provided only
that the perpendicular vector is known. Such reasoning is extremely
important and is worth thinking through. So let's run through the
argument again, slowly.

</br></br>

Consider the plane that contains both \textbf{H} and \textbf{L}. We must rotate \textbf{H} and
\textbf{L} inside that plane by some angle <b>A</b>. But forget about the rest of the
three-dimensional world outside the plane --- it is entirely irrelevant to the
rotation operation. In a plane, however, we have solved the problem of
rotating a pair of perpendicular vectors. All that remains to be done is
the translation back to three dimensions. And that is easy, provided we
have been prudent enough to express the answer in a form that makes
no commitment to using a coordinate system that is restricted to the
plane. The rotation formula makes no commitment to any coordinate
system at all. Merely regarding
<p><br>\operatorname{Rotate}(v, A) = (\cos A)v + (\sin A)\operatorname{Perp}(v)</p>
 as a vector equation in three dimensions solves the problem of translating from the planar case to three dimensions.

</br></br>

If the fundamental vector operations on your computer accept (or can
be modified to accept) vectors with three components, then the rotation
equation readily translates into the program

</br></br>

<div class='inline-editor turtle-code'>
TO ROTATE (VECTOR, PERPVECTOR, ANGLE)
   RETURN (COS ANGLE) * VECTOR + (SIN ANGLE) * PERPVECTOR
</div><br\><br\>
Notice that the perpendicular to the vector must be supplied as an
input, since the rotation is not well defined without it. In fact, the only
differences between this program and the planar rotation program of
section 3.3 is that Perp(\textbf{V}) is accessed as a variable rather than computed,
and the additions and scalar multiplications are performed on vectors
with three components rather than two.

</br></br>

In terms of coordinates, the rotation equation translates into three
component equations, which give the components of the rotated vector
(\textbf{rv}) in terms of the components of \textbf{v} and its perpendicular (\textbf{pv}):
<p><br>\mathbf{rv_x} = \mathbf{v_x} \cos A + \mathbf{pv_x} \sin A</p>
<p><br>\mathbf{rv_y} = \mathbf{v_y} \cos A + \mathbf{pv_y} \sin A</p>
<p><br>\mathbf{rv_z} = \mathbf{v_z} \cos A + \mathbf{pv_z} \sin A</p>

</br></br>

<h3>Rotation Out of the Plane</h3>

</br></br>

<div class='figure'>
<img src='images/figures/fig3-19.png'/>
<div class='caption'>The pitch operation rotates \textbf{H</div> about the axis determined by \textbf{L}. Adding \textbf{U} to the turtle's state makes the rotation easy to compute}
</div>

</br></br>

Are we done with state-change operators? If we stop here the turtle will
certainly walk around in three-dimensional space, but only in one plane:
that specified by the initial pair \textbf{H} and \textbf{L}. To gain full motion in three
dimensions we also need to be able to pitch the turtle out of that plane
by rotating about the \textbf{L} axis, and to roll it by rotating around the \textbf{H}
axis.

</br></br>

The pitch operation is illustrated in figure 3.19. \textbf{L} remains invariant,
but we must rotate \textbf{H} out of the plane of \textbf{L} and \textbf{H}. To compute this we
need have in hand a vector that is perpendicular to \textbf{H} and perpendicular
to \textbf{L} (the axis of rotation). If you are clever you should be able to
construct this vector out of H and L, but let's be even more clever: Let
us always carry along, as part of the turtle's state, a third unit-length
vector, \textbf{U} (for ``up''), perpendicular to both \textbf{H} and \textbf{L}. This will be a
slight extra burden, since we will need to rotate \textbf{U} as well as \textbf{H} when
the turtle pitches. However, such rotation will be easy because -\textbf{H} is
Perp(\textbf{U}) for that rotation.

</br></br>

So now we have a neat and symmetrical set of rotation operators to
change the turtle's orientation, represented as three mutually perpendicular vectors \textbf{H}, \textbf{L}, and \textbf{U}. In fact, we can use the parallel term <span class='textsc'>yaw</span>
instead of <span class='textsc'>left</span> so that in controlling our ``spaceship turtle'' we can
employ the standard three-dimensional navigational terms roll, pitch,
and yaw. In making any of these rotations, two of these vectors change
and the third remains fixed. For rotating one vector v of the changing
pair, the other changing vector (or its negative) serves as Perp(\textbf{v}).

</br></br>

<h3>The State-Change Operators, in Summary</h3>

</br></br>

The position of the three-dimensional turtle is represented as a three-component vector P. The orientation (the three-dimensional equivalent
of the heading part of the state) is represented by a trio of mutually
perpendicular unit-length vectors, \textbf{H}, \textbf{L}, and \textbf{U}. These can be initialized
to be the basis vectors \textbf{x}, \textbf{y}, and \textbf{z}, which in coordinates are (1,0,0),
(0, 1,0), and (0,0,1). The state-change operators are

</br></br>

<div class='inline-editor turtle-code'>
TO FORWARD DIST
   P <- P + DIST * H

</br></br>

TO YAW ANGLE
   TEMP + ROTATE (H, L, ANGLE)
   L <- ROTATE (L, -H, ANGLE)
   H <- TEMP

</br></br>

TO PITCH ANGLE
   TEMP + ROTATE (H, U, ANGLE)
   U + ROTATE (U, -H, ANGLE)
   H <- TEMP

</br></br>

TO ROLL ANGLE
   TEMP + ROTATE (L, U, ANGLE)
   U <- ROTATE (U, -L, ANGLE)
   L + TEMP

</br></br>

TO ROTATE (VECTOR, PERPVECTOR, ANGLE)
   RETURN (COS ANGLE) * VECTOR + (SIN ANGLE) * PERPVECTOR
</div><br\><br\>
Note the use of the variable <span class='textsc'>temp</span> to avoid deleting the old values of \textbf{H}
and \textbf{L} before we are done using them. If you use the rotation equation
in coordinate form you will have to be even more careful not to delete
old variables by assigning new values before you're done using the old
ones.

</br></br>

<h3>Displaying a Three-Dimensional Turtle</h3>

</br></br>

Our problem, simply put, is to make some marks on the computer
display screen that will fool us into believing that the screen is a window
looking out onto the three-dimensiona world of the turtle. Imagine we
are looking at something in space-say, a green line segment drawn by
our turtle. The mechanism of seeing is that the green light reflected by
the line segment travels in straight rays to our eye. Suppose there is
a window between us and the turtle. If we draw green marks on the
window along the line of sight between the eye and the line segment, we
can erase the real line segment and still see the same image; the rays of
green light reaching our eye will be unchanged. That's the geometrical
process we need: projecting along the line of sight onto a plane which is
going to be our computer display ``window.''

</br></br>

<h3>Parallel Projection</h3>

</br></br>

Actually, in order to project a line segment we need only worry about
how to project the endpoints of the segment, since the projection of
the line segment is just the segment on the window connecting the
projections of the endpoints. (This can be proved by projecting a line
segment point by point using the formulas we are about to derive for
point projection.)

</br></br>

Rather than starting out with the general projection problem, it will
be to our advantage to begin with simpler and more specialized cases
and to proceed in stages toward more general and realistic but also more
complex projections. In particular, let's first imagine that the eye is far
enough from both the screen and the object being looked at that the
lines of sight from the eye to all points on the object are essentially
parallel. This is known as parallel projection. Moreover, if we assume
that the eye is looking along the z axis of our coordinate system, then we
can imagine the window to be the x,y plane. With these assumptions,
projection amounts simply to sliding a point parallel to the z axis until
the z coordinate is zero, but with x and y remaining the same (see figure
3.20). This is equivalent to ``losing'' the z component of the vector-basis
decomposition of the position. In coordinates we have
<p><br>(\operatorname{display}_x, \operatorname{display}_y) = \operatorname{Project}(v_x, v_y, v_z) = (v_x, v_y)</p>
For many purposes this trivial projection is quite sufficient. But
suppose we want to move the eye around to look at the turtle's drawing
from other perspectives. Consider first a window, still centered at the
origin of our coordinate system, but pitched, rolled, and yawed with
respect to the standard \textbf{x}, \textbf{y}, \textbf{z} basis as shown in figure 3.21a. This is
equivalent to having three new (but still mutually perpendicular and
unit-length) basis elements, which we call <b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, and <b>\mathbf{e_z}</b> (e for ``eye'').
In fact, we could produce these vectors by pitching, rolling, and yawing
\textbf{x}, \textbf{y}, and \textbf{z} in exactly the same way we operated on the turtle's \textbf{H}, \textbf{L},
and \textbf{U}.

</br></br>

<div class='figure'>
<img src='images/figures/fig3-20.png'/>
<div class='caption'>Simple parallel projection amounts to ``losing'' the \textbf{z</div> component at each point}
</div>

</br></br>

<div class='figure'>
<img src='images/figures/fig3-21.png'/>
<div class='caption'>(a) Projection onto an arbitrary plane involves finding components with respect to a new basis. (b) The <b>\mathbf{e_x</div></b> component of \textbf{v} is found by projecting \textbf{v} onto the line determined by <b>\mathbf{e_x}</b>.}
</div>

</br></br>

In order to solve this new projection problem we need to find the as and
coordinates of the point we want to project, but now with respect to
the new basis <b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b>. As you might expect, this problem of finding the
coordinates of a point in an arbitrary basis is of great general importance
and is worth a little time and energy.

</br></br>

Suppose we have <b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b> and a vector \textbf{v}, and we want to compute
as the components of \textbf{v} with respect to <b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b>. Focus on <b>\mathbf{e_x}</b>. First draw
the line continuing <b>\mathbf{e_x}</b>. Next draw a perpendicular through the line that
intersects the point of interest (the tip of \textbf{v}). The component we want is
precisely the length of the segment s from the origin to the base of the
perpendicular (iigure 3.21b). This is because the construction effects a
decomposition \textbf{v} = \textbf{s} + \textbf{p}, where \textbf{s} is a scalar multiple of <b>\mathbf{e_x}</b> and \textbf{p} is in
a plane perpendicular to ex and can thus be subsequently decomposed
into a sum of multiples of <b>\mathbf{e_y}</b> and <b>\mathbf{e_z}</b>. In other words:

</br></br>

The <b>\mathbf{e_x}</b> component of a vector \textbf{v}, that is, the value <b>a</b> in the decomposition
<p><br>v = a\mathbf{e_x} + b\mathbf{e_y} + c\mathbf{e_z}</p>
 \textbf{F} is precisely the perpendicular projection of \textbf{v} onto the line of <b>\mathbf{e_x}</b>.

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-22.png'/><br\><div class='caption'>Proj is linear</div><br\></div>

</br></br>

The <b>\mathbf{e_y}</b> and <b>\mathbf{e_z}</b> components are found similarly. So now we are led to
the problem of studying, in vector terms, the geometric operation of
projecting a vector onto a line.

</br></br>

<h3>Dot Product: Another Application of Linearity</h3>

</br></br>

Given two vectors \textbf{v} and \textbf{w}, we wish to compute the length of the
perpendicular projection of \textbf{v} onto the line determined by \textbf{w}. We denote
this length by Proj(v,w). It is natural to think of Proj(v, w) as an
operation on \textbf{v}, but one that, of course, depends on \textbf{w}. We can suppress \textbf{w}
in our notation and just write Proj(\textbf{v}) to emphasize this way of thinking
about Proj(\textbf{v}, \textbf{w}).

</br></br>

If subsection 3.2.2 is still fresh in your mind, you may be able to guess
the observation that solves the projection problem: Proj is linear! Figure
3.22 demonstrates that Proj satisties both scaling and additivity:
<p><br>\operatorname{Proj}(a\mathbf{v}) = a x \operatorname{Proj}(\mathbf{v})</p>
<p><br>\operatorname{Proj}(\mathbf{v} + \mathbf{t}) = \operatorname{Proj}(\mathbf{v}) + \operatorname{Proj}(\mathbf{t})</p> 
 From experience with the rotation operator you should expect that this
fact in itself is sufficient to allow us to compute projections in terms of
coordinates. But rather than grinding out the answer, let's try a more
insightful approach. We begin by indulging in some wishful thinking
(a much-underrated method of doing mathematics). Remember that
Proj(\textbf{v}, \textbf{w}) is an operation with two arguments, \textbf{v} and \textbf{w}. Wouldn't it be
nice if the order of the arguments didn't matter, that is, if Proj(\textbf{v}, \textbf{w})
were always equal to Proj(\textbf{w}, \textbf{v})? We now make two observations:

</br></br>

<ul>
</li><li> This relation could not be true in general, because Proj(\textbf{v}, \textbf{w}) doesn't
depend on the length of \textbf{w} yet scales as \textbf{v} is enlarged.
</li><li> If \textbf{v} and \textbf{w} happen to have the same length, then Proj (\textbf{w}, \textbf{v}) is equal to
Proj(\textbf{v}, \textbf{w}), since the diagrams for projecting \textbf{v} onto \textbf{w} and for projecting
\textbf{w} onto \textbf{v} will be symmetric.
</ul>

</br></br>

Let's go farther by causing the accident in 2. Force \textbf{v} and \textbf{w} to
have the same length by multiplying each by the length of the other to
produce <b>|\mathbf{w}|\mathbf{v}</b> and <b>|\mathbf{v}|\mathbf{w}</b>. That is, forget for the moment about Proj and
concentrate on a a new operation called Sproj, for ``scaled projection,''
defined by
<p><br>\operatorname{Sproj}(\mathbf{v},\mathbf{w}) = \operatorname{Proj}(|\mathbf{w}|\mathbf{v}, |\mathbf{v}|\mathbf{w})</p>
Now it's an easy matter to check algebraically that Proj doesn't lose its
linearity as a function of v in its metamorphosis into Sproj. Because of
the symmetry in arguments, Sproj must be linear in both arguments:
<p><br>\operatorname{Sproj}(\mathbf{v}, a\mathbf{w} + b\mathbf{t}) = a x \operatorname{Sproj}(\mathbf{v}, \mathbf{w}) + b x \operatorname{Sproj}(\mathbf{v}, \mathbf{t})</p>
<p><br>\operatorname{Sproj}(a\mathbf{v} + b\mathbf{t}, \mathbf{w}) = a x \operatorname{Sproj}(\mathbf{v},\mathbf{w}) + b x \operatorname{Sproj}(\mathbf{t}, \mathbf{w})</p>
This looks so much like multiplication of numbers that Sproj is called a
product --- a <em>dot product</em> --- and denoted
<p><br>\operatorname{Sproj}(\mathbf{v},\mathbf{w}) = \mathbf{v} \cdot \mathbf{w}</p>
Compare the properties of dot product,
<p><br>\mathbf{v} \cdot \mathbf{w} = \mathbf{w} \cdot \mathbf{v} <span class='textsc'>(symmetry)</span></p>
<p><br>\mathbf{v} \cdot (a\mathbf{w} + b\mathbf{t}) = a\mathbf{v} \cdot \mathbf{w} + b\mathbf{v} \cdot \mathbf{t} <span class='textsc'>(linearity in second variable)</span></p>
<p><br>(a\mathbf{v} + b\mathbf{t}) \cdot \mathbf{w} : a\mathbf{v} \cdot \mathbf{w} + b\mathbf{t} \cdot \mathbf{w} <span class='textsc'>(linearity in first variable)</span></p>
 to the properties of ordinary multiplication of numbers,
<p><br>xy = yx</p>
<p><br>z(ay + bz) = azy + bzx</p>
<p><br>(ax + bz)y = axy + bzy</p>
 Notice that because dot product is just mutually scaled projection, it
is exactly projection for unit-length vectors. For example, taking the
standard \textbf{x}, \textbf{y}, and \textbf{z} basis vectors, we have
<p><br>\mathbf{x} \cdot \mathbf{x}=1</p>
<p><br>\mathbf{x} \cdot \mathbf{y}=0</p>
<p><br>\mathbf{x} \cdot \mathbf{z}=0</p>
<p><br>\mathbf{y} \cdot \mathbf{y}=1</p>
<p><br>\mathbf{y} \cdot \mathbf{z}=0</p>
<p><br>\mathbf{z} \cdot \mathbf{z}=1</p>

</br></br>

Finally, we are left with the job of computing the dot product <b>\mathbf{v} \cdot \mathbf{w}</b> in
terms of coordinates. But since dot product is linear, the linearity
principle ought to reduce that computation to special cases. Those
special cases are just the dot products of all pairs of basis vectors, which
we wrote down immediately above. If you carry out the details (exercise
1 below) you'll find that dot product has the remarkably simple form
<p><br>\mathbf{v} \cdot \mathbf{w} = v_xw_x + v_yw_y + v_zw_z</p>
 Our shift in attention from Proj to dot product has led us to an operation that can be simply described in terms of coordinates. In making
the transformation we lost very little, since for unit-length vectors dot
product is absolutely identical to projection. Even if only one of the
vectors (say, \textbf{w}) has unit length, we can still interpret <b>\mathbf{v} \cdot  \mathbf{w}</b> as a projection, the projection of \textbf{v} onto \textbf{w}, because in scaling \textbf{v} by <b>|\mathbf{w}|</b> no change
is made. For arbitrary \textbf{v} and \textbf{w}, the projection can be computed as
<p><br>\operatorname{Proj}(\mathbf{v}, \mathbf{w}) = \frac{\operatorname{Sproj}(\mathbf{v}, \mathbf{w})}{|\mathbf{w}|} = \frac{\mathbf{v} \cdot \mathbf{w}}{|\mathbf{w}|} </p>

</br></br>

<h3>Parallel Projection in Coordinates; Generalizations</h3>

</br></br>

In subsection 3.5.1 we saw that the projection problem reduces to computing the components of a vector \textbf{v} with respect to an arbitrary basis
<b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b>. Dot product enables us to do the computation. For example,
suppose we want the projection of \textbf{v} onto <b>\mathbf{e_x}</b>. Since <b>\mathbf{e_x}</b> is of length 1,
that projection is exactly <b>\mathbf{e_x} \cdot \mathbf{v}</b>. In other words, the coordinates of \textbf{v} are
just the dot products of \textbf{v} with the corresponding basis vectors.
Notice how important it is that dot product is defined intrinsically in
terms of vectors. That means it is independent of the coordinate system 
used to compute it. Thus, in computing <b>\mathbf{e_x} \cdot \mathbf{v}</b>, we can use the standard
\textbf{x}, \textbf{y}, \textbf{z} basis. In a computer program, that's the only basis that would be
actually used for computation. In summary:

</br></br>

To find the projection of a point with respect to an eye whose orientation
is described by the triple <b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b>, what we use for coordinates on the
display screen are the first and second coordinates of the point in the
<b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b> basis; that is,
<p><br>(\operatorname{display}_x, \operatorname{display}_y) = <span class='textsc'> Projection of \textbf{v</span> onto }\mathbf{e_x}, \mathbf{e_y} <span class='textsc'> plane </span> = (\mathbf{e_x} \cdot \mathbf{v}, \mathbf{e_y} \cdot \mathbf{v})</p>

</br></br>

<div class='figure'>
<img src='images/figures/fig3-23.png'/>
<div class='caption'>Projecting with respect to plane centered at some arbitrary position, \textbf{e</div>}
</div>

</br></br>

A simple modification of this formula allows even more general projections. Suppose the center of the window is located at some point other
than the origin --- 
say, \textbf{e} (figure 3.23). Then we want to have <b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b> sit
at their own origin, the tip of \textbf{e}. With respect to that origin the position
vector is
<p><br>\mathbf{r} = \mathbf{v} - \mathbf{e} <span class='textsc'> (\textbf{r</span> for relative position)}</p>
 so the projection is still computed in the same way, only using \textbf{r} instead
of \textbf{v}:
<p><br>(\operatorname{display}_x, \operatorname{display}_y) = \operatorname{Project}(\textbf{v}) = (\mathbf{e_x} \cdot \mathbf{r}, \mathbf{e_y} \cdot \mathbf{r}) \operatorname{where} \mathbf{r} = \mathbf{v} - \mathbf{e}</p>
Notice in passing that we have solved the general problem of finding
coordinates of vectors with respect to a new basis and a new origin: Set
<b>\mathbf{r} = \mathbf{v} - \mathbf{e}</b> (where \textbf{e} points to the new origin from the old one), and then
just pick off the coordinates of \textbf{r} in the new basis using dot product:
(\textbf{x}, \textbf{y}, \textbf{z}) coordinates in new coordinate system = (<b>\mathbf{e_x} \cdot \mathbf{r}</b>, <b>\mathbf{e_y} \cdot \mathbf{r}</b>, <b>\mathbf{e_z} \cdot \mathbf{r}</b>).

</br></br>

<h3>Perspective Projection</h3>

</br></br>

The parallel projection we've just computed lacks some important features of real vision. It doesn't make distant objects smaller, nor does
it have ``vanishing point'' behavior. (This follows from our simplifying
assumption in 3.5.1 that the eye was located very far from both the
window and the object.) We'll now see how to be more realistic.

</br></br>

<div class='figure'>
<img src='images/figures/fig3-24.png'/>
<div class='caption'>Perspective projection of \textbf{v</div> onto the display plane}
</div>

</br></br>

Start with the eye located at the origin facing directly along the <b>z</b> axis. 
Now imagine our display window located some distance <b>L</b> down the <b>z</b>
axis and perpendicular to it (figure 3.24). In order to find the projection
of the endpoint of <b>v</b> onto the window, we need to compute (in <b>x</b> and <b>y</b>
coordinates) the vector marked \textbf{t} in the diagram. To do this, introduce
the vector \textbf{p} in the plane perpendicular to \textbf{z} going through the point to
be projected. This is just the familiar decomposition of a vector into a
\textbf{z} component and a component perpendicular to \textbf{z}, which is to say,
<p><br>\mathbf{v}=v_x\mathbf{x}+v_y\mathbf{y}+v_z\mathbf{z} = \mathbf{s} + \mathbf{p}</p>
 where
<p><br>\mathbf{s} = v_z\mathbf{z} \operatorname{and} \mathbf{p} = v_z\mathbf{x} + v_y\mathbf{y}</p>
 But note that our desired vector \textbf{t} is parallel to \textbf{p}; in fact it is just \textbf{p}
scaled by the ratio of size of similar triangles <b>L/v_z</b>:
<p><br>t = \frac{L}{v_z} x p</p>
 (The similar triangles have common vertex at \textbf{0} and sides opposite that
vertex of \textbf{t} and \textbf{p} respectively.) So, in terms of coordinates,
<p><br><span class='textsc'>Projection of </span> \mathbf{v} = (t_x, t_y) = \frac{L}{v_z} x (v_x, v_y)</p>
 That's all there is. Perspective projection in this special case is just
A picking off the <b>x</b> and <b>y</b> components of position (like parallel projection)
and then scaling by the ratio of L to the <b>z</b> component.

</br></br>

In the completely general case, let an eye be located at e with orientation given by basis <b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b> (looking along <b>\mathbf{e_z}</b> with <b>\mathbf{e_y}</b> being ``up'' and
<b>\mathbf{e_x}</b> ``to the right''). Then, with the above answer transformed to the new
origin (at \textbf{e}) and to the new basis, the display coordinates are just
<p><br>(\operatorname{display}_x, \operatorname{display}_y) = <span class='textsc'>Projection of</span> \mathbf{v} = \frac{L}{\mathbf{e_z} \cdot \mathbf{r}} x (\mathbf{e_x} \cdot \mathbf{r}, \mathbf{e_y} \cdot \mathbf{r})</p>
 where <b>\mathbf{r} = \mathbf{v} - \mathbf{e}</b>.

</br></br>

<h3>Outline of a Three-Dimensional Turtle Project</h3>

</br></br>

This subsection outlines a number of possible implementations of a
three-dimensional turtle. Pick the level of complexity at which you feel
comfortable and work out the details there. You can always upgrade
your implementation.

</br></br>

Implement the internal vector representation for a three-dimensional
turtle, including <span class='textsc'>forward</span>, <span class='textsc'>roll</span>, <span class='textsc'>pitch</span>, and <span class='textsc'>yaw</span>.

</br></br>

Implement a <span class='textsc'>project</span> procedure that takes a three-component vector
input and outputs a two-component vector for the display. Now you
can furnish the turtle with a <span class='textsc'>forward</span> operation that draws lines on the
display:

</br></br>

<div class='inline-editor turtle-code'>
TO FORWARD DIST
   P <- P + DIST * H
   IF PEN.IS.DOWN
      NEW.2D.P <- PROJECT P
      DRAWLINE (2D.P, NEW.2D.P) 
      2D.P <- NEW.2D.P
</div><br\><br\>
This format saves computation by projecting only when <span class='textsc'>pen</span><span class='textsc'>.is</span><span class='textsc'>.down</span>.
(But this means that the <span class='textsc'>pendown</span> command will have to project to
update <span class='textsc'>2d</span><span class='textsc'>.p</span> to account for moves made while the pen was up. Of
course, the simplest implementation could leave out the <span class='textsc'>penup</span> possibility
altogether.) The major decision to be made here is whether to use
parallel projection or true perspective.

</br></br>

<h4>Implement a movable eye</h4>

</br></br>

A. For either parallel projection or a true perspective projection, a
rotating eye can be an advantage. This amounts to being able to roll,
pitch, or yaw the basis <b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b>.

</br></br>

B. For either type of projection, one can move the origin around to
change point of view. The eye can be considered to be just another
turtle, with position given by some vector e and orientation by a trio <b>\mathbf{e_x}</b>,
<b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b>. So the eye can be ``flown around'' with <span class='textsc'>forward</span>, <span class='textsc'>roll</span>, <span class='textsc'>pitch</span>, and
<span class='textsc'>yaw</span> commands. For moving the eye, it may be convenient to supplement
<span class='textsc'>forward</span> (<b>\mathbf{e} \leftarrow \mathbf{e} +</b><span class='textsc'>dist</span><b>x \mathbf{e_z}</b>) with two new position-changing commands:
<span class='textsc'>jumpup</span> (<b>\mathbf{e} \leftarrow \mathbf{e} + </b><span class='textsc'>dist</span><b>x \mathbf{e_y}</b>) and <span class='textsc'>jump</span><span class='textsc'>right</span> (<b>\mathbf{e} \leftarrow \mathbf{e} + </b><span class='textsc'>dist</span><b> x \mathbf{e_x}</b>).

</br></br>

IV. Implement optional features.

</br></br>

A. Changing L amounts to ``zooming'' the lens of the eye. Implement a
zooming feature.

</br></br>

B. Some displays may not be able to deal with coordinates bigger than
some limit. The ``right thing to do,'' of course, is for <span class='textsc'>drawline</span> to display
only the portion of the line segment that is within the bounds of the
display. If you want a ``dumb'' <span class='textsc'>drawline</span> to clip off what you don't see
in this way, rather than just giving out-of-bounds errors, then you will
have to implement a procedure to clip the segment before displaying it.
We urge you to try this using vector methods. If you have a hard time,
look ahead to subsection 6.1.3.

</br></br>

C. You may have noticed that the projection formulas we derived will 
also project things from behind the eye. If you object to this, we leave
it to you to implement a fix.

</br></br>

D. Whenever the eye is moved, you will have to clear the screen and rerun
from scratch the turtle commands and programs which drew things. If
you plan on moving the eye a lot (for example, implementing a three-dimensional spaceship docking program where what you see on the
screen is a changing view of a fixed object), then this may become a
serious problem. One way to help matters is to build up a display list  
of connected sequences of three-dimensional points which gets added to
each time a <span class='textsc'>forward</span> (with the pen down) is issued. The whole list must
then be redisplayed each time the eye is told to rotate or move. You
will have a special problem if you are displaying a turtle itself, because
that part of the list must change after every turtle command rather than
only on moving the eye. One simple way to handle this is to have the
first sublist in the display list be the picture of the turtle, to be treated
specially. It must be erased and redrawn after each move.

</br></br>


E. Our outline of the project shows that, as far as internal representation
is concerned, an eye is exactly the same thing as a turtle. So why not
implement a three-dimensional system that is just a multiple turtle setup
(having no special eye at all), in which you can issue commands to any of
a number of turtles? Then you can change perspective merely by telling
the projection operation which turtle's point of view you want to take.

</br></br>

A fancy version of this system can display each turtle in a different way
(for example, one as an airplane, one as a pyramid, etc.) and will allow
you to talk to several turtles at once and thus choreograph turtle dances!

</br></br>

<h4>Exercises for Section \thesection</h4>
<ul>
</li><li> Taking advantage of the linearity in both arguments, verify the
formula for dot product in terms of coordinates.
</li><li> Compute the perpendicular projection (not mutually scaled) of one
vector onto another in terms of coordinates.  
</li><li> Prove the following special cases of dot product: <b>\mathbf{v} \cdot \mathbf{w} = \mathbf{0}</b> for any
pair of perpendicular vectors; <b>\mathbf{v} \cdot \mathbf{v} = |\mathbf{v}|^2</b>.  
</li><li> Show that <b>\mathbf{v} \cdot \mathbf{w} = |\mathbf{v}||\mathbf{w}| \cos A</b> where <b>A</b> is the angle between \textbf{v} and \textbf{w}.
Notice that this formula shows how to evaluate dot product in coordinate-independent terms.  
</li><li> Represent a triangle's sides as vectors \textbf{v}, \textbf{w}, and \textbf{t}, and, using the
above formula, derive the law of cosines:
<b>|\mathbf{t}|^2 = |\mathbf{v}|^2 + |\mathbf{w}|^2 - 2|\mathbf{v}||\mathbf{w}| \cos A</b>
where <b>A</b> is the angle opposite \textbf{t}.  

</br></br>

Try the following exercises after you have implemented a three-dimensional turtle system.

</br></br>

</li><li> <b>[P]</b> Study analogs to <span class='textsc'>poly</span> on your three-dimensional system. Should
the analog be

</br></br>

<div class='inline-editor turtle-code'>
TO POLY
   REPEAT FOREVER
      FORWARD
      ROLL 
      YAW
      PITCH
</div><br\><br\>
or
<div class='inline-editor turtle-code'>
TO POLY
   REPEAT FOREVER
      FORWARD
      ROLL
      JUMPUP
      YAW
      JUMPRIGHT
      PITCH
</div><br\><br\>
or what? Do you expect these to draw simple figures like cubes or tetrahedra? When do these close? Is there a general behavior analogous to
<span class='textsc'>poly</span> laying down equal chords of a circle?  

</br></br>

</li><li> <b>[D]</b> <span class='textsc'>poly</span>s in three dimensions often wander off to infinity. What goes
wrong with the proof that <span class='textsc'>poly</span>s are closed, which we gave in subsection
1.2.2?  
</li><li> <b>[PD]</b> Implement three-dimensional analogs to <span class='textsc'>duopoly</span> or <span class='textsc'>multipoly</span>.
To start, restrict each <span class='textsc'>poly</span> to a simple closed planar figure (<span class='textsc'>forward</span>,
<span class='textsc'>yaw</span>, <span class='textsc'>forward</span>, <span class='textsc'>yaw</span>, etc.) but put different <span class='textsc'>poly</span>s in different planes.
There are lots of options for how to do this. You may want to generate A
the set of vectors for each <span class='textsc'>poly</span> first and then just circle your way
through each set. Or keep two orientation bases around, <span class='textsc'>yaw</span>ing each in
turn and alternating \textbf{H} vectors for the increment to position in <span class='textsc'>forward</span>.
Compare figures using the same <span class='textsc'>yaw</span> angle but many different initial
orientations. Look particularly at figures where the planes of the <span class='textsc'>poly</span>s
are perpendicular. Look at figures where each <span class='textsc'>poly</span> is a circle, but where
one takes 2 or 2<b>\frac{1}{2}</b> or 3 times as many steps as the other. Some of the
most interesting planar <span class='textsc'>duopoly</span>s happen when the symmetries of the two <span class='textsc'>poly</span>s are relatively prime. Does this still hold true? Take one simple
special case, such as squares in mutually perpendicular planes (<span class='textsc'>duo</span>- or
<span class='textsc'>tri</span><span class='textsc'>-polys</span>), and do an exhaustive study of possible figures depending on
initial orientation within each plane.
</li><li> <b>[PD]</b> An interesting problem arises if we want the eye to shift its gaze
toward some specified point <b>p</b>. The <b>\mathbf{e_z}</b> vector should now point towards
<b>p</b>. But where should <b>\mathbf{e_x}</b> and <b>\mathbf{e_y}</b> be pointing? One way to settle this is
to make the ``minimal'' rotation of the <b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b> basis which moves <b>\mathbf{e_z}</b>
from its old direction to the new; that is, rotate <b>\mathbf{e_z}</b> in the plane of <b>\mathbf{e_z}</b>
and \textbf{p} toward \textbf{p}. This is a rotation about an axis perpendicular to the
<b>\mathbf{e_z}</b>, \textbf{p} plane, and we can imagine <b>\mathbf{e_x}</b> and <b>\mathbf{e_y}</b> just carried along. (Think of
the trio <b>\mathbf{e_x}</b>, <b>\mathbf{e_y}</b>, <b>\mathbf{e_z}</b> as a rigid body. Skewer it through their origin with a
line perpendicular to the plane <b>\mathbf{e_z}</b>, \textbf{p} and rotate.) Can you invent a way
to carry out this rotation with <span class='textsc'>roll</span>, <span class='textsc'>pitch</span>, and <span class='textsc'>yaw</span>, or by any other
means? Use this to implement a <span class='textsc'>lookat</span> command that turns the eye
toward a specified point. [H]
</li><li> For each view of the standard \textbf{x}, \textbf{y}, \textbf{z} basis shown in figure 3.25a, say
where the eye is located to produce that view. If this is hard for you,
practice with your three-dimensional simulator. Imagine looking down
at a square-tiled floor. Which angles appear greater than 90&deg;; which
less? For example, the edges of tiles far away may appear as in figure
3.25b.
</li><li> <b>[P]</b> Implement an airplane that can fly around, from which what
you see on the display screen is the landing strip (with mountains in the
distance) from the view of the pilot.
</li><li> <b>[P]</b> Implement a spaceship and a docking situation similar to that
of the airplane in exercise 11. Spaceship controls are different, however:
A rocket burst increments (vector) velocity by adding on a vector in
the direction the ship is pointing, a roll burst starts continuous rotation
around the ship's \textbf{H}, etc.

</br></br>

<div class='figure'><br\><img src='images/figures/fig3-25.png'/><br\><div class='caption'>(a) A basis from various points of view. (b) Square tiles viewed obliquely</div><br\></div>

</br></br>

</li><li> <b>[PDD]</b> Make a four-dimensional turtle system! There are lots of
options for projecting. Although parallel projection to two dimensions
is easiest, you may want to think of the perspective projection process
in this way: Imagine a four-dimensional turtle sitting at <b>\mathbf{0} = (0,0,0,0)</b>
looking down the <b>t</b> axis (<b>x</b>, <b>y</b>, <b>z</b>, <b>t</b> basis) through a ``three-dimensional
window'' at <b>t = L</b>. The turtle sketches on (in) the ``window'' the
object it sees, and hands this three-dimensional image to you to walk
around and look at in ordinary three-dimensional space. Suppose the
object the turtle is looking at is a four-dimensional cube. [Subproblem
1: Describe a four-dimensional cube by considering the sequence square
(two-dimensional cube), three-dimensional cube, four-dimensional cube.
Describe it in such a way that your turtle can draw it.] What do you
see when you walk around or rotate the three-dimensional image? What
do you see as the four-dimensional cube is rotated but your position
with respect to the three-dimensional image remains fixed? What can
you say about the three-dimensional ``thing'' that is the projection of
the four-dimensional cube? [Subproblem 2: Describe four-dimensional
rotations in the same way we did three-dimensional. Do things rotate
s . around lines, as in three dimensions, or around planes? Correspondingly,
will there be four fundamental rotations (one for each or the mutually
perpendicular axes) or six (one for each mutually perpendicular plane)?]
Use your simulation to help you, but try above all to get an intuitive
feel for what you will see if you rotate the cube or change your point of
view. You may wish toforget about implementing a turtle to draw the
cube and, instead, just project vectors representing edges of the cube.
</li><li> <b>[P]</b> If you have a color display, implement a three-dimensional display
``for two eyes,'' where what the right eye sees is in green and what the left
eye sees is in red. With glasses having red right and green left lenses you
should get a good three-dimensional eifect. Such glasses are available
with books that have three-dimensional pictures in them. (A simpler
color system would ``use only one eye,'' but would encode depth as, say
near being red, gradually mixing in blue until far distance is pure blue.)
If you can make hard-copy printouts of your screen, but not in color, you
can get the same eifect by tracing separate left and right eye printouts
in red and green onto a single sheet of paper. There are also special
glasses for reading three-dimensional topographical maps for which you
can use two black-and-white printouts directly.
</li><li> <b>[P]</b> Design some three-dimensional space-filling curves-for example 
on the model of <span class='textsc'>fill</span> of chapter 2, except winding through 27 cubes to
make a larger cube instead of 9 squares to make a larger square. Can
you make a three-dimensional analog of <span class='textsc'>hilbert</span>? These may be quite
impressive in a two-eye version of a three-dimensional display such as
suggested above.
</li><li> <b>[P]</b> Grow some three-dimensional spirals, horns, and trees analogous
to the work done in chapter 2 in two dimensions. (Spirals that wind in
three dimensions are called loxodromic spirals.)
</ul>

</br></br>

<h2>Topology of Turtle Paths</h2>
<div class='quote'>
Any path is only a path ...

</br></br>

\textbf{Carlos Castaneda}
</div>

</br></br>

Turtle geometry has so far been the study of the process of drawing
paths and patterns. In this chapter we study another kind of geometric
process: how a turtle path can gradually change. For the most part we
will be studying closed paths, and we'll of course be representing those
paths as turtle programs. But in addition we'll be paying close attention
to a more familiar representation of paths: pictures. Our starting point
will be the closed-path theorem, which says that the total turning of any
closed path is an integer multiple of 360&deg;. By focusing on how the total
turning of a path changes as we vary the path, we will be introducing
the branch of mathematics concerned with the topology of curves in
the plane. As an application of ideas from topology, we'll describe an
algorithm that enables the turtle to escape from any maze.

</br></br>

<h3>Defonnations of Closed Paths</h3>

</br></br>

Look at the three paths in figure 4.1a-c. By the closed-path theorem
of subsection 1.2.1, the total turning of each path must be an integer
multiple of 360&deg;. It happens that each of these paths has total turning
720&deg;. How can we be sure of that? For the first path, which has only
90&deg; angles, it's easy to add the turns by inspection. But the other two
paths have rounded parts consisting of many small segments and turns.
Adding up the total turning vertex by vertex would be an extremely
laborious task. Nonetheless, most people are extremely confident that
path b, and even path c, has the same total turning as path a. Good
mathematics supports their intuition. You may wish to take a moment
now to test your own intuition in figuring out the mathematics behind
this phenomenon.

</br></br>

<div class='figure'>
<img src='images/figures/fig4-1.png'/>
<div class='caption'>(a-c) Three paths with total turning <b>720^{\circ</div></b>. (d-g) A deformation as a sequence of small changes.}
</div>

</br></br>

Start with any closed curve. Now make a very small change in it to
produce a second closed path (figure 4.1, d and e). How does this change
affect total turning? Since the path and the turning at each vertex are
changed only a little, the total turning over the path can change only a
little. But we are assured by the closed-path theorem that if the total
turning changes at all it must change by at least 360&deg;. Therefore our
tiny change in the path cannot change the total turning.

</br></br>

Now, if one small change cannot affect total turning, a second one
can't either, and we see that even a long sequence of small changes cannot affect total turning. A sequence of small changes is called a deformation (figure 4.1, e-g) , and we conclude that making a deformation
in a closed path cannot change the total turning. In figure 4.1, we can
easily imagine a sequence of small changes which defines a deformation
from a to b to c. This ensures that all three paths have the same total
turning.

</br></br>

The general form of reasoning here is very important. If we have any
quantity associated with a geometric figure that satisfies the conditions
that small changes in the figure cannot change it very much and that
permissible values of the quantity are spaced far apart (in this case, 360&deg;),
then the quantity can never change under any deformation. Something
that doesn't change under deformations is called a topological invariant.

</br></br>

We will have much to say about other topological invariants in future
chapters. For now, remember the following principle:
Deformation Principle Anything that satisfies the two conditions above
must be a topological invariant.

</br></br>

Using these terms, we can augment the closed-path theorem of 1.2.1:
Closed-Path Theorem Total turning is a topological invariant for closed
paths. For any closed path, the total turning is an integer multiple of
360&deg;.

</br></br>

(In later chapters we will find it convenient to measure angles in radians
as well as in degrees. When we use radian measure, we'll say that total
turning is an integer multiple of <b>2\pi</b>.)

</br></br>

<h3>Turtle Paths: Pictures and Programs</h3>

</br></br>

If the reasoning of the preceding paragraphs seemed precise, you may be
surprised to discover that a crucial point, the definition of deformation as
``a sequence of gradual changes in a path,'' was left extremely ambiguous.
To demonstrate this, we present three examples of ``a sequence of gradual
changes'' and ask you to decide whether or not each should be considered
a legitimate deformation. The first example, pictured in figure 4.2a,
shows how to remove a loop from a closed curve by forming a kink.

</br></br>

This certainly looks like a small change at each step, but it changes the
total turning of the curve from 720&deg; to 360&deg;. Surely something is wrong
here! Figure 4.2b gives an even more blatant example of two curves
that look ``the same'' and yet have different total turning. Here we
have two circles which are identical except for orientation (the direction
in which the turtle draws them). Are these circles the same, or not?
Finally, figure 4.2c illustrates a phenomenon we'll call an overlap. Again,
there is only a gradual change at each step-in fact, total turning does
not change throughout the entire process-and yet the overlap creates
crossing points where there weren't any before. Are we to allow this as
a topological deformation?

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-2.png'/><br\><div class='caption'>(a) Removing a loop by forming a kink. (b) The ``same'' path with two different values for total turning. (c) Creating an overlap.</div><br\></div>

</br></br>

The point of these examples is that in deciding what constitutes a
``small change'' to a curve, we must consider more than just the picture
of the curve (the set of points belonging to the curve). One way to
think of the additional information that must be taken into account is to
regard the closed curve as the path traversed by a turtle. (We can always
regard a truly curved line as approximated by a turtle path consisting
of many short segments as with arc and circle programs of subsection
1.1.2.) Then a ``small change'' should be required to be ``small'' not so
much with respect to changes in the picture of the curve as with respect
to changes in the process followed by the turtle in traversing the curve.
Let's apply this reasoning to the second of our two mysterious examples, the two circles that are ``the same'' except for orientation. Of
course, it's only the pictures, the set of points, that are the same. Seen
as process, the turtle is constantly turning left while drawing one circle
and right while drawing the other. So the two processes are different,
and it's not at all mysterious that they can have different total turning.

</br></br>

We can make a similar observation about the kink. Note that the
turtle does a complete 360&deg; loop-the-loop in the kink, except at the last
step. It's clear that there is going to have to be a violent change in the
turtle program, such as throwing away a whole bunch of steps (which
contain the loop-the-loop turning) in moving to the final figure. So the
tendency to regard kink removal as a deformation is just a trick of your
intuition coming from the fact that you usually think of paths as pictures
rather than as turtle programs.

</br></br>

In our third example, the overlap, we are in the opposite situation --the appearance of the two crossing points seems like a big change in the
picture, but in terms of process the paths are not very different. The
overlap is a legitimate deformation. Indeed, those crossing points are
totally invisible from a local, turtle point of view. If we assume that the
turtle doesn't leave any marks, then there's no way for the turtle to tell
if it is crossing its own path. A crossing point is a global, not a local
phenomenon. There is no way to see a crossing point on the basis of the
local information that describes what the turtle is doing at a particular
instant.

</br></br>

<h3>Correlating Pictures and Programs</h3>

</br></br>

We've seen how the idea of deformation is clarified when we regard paths
as turtle programs. But any picture of a path, such as figure 4.1a, can
be implemented as a program in many ways. For example, one of the
<span class='textsc'>left</span> 90 turns could be replaced with a <span class='textsc'>right</span> 270. This would change
the total turning of the path, subtracting 270&deg;  at the vertex rather than
adding adding 90&deg; . If we want to assign a single number for total turning
to a path (picture) then we had better resolve this ambiguity.
The easiest thing to do is to agree on a convention that only angles
less than 180&deg; should be allowed in translating a picture to a program.

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-3.png'/><br\><div class='caption'>Unkinking viewed as a turtle program</div><br\></div>

</br></br>

This will establish a unique contribution to total turning between 180&deg;
(<span class='textsc'>left</span> 180) and <b>-180^{\circ}</b> (<span class='textsc'>right</span> 180) for each vertex of a path. The
convention can be restated by saying one should use the minimum turn
necessary to align the turtle for the next segment.
Let's take a closer look at how removing a kink changes total turning.

</br></br>

Figure 4.3 shows an unkinking viewed as a changing turtle program.
Notice that turn A gradually decreases in a very regular manner. It is
not responsible for the change in total turning. On the other hand, B
gradually increases to <span class='textsc'>left</span> 180, at which point two of the segments
cross over --- unkinking. Notice that it is exactly at that point that our
convention of using angles less than 180&deg; insists we start using <span class='textsc'>right</span>.
So the sequence of changing turns throughout the unkinking process is
<span class='textsc'>left</span> 179, <span class='textsc'>left</span> 180 (= <span class='textsc'>right</span> 180), <span class='textsc'>right</span> 179,
Hence total turning is reduced in a jump by 360&deg;. You can see how
our convention catches the unkinking; it is a good convention. This
particular configuration, the crossing over of two segments that caused
a shift from <span class='textsc'>left</span> 180 to <span class='textsc'>right</span> 180 above, is called a scissors. You can
create many interesting figures by incorporating scissors as modules in
<span class='textsc'>poly</span>-like programs. Some of these are presented in the exercises for this
section. Though a scissors is not a deformation, it does change total
turning in a predictable way. Thus, it is a good thing to look for as you
try to understand changing paths.

</br></br>

In summary: We've made progress in understanding deformations of
closed paths by representing them in terms of <span class='textsc'>forward</span>, <span class='textsc'>left</span>, and <span class='textsc'>right</span>
turtle commands. We can regard a deformation as a sequence of small
changes to the turtle program (see exercise 14).

</br></br>

<h3>Topological Classification of Closed Paths</h3>

</br></br>

We've been discussing curves that can be deformed into one another --curves that are ``the same'' as far as topology is concerned. Such curves
are said to have the same topological type. We've also seen that total
turning is a topological invariant for closed paths. Any two closed paths
of the same topological type must have the same total turning. It is
natural to ask whether the converse is true: If two paths have the
same total turning, does that mean that they can be deformed into one
another? This is indeed the case, as was first proved in 1936 by H.
Whitney and W. C. Graustein.

</br></br>

<br\><b>Whitney-Graustein Theorem</b> Two closed paths in the plane can be deformed
into one another if and only if they have the same total turning.
We won't give a proof of the Whitney-Graustein theorem, but you
should note that it is another example of a classification theorem, like the
classification of looping programs given in subsection 1.3.3. We saw there
that all the information about the symmetry or boundedness of a looping
program is contained in one number: the heading change in the basic
loop. We can express this by saying that heading change completely
determines the ``symmetry type'' of a looping program. Similarly, the
Whitney-Graustein theorem tells us that the topological type of a closed
path is completely determined by the total turning. As an interesting
exercise, you might think about the relation between topological type
and crossing points. The overlap phenomenon shows that deformations
do not preserve the number of crossing points, and hence one cannot
simply count crossing points to determine topological type. But there is
a relationship, which is developed in exercises 15-18.

</br></br>

<h4>Exercises for Section 4.1</h4>

</br></br>

<ul>
</li><li> <b>[P]</b> A scissors is a good dynamic building block to incorporate in a
turtle program.
<div class='inline-editor turtle-code'>
TO SCISSOR (DISTANCE, PHASE)
   RIGHT PHASE
   FORWARD DISTANCE
   LEFT 2 * PHASE
   FORWARD DISTANCE
   RIGHT PHASE
</div><br\><br\>
Angular state transparency and symmetrical ``scissor action'' are ensured
by the arrangement of <span class='textsc'>forward</span>sand turns. Start with an ordinary <span class='textsc'>poly</span>
and replace the <span class='textsc'>forward</span>with a scissors:

</br></br>

<div class='inline-editor turtle-code'>
TO SCISSOR.POLY (0, A, PHASE)
   TOTAL.TURNING <- 0
   REPEAT
      SCISSOR (0, PHASE)
      LEFT A
      TOTAL.TURNING <- TOTAL.TURNING + A
   UNTIL REMAINDER(TOTAL.TURNING, 360) = 0
</div><br\><br\>
Watch how <span class='textsc'>scissor</span><span class='textsc'>.poly</span> deforms as the phase of the scissor changes
(figure 4.4):

</br></br>

<div class='inline-editor turtle-code'>
TO DEFORM.SCISSOR.POLY (0, A, PHASECHANGE)
   PHASE <- 0
   REPEAT FOREVER
      CLEARSCREEN
      SCISSOR.POLY (0, A, PHASE)
      PHASE <- PHASE + PHASECHANGE
</div><br\><br\>
Study programs like this with respect to symmetry, topological type,
and change in topological type.
</li><li> <b>[P]</b> In the above program the phases of all the <span class='textsc'>scissor</span> parts of the
<span class='textsc'>scissor</span><span class='textsc'>.poly</span> are the same; they all close and open at the same time.
This need not be the case. For example:

</br></br>

<div class='inline-editor turtle-code'>
TO SCISSOR.POLY (0, A, LOCAL.PHASECHANGE)
   LOCAL.PHASE <- 0
   REPEAT FOREVER
   SCISSOR (0, LOCAL.PHASE)
   LEFT A
   LOCAL.PHASE <- LOCAL.PHASE + LOCAL.PHASECHANGE
</div><br\><br\>
Show that this program always closes. Invent a stop rule for it. Study
these figures, particularly when <span class='textsc'>local</span><span class='textsc'>.phasechange</span> and <b>A</b> are simply
related. [H]
</li><li> <b>[P]</b> The local phase-changing <span class='textsc'>scissor</span><span class='textsc'>.poly</span> of exercise 2 (with stop
rule) can be used just as in exercise 1 to produce a sequence of gradually
changing figures by incrementing the initial phase at which each figure
starts (use <span class='textsc'>local</span><span class='textsc'>.phase</span> <b>\leftarrow</b> <span class='textsc'>phase</span> instead of <span class='textsc'>local</span><span class='textsc'>.phase</span> <b>+ 0</b> in the
<span class='textsc'>scissor</span><span class='textsc'>.poly</span> then <span class='textsc'>deform</span><span class='textsc'>.scissor</span><span class='textsc'>.poly</span> runs through a sequence of
<span class='textsc'>scissor</span><span class='textsc'>.poly</span>s as <span class='textsc'>phase</span> is incremented). Study these figures.

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-4.png'/><br\><div class='caption'>A deforming <span class='textsc'>scissor</span><span class='textsc'>.poly</span>, A = 144</div><br\></div>

</br></br>

</li><li> <b>[P]</b> Suppose one alternates inward and outward <span class='textsc'>scissor</span>s as follows:

</br></br>

<div class='inline-editor turtle-code'>
TO SCISSOR.POLY (0, A, LOCAL.PHASECHANGE)
LOCAL.PHASE <- 0
REPEAT FOREVER
SCISSOR (0, LOCAL.PHASE)
LEFT A
LOCAL.PHASE <- - (LOCAL.PHASE + LOCAL.PHASECHANGE)
</div><br\><br\>
Study this program and the analogous <span class='textsc'>deform</span> version (as in exercise 3).

</br></br>

</li><li> <b>[P]</b> In addition to the scissor process, one can use segment disappearance as a dynamic building block:

</br></br>

<div class='inline-editor turtle-code'>
TO SHRINKSEG (D, AMOUNT)
FORWARD D * COS(AMOUNT)
</div><br\><br\>
The segment disappears at <span class='textsc'>amount</span> = 90. This is relatively uninteresting
in <span class='textsc'>poly</span> unless one changes the <span class='textsc'>phase</span> of the <span class='textsc'>shrinkseg</span>s:

</br></br>

<div class='inline-editor turtle-code'>
TO SHRINKPOLY (0, A, LOCAL.PHASECHANGE)
   LOCAL.PHASE <- 0
   REPEAT FOREVER
   SHRINKSEG (0, LOCAL.PHASE)
   LEFT A
   LOCAL.PHASE <- LOCAL.PHASE + LOCAL.PHASECHANGE
</div><br\><br\>
Figure 4.5 shows how a <span class='textsc'>shrinkpoly</span> varies as <span class='textsc'>local</span><span class='textsc'>.phasechange</span>
varies. Study these figures with respect to closing, stop rules, etc. Embed
<span class='textsc'>shrinkpoly</span>s (with stop rule) into a continuously changing family as
we did with phase-changing <span class='textsc'>scissor</span><span class='textsc'>.poly</span>s, and study how the the
topological types vary.

</br></br>

Exercises 6-13 discuss a project for making the computer automatically generate deformations of closed paths. The idea is to start with
two different figures (turtle programs) and to try to find a gradual
``interpolation'' from one to the other.

</br></br>

</li><li> <b>[P]</b> Suppose we have two turtle paths, each given as a sequence of
pairs

</br></br>

<div class='inline-editor turtle-code'>
FORWARD SOMEDISTANCE
LEFT SOMEANGLE
</div><br\><br\>
and suppose, for simplicity, that there are the same number of <span class='textsc'>forward</span>,
<span class='textsc'>left</span> pairs in each path. Write a program that ``interpolates'' one path
to the other by slowly varying each of the distances and angles from its
value in the first path to its value in the second. For example, use

</br></br>

<div class='inline-editor turtle-code'>
DISTANCE <- N * DISTANCE2 + (1 - N) * DISTANCEl
</div><br\><br\>
as <b>N</b> goes from 0 to 1.

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-5.png'/><br\><div class='caption'><span class='textsc'>shrinkpoly</span>, A = 45</div><br\></div>

</br></br>


</li><li> <b>[P]</b> If the initial turtle paths have a different number of pairs, you
will want to modify them to have the same number. One way to do
this is to add <span class='textsc'>forward</span> 0, <span class='textsc'>left</span> 0 pairs to the shorter one, but this is
unsymmetrical if done just at the end of the program. A better way is to
``expand'' both programs to a length which is the least common multiple
of the lengths of the original programs. Then we can do the expansion
uniformly through the program. For example, if an expansion by 3 is
necessary, then <span class='textsc'>forward</span> D should be replaced by <span class='textsc'>forward</span> D/2, <span class='textsc'>left</span> 0,
<span class='textsc'>forward</span> D/2, and <span class='textsc'>left</span> A should be replaced by <span class='textsc'>left</span> A/2, <span class='textsc'>forward</span> 0,
<span class='textsc'>left</span> A/2. Experiment with ``expansion'' techniques until you have one
that satisfies you and works in all instances.

</br></br>

</li><li> <b>[P]</b> Show, by example, that this kind of interpolation has a problem:
Even if the two original paths are closed, the intermediate paths need not
be closed. However, if your expansion technique is uniform (symmetrical)
enough, and if the two original paths are closed <span class='textsc'>poly</span>s with the same
total turning, then the intermediate paths will be closed.

</br></br>

</li><li> <b>[P]</b> Find a way to fix up the intermediate paths so that they will
be closed. (For instance, you could compute, for each intermediate
path, the vector by which it misses closing, and distribute this in small
pieces among the vertices of the path.) Add this modification to the
interpolation program. Show how this modification can introduce kinks.

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-6.png'/><br\><div class='caption'>Interpolations and extrapolations based on a square and a circle.</div><br\></div>

</br></br>

</li><li> <b>[P]</b> Try the modified program (exercise 9) on lots of examples. Notice
that if the two original paths do not have the same total turning, the
interpolation must produce kinks. But suppose the paths do have the
same total turning. Can you be sure (or modify the program to make
sure) that the interpolation won't produce any kinks and therefore will
give a valid deformation?

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-7.png'/><br\><div class='caption'>A crossing point can be regarded as a position that the turtle passes through twice. By comparing the turtle's heading the first time it passes through the point with its heading the second time (seeing whether it is facing more to the right or more to the left) one can assign to the crossing point a sense of ``right-handed'' or ``left-handed.'' The ``handedness'' of a crossing point depends, not only on the curve, but also on where the turtle starts traversing the curve.</div><br\></div>

</br></br>

</li><li> <b>[P]</b> Rather than starting the interpolation process at the first of the
original paths and stopping at the other one, why not let the variations
continue beyond the second path (corresponding to taking <b>N > 1</b> in the
formula in exercise 6), thus extrapolating to get some new figures? Or
run the interpolation backwards, finding figures ``before'' the first path
(this corresponds to taking <b>N < 0</b>). See figure 4.6 for examples.

</br></br>

</li><li> <b>[P]</b> So far these interpolations have been based on interpolating
inputs to turtle commands. If we think of a path as a sequence of vectors.
other interpolation schemes come to mind. If <span class='textsc'>vector1</span> is to be changed
into <span class='textsc'>vector</span> , then one might interpolate using <span class='textsc'>int(vector1, vector2)</span>
where <span class='textsc'>int</span> is the same ``linear interpolation'' function we used with
number inputs above (exercise 6), but using vector addition and scalar
multiplication:

</br></br>

<div class='inline-editor turtle-code'>     
TO INT (START, END)
     RETURN N*END + (1 - N) *START
</div><br\><br\>
Experiment with such schemes. Is intermediate state closure ensured.
or can you patch it up? Does the scheme kink?

</br></br>

</li><li> <b>[P]</b> Think of and experiment with other methods of interpolation.
For instance. alternate commands from the two programs and continue in each program (if necessary) until you are simultaneously done
with both programs. Now slowly ``turn on'' the distances and/or angles
of one while you ``turn oft'' the other. Investigate closure and kinking in
the intermediate figures.
</li><li> <b>[D]</b> Suppose we have a closed turtle path, specified as a sequence of
<span class='textsc'>forward</span> and <span class='textsc'>left</span> instructions. Give definitions of ``small change'' and
``deformation'' in terms of allowable changes to the inputs for <span class='textsc'>forward</span>
and <span class='textsc'>left</span>. [H]

</br></br>

Exercises 15-17 ask you to deduce a formula, originated by Whitney,
that relates the crossing points of a curve to the total turning.

</br></br>

</li><li> A closed curve has exactly one crossing point. What are the possible
values for its total turning? How about two crossing points? Or three?
[A]

</br></br>

</li><li> At each crossing point of a closed curve there are two arcs. Suppose
we know which of the two arcs the turtle traveled along first. Show that
this allows us to define two kinds of crossing points --- ``right-handed''
and ``left-handed.'' Show that whether a crossing point is right- or lefthanded depends on where the turtle starts drawing the path. (Consider
an inside loop, as in figure 4.7.) Invent some simple way to make ``righthanded'' and ``left-handed'' unambiguous. [A]

</br></br>

</li><li> <b>[D]</b> Show that if we know the number of left-handed crossings and
the number of right-handed crossings of a curve, then there are only two
possible values for the total turning. Moreover, the total turning will be
completely determined if we add one piece of information. What is this
piece of information? Give a formula for total turning. [HA]
</ul>

</br></br>

<h3>Local and Global Information</h3>

</br></br>

We turn now to the other theorem of subsection 1.2.1, the simple-closedpath theorem, which describes the total turning around a simple closed
path (a path with no crossing points). Recall that we stated the theorem,
but did not provide a proof.

</br></br>

\textbf{Simple-Closed-Path Theorem} The total turning in any simple closed
path is equal to <b>\pm 360^{\circ}</b> (or <b>\pm 2\pi</b> if we measure angles in radians).
This theorem is deeper than the closed-path theorem, and its proof is
considerably more complicated. The reason that we say the theorem is
deep is because it forms a link between local and global information. In
the case at hand, remember that crossing points of a curve are nonlocal
phenomena-there is no way for the turtle to sense a crossing point as it
is walking. Sensing a crossing point requires stepping back and looking
at the entire curve at once. But total turning is locally computable, and
the theorem relates total turning to the existence of crossing points.
The following is an example of the link between local and global
contained in the theorem: Suppose that the turtle walks around a closed
path accumulating total turning, and that when it completes the path it
finds that the total turning is not equal to <b>\pm 360^{\circ}</b>. Then the turtle can
assert that somewhere the path must have at least one crossing point.
The turtle doesn't know where the crossing point is, and was unable
to observe it while traversing the path. Nevertheless, by applying the
theorem one can deduce that a crossing point must exist.

</br></br>

Seen in this light the simple-closed-path theorem is an instance of a
powerful principle:

</br></br>

\textbf{The Local-Global Principle} One can often determine global properties
by accumulating local information.

</br></br>

We've already seen other examples of this principle in action. The <span class='textsc'>poly</span>
closing theorem (subsection 1.2.2) predicts closing, which is a global
property of a path, from a sum of turnings, which are local information.
In chapter 2 we saw animals navigating toward some global goal, like
the warmest or wettest place, using a feedback mechanism based only

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-8.png'/><br\><div class='caption'>(a) Turtle with touch sensors. (b) Using touch sensors to follow along a wall</div><br\></div>

</br></br>

on local measurements of the surroundings. Later on, we'll see how the
local-global principle applies to the study of surfaces.
As we said above, the proof of the simple-closed-path theorem is more
involved than those of the other theorems we have dealt with so far.
In fact, we'll delay discussing the proof until section 4.3, where we'll
describe how this theorem relates to some other results in the topology
of curves. For now, we'll turn to an application of the theorem in a
particularly nice example of the local-global principle: teaching the turtle
to escape from a maze.

</br></br>

<h3>Escaping From a Maze</h3>

</br></br>

Suppose that the turtle is equipped with touch sensors --- one in front,
one in back, and one on each side (figure 4.8a) --- which allow it to detect
whether it is bumping against an obstacle. (You may want to simulate
this on the display screen. See exercise 1 below.) In writing programs for
this ``touch turtle'' we can imagine that the set of basic turtle commands
includes <span class='textsc'>front</span><span class='textsc'>.touch</span>, <span class='textsc'>left</span>.<span class='textsc'>touch</span>, and <span class='textsc'>right</span>.<span class='textsc'>touch</span>, operations which
register <span class='textsc'>true</span> or <span class='textsc'>false</span> according to whether the corresponding touch
sensor is activated. Using these commands it is not difficult to write a
procedure, <span class='textsc'>follow</span>, that causes the turtle to follow along a wall, say,
keeping the wall to the right (see figure 4.8b). Writing the <span class='textsc'>follow</span>
procedure is left as an exercise (see exercise 2).
Now, can the turtle use this new ability to circumvent any obstacle
in its path by <span class='textsc'>follow</span>ing the obstacle around to the other side? An
arbitrary obstacle might be very complicated. In fact, the ability to get
around any obstacle would entail the ability to escape from any maze.
What we are asking for is a universal maze-solving algorithm.

</br></br>

Here is a first attempt at such an algorithm. The idea is to keep the
turtle heading in a preferred direction, say ``north,'' whenever you can,
and whenever the turtle hits an obstacle, to have it walk around the
obstacle until it can walk freely again.

</br></br>

Maze Algorithm 1:
<ul>
</li><li> Select an arbitrary initial direction, call it ``north,'' and face that
way.
</li><li> Walk straight ``northward'' until you hit an obstacle.
</li><li> Turn left until the obstacle is to your right.
</li><li> Follow the obstacle around, keeping it on your right, until you are
once again facing ``northward.''
</li><li> Go back to step 2.
</ul>

</br></br>

Notice that the turtle can determine when it has completed step 4 by
keeping track of total turning. As soon as the total turning in following
the wall (including the initial turn in step 3) is an integer multiple of
360&deg;, the turtle knows that it is once again facing ``north.'' Figure 4.9a
illustrates the algorithm in action.

</br></br>

But this procedure does not work in general. Figure 4.9b shows how
the turtle can become trapped. The turtle can be fooled into thinking
that it has gotten around an obstacle while in fact it ends up traveling
in a loop forever.

</br></br>

It is remarkable that a simple modification to maze algorithm 1 will
avoid not only the trap in figure 4.9b, but also any other trap-it will
produce a universal maze-solving algorithm. The modification is in step
4: The turtle should follow the obstacle, not until the total turning is a
multiple of 360&deg;, but until the total turning is exactly equal to zero.

</br></br>

This
procedure is the Pledge algorithm, named for John Pledge of Exeter,
England, who at age 12 developed this method for navigating the turtle
through mazes.

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-9.png'/><br\><div class='caption'>(a) Maze algorithm 1 in action. (b) A trap for maze algorithm 1. The turtle will loop forever, trying to head ``north.'' (c) The Pledge algorithm allows the turtle to get out of the trap, by keeping track of total turning.</div><br\></div>

</br></br>


Pledge Algorithm
<ul>
</li><li> Select an arbitrary initial direction, call it ``north,'' and face that
way.
</li><li> Walk straight ``northward'' until you hit an obstacle.
</li><li> Turn left until that obstacle is on your right.
</li><li> Follow the obstacle around, keeping it on your right, until the total
turning (including the initial turn in step 3) is equal to zero.
</li><li> Go back to step 2.
</ul>

</br></br>

Figure 4.9c shows how the Pledge algorithm gets the turtle out of
the trap. The reason why the algorithm works is intimately related to
the simple-closed-path theorem. The idea is to suppose that the turtle
gets trapped in a loop, going round and round the same path. Then
we can show that the path has two mutually incompatible properties: It
can be deformed into a simple closed curve, and yet the total turning
around the path is zero. These two things together would contradict
the simple-closed-path theorem. Thus we conclude that the algorithm
cannot fall into a loop, and so the turtle cannot get trapped. Of course,
many details must be filled in to turn this sketch into a proof. We will
give a full proof in section 4.4.

</br></br>

Try the Pledge algorithm on a few mazes and observe how it gets the
turtle out of traps. Remember that the driving force behind this algorithm is another application of the local-global principle: By observing
local information (total turning) the turtle can be assured of fulfilling
some global criterion (not getting trapped in a loop).

</br></br>

<h4>Exercises for Section \thesection</h4>

</br></br>

<ul>
</li><li> <b>[P]</b> Implement a ``touch turtle'' on the computer display. Your turtle
should have the ability to sense when it is about to cross a previously
drawn line. Your task can be made easier if you restrict the lines to be
vertical and horizontal. Alternatively, take a look at subsection 6.2.3,
which explains how to compute the intersection of two lines. A way
to implement the touch turtle without computing any intersections is
to divide the display screen into a large number of small squares and
construct ``obstacles'' out of square bricks. Then the turtle is not allowed
to move into a square already occupied by an obstacle.
</li><li> <b>[P]</b> Use your touch turtle to implement the <span class='textsc'>follow</span> procedure discussed in the text. Do you see how to use a feedback mechanism to
ensure that the program will work even if the turtle's sensors are slightly
inaccurate?
</li><li> <b>[P]</b> Implement the Pledge algorithm and try it out on some mazes.
Also try some other maze algorithms (such as algorithm 1) and construct
mazes that serve as ``traps'' for the algorithms.
</ul>

</br></br>

<h3>Deformations of Curves and Planes</h3>

</br></br>

The purpose of this section is to provide proofs of the simple-closed-path
theorem and some related theorems about the topology of simple closed
curves. Recall that we want to show that, if we have a simple closed
path (a path with no crossing points), then the total turning around the
path is equal to <b>\pm 360^{\circ}</b>. There are many paths for which this result
is obvious; perhaps the simplest is a square. This suggests a strategy
for proving the theorem: Try to show that any simple closed path can
be deformed to a square. Since we know that total turning is invariant
under deformations, we will therefore have shown that any simple closed
path has the same total turning as a square: <b>\pm 360^{\circ}</b>, depending on which
direction the turtle goes around the square. This reduces the problem
of proving the simple-closed-path theorem to showing that any simple
closed curve can be deformed to a square. In fact, we're going to prove
something a bit better: Given any simple closed path, not only can the
path itself be deformed to a square, but we can imagine the deformation
being done in a very special way; the entire plane can be deformed,
pulled and stretched, so that the path becomes a square.

</br></br>

The difference between the two notions of deformation-deformation
of a path versus deformation of the plane-requires some explanation.
Until now we've been talking about deformations of paths. We focused
on a turtle walking around a closed path, and imagined how the path
would change as we made small modifications to the turtle's program.
But we can also consider deformations of the plane. Imagine that the
plane is an arbitrarily stretchable rubber sheet. Then any kind of
stretching or shrinking (but not cutting or tearing) can be viewed as
a deformation.

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-10.png'/><br\><div class='caption'>(a) A rubber-sheet deformation of the plane yields a deformation of any curve drawn on the plane. (b) A rubber-sheet deformation preserves crossing points.</div><br\></div>

</br></br>

These two kinds of deformation are closely related. In particular, if we
draw a closed path on the ``rubber sheet'' plane, then any deformation
of the plane will give rise to a deformation of the path. (See figure
4.10a and imagine for the moment that the rubber sheet is stretched
over a flat surface so that it remains flat.) Of course, straight turtle
segments may become curvy under such a deformation, and that may
require us to use an ``approximate program'' (as <span class='textsc'>poly</span> with small inputs
approximates a circle). But if you can tolerate such approximate curves,
then a deformation of a plane always bends a turtle path drawn on it
gently enough so the new path is a turtle-program deformation of the
original. On the other hand, many of the changes that are legitimate for
deformations of curves, such as the innocuous overlap phenomenon we
met in 4.1.1, cannot happen with plane deformation. In general, crossing
points can be neither created nor destroyed during plane deformation
(see figure 4.10b).

</br></br>

In summary: Plane deformations are ``gentler'' than path deformations; 
every plane deformation is a path deformation, but path deformations 
that introduce crossovers are too violent to be plane deformations. 
Incidentally, if you were suspicious about admitting the crossover
phenomena as valid deformations of curves, it's probably because you
had the rubber-sheet rather than the turtle-program model of deformation in 
mind. (The technical mathematical term for a turtle-path deformation is 
regular homotopy, while a rubber-sheet deformation is called
an ambient isotopy.)

</br></br>

The main theorem of this section asserts that any simple closed path
can be deformed to a square, and, moreover, that this can be done with
a ``gentle'' deformation, that is, a plane deformation.

</br></br>

<br\><b>Deformation Theorem for Simple Closed Curves</b> For any simple closed
curve in the plane, there is a ``rubber sheet'' deformation of the plane
that reduces the curve to a square.

</br></br>

We'll give the proof of this theorem in subsection 4.3.1. As we've
already said, the simple-closed-path theorem follows as an immediate
consequence.

</br></br>

There is another result about the topology of simple closed paths that
also follows from the deformation theorem. This is the Jordan curve
theorem:

</br></br>

<br\><b>Jordan Curve Theorem</b> Any simple closed curve in the plane divides the
plane into exactly two regions (an ``inside'' and an ``outside'').
This result may seem intuitively obvious, but simple closed curves can
be rather convoluted (see figure 4.11a), so we should be prepared to
justify our intuition. Also, notice that the theorem is definitely false
if we consider curves on surfaces other than the plane. For example,
the curve drawn on the torus in figure 4.11b is a simple closed curve,
and yet it does not divide the torus into two regions. We'll have more
to say about turtle paths on tori and other nonplanar surfaces in later
chapters.

</br></br>

Do you see how the Jordan curve theorem follows from the deformation theorem? The point is that properties such as ``dividing the plane
into two pieces'' and ``having an inside and an outside'' are invariant
under rubber-sheet deformations of the plane. Since the curve after
deformation (that is, the square) has these properties, then so must the
original curve before the deformation.

</br></br>

The deformation theorem implies a bit more than the Jordan curve
theorem: Not only does the curve have an inside and an outside, but
the inside itself can be deformed, in the rubber-sheet sense, to the
interior of a square. A region that can be deformed to the interior of a
square is called a topological disk (as far as rubber-sheet deformations
are concerned, a disk is as good as a square). Note that deforming a
rubber-sheet region does not require that we keep the region a part of
the flat plane-figure 4.11c illustrates some topological disks of both the
planar and the nonplanar variety. In later chapters we will see that
topological disks play a key role in the study of the turtle geometry of
nonplanar surfaces.

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-11.png'/><br\><div class='caption'>(a) A simple closed curve in the plane can be very convoluted, but it always has an inside and an outside. (b) A simple closed curve on a torus that does not divide the torus into two pieces. (c) Topological disks. The third disk is non-planar.</div><br\></div>

</br></br>

<h3>Proof of the Deformation Theorem</h3>

</br></br>

The aim of this section is to prove the deformation theorem by showing
how to construct, for any simple closed path in the plane, a rubber-sheet deformation that reduces the path to a square. This proof is more
involved than the proofs we've discussed so far (it should be, since both
the simple-dosed-path theorem and the Jordan curve theorem follow as
immediate consequences), and you may want to skip this section your
first time through the chapter.

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-12.png'/><br\><div class='caption'>Approximating a curve by a path on a grid</div><br\></div>

</br></br>

The first step in the proof is to imagine that the plane is divided into
a fine grid, and that the curve is made up of grid lines, as shown in
figure 4.12. If the grid is fine enough, then we can always deform any
normal turtle path into a ``grid path.'' In fact, you've probably been
working with grid paths all along, since most computer displays draw
pictures that are actually made up of dots on a very fine grid. (Many
of the difficult technical parts of topology are concerned with providing
precise mathematical definitions for such terms as ``closed curve'' that
are consistent with the intuition that any closed curve can be deformed
onto a suitably small grid. By considering curves to be turtle paths, we
can avoid most of these technicalities. Exercises 5-7 of this section give
more details on deforming turtle paths to lie on a grid.)

</br></br>

Since any turtle path can be deformed to a grid path, we need only
prove the deformation theorem for grid paths, in which all angles are
90&deg; The basic idea of the proof is to ``collapse'' a simple closed curve
down to a single square of the grid. We do this by defining a process that
successively eliminates every ``southwest corner'' of the curve. In other
words, we take every vertex of the curve that is oriented as in figure
4.13a and push it, as shown, towards the ``northeast.'' Notice that this
``push'' can be accomplished by a rubber-sheet deformation of a small
piece of the plane surrounding the vertex (figure 4.13b).
We will prove the deformation theorem by showing two things: that
this pushing process can always be done with a simple closed curve,
and that enough successive pushes will eventually reduce the curve to
a square. Consider the first assertion. When might we not be able to
remove a southwest corner by pushing it to the northeast? The answer
is: If the curve already passes through the new, northeast vertex we
would create by the push, then we cannot perform the pushing process,
because the resulting curve would intersect itself and hence not be a
simple closed curve.

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-13.png'/><br\><div class='caption'>(a) Deforming a curve by removing a ``southwest'' corner. (b) Pushing a southwest vertex northeast, viewed as a rubber-sheet deformation of the plane</div><br\></div>

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-14.png'/><br\><div class='caption'>The six ways that the northeast vertex can already be occupied. In all but the lastvcase, this causes no problem</div><br\></div>

</br></br>

Let's examine all the ways in which the vertex northeast to a southwest 
corner can already be occupied by the curve. Since each of the two
segments of the curve meeting at the northeast vertex can come from
one of four directions, and the directions for the two segments must
be different, there are six different possible local configurations in all.
These are illustrated in figure 4.14, which also shows how in four of the
six cases we can easily eliminate the southwest vertex by a deformation.
Notice that in each case the required deformation can be accomplished
as a rubber-sheet deformation of the plane. The fifth case shown in
the figure can only arise if the curve is already a single square, which is
where we wish the deformation process to stop.

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-15.png'/><br\><div class='caption'>Example of the collapsing process in action. Notice that in going from (a) to (b) we collapse vertex B before vertex A, since B is blocking A. Also note that collapses in (e) and (h) illustrate cases (2) and (3), respectively, of figure 4.14.</div><br\></div>

</br></br>

It is only in the sixth case, where our northeast vertex is itself occupied
by a southwest corner of another part of the curve, that we run into
trouble. We must move the curve away from the northeast vertex before
we can perform the collapse. The clearest way to do this is to first apply
the collapsing process to the northeast vertex (regarded as a southwest
corner of its own part of the curve), and then return and continue with
the original southwest corner (figure 4.15 shows an example). There is
still a problem, for it is certainly possible for this northeast square to
be blocked, in turn, by another corner to its northeast, and so on. But
this sequence of blocking northeast corners cannot go on indefinitely,
because the curve has only a finite number of vertices to begin with and
so cannot stretch infinitely far to the northeast. Thus, we can always do
the collapse if we are sure to begin collapsing each sequence of blocking
corners by starting at the most northeast end of the sequence.
To review our collapsing process: We get rid of southwest corners,
one by one. This is straightforward when the southwest corner is not
blocked to the northeast. If it is blocked, the blocking configuration is
one of those shown in figure 4.14, so we apply the deformations shown
there. In one of the cases (case 6) this may entail applying the collapsing
process recursively to the northeast corner. We can describe this process
using the format of our turtle computer language as follows:

</br></br>

<div class='inline-editor turtle-code'>
TO REDUCE a simple closed curve
   REPEAT
      FIND a southwest vertex
      COLLAPSE the vertex you found
   UNTIL curve is reduced to a square

</br></br>

TO COLLAPSE a vertex
   IF vertex is not blocked
      THEN apply the process shown in figure 4.13
      ELSE BLOCKED.COLLAPSE the vertex

</br></br>

TO BLOCKED.COLLAPSE a vertex
   IF in cases 1-4 of figure 4.14
      THEN apply deformation shown in figure 4.14
   IF in case 5 of figure 4.14
      THEN curve is reduced to a square
   IF in case 6 of figure 4.14
      THEN
         COLLAPSE the vertex to the northeast, and then
         COLLAPSE the original vertex
</div><br\><br\>

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-16.png'/><br\><div class='caption'>The collapsing process will never push the curve beyond its northern and eastern borders.</div><br\></div>

</br></br>

This completes the definition of the collapsing process.
Now we must show that this process actually terminates with the curve
reduced to a single square. Do you see the problem here? In collapsing a
southwest corner we create some new southwest corners, and these must
in turn be collapsed, which might create more southwest corners, and
so on. So how can we be sure that this process doesn't go on forever?
The answer is that the process keeps squeezing the curve into smaller
and smaller pieces of the plane. Each collapsing of a vertex pushes a
piece of the curve to the north and/or east. On the other hand, if we
draw a line directly above the original curve and another line directly
to the east of the curve, we can see that the collapsing process never
moves the curve past these lines (figure 4.16). So the region occupied
by the curve gets smaller and smaller, and the process must therefore
eventually terminate. This can happen only when the curve is reduced
to a single square.

</br></br>

We have now completed the proof of the deformation theorem.

</br></br>

<h4>Exercises for Section \thesection</h4>

</br></br>

<ul>
</li><li> Suppose the turtle walks around the boundary of a simple closed
curve. By the Jordan curve theorem, the curve divides the plane into
two regions, one lying to the turtle's left and one to the right. How can
the turtle tell which region is the inside and which is the outside of the
curve? [HA]

</br></br>

</li><li> To test your understanding of the proof given above, can you pinpoint
exactly where the argument breaks down if we assume that the original
curve has crossing points? [A]

</br></br>

</li><li> <b>[D]</b> To test your understanding of the proof given above, can you
pinpoint exactly where the argument breaks down if we assume that
the curve is drawn on some non planar surface, such as a torus? After
all, figure 4.l1b demonstrates that the theorem must be false for such
curves. A cheap answer is to protest that we haven't said how to define
a ``grid'' for such curves. Assume we can do that. What is the real
problem with the proof? [HA]

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-17.png'/><br\><div class='caption'>Deforming within ``safety zone'' eliminates possibility of overlaps and crossing points. (a) Path with safety zone. (b) Grid chosen smaller than zone. (c) Deforming within zone. (d) Deforming a curve to a grid near an acute vertex.</div><br\></div>

</br></br>

</li><li> <b>[D]</b> In a rubber-sheet deformation, any two distinct points must
remain distinct throughout the deformation, and any arc joining the
two points must be transformed to an arc joining the transformed points.
Show that this implies that a rubber-sheet deformation cannot change
the topological type of a curve drawn on the plane.
The following exercises deal with the problem of showing that any
turtle path can be deformed to lie on a grid. The key to the demonstration is estimating how fine a grid is necessary. What we want is a ``safety
zone'' around every part of the path such that no deformation within
the zone can run into any other part of the curve. Then if we choose
a grid size much smaller than the width of the safety zone, we can use
any sort of deforming algorithm to deform within the zone without risk
of producing crossing points (see figure 4.17a-c). Consider now in detail
a simple closed turtle path with a finite number of segments:

</br></br>

</li><li> <b>[D]</b> Show that, except in the case of points on adjoining segments,
points on one segment cannot be arbitrarily close to points on other
segments. That is to say, given any turtle path, show that there is some
number <b>D > 0</b> such that for any two points <b>p</b> and <b>q</b> on nonadjacent
segments of the path, the distance from <b>p</b> to <b>q</b> is at least <b>D</b>. Thus, the
safety zone can be taken to have width <b>D</b> and there can be no overlap.
Such a <b>D</b> may not exist if the path has an infinite number of segments.
[HA]

</br></br>

</li><li> <b>[DD]</b> Points on adjacent segments can be arbitrarily close, so the
safety zones for the two segments must overlap. Show in such an instance
that, perhaps by making the grid a bit finer, one can still deform in
safety by pushing the segments away from each other within the zone
(see figure 4.17d). Combine this idea with the result of exercise 5 and
describe in detail a complete method for deforming a simple closed turtle
path to lie on a grid. [A]
</ul>

</br></br>

<h3>Correctness of the Pledge Algorithm</h3>

</br></br>

In subsection 4.2.1 we described the Pledge algorithm for guiding a turtle
through a maze. Here we will prove that the Pledge algorithm is a
universal maze-solving algorithm (that is, one that will allow the turtle
to escape from any maze). Here is an overview of the proof:

</br></br>

The only way the algorithm can fail is if the turtle falls into an infinite
loop, traversing the same path over and over in a way reminiscent of
the turtle trap that defeated the first version of maze algorithm 1 in
subsection 4.2.1. The validity of this assumption is discussed below in
4.4.3.

</br></br>

The only way the turtle can end up traveling in a loop is if it winds up
following around and around the same simple closed path of wall. We
prove this in 4.4.2 by applying the simple-closed-path theorem.

</br></br>

The only way the turtle can be fooled into following the same simple
closed path of wall over and over again is if the mazemaker has cheated
and placed the turtle in a maze with no way out, such as that shown in
figure 4.18a. We prove this in 4.4.1.

</br></br>


<div class='figure'>
<img src='images/figures/fig4-18.png'/>
<div class='caption'>The maze may be unfair, with the turtle trapped inside a simple closed path of wall with no way out. Since it keeps the wall to the right, a turtle traversing the outside of the wall will make a net <b>360^{\circ</div></b> right turn and a trip around the inside of the wall will make a net 360&deg; left turn.}
</div>

</br></br>

Putting these three facts together shows that the only way the Pledge
algorithm can fail is if the maze is unfair. The rest of this section is
concerned with spelling out the details of these three steps. As with the
proof of the deformation theorem, you may want to skip this on a first
reading.

</br></br>

<h3>Unfair Mazes</h3>

</br></br>

We want to show that the turtle will keep following the same simple
closed path of wall only if the maze is unfair. Let's consider how the
turtle could recognize an unfair maze. An unfair maze will contain a
simple closed path of wall that seals the turtle in. But the presence of
a simple closed path of wall does not necessarily mean that a maze is
unfair-the turtle may be stupidly walking around the outside of the
wall. Our first task will be to show that the algorithm is not that
stupid-that if the turtle keeps retracing a simple closed path of wall
then it really is trapped on the inside. To show this, recall that the turtle
does its wall-following keeping the wall to the right. Then, as figure
4.18b shows, a trip around the outside of a wall will be a net 360&deg; right
turn for the turtle whereas a trip around the inside of a wall will be a net
360&deg; left turn. Now imagine that the turtle has a counter that registers
the accumulated total turning while following a wall. Left turns cause
the count to increase and right turns cause it to decrease. So a rightturn (outside) loop will subtract 360&deg; from the count, and for a turtle
trapped following an outside loop forever, the count would keep getting
smaller and smaller. On the other hand, the counter registering zero is
precisely the signal for the turtle to stop following the wall and start
heading northward again (step 4 of the algorithm), so the turtle will not
run forever in an outside loop. So if the turtle does run forever around
a simple closed path of wall, it must indeed be sealed inside an unfair
maze.

</br></br>

<h3>The Body of the Proof</h3>

</br></br>

Here we will establish the second point in the proof outline given at the
beginning of this section: If the turtle runs in a loop, that loop must
be a simple closed path of wall. The structure of the Pledge algorithm
reveals that the turtle's wanderings can be divided into two kinds: ``free
running'' (traveling north without contacting a wall), and following a
wall. We will first prove that if the turtle does fall into a loop then it
traces a path that can be deformed to a simple closed path. We will
then prove that any closed path containing both ``free running'' and
``wall following'' sections must have zero total turning and hence (by
the simple-closed-path theorem) be unamenable to such deformations.
Together these assertions show that if the turtle does loop, then the
repeated part of the path must consist only of ``wall following'' parts
(a loop clearly cannot consist of all northward-pointing ``free running''
parts) and hence the turtle is tracing a simple closed path of wall.

</br></br>

Suppose that the turtle retraces the same closed path over and over.
By considering all the ways this closed path can touch itself, we will
show that the path can be deformed to a simple closed curve. One way
the path might touch itself would be for the turtle to ``free run'' more
than once along the same northward line segment at different times in
the same loop, as shown in figure 4.19a. We leave it to you (exercise 1)
to prove that this can never happen.

</br></br>

The only other way the path can overlap itself is in the situation
shown in figure 4.19b: The turtle, while running northward, bumps
against a wall it has already followed, or else starts following a wall it
has previously bumped against (it doesn't matter which happened first,
the bumping or the following, since we're assuming that the turtle is in
a loop and will be doing one and then the other over and over).

</br></br>

Let's take a closer look at this situation. Let A be the part of the path
corresponding to the time the turtle followed along the obstacle, and let
B be the part of the path that has just bumped against the obstacle
while running northward. We would like to deform the turtle's path to
eliminate the overlap. Whether or not we can do this depends on where
A and B leave the obstacle.

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-19.png'/><br\><div class='caption'>(a) Example of how the turtle's looping path might cover the same northward segment twice. (In fact, this cannot happen.) (b) Sample intersection in the path: The turtle, while running north, bumps against a wall it has previously followed.</div><br\></div>

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-20.png'/><br\><div class='caption'>(a) If B leaves the obstacle before A, then a simple deformation removes the intersection. (b) If B leaves after A, then there is still an intersection after deforming. (c) Compare the total turning count for A and B at a point just after the overlap. (d) A and B might conceivably also leave the obstacle together.</div><br\></div>

</br></br>

If B leaves the wall before A (as in figure 4.20a) there is no problem;
we simply deform the path as shown. If A leaves the obstacle first, as in
igure 4.20b, there is no obvious way to deform the path to eliminate the
overlap. We claim that this troublesome situation will never arise. To
see this, think about the counter that the turtle is using to accumulate
total turning. Examine the counter at corresponding points of A and
B, at a point shortly after B reaches the obstacle and the turtle has
turned left to face along it (see figure 4.20c). On B the counter registers
some angle <b>\theta</b> between 0&deg; and 180&deg;, depending on how much the turtle
had to turn in order to begin following the wall. How about the counter
on A? Since at that point the turtle's heading is the same as at the
corresponding point on B, the count must equal <b>\theta</b> plus some integer
multiple of 360&deg;. Furthermore, the integer cannot be negative, since
that would make for a negative accumulated total turning, which is not
possible with the Pledge algorithm. So the A count must be greater
than or equal to the B count, and both are greater than zero. Now, in
continuing to follow along the object, both the A and the B count will
be reduced (or increased) by the same amount. So the A counter cannot
reach zero before the B counter does. Thus, A must continue to run
along the obstacle longer than B does.

</br></br>

We should also consider the possibility that A and B leave the wall
at the same place (figure 4.20d)-that is, start with equal turning indicators. But this is a particular case of the turtle beginning to follow
the same northward line twice, and we've already said that such a thing
cannot happen.

</br></br>

In summary: We've shown that of the three situations shown in figure
4.20 (a, b, and d), only the first is possible, and in this case we can
deform the path to eliminate the overlap. Thus we have shown that if
the turtle does get into a loop, the path can be deformed to a simple
closed curve.

</br></br>

Suppose now that the turtle retraces the same closed path over and
over, and that this path contains both ``free running'' and ``wall following'' sections. Such a path must have zero total turning. Certainly the
``free'' sections have zero total turning, since the turtle is simply running
northward there. But, as step 4 of the algorithm shows, any completed
``following'' section must have zero total turning as well. Hence, the entire path has zero total turning, and, by the simple-dosed-path theorem,
cannot be deformed to a simple dosed curve.

</br></br>

We have proved our two assertions; that is, we have shown that if the
turtle runs in a loop it must be running around a simple closed path of
wall.

</br></br>

<h3>Looping and Finite-State Processes</h3>

</br></br>

To tie up all the loose ends, we must discuss the first point in the proof
outline given at the beginning of section 4.4 --- that the only way the
algorithm can fail is by going into a loop, driving the turtle in the same
path over and over. The reasoning we will use here is an instance of a
very general principle, the concept of a finite-state process. The point
is this: If we are watching the turtle wander through a maze following
the Pledge algorithm, then we can predict what the turtle will do next,
provided that we know three things: the turtle's position, the turtle's
heading, and the accumulated total turning registered in the turtle's
counter. These three pieces of information-position, heading, countgive a complete description of the state of the process as far as the Pledge
algorithm is concerned; at any instant the turtle's entire future path in
the maze is determined solely by this threefold state. So if we want to
show that the algorithm falls into a loop we need only show that there is
some state that the turtle reaches more than once. Consider: The turtle
proceeds from some state and eventually comes back to the same state.

</br></br>

So, proceeding once more from this state, the turtle must do the same
thing that it did the first time, which brings it back to the same state
again, and so on, and so on. (Compare this reasoning with the argument
used in the proof of the <span class='textsc'>poly</span> closing theorem in subsection 1.2.3.)
Let's assume that the Pledge algorithm fails for some maze-the turtle
wanders around forever without ever getting out. How can we show
that there is a loop, or, equivalently, how can we show that there must
necessarily be some state that the turtle reaches more than once? The
key idea is this: Suppose we could show that there are only a finite
number of different states that the turtle can be in. Then, since we are
assuming that the turtle wanders around forever, there must be some
state that is entered more than once.

</br></br>

So we are reduced to showing that there are only a finite number
of states-position, heading, count-that the turtle can be in while
following the Pledge algorithm. Unfortunately, there are situations
where this is not true. For example, if the maze has infinitely many
walls, then the number of possible turtle positions, and hence the number
of states, will surely be infinite. In fact, our entire proof breaks down
for infinite mazes.

</br></br>

Let's retreat, then, from such infinities, and restrict our attention to
finite mazes-say, a maze that has a finite number of straight walls and
is entirely contained within some bounded region of the plane. Even in
these cases, it appears that there can be an infinite number of different
states. There are an infinite number of possible positions (points) in
the region, the heading can be any angle, and the count can be any
non-negative number. So we need to be more subtle, and consider not
all possible different states but rather all possible ``effectively different''
states (states whose difference actually affects what the algorithm will
do next).

</br></br>

Even though there are infinitely many different positions the turtle can
be at, we can lump together in a single state sequences of positions (all
with the same heading and total turning) that always occur together,
such as all points along the same section of wall or along the same
segment of some ``northward'' line between obstacles. With this proviso,
the number of effectively different positions is finite so long as the maze
has a finite number of segments. We can make a similar remark for
heading: The number of different headings cannot be more than the
number of different segments in the maze, plus one (to allow for a
northward heading).

</br></br>

<div class='figure'><br\><img src='images/figures/fig4-21.png'/><br\><div class='caption'>Will the turtle get lost in an infinite spiral?</div><br\></div>

</br></br>

If we restrict all angles to be integers, then there are only a finite
number of possibilities for the count part of the state, as well. This is
because the count cannot become arbitrarily large. To see this, observe
that, each time the turtle finishes following a wall, the counter registers
zero total turning. So consider the largest total turning that the turtle
can accumulate while performing the ``following'' phase of the algorithm,
without retracing the path. (This maximum turning must be less than
the total number of wall segments in the maze times the maximum
possible turn, 180&deg;.) If the turtle's count becomes larger than this
number, it must have followed a wall all the way around and begun
retracing its path. But, as noted in 4.4.1, the turtle can be fooled into
following all the way around a closed path of wall only if the maze was
unfair to begin with. Thus, for any fair maze, the possible values of the
total turning counter are bounded.

</br></br>

In summary: We have shown that for any finite and fair maze there
are only a finite number of effectively different states. Hence, if the
turtle wanders around forever it must get into a loop. This is the final
assumption we needed to check, so we have completed the proof that
the Pledge algorithm is a universal maze-solving algorithm.

</br></br>

<h4>Exercises for Section \thesection</h4>
<ul>
</li><li> Fill in the part of the proof we left out in subsection 4.4.2: that
through one round of the looping path the turtle cannot run along the
same northward segment twice. [HA]

</br></br>

</li><li> <b>[D]</b> Suppose the turtle is dropped into an infinite spiral maze (figure
4.21). If the turtle is idealized as a point, the Pledge algorithm will take
an infinite number of steps-winding in and in and in, then out and out
and out-if it is to succeed at all. Even if we allow an infinite number
of steps, what happens in such a situation? Can spirals have infinite
length, infinite total turning? Do these doom the Pledge algorithm? [H]

</br></br>

</li><li> <b>[D]</b> Suppose a maze is really made up of curved lines rather than a
finite number of line segments. Show that in a wide range of situations
the number of effectively different states is still finite. Be as explicit as
you can in defining and enumerating the effective states and in specifying
the conditions under which you can be sure the number of effectively
different states is finite. Do circles meet those criteria? Do spirals?
</ul>

</br></br>

<h2>Turtle Escapes the Plane</h2>
<div class='quote'>``But how do I get there?'' asked Boots. ``That's
easy,'' the old man replied. ``Just put one foot
before the other and follow your nose.''

</br></br>

fairy tale
</div>

</br></br>

We have seen how turtle geometry, with its emphasis on procedural
descriptions and local methods, can be a useful alternative to Euclidean
axioms and Cartesian coordinates in exploring plane geometry. Now
it's time to leave Euclid behind and consider what life is like for a turtle
crawling on a curved surface. The branch of mathematics that deals with
the geometry of curved surfaces is known as differentia.l geometry, and
this chapter presents a turtle's-eye view of some of the basic concepts in
this subject.

</br></br>

We'll begin our survey of turtle geometry on curved surfaces with a
discovery: For a turtle on a sphere, the closed-path theorem --- that the
total turning around any closed curve must be an integer multiple of
360&deg; --- is false. You may well ask how we can hope to gain any benefit
from turtle geometry without the closed-path theorem. After all, the
theorem is one of the cornerstones of the work we've done so far. It
formed the basis for the symmetry analysis of looping programs, not to
mention the entire topological classification of closed curves which we
discussed in chapter 4. But instead of throwing up our hands in despair,
we'll take a close look at some turtle paths in order to get to the nub of
how it can be that this basic theorem doesn't hold. And a very rewarding
nub it is. In fact, we shall see that the breakdown of the closed-path
theorem is, in a sense, the very essence of what it means for a surface
to be curved. Pursuing this idea, we'll give a definition of curvature
that satisfies the turtle criteria of being local and intrinsic. We'll also
introduce the total curvature of a surface, a topological invariant that
plays a role analogous to that of the total turning for curves in the plane.

</br></br>

<h3>Turtle Geometry on a Sphere</h3>

</br></br>

<div class='figure'>
<img src='images/figures/fig5-1.png'/>
<div class='caption'>A <b>3 x 90^{\circ</div></b> triangle on a sphere}
</div>

</br></br>


Imagine that a turtle is crawling on a sphere --- the earth's surface, for
example. Suppose the turtle walks around the closed path shown in
figure 5.1. Starting at the equator and facing north, the turtle goes
straight north until it reaches the north pole. There it turns 90&deg; and
goes straight south until it gets to the equator. Again it turns 90&deg; and
runs along the equator to get back to its initial position, where a final 90&deg;
turn restores the initial heading. That's certainly a closed path, but the
total turning is <b>3 x 90^{\circ}</b>, or 270&deg; in all. This contradicts the closed-path
theorem (subsection 1.2.1), which says that the total turning should be
an integer multiple of 360&deg;. Even worse, it's easy to see that on a sphere
there can be closed paths with any amount of turning whatsoever: Start
the turtle at the equator walking north as before. This time, when the
turtle reaches the north pole, have it turn some arbitrary angle 6, then
march south to the equator, then back along the equator to the initial
position, and turn as before to restore the initial heading. The total
turning for this trip is <b>180^{\circ}+\theta</b>,so by varying <b>\theta</b> we can produce arbitrary
total turning. Try this on a globe.

</br></br>

This should bother you a fair amount. After all, the proof we gave
of the closed-path theorem in subsection 1.2.1 was very straightforward
and made no explicit mention of the fact that the turtle was walking on
a plane. So how can it break down so badly as soon as we put the turtle
on a sphere? Of course, you might think we are being overly naive in
expecting our planar turtle theorems to carry over to the sphere. The
turtle is walking on a curved surface, the sphere, and surely this must
have something to do with turning. Is it fair even to regard these turtle
paths as made up of straight lines?

</br></br>

<h3>Turtle Lines</h3>

</br></br>

Let's begin with that last question: What is a straight line for a turtle
on a sphere? When the turtle walked along the equator, we said that it
was walking straight. Can we give some justification for regarding the
equator as a sphere's version of a straight line?

</br></br>

First of all, the lines we're talking about are not straight in Euclid's
sense: They don't lie in a plane. To save confusion let's refer to this
kind of straight line as a turtle line. Because we've shifted our attention
from the abstraction of ``straightness'' to crawling turtles, it's natural
to try to define a turtle line as the path followedby a turtle that walks
along the surface without turning. Of course, this is progress only if we
can say what we mean by ``without turning.'' In other words, how can
the turtle know how to walk straight?

</br></br>

\textbf{Suggestion 1:} Turtle cannot possibly walk straight on a curved surface,
and we shouldn't waste time trying to make sense of such a notion.

</br></br>

\textbf{Suggestion 2:} Indeed the turtle can't really walk straight if it's restricted
to the sphere's surface. In order to really walk straight the turtle has
to walk in a plane. But the next best thing may be good enough: The
turtle can walk along the intersection of the sphere with a plane. We
should therefore define a turtle line on a sphere to be the intersection
of the sphere with a plane. According to this definition, the equator is
a turtle line. So is any great circle, and any line of latitude. (Do you
agree that these should all count as turtle lines?)

</br></br>

\textbf{Suggestion 3:} One thing we expect about a straight line segment is that it
should be the shortest distance between its two endpoints. Sowe should
admit as turtle lines only those paths that give the shortest distance
between their endpoints. By this definition it is not hard to see (although
it's hard to prove) that any turtle line must be part of a great circle.
Latitudes other than the equator don't satisfy the criterion.

</br></br>

Suggestions 2 and 3 are reasonable, but they have a serious shortcoming: They are not local. That is, they are not phrased in such a way
that the turtle can tell if it's walking straight as it is walking. Consider
suggestion 2. The turtle would have to stand back, move off the sphere
altogether, and look at the intersection of the path with a plane before
it could be sure that it was walking straight. Suggestion 3, based on
shortest distance, is at least intrinsic; it allows the turtle to remain on
the sphere. But the definition still isn't local. In order to be sure of
walking in a turtle line between two points, the poor turtle would have
to measure every possible path between the two points and then pick
the shortest.

</br></br>


<div class='figure'><br\><img src='images/figures/fig5-2.png'/><br\><div class='caption'>Is the line of latitude an equal-strided turtle walk?</div><br\></div>

</br></br>

There's something wrong here. ``Walking straight without turning''
seems like a simple idea. The turtle should be able to tell that it is
walking straight as it is walking, without getting off the sphere to look
for planes or finding all possible paths between two points. Can't we find
such a local definition? After all, couldn't you walk without turning on
a sphere (the earth)?

</br></br>

Here's an idea: Imagine the turtle's legs churning away. We'll say that
the turtle is going straight if its left legs take the same number of steps,
of the same length, as its right legs. If the turtle starts taking shorter
steps on one side (or even backward steps), it will turn. This leads to
the following definition:

</br></br>

A (turtle) line is an equal-strided turtle walk.

</br></br>

Now, is any latitude a turtle line? If the turtle straddles a (northern
hemisphere) latitude and starts walking, its ``south'' legs travel a bit
below the latitude and its ``north'' legs a bit above (figure 5.2). Marching
all the way around the sphere, has the turtle taken the same-size steps
with north as with south legs? Of course not. The farther north the
latitude, the smaller the round-trip path. Take a look at a globe again.
The equator is the longest latitude, and as you get closer and closer to
the north pole the latitudes get smaller and smaller and eventually reach
zero length at the north pole. So the turtle must take different-size steps
with its left and right legs, and therefore a nonequator latitude is not a
turtle line. Equators and longitudes, on the other hand, are turtle lines.
(Stare at a globe if you're not convinced.)

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-3.png'/><br\><div class='caption'>Turning without ``turtle turning''</div><br\></div>

</br></br>

There are some interesting points to notice about this way of looking
at ``straight'' turtle lines. First of all, the definition can be used on any
surface, not only planes or spheres. Any bent-up surface will do. Just
set the turtle down and have it take even strides, left and right, and
it will walk in a turtle line. Second, this idea of ``even strides,'' and
therefore the determination of what is ``straight,'' reduces to measuring
small distances. It is as if the turtle carries a little ruler, constantly
checking that its left and right sides are moving equally. We'll return
to these points later.

</br></br>

<h3>Turtle Turning and Trip Turning</h3>

</br></br>

Now let's go back to the sphere and the closed path in figure 5.1. The
sides are straight in a turtle sense, but the path still requires three
90&deg; turns. Should we just abandon the closed-path theorem? Not yet!
Let's at least see exactly what went wrong in the turtle proof given in
subsection 1.2.1 that the total turning around any closed path should
be a multiple of 360&deg;. Remember the key idea in the proof: When the
turtle completes the path, it is once again facing in the initial heading,
so the total turning (the net change in heading) must be a multiple of
360&deg;.

</br></br>

In terms of net state change on this spherical triangle, we cannot
dispute that the turtle has at the end returned to its initial heading. So
in this sense the change in heading must be 360&deg; (or some multiple). The
problem is evidently that, in contrast with a plane, net heading change
is not equal to turtle turning.

</br></br>

Can we focus on what causes turning not to equal heading change?
Get your globe out again and try this: Start the turtle at the north pole
and notice which way it is pointing. Walk the turtle straight ahead until
it gets to the south pole. Now, without letting the turtle turn at all,
walk it sideways (a good straight turtle walk, but sideways) all the way
back up to the north pole. Presto! The turtle has been turned 180&deg;
without ``turning'' at all. That's the problem with spheres; the turtle
can get turned even if it's not turning. If you examine figure 5.3 you
will easily see the sphere turning the turtle without the turtle knowing.
So there are two kinds of turning: actual ``turtle turning'' and ``trip
turning.'' The turtle thinks it is turning only when it is ``turtle turning,''
but it can be turned by going on a trip even without ``turtle turning.''

</br></br>

<div class='figure'>
<img src='images/figures/fig5-4.png'/>
<div class='caption'>(a) Turtle carrying a pointer around the <b>3 x 90^{\circ</div></b> triangle. (b) Comparison of pointer direction with turtle direction.}
</div>

</br></br>

Now that we realize that spheres can turn the turtle without the turtle
knowing it, we can hypothesize about that extra 90&deg; in the <b>90^{\circ}-90^{\circ}-90^{\circ}</b>
path: While the turtle was walking and turning 270&deg; , it must have been
turned an additional 90&deg; by the sphere.

</br></br>

Can we compute trip turning other than as the amount by which the
closed-path theorem fails? We want a method for seeing trip turningsomething like figure 5.3, but more general and more intrinsic. If there
were some general way to think of something traveling around a closed
path without turtle turning at all, then the extra (trip) turning would
become visible directly. One way to do this is as follows: Suppose turtle
carries a pointer. While the turtle is walking straight, it always keeps the
pointer from turning by keeping it at a constant bearing from turtle's
own heading. And whenever the turtle does some (turtle) turning, it
again makes sure not to turn the pointer. In other words, the turtle
is carrying the pointer around the path without (turtle) turning the
pointer. Therefore, any heading change in the pointer must be due to
trip turning.

</br></br>

Let's try that idea out on the <b>90^{\circ}-90^{\circ}-90^{\circ}</b> path. Turtle starts on the
equator with the pointer facing north as shown in figure 5.4a. It walks
to the north pole, turns right 90&deg;, and returns to the equator. But now
the pointer is facing west. The turtle returns to the initial position with
the pointer facing west. There is the 90&deg; trip turning that fooled us
into thinking that the turtle must have turtle-turned 360&deg;, whereas in
actuality it only turtle-turned 270&deg; and was trip-turned the other 90&deg;
The bug in the closed-path theorem has been isolated. It is this change in
small distances. It is as if the turtle carries a little ruler, constantly
checking that its left and right sides are moving equally. We'll return
to these points later.

</br></br>

<h3>Turtle Turning and Trip Turning</h3>

</br></br>

Now let's go back to the sphere and the closed path in figure 5.1. The
sides are straight in a turtle sense, but the path still requires three
90&deg; turns. Should we just abandon the closed-path theorem? Not yet!
Let's at least see exactly what went wrong in the turtle proof given in
subsection 1.2.1 that the total turning around any closed path should
be a multiple of 360&deg;. Remember the key idea in the proof: When the
turtle completes the path, it Is once again facing in the initial heading,
so the total turning (the net change in heading) must be a multiple of
360&deg;.

</br></br>

In terms of net state change on this spherical triangle, we cannot
dispute that the turtle has at the end returned to its initial heading. So
in this sense the change in heading must be 360&deg; (or some multiple). The
problem is evidently that, in contrast with a plane, net heading change
is not equal to turtle turning.

</br></br>

Can we focus on what causes turning not to equal heading change?
Get your globe out again and try this: Start the turtle at the north pole
and notice which way it is pointing. Walk the turtle straight ahead until
it gets to the south pole. Now, without letting the turtle turn at all,
walk it sideways (a good straight turtle walk, but sideways) all the way
back up to the north pole. Presto! The turtle has been turned 180&deg;
without ``turning'' at all. That's the problem with spheres; the turtle
can get turned even if it's not turning. If you examine figure 5.3 you
will easily see the sphere turning the turtle without the turtle knowing.
So there are two kinds of turning: actual ``turtle turning'' and ``trip
turning.'' The turtle thinks it is turning only when it is ``turtle turning,''
but it can be turned by going on a trip even without ``turtle turning.''

</br></br>

<h3>Angle Excess</h3>

</br></br>

We've made some real mathematical progress because we have run across
a new concept. The concept is what mathematicians call angle excess, or
simply excess. Excess is, by definition, the trip turning that the pointer
gets turned when being carried around a closed path. Right away there
are some nice things to notice about angle excess: You can ask what it
is for a closed path around any polygon, not just a triangle, and you
can ask about angle excess on any surface, not just a sphere (because we
know how to make the turtle walk in a ``straight line'' on any surface).
Excess is a rather general concept. It is an angle associated to any
closed path on any surface. In fact, we can restate the closed-path
theorem so that it holds for simple closed paths on arbitrary surfaces:
If the turtle walks around a simple closed path on a surface, then
(total turtle turning along the path) + (excess along the path)
= <b>21 \pi <span class='textsc'> radians </span> = 360^{\circ}</b>.

</br></br>

Figure 5.4b illustrates this equation on our <b>3 x 90^{\circ}</b> triangle and shows
that the turtle can directly measure total (turtle) turning at any time
by seeing how far it has turned away from the pointer direction.
This formula and the pointer measuring process are a beginning, but
they don't really tell us much unless we know more properties of excess.
Here are some questions we might ask about this quantity:

</br></br>

Can we ever compute angle excess without directly measuring it?

</br></br>

We've hinted at a partial answer: An excess angle on a plane is always
zero. That's precisely another way of stating the original closed-path
theorem for paths in a plane. This leads to the question of whether the
plane is the only surface with zero excess for all closed paths.

</br></br>

Is angle excess always greater than zero for any surface, or might there be surfaces for which the turtle must turn more than 360&deg; in going
around a simple closed path?

</br></br>

In general, what does knowing excess tell you about a surface?

</br></br>

What does angle excess really mean?

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-5.png'/><br\><div class='caption'>(a) Measuring excess around a triangle starting from point A. (b) Measuring excess around a triangle starting from two different locations. The angle from <b>x</b> to <b>z</b> is the same as the angle from <b>y</b> to <b>w</b>.</div><br\></div>

</br></br>

But let's not get too far ahead of ourselves. We should make sure the
excess concept is nailed down. That means asking some simple questions
about it. For instance, we've been talking about the ``excess around a
path.'' But is this notion really well defined? That is, does carrying a
pointer around a path really specify exactly one number to be associated
with the path? In particular:

</br></br>

Question 1 Does the measured excess depend on the initial direction of
the pointer?

</br></br>

Question 2 Does it depend on where the turtle starts on the boundary?

</br></br>

Answer 1 No. Suppose the turtle carried two different pointers around
the same path. While the turtle is walking, both pointers must maintain
the same heading with respect to the turtle line, since otherwise they
would be (turtle) turning. And neither pointer does anything at all while
the turtle turns. So the angle between the two arrows is always constant,
and the turtle might as well carry a disk with two arrows marked on
it. Therefore, we see that the difference between the initial and final
headings for either pointer is just the net rotation of the disk. Both
pointers measure the same excess.

</br></br>

Answer 2 No. Look at a diagram (figure 5.5a) of a turtle measuring the
excess around a path by starting at A and carrying a pointer all the
way around. The excess is marked B. Suppose instead that the turtle
measures the angle excess starting at some other point B. In order to
compare the two measurements, we'll imagine that the turtle does both
measurements at once, as shown in figure 5.5b. The turtle starts at A,
and the direction of the pointer is labeled <b>x</b>. Then the turtle moves to B,
and the pointer direction is labeled <b>y</b>. Next we go all the way around to
A again, where the pointer direction is labeled <b>z</b>. The difference between
<b>x</b> and <b>z</b> is, by definition, the excess e as measured from A. Finally,
let the turtle continue to B once more, where the pointer direction is
labeled <b>w</b>. The excess as measured from B will be the difference between
<b>y</b> and <b>w</b>. But now regard <b>x</b> and <b>z</b> as two different pointers being carried
simultaneously from A to B. The angle between them remains constant.
(Remember the disk with two pointers on it from answer 1?) Since the
angle between pointers is <b>\theta</b> at A, it must also be <b>\theta</b> at B.

</br></br>

The result of answers 1 and 2 is that it doesn't matter where the turtle
starts along a given closed path, or at what heading. The excess will be
the same.

</br></br>

<h3>Excess is Additive</h3>

</br></br>

Let's get back to more investigation and less formalization by concentrating on the sphere for a while. We started on the sphere with
a path of fairly large excess, 90&deg;. Can you imagine a closed path with a
bigger excess? How about the equator? The turtle starts anywhere and
travels all the way around. The total turning is zero, so by our formula
the excess is 360&deg;. How about a path with smaller excess? That's no
problem. Just take a path that is very small in comparison with the size
of the sphere. If the turtle remains in a very small region, the sphere
looks almost flat, almost like a plane, so the excess must be close to
zero.

</br></br>

It appears as if paths around small regions have small excesses and
paths around large ones have large excesses. If you haven't already
noticed, the path around the equator has 4 times the excess of the <b>3 x 90^{\circ}</b>
path, and the hemisphere bounded by the equator can be constructed by
pasting together exactly four of the <b>3 x 90^{\circ}</b> triangles. Could it be that
excesses add? Take a look at any triangle made up of two 90&deg; angles at
the equator and <b>n</b> degrees (interior angle) at the pole. It has excess of n
degrees and can be made up of n triangles of 1&deg; excess (see figure 5.6).

</br></br>

This is beginning to look like a theorem.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-6.png'/><br\><div class='caption'>The excess of the large triangle is the sum of the excesses of the small triangles. </div><br\></div>

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-7.png'/><br\><div class='caption'>Excess BCD (<b>x</b> to <b>z</b>) = Excess ABC (<b>x</b> to <b>y</b>) + Excess ACD (<b>y</b> to <b>z</b>).</div><br\></div>

</br></br>

<br\><b>Theorem</b> If a triangle is subdivided into two subtriangles, then the excess
of the triangle is the sum of the excesses of the pieces.
Notice that the theorem doesn't mention anything about spheres in
particular. Neither will the proof; it is true for triangles on any surface.

</br></br>

<br\><b>Proof</b> Look at a record of a turtle using a pointer to measure the excess
in triangle ABC (figure 5.7). The pointer starts out with heading <b>x</b> and
ends up with heading <b>y</b>. Now measure the excess of triangle ACD. To
make things simple imagine a second turtle that starts from A with the
same heading, <b>y</b>, at which the first turtle ended measuring ABC. Then
the second turtle's pointer should agree with the first turtle's all along
the line AC. In particular, the pointers of the two turtles will agree at
point C. The second turtle then continues to D and ends up at A with
pointer heading <b>z</b>, Now we'll measure the excess in the large triangle
BCD as follows: Start at A with pointer heading <b>x</b> and follow the first
turtle's path as far as C. At C, pick up the second turtle's path (this
can be done without changing the pointer heading) and follow it around
clear back to A. The pointer winds up with heading <b>z</b>. So the excess of
the large triangle is the angle from <b>x</b> to <b>z</b>, which is just the sum of the
excesses (<b>x</b> to <b>y</b> and <b>y</b> to <b>z</b>) of the two smaller triangles.
This is a pretty good theorem. It is the core of a really great one:

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-8.png'/><br\><div class='caption'>Two regions joined along a common arc.</div><br\></div>

</br></br>

<br\><b>Excess Additivity Theorem</b> The excess of any polygon is the sum of the
excesses of the pieces in any polygonal subdivision.

</br></br>

Can you see how to prove this? One way is to notice that the reasoning
in the proof above still works even if we combine whole polygons at
a time. It doesn't really depend on the pieces being triangles. All we
need is a situation like the one shown in figure 5.8, in which the two
pieces are pasted together along a single arc. In fact, we don't even need
polygons and vertices. The proof depends only on topology, how pieces
are hooked together. We'll have more to say about this in section 5.2.

</br></br>

<h3>Excess and Area</h3>

</br></br>

Compare the excess additivity theorem to the following obvious and
familiar theorem:

</br></br>

<br\><b>Theorem</b> The area of any polygon is the sum of the areas of the pieces
in any polygonal subdivision.

</br></br>

Excess acts like area in this respect. Could it be that excess is proportional to area, that is, <b>E = kA</b>, where <b>E</b> is the excess around a polygon,
<b>A</b> is the area of the polygon, and <b>k</b> is some constant? This would account 
for the additivity of excess. But it is obvious that k couldn't be
a universal constant like <b>\pi</b>. After all, <b>k</b> must be zero for a plane but it
can't be zero for a sphere. Not only that, but it can't even be the same
constant for all spheres. Consider our <b>3 x 90^{\circ}</b> path on a sphere the size
of the earth and on one the size of a ping-pong ball. They have the same
excess, but certainly not the same area. So how about the hypothesis
that k depends on the surface, and every surface may have a different
k? Let's try that out. Obviously any plane has <b>k = 0</b>. The following
theorem shows that the hypothesis is also true for spheres:
Theorem For any polygon on a sphere of radius <b>r</b>, <b>E = kA</b> where <b>k =
\frac{1}{r^2}</b> (if <b>E</b> is measured in radians).

</br></br>

<br\><b>Proof</b> First we'll show that the ratio <b>E / A</b> is the same for all polygons on
the sphere. (Then, denoting this constant ratio by <b>k</b>, it will be simple
to find out what <b>k</b> is.) The idea is to measure both excess and area
by subdividing a large polygon into a lot of tiny identical pieces and
adding them all up. For example, you can subdivide any polygon into
tiny standard-sized squares. (Of course there can be a little bit of surface
left over, but not much. You can always use smaller squares to get a
better approximation. And calculus buffs know how to talk about the
limit of small squares.) Then the area of the polygon is the sum of the
areas of the individual small squares. Similarly, the additivity theorem
ensures that the excess of the polygon is the sum of the excesses of the
individual squares.

</br></br>

Now, since the sphere is the same all over, the individual squares can
be taken to be absolutely identically shaped pieces of the sphere. Thus,
not only will they all have the same area, they will also all have the same
excess. Let a be the area of anyone of these small square pieces, and let
e be the excess. Then the area of any large polygon that consists of <b>N</b>
small squares is <b>A = Na</b> and the excess is <b>E = Ne</b>. So <b>E/A = e/a</b> is
a constant that is independent of the size or shape of the large polygon.
Finally, since the ratio <b>E / A</b>, which we will denote by <b>k</b>, is the same
for all polygons on the sphere, we can compute k by considering any
particular polygon for which we know both the excess and the area.
Take, for instance, the equator bounding half the sphere. For that path
we have
<p><br>A = \frac{1}{2} <span class='textsc'> sphere area </span> = 2 \pi r^2</p>
 and
<p><br>E = 2 \pi \operatorname{radians}</p>
 so
<p><br>k = \frac{E}{A}=\frac{2 \pi}{2 \pi r^2}=\frac{1}{r^2}</p>
 This completes the proof.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-9.png'/><br\><div class='caption'>Is this a turtle line?</div><br\></div>

</br></br>

We can combine this theorem with the definition of excess as the 
correction factor in the total-turtle-trip theorem to get a formula (originally
due to Gauss) which relates the area of a spherical polygon to the total
turning around its boundary:

</br></br>

For a turtle walking around a polygon on the surface of a sphere,
total turning (in radians) = <b>2 \pi - \frac{A}{r^2}</b>

</br></br>

where <b>A</b> is the area of the polygon and <b>r</b> is the radius of the sphere.

</br></br>

<h4>Exercises for Section \thesection</h4>

</br></br>

<ul>
</li><li> <b>[D]</b> We proved a formula relating the excess around a closed path
to the area of the interior. But any closed path on the sphere bounds
two regions, which in general do not have the same area. Which region
do we take as the inside? Can you clarify the definitions of excess and
``inside'' so that the area formula in 5.1.5 will work for both of the regions
bounded by a closed path? [HA]

</br></br>

</li><li> Give a formula for the sum of the interior angles of a triangle on a
sphere in terms of the area of the triangle. [A]

</br></br>

</li><li> Convince yourself again that an equator must be a turtle line. Is the
path of a boat with rudder aimed straight a turtle line? How about a
jet plane flying ``straight''?

</br></br>

</li><li> Look at the record of turtle tracks in figure 5.9. The left legs take
the same number of steps as the right legs, and all steps are the same
length, so why isn't the track a turtle line? (It obviously isn't one.) Can
you apply the principle of ``a line must be everywhere the same''? Can
you answer the question without the principle? Another problem along
the same lines is as follows: If a line must be ``everywhere the same,''
then what happens to a turtle line on a flattened sphere as it goes from
the round part to the flat part? Can you reformulate the ``a line is
everywhere the same'' principle so that it really applies to turtle lines?
[H]

</br></br>

</li><li> Would a little turtle (say, one you might use for measuring turtle
lines on a ping-pong ball) draw the same turtle lines on a big sphere as
a big turtle? What do you have to say about turning a turtle loose to
draw triangles in your back yard? Would the turtle's size matter? Think
about a tiny, tiny turtle crawling over each pebble in your back yard.
Does that make you nervous about what a turtle line really is? After all,
you know pretty much what a triangle of turtle lines, say, 20 feet on a
side should look like, but wouldn't a tiny turtle get all confused by the
pebbles and blades of grass? Who tells you what size turtle to use? [H]

</br></br>

</li><li> [D] In 5.1.4 we used the formula Total Turning + Excess = 360&deg;
together with the fact that the equator is a turtle line to deduce that the
excess around the equator is 360&deg;. But can you use the pointer method
to see directly that Excess = 360&deg; rather than 0&deg; or 720&deg;? [HA]

</br></br>

</li><li> Imagine that a turtle is a two-wheeled creature with a motor on each
wheel. Can you convince yourself that the total turning of this turtle is
simply the distance rolled by one wheel minus the distance rolled by the
other wheel divided by the distance between wheels? Does this mean
that a car going over a bump with its left wheels but not its right will
be turned by an amount which is equal to the extra distance traveled
going up and over bump, divided by the distance between wheels? [A]

</br></br>

</li><li> Exercise 7 gives some remarkable information about staggered starts
on race tracks. Show that the difference in pathlengths of adjacent
lanes in going around any non-self-intersecting track on a plane is <b>2 \pi x</b>
(width of lane). Show that a figure-eight track does not need a staggered
start. Are these statements true if the track is banked? [HA]
</ul>

</br></br>

<h3>Curvature</h3>

</br></br>

We've cleared up the mystery of non-360&deg; turtle trips on the sphere, and
discovered a relation between angles and areas for spherical polygons.
The wonderful thing is that much of our insight carries over to geometry
on arbitrary surfaces as well. This is because our methods of investigation 
are local and intrinsic. The whole theory, remember, depended on
having a notion of the difference between ``straight'' and ``turning,'' and
we were careful to define ``straight line'' in a way that doesn't rely on
coordinate systems, intersecting spheres with planes, or anything else,
except for a turtle walking along, locally marking off equal distances
with its left and right legs. Thus, anywhere a turtle can walk we have
turtle lines, excess, and the additivity theorem. Let's see how the other
observations we made about spheres might carry over to arbitrary surfaces (figure 5.10).

</br></br>

<h3>Curvature Density</h3>

</br></br>

Does the relation between excess and area E = kA hold true on an
arbitrary surface? Pretty clearly not. Suppose we have a sphere that is
squashed flat on one side. The excess is zero for polygons on the flat
part, but regions on the rounded part will have nonzero excess. Where
does the proof we gave for spheres in 5.1.5 break down? Exactly here:
We divided our polygon into small square patches and then noted that,
for a sphere, all the squares are identical; each square has the same
<b>k = e/a</b>. That's not true for the flattened sphere. Little square patches
taken from the flat side will be flat, with <b>k = 0</b>, while squares taken
from the curved side will not be flat. So <b>k = e/a</b> is different on the two
parts.

</br></br>

In general, for an arbitrary surface, we can think of <b>k</b> as a measurement
that can be made at any point on the surface. The value of <b>k</b> at a
point is the excess per unit area of a small patch of surface containing
the point. We call <b>k</b> the curvature density of the surface at a point. It is
``density'' because it is ``stuff per unit area'' (in this case, excess per unit
area). And it is called ``curvature density'' rather than ``excess density''
because, although it is measured using excess, we can interpret it as
telling how ``curved'' the surface is at the point. Think of it this way:
Suppose we want to approximate a small patch of an arbitrary surface
by a small patch of some surface we know very well. Within a small
area almost any surface will appear flat like a plane, but we can make
an even better approximation by using a small piece of a sphere. We'll
choose the approximating sphere to have the same excess per unit area
as the patch of surface. So if <b>k</b> doesn't change radically in the small
patch, all the geometry there --- angles, total turning, and so on --- will be
very close to the geometry on a sphere whose excess per unit area is <b>k</b>,
that is to say, a sphere whose radius is determined by <b>k = \frac{1}{r^2}</b>. The
smaller the radius of the approximating sphere (that is, the greater the
curvature density), the more ``curved'' we say the surface is. A football,
for example, is not too curved in the middle; <b>k</b> is small there. But at the
pointed ends the football is curved as much as a sphere of small radius.
From the middle to the pointed ends, <b>k</b> gradually increases. The surface
of a very smooth lake will be well approximated by a patch of a sphere
as big as the earth; the density of curvature is so low that you might
think it was flat.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-10.png'/><br\><div class='caption'>Turtle investigating an arbitrarily curved surface. (Drawing by Joseph Cote.)</div><br\></div>

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-11.png'/><br\><div class='caption'>A figure that is not a topological disk can nevertheless be divided into topological disks.</div><br\></div>

</br></br>

<h3>Total Curvature</h3>

</br></br>

Curvature density is a local quantity that we can measure in the vicinity
of a point on an arbitrary surface. In this subsection we show how to
define a global version of curvature density called total curvature. Start
with a region of an arbitrary surface and divide it into polygonal pieces.
For each polygon, compute the excess. Now sum the excesses for all the
pieces. The result is called the total curvature, <b>K</b>, of the region. Of
course, in order for this definition to make sense, we have to know that
if we chop up a region into polygons in two different ways, then the sum
of the excess of the pieces is the same in both cases. This is true, and
we leave the proof to you (exercise 4).

</br></br>

If the region we started with was itself a polygon, then the additivity
theorem implies that <b>K</b> is precisely equal to the excess around the
boundary of the polygon. So we can think of <b>K</b> as a sort of ``excess
over the region,'' except that it works for any region on a surface, not
just for polygons. For example, the boundary of the surface shown in
figure 5.11 is not a single simple closed path, so there is no obvious
excess to relate to the total curvature <b>K</b>. Nevertheless, we can divide
the surface into two polygonal pieces and sum the excesses to get total
curvature. (There is more to say on this; see exercise 15.)

</br></br>

Even better, we can compute <b>K</b> for a region that has no boundary
at all: the sphere. Divide a sphere into two pieces, the northern and
southern hemispheres. Each of these is bounded by the equator, which,
as we know, has excess <b>2 \pi</b>. So the two hemispheres each have excess
<b>2 \pi</b>,giving <b>4 \pi</b> for the total curvature of the sphere. This is somewhat
striking: The curvature density <b>k</b> of a sphere depends on the radius, but
the total curvature <b>K</b> is the same for all spheres.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-12.png'/><br\><div class='caption'>Square with handle.</div><br\></div>

</br></br>

Can we say exactly which regions have <b>K</b> equal to excess around the
boundary? The answer is found in the proof of the additivity theorem:
whichever regions we can build up by pasting together polygonal pieces,
always joining pieces two at a time along a single arc. Notice that this
ensures that when we're done, the boundary of the region will be a
simple closed curve. For example, we can't build the surface in figure
5.11 this way, because we can't add a piece to close one of the rings
without connecting to the rest of the surface along two separate arcs.
(Incidentally, the fact that a region is bounded by a simple closed curve
does not guarantee that it can be built up from pieces according to the
required scheme. The ``square with handle'' shown in figure 5.12 is one
example.)

</br></br>

If you remember our discussion of the deformation theorem of subsection 4.3.1 you may suspect that these regions that can be built up
from small polygonal pieces, each piece joined on along a single are, are
precisely the things we called topological disks (that is, regions that can
be deformed to a disk). And indeed this is the case. So the relation
between total curvature and excess can be restated as follows:
Theorem For any topological disk on an arbitrary surface, the angle
excess around the boundary is equal to the total curvature of the interior.
In summary: Thinking about angle excess has led us to two versions
of curvature, curvature density and total curvature. We can clarify
the relation between these two notions by making an analogy between
curvature and paint. Think of the surface as covered with paint. The
curvature density is analogous to how much paint you have per little
chunk of surface area. Spheres have uniform coats of paint-that is, the
curvature density is the same at all places. If you want to know the total
amount of paint <b>P</b> on some surface with constant paint per unit area <b>p</b>,
the answer is simple: <b>P = pA</b>, where <b>A</b> is the total area. In the same
way the total curvature <b>K</b> of a surface of constant curvature density <b>k</b>
is just <b>K = kA</b>. But just as in the case of a room that has one coat of
paint on the wall, a double coat on the woodwork, and no paint at all
on the windows, the curvature density of a surface may vary from place
to place. If the paint density varies from place to place, how do you
find out how much total paint there is? The answer is to divide your
surface into tiny pieces so that the paint density is pretty much constant
on each piece. You find out how much paint is on each little piece by
multiplying paint density times area, and then adding to find the total
paint.

</br></br>

There are two different ways to compute the total curvature of a
region. The first is the paint method: Divide the region into tiny pieces,
so that <b>k</b> is approximately constant on each piece, and add up k times
area for all the pieces. The second method you cannot do with paint:
Divide the region into topological disks of any size at all, and total up
the excess around the boundaries. With this method you need not look
to see if the curvature is uniform or examine every bit of the surface to
see how dense the curvature is there.

</br></br>

It is remarkable that these two processes end up computing the same
thing, that total curvature-something spread out over a whole regioncan be measured by a method that looks only at the boundaries of
the pieces in a subdivision. In fact, you may recognize this as another
instance of the ``local-global'' principle of section 4.2. That is to say,
we can determine a global quantity (total curvature) by accumulating
information (excess) that is measured locally at the boundaries of the
pieces in a subdivision. In section 5.3 we'll see how to put this property
of curvature to good use.

</br></br>

<h3>Cylinders</h3>

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-13.png'/><br\><div class='caption'>Turtle line and square are still turtle line and square when rolled into a cylinder.</div><br\></div>

</br></br>


We've been talking a lot about arbitrary surfaces, but so far our only
concrete example has been the sphere. Let's look at another surface, the
cylinder (a tin can without top or bottom). What is k for a cylinder?
The answer is that <b>k = 0</b> at every point, just as for a plane (and
therefore <b>K = 0</b> as well). The reason is profound: A cylinder is just a
plane rolled up, and rolling something up doesn't change any pathlengths
on the surface. (If you are not convinced, glue a rubber band to a piece
of paper. Now try to stretch the rubber band without ripping the paper.
Rolling the paper up won't do it, except for a tiny bit of stretching that
happens because the rubber band is not in the surface but a little above.)

</br></br>

If pathlengths don't change, then a straight (turtle) line in the plane
remains a turtle line when the plane is rolled up into a cylinder. How
can we be so convinced that turtle lines are preserved? Because the
determination of what is a turtle line depends only on measuring small
distances: The turtle knows it is walking in a straight line when its left
legs and its right legs are moving the same distance in each step. Look
at the straight line in figure 5.13 and the turtle tracks around it. Now
imagine the paper rolled up. The turtle will still walk in the same tracks,
because no distances have changed. Angles don't change when you roll
something up either, so in any polygon of turtle lines on a cylinder we
will measure the same vertex angles as in the ``unrolled'' polygon on the
plane. Therefore the polygon will have zero excess.

</br></br>

There is an important lesson here. When we began with planes and
spheres, it was pretty clear that <b>k = 0 </b> meant what people usually mean
by ``flat'' and <b>k <br\>ot= 0</b> meant ``curved.'' But here is a surface, the cylinder,
that most people would say is curved. You have to decide now whether
you want to go on saying a cylinder is curved, as you always did, or
change your definition of ``flat'' to mean <b>k = 0</b> and then say that a
cylinder is fiat. The latter possibility may sound very strange, but it
is a good thing to do if you are interested in a geometry that refiects
properties that are intrinsic to the surface, rather than how things look
to an observer outside of the surface From an intrinsic point of view,
a cylinder is much more like a plane than it is like a sphere. In fact,
a turtle that wasn't allowed to go all the way around the cylinder and
discover its different topology would never be able to tell the difference
between that cylinder and a plane at all! So if you were talking to your
friends who haven't read this book you'd be better off saying that a
cylinder is curved, but a turtle living on the surface of a cylinder would
be happier to hear you say that its world is flat.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-14.png'/><br\><div class='caption'>(a) Flattening a cone. (b) Turtle circle on cone is missing turning done in the gap from <b>2 \pi</b> excess = <b>\theta</b>.</div><br\></div>

</br></br>

<h3>Cones</h3>

</br></br>

Almost any little piece of a cone can be easily laid flat on a plane.
This means that the cone is just about everywhere a zero-curvature-density object; <b>k = 0</b> almost everywhere. But there is an exception:

</br></br>

The tip won't flatten out without ripping. All the curvature in a cone
is concentrated at the tip.

</br></br>

We can compute how much curvature is in the tip by seeing how much
excess is contained in some path around the tip. A little trick makes it
easy to keep track of turtle turning on the cone: Slit the cone up the side
and lay it out flat to get a figure like a pie with a slice missing (figure
5.14a). Turtle turning can now be easily seen as change of heading in
the usual planar way, except in crossing the cut. So look at a simple
turtle circle centered around the tip (figure 5.14b). The total turning
along that path is short of <b>2 \pi</b> by the turning that would have been done
in the pie gap to make a complete planar circle. But excess is, by our
excess formula, exactly what is missing in total turning from <b>2 \pi</b>. So

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-15.png'/><br\><div class='caption'>(a) Concentrated negative curvature: a pie with an extra slice. (b) Saddle surfacespread-out negative curvature.</div><br\></div>

</br></br>

the turning in the gap is excess, and since that turning is precisely the
central angle of the pie gap, <b>\theta</b>, we conclude that <b>\theta</b> is the excess of the
path.

</br></br>

What is nice about cones, then, is that you can see the angle excess
directly: It is the angle you need to cut from a flat piece of surface to
make it into a cone.

</br></br>

Notice that this result, ``excess of path around tip equals pie angle,''
does not depend at all on how big the path around the tip is. So you can
see by pushing the path closer and closer to the tip and always getting
the same excess that the curvature must be concentrated in the tip, and
that the curvature is zero everywhere else.

</br></br>

What is <b>K</b> for a region on the cone? It is zero unless the region
contains the tip, in which case <b>K = 2 \pi</b>. How about <b>k</b>? We said that
<b>k = 0</b> at every point except the tip. At the tip, <b>k</b> is infinite. Don't
let that infinity upset you. After all, <b>k</b> is a density: stuff per unit area.
And on a cone, all the curvature is concentrated at a single point. With
a finite amount of curvature in a region of zero area (a point), density
must be infinite.

</br></br>

Suppose we make a cone using too much paper rather than too littlenot a pie with a slice taken out, but a pie with an extra slice, as shown in
figure 5.15a. You can't push such a thing fiat-not because you have too
little circumference and will rip the cone trying to flatten it, but because
you have too much circumference (for a given radius) and can't cram it
all into a plane. This cone has negative curvature. A path around the tip
contains more than 360&deg;; hence excess is negative. The saddle surface
shown in figure 5.15b is an example of a surface with negative curvature
density at each point (see exercise 9).

</br></br>

<h3>Curvature for Curves and Surfaces</h3>

</br></br>

By way of a brief review, let's explore the analogy between the curvature
of surfaces and the total turning of curves in the plane, which we studied
in chapters 1 and 4.

</br></br>

First of all, the definitions we gave for both surface curvature and
curve turning were local and intrinsic. They could be expressed in
terms of a turtle crawling along a curve or a surface without recourse to
coordinate systems.

</br></br>

What is the analog of total curvature <b>K</b> for a curve? It is simply the
total turning of a turtle walking along the curve. What corresponds to
curvature density <b>k</b>? By analogy with excess per unit area on a surface,
we should define curvature density of a curve to be turning per unit
length. So for any segment of a curve, we can define kcurve to be the
total turning along the segment divided by the length of the segment.
This is the same thing we called simply ``curvature'' in previous chapters.
Just as a sphere has constant <b>k</b>, a circle has constant <b>k_{curve}</b> : In
traversing a circular arc subtended by a central angle of <b>\theta</b> (in radians)
the turtle turns the same angle, <b>\theta</b>, and goes a distance <b>d = r\theta</b>. Hence,
by the above definition, <b>k_{curve} = \frac{\theta}  {r \theta} = \frac {1} {r}</b>, which is analogous to
<b>k = \frac {1} {r^2}</b> for a sphere. (The analogy goes farther; see exercise 18.)
Comparing curvature in one and two dimensions can be misleading,
however, when we think about negative curvature. For a curve, the
difference between positive and negative curvature depends on the direction in which the turtle turns. Turning right rather than left changes
the sign of the curvature. So you might expect that a similar kind of
reflecting will change positive to negative curvature in two dimensions.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-16.png'/><br\><div class='caption'>Which of these paths on a torus are turtle lines?</div><br\></div>

</br></br>


For example, it is easy to imagine that a turtle crawling on the inside
of a sphere would see negative curvature. But this is false. If we look
carefully, we can see that polygons on spheres always have positive excess, whether measured from the inside or the outside. To find negative
curvature, we need to look at something like the saddle surface shown in
figure 5.15b. Actually, this whole notion of inside versus outside a surface is misleading. It is better to think of the turtle as a two-dimensional
creature who lives in a curved world, rather than on it, just as plane
geometry is about figures lying in the plane, rather than on top of or underneath it. Here is another way to say the same thing: We should think
of an idealized two-dimensional surface like the sphere as just that --- a
two-dimensional surface --- not as a shell with separate inside and outside
surfaces.

</br></br>

<h4>Exercises for Section \thesection</h4>
<ul>
</li><li> Suppose turtle walks all the way round a cylinder on a path perpendicular to its length. That is a closed path with zero turtle turning,
hence 360&deg; excess. But didn't we say that a cylinder has zero curvature?
Doesn't zero curvature mean that there can't be any excess? Explain.
[HA]

</br></br>

</li><li> Which surfaces have no excess anywhere? Can you formulate a
general description of such a surface? [A]

</br></br>

</li><li> Figure 5.16 shows some paths drawn on a torus. Which of these are
turtle lines? [A]

</br></br>

</li><li> <b>[D]</b> Show that total curvature <b>K</b> is well defined. That is, show that
if you chop up a region into topological disks in two different ways, and
sum up the excess around the boundaries, you'll get the same answer in
both cases. [HA]

</br></br>

</li><li> The cone is an example of a surface where curvature is concentrated
at a point. Can you find an example of a surface where curvature is
concentrated along a curve? [A]

</br></br>

</li><li> Prove that a ``radial circle'' drawn around the tip of a cone (by taking
points of equal distance from the tip) really is a circle from the turtle's
point of view-that it can be drawn by going <span class='textsc'>forward</span> a little and turning
a little, over and over. Is a radial circle centered about some point
other than the tip of the cone still a turtle circle? What do turtle circles
look like on a sphere? How about radial circles on spheres? [A]

</br></br>

</li><li> Show that a football has total curvature <b>4 \pi</b>. [HA]

</br></br>

</li><li> What is the total curvature of a cube? What is <b>k</b>? Is there concentrated curvature? If so, where and how much? [A]

</br></br>

</li><li> Envision a point on some surface, and the shape of the surface near
the point. Show that if the surface looks like a hill or a depression the
curvature density <b>k</b> is positive at the point, whereas if the surface looks
like a saddle <b>k</b> is negative. Do this geometrically, by drawing some turtle
lines and estimating excess. Even better, make a model of the surface
and draw some turtle paths on it.

</br></br>

</li><li> Suppose that you make a scale model of a surface, say scaled by a
factor of <b>s</b>. Show that <b>K</b> remains unchanged. How does <b>k</b> change? [A]

</br></br>

</li><li> Using the fact that changing the scale of a surface does not change
total curvature, conclude once again that all the curvature in a cone is
in its tip. [HA]

</br></br>

</li><li> Suppose that a turtle is a bit out of adjustment and takes slightly
longer (by 2\%) strides with its left legs than with its right. (Assume
that the distance between turtle's right and left legs is the same as its
right-side stride.) What is the radius of the circle such a turtle would
walk on a plane if it did not ``turtle turn?'' (Use turtle stride as your
unit of distance.) Suppose this turtle walks 25 steps on some surface
and finds it has returned to the initial position and heading. What is
the total curvature interior to this path, if the interior is a topological
disk? How about a 400-step trip? [A]

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-17.png'/><br\><div class='caption'>Segment of an umbrella.</div><br\></div>

</br></br>


</li><li> <b>[P]</b> Suppose that a turtle is sitting at the tip of a cone. It goes a
distance <b>T</b> away and draws a circle around the tip. According to the
turtle's measurement, <b>T</b> is the radius of the circle. But of course it finds
that the circumference of the circle is not <b>2 \ pi T</b>, but something less. (It is
missing exactly the ``defect pie'' from being <b>2 \pi T</b>.)The turtle will discover
the same sort of thing on a sphere: The circumference of a circle is not
<b>2 \pi T</b>, but a little less. Suppose we define ``global <b>\pi</b>'' on a surface to be
equal to the circumference of a circle divided by twice the radius. What
is global <b>\pi</b> for a cone? For a sphere? Does it depend on how big a
circle you draw? Does it depend on where you draw the circle? If you
cannot give the precise value, can you give upper and lower bounds for
global <b>\pi</b>? Define ``intrinsic <b>\pi</b>'' to be the circumference divided by twice
the radius of curvature and answer the same questions for it. [H]

</br></br>

</li><li> <b>[P]</b> Suppose somebody told you that not only is the earth not flat,
our universe is not flat either. What could that mean? Answer in terms
of angles, circumferences and radii of circles, and perhaps surface areas
and radii of spheres. Notice before starting that we never had to leave
the surface of a sphere to discover that it was curved, as long as we had
drawn turtle lines. (Einstein decided that the universe was not flat. He
thought it was curved in a very special way to account for the existence
of gravity. In fact, he hypothesized that the paths objects follow under
the influence of gravity are just ``turtle paths'' in our curved universe.
We'll have much more to say about this in chapter 9.)

</br></br>

</li><li> Can you find the total curvature of a surface with holes in it (figure
5.11) in terms of the excesses of the boundaries of the surface? [HA]

</br></br>

</li><li> An umbrella is made by sewing together six pieces, as shown roughly
in figure 5.17. Where does the umbrella have negative curvature? How
can you tell? [HA]

</br></br>

</li><li> We have ignored the problem of non-simply-closed curves. Show
that additivity still works for the situation shown in figure 5.18 in the
following way:
Total turning around the closed path
= (2<b>\pi</b> - total curvature contained within the outer loop)
+ (2<b>\pi</b> - total curvature contained within the inner loop)

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-18.png'/><br\><div class='caption'>What is the relation between excess and total curvature for this curve?</div><br\></div>

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-19.png'/><br\><div class='caption'>Solid angle for a region on a sphere measures the opening subtended by it.</div><br\></div>

</br></br>


18. Extending the analogy between curvature for circles and spheres,
the central angle <b>\theta</b> of a circular arc has a counterpart called solid angle,
<b>\omega</b>. Just as <b>\theta</b> measures how much of a plane lies between two rays
(or how much plane can be seen from the center through a gap in a
circle), <b>\omega</b> measures how much ``sky'' can be seen through a window in a
sphere (figure 5.19). By analogy with the formula <b>\theta = k_{curved} = d/r</b>,
<b>\omega</b> is defined to be <b>\omega = kA = A/r^2</b>, where A is the area of the window.
Notice that B can be measured as the turning done by turtle along the
arc. In an analogous way, can you relate it to things that the turtle can
measure on the sphere's surface? [A]
</ul>

</br></br>

<h3>Total Curvature and Topology</h3>

</br></br>

We ended the previous section with an analogy between the total curvature of a surface and the total turning of a curve. But there is one
property of total turning that we haven't seen reflected in our study of
surfaces: topological invariance. Remember that the total turning of a
closed curve is a topological invariant (section 4.1). However you deform
the curve, the total turning remains the same. Now we'll see that this
same fact is true for the total curvature of a closed surface.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-20.png'/><br\><div class='caption'>Pushing a dent in a sphere and surrounding the dent by a turtle path.</div><br\></div>

</br></br>

<h3>Dents and Bends</h3>

</br></br>

Suppose you put a small dent in a sphere. What happens to the total
curvature? Perhaps it depends on the dent --- if it is a flattening maybe
that reduces the curvature; if it is a pointy kind of outward dent maybe
that increases the curvature. But the answer is that total curvature is
unchanged.

</br></br>

Proof Surround the dent with a closed path, which isolates within a
topological disk the region affected by the dent, but make sure that the
path is far enough away from the dent so that the immediate vicinity
of the path is unaffected by the dent (see figure 5.20). The curvature
outside the disk obviously has not changed at all. What is happening
inside? Think of a turtle measuring the total curvature within the disk
by computing the excess along the path. Before and after denting, the
turtle treks the same territory. The excess must be the same before and
after denting, and so the total curvature does not change at all.
This fact illustrates what a strong statement we are making when
we assert that we can measure something spread out over a region (the
total curvature of a topological disk) by measurements made only at the
boundary of the region (in this case, the excess along the boundary). The
consequence is that any deformation of the region that doesn't affect the
boundary must leave the total curvature invariant.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-21.png'/><br\><div class='caption'>Topological sphere = Cylinder + Two caps.</div><br\></div>

</br></br>

So total curvature is invariant under small deformations. But this
means it must be invariant under any topological deformation. The
point is that any topological deformation can be made by doing a bunch
of small deformations one at a time, each small deformation affecting
only a part of the surface that can be isolated within a disk.
You can dent, bend, smash, buckle, push, or pull a sphere one small
piece at a time into any shape you choose and the total curvature remains
the same. It doesn't change no matter what you do to the sphere as
long as you don't rip it or in some other way change its topology. A
football has total curvature <b>4\pi</b>.A Mickey Mouse balloon, ears and all,
has total curvature <b>4\pi</b>.That sphere we flattened on one side still has
total curvature <b>4\pi</b>.(Suppose we smash the southern hemisphere flat.
That part has total curvature zero, and the northern hemisphere has
only <b>2\pi</b>.Where did the other curvature go? It's there; find it.)

</br></br>

Suppose you take a sphere and pull it to make a cylinder capped on
each side with a hemisphere (see figure 5.21). The resulting topological
sphere still has total curvature <b>4 \pi</b>.But each cap has <b>2 \pi</b>,so that doesn't
leave you anything for the cylinder. This is another way to show that
cylinders have zero total curvature (and, since a cylinder is the same all
over, that the curvature density is zero as well).

</br></br>

What happens to total curvature when we deform a cylinder? To be
sure, any deformation whose effects we can isolate within a topological
disk will always preserve total curvature. But, for example, suppose we
take the cylinder and spread it out at the end to create flanges (figure
5.22a). Can we assert that this flanged cylinder has total curvature
zero? No, we can't, even though the flanged cylinder is topologically
the same as a regular cylinder. Look carefully what happens when we
deform the cylinder in a little patch near the edge (figure 5.22b). We
can't surround that deformation by a closed turtle path, simply because
the turtle would have to run off the edge of the cylinder to get around
the deformed part. There is no turtle-path barrier, so you can push
curvature off the edge. On the other hand, any deformation that does
not affect the boundary of the cylinder (as in figure 5.22c) cannot affect
the total curvature.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-22.png'/><br\><div class='caption'>(a) Flanged cylinder. (b) Deforming the cylinder near the boundary may change total curvature. (c) A deformation of the cylinder that preserves total curvature.</div><br\></div>

</br></br>

There is an important class of surfaces for which this problem of
deformations near the boundary cannot arise. These are the closed
surfaces --- those surfaces that, like the sphere, have no boundary to begin
with. (We disallow planes or infinitely long cylinders as closed surfaces,
by stipulating that a closed surface must not stretch off ``to infinity.'')
The followingtheorem summarizes the preceding observations:

</br></br>

<br\><b>Theorem</b> Total curvature <b>K</b> is a topological invariant for closed surfaces.
For surfaces with boundary, the total curvature is unchanged by deformations that do not affect the vicinity of the boundary of the surface.

</br></br>

Once again, the situation for the total turning of a curve is analogous.
For closed curves, total turning is a topological invariant. But it is
certainly not a topological invariant for nonclosed curves, since any
nonclosed curve can be deformed to a straight line segment. On the
other hand, if we make a deformation of a curve that keeps the curve
fixed in a vicinity of the endpoints, total turning will be unchanged.

</br></br>

<h3>Concentrated Curvature</h3>

</br></br>

Are you puzzled by the sphere with one hemisphere squashed flat? The
flattened side has no curvature and the other hemisphere has total
curvature <b>2 \pi</b> ,yet the entire surface is topologically a sphere and has
total curvature <b>4 \pi</b>. Where is that missing <b>2 \pi</b> of curvature? It must be
concentrated in the edge between the two hemispheres.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-23.png'/><br\><div class='caption'>A rectangle enclosing part of the rim of a tin can.</div><br\></div>

</br></br>

Here is another example of the same phenomenon. Take a cylinder
and close it at the top and bottom with two flat disks. The resulting ``tin
can'' is topologically a sphere, but the disks and the cylinder each have
zero curvature. There must be <b>4 \pi</b> worth of total curvature concentrated
in the edges that form the rims of the can. This concentrated curvature
arises because the pieces joined together are not matched: To a turtle
walking on the cylinder that forms the side of the can the rim is a straight
turtle line, but to a turtle on the top of the can the rim is a circle, not
a straight line. This ``difference of opinion'' shows up as excess in a
strip near the rim. Figure 5.23 shows a rectangular path surrounding
a part of the rim given by an arc of angle <b>\theta</b>. The ``rectangle'' consists
of four right angles, two straight sides crossing the rim, and two paths
measuring the turning in the arc from opposite sides of the rim. Now
the four right angles, the two straight sides, and the arc on the side
of the can contribute <b>2 \pi</b> total turning. So the arc on the lid accounts
for the whole excess, and it has a turtle turning of <b>\theta</b>. In other words,
there is B worth of curvature concentrated in this piece of the rim. Since
all parts of the rim look the same, there must be <b>2 \pi</b> worth of curvature
in the entire rim, or <b>4 \pi</b> in both rims. The tin can does indeed have the
same total curvature as the sphere. The curvature density k for the tin
can is zero on the side, top, and bottom, and infinite along the rims.
In general, we can construct surfaces by pasting together pieces, but
before we can assert that the total curvature of the surface is the sum of
the curvature of the pieces we must check to make sure that there isn't
any curvature concentrated along the edges or in the corners between
the pieces. How do we check such a thing? If the pieces fit together
smoothly with no sharp edges and with no sharp points (such as the peak
of a cone), then there won't be any concentrated curvature. If there is a
sharp edge, then we can measure the total curvature concentrated there
as the difference of opinion between two turtles, each one computing
the turning along the edge as viewed from its piece of the surface (see
exercise 5). The curvature at a sharp point can be measured by a turtle
trip around it.

</br></br>

<h3>Cutting and Pasting</h3>

</br></br>

What is the total curvature of a torus (the surface of a donut)? The first
thing to notice is that any torus has the same total curvature as any
other. A fat torus with a small hole and a skinny torus like the inner
tube of a bicycle tire are topologically the same and therefore have the
same total curvature. We can make a torus by pasting together surfaces
whose curvature we do know: cylinders. Take a cylinder (for which k =
0) and bend it as shown in figure 5.24a. If we're careful not to do any
stretching at the boundary of the cylinder, then this bent cylinder still
has total curvature zero. Now paste two bent cylinders together (figure
5.24b) to get a torus. Each half of the torus has total curvature zero.
Therefore, the whole torus does also.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-24.png'/><br\><div class='caption'>Joining two bent cylinders to make a torus.</div><br\></div>

</br></br>

\textbf{Theorem} Any torus has zero total curvature.

</br></br>

We are not asserting that a torus is flat, like a cylinder or a plane. That
would be saying that the curvature density is zero everywhere. What the
theorem does say is that any torus has just as much negative curvature
as positive curvature.

</br></br>

So now we know the total curvature for two kinds of closed surfaces,
spheres and tori. A sphere is not topologically the same as a torus, yet
there is a relation between them. The torus can be described as a ``sphere
with a handle attached.'' The process of ``handle attaching,'' though not
a deformation, is a good, general way of making new surfaces from old.
We say ``good'' because it is easy to keep track of how total curvature
changes in the process. Here is how this is done for a sphere and a torus:
Start with a sphere and flatten out two regions on it. From each
region cut out a flat disk. Now paste a ``handle'' in the holes left by
the disks (figure 5.25a). The handle is topologically a cylinder, but the
edges of the cylinder have been flanged out to match smoothly with the
flat regions around the disks. The result is a torus. In other words, we
have the equation

</br></br>

<p><br>(\operatorname{sphere}) - (2 \operatorname{disks}) + (\operatorname{handle}) = \operatorname{torus}</p>

</br></br>

Now compute the total curvature on each side of the equation. The
sphere has <b>K = 4 \pi</b>.The disks were flat and so have <b>K = 0</b>. The torus,
as we just saw, also has <b>K = 0</b>. So in order for the equation to be
balanced, the handle must have total curvature <b>-4 \pi</b>.

</br></br>

<div class='figure'><br\><img src='images/figures/fig5-25.png'/><br\><div class='caption'>(a) Adding a handle to a sphere to make a torus. (b) Two-holed torus. (c) Surface equivalent to topological sphere with six handles.</div><br\></div>

</br></br>

We can also attach a handle to any surface by the same flattening,
cutting, and gluing operation. Since we know the curvature in the handle
now, we see that this always decreases the total curvature by <b>4 \pi</b>.What
is the total curvature of a two-holed torus (figure 5.25b)? It is the same
as that of a torus with a handle attached or a sphere with two handles
attached:

</br></br>

<p><br>K(\operatorname{two-holed torus}) = 4 \pi - 4 \pi - 4 \pi= -4 \pi</p>

</br></br>

More generally, if we have a surface that is topologically the same as a
sphere with n handles attached, then the total curvature is given by

</br></br>

<p><br>K(\operatorname{sphere with n handles}) = 4 \pi (1 - n)</p>

</br></br>

The importance of knowing about spheres with handles is this: Any
closed surface in three-dimensional space is topologically equivalent to
a sphere with a bunch of handles attached. For example, the surface
in figure 5.25c is equivalent to a sphere with six handles. So we see
from the equation above that the total curvature of any closed surface
in three-dimensional space is an integer multiple of <b>4\pi</b>.

</br></br>

We won't give the proof that any surface in three dimensions is equivalent to a sphere with handles, but we will whet your mathematical
appetite by informing you that there are closed surfaces that do not
have total curvature a multiple of <b>4 \pi</b> and, as a consequence, are ``too
twisted'' to fit into three-dimensional space. We'll meet some of them in
chapter 8. As it turns out, any closed surface, including these ``twisted
ones,'' must have total curvature a multiple of <b>2 \pi</b>. We'll get to that in
chapter 8 as well.

</br></br>

One final comment in our study of curvature on surfaces: We saw that
for closed plane curves the total turning is always an integer multiple of
<b>2 \pi</b>. Now we find a similar thing for closed surfaces in three-dimensional
space. All that arbitrary denting and bending and all those excess angles
must somehow combine to give exactly and precisely an integer multiple
of <b>4 \pi</b>. That seems almost miraculous. You would have thought it
possible to change the total curvature of a surface a little bit by making
a small change to the surface. But no; in changing the total curvature
of a closed surface you must change it by a multiple of <b>4 \pi</b> or not at all.

</br></br>

<h4>Exercises for Section 5.3</h4>

</br></br>

<ul>
</li><li> Show how to divide a cone into two pieces, neither of which has any
curvature. [A]
<div class='figure'><br\><img src='images/figures/fig5-26.png'/><br\><div class='caption'>Knotted handle on a flat square.</div><br\></div>
</li><li> Consider a surface with a ``knotted handle'' (figure 5.26). How does
adding a knotted handle change the total curvature of a surface? [HA]
</li><li> Take a plane and push a dent into it. Since this dent is just a topological deformation, the total curvature is still zero. That means there must
be places of both positive and negative curvature density. Where is k
positive? Negative? Zero? When is k a maximum? A minimum?
[A]
</li><li> In subsection 5.3.3 we computed k for a torus by making the torus out
of two cylinders. But couldn't we have done the same thing by making
a torus out of one cylinder? [A]
</li><li> <b>[D]</b> Justify the following recipe for measuring curvature concentrated
along an arc: Take two turtles, one on each side of the are, and have each
turtle measure the total turning along the arc from its side. Show that
the difference between the two measurements is equal to the curvature
concentrated in a small strip around the arc. (How do you decide which
turtle's measurement to subtract from which?) [HA]
</li><li> <b>[D]</b> The discussion in subsection 5.3.2 shows that, strictly, the excess
additivity theorem of 5.1.4 is false because it doesn't allow for the
possibility of concentrated curvature. But, remarkably, the proof of the
theorem is not at fault. The proof is true, but the theorem is false!
Find the part of the proof that needs to become a condition stated in
the theorem, and formulate that condition carefully. [HAj
</li><li> The surface shown in figure 5.27 is formed by placing a smaller cube
on top of a larger one. What is the total curvature? How much is at
each vertex? [A]
</li><li> <b>[D]</b> Must any torus have at least one point where the curvature density
is zero? [A]
<div class='figure'><br\><img src='images/figures/fig5-27.png'/><br\><div class='caption'>Double cube.</div><br\></div>
<div class='figure'><br\><img src='images/figures/fig5-28.png'/><br\><div class='caption'>Pasting two flanged handles together.</div><br\></div>
</li><li> In section 3.3 we showed by cutting and pasting that
(sphere) - (2 disks) + (handle) = torus. Find another cutting-and-pasting construction that demonstrates that
(2 spheres) - (2 disks) + (handle) = sphere,
and use this equation to compute the total curvature of a handle. [A]
</li><li> Two flanged handles are pasted together as shown in figure 5.28.
What is the total curvature? How much is concentrated along the circle
where the handles are joined? [HA]
</li><li> Look at some familiar objects and consider their topology and
curvature. For example, your hand. Your wrist has an equatorlike turtle
path of excess <b>2 \pi</b>. That must be the total curvature of the topological
disk contained (your hand). Can you imagine deforming the surface
of your hand to a disk? Each of your fingertips looks much like a
hemisphere (has <b>2 \pi</b> total curvature). Where is the <b>-4 x 2 \pi = -8 \pi</b>
curvature to balance out the <b>5 x 2 \pi</b> on the fingertips and give the net
<b>2 \pi </b> curvature measured from the wrist? Isn't this a nice way to show
that if you have <b>n</b> fingers, you must have <b>n - 1</b> spaces between them?
<div class='figure'><br\><img src='images/figures/fig5-29.png'/><br\><div class='caption'>(a) The five Platonic solids: tetrahedron, octahedron, cube, icosahedron, and dodecahedron. (b) The starlike dodecahedron, a rectangular solid with faces which are five-pointed stars (with a point protruding through the central pentagon).</div><br\></div>
</li><li> <b>[DD]</b> Show that any closed surface in three-dimensional space must
have a place where the curvature density is positive. [HA]
</li><li> <b>[D]</b> Suppose you have a closed surface in three-dimensional space
that has non-negative curvature density at every point. Using the result
of exercise 12, show that the surface is topologically equivalent to a
sphere. [HA]
<div class='figure'><br\><img src='images/figures/fig5-30.png'/><br\><div class='caption'>Chopping a handle into two bent-up rectangles.</div><br\></div>
</li><li> <b>[D]</b> A Platonic solid is any object that is flat almost everywhere
and otherwise is as ``regular'' as can be. That means its surface is made
up of a number of faces which are all identical regular polygons pasted
together. Each vertex of the solid is also identical to any other (has
the same number of faces adjoining). Use the result of exercises 12 and
13 to deduce that any Platonic solid must be topologically equivalent
to a sphere. Now, using the fact that you know the total curvature,
show that there can be no more than five Platonic solids. (There are
in fact exactly five: tetrahedron, octahedron, cube, icosahedron, and
dodecahedron. See figure 5.29a.) [H]
</li><li> <b>[D]</b> After doing exercise 14, look at the object shown in figure 5.29b,
the ``starlike dodecahedron'' discovered by Johannes Kepler. It can be
viewed as a regular solid with twelve faces, each of which is a five-pointed
star. The faces meet at twelve vertices, five faces meeting at a vertex.
Shouldn't this count as a Platonic solid? Now go over your proof that
there can be no more than five Platonic solids. What assumptions did
you make that will disallow the starlike dodecahedron? [HA]
</li><li> Compute the total curvature of the basic flange (handle) by dividing
it into two bent-up rectangles and measuring the excess in each rectangle
(figure 5.30). You can compute the turning for the parts of the square
on the flange edges by remembering that that part is supposed to be
``planelike.''
</li><li> What is the total curvature of the ``square with handle'' shown in
figure 5.12? [A]
</ul>

</br></br>

<h2>Exploring the Cube</h2>
<div class='quote'>
Of course, in one sense mathematics is a branch of
knowledge-but still it is also an activity.

</br></br>

Ludwig Wittgenstein
</div>

</br></br>

We learned a great deal in chapter 5 about the geometry of surfaces in
general, but that is not at all to say that we know a great deal about the
geometry of any particular surface. This chapter and the following one
are meant to open up two worlds whose geometries are as interesting and
mathematically rich as plane geometry. The fact that these geometries
are much less well known than plane geometry makes them ideal areas
for your exploration.

</br></br>

Take on the role of explorer. Be daring but patient, look for interesting phenomena, and try to make useful definitions and ask interesting questions. (One deep question is worth more than many shallow
answers.) Formulate guesses and maybe some theorems. Can you prove
your theorems? Can you find useful new ways to look at these worlds?
Take your time; a good exploration is probably weeks long, even if you
concentrate on some small aspect of these geometries. Take a friend or a
group of friends along. Sharing ideas and explaining your special way of
understanding something or your method for accomplishing something
are as valuable as uncovering any particular ``mathematical truth.''

</br></br>

The next two chapters have a common format. We start with an
introduction to the geometric world. The first main section of the
chapter will give you some help in building a computer simulation,
which is perhaps the best tool for basic ``brute force'' experimentation.

</br></br>

The next section contains observations, questions, and suggestions for
problems to solve. Finally, we include a few answers and proofs. (Use
the last two sections sparingly. We have provided them only to help
out should your imagination get tired, or to show you other perspectives
once you think your own exploration is finished.)

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-1.png'/><br\><div class='caption'>A cube.</div><br\></div>

</br></br>

Figure 6.1 shows the surface of a cube. As you can see, it is a
symmetrical surface. Topologically it is a sphere, but it is fiat almost
everywhere. All the curvature is concentrated in the eight vertices. In
particular, no curvature is concentrated along any edge. To a turtle
walking on the cube, crossing an edge causes no difficulty whatsoever.
In fact, a two-dimensional turtle living in the cube's surface will not be
able to tell an edge from the middle of any face. To convince yourself
of this, remember that the turtle can only feel distances within its
two-dimensional world, and observe that a piece of surface does not
need to change shape in crossing an edge. Figure 6.2a shows how an
unstretchable ``rug'' can slide over an edge without being deformed
(changing distances). The edge is therefore no different intrinsically
from the fiat part of a cube. Compare this with trying to push an
unstretchable rug around on a football, or over a vertex of the cube. Or
think of an edge as being a quarter of a very small cylinder, which has
no curvature (figure 6.2b). (Look back to the sections in chapter 5 on
cones and cylinders if you still think an edge should have curvature.)
So crossing an edge is no problem for a turtle. Convince yourself in
any way you can that a straight turtle path will continue on the other
side of an edge in such a way as to preserve the angle of intersection with
the edge, as shown in figure 6.2c. It is a good exercise to see how many
ways you can justify this equal-angle edge-crossing rule as the ``right''
way for a turtle to cross an edge.

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-2.png'/><br\><div class='caption'>(a) A sliding un stretchable ``rug.'' (b) An edge as a quarter of a small cylinder. (e) The equal-angle edge-crossing rule.</div><br\></div>

</br></br>

What happens to a turtle path that runs into a cube vertex? Unlike
edges, vertices have concentrated curvature, which makes it a bit difficult
to imagine equal-strided turtle walks through them. For example, parallel turtle paths through points close to the vertex can go off in very
different directions. This suggests that there really may be no good
choice for how a turtle path should continue after hitting a vertex.
Perhaps the path should continue in a random direction, or even disappear into oblivion. We will leave this for your consideration. Note that,
from the point of view of a cube-walking turtle, this issue is a minor
one. Running into a particular point like a vertex is such an unlikely
thing that you may well choose to ignore the possibility entirely.
What kinds of tools should you have to explore a cube? Naturally your
imagination is most important, but having a real cube is a big help. A
model cube big enough to draw on yet small enough to hold in your hand
would be ideal. Pencil and paper are good tools, too, especially if you
do to a cube what we did to the cone in subsection 5.2.4: cut it up and
lay it fiat, as in figure 6.3. But probably the most useful tool would be
a computer simulation of a cube with a turtle wandering around on its
surface. The following section gives some abbreviated but useful advice
for writing such a program. Read it even if someone else has written
a cube program for you to use. There are some important messages in
teaching a computer to walk a turtle on a cube. In particular, we will
take the time to discuss some of the design principles we used in earlier
projects but didn't mention explicitly.

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-3.png'/><br\><div class='caption'>A cut-up, flattened cube, showing part of a turtle line.</div><br\></div>

</br></br>

<h3>A Computer Cube</h3>

</br></br>

Developing a computer cube is a large project, and it is best to start
out by dividing the task into parts. We'll follow the same strategy
that we used in chapter 3 when we implemented a three-dimensional
turtle. First, we'll forget about drawing things on a display screen and
concentrate on describing the state of a turtle walking on the cube. The
next step is to specify how this state is changed by the state-change
operators <span class='textsc'>forward</span> and <span class='textsc'>left</span>. The main problem here will be to figure
out how to determine when and where the turtle crosses an edge. Finally,
we'll worry about how to go from this internal representation to pictures
on a display screen.

</br></br>

<h3>Internal Representation</h3>

</br></br>

In writing a program to simulate a cube-bound turtle perhaps the most
important question is: How should the computer program represent the
cube? Though the kind of representation we're after is one that is good
for the computer and not necessarily good for you (in thinking about
cube problems), the representation we propose will turn out to be very
good for conceptualizing the cube's geometry.

</br></br>

You might think that the simplest and most natural way to make a
computer cube is to start with a three-dimensional turtle and in some
way constrain it to the surface of the cube. But this method is clearly not
intrinsic; all of three-dimensional space is not relevant to the geometry
on a cube. And on reflection there are some difficulties. How do we
embody the constraints that restrict the turtle to the cube's surface? In
particular, the rotation of the turtle in crossing an edge at an oblique
angle is not a simple roll, pitch, or yaw. These are not grave difficulties,
but they encourage us to look for alternative representations.

</br></br>

Let's go back to secure ground. One thing our computer certainly
knows about is planar turtle geometry; it already knows everything
about walking and turning in a plane. But except for the vertices, a
turtle on a cube is always in one plane or another. So why not pretend
the turtle always stays in the same plane, even inside the same square?
Then we will just have to keep track separately of what face the turtle
actually is on. Think of it this way: We are looking through a window
at the cube (figure 6.4a). The frame of the window coincides with the
front face of the cube. A turtle walks on the front face. When it hits
the edge of the cube we just rotate the cube till the new face appears in
the window.

</br></br>

Crossing an edge amounts to just moving the turtle (parallel to an
edge) to the opposite edge of the window and remembering that we've
rotated the cube. (The process of sliding the turtle across the window
upon edge crossing is called wrapping. Standard computer display systems often do this kind of ``wraparound'' automatically.) There is no
need to worry about changing planes at all; that is automatically taken
care of merely by realizing we're on a new face. We also have a bonus: In
figuring out when the turtle changes faces, we have to check for crossing
only four edges (the window edges) rather than all 12 different edges of
the cube.

</br></br>

So a large part of the state of a turtle on a cube will be summarized
by two-dimensional position and heading ``window coordinates'' that
describe the turtle relative to the current face. If the turtle never crossed
any edges, then these window coordinates would be all we'd ever need
to worry about.

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-4.png'/><br\><div class='caption'>(a) Walking on a cube-the window picture. (b) A trip that leaves the turtle at the top of the window, but at the side of the first face.</div><br\></div>

</br></br>

How should we keep track in the computer of what face the turtle is
on? More important, notice that we need to know more than just which
face we're on, because a face can fit into the window in four different
ways. Consider the path shown in figure 6.4b: The turtle can go up
across an edge, then right 90&deg; forward across another edge, and finally
right 90&deg; again and across a third edge, to come back to the top of the
window, but the side of the first face. So what we really need is to keep
track of the whole ``rotational state of the cube'' behind the window,
not just which face is in the window frame.

</br></br>

Here is a good scheme for keeping track of the cube's rotational state:
Create a variable, or slot, for each place a face can occupy, <span class='textsc'>front</span>, <span class='textsc'>back</span>,
<span class='textsc'>top</span>, <span class='textsc'>bottom</span>, <span class='textsc'>rightside</span>, and <span class='textsc'>leftside</span>. Now slip into each of those
slots the names of the initial faces that occupy them:

</br></br>

<div class='inline-editor turtle-code'>
FRONT <- INITIAL.FRONT
BACK <- INITIAL.BACK
</div><br\><br\>
Whenever the turtle crosses a window edge, we merely shuffle the
contents of the slots in the way dictated by the particular edge crossed.
For example, in crossing the top edge, the face that was in the top
slot gets flipped down into the front position, the back face becomes
the new top, the bottom becomes the back, and the front face ends up
on the bottom. We can accomplish this by the following sequence of
instructions:

</br></br>

<div class='inline-editor turtle-code'>
TEMP <- FRONT
FRONT <- TOP
TOP <- BACK
BACK <- BOTTOM
BOTTOM <- TEMP
</div><br\><br\>
(The extra <span class='textsc'>temp</span> slot is needed to fix the standard ``shuffle bug'' that
always appears when we reorder variables. Compare with the <span class='textsc'>yaw</span>,
<span class='textsc'>pitch</span>, and <span class='textsc'>roll</span> procedures in 3.4.3.) Notice that the face in the window
is always in the <span class='textsc'>front</span> slot.

</br></br>

This may be the first time you have encountered this kind of symbolic
encoding of mathematical information, and it may take a while for you
to get comfortable with it. Right now you should make sure you believe
that all the information is there; given the current state of the <span class='textsc'>front</span>,
<span class='textsc'>top</span>, and the other variables and the heading and position of the turtle
in the window, one does indeed know the position and heading on the
cube.

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-5.png'/><br\><div class='caption'>(a) Labeling vertices. (b) Numbering vertices.</div><br\></div>

</br></br>

Another way to keep track of the rotational state of the cube is to
shuffle not faces, but vertices. If we label the cube's eight vertices as
shown in figure 6.5a, then flipping the cube when the turtle crosses the
top edge of the window corresponds to

</br></br>

<div class='inline-editor turtle-code'>
TEMP <- FRONT1
FRONT1 <- FRONT2
FRONT2 <- BACK2
BACK2 <- BACK1
BACK1 <- TEMP
TEMP <- FRONT4
FRONT4 <- FRONT3
FRONT3 <- BACK3
BACK3 <- BACK4
BACK4 <- TEMP
</div><br\><br\>
When we consider the problem of drawing the cube on the display
screen, we will see that shuffling vertices turns out to be more convenient
than shuffling faces. Shuffling edges is another possible method, but we'll
stick with vertices in implementing the cube program. (Chapter 8 will
discuss another program, which uses the face-shuffling method.)

</br></br>

<h3>Permutations</h3>

</br></br>

Shuffling things around in slots is a standard mathematical operation
called a permutation. The above considerations show that the symmetry
rotations of the cube can be represented as permutations in several ways
(faces, edges, vertices). By numbering slots, we can represent a permutation simply as a list of numbers. For example, [2 6 7 3 1 5 8 4] is
interpreted as

</br></br>

<div class='inline-editor turtle-code'>
the contents of slot 2 get moved to slot 1,
the contents of slot 6 get moved to slot 2,
the contents of slot 7 get moved to slot 3,
the contents of slot 3 get moved to slot 4,
the contents of slot 1 get moved to slot 5,
the contents of slot 5 get moved to slot 6,
the contents of slot 8 get moved to slot 7,
the contents of slot 4 get moved to slot 8.
</div><br\><br\>
So if we number the vertices of the cube as shown in figure 6.5b, then
crossing the top of the window permutes the vertices exactly as in this
example. Similarly, crossing over the right edge of the window invokes
the permutation [4 3 7 8 1 2 6 5]. As an exercise, write down the
permutations corresponding to the left and bottom edges of the window.
To keep track of how the vertices get shuffled, assign a permutation
to each of the four edges of the window corresponding to the flip made
when the turtle crosses that edge. Then develop a procedure called
<span class='textsc'>shuffle</span><span class='textsc'>.vertices</span> that takes as input the number of the edge crossed
and shuffles the contents of the eight slots according to the appropriate
permutation.

</br></br>

In net, the ``coordinate system'' we have chosen to represent turtle
state on a cube has two parts: the window coordinates (position, heading), and a permutation (the shuffled vertices represent a net permutation of the initial configuration) that describes the rotational state of the
cube behind the window. State-change operators change both parts of
this state, and, in particular, one of four special permutations operates
on the rotational state when an edge is crossed. Note that with this
method we have avoided any reference to three-dimensional space.

</br></br>

<h3>Crossing Edges Using Dot Product</h3>

</br></br>

A problem that must be solved regardless of representation is this: How
do we know when the turtle has crossed an edge of the cube? We
have to check whether the line segment that is the turtle's intended
path intersects any edge of the window. So let's consider the following
general problem: Given two line segments in the plane (an ``edge'' and
an ``intended turtle path''), how can we tell whether they intersect and
compute the point of intersection?

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-6.png'/><br\><div class='caption'>Two segments intersect.</div><br\></div>

</br></br>

As you might guess from our experience in chapter 3, vectors are a
useful tool for solving this problem. Let \textbf{a} and \textbf{b} be vectors running from
the origin to the endpoints of a given line segment. Then \textbf{e} = \textbf{b} - \textbf{a}
is the vector running from \textbf{a} to \textbf{b}, and the line segment itself is the
set of points represented by <b>\mathbf{a} + \lambda \mathbf{e}</b> where <b>\lambda</b> (a number between 0 and
1) specifies the fraction of the way from a along e the particular point
is. In our application, \textbf{a} and \textbf{b} will be the endpoints of an edge of the
window, and \textbf{e} the edge vector itself. Similarly, if the turtle's path is
the vector \textbf{t} running from \textbf{p} to \textbf{q} (that is, if <b>\mathbf{t} = \mathbf{p} - \mathbf{q}</b>) then the points
on the path are given by <b>\mathbf{p} + \mu \mathbf{t}</b> where <b>\mu</b> is between 0 and 1 (figure 6.6).

</br></br>

Now, if the two segments intersect, this can be expressed by
<p><br>\mathbf{a} + \lambda \mathbf{e} = \mathbf{p} + \mu \mathbf{t}</p>
 What remains is merely to solve this equation for <b>\lambda</b> and <b>\mu</b> and check that
they are both between 0 and 1. (See exercise 4 of this section.) This
looks like one equation with two unknowns, but think for a moment:
The vector equation implies a numerical equation for each component.
One could write out these two equations, but there is an even better way
to obtain the solution, which goes along with the vector philosophy of
using intrinsic descriptions and operations.

</br></br>

Algebraically speaking, we want to eliminate one of the unknowns,
say <b>A</b>, from equation 1. We can do that by looking at the component
of the equation in the direction perpendicular to e. Since e itself has no
such component, it and A will both disappear from the equation. You
can think of this operation as setting up coordinates parallel and perpendicular to e and looking at the perpendicular component. Projecting
both sides of the vector equation onto a line perpendicular to e amounts
to the same thing.

</br></br>

Dot product (subsection 3.5.2) and the Perp operation (subsection
3.2.2) are precisely the algebraic tools we need to carry out this projection easily. We take the dot product of Perp(e) with both sides of our
intersection equation:
<p><br>\operatorname{Perp}(\mathbf{e}) \cdot (\mathbf{a} + \lambda \mathbf{e})= \operatorname{Perp}(\mathbf{e}) \cdot (\mathbf{p} + \mu \mathbf{t})</p>
Using linearity and the fact that <b>\operatorname{Perp}(\mathbf{e}) \cdot \mathbf{e} = 0</b> we can solve for <b>\mu</b>:
<p><br>\operatorname{Perp}(\mathbf{e}) \cdot \mathbf{a} + \operatorname{Perp}(\mathbf{e}) \cdot \mathbf{e} = \operatorname{Perp}(\mathbf{e}) \cdot \mathbf{p} + \mu \operatorname{Perp}(\mathbf{e}) \cdot \mathbf{t}</p>
<p><br>\operatorname{Perp}(\mathbf{e}) \cdot \mathbf{a} = \operatorname{Perp}(\mathbf{e}) \cdot \mathbf{p} + \mu \operatorname{Perp}(\mathbf{e}) \cdot \mathbf{t}</p>
<p><br> \mu = \frac{\operatorname{Perp}(\mathbf{e})\cdot(\mathbf{a} - \mathbf{p})}{\operatorname{Perp}(\mathbf{e}) \cdot \mathbf{t}}</p>
Because of the symmetry in the intersection problem we can solve for <b>\lambda</b>
by interchanging a with p and e with t:
<p><br> \lambda = \frac{\operatorname{Perp}(\mathbf{t}) \cdot (\mathbf{p} - \mathbf{a})}{\operatorname{Perp}(\mathbf{t}) \cdot \mathbf{e}} </p>
Equations 2 and 3 give a quick and simple way to solve for <b>A</b> and <b>\lambda</b>.
If both are between 0 and 1, an intersection has occurred at the point
<b>\mathbf{p} + \mu \mathbf{t}</b> (or <b>\mathbf{a} + \lambda \mathbf{e}</b>, which is the same).

</br></br>

We can implement these formulas in a computer procedure called
<span class='textsc'>check</span><span class='textsc'>.edge</span>, which takes as inputs the two endpoints of a window edge
and the two endpoints of the turtle's path (each of these points should
be expressed as a vector):

</br></br>

<div class='inline-editor turtle-code'>
TO CHECK.EDGE (EDGE.START, EDGE.END, TURTLE.START, TURTLE.END)
   P <- TURTLE. START
   A <- EDGE. START
   E <- EDGE.END - A
   T <- TURTLE.END - P
   MU <- DOT (PERP (E) , A - P) / DOT (PERP (E) , T)
   LAMBDA <- DOT (PERP (T) , P - A) / DOT (PERP (T) , E)
   IF BOTH (BETWEEN(MU, 0, 1), BETWEEN (LAMBDA, 0, 1))
      THEN
         INTERSECTION ~ P + MU * T
         FRACTION ~ MU
         RESULT ~ "INTERSECTION FOUND"
      ELSE RESULT ~ "NO INTERSECTION"
</div><br\><br\>
The procedure checks whether the turtle's path intersects the edge, and
sets a variable called <span class='textsc'>result</span> to indicate whether or not an intersection
occurred. If there is an intersection the procedure sets variables that give
the point of intersection and the number <b>\mu</b>, which specifies the fraction
of the turtle path that was traversed before the intersection occurred
(see exercise 1). This procedure uses the <span class='textsc'>perp</span> subprocedure, as given in
subsection 3.2.2, and also a procedure that takes two vectors as inputs
and outputs the dot product:

</br></br>

<div class='inline-editor turtle-code'>
TO DOT ([VX VY], [WX WY])
   RETURN (VX * WX) + (VY * WY)
</div><br\><br\>
In addition, a simple <span class='textsc'>between</span> subprocedure is used to tell whether a
number lies within a specified range.

</br></br>

The complete solution to the edge-crossing problem can now be given
by a procedure called <span class='textsc'>check</span><span class='textsc'>.intersections</span>, which takes as inputs the
turtle's current position and the endpoint of the path:

</br></br>

<div class='inline-editor turtle-code'>
TO CHECK.INTERSECTIONS (POSITION, END.POINT)
   REPEAT FOR I = 1 TO 4
      CHECK.EDGE (EDGE.START(I) , EDGE.END(I), POSITION, END.POINT )
      IF RESULT = "INTERSECTION FOUND"
         THEN
            EDGE.HIT <- I
            RETURN
</div><br\><br\>
This procedure uses <span class='textsc'>check</span><span class='textsc'>.edge</span> to see whether the path crosses any of
the edges. After the procedure is run the variables <span class='textsc'>result</span>, <span class='textsc'>intersection</span>,
and <span class='textsc'>fraction</span> can be examined by other procedures to determine whether
an intersection occurred, and, if so, where. Also, the variable <span class='textsc'>edge</span><span class='textsc'>.hit</span>
specifies which edge was intersected. (In order for this <span class='textsc'>check</span><span class='textsc'>.intersections</span> procedure to work, you need to supply subprocedures <span class='textsc'>edge</span><span class='textsc'>.start</span>
and <span class='textsc'>edge</span><span class='textsc'>.end</span> that output the endpoints of the appropriate window
edges.)
Note that the <span class='textsc'>return</span> statement in the last line prevents the <span class='textsc'>check</span><span class='textsc'>.intersections</span> procedure from going on to try the next edge if an intersection is found before the last time through the loop.

</br></br>

<h3>Implementing the State-Change Operators</h3>

</br></br>

Now that we know how to tell if the turtle crosses an edge of the window,
let's get on to the problem of moving around generally on the cube.
This entails specifying the state-change operators <span class='textsc'>forward</span> and <span class='textsc'>left</span>
(and their ``opposites'' <span class='textsc'>back</span> and <span class='textsc'>right</span>) with respect to the internal
representation (the window position and heading and the permutation).
We must say how each state-change operator modifies these quantities.
Turning the turtle with <span class='textsc'>left</span> and <span class='textsc'>right</span> is a simple operation-just let
the heading change as usual.

</br></br>

To implement <span class='textsc'>forward</span>, start by letting p be the position of the turtle
in the window. If the turtle is to go a distance D, first try the full
distance, ending at q. Now we need to know whether q is inside or
outside the window. This can be done with the <span class='textsc'>check</span><span class='textsc'>.intersections</span>
procedure above. If there is no intersection with any of the edges, then
we're done; the turtle's end position is <b>q</b>. If there is an intersection,
then <span class='textsc'>intersection</span><b> = P + \mu t</b> tells where to go on the current face, and
<span class='textsc'>fraction</span> = <b>\mu</b> determines how far the turtle needs to go on the new
face: <b>D_{new} = (1 - \mu)D</b>.

</br></br>

More explicitly, here's what to do when there is an intersection:

</br></br>

\textbf{Step 1} Move the turtle from the current window position p to the
intersection point <b>p + \mu t</b>. (If we're drawing the turtle's path on the
display, we should also draw a line between the corresponding points on
the display screen. We'll discuss how to do this in subsection 6.1.5.)

</br></br>

\textbf{Step 2} Wrap the turtle across the window to the opposite edge. Algebraically, this entails adding or subtracting the length of the window
edge from the turtle's <b>x</b> or <b>y</b> coordinate. (This part of the path doesn't
get drawn, of course.)

</br></br>

\textbf{Step 3} ``Rotate'' the cube by shuffling vertices according to the permutation associated with <span class='textsc'>edge</span><span class='textsc'>.hit</span>, the window edge that the turtle crossed.

</br></br>

\textbf{Step 4} Now go back and repeat the entire <span class='textsc'>forward</span> process with the
turtle starting out from the window position computed in step 2, and
going forward a distance <b>(1 - \mu)D</b>.

</br></br>

<h3>Displaying the Cube; Capitalizing on Linearity</h3>

</br></br>

We have left for last the problem of displaying the lines drawn by
the turtle on our cube. The problem may seem difficult because of
our decision to represent a position on the cube by <b>x</b> and <b>y</b> ``window''
coordinates together with the rotational state of the cube, which is
remembered as a permutation of vertices. Wouldn't it have been easier to
use three-dimensional vectors all along, so that the display could proceed
using the projection procedures of chapter 3? Surprisingly, despite our
peculiar internal representation, display will not be hard-and as a bonus
we'll get another look at the power of linearity.

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-7.png'/><br\><div class='caption'>(a) Cube on a display screen. (b) The map from window to display. (c) Vertices are mapped to vertices. (d) Mapping along an edge is easy.</div><br\></div>

</br></br>

Imagine you have the cube drawn on the display in the usual perspective way, with parallel edges drawn parallel on the screen as shown in
figure 6.7a. Now assume that the cube-simulation program knows where
the turtle is in the window frame and which permutation describes the
cube. The problem is to map (translate) the position on the window to
the appropriate point on the display cube, as shown in figure 6.7b.
Notice that this mapping is from a plane (the window) to a plane
(display screen). There is no hint of three dimensions as with the
projection in chapter 3. What else do we know about that mapping?
Certainly vertices get mapped into vertices (figure 6.7c). And if you're
<b>\alpha</b> percent of the way from one vertex to another in the window, it is
reasonable (and true) that you should be <b>\alpha</b> percent of the way on the
display cube as well. In vectors, if you are at <b>\mathbf{s} + \alpha \mathbf{e}</b>, where <b>\mathbf{s}</b> points to
the start of the window edge and \textbf{e} is the window edge vector, and if
<b>\operatorname{M}(\mathbf{s})</b> and <b>\operatorname{M}(\mathbf{e})</b> stand for the ``mapped'' vectors on the display screen
(figure 6.7d), then <b>\mathbf{s} + \alpha \mathbf{e}</b> is mapped into <b>\operatorname{M}(\mathbf{s}) + \alpha \operatorname{M}(\mathbf{e})</b>, or
<b>\operatorname{M}(\mathbf{s} + \alpha \mathbf{e}) = \operatorname{M}(\mathbf{s}) + \alpha \operatorname{M}(\mathbf{e})</b>.

</br></br>

Even better, if the turtle is in the interior of the window at some point
<b>\mathbf{s} + \alpha \mathbf{e_1}+ \beta \mathbf{e_2}</b> (figure 6.7e) then the corresponding point on the display
screen is
<p><br>M(\mathbf{s} + \alpha \mathbf{e_1} + \beta \mathbf{e_2}) = M(s) + \alpha M(\mathbf{e_1}) + \beta M(\mathbf{e_2})</p>

</br></br>

In other words, the mapping <b>M</b> from window coordinates to display
screen is a linear mapping. Consequently, the components <b>\alpha \mathbf{e_1}</b> and <b>\beta \mathbf{e_2}</b>
can be mapped independently and then added. To apply this formula
we must know the mapped positions of the vertices, <b>\operatorname{M}(s)</b>, and the
mapped edges <b>\operatorname{M}(\mathbf{e_1})</b> and <b>\operatorname{M}(\mathbf{e_2})</b>. (In fact, knowing just the vertices
is enough, because the edges can be determined as the vector differences
of the vertices, as shown in figure 6.7f.) Can our internal representation
tell us those vertices? Yes. Suppose that what gets shuffled around in
the vertex slots are the (<b>x</b>, <b>y</b>) coordinates on the display screen of the
appropriate vertex, that is, each <b>\operatorname{M}(\mathbf{s})</b> in <b>z</b> and <b>y</b> coordinates. Then the
mapped vertex positions that we need will be found precisely in the slots
<span class='textsc'>front1</span>, <span class='textsc'>front2</span>, <span class='textsc'>front3</span>, and <span class='textsc'>front4</span> (or in slots 1 through 4 if we use
slot numbers rather than slot names). This is why we chose to shuffle
vertices in constructing the representation of the cube in 6.1.1.

</br></br>

You might as well simplify things by setting up the window coordinates
so that (0,0) corresponds to the bottom left corner of the window.
That way <b>\alpha</b> and <b>\beta</b> are just the window <b>x</b> and <b>y</b> coordinates divided
by the length of the window edge. We have thus reduced the problem
of locating display points to terms that appear in the representation:
window coordinates (<b>x</b>, <b>y</b>) and the vectors contained in the vertex slots
<span class='textsc'>front1</span> through <span class='textsc'>front4</span>, each of which represents a vertex position on
the display. As a vector equation we have
<p><br>DISPLAY = FRONT1 + \alpha (FRONT4 - FRONT1) + \beta (FRONT2 - FRONT1).</p>
 We can implement this formula in a procedure that takes as input a
vector whose components are the <b>(x, y)</b> window coordinates of a point,
and outputs (in vector form) the coordinates of the corresponding point
on the display screen:

</br></br>

<div class='inline-editor turtle-code'>
TO DISPLAY.COORDS [X Y]
   EDGE1 <- FRONT4 - FRONT1
   EDGE2 <- FRONT2 - FRONTl
   ALPHA <- X I LENGTH (EDGE1)
   BETA <- Y I LENGTH (EDGE2)
   RETURN FRONT1 + (ALPHA * EDGE1) + (BETA * EDGE2)
</div><br\><br\>
<h3>Summary Outline of the Cube Program</h3>

</br></br>

<br\><b>Step 1</b> Draw your display representation of a cube, making sure to keep
parallel cube edges parallel on the display. Store the display <b>x</b> and <b>y</b>
coordinates of each vertex in the appropriate variable slot <span class='textsc'>frontl</span>, ...,
<span class='textsc'>front4</span>, <span class='textsc'>back1</span>, ...,<span class='textsc'>back1</span>.

</br></br>

<br\><b>Step 2</b> Use equations 2 and 3 and the procedure given in subsection
6.1.4 to walk a turtle around on the cube, making all computations with
respect to the internal representation.

</br></br>

<br\><b>Step 3</b> Use formula 5 to find the position of the turtle on the display
screen.
We can combine steps 2 and 3 into a single <span class='textsc'>forward</span> procedure. (We
assume below that heading is kept as a vector.)

</br></br>

<div class='inline-editor turtle-code'>
TO FORWARD DIST
   ENDPOINT <- POSITION + DIST*HEADING
   CHECK.INTERSECTIONS (POSITION, ENDPOINT)
   IF RESULT = "NO INTERSECTION"
      THEN FORWARD. WITHIN. FACE (ENDPOINT)
      ELSE FORWARD.ACROSS.EDGE
</div><br\><br\>
The <span class='textsc'>forward</span> procedure uses <span class='textsc'>check</span><span class='textsc'>.intersections</span> (6.1.3) to determine whether the turtle's path intersects any edge of the window. If not,
it simply moves the turtle to the point on the screen that corresponds to
the endpoint of the path and resets the turtle's current position to this
new location:

</br></br>

<div class='inline-editor turtle-code'>
TO FORWARD.WITHIN.FACE (NEW.POSITION)
   MOVE.TO (DISPLAY.COORDS (NEW.POSITION))
   POSITION <- NEW.PoSITION
</div><br\><br\>
(This procedure uses a simple <span class='textsc'>move</span><span class='textsc'>.to</span> subprocedure, which places the
turtle at the appropriate point on the screen and draws a line from the
current position if the pen is down.)
When the path does cross an edge we proceed as described in 6.1.4,
first moving to the intersection point, then wrapping across the screen,
shufflingthe vertices, and going <span class='textsc'>forward</span> the remaining distance:

</br></br>

<div class='inline-editor turtle-code'>
TO FORWARD.ACROSS.EDGE
   FORWARD.WITHIN. FACE (INTERSECTION)
   POSITION <- WRAP (POSITION)
   SHUFFLE.VERTICES (EDGE.HIT)
   FORWARD (DIST * (1 - FRACTION))
</div><br\><br\>
All the rest-drawing the cube and turtle in perspective, maintaining
a <span class='textsc'>heading</span> vector, providing and keeping track of a pen for drawing lines,
and making dotted lines for lines drawn on the back of the cube-we
leave to you.

</br></br>

Once you have a working cube, you may want to try some variations.
For example, vary the display part of your cube so that it looks like
figure 6.3. This should be very easy; all you need do is to permute the
14 vertices shown on that figure rather than the 8 in the perspective
drawing. Do you find this display useful?

</br></br>

<h3>Comments on the Cube Program</h3>

</br></br>

The above discussion of the program was not just to help you write
an efficient simulation. It brings out some essential points, both about
mathematics and about programing.

</br></br>

\textbf{Representations}

</br></br>

Note how rich is the issue of selecting the computer's internal representation of the cube. In particular, the representation chosen above
takes advantage of thinking of a cube as one face (with wrapping)
together with a group of permutations. The permutations are easily
handled, and the turtle motion on one face is also very simple. This has
advantages over the obvious three-dimensional representation: We avoid
three-dimensional rotations altogether. Heading changes only when a
turtle turn command is given. In the ``window representation'' the
method for display is carried out almost trivially because of linearity
and the fact that vertices are chosen as permutation elements. Finally,
the problem of checking whether a turtle segment crosses an edge entails
examining only four fixed edges of the window rather than four of the
twelve different edges of the cube. There is also a conceptual advantage
in thinking of a cube in this way, one face and rotations. This may
not be apparent yet, but in later sections of this chapter we will. use
this representation to demonstrate some remarkable facts about cube
geometry. Beyond our particular concerns here, the general scheme of
forgetting about the nonidentity of similar parts (for example, using one
``window'' instead of six faces of the cube) and keeping track separately
how the parts are shuffled is a potent mathematical technique. The
``window picture,'' as we will call this representation, divides the state
of the turtle into two parts: the window state and the rotational state.
The remarkable observations to come arise out of the fact that these two
parts of the state often change independently.

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-8.png'/><br\><div class='caption'>Cube in perspective, with vanishing point.</div><br\></div>

</br></br>


\textbf{Linearity}

</br></br>

Our method of displaying lines on the cube gives a good image of
the meaning of linearity and of its power of simplification. The linear
mapping from computer window to display screen allows us to map every
point if we know only where the corners of the window are mapped. Even
changing the map so that it is nonlinear by using a vanishing point to
draw the cube in perspective (figure 6.8) is not a difficult perturbation
of the linear case.

</br></br>

\textbf{Intrinsic or Invariant Methods}

</br></br>

Vectors provide an improvement over bare-bones analytic geometry by
eliminating the need for coordinate systems, or at least leaving the choice
of a coordinate system until near the end of the solution, when coordinates can be chosen in a more appropriate way than might be evident
at the onset. Furthermore, vectors carry along meaningful entities, such
as \textbf{e} = edge vector and <b>\lambda</b> = proportion of distance along edge, rather
than just coordinate numbers, which depend as much on how you select
coordinates as on the meaning of the quantities involved. Also, vectors
have operations, such as dot product, that support algebraic manipulations while retaining geometric meaning. Linking geometric with algebraic operations gives alternate and often helpful views. Finally, and
this is not to be scorned, vector equations handle several component
equations at once, and mean less writing and fewer chances for mistakes.
(As an exercise, go back and do the edge-intersection problem using
analytic geometry, without vectors.) In summary: Think geometrically.
and compute with vectors.

</br></br>

<h4>Modular Planning</h4>

</br></br>

Notice that the three main problems we selected for study --- internal
representation, edge crossing, and display were tackled independently.
This kind of modular planning is an excellent heuristic method for
undertaking any programing project. It is generally necessary in large,
complex projects. Only after you have fleshed out the separate parts
is it time to make decisions about interactions between the parts, such
as choosing the internal coordinates to be Cartesian rather than polar
to help with display considerations, or choosing to permute vertices
rather than faces, or using vertex coordinates rather than vertex names.
These interactions can often force you to modify your original plan,
but interfacing the subplans is generally fairly easy, and in this case
positively rewarding (for example, much of the display work can be done
with the internal cube representation).

</br></br>

<h4>Modular Programming</h4>

</br></br>

The computer implementation of the program should reflect the modular
plan. For example, designing the <span class='textsc'>forward</span> command to operate in the
internal representation, as in 6.2.4, means that the command can be used
independently of the particular way of displaying the cube. Moreover,
our presentation suggests some building blocks that can be used on
the way toward the final cube program, such as a general method for
handling permutations (exercises 1 and 2) and routines for dot products
and vector arithmetic. Not only do these building blocks make implementation of the cube program easier by encouraging a modular approach, but they can also be useful in creating similar programs (see
exercise 5). Finally, the fact that separate but meaningful programs
such as <span class='textsc'>check</span><span class='textsc'>.intersections</span> are written independently means that
these parts can be checked out by themselves before you run the main
program, which improves the probability that the whole program will
work and simplifies debugging if there is a problem.

</br></br>

<h4>Exercises for Section \thesection</h4>

</br></br>

The main exercise for this section is, naturally, to implement the turtle
geometry cube as described above. The following questions suggest some
extensions and variants of this project.

</br></br>

<ul>
</li><li> There is a bug in the <span class='textsc'>check</span><span class='textsc'>.edge</span> procedure of 6.1.3: We might
attempt to divide by zero in computing A and u, What does this mean
geometrically, and how should the procedure be modified to avoid the
bug? [A]

</br></br>

</li><li> <b>[P]</b> We have seen how crossing an edge leads to a shuffling of the variables 
<span class='textsc'>front1</span>, <span class='textsc'>front2</span>, etc. This shuffling can be realized as a sequence
of assignment statements, as illustrated in 6.1.1. Writing down such a
sequence is not much of a problem when there are only a few different
permutations to keep track of. (There are only four to worry about in
the cube program). But this method becomes cumbersome when one
wants to shuffle things according to an arbitrary permutation. A better
strategy would be to keep the things to be shuffled in a list and 
then reorder the list according to a given permutation. Write a <span class='textsc'>shuffle</span> procedure
that takes two inputs --- a list of items and a permutation (represented as
a list of numbers, as explained in 6.1.2) and outputs the list of items
reordered according to the permutation. (Beware of the ``shuffle bug.'')

</br></br>

</li><li> <b>[P]</b> In keeping with exercise 2 you may wish to redesign the cube
program so that, instead of variables <span class='textsc'>front1</span>, <span class='textsc'>front2</span>, etc., there is a
single list, <span class='textsc'>vertices</span>, that contains the vertex coordinates. 
The procedure <span class='textsc'>shuffle</span><span class='textsc'>.vertices</span> can then reorder this list using the <span class='textsc'>shuffle</span>
procedure of exercise 2. Show how to rewrite the other pieces of the
cube program to use the <span class='textsc'>vertices</span> list rather than the <span class='textsc'>front1</span>, <span class='textsc'>front2</span>,
etc., variables.

</br></br>

</li><li> <b>[P]</b> Suppose you take a normal <span class='textsc'>poly</span> figure and collect the sides as
vectors. If you draw the sides in sequence you'll obtain the <span class='textsc'>poly</span> figure,
of course. But suppose you first shuffle the sides according to some
permutation. We'll call this a ``permuted <span class='textsc'>poly</span>.'' Write a procedure to
draw permuted <span class='textsc'>poly</span>s and study these figures. Do you see why they are
closed?

</br></br>

</li><li> We saw how solving for <b>\lambda</b> and <b>\mu</b> using equations 2 and 3 of subsection
6.1.3 provided a way to determine whether two line segments intersect:
The intersection occurs if and only if <b>\lambda</b> and <b>\mu</b> are both between 0 and
1. What is the geometric interpretation of other values of <b>\lambda</b> and <b>\mu</b>? For
example, what would it mean if you solved the equations and found that
<b>\lambda = -1</b> and <b>\mu = 4</b>? [A]

</br></br>

</li><li> <b>[P]</b> Many of the techniques we developed for building a cube program
carry over to a program to enable the turtle to crawl around on a
regular tetrahedron. Describe the modifications to the cube program
that will change it into a tetrahedron program. For example, what are
the permutations corresponding to the three edges of the window?
</li></ul>

</br></br>

<h3>Observations and Questions About Cubes</h3>

</br></br>

\textbf{DO NOT READ THIS SECTION} until you have played around a bit
with geometry on the cube.

</br></br>

<h3>Monogons</h3>

</br></br>

There are no one-sided closed polygons in a plane. On the cube, however,
monogons are a diverse and interesting class of figures. The simplest
monogons may well be called ``equators.'' As shown in figure 6.9a, there
are at least two equators through most points on a cube. Find a third
monogon through an arbitrary point on the cube. (``Arbitrary'' excludes
vertices, edges, and maybe the centers of faces, all of which are clearly
not arbitrary.) Find all monogons through a given point. Notice that
each of the equators in figure 6.9a lies in a plane. Is this true for all
monogons? Classify monogons. What are good classification schemes?
Prove that any example you have really is a monogon, rather than a
path that just comes close to closing. The general monogon problem
can be phrased like this: If the turtle starts out somewhere with some
heading and walks straight, under what conditions will that eventually
make a monogon? How does this depend on heading and starting point?
Classify exceptions-for example, starting from nonrandom places on
the cube.

</br></br>

In your search for monogons you will quickly discover a different kind
of monogon: one that comes back to its original position but not its
original heading, as shown in figure 6.9b. Such a monogon may be called
an irregular monogon. What do you notice about the way irregular
monogons close? Prove your conjecture. Note that a monogon cannot
close with the turtle facing opposite to its initial heading (see figure
6.9c). Prove this.

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-9.png'/><br\><div class='caption'>(a) Two equators through an arbitrary point. (b) An irregular monogon. (c) An impossible ``reverse trip'' monogon. (d) A starry monogon-figure (a) extended.</div><br\></div>

</br></br>

An irregular monogon, if extended, may turn into a regular monogon
with crossings (figure 6.9d). Such monogons are like star polygons, in
that they have crossings. We will call them ``starry monogons.'' They
should not be neglected in the search for regular monogons. Is there a
longest regular monogon? Is there a longest nonstarry regular monogon?
In looking for regular monogons you may decide that any turtle walk,
if extended far enough, will close, or at least come very close to closing.
However, you should be able to find a line that you know will never
close to form a regular monogon. Show also that any such non closing
path must intersect itself. These two problems are not very difficult,
but consider on the other hand the following conjecture: Every straight
turtle line will, if extended far enough, come as close as you wish to its
starting point, and may in fact close. In other words, if a turtle leaves
a small spot at its starting point and walks straight away, it will always
eventually run into the spot, no matter how small the spot is.
You may wish to catalog the lengths of regular monogons and look
for surprising regularities.

</br></br>

<h3>POLY</h3>

</br></br>

The <span class='textsc'>poly</span> program does interesting things on the cube. Play with it. For
example, investigate ``squares,'' that is, <span class='textsc'>poly</span>s with 90&deg; angles. Note that
some squares become starry, which can't happen in a plane. How many
sides do such squares have? Look for pretty or unusually symmetric or
asymmetric squares. Can a square have two or three sides? How about
five sides?

</br></br>

All <span class='textsc'>poly</span>s that close in a plane also seem to close on the cube, only
they may have a different number of sides. This is an excellent mediumhard theorem to try to prove. (Give it at least a week.) You may want
to study general fixed instruction programs on the cube.

</br></br>

<h3>Other Gons</h3>

</br></br>

How about bigons? Are they interesting creatures? Or should one let
bigons be bygones?

</br></br>

Can you find a right equilateral triangle, or a right equiangular nonequilateral triangle? What are the restrictions on the sum of interior
angles of a triangle? You will find, in particular, triangles with 270&deg; of
interior angle. Can this 270&deg; be distributed in any possible way among
the three angles? In a plane the 180&deg; of interior angle can be distributed
arbitrarily, but this may not be true on a cube for non-180&deg; triangles.
Does the size of the triangle affect what shapes are allowed? On a plane,
size doesn't matter-hence we have the usual theory of similar triangles
ignoring size. (Perhaps in your studies you will want to omit starry
triangles.)

</br></br>

Circles (that is, <span class='textsc'>poly</span>s where both distance and angle are small) are
good objects to study on a cube. Do circles have centers? How about
the radius of a circle? Recall (section 1.1, exercise 2) that one can define
a radius without reference to a circle's center as the radius of curvature,
equal to the distance traveled divided by the angle turned. What values
can the ratio of circumference to radius of curvature have on a cube?

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-10.png'/><br\><div class='caption'>A shortest distance.</div><br\></div>

</br></br>

<h3>Lines and Distance</h3>

</br></br>

How many turtle lines are there connecting any two points on the cube?
Are there exceptions to the general rule? Is one of those straight lines
guaranteed to be the path of shortest distance between the two points?
If you think you know an algorithm to find the path of shortest distance
between any two points, consider the example shown in figure 6.10.
Explore the analog of the Pythagorean theorem on the cube. Perhaps
you will want to start with equiangular right triangles.

</br></br>

<h3>More Projects</h3>

</br></br>

Can you formulate a maze problem on the cube, as in the discussion of
the Pledge algorithm in chapter 4? Will the Pledge algorithm itself work
on the cube? If not, is there a modification of the algorithm that will
work? If not, is there a modification of the maze problem that does have
a Pledge-type solution? Consider also the cube analogs of the theorems
on the topology of plane curves discussed in chapter 4.

</br></br>

Try out the cubical versions of the random-walk procedures of section
2.1:

</br></br>

<div class='inline-editor turtle-code'>
TO RANDOM.MOVE (01, 02, A1, A2)
   REPEAT FOREVER
      LEFT RAND (A1, A2)
      FORWARD RAND (01, 02)
</div><br\><br\>
<div class='figure'><br\><img src='images/figures/fig6-11.png'/><br\><div class='caption'>Line of sight on a cube.</div><br\></div>

</br></br>

After a long time (say, long enough so that the average distance traveled
is many times around an equator), is the turtle equally likely to be
anywhere on the cube, or it be more likely to find itself near a vertex (for
example) than near the center of a face? Can you devise an experiment
to find out? Can your prove your conjecture?

</br></br>

Is the program

</br></br>

<div class='inline-editor turtle-code'>
TO LEAP
   SETHEADING RAND (0, 359)
   FORWARD 10000
</div><br\><br\>
a good approximation to a random walk? That is, do the points found
by <span class='textsc'>leap</span>ing over and over from the same starting point seem to be
distributed over the cube like the endpoints of random walks? Note
that on a plane such a program would have all of its endpoints on a
circle. In fact, one might still think of the set of points reachable by
going <span class='textsc'>forward</span>some fixed distance as a ``circle.'' But to distinguish it
from a <span class='textsc'>poly</span> circle (it is different on a cube), call it a radial circle. Is
there an interesting theory of radial circles as the radius varies from 0
to infinity? (Radial circles break up into many pieces as the radius gets
larger. The circumference of such a circle will have to be defined as the
sum of the lengths of the pieces.)

</br></br>

<h3>Things to Think About</h3>

</br></br>

One very foggy morning, the turtle looks out into the distance on the
cube. The turtle can see only a distance of about one edge length, so
the only vertices it sees are the four corners of the current face. (Never
having decided what to do if it should run into a vertex, the turtle
sees them as ominous black holes.) As the fog begins to lift and the
turtle can see farther, it sees four more vertices, the remaining ones of
the cube. (Remember, the turtle's universe is the surface of the cube,
and even light rays travel on it. See figure 6.11.) The fog thins some
more and turtle sees another set of four vertices dimly in the distance.
Which vertices are these? Thinner and thinner fog brings more and more
vertices! The turtle begins to wonder if, when the fog finally clears, there
will be a vertex in every direction. Show that on a clear day when turtle
can see forever, it will see an infinite number of vertices, and indeed will
detect vertices in almost every direction; however, there will still remain
directions in which there are no vertices. Also, between any two ``vertex
seeing'' directions there will be a direction with no vertices (and vice
versa).

</br></br>

\textbf{DANGER}: The next section contains ``premade'' (already discovered)
mathematics. It may be harmful to your imagination and should be used
only as a last resort. \textbf{TURN}\textbf{ THE}\textbf{ PAGE}\textbf{ AT}\textbf{ YOUR}\textbf{ OWN}\textbf{ PERIL}.

</br></br>

\pagebreak

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-12.png'/><br\><div class='caption'>Some interesting figures on the cube.</div><br\></div>

</br></br>

<h3>Results</h3>
Figure 6.12 gives some pictorial results. We invite you to study it.

</br></br>

<h3>The Monogon Problem</h3>

</br></br>

\textbf{Theorem} A turtle line can intersect itself only at right angles. Segments
of the same line that appear on a given face can have (window) heading
only <b>\theta</b>, <b>\theta + 90^{\circ}</b>, <b>\theta + 180^{\circ}</b>, or <b>\theta + 270^{\circ}</b>.

</br></br>


We give three different proofs of the first statement. The second statement follows easily from the first.

</br></br>

\textbf{Excess method} The cube's curvature is concentrated at its vertices; <b>4 \pi</b>
total curvature (remember, the cube is topologically a sphere) distributed
among eight identical vertices makes <b>\pi / 2 = 90^{\circ}</b> at each vertex, Hence:
Observe the part of a turtle path between times when turtle is at the
point of the first self-intersection. There is no turtle turning, so any
change in heading must be trip turning (excess, that is, curvature contained within this closed circuit). But curvature comes in lumps of 90&deg; ,
so the difference in heading must be a multiple of 90&deg;

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-13.png'/><br\><div class='caption'>(a) Crossing an edge in the window picture. (b) A face can appear in the window in four different ways.</div><br\></div>

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-14.png'/><br\><div class='caption'>The card picture.</div><br\></div>

</br></br>

\textbf{Window method} Recall the window method of imagining a turtle walk
on a cube, which was the basis for the computer's internal representation
of the cube in section 6.1. One always sees the turtle walking in a single
window with the rest of the cube behind. When the turtle reaches the
edge of the frame, the cube rotates behind the frame to keep the turtle
in the window (see figure 6.13a). In going forward without turning, the
turtle never changes its heading as seen in the window. So if the turtle
ever returns to the starting face it will have the same window heading,
But the actual face, which can fit into the window in four different ways,
may have rotated underneath the turtle by some multiple of 90&deg; from
the initial state (see figure 6.13b). Thus, the relative heading from start
to finish must be some multiple of 90&deg; 

</br></br>

\textbf{Card method} This variant of the window view of cube walking adds its
own insight to many cube problems. Imagine the faces of a cube as cards
cut apart, but with edges labeled to show how they fit together. Lay
down the starting face and start the turtle walking. Draw the turtle line
with ink that penetrates to the table underneath the card. When turtle
gets to the edge of the card, carefully lay down the new connecting card
in the appropriate way. Now pick up the first card and continue. (See
figure 6.14.) Clearly, the line on the table top will always keep the same
heading. If the first card is ever laid down again it will be in one of
four orientations, differing from the original by a multiple of 90&deg;, and
the continuation of the turtle line onto it will be at that multiple of 90&deg;
from the original heading of the turtle.

</br></br>

Notice that the translation from card picture to window picture merely
involves having the window follow the current card, like a mobile TV
camera.

</br></br>

It is impossible to define a heading on a cube in the usual 0&deg;-to-360&deg;
way --- at least, it is impossible if you want heading to change only when
a <span class='textsc'>right</span> or a <span class='textsc'>left</span> command is given. The impossibility is demonstrated
by the existence of turtle lines that, because they do not have any
turning, shouldn't change heading, but do cross themselves. But the
above theorem says there is a sort of heading if you are willing to put up
with 90&deg; ambiguity: If your compass needle has four indistinguishable
arms at 90&deg; to each other, and four norths, then walking straight around
on a cube will never change your heading. Examine the compass in
figure 5.10. That may be an unconventional compass, but it's better
than nothing.

</br></br>

<h3>Headings for Monogons</h3>

</br></br>

\textbf{Theorem} Any regular monogon must have a heading with a rational
tangent.

</br></br>

\textbf{Proof} Look at the ``card'' picture of walking along a regular monogon
from the starting point to the return to the starting point (figure 6.15a).
If the path is to close regularly (that is, wind up with the same heading
it started with), then the final card must be the same as the initial card
and also must have the same orientation. From the figure, though, one
sees that <b>\tan \theta = p / q</b>, which is a rational number. As a corollary, if
<b>\tan \theta</b> is irrational then the above picture cannot be achieved, and the
turtle's path will never close.

</br></br>

\textbf{A converse theorem} If the tangent of the heading is rational, then the
turtle line will close to form a regular monogon.

</br></br>


<div class='figure'><br\><img src='images/figures/fig6-15.png'/><br\><div class='caption'>(a) A straight line in the card picture. (b) A <span class='textsc'>poly</span> in the card picture.</div><br\></div>

</br></br>

\textbf{Partial proof} If <b>\tan \theta = p / q</b>, the above card picture shows what happens
in the first <b>\sqrt{p^2 + q^2}</b> cardlengths of walking. But there is no guarantee
that the card at the end of such a trek is the first card. To make progress
we must change our view from the card method to the window method.
Translating from the card method, we can see that in the window the
turtle will appear at the initial position (and heading) after a trek of
<b>\sqrt{p^2 + q^2}</b> cardlengths. But each wrap has flipped the cube around, and
the face now showing may not be the same as the first, or it might be
the first but not in the correct orientation. To summarize: The turtle
traveling along a heading that has a rational tangent will close its path
as far as the window part of the position state is concerned, but may
undergo a net cube rotation, causing the permutation part of the state
to be different.

</br></br>

Now consider the net flip made by the cube behind the window. If
the turtle continues walking for another <b>\sqrt{p^2 + q^2}</b> distance, the cube
will undergo the same flip again. And then again. And again. Is it
possible that the cube can be flipped again and again in the same way
and never return to its initial position? If the cube ever did return to the
initial position, that would make the turtle's path close. The possibility
that each of a whole infinite sequence of flips could fail to restore the
initial position of the cube is even more unlikely in view of the fact that
there are only 24 possible cube positions to choose from. A proof that
a sequence of identical rotations must eventually return the cube to its
initial rotation state is given in the next subsection.

</br></br>

<h3>POLYs and Other Looping Programs</h3>

</br></br>

<br\><b>Theorem</b> Any turtle program that closes in the plane will close on a cube
(if repeated enough).

</br></br>

<br\><b>Proof</b> Run any turtle program on a cube. Notice that the path drawn
on the table in the card view is just the path the program would draw
when run on a plane (figure 6.15b). So we see that a planar closing
program will draw a path in which the window part of the turtle's state
will come back to its initial state after a single run of the program.
Unfortunately, we have the same problem as with the monogons above:
The final card may not be the same one in the same orientation as the
first card. In other words, the cube may have rotated away from its
initial state behind the window.

</br></br>

The saving fact is that repeating the program over and over performs the
same rotation on the cube again and again. If the initial cube orientation
is eventually restored, then at this point the program will have closed
on the cube. So to finish the proof of the theorem, and of the theorem
in 6.3.2 we must prove the following lemma:

</br></br>

<br\><b>Lemma</b> If a given symmetry rotation (the ``net flip'') is performed over
and over, the initial rotational state will eventually be restored.
You should recognize this as an example of a finite-state process, such as
encountered in subsection 4.4.3. But now we need a bit more information
than that the process winds up in a loop. We need to know that the
loop includes the initial state.

</br></br>

<br\><b>Proof</b> The key idea is that the same rotation is applied over and over,
so if the cube ever finds itself in some given state twice, the sequence of
subsequent rotational states must be the same. Not only that, but the
preceding sequence must also be the same, because applying the inverse
rotation to a given state always does the same thing: It results in the
same (previous) state. More precisely, imagine the sequence of states all
laid out in a row:
<p><br>S_1,S_2,S_3,S_4,... </p>
 Each state is obtained from the preceding one by applying the same
fixed ``flip.'' Eventually some state must repeat, because there are only
24 to choose from. Hence, <b>S_n = S_{n+m}</b> for some <b>n</b> and <b>m</b>:

</br></br>

But now applying the inverse flip to <b>S_n = S_{n+m}</b> shows that <b>S_{n-1}</b> must
be the same as <b>S_{n+m-1}</b>.

</br></br>

For the same reason, <b>S_{n-2} = S_{n+m-2}</b>. Sliding this equality of states
to the left, one step at a time, we arrive quickly (in fewer than 24 steps)
at <b>S_1 = S_{1+m}</b>.

</br></br>

You can easily show that <b>m < 24</b>. In fact, with a good deal of work
you can show that <b>m < 4</b> for any flip, and so we have the following:

</br></br>

<br\><b>A Truly Remarkable Theorem</b> Any looping program that closes in the
plane will close on the cube, but it may take as much as 4 times as long.
Find programs that close in 1, 2, 3, and 4 times their planar closing
runs. Isn't it remarkable that the number 4 is associated with cubes in
this way, rather than, say, 6 (the number of faces)?

</br></br>

In summary: Any program that closes in the plane will, when run
once, return the turtle to the same window state, but may rotate the
cube. However, repeating the program at most 3 more times will return
the cube to its initial rotational state, and will thus return the turtle
to the initial position. By the same reasoning, any turtle line with
heading satisfying <b>\tan \theta = p/q</b> (where <b>p/q</b> is a fraction in lowest terms)
will form a regular monogon whose length is between <b>\sqrt{p^2 + q^2}</b> and
<b>4 \sqrt{p^2 + q^2}</b> times the sidelength of the cube. Notice that monogons with
headings of <b>\theta_1</b> (where <b>\tan \theta_1 = 2</b>) and <b>\theta_2</b> (where <b>\tan \theta_2 = \frac{2.000000001} {1.888888886}</b>), which are very nearly the same angle, close in vastly different
lengths.

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-16.png'/><br\><div class='caption'>Another dissection of the cube.</div><br\></div>

</br></br>

<h3>Another Representation</h3>

</br></br>

Notice that a cube can be cut up into cards in another way than that
shown in figure 6.3; it can be cut up as shown in figure 6.16a. Figure
6.16b shows how to fold this collection of cards into a cube by showing
some ``usual'' edges in dotted lines. In this representation it is clear that
edges are ``flat.'' Figure 6.16c shows a 45&deg; equator in this representation
of a cube. Does this make it easier to see that all 45&deg; equators are the
same length? Did you discover that fact? (If you didn't, be Sure to
measure the lengths of other monogons with the same cube heading.)

</br></br>

<h3>Another Representation Revisited</h3>

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-17.png'/><br\><div class='caption'>A perfect bounce on a square billiards table.</div><br\></div>

</br></br>

<div class='figure'><br\><img src='images/figures/fig6-18.png'/><br\><div class='caption'>A rectangular torus.</div><br\></div>

</br></br>

Suppose you happen to be an excellent billiards player-truly excellent,
so that you can cause the ball to bounce off the cushions many times and
return exactly to the same place. Of course you know that billiard balls
with no spin bounce according to an equal-angle law (see figure 6.17).
But now you want to know about cubes. Show how you can think of a
cube as a square billiards table together with some appropriate group of
permutation operations (name them). A turtle line will just be a bouncing billiard shot (the equivalent of a wrapping window) plus a change
in the hidden part of state (the permutation) for each bounce. Explain
this, and construct a regular monogon in this representation.

</br></br>

<h3>More Distance</h3>

</br></br>

Beyond the conjecture that all regular monogons with the same heading
have the same length, distance on a cube can be the basis for a number
of investigations. In general there are an infinite number of turtle lines
between any two random points. (Are there exceptions to this when
points are nonrandom, such as vertices or centers of faces?) It is true
on a cube that one of those lines must be the path of shortest distance;
but there are other surfaces, such as a rectangular torus (shown in figure
6.18), for which the shortest path between a pair of points need not be
a single turtle line. (It is, however, a number of turtle segments glued
together.) Can you give an example?

</br></br>

<h2>A Second Look at the Sphere</h2>
<div class='quote'>
Do not despair. Remember there is no triangle,
however obtuse, but the circumferenceof some circle
passes through its wretched vertices.

</br></br>

Samuel Beckett, <em>Murphy</em>
</div>

</br></br>

We have already found out a great deal about geometry on the surface
of a sphere, in chapter 5. But our concern there was to uncover facts
about the sphere that would guide our exploration of arbitrary surfaces.
Now is your chance to investigate carefully the peculiarities that make
the sphere different from every other surface. Constructing a computer
simulation of a sphere will be even easier than making one of a cube.
The reason is that a sphere is ``the same all over.'' In mathematical
terminology, one says that the sphere is homogeneous (each point is
just like every other point) and isotropic (at each point, every direction
is just like every other direction).

</br></br>

Approaching the sphere fresh from turtle investigations of planes and
cubes, we see that the salient feature of this new geometry is its curvature. Of course, the cube had curvature, too, but it was concentrated
into eight identical vertices and hence easy to keep track of. The sphere,
however, is everywhere curved, and, as we saw in chapter 5, the excess
of a closed path is proportional to the enclosed area. So the total turning of a closed path depends on its size. Turning cannot be separated
from going forward; the symmetry of a figure such as <span class='textsc'>poly</span> (<span class='textsc'>side</span>, <span class='textsc'>angle</span>)
depends on <span class='textsc'>side</span> as well as <span class='textsc'>angle</span>.

</br></br>

The theme of this chapter is that we can turn this complication to our
advantage. We will find that not only are going forward and turning
interrelated, but when viewed from the proper perspective they are
absolutely identical. This natural symmetry between the basic turtle
state-change operators <span class='textsc'>forward</span> and <span class='textsc'>left</span> will guide us in building the
computer sphere as well as in exploring its geometry.

</br></br>

<h3>A Computer Simulation</h3>

</br></br>

Our design for a computer simulation of a turtle-geometric sphere adheres to the same two principles that proved so fruitful in our work with
the cube. First, we'll separate the problem into modules, and, in particular, define the internal representation independent of concerns about
drawing on the display screen. Second, we'll choose representations that,
as much as possible, are intrinsic to the problem at hand.

</br></br>

<h3>Internal Representation</h3>

</br></br>

There does not seem to be any simple alternative to representing the
sphere as part of three-dimensional space. (You are welcome to look for
alternatives.) This means that our representation will not be entirely
intrinsic. But we can at least use vectors to describe the situation,
rather than jumping directly to Cartesian coordinates. We'll indicate
the turtle's position by a vector \textbf{P} pointing from the center of the sphere
to the current turtle position. In addition, we'll represent the heading
as a vector \textbf{H} that points in the direction the turtle is currently facing
(see figure 7.1a). Note that \textbf{H} is tangent to the sphere and therefore
perpendicular to \textbf{P}.

</br></br>

What is the <span class='textsc'>forward</span>(``sphere forward'') state-change operator in this
representation? The key observation is that it is merely a rotation of P
and H through some angle in the plane determined by those two vectors
(see figure 7.1b and 7.1c). We can easily compute this rotation using the
rotation formula of subsection 3.2.2:

</br></br>

<p><br>\operatorname{Rotate}(v,A) = (\cos A) x v + (\sin A) x \operatorname{Perp}(v)</p>

</br></br>

The vector \textbf{H} can serve as <b>\operatorname{Perp}(\mathbf{P})</b> if we select \textbf{H} to be the same length as
\textbf{P}. And then <b>-\mathbf{P}</b> is <b>\operatorname{Perp}(\mathbf{H})</b>. Therefore, we have in the plane determined
by \textbf{P} and \textbf{H}

</br></br>

<p><br> \operatorname{Rotate}(P,A) = (\cos A)P + (\sin A)H </p>

</br></br>

<p><br> \operatorname{Rotate}(H,A) = (\cos A)H - (\sin A)P </p>

</br></br>

That's all; we are done with <span class='textsc'>forward</span>.
What about <span class='textsc'>right</span>and <span class='textsc'>left</span>?They just rotate \textbf{H} in the plane tangent
to the sphere at \textbf{P} and leave \textbf{P} alone. Again, this is simple to compute
if we can get our hands on Perp(\textbf{H}). We do this in the same straightforward way in which we dealt with the three-dimensional turtle in section
3.4. Along with \textbf{P} and \textbf{H}, include in the turtle's state a third vector \textbf{L}
(for left), which is perpendicular to both \textbf{P} and \textbf{H}. Then, in the plane
determined by \textbf{H} and \textbf{L}, \textbf{L} can serve as Perp(\textbf{H}) and -\textbf{H} as Perp(\textbf{H}). So
in this plane we have <p><br>\operatorname{Rotate}(H, A) = (\cos A)H + (\sin A)L</p>
<p><br>\operatorname{Rotate}(L, A) = (\cos A)L - (\sin A)H</p>

</br></br>

<div class='figure'><br\><img src='images/figures/fig7-1.png'/><br\><div class='caption'>(a) Two perpendicular vectors P and H give position and heading for a turtle on a sphere. (b) <span class='textsc'>forward</span> in perspective. (c) <span class='textsc'>forward</span> in the plane of the path. In (b) and (c), going <span class='textsc'>forward</span> corresponds to rotating P and H in the plane determined by these
two vectors.</div><br\></div>

</br></br>

Thus, the sphere simulation turns out to be the ``turning'' part of a
three-dimensional turtle (with different names attached to the rotation
commands).

</br></br>

In summary: The turtle's state is represented by three vectors \textbf{P}, \textbf{H},
and \textbf{L}, which are initially set up to be mutually perpendicular and of
the same length. <span class='textsc'>forward</span>is the operation

</br></br>

<div class='inline-editor turtle-code'>
P <- (\cos A)P + (\sin A)H,
H <- (\cos A)H - (\sin A)P;
</div><br\><br\>
<div class='inline-editor turtle-code'>
LEFT is the operation
H <- (\cos A)H + (\sin A)L,
L <- (\cos A)L - (\sin A)H.
</div><br\><br\>
<div class='figure'><br\><img src='images/figures/fig7-2.png'/><br\><div class='caption'>(a) The wrong way to draw a turtle path. (b) Breaking up the path into short segments gives the right picture.</div><br\></div>

</br></br>

For computer implementation, see the rotation programs in subsection 3.4.3.

</br></br>

<h3>Display</h3>

</br></br>

With a three-dimensional position vector in hand, all we need do is
project onto a display plane. There seems little point in being fancy, so
we suggest simple parallel projection as described in subsection 3.5.1:
<b>(display_x display_y) = Project(P) = (P_x, P_y)</b>.

</br></br>

We leave it up to you whether you want to display lines on the back side
of the sphere as dotted or in a separate projection, or whether you want
to invent some other display technique.

</br></br>

In drawing the turtle's path, there is one additional complication
that we didn't have to face in the cube simulation or with the threedimensional turtle. Straight turtle lines on a face of the cube and
in three-dimensional space will also look straight when drawn on the
display screen. But that's not true for the sphere. Suppose the turtle
goes <span class='textsc'>forward</span>a large amount. Then rotation will compute the correct
new position, but you should not therefore indicate the turtle's path by
drawing a straight line on the display screen to join the old and new
positions as in figure 7.2a. Lines on the sphere should look curved when
projected onto the display screen. The easiest way to accomplish this is
to break up large <span class='textsc'>forward</span>s into a sequence of small ones, as shown in
figure 7.2b. Each of the small steps can then be represented as a short
straight segment. (Increments of 5&deg; or 10&deg; will probably be short enough
to give a good picture.) If the pen is up, of course, you might as well
save computation time by having the turtle jump directly to the new
position.

</br></br>

<h3>Distances and Angles</h3>

</br></br>

Does it seem strange that our sphere simulation expresses <span class='textsc'>forward</span> as
a rotation through an angle, the same as <span class='textsc'>right</span> or <span class='textsc'>left</span>? You may
choose to make <span class='textsc'>forward</span> take a distance as input rather than an angle,
but measuring distance in terms of angle has advantages. First, it is
an invariant measure of distance (invariant on moving to a sphere of
different size). Provided distance is measured as an angle, programs such
as <span class='textsc'>poly</span> with fixed inputs will have the same behavior on a sphere of any
size. More important, it emphasizes that on a sphere <span class='textsc'>forward</span>and <span class='textsc'>left</span>
are the same kind of operation. They each rotate two of the turtle's state
vectors and leave the third fixed, so if you insist on measuring <span class='textsc'>forward</span>
in units of, say, inches, give thought to measuring <span class='textsc'>left</span> in inches also.

</br></br>

<h3>Exploring</h3>

</br></br>

One of the best heuristics in learning and problem solving applies in
exploring as well: Ask yourself ``What do I know about similar things?''
How is a sphere like a plane or a cube? How is it different, and how do
those differences come about? In particular, a sphere is very much like
a plane when you're constrained within a small area or a narrow slice.
That observation has a lot of experimental and theoretical implications.
For example, every formula that applies on the sphere must approximate
the corresponding plane formula in an appropriately small domain. You
may wish to look carefully for such things.
One word of advice: In setting out to explore the sphere's geometry,
don't let your mathematical sight be clouded by too strong a fixation
on obtaining exact formulas. Of course, there are many exact formulas
to be discovered, but there are also many intriguing approximations and
qualitative results, which you won't want to miss. Be on the lookout.

</br></br>

<h3>POLY</h3>

</br></br>

An obvious area for turtle exploration on the sphere is the behavior of
the <span class='textsc'>poly</span> program

</br></br>

<div class='inline-editor turtle-code'>
TO SPHERE.POLY (A, B)
   REPEAT FOREVER
      FORWARD A
      LEFT B
</div><br\><br\>
<div class='figure'>
<img src='images/figures/fig7-3.png'/>
<div class='caption'><span class='textsc'>poly</span>(90,90)has threefold symmetry; <b>\theta = 120^{\circ</div></b>.}
</div>

</br></br>

Closure, symmetry, and all the other standard <span class='textsc'>poly</span> results deserve your
attention. In some ways spherical <span class='textsc'>poly</span>s and other fixed instruction
programs may be simpler than on a plane-for example, exceptional
looping programs that march off to infinity on the plane cannot do so
on a sphere. (What do they do?) In other ways, spherical <span class='textsc'>poly</span>s may be
much harder to understand.

</br></br>

A good way to get a handle on the general problem is to carefully
examine one specific case-regular four-sided polygons, for example.
Take experimental data on the set of <b>\alpha</b>'s and <b>\beta</b>'s that produce such
figures. Can you guess or derive a functional relationship between <b>\alpha</b> and
<b>\beta</b>? If not, can you find any qualitative features of such a relationship?
Are there restricted domains where the relationship is simple? For a
given value of <b>\alpha</b>, is it possible that there are two different values of <b>\beta</b>
that will both give four-sided figures? Or is the correspondence between
<b>\alpha</b> and <b>\beta</b> one-to-one? Are there ``forbidden domains'' (angles or distances
that cannot have ``squares'' associated with them)? Now make a similar
study for three-sided <span class='textsc'>poly</span>s, or five-sided ones. What are the general
phenomena for <b>n</b>-sided <span class='textsc'>poly</span>s?

</br></br>

<h3>Symmetry Types</h3>

</br></br>

If you try a few <span class='textsc'>poly</span>s you will observe that, just as the vertices of a
<span class='textsc'>poly</span> in the plane lie on a circle, so the vertices of a <span class='textsc'>poly</span> on the sphere
appear to lie on latitudelike paths, that is, on spherical circles. Can
you prove this? Assuming it is true, note the special significance of the
center of this circle. It is a point of the sphere that remains fixed as we
rotate the sphere to produce a symmetry of the <span class='textsc'>poly</span>. Figure 7.3, for
example, shows how we can see a symmetry of <span class='textsc'>poly</span>(90,90) by rotating
the sphere about the center of the <span class='textsc'>poly</span> circle. The amount of rotation
needed for a symmetry (call it <b>\theta</b>) relates directly to the order of the
symmetry. Here <span class='textsc'>poly</span>(90,90) has threefold symmetry, and <b>\theta = 120^{\circ}</b>.
This symmetry angle <b>\theta</b> is a prime candidate for your investigation. Can
you give a formula for <b>\theta</b> in terms of the inputs <b>\alpha</b> and <b>\beta</b> to the <span class='textsc'>poly</span>
program?

</br></br>

<h3>Circles</h3>

</br></br>

Notice that, on a sphere, constant-curvature circles (which are generated
by <span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>) with <b>\alpha</b> and <b>\beta</b> both small) are the same as radial circles
(points of fixed distance from a center), and that this is true in the plane
but not true on the cube (see subsection 6.3.7). (Can you prove this?)
But circles on the sphere differ from circles on the plane in that, on the
plane, the radius of the circle, r, is related to the radius of curvature,
p = <b>\alpha / \beta</b>, by <b>r = \rho</b>. What is the relationship between rand p on the
sphere? Furthermore, the circumference of a circle is neither <b>2 \pi r</b> nor
<b>2 \pi \rho</b>; nor is the area <b>\pi r^2</b> or <b>\pi \rho^2</b>. What are the correct formulas? (Hint:
In investigating these relationships it is much easier initially to use <b>r</b>
than <b>\rho</b>.)

</br></br>

What is the total turning of a spherical circle in terms of <b>r</b> or <b>\rho</b>? More
qualitatively, is there a circle of greatest total turning? (On a cube the
``truly remarkable theorem'' of subsection 6.3.3 implies that a circle can
have at most <b>4 x 2 \pi = 8 \pi</b> radians of turning.)

</br></br>

<h3>Distances</h3>

</br></br>

Distances in a plane satisfy a basic relationship called the triangle inequality, which states that the sum of the lengths of any two sides of
a triangle must be greater than the length of the third side. What is
the spherical triangle inequality? Can you prove it? What exactly are
the restrictions on its validity? (Hint for proof: Assume that the triangle
inequality holds for triangles of small area, such as long, thin slivers;
then go back to prove that assumption later.)

</br></br>

<h3>Two New Views of Sphere</h3>

</br></br>

<div class='figure'><br\><img src='images/figures/fig7-4.png'/><br\><div class='caption'>The window picture for a sphere turtle: (a) going forward; (b) turning (axis through turtle coming out of page).</div><br\></div>

</br></br>

The ``window view'' of a cube-regarding the cube as a square together
with a group of rotations that flip the cube whenever the turtle crosses
an edge-played a key role in our study of the cube in chapter 6. Before
you continue reading, answer this: What views of a turtle walking on a
sphere correspond to the window and card views of the cube?
Just as a circle can be thought of as a <span class='textsc'>poly</span> with an infinite number
of sides, a sphere can be thought of as similar to a polyhedron but with
an infinite number of faces. Each face is infinitely small, and the turtle
is always crossing edges. The story is hard to make sense of in detail
but suggests the following view of walking and turning on a sphere: The
turtle stands still (within an infinitely small window) and the sphere
rotates behind the turtle as it walks (figure 7.4a). In a similar fashion,
the turtle again stands still while turning, and sphere rotates in the
opposite direction behind (figure 7.4b). (Notice that this is not exactly
analogous to the cube situation, where cube does not turn for <span class='textsc'>left</span>sor
<span class='textsc'>right</span>S.)It is as if you set turtle on its back to hold up the world with
its feet. Walking and turning then rotate the world like a ball on the
feet of a ``circus turtle,'' as shown in figure 7.5a.

</br></br>

<div class='figure'><br\><img src='images/figures/fig7-5.png'/><br\><div class='caption'>(a) A ``circus turtle'' with the world at its feet. (b) Rolling a ball from the inside: the ``card view'' of a sphere turtle.</div><br\></div>

</br></br>

Observe that <span class='textsc'>forward</span>and <span class='textsc'>left</span>are both represented by the same kind
of operation-a rotation of the sphere. Performing <span class='textsc'>forward</span> is the same
as rotating the sphere about some axis, which we'll call the <span class='textsc'>forward</span>
axis. The <span class='textsc'>left</span>operation is a rotation about a different axis, the <span class='textsc'>left</span>
axis, which is perpendicular to the <span class='textsc'>forward</span>axis. Note that these axes
have a permanently fixed orientation in this view of the sphere.

</br></br>

The corresponding ``circus'' activity that gives a ``card view'' of walking on a sphere involves putting the turtle inside the sphere, which is
free to roll on a plane. As the turtle walks, the sphere rolls to keep the
turtle at the bottom. When the turtle turns, the sphere prepares to roll
in a new direction. (See figure 7.5b.)

</br></br>

<h3>Results</h3>

</br></br>

This section answers some of the questions raised in the previous one.
We urge you \textbf{NOT TO READ FARTHER} until you've explored some of
these issues on your own.

</br></br>

The window view will be the basis of most of our analyses, so get
it firmly in mind. The sphere stands skewered by two fixed, mutually
perpendicular axes: one labeled <span class='textsc'>forward</span> and one labeled <span class='textsc'>left</span>. Each
command causes a rotation of the sphere about the appropriate axis.

</br></br>

<h3>The FORWARD-LEFT Symmetry</h3>

</br></br>

Let's continue exploring the symmetry between <b>\alpha</b> and <b>\beta</b>. <span class='textsc'>forward</span> and
<span class='textsc'>left</span> are seen to be the same operation-a rotation of the sphereexcept that the axes of rotation are different. Does this mean that
<span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>) and <span class='textsc'>poly</span>(<b>\beta</b>, <b>\alpha</b>) should do the same thing? An argument
that they should goes something like this: Make an invariant description
of <span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>). It causes alternate rotations through angles <b>\alpha</b> and <b>\beta</b>
about mutually perpendicular axes. But that is exactly the description
of <span class='textsc'>poly</span>(<b>\beta</b>, <b>\alpha</b>) as well. From an invariant point of view, there should be
no difference between them.

</br></br>

On the other hand, the figure drawn by <span class='textsc'>poly</span>(90, 0) certainly does not
look like that drawn by <span class='textsc'>poly</span>(0, 90). The question is, why not? The
key to answering this is realizing that in our picture, it happens that the
turtle is on the <span class='textsc'>left</span> axis and the pen drags along the sphere whenever a
<span class='textsc'>forward</span> command rotates the sphere. Placing the turtle and pen down
on the <span class='textsc'>left</span> axis distinguishes one axis from the other and hence breaks
the <span class='textsc'>forward</span>-<span class='textsc'>left</span> symmetry. If you put the pen down on the <span class='textsc'>forward</span>
axis instead, you'll see lines drawn by the <span class='textsc'>left</span> operation but not by
<span class='textsc'>forward</span>. This second figure, drawn by a pen on the <span class='textsc'>forward</span> axis, is
called the figure dual to the usually drawn one. If we include pen site in
the invariant descriptions of <span class='textsc'>poly</span> figures, we see that <span class='textsc'>poly</span> (<b>\alpha</b>, <b>\beta</b> ) and
<span class='textsc'>poly</span>(<b>\beta</b>, <b>\alpha</b>) are distinguished exactly by the fact that with <span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>)
the pen is on the axis for which the rotation is <b>\beta</b>, while with <span class='textsc'>poly</span>(<b>\beta</b>, <b>\alpha</b>)
the pen is on the <b>\alpha</b> axis. Changing the pen site to the other axis turns
<span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>) into <span class='textsc'>poly</span>(<b>\beta</b>, <b>\alpha</b>); therefore, by definition, those <span class='textsc'>poly</span>s fire
dual to one another.

</br></br>

<div class='figure'><br\><img src='images/figures/fig7-6.png'/><br\><div class='caption'>Dual figures.</div><br\></div>

</br></br>

How can we see what <span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>) and <span class='textsc'>poly</span>(<b>\beta</b>, <b>\alpha</b>) have in common?
Let's concentrate on the state change. Suppose <span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>) closes 
(position and heading) after <b>n</b> steps. At this point, the sphere has returned to
its initial state because the point where the turtle started is back under
the turtle, and the sphere is oriented so that the turtle will retrace its
initial step with another <span class='textsc'>forward</span>. But with the sphere back to the initial
state, a pen on the <span class='textsc'>forward</span> axis must have its starting point under it
as well-so it must draw a closed figure, too. This is expressed in the
following principle:

</br></br>

\textbf{POLY duality principle} On a sphere, <span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>) closes in exactly the
same number of steps as <span class='textsc'>poly</span>(<b>\beta</b>, <b>\alpha</b>).

</br></br>

Figure 7.6 illustrates the dual figures <span class='textsc'>poly</span>(55 ,25) and <span class='textsc'>poly</span>(25, 55)

</br></br>

State change of <span class='textsc'>forward</span> <b>\alpha</b>, <span class='textsc'>left</span> <b>\beta</b> (in a <span class='textsc'>poly</span> ``square'') can be achieved by a single
rotation about the center of the circumscribed circle.

</br></br>

<div class='figure'><br\><img src='images/figures/fig7-7.png'/><br\><div class='caption'>State change of <span class='textsc'>forward</span> <b>\alpha</b>, <span class='textsc'>left</span> <b>\beta</b> (in a <span class='textsc'>poly</span> ``square'') can be achieved by a single rotation about the center of the circumscribed circle.</div><br\></div>

</br></br>

No law says that we have to place the pen on either the <span class='textsc'>left</span> or
the <span class='textsc'>forward</span> axis. Any point on the sphere will do, and the picture
drawn by <span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>) will vary with the selection of the pen site. For
a general pen location, both <span class='textsc'>forward</span> and <span class='textsc'>left</span> commands will draw
lines, but the resulting figure will still have the same symmetry as the
usual <span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>). Investigate these figures. How can you modify your
computer sphere program so you can see these drawings on the display?

</br></br>

<h3>Net Rotation of a POLY Step</h3>

</br></br>

The fundamental insight in arriving at the duality principle was to use
the window picture to describe the process of drawing a <span class='textsc'>poly</span> figure-to
focus on the rotational state of the sphere rather than fixing the sphere
and keeping track of the moving turtle. We'll apply this now to elaborate
upon the observation in subsection 7.2.2 that the vertices of any <span class='textsc'>poly</span>
lie on a circle.

</br></br>

Imagine rotating the sphere to produce the figure <span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>). First
make a <span class='textsc'>forward</span> rotation, then a <span class='textsc'>left</span> rotation. Each pair of rotations
takes the pen to a new vertex. But we mentioned earlier that these
vertices lie on a circle, just as if we were simply making a single rotation
of the sphere about a fixed axis to get from one vertex to the next. This
suggests that the combined operation <span class='textsc'>forward</span> <b>\alpha</b> followed by <span class='textsc'>left</span> <b>\beta</b> is
equivalent to a single rotation about some new axis, and the circle on
which these <span class='textsc'>poly</span> vertices lie is a circle of latitude for this axis (figure
7.7).

</br></br>

<div class='figure'>
<img src='images/figures/fig7-8.png'/>
<div class='caption'>Rotating a cube <b>90^{\circ</div></b> about two perpendicular axes in sequence is equivalent to rotating 120&deg; about a diagonal.}
</div>

</br></br>

\textbf{Net rotation theorem} If we rotate the sphere by a about the <span class='textsc'>forward</span>
axis and then rotate it through <b>\alpha</b> about the <span class='textsc'>left</span> axis, the net effect will
be the same as a single rotation (about some axis that depends on <b>\alpha</b> and <b>\beta</b>).

</br></br>

Think about this remarkable theorem. Try making two sequential
rotations of any object. Can you see the net axis and the amount of net
rotation? This is a very hard problem in general. In fact, the proof of
this theorem is hard enough so that we will show only that such an net
rotation exists; we won't compute its axis. So as not to clutter more
important issues, we will assume this theorem for now and draw some
conclusions. We'll return to the proof in 7.3.6.

</br></br>

In case you failed miserably at visualizing a net rotation, we hope
figure 7.8 will restore some faith in the theorem. It shows how a cube
rotated 90&deg; in sequence about two perpendicular axes through face centers winds up rotated 120&deg; about an axis piercing two vertices.

</br></br>

It should be clear that the symmetry angle of <span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>), which we
called <b>\theta</b>, must be the angle of net rotation of a POLY step. Does the
<span class='textsc'>forward-</span><span class='textsc'>left</span>symmetry say something about the relationship of <b>\alpha</b>, <b>\beta</b>,
and <b>\theta</b>? To see this we add a bit more detail to our understanding of the
way such symmetries work.

</br></br>

Think of the <span class='textsc'>left</span>and <span class='textsc'>forward</span>axes as coordinate axes. Now suppose
someone happened to reverse the axis labels on a sphere diagram. Then
<span class='textsc'>forward</span> <b>\alpha</b>, <span class='textsc'>left</span> <b>\beta</b>, ... would be read as <span class='textsc'>left</span> <b>\alpha</b>, <span class='textsc'>forward</span> <b>\beta</b>,.... 
In other words, <span class='textsc'>poly</span>(<b>\alpha</b> ,<b>\beta</b>) and <span class='textsc'>poly</span>(<b>\beta</b>, <b>\alpha</b>) are not only intrinsically the
same (as far as sphere state is concerned), but we can think of them as
descriptions of exactly the same process from two different coordinate
systems. Since the angle <b>\theta</b> that summarizes <span class='textsc'>forward</span> <b>\alpha</b>, <span class='textsc'>left</span> <b>\beta</b> does
not depend on any coordinate system, it must be invariant under the
exchange. We thus obtain a stronger version of the duality principle of
7.3.1, which applied only to closed <span class='textsc'>poly</span>s:
<span class='textsc'>poly</span>(<b>\alpha</b>, <b>\beta</b>) and <span class='textsc'>poly</span>(<b>\beta</b>, <b>\alpha</b>) always have the same symmetry angle.

</br></br>

<h3>The Spherical Pythagorean Theorem</h3>

</br></br>

There is a wonderful formula relating <b>\alpha</b>, <b>\beta</b>, and <b>\theta</b>:
<p><br>\alpha^2 + \beta^2 \approx \theta^2</p>
The equation is not exact, but it is a good approximation for small
angles. Small, however, does not mean tiny. In fact, the formula is off
only by a degree or so for angles <b>\alpha</b> and <b>\beta</b> as large as 45&deg;. Again we
postpone proof. The question is, did you discover this relation while
exploring with your computer sphere? This is a remarkably simple and
powerful formula. It is the equivalent of the Pythagorean theorem, only
for rotations about perpendicular axes rather than sides of a plane right
triangle. Go back and look at your experimental technique. What didn't
you do that you should have done to discover the formula? What should
you have done better? For example, what kind of graphing would have
uncovered the relationship? What things might have prompted you to
guess the relationship? A detailed study of why your exploration did
not reveal some simple and powerful relationship may be more helpful
to you than an accidental discovery of it. At the very least, look at the
implications of such a formula and check them on your computer sphere
simulation.

</br></br>

Although it is not exact, this formula makes some very concrete
suggestions concerning <span class='textsc'>poly</span>s. For one, it suggests the inequalities <b>\alpha <
\theta</b>, <b>\beta < \theta</b> --- the ``hypotenuse'' is always larger than the other ``sides.''
These must hold whenever the error in the Pythagorean formula is less
than any of the terms in it. When valid, these inequalities establish
forbidden zones for <b>n</b>-gons. There are no four-sided figures with <b>\alpha</b> or <b>\beta</b>
greater than 90&deg;, no three-sided figures with <b>\alpha</b> or <b>\beta</b> greater than 120&deg;,
and so on. In such cases <b>\theta</b> would be restricted to values too large to give
the appropriate symmetry. Look for such forbidden zones.
We stress again that the approximation <b>\alpha^2 +  \beta^2 \approx \theta^2</b> is quite close
even for fairly large angles. It predicts that the set of pairs <b>\alpha, \beta</b> giving
a particular symmetry (determined by <b>\theta</b>) lies nearly on a circle which
has radius <b>\theta</b> centered at the origin in the <b>\alpha, \beta</b> plane (see figure 7.9). The
approximation is almost perfect for <b>\theta</b> less than 45&deg; (that is, for polygons
with eight or more sides), and it is not bad even for squares. Because of
the <span class='textsc'>forward</span>-<span class='textsc'>left</span> symmetry, the graph of pairs <b>\alpha , \beta</b> giving a particular
symmetry is always precisely symmetric in <b>\alpha</b> and <b>\beta</b> (that is, about the
45&deg;, <b>\alpha = \beta</b> line). Furthermore, one finds that the forbidden zones <b>\alpha < \theta</b>
and <b>\beta < \theta</b> are maintained even when <b>\alpha</b> and <b>\beta</b> are large.

</br></br>

<div class='figure'><br\><img src='images/figures/fig7-9.png'/><br\><div class='caption'>Graphing the pairs a and f3 that give a particular symmetry e. The shaded area is the forbidden zone.</div><br\></div>

</br></br>

<h3>Exact Formula for <b>\theta</b></h3>

</br></br>

The exact formula for <b>\theta</b> is tricky to find. Here is the result:

</br></br>

\textbf{Theorem} The symmetry angle <b>\theta</b> for the combined operation <span class='textsc'>forward</span> <b>\alpha</b>,
<span class='textsc'>left</span> <b>\beta</b> satisfies the formula
<p><br>\cos \frac{\theta}{2} = \cos \frac{\alpha}{2} \cos \frac{\beta}{2} </p>
How can we prove such a thing? It's not easy. First of all, we need some
way to see <b>\theta</b> in terms of the <span class='textsc'>forward</span> and <span class='textsc'>left</span> rotations. Let's use <b>T</b> to
denote the combined operation <span class='textsc'>forward</span> <b>\alpha</b>, <span class='textsc'>left</span> <b>\beta</b>. The transformation
<b>T</b> is, by the theorem in 7.3.2, a rotation through angle e about some axis.
If we choose a point P on that axis, then P must return to its initial
position after the two parts of the <span class='textsc'>poly</span> step. So look at some vector \textbf{v}
tangent to the sphere at P (figure 7.10a). The transformation T should
have the net effect of rotating v by (J. Examine carefully how v and P
move under T: First, the <span class='textsc'>forward</span> <b>\alpha</b> rotation moves P along along some
circular arc A (an arc of a circle of latitude about the <span class='textsc'>forward</span> axis) to
end up at the point Q. Then the <span class='textsc'>left</span> <b>\beta</b> rotation moves Q back to P,
this time along an arc B on a circle of latitude for the <span class='textsc'>left</span> axis.

</br></br>

<div class='figure'><br\><img src='images/figures/fig7-10.png'/><br\><div class='caption'>(a) Computing the symmetry angle IJ by following the path of a vector v based at the fixed point P. (b) The vector moves along two circular arcs A and B. (c) The angle <b>\phi</b> is the angle between A and B at P. (d) When v reaches Q, it makes there an angle of <b>\phi</b> with the arc B. (e) Moving back along B to P gives a total change of <b>2 \phi</b> from its original heading. (f) The vector a can be decomposed into components along the chord (z) and perpendicular to the chord (x).</div><br\></div>

</br></br>

Before following \textbf{v} on its trek, let's focus on the arcs A and B. They lie
in perpendicular planes and intersect at the two points P and Q (figure
7.10b). Look at the intersection at P. Let <b>\phi</b> be the angle between A
and B at P (that is, the angle that a turtle crawling on the sphere along
A would need to turn at P in order to face along B-see figure 7.10c).
By symmetry the arcs intersect at the same angle <b>\phi</b> at Q.

</br></br>

In determining what happens to \textbf{v}, the crucial observation is that
the rigid rotations of the sphere we are about to perform maintain a
constant angle between v and the latitudes of rotation. (Glue a vector to
a globe latitude, rotate about the globe's axis, and watch what happens.)

</br></br>

Keeping this observation in mind, start \textbf{v} pointing along A. It stays
pointed along A as we rotate the sphere by <b>\alpha</b>. Figure 7.10d shows that
when \textbf{v} reaches Q it points at the angle <b>\phi</b> with respect to the B circle.
Rotating back by <b>\beta</b> returns \textbf{v} to P, maintaining the angle <b>\phi</b> from B.
Figure 7.10e shows that \textbf{v} has made a net rotation from start to finish
of <b>\theta = 2\phi</b>.

</br></br>

Now that we've related <b>\theta</b> to something that can be computed more
directly in terms of <b>\alpha</b> and <b>\beta</b>, we can complete the proof of the theorem.
Our tool will be the relation between angles and dot products:
<p><br>\mathbf{s} \cdot \mathbf{t}= |\mathbf{s}| |\mathbf{t}| \cos \gamma</p>
 where <b>\gamma</b> is the angle of intersection between <b>s</b> and <b>t</b> (see section 3.5,
exercise 4).

</br></br>

We'll apply this formula to unit vectors a and b pointing along arcs
A and B, respectively, at P. The angle between a and b is, as we know,
<b>\phi = \theta / 2</b>, and so we have
<p><br>\mathbf{a} \cdot \mathbf{b} = \cos \frac {\theta}{2} </p>
 Now let's set up a coordinate system in which to compute <b>\mathbf{a} \cdot \mathbf{b}</b>. Let \textbf{z}
be a unit-length vector at <b>P</b> pointing along the chord joining <b>P</b> to <b>Q</b>
(figure 7.10f). Let \textbf{x} be a unit vector in the plane of <b>A</b> and perpendicular
to \textbf{z}. Similarly, let \textbf{y} be a vector perpendicular to \textbf{z} lying in the plane of
<b>B</b>. The angle between \textbf{a} and \textbf{z} is just the angle between the chord and
the circular arc <b>A</b>, which is equal in turn to half the arc angle <b>\alpha</b>. So we
can produce the vector \textbf{a} by rotating \textbf{z} toward \textbf{x} through an angle <b>\alpha / 2</b>.

</br></br>

Therefore, we have
<p><br> \mathbf{a} = \mathbf{z} \cos \frac {\alpha} {2} + \mathbf{x} \sin \frac {\alpha} {2} </p>
 Similarly, we have
<p><br> b = z \cos \frac {\beta} {2} y \sin \frac {\beta} {2} </p>
 Taking the dot product of these two expressions, we find that since \textbf{z},
\textbf{x}, and \textbf{y} are mutually perpendicular, all the terms are zero except the
term containing <b>\mathbf{z} \cdot \mathbf{z} = 1</b>. Thus,
<p><br> \mathbf{a} \cdot \mathbf{b} = \cos \frac {\alpha} {2} \cos \frac {\beta} {2} </p>
 Combining this with equation 1 gives
<p><br> \cos \frac {\theta} {2} = \mathbf{a} \cdot \mathbf{b} = \cos \frac {\alpha} {2} \cos \frac {\beta} {2} </p>
 which proves the theorem.

</br></br>

As an application of this theorem, let's see how our formula for <b>\theta</b>
relates to the spherical Pythagorean theorem of 7.3.3. Have you seen
the approximation formula for the cosine of an angle <b>x</b> (in radians),
<b> \cos x = 1 - \frac {x^2} {2!} + \frac {x^4} {4!} - \frac {x^6} {6!} + \cdot \cdot \cdot </b>?

</br></br>

If <b>x</b> is small, then the first two terms of the series give a good approximation:
<p><br> \cos x \approx 1 - \frac {x^2} {2!} </p>
 Using this approximation in our theorem for <b>\theta</b> gives
<p><br> 1 - \frac{1}{2}(\frac{\theta}{2})^2 \approx [1 - \frac{1}{2}(\frac{\alpha}{2})^2][1 - \frac{1}{2}(\frac{\beta}{2})^2] </p>
 which simplifies (if you leave out the very small term) to the
Pythagorean theorem <b> \theta^2 \approx \alpha^2 + \beta^2 </b>.

</br></br>

<h3>Results for Circles</h3>

</br></br>

This subsection derives a fundamental result that relates the total turning around a circle to the radius.

</br></br>

<div class='figure'>
<img src='images/figures/fig7-11.png'/>
<div class='caption'>(a) An arc of radius r is part of a great circle subtending angle <b>\theta</b> from center; <b>\theta</b> = <b>\frac {r</div> {R}</b>. (b) Draw a cone tangent to sphere along the latitude circle. (c) With the cone cut apart, the path is seen to be part of a planar circle.}
</div>

</br></br>

We want to know the amount of turning a turtle will do in walking
around on a spherical circle. We can consider the circle to be a latitude
at an angle <b>\Theta</b> down from the north pole. (The name of this angle is the
<em>colatitude</em>.) From figure 7.11a one can see that <b>\Theta = r / R</b>, where <b>R</b> is
the radius of the sphere and <b>r</b> is distance (measured on the sphere) from
the turtle's path to the north pole.

</br></br>

<div class='figure'><br\><img src='images/figures/fig7-12.png'/><br\><div class='caption'>Relations among the various parameters of spherical circles.</div><br\></div>

</br></br>

The trick in determining the total turning done by a turtle in walking
round a latitude is to invent a way to lay that total turning out on a
plane so we can immediately see it as a change in heading. Imagine
a cone placed over the sphere, tangent to it at the latitude of interest
(figure 7.11b). Now, a turtle walking on the conical latitude experiences
locally (near its path) the same world as a turtle on a sphere; it would
have the same total turning. We can cut up and layout the cone to see
that the turtle's path can be regarded as an arc of a regular planar circle
(figure 7.11c). The heading change for the turtle's path can therefore be
computed as <b>2 \pi</b> times the fraction of the planar circle the turtle traverses
in covering the path:
<p><br> TT = \frac {\operatorname{length of path on sphere}} {\operatorname{total circumference of planar circle}} x 2 \pi </p>
 The length of the turtle's path is <b>2 \pi R \sin \theta</b> (figure 7.11b). The circumference of the corresponding planar circle is <b>2 \pi s</b>,where <b>s</b> is the distance
to path from the peak of the cone. Returning to the uncut version of
the cone, one sees that s is equal to <b>R \tan \theta</b>. Hence,
<p><br>TT = \frac{2 \pi R \sin \Theta} {2 \pi R \tan \Theta} x 2 \pi = 2 \pi \cos \Theta = 2 \pi \cos \frac {r} {R} </p>
 This relation completes the chart shown in figure 7.12 of relationships
among circle parameters on the sphere, and allows anyone to be computed from any other.

</br></br>

<h3>Proof of Net Rotation Theorem</h3>

</br></br>

We'll tie up loose ends by giving the proof that a <span class='textsc'>poly</span> step is equivalent
to a single rotation about some axis. There are two parts to the proof.
The first is to show that there is some fixed point of the pair of rotations.
That is, if we let <b>T</b> denote the combined operation <span class='textsc'>forward</span> <b>\alpha</b> followed
by <span class='textsc'>left</span> <b>\beta</b>, and imagine how the points of the sphere are moved about
by <b>T</b>, then there must be some point <b>P</b> that comes back to its initial
position, <b>T(P) = P</b>. The second part of the proof is to show that, once
we know a fixed point exists, then <b>T</b> must necessarily be a rotation of
the sphere about the axis passing through <b>P</b>.

</br></br>

\textbf{Proof that T has a fixed point} Examine how <b>T</b> moves the sphere. Each
of the rotations <span class='textsc'>forward</span>0: and <span class='textsc'>left</span> <b>\beta</b> moves points around on the
latitudes of their respective axes. If a point <b>p</b> gets moved to <b>q</b> by
<span class='textsc'>forward</span> <b>\alpha</b>, then <b>p</b> and <b>q</b> must lie on the same latitude of the <span class='textsc'>forward</span>
axis. Similarly, since the subsequent <span class='textsc'>left</span> <b>\beta</b> moves <b>q</b> to <b>T(p)</b>, <b>q</b> and
<b>T(p)</b> must lie on the same latitude of the <span class='textsc'>left</span> axis (figure 7.13a). Now
apply this reasoning, assuming that we start with a fixed point P of
the transformation. The first rotation has <b>P</b> and its <span class='textsc'>forward</span>-rotated
image <b>Q</b> on the same <span class='textsc'>forward</span>latitude, and the second rotation has <b>Q</b>
and <b>T(P)</b> on the same <span class='textsc'>left</span>latitude. But <b>T(P) = P</b>, so <b>P</b> and <b>Q</b> are
simultaneously on a latitude of both axes (figure 7.13b). Therefore, we
can narrow our search for <b>P</b> and <b>Q</b> by considering only those points
that share both a <span class='textsc'>forward</span>latitude and a <span class='textsc'>left</span> latitude. The set of
such pairs <b>p</b> and <b>q</b> are symmetrically located above and below the great-circle longitude that passes through the <span class='textsc'>forward</span>and <span class='textsc'>left</span>poles (figure
7.13c). For reference, call this common longitude of the <span class='textsc'>forward</span>and
<span class='textsc'>left</span>poles the Greenwich longitude. Those <b>p</b>s and <b>q</b>s must lie on the
<b>\alpha / 2</b> (<span class='textsc'>forward</span>)longitude above and below the Greenwich longitude in
order for a rotation of <b>\alpha</b> about the <span class='textsc'>forward</span>axis to take <b>p</b>s and move
them to <b>q</b>s located symmetrically (with respect to Greenwich). So all
candidates for <b>P</b> and <b>Q</b> lie on the pair of <span class='textsc'>forward</span>latitudes <b>\alpha / 2</b> above
and below the Greenwich longitude. We need only ask now whether one
of those <b>q</b>s is returned to its initial <b>p</b> by a <span class='textsc'>left</span> <b>\beta</b>. Look at how much
<span class='textsc'>left</span>rotation would be needed to make one of those <b>q</b>s return to its <b>p</b>.
At the <span class='textsc'>left</span>pole, one needs 180&deg; (figure 7.13d). Near the <span class='textsc'>forward</span>pole
one needs only a tiny fraction --- approaching O --- of a whole revolution
(figure 7.13e). Somewhere in between, there must be a place where the
actual <b>\beta</b> will suffice (but not overdo) to bring <b>q</b> back to <b>p</b>; those are the
<b>P</b> and <b>Q</b> we want.

</br></br>



</br></br>

*/}});