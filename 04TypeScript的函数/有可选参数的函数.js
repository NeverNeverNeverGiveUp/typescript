function searchXiaoJieJie2(age, stature) {
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
;
var result = searchXiaoJieJie2(22, '大长腿');
console.log(result);
