import React from 'react';
import renderer from 'react-test-renderer';
import DogCard from '../../components/DogCard';

const dogInfo = {
    breed: 'affenpinscher',
    image: 'https://images.dog.ceo/breeds/bluetick/n02088632_3888.jpg'
}
const { breed, image } = dogInfo;
const component = renderer.create(
    <DogCard image={image} name={breed} />,
);
const instance = component.root;

test('Shows a Card with an image and a name', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


describe('Rendered elements', () => {
    test('should show the breed of the dog', () => {
        const name = instance.find((el) => el.type == 'p')
        expect(name.props.children).toEqual(breed)
    });

    test('should not show anything if there is not a name prop', () => {
        const dogCard = renderer.create(
            <DogCard image={image} />,
        );
        const dogInstance = dogCard.root;
        const name = dogInstance.find((el) => el.type == 'p')
        expect(name.props.children).toBe('')
    });

    test('should show the dog´s image', () => {
        const dogImage = instance.find((el) => el.type == 'img')
        expect(dogImage.props.src).toEqual(image)
    });
});
