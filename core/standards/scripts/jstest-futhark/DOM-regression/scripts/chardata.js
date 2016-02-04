/* Regression tests for Opera's handling of DOM 2 Core documents
 *
 * 2002-04-05 / hanne
 */

var cvs = "$Id: chardata.js 46210 2009-05-13 10:29:54Z hallvord $";

testmodule("CharacterData", cvs);
expect(61);
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

   /* return value inserted into 'x' and no modification on 'foo' */
   var text = foo.substringData( 4, 10 );
   x.insertData( 4, text );
   test( "substringData #1", x.data, "testbar1");
   test( "substringData #2", foo.data, "foo bar");

   /* no modification on 'x' */
   text = x.substringData( 0, 0, "test" );
   x.insertData( 5, text );
   test( "substringData #3", x.data, "testbar1");

   testcase("XML parser text-nodes");

   function testXML()
   {
       var my_span = new_win.document.getElementById('my-span');

       if (!my_span)
           if (++new_win.attempts > 5)
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

   var new_win =  document.getElementById('xmliframe').contentWindow;

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
} catch (e) {alert(e); exception( e ); }

/* eof */

