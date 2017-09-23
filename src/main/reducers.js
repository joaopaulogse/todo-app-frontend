import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    todo: ()=>({
        description:'Ler um Livro',
        list:[{
            _id:1,
            description:'Pagar fatura do cartão',
            done:true
        },{
            _id:2,
            description:'Reuniao com a equipe as 10:00',
            done:false
        },{
            _id:3,
            description:'Consulta medica na terça depois do almoço',
            done:false
        }]
    })
})

export default rootReducers