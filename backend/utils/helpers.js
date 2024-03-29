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
export const generateString = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let x = "";
    let y = "";

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        x += alphabet.charAt(randomIndex);
    }
    for (let i = 0; i < 3; i++) {
        const randomNum = Math.floor(Math.random() * 10);
        y += randomNum.toString();
    }

    return x + y;
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

export const validateEdit = (invoice) => {
    if (!isEmpty(invoice.billing_address)) {
        if (
            !containsNumbers(invoice.billing_city) &&
            !isEmpty(invoice.billing_city)
        ) {
            if (postalCode(invoice.code) && !isEmpty(invoice.code)) {
                if (
                    !containsNumbers(invoice.billing_country) &&
                    !isEmpty(invoice.billing_country)
                ) {
                    if (!isEmpty(invoice.client_email) && isEmail(invoice.client_email)) {
                        if (
                            !isEmpty(invoice.client_name) &&
                            !containsNumbers(invoice.client_name)
                        ) {
                            return { error: null, status: "success" };
                        } else return { error: "invalid name", status: "error" };
                    } else return { error: "invalid email", status: "error" };
                } else return { error: "invalid country", status: "error" };
            } else return { error: "invalid code", status: "error" };
        } else return { error: "invalid city", status: "error" };
    } else return { error: "billing address is required", status: "error" };
};