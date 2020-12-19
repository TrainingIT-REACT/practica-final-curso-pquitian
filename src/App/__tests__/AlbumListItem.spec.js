import React from 'react';
import { render } from 'enzyme';
import AlbumListItem from '../components/AlbumsListItem';

const albums = [
    { "id": 1, "name": "Chip off the old block", "artist": "Blair", "cover": "/images/cover.jpg" },
    { "id": 2, "name": "Battle grounds", "artist": "Florian", "cover": "/images/cover-1.jpg" },
    { "id": 3, "name": "Decisions decisions", "artist": "Skylar", "cover": "/images/cover-2.jpg" },
    { "id": 4, "name": "Blank canvas", "artist": "Skylar", "cover": "/images/cover-3.jpg" },
    { "id": 5, "name": "Ice cold", "artist": "Kimberley", "cover": "/images/cover-4.jpg" },
    { "id": 6, "name": "Honesty", "artist": "Ted Garrett", "cover": "/images/cover-5.jpg" },
    { "id": 7, "name": "Creative director", "artist": "Delaney", "cover": "/images/cover-6.jpg" },
    { "id": 8, "name": "No guarantees", "artist": "Kimberley", "cover": "/images/cover-7.jpg" },
    { "id": 9, "name": "Don't push this button", "artist": "Delaney", "cover": "/images/cover-8.jpg" },
    { "id": 10, "name": "Cherry", "artist": "Stacy", "cover": "/images/cover-9.jpg" }
  ];


describe("AlbumListItem", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = render(<AlbumListItem album={albums[0]}/>);
    });

    it("should render album card", () => {
        expect(wrapper.is('div')).toBeTruthy();
        expect(wrapper.find('img').length).toBe(1);
        expect(wrapper.find('.header').length).toBe(1);
        expect(wrapper.find('.meta').length).toBe(1);
    });

    it("should link to album page", () => {
        const albumUrl = "album/1"
        const linkUrl = wrapper.find('.card > a').attr('href');

        const instance = wrapper.instance();
        console.log(instance);

       expect(linkUrl).toMatch(albumUrl);
    })
})