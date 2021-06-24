import { useState, useEffect } from 'react';

import { FirebaseQuestions, UserQuestion } from '../models';
import { database } from '../services/firebase';

function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<UserQuestion[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`/rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      console.log(databaseRoom);
      const firebaseQuestions = (databaseRoom.questions ??
        {}) as FirebaseQuestions;

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) =>
          ({
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          } as UserQuestion),
      );

      setQuestions(parsedQuestions);

      setTitle(databaseRoom.title);
    });
  }, [roomId]);

  return { questions, title };
}

export default useRoom;
