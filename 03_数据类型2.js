/**
 * 1、字符串相关
 * */
console.log('==========================1、分割线=========================');
// 单引号内可以直接使用双引号；双引号内也可以直接使用单引号
let a1 = '"Hello"';
let b1 = "'world'";
console.log(`a1 = ${a1}, b1 = ${b1}`);      // a1 = "Hello", b1 = 'world'

// 如果单引号内要使用单引号（或双引号内要使用双引号），需要配合转译字符'\'使用
let c1 = '\'Hello\'';
console.log(`c1 = ${c1}`);                  // c1 = 'Hello'

// 多行字符串，但是输出还是单行
let d1 = 'Long \
long \
long \
string';
console.log(`d1 = ${d1}`);                  // d1 = Long long long string

// 可以通过下标获取指定位置的字符。如果下标越界/下标不合法，会返回undefined
let m1 = 'hello';
// m1[0] = h, m1[-1] = undefined, m1[6] = undefined, m1['x'] = undefined
console.log(`m1[0] = ${m1[0]}, m1[-1] = ${m1[-1]}, m1[6] = ${m1[6]}, m1['x'] = ${m1['x']}`);

// 不能通过下标修改字符串指定位置的字符
m1[0] = 'a';
console.log(`m1 = ${m1}`);                  // m1 = hello

// length 返回字符串的长度，也不能修改
console.log(`m1.length = ${m1.length}`);    // m1.length = 5
m1.length = 100;
console.log(`m1.length = ${m1.length}`);    // m1.length = 5



/**
 * 2、把字符串分割成字符串数组 --- str.split(separator, length):
 *          separator: 按照str中的什么进行分割
 *          length: 返回的数组最大长度。
 * */
console.log('==========================2、分割线=========================');
let str2 = 'a,b,c';
let strArr2 = str2.split(',');
console.log(`str2.split(',') = ${strArr2}, strArr2.length = ${strArr2.length}`);    // str2.split(',') = a,b,c, strArr2.length = 3
strArr2 = str2.split(',', 1);
console.log(`str2.split(',', 1) = ${strArr2}, strArr2.length = ${strArr2.length}`); // str2.split(',', 1) = a, strArr2.length = 1
strArr2 = str2.split(',', 5);
console.log(`str2.split(',', 5) = ${strArr2}, strArr2.length = ${strArr2.length}`); // str2.split(',', 5) = a,b,c, strArr2.length = 3



/**
 * 3、把字符串中的某些字符替换为指定字符 --- str.replace(substr, replacement)
 *           将 substr 替换为 replacement
 *           不改变原字符串，返回新字符串
 * */
console.log('==========================3、分割线=========================');
let str3 = 'Hello, world';
let str3Rep = str3.replace('Hello', 'Hi');
console.log(`str3Rep = ${str3Rep},  str3 = ${str3}`);        // str3Rep = Hi, world,  str3 = Hello, world




/**
 * 4、 返回字符串中首次出现subStr的位置 --- str.indexOf(subStr)
 *          若没有返回-1
 * */
console.log('==========================4、分割线=========================');
let str4 = 'Hello, world! Hello, world!';
console.log(`str4.indexOf('llo') = ${str4.indexOf('llo')}`);          // str4.indexOf('llo') = 2
console.log(`str4.indexOf('abc') = ${str4.indexOf('abc')}`);          // str4.indexOf('abc') = -1




/**
 * 5、获取字符串指定下标的字符， --- str.charAt(index):
 *          若越界返回空字符串
 * */
console.log('==========================5、分割线=========================');
let str5 = 'Hello, world';
console.log(`str5.charAt(-1) = ${str5.charAt(-1)}`);                // str5.charAt(-1) =
console.log(`str5.charAt(4) = ${str5.charAt(4)}`);                  // str5.charAt(4) = o
console.log(`str5.charAt(12) = ${str5.charAt(12)}`);                // str5.charAt(12) =



/**
 * 6、获取字符串指定下标的Unicode值 --- str.charCodeAt(index)
 *          若越界返回NaN
 * */
console.log('==========================6、分割线=========================');
let str6 = 'Hello, world';
console.log(`str6.charCodeAt(-1) = ${str6.charCodeAt(-1)}`);        // str6.charCodeAt(-1) = NaN
console.log(`str6.charCodeAt(4) = ${str6.charCodeAt(4)}`);          // str6.charCodeAt(4) = 111
console.log(`str6.charCodeAt(12) = ${str6.charCodeAt(12)}`);        // str6.charCodeAt(12) = NaN



/**
 * 7、拼接字符串 --- str.concat(str1, str2, ...)
 *          不改变原str（字符串拼接推荐用+）
 * */
console.log('==========================7、分割线=========================');
let strPre7 = 'Hello,';
let strSuf7 = 'world';
let strMid7 = '123,';
let concatStr7 = strPre7.concat(strMid7, strSuf7);
console.log(`concatStr7 = ${concatStr7}, strPre7 = ${strPre7}`);  // concatStr7 = Hello,123,world, strPre7 = Hello,



