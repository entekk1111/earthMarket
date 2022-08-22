import axios from "axios";

const loginModule={
    namespaced: true,
    actions:{
        async joinAction(context, joinInfo ){
            try{
                const res = await axios.post('/api/join', joinInfo);
                if(res.data.isSuccess == false){
                    if(res.data.errorMsg == 'ID_DUP'){
                        alert('사용중인 아이디입니다.');
                    }else{
                        alert('회원가입에 실패했습니다.')
                    }
                }
            }catch(e){
                console.log(e)
            }
        }
    }
}
export default loginModule;