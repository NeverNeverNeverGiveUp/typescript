function searchXiaoJieJie3(...xuqiu:string[]):string{
    
    let  yy:string = '找到了'
    for (let i =0;i<xuqiu.length;i++){
        yy = yy + xuqiu[i]
        if(i<xuqiu.length){
            yy=yy+'、'
        }
    }
    yy=yy+'的小姐姐'
    return yy

};
var result:string  =  searchXiaoJieJie3('22岁','大长腿','瓜子脸','水蛇腰')
console.log(result);
