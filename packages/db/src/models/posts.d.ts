export interface Post {
  id: string;
  message: string;
  likes: number;
}

export interface Posts {
  list: Post[];
}
