import React from "react";
import { shallow } from 'enzyme';

export const Button2 = () => {
    return (
         <div id={'button'} className={'button'}>
            Download (0)
        </div>
    );
}

describe('Task 5', () => {
    it('should call on download', function () {
        const spyOnDownload = jasmine.createSpy();
        const button = shallow(<Button2 onDownload={spyOnDownload} />);
        button.find('#button').simulate('click');
        expect(spyOnDownload).toHaveBeenCalled();
    });

    it('should increase counter', function () {
        const spyOnDownload = jasmine.createSpy();
        const button = shallow(<Button2 onDownload={spyOnDownload} />);
        button.find('#button').simulate('click');
        expect(button.find('#button').text()).toBe('Download (1)');
    });
});