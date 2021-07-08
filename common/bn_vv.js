function popup(mylink, windowname)
{
var posLeft = (window.screen.width - 700) / 2;
var posTop = (window.screen.height - 500) / 2;

if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
   window.open(href, windowname, 'width=700,height=500,left=' + posLeft + ',top=' + posTop + ',scrollbars=no');
   return false;
}
