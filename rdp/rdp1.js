epsilon = 2;
//IDEA : DIRECTLY WORKING ON ARRAY OF OBJECTS AND EACH OBJECT CONTAINS VECTOR COORDINATES.
// VECTOR : AN OBJECT OF X,Y,Z.. COORDINATES. ! IMPORTANT : HERE ALL ab,ac,start,end.. ARE OBJECTS OF X,Y COORDINATES; HENCE, VECTORS.
function perpendicular(currentPoint, start, end){   //3
    const ab = p5.Vector.sub(end, start);
    const ac = p5.Vector.sub(currentPoint, start);
    //console.log(ab);
    ab.normalize(); // Normalize the line
    ab.mult(ac.dot(ab));  // ac.dot(ab) = ac.cos(theta)
    const normalPoint = p5.Vector.add(start, ab);
    return p5.Vector.dist(currentPoint, normalPoint); // returns distance which is scalar.

}
function rdp1(array,startindex,endindex){   //2
    let rdistance = -1; let rindex = -1;
    const start = array[startindex];
    const end = array[endindex];
    for (let i = startindex+1; i < endindex; i++) {
    const currentPoint = array[i];
    const distance = perpendicular(currentPoint, start, end);
     if(distance > rdistance){
     rdistance = distance;
     rindex = i;         }
 }
 if(rdistance > epsilon){ return rindex; } else {return -1;}
}
function rdp2(array,startindex,endindex,rdpPoints){  //1
    let index = rdp1(array,startindex,endindex);
    if(index > 0){
        if(index != startindex){
            rdp2(array,startindex,index,rdpPoints); //start push
        }
        rdpPoints.push(array[index]);     // center push  : !important - to be kept in center
        if(index != endindex){
            rdp2(array,index,endindex,rdpPoints);  //end push
        }
    }
}