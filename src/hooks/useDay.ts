const useDay = () => {
    const today = new Date();   

    const year = today.getFullYear();
    const month = today.getMonth() + 1; 
    const date = today.getDate(); 
    const ToDay = `${year} / ${month} / ${date}`
    return {
        ToDay
    }
}


export default useDay;