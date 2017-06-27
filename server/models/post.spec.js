import test from 'ava';
import request from 'supertest';
import app from '../../server';
import Post from './post';
import { connectDB, dropDB } from '../../util/test-helpers';

// Initial posts added into test db
const posts = [
  new Post({ staffMemberName: 'Chad', taskTitle: 'Repair Kids Bathroom Sink', taskNotes: 'Short test note.', cuid: '59509381f36d283c0b12a94d', taskCompleted: false }),
  new Post({ staffMemberName: 'Sally', taskTitle: 'Get New Gloves for Jeeves', content: 'A little longer test note!', cuid: '595093cff36d283c0b12a95b', taskCompleted: false }),
];

test.beforeEach('connect and add two post entries', t => {
  connectDB(t, () => {
    Post.create(posts, err => {
      if (err) t.fail('Unable to create posts');
    });
  });
});

test.afterEach.always(t => {
  dropDB(t);
});

test.serial('Should correctly give number of Posts', async t => {
  t.plan(2);

  const res = await request(app)
    .get('/api/posts')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.deepEqual(posts.length, res.body.posts.length);
});

test.serial('Should send correct data when queried against a cuid', async t => {
  t.plan(2);

  const post = new Post({ staffMemberName: 'Sally', taskTitle: 'Get New Gloves for Jeeves', content: 'A little longer test note!', cuid: '595093cff36d283c0b12a95b', taskCompleted: false });
  post.save();

  const res = await request(app)
    .get('/api/posts/f34gb2bh24b24b2')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.is(res.body.post.name, post.name);
});

test.serial('Should correctly add a post', async t => {
  t.plan(2);

  const res = await request(app)
    .post('/api/posts')
    .send({ post: { staffMemberName: 'Sally', taskTitle: 'Get New Gloves for Jeeves', content: 'A little longer test note!', cuid: '595093cff36d283c0b12a95b', taskCompleted: false } })
    .set('Accept', 'application/json');

  t.is(res.status, 200);

  const savedPost = await Post.findOne({ staffMemberName: 'Sally' }).exec();
  t.is(savedPost.staffMemberName, 'Sally');
});

test.serial('Should correctly delete a post', async t => {
  t.plan(2);

  const post = new Post({ staffMemberName: 'Sally', taskTitle: 'Get New Gloves for Jeeves', content: 'A little longer test note!', cuid: '595093cff36d283c0b12a95b', taskCompleted: false });
  post.save();

  const res = await request(app)
    .delete(`/api/posts/${post.cuid}`)
    .set('Accept', 'application/json');

  t.is(res.status, 200);

  const queriedPost = await Post.findOne({ cuid: post.cuid }).exec();
  t.is(queriedPost, null);
});

