export const isEmpty = (s) => {
    return s.length == 0;
};
export const isEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
export const containsNumbers = (s) => {
    return /\d+/.test(s);
};
export const wordDate = (date) => {
    var date = new Date(date);
    var arr = date.toDateString().split(" ");
    // var dobFormat = dobArr[2] + " " + dobArr[1] + " " + dobArr[3];

    return `${arr[2]} ${arr[1]} ${arr[3]}`;
};
export const postalCode = (code) => {
    return /^\d{5}(?:[-\s]\d{4})?$/.test(code);
};

export const validateInput = (invoice) => {
    if (!isEmpty(invoice.billingAddress)) {
        if (!containsNumbers(invoice.city) && !isEmpty(invoice.city)) {
            if (postalCode(invoice.postCode) && !isEmpty(invoice.postCode)) {
                if (!containsNumbers(invoice.country) && !isEmpty(invoice.country)) {
                    if (!isEmpty(invoice.clientEmail) && isEmail(invoice.clientEmail)) {
                        if (
                            !isEmpty(invoice.clientName) &&
                            !containsNumbers(invoice.clientName)
                        ) {
                            return { error: null, status: "success" };
                        } else return { error: "invalid name", status: "error" };
                    } else return { error: "invalid email", status: "error" };
                } else return { error: "invalid country", status: "error" };
            } else return { error: "invalid code", status: "error" };
        } else return { error: "invalid city", status: "error" };
    } else return { error: "billing address is required", status: "error" };
};
