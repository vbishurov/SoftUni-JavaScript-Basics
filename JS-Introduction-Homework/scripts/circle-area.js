document.write("<p>r = 7; area = " + calcCircleArea(7) + "</p>");
document.write("<p>r = 1.5; area = " + calcCircleArea(1.5) + "</p>");
document.write("<p>r = 20; area = " + calcCircleArea(20) + "</p>");

function calcCircleArea(r)
{
    return r*r*Math.PI;
}