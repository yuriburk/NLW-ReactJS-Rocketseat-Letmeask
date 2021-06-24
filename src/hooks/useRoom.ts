import { useState, useEffect } from 'react';

import { FirebaseQuestions, UserQuestion } from '../models';
import { database } from '../services/firebase';
import useAuth from './useAuth';

function useRoom(roomId: string) {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<UserQuestion[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`/rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
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
            likesCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              ([_, like]) => like.authorId === user?.id,
            )?.[0],
          } as UserQuestion),
      );

      setQuestions(parsedQuestions);

      setTitle(databaseRoom.title);

      return () => {
        roomRef.off();
      };
    });
  }, [roomId, user?.id]);

  return { questions, title };
}

export default useRoom;
