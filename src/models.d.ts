export type User = {
  name: string;
  avatar: string;
  id: string;
};

export type Author = Omit<User, 'id'>;

export type FirebaseQuestion = {
  author: Author;
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

export type FirebaseQuestions = Record<string, FirebaseQuestion>;

export type UserQuestion = {
  id: string;
} & FirebaseQuestion;
