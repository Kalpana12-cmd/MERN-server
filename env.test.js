let dataSets=[];
beforeAll(()=>{
    dataSets=['raju','ram'];
})
beforeEach(()=>{
    console.log("Before each setup is called")
})
afterEach(()=>{
    console.log("after each setup is called")
})
afterAll(()=>{
    dataSets=[];
})
test('Test Case',()=>{
    expect(dataSets.length).toBe(2);
})
test('Data test contains',()=>{
    expect(dataSets).toContain('ram');
})
test('Data test contains',()=>{
    expect(dataSets).toContain('raju');
})