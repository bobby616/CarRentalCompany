import { FakeClass } from "./fake-instanceOfVehicles.spec";


describe('Vehicle constructor should', () => {
    it('throw when passanger capacity is below 1 and over 800', () => {
        //Arrange Act&Assert
        expect(() => new FakeClass(-123123, 10, 'engine', 'color', 'transmissionType', 'state', 'brand')).toThrowError();
        expect(() => new FakeClass(900, 10, 'engine', 'color', 'transmissionType', 'state', 'brand')).toThrowError();
    })

    it('throw when price is below 0.1 and over 500', () => {
        //Arrange Act&Assert
        expect(() => new FakeClass(10, 0, 'engine', 'color', 'transmissionType', 'state', 'brand')).toThrowError();
        expect(() => new FakeClass(10, 5001, 'engine', 'color', 'transmissionType', 'state', 'brand')).toThrowError();
    })

    it('throw when TRANSMISSION is invalid', () => {
        //Arrange Act&Assert
        expect(() => new FakeClass(10, 200, 'engine', 'color', '', 'state', 'brand')).toThrowError();
    })

    it('throw when ENGINE string is invalid', () => {
        //Arrange Act&Assert
        expect(() => new FakeClass(10, 200, '', 'color', 'transmission', 'state', 'brand')).toThrowError();
    })

});