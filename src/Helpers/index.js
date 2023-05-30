export const configHeaderToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.log("No Tiene Permiso");
        return false;
    }
    return {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
};
export const formDate = (date) => {
    const newDate = new Date(date.split('T')[0].split('-'));
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }



    return newDate.toLocaleDateString("es-ES", options);
};