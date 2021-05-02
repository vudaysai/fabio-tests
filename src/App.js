import Card from './components/Card';

const data = [
  {
    type: 'bank-draft',
    title: 'Bank Draft',
    thumbnail: 'https://media.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy.gif',
    position: 0,
  },
  {
    type: 'bill-of-lading',
    title: 'Bill of Lading',
    thumbnail: 'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif',
    position: 1,
  }, {
    type: 'invoice',
    title: 'Invoice',
    thumbnail: 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
    position: 2,
  },
  {
    type: 'bank-draft-2',
    title: 'Bank Draft 2',
    thumbnail: 'https://media.giphy.com/media/lJNoBCvQYp7nq/giphy.gif',
    position: 3,
  },
  {
    type: 'bill-of-lading-2',
    title: 'Bill of Lading 2',
    thumbnail: 'https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif',
    position: 4,
  }];

function App() {
  return (
    <div className="my-10 mx-10 sm:mx-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {
        data.map(
          ({ title, thumbnail, position }) => (
            <Card
              key={position}
              title={title}
              thumbnail={thumbnail}
            />
          ),
        )
      }
    </div>
  );
}

export default App;
