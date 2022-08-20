import * as E from 'fp-ts/Either' 
import { TPostCreateNewRoomInput, TPostCreateNewRoomOutput, TGetRoomInfoInput, TGetRoomInfoOutput }  from '../types/api/room' 
import { TApiError }  from '../types/api/apiError'
import { axiosClient } from './client' 
 

export const postCreateNewRoom = async (input : TPostCreateNewRoomInput) : Promise<E.Either<TApiError,TPostCreateNewRoomOutput>> => {   
    const params = new URLSearchParams(  
        {   name : input.name,
            max_count : input.max_count.toString(), 
        }
    ) 
    try{ 
        // 直接inputを引数にすると、jsonが送信される.
        // const {data} : { data: TPostCreateNewRoomOutput } = await axiosClient().post('/new/room', input);  
        const {data} = await axiosClient().post('/room/new/', params);   
        return E.right(data.data);  
    } 
    catch (e : any) {  
        try {  
            const resp : TApiError = { error : e.response.data.error } 
            return E.left(resp)  
        } catch (ee) {
            return E.left({ error : "unexpected error" } ) 
        }
    }  
}

export const getRoomInfo = async (input : TGetRoomInfoInput) : Promise<E.Either<TApiError, TGetRoomInfoOutput>> => {  
    try{  
        // const {data} : { data: TGetRoomInfoOutput }  = await axiosClient().get('/room/'+ input.roomID);  
        const {data} = await axiosClient().get('/room/'+ input.roomID);  
        return E.right(data.data);  
    } 
    catch (e : any) {  
        try { 
            const resp : TApiError = { error : e.response.data.error } 
            return E.left(resp)  
        } catch (ee) {
            return E.left({ error : "unexpected error" } ) 
        }
    } 
} 