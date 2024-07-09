const sum=require('./test/sum')
test('fun should return 3',()=>{
    expect(sum(1,2)).toBe(3);
})
test('object in array',()=>{
    const data={one:1}
    data['two']=6;
    expect(data).toEqual({one:1,two:6});
})
test('value is null',()=>{
    const n=null;
    expect(n).toBeNull();
})
test('value is defined',()=>{
    const url='sdsdshsd@mongodburl'
    expect(url).toBeDefined();
})
test('value is true',()=>{
    const bool=true
    expect(bool).toBeTruthy();
})