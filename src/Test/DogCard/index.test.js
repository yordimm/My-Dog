import React from 'react';
import renderer from 'react-test-renderer';
import DogCard from '../../components/DogCard';

const dogInfo = {
    breed: 'affenpinscher',
    image: 'https://images.dog.ceo/breeds/bluetick/n02088632_3888.jpg'
}
const { breed, image } = dogInfo;

test('Shows a Card with an image and a name', () => {
    const component = renderer.create(
        <DogCard image={image} name={breed} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


describe('Rendered elements', () => {
    test('should show the breed of the dog', () => {
        const component = renderer.create(
            <DogCard image={image} name={breed} />,
        );
        expect(component.find('.breed').text().toEqual(breed))
    });

    test('should not show anything if there is not a name prop', () => {
        const component = renderer.create(
            <DogCard image={image}/>,
        );
        console.log(component.toJSON())
        expect(component.find('.breed').text().toEqual(''))
    });

    test('should show the dog´s image', () => {
        const component = renderer.create(
            <DogCard image={image} name={breed} />,
        );
        const img= component.find('img');
        expect(img.prop('src').toEqual(image))
    });
});
