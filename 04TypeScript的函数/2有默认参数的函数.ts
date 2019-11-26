function searchXiaoJieJie2 (age:number=28,stature:string="淑女"):string{
    let yy:string = ''
    yy = '找到了'+age+'岁'
    if(stature !=undefined){
        yy = yy + stature
    }
    return yy+'的小姐姐'
};

var result:string  =  searchXiaoJieJie2()
console.log(result)