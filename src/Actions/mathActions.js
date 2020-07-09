export function addNumber(number){
    return {
        type:"ADD",
        payload:number
    }
}
export function subtractNumber(number){
    return {
        type:"SUB",
        payload:number
    }
}
