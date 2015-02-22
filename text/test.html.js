define(function() {return function () {/*

This draws a circular arc, as shown in figure 1.5. Since this program
goes on ``forever'' (until you press the stop button on your computer), it
is not very useful as a subprocedure in creating more complex iigures.
More useful would be a version of the <span class='textsc'>circle</span> procedure that would
draw the figure once and then stop. When we study the mathematics of
turtle geometry, we'll see that the turtle circle closes precisely when the
turtle has turned through $360^{\circ}$. So if we generate the circle in chunks
of <span class='textsc'>forward</span> 1, <span class='textsc'>right</span> 1, the circle will close after 
precisely 360 chunks:

</br></br>

<div class='inline-editor turtle-code'>
TO CIRCLE
   REPEAT 360
      FORWARD 1
      RIGHT 1
</div><br\><br\>
If we repeat the basic chunk fewer than 360 times, we get circular arcs.
For instance, 180 repetitions give a semicircle, and 60 repetitions give a
$60^{\circ}$ arc. The following procedures draw left and right arcs of <span class='textsc'>deg</span> degrees
on a circle of size <span class='textsc'>r</span>:


*/}});