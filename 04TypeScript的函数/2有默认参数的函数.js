function searchXiaoJieJie2(age, stature) {
    if (age === void 0) { age = 28; }
    if (stature === void 0) { stature = "淑女"; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
;
var result = searchXiaoJieJie2();
console.log(result);
