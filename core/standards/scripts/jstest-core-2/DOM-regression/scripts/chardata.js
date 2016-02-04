/* Regression tests for Opera's handling of DOM 2 Core documents
 *
 * 2002-04-05 / hanne
 */

var cvs = "$Id: chardata.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule("CharacterData", cvs);

try {

   var x = document.createTextNode('test1');
   var y = document.createTextNode('test2');
   var foo = document.createTextNode('foo');
   var the_div = document.getElementById("div-foo");

   tdef( "TextNode variable #1", x );
   tdef( "TextNode variable #2", y );
   tdef( "TextNode variable #3", foo );
   tdef( "TextNode variable #4", the_div );

   testcase("Get/set attributes");

   test( "Attr #4", the_div.firstChild.firstChild.data, "ABC" );
   test( "Attr #7", the_div.firstChild.firstChild.length, 3 );
 
   testcase( "substringData" );

   /* no modification on 'x' */
   text = x.substringData( 0, 0, "test" );
   x.insertData( 5, text );
   test( "substringData #3", x.data, "testbar1");

   testcase( "insertData" );

   /* check that xml parser does not split text-nodes at linebreak. */
   testcase("XML parser text-nodes");

   function testXML()
   {
       var my_span = new_win.document.getElementById('my-span');

       if (!my_span)
           if (++new_win.attempts > 10)
               showfailure( "XML parser text-nodes", "Loading of XML document timed out" );
           else
           {
               setTimeout(testXML, new_win.timeout);
               new_win.timeout += new_win.timeout;
               return;
           }
       else
       {
           test( "XML parser text-nodes #1", my_span.childNodes.length, 1 );
           test( "XML parser text-nodes #2", my_span.firstChild.data.length, 10 );
           test( "XML parser text-nodes #3", my_span.firstChild.data, "Split\nText" );
       }

       new_win.close();
       testmodule_finished();
   }

   var new_win = window.open('xmldoc.xml', '');

   if (!new_win)
   {
       showfailure( "Opening secondary window", "Opening window failed." );
       testmodule_finished();
   }
   else
   {
       new_win.attemps = 0;
       new_win.timeout = 100;
       testXML();
   }
} catch (e) { exception( e ); }

/* eof */

