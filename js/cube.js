/* Front=1
 * Right=2
 * Back=3
 * Left=4
 * Top=5
 * Bottom=6
 */

function rot(side) {
	cur = side;
	var opp = [0,1,4,3,2,6,5][side]
	var cubes = document.getElementsByClassName("cube")
	for(var i = 0; i < cubes.length; i++) {
		cubes[i].className = "cube s"+opp;
	}
}
rot(1)

function right() {
	if(cur == 5) rot(4);
	else if(cur == 6) rot(4);
	else rot(((cur-1+1)&3)+1);
}
function left() {
	if(cur == 5) rot(4);
	else if(cur == 6) rot(4);
	else rot(((cur-1-1)&3)+1);
}
function up() {
	if(cur == 5) rot(3);
	else if(cur == 6) rot(1);
	else rot(5);
}
function down() {
	if(cur == 5) rot(1);
	else if(cur == 6) rot(3);
	else rot(6);
}
