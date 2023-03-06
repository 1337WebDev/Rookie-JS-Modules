const calc = (x, y, op) =>
{
    switch (op)
    {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return y != 0 ? x / y : "Division by zero";
        case '%':
            return y != 0 ? x % y : "Modulus by zero";
        default:
            throw new Error('Invalid operation');
    }
};

// Exporting the calc function
module.exports = calc;