export const configHeaderToken = (params = {}) => {
    const token = localStorage.getItem("token");
    if (!token) {
        // console.log("No Tiene Permiso");
        return false;
    }

    return {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        params: params,
    };
};
export const formDate = (date) => {
    const newDate = new Date(date.split("T")[0].split("-"));
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return newDate.toLocaleDateString("es-ES", options);
};

export const baseUrlaws = "https://srmdnamics-laravel-file.s3.us-east-2.amazonaws.com"