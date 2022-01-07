export const getDate = (tomorrow) => {
    const date = new Date();

    if (tomorrow) {
        date.setDate(date.getDate() + 1);
    }

    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day.toString().length === 1) {
        day = '0' + day;
    }
    if (month.toString().length === 1) {
        month = '0' + month;
    }
    return `${year}-${month}-${day}`;
};

export const getDateThreeMonthsAgo = () => {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    let day = threeMonthsAgo.getDate();
    let month = threeMonthsAgo.getMonth() + 1;
    const year = threeMonthsAgo.getFullYear();

    if (day.toString().length === 1) {
        day = '0' + day;
    }
    if (month.toString().length === 1) {
        month = '0' + month;
    }
    return `${year}-${month}-${day}`;
};