import axios from 'axios';


interface API{
    '/book/detail':{
        id:number
    },
    '/book/comment':{
        id:number
        comment:string
    }
}

function request<T extends keyof API>(url:T,obj:API[T]){
return axios.post(url,obj)
}

request('/book/comment', {
    id: 1,
    comment: '非常棒！'
})