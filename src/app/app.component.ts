import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // posts: Post[] = [
  //   {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 1},
  //   {title: 'Следующий блок', text: 'Будет про директивы и еще про пайпы', id: 2},
  // ]

  // isVisible = true

  // updatePosts(post: Post) {
  //   this.posts.unshift(post)
  // }

  // removePost(id: number) {
  //   this.posts = this.posts.filter(p => p.id !== id)
  // }

  search = ''
  searchField = 'title'

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'Javascript', text: 'The best language in the world'}
  ]
}
