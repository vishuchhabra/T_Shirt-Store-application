import { isAutheticated } from "../../auth/helper"

export const addItemToCart = (item,next)=>{
    let cart = []
    if(typeof window !==undefined && isAutheticated() ){
        const  {user: {_id}} = isAutheticated()
        if(localStorage.getItem(`${_id}`)){
            cart = JSON.parse(localStorage.getItem(`${_id}`))
        }
        cart.push({
            ...item,
            count:1


        })
        localStorage.setItem(`${_id}`, JSON.stringify(cart))
        next()
    }
    else{
        window.location.href = '/signin';
    }
}

export const loadCart  = () =>{
    if(typeof window !==undefined   && isAutheticated()){
        const  {user: {_id}} = isAutheticated()
        if(localStorage.getItem(`${_id}`)){
            return JSON.parse(localStorage.getItem(`${_id}`))
        }
    }

}

export const  removeItemFromCart = (productId) =>{
    let cart = []
    if(typeof window !== undefined   && isAutheticated()){
        const  {user: {_id}} = isAutheticated()
       if(localStorage.getItem(`${_id}`)){
        cart = JSON.parse(localStorage.getItem(`${_id}`))
       }

       cart.map((product,i)=>{
           if(product._id === productId){
               cart.splice(i,1)
           }
            
       })
       localStorage.setItem(`${_id}`, JSON.stringify(cart))

  }
  return cart ;
}

export const cartEmpty = next =>{
    if(typeof window !==undefined  && isAutheticated()){
        const  {user: {_id}} = isAutheticated()
        localStorage.removeItem(`${_id}`)
        let cart =[]
        localStorage.setItem(`${_id}`, JSON.stringify(cart))
        

        next()
    }
}




