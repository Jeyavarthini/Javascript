var a=[10,20,30,40,50]
for(var score of a)
{
    score+=5
    console.log(score)
}
var b=['Red','Blue','Green']
for(var [index,b] of b.entries())
{
    console.log(index+' -> '+b)
}
var str='love'
for(var c of str)
{
    console.log(c)
}