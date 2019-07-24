/**
 * 1、数组：本质上，数组是一种特殊的对象，typeof 运算符返回的数组类型是 object
 * */
console.log('==========================1、分割线=========================');
// 数组中可以放任何类型的数据
let arr1 = [];
arr1[0] = 'start';
arr1[1] = 10;
arr1[2] = [1, 2, 3];
arr1[3] = {a: 'abc'};
arr1[4] = function () {
    return true;
}
arr1[5] = null;
arr1[6] = undefined;
arr1[7] = Infinity;
arr1[8] = 'end';
console.log(arr1);

// 获取数组所有的'键'
console.log(`arr1.keys = ${Object.keys(arr1)}`);                // arr1.keys = 0,1,2,3,4,5,6,7,8
console.log(`arr1[0] = ${arr1[0]}, arr1['0'] = ${arr1['0']}`);  // arr1[0] = start, arr1['0'] = start

// 数组的length属性返回数组的成员数量
console.log(`arr1.length = ${arr1.length}`);                    // arr1.length = 9
arr1[100] = 100;
console.log(`arr1.length = ${arr1.length}`);                    // arr1.length = 101

// 可以通过修改数组的length，改变数组的成员数量
arr1.length = 10;
console.log(`arr1.length = ${arr1.length}`);                    // arr1.length = 10

// in 运算符，检验某个键名是否存在
console.log(`9 in arr1 = ${9 in arr1}`);                        // 9 in arr1 = false(虽然arr1.length=10，但是arr1[9]=undefined)

// 数组使用'不合法'的键名，不会改变arr的length，但是能通过该'不合法'的键名获取到值
arr1[-1] = 'abc';
console.log(`arr1.length = ${arr1.length}, arr1[-1] = ${arr1[-1]}`);    // arr1.length = 10, arr1[-1] = abc

// for...in 循环遍历数组。特别注意，该方法会遍历数组的非数字键（如-1也会遍历出）。因此数组的遍历不推荐用该方法
for (let key in arr1) {
    console.log(`key = ${key}`);
}

// 数组的空位。forEach、for、for...in、Object.keys都会过滤掉空位，但是空位不会影响length
let arr2 = [1, , 3];
console.log(`arr2.length = ${arr2.length}`);    // arr2.length = 3
delete  arr2[0];
console.log(`arr2.length = ${arr2.length}`);    // arr2.length = 3(此时第0位也是空位)



/**
 * 2、数组截取 --- arr.slice(start, end)
 *      start：起始位置（包含）
 *      end：结束位置（不包含）
 *      返回新数组，不改变原来的数组
 * */
console.log('==========================2、分割线=========================');
let arr3 = [1, 2, 3, 4, 5];
console.log(`arr3.slice(1, 2) = ${arr3.slice(1, 2)}`);  // arr3.slice(1, 2) = 2


/**
 * 3、数组尾部添加元素 --- arr.push(ele1, ele2, ...)
 *      改变原数组，返回新的长度
 * */
console.log(`arr3.push(6, 7): ${arr3.push(6, 7)}`);     // arr3.push(6, 7): 7

/**
 * 4、数组头部添加元素 --- arr.unshift(ele1, ele2, ...)
 *      改变原数组，返回新的长度
 * */
console.log(`arr3.unshift(-1, 0): ${arr3.unshift(-1, 0)}`);     // arr3.unshift(-1, 0): 9

/**
 * 5、删除并返回数组的最后一个元素 --- arr.pop()
 *      改变原数组，返回删除的元素
 * */
console.log(`arr3.pop() = ${arr3.pop()}`);          // arr3.pop() = 7

/**
 * 6、删除并返回数组的第一个元素 -- arr.shift()
 *      改变原数组，返回删除的元素
 * */
console.log(`arr3.shift() = ${arr3.shift()}`);      // arr3.shift() = -1

/**
 * 7、颠倒数组的顺序 --- arr.reverse
 * */
console.log(`arr3.reverse() = ${arr3.reverse()}`);  // arr3.reverse() = 6,5,4,3,2,1,0

/**
 * 8、数组排序 --- arr.sort(func);
 * */
// 默认为从小到大排序
arr3.sort();
console.log(`arr3 = ${arr3}`);          // arr3 = 0,1,2,3,4,5,6
// 从大到小排序
arr3.sort((a, b) => {
    return b - a;
});
console.log(`arr3 = ${arr3}`);          // arr3 = 6,5,4,3,2,1,0
// 从小到大排序
arr3.sort((a, b) => {
    return a - b;
});
console.log(`arr3 = ${arr3}`);          // arr3 = 0,1,2,3,4,5,6

/**
 * 9、数组拼接 --- arr.concat(obj1, obj2, ...)
 *      不改变原数组，返回新的数组
 * */
let arr4 = arr3.concat(7, [8, 9]);
console.log(`arr3 = ${arr3}`);          // arr3 = 0,1,2,3,4,5,6
console.log(`arr4 = ${arr4}`);          // arr4 = 0,1,2,3,4,5,6,7,8,9

/**
 * 10、获取元素下标 --- arr.indexOf(elem)
 *      返回元素首次出现的下标。若不存在返回-1
 * */
console.log(`arr3.indexOf(5) = ${arr3.indexOf(5)}`);        // arr3.indexOf(5) = 5
console.log(`arr3.indexOf(20) = ${arr3.indexOf(20)}`);      // arr3.indexOf(20) = -1

/**
 * 11、数组转字符串 --- arr.join(str)
 *      返回数组元素通过str拼接的字符串
 * */
console.log(`arr3.join() = ${arr3.join()}`);                // arr3.join() = 0,1,2,3,4,5,6
console.log(`arr3.join(',') = ${arr3.join(',')}`);          // arr3.join(',') = 0,1,2,3,4,5,6
console.log(`arr3.join('') = ${arr3.join('')}`);            // arr3.join('') = 0123456
console.log(`arr3.join('-') = ${arr3.join('-')}`);          // arr3.join('-') = 0-1-2-3-4-5-6

/**
 * 12、万能方法：删除指定元素，并添加新元素 --- arr.splice(index, length, ele1, ele, ...)
 *      index：删除元素的起始位置
 *      length：删除元素的个数
 *      ele...：添加的元素
 *      会改变原数组，返回删除元素组成的数组
 * */
let tempArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(`tempArr.splice(9) = ${tempArr.splice(9)}`);    // tempArr.splice(9) = 9,10,11
console.log(`tempArr = ${tempArr}`);                        // tempArr = 0,1,2,3,4,5,6,7,8

console.log(`tempArr.splice(5, 2) = ${tempArr.splice(5, 2)}`);  // tempArr.splice(5, 2) = 5,6
console.log(`tempArr = ${tempArr}`);                            // tempArr = 0,1,2,3,4,7,8

console.log(`tempArr.splice(0, 3, 11, 12, 13) = ${tempArr.splice(0, 3, 11, 12, 13)}`);  // tempArr.splice(0, 3, 11, 12, 13) = 0,1,2
console.log(`tempArr = ${tempArr}`);                                                    // tempArr = 11,12,13,3,4,7,8

/**
 11、arr.toString():
        数组转字符串，返回字符串
        该方法与没有参数的join方法返回的一样（元素之间有,分隔开）
 * */
let tempArr1 = [1, 2, 3];
console.log(`tempArr1.toString() = ${tempArr1.toString()}`);    // tempArr1.toString() = 1,2,3
console.log(`tempArr1.join() = ${tempArr1.join()}`);            // tempArr1.join() = 1,2,3