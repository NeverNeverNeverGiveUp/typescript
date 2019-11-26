function searchXiaoJieJie2 (age:number,stature?:string){
    let yy:string = ''
    yy = '找到了'+age+'岁'
    if(stature !=undefined){
        yy = yy + stature
    }
    return yy+'的小姐姐'
};

var result:string  =  searchXiaoJieJie2(22,'大长腿')
console.log(result)