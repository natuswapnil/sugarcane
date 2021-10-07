export const getEmployee = (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    return fetch('https://reqres.in/api/posts', requestOptions);
}


export const getDriverList = (data) => {
    return new Promise((resolve, reject) => {
        let driverList = data.filter((user)=>{
            return user.role === 'Driver'
        });
        driverList = driverList.map((user)=>{
            return {name:user.employeeName, value: user.employeeName, data:user}
        })
        resolve(driverList);
    });
}
