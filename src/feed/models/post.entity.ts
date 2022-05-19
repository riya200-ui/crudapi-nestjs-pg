import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity('feed_post')
  export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ default: '' })
    body: string;
  
    // @CreateDateColumn()
    @Column({type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;
  }