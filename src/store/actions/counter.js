export function changeCounter(data){

    return {
        type:"SET-COUNTER",
        payload: data

    }
}

export function changelowcost(data){

    return {
        type:"SET-lowcost",
        payload: data

    }
}

export function changehightcost(data){

    return {
        type:"SET-hightcost",
        payload: data

    }
}
