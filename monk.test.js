jest.mock('./test/utils',()=>({
    getData:jest.fn(),
    getRaw:jest.fn()
}))
const {getData,getRaw}=require('./test/utils')
const {processData,processRaw}=require('./test/processData')

test('Mocked the process data',()=>{
    //mock the return value
    getData.mockReturnValue("Mocked Data")
    expect(processData()).toBe('processed:Mocked Data')
})
test('Mocked Raw Data',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true)
})