/**
 * 8、从fromIndex向前查找subStr在str中的位置 --- str.lastIndexOf(subStr, fromIndex)
 *          第一次找到即返回下标，否则返回-1
 * */
console.log('==========================8、分割线=========================');
let str8 = 'Hello, hello, world';
console.log(`str8.lastIndexOf('llo') = ${str8.lastIndexOf('llo')}`);        // str8.lastIndexOf('llo') = 9
console.log(`str8.lastIndexOf('llo', 5) = ${str8.lastIndexOf('llo', 5)}`);  // str8.lastIndexOf('llo', 5) = 2
console.log(`str8.lastIndexOf('llo', 20) = ${str8.lastIndexOf('llo', 20)}`);// str8.lastIndexOf('llo', 20) = 9




/**
 * 9、检索str中匹配subStr/正则表达式的值 --- str.match(subStr/regexp)
 *              检索到，会返回subStr（或返回符合正则表达式的subStr）
 *              检索不到返回null
 * */
console.log('==========================9、分割线=========================');
let str9 = 'hello, hello, hello, world';
console.log(`str9.match('llo') = ${str9.match('llo')}`);    // str9.match('llo') = llo
console.log(`str9.match('abc') = ${str9.match('abc')}`);    // str9.match('abc') = null




/**
 * 10、检索str中匹配subStr/正则表达式的值 --- str.search(subStr/regexp)
 *          返回第一个匹配的子串的起始下标，没有匹配的返回-1
 * */
console.log('==========================10、分割线=========================');
let strA = 'hello, hello, world';
console.log(`strA.search('llo') = ${strA.search('llo')}`);  // strA.search('llo') = 2
console.log(`strA.search('abc') = ${strA.search('abc')}`);  // strA.search('abc') = -1




/**
 * 11、字符串截取 --- str.slice(from, until)
 *          from为起始位置下标（包含）
 *          until为结束位置下标（不包含）
 *          注意：from和until都可以为负数，但要保证from <= until才有意义
 *          在不越界的情况下，如果from > until，则返回空字符串
 * */
console.log('==========================11、分割线=========================');
let strB = 'hello, hello, world';
console.log(`strB.slice(2) = ${strB.slice(2)}`);            // strB.slice(2) = llo, hello, world
console.log(`strB.slice(0, 2) = ${strB.slice(0, 2)}`);      // strB.slice(0, 2) = he
console.log(`strB.slice(0, -2) = ${strB.slice(0, -2)}`);    // strB.slice(0, -2) = hello, hello, wor
console.log(`strB.slice(-4, -2) = ${strB.slice(-4, -2)}`);  // strB.slice(-4, -2) = or
console.log(`strB.slice(-2, 0) = ${strB.slice(-2, 0)}`);    // strB.slice(-2, 0) =





/**
 * 12、字符串截取 --- str.substr(start, length)
 *          start为起始位置（包含）
 *          length为子串长度(如果不传length，默认截取到字符串末尾)
 * */
console.log('==========================12、分割线=========================');
let strC = 'hello, hello, world';
console.log(`strC.substr(2, 2) = ${strC.substr(2, 2)}`);     // strC.substr(2, 2) = ll
console.log(`strC.substr(2) = ${strC.substr(2)}`);                 // strC.substr(2) = llo, hello, world
console.log(`strC.substr(-2) = ${strC.substr(-2)}`);               // strC.substr(-2) = ld
console.log(`strC.substr(2, 50) = ${strC.substr(2, 50)}`);  // strC.substr(2, 50) = llo, hello, world




/**
 * 13、字符串截取 --- str.substring(start, end)
 *          与slice不同的是，参数不能有负数，否则返回空字符串
 * */
console.log('==========================13、分割线=========================');
let strD = 'hello, hello, world';
console.log(`strD.substring(2, 4) = ${strD.substring(2, 4)}`);      // strD.substring(2, 4) = ll
console.log(`strD.substring(-4, -2) = ${strD.substring(-4, -2)}`);  // strD.substring(-4, -2) =
console.log(`strD.substring(-2, -4) = ${strD.substring(-2, -4)}`);  // strD.substring(-2, -4) =




/**
 * 14、字符串大小写转换 --- str.toLowerCase(), str.toUpperCase():
 *          返回新的字符串，不会改变原字符串
 * */
console.log('==========================14、分割线=========================');
let  strE = 'HELLO, world';
console.log(`strE.toLowerCase() = ${strE.toLowerCase()}`);  // strE.toLowerCase() = hello, world
console.log(`strE.toUpperCase() = ${strE.toUpperCase()}`);  // strE.toUpperCase() = HELLO, WORLD
console.log(`strE = ${strE}`);                              // 原字符串不变：strE = HELLO, world
