function solution(id_pw, db) {
 const [id, pw] = id_pw
 
 
    const resultList = db.map((v)=>{
        const [db_id, db_pw] = v
        
        if(db_id === id && db_pw === pw){
            return "login"
        }else if(db_id === id && db_pw !== pw){
            return "wrong pw"
        }else {
            return "fail"
        }
    })
    
    if(resultList.includes('login')){
        return "login"
    }else if(resultList.includes('wrong pw')){
        return "wrong pw"
    }else{
        return 'fail'
    }

}