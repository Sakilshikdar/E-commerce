
const FormatPrice = ({ price }) => {
    return Intl.NumberFormat('de-IN',
        {
            style: 'currency',
            currency: 'IND',
            maximumFractionDigits: 2
        }
    ).format(price / 100)
}

export default FormatPrice