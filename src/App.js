/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
  const [characters, updateCharacters] = useState(data);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="characters my-10 mx-10 sm:mx-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
          >
            {
              characters.map(
                ({ title, type, thumbnail }, index) => (
                  <Draggable key={type} draggableId={type} index={index}>
                    {(provided1) => (
                      <Card
                        innerRef={provided1.innerRef}
                        {...provided1.draggableProps}
                        {...provided1.dragHandleProps}
                        title={title}
                        thumbnail={thumbnail}
                      />
                    )}
                  </Draggable>
                ),
              )
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
