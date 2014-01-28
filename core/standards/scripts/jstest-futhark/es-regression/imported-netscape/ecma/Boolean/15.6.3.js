/* The contents of this file are subject to the Netscape Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/NPL/
 * 
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * 
 * The Original Code is Mozilla Communicator client code, released March
 * 31, 1998.
 * 
 * The Initial Developer of the Original Code is Netscape Communications
 * Corporation. Portions created by Netscape are Copyright (C) 1998
 * Netscape Communications Corporation. All Rights Reserved.
 * 
 */
/**
    File Name:          15.6.3.js
    ECMA Section:       15.6.3 Properties of the Boolean Constructor

    Description:        The value of the internal prototype property is
                        the Function prototype object.

                        It has the internal [[Call]] and [[Construct]]
                        properties, and the length property.

    Author:             christine@netscape.com
    Date:               june 27, 1997

*/
    var SECTION = "15.6.3";
    var VERSION = "ECMA_2";
    startTest();
    var TITLE   = "Properties of the Boolean Constructor"
    writeHeaderToLog( SECTION + TITLE );

    var testcases = getTestCases();

    test();

function getTestCases() {
    var array = new Array();
    var item = 0;

    array[item++] = new TestCase( SECTION,  "Boolean.__proto__ == Function.prototype",  true,   Boolean.__proto__ == Function.prototype );
    array[item++] = new TestCase( SECTION,  "Boolean.length",          1,                   Boolean.length );

    return ( array );
}
function test() {
    for ( tc=0; tc < testcases.length; tc++ ) {
        testcases[tc].passed = writeTestCaseResult(
                            testcases[tc].expect,
                            testcases[tc].actual,
                            testcases[tc].description +" = "+
                            testcases[tc].actual );

        testcases[tc].reason += ( testcases[tc].passed ) ? "" : "wrong value ";
    }
    stopTest();
    return ( testcases );
}