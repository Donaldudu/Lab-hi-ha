function sum(n1,n2)
{
    return n1+n2;
}

test("testcase 1 test testing method", () =>
{
    expect (sum(10, 5)).toBe(15);
}

);