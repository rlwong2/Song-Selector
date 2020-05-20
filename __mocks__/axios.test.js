import axios from 'axios';
import fetchSongs from '../client/src/requests/song'

jest.mock('axios');

describe('fetchSongs', () => {
    it('fetches song successfully from API', async () => {
        const data = {
            data: {
                hits: [
                    {
                        objectID: '1',
                        title: 'How Great is Our God',
                    },
                    {
                        objectID: '2',
                        title: 'Way Maker',
                    }
                ]
            }
        }

        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(fetchSongs()).resolves.toEqual(data);
    });

    it('fetches song erroneously from an API', async () => {
        const errorMessage = 'Network Error';

        axios.get.mockImplementationOnce(() => 
            Promise.reject(new Error(errorMessage))
        )
    })
})