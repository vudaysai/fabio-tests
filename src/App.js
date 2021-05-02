/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ReactTimeAgo from 'react-time-ago';

import Card from './components/Card';
import Loader from './components/Loader';
import catsData from './data.json';

function App() {
  const [cats, setCats] = useState([]);
  const [initData, setInitData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const lastSavedAt = localStorage.getItem('saveTime');

  /* Mock implementation of save API */
  const compareAndSaveData = () => {
    /* Will save only if data is modified */
    if (JSON.stringify(initData) !== JSON.stringify(cats)) {
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem('cats', JSON.stringify(cats));
        localStorage.setItem('saveTime', new Date());
        setIsLoading(false);
      }, 2000);
      setInitData(cats);
    }
  };

  const saveData = (data) => {
    setCats(data);
    setInitData(data);
  };

  useEffect(() => {
    fetch('https://github.com')
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.data?.length) {
            saveData(result.data);
          } else {
            saveData(catsData);
          }
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        },
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      compareAndSaveData();
    }, 5000);
    return () => clearInterval(interval);
  }, [cats, initData]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(cats);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    items.forEach((item, index) => {
      // eslint-disable-next-line no-param-reassign
      item.position = index;
    });

    setCats(items);
  }

  return (
    <>
      {lastSavedAt && (
        <div className="flex mt-5 mx-10 sm:mx-24 justify-end lg:justify-end xl:justify-end ">
          Last Updated:
          {' '}
          <ReactTimeAgo date={new Date(lastSavedAt)} locale="en-US" />
        </div>
      )}
      {isLoading && <Loader />}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="cats">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`${isLoading && 'opacity-25'} cats my-10 mx-10 sm:mx-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5`}
            >
              {
                cats.map(
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
    </>
  );
}

export default App;
