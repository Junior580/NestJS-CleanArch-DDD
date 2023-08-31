import { Entity } from '@/shared/domain/entities/entity';
import { InMemoryRepository } from '../../in-memory.repository';
import { NotFoundError } from '@/shared/domain/errors/not-found-errors';

type StubEntityProps = {
  name: string;
  price: number;
};

class StubEntity extends Entity<StubEntityProps> {}

class StubInMemoryRepository extends InMemoryRepository<StubEntity> {}

describe('Repository unit tests', () => {
  let sut: StubInMemoryRepository;

  beforeEach(() => {
    sut = new StubInMemoryRepository();
  });

  it('Should inserts a new entity', async () => {
    const entity = new StubEntity({ name: 'user1', price: 1 });
    await sut.insert(entity);
    expect(entity.toJSON()).toStrictEqual(sut.items[0].toJSON());
  });

  it('Should be to throw new error when entity not found', async () => {
    await expect(sut.findById('fakeID')).rejects.toThrow(
      new NotFoundError('Entity not found.'),
    );
  });

  it('Should be able to find an entity by id', async () => {
    const entity = new StubEntity({ name: 'user1', price: 1 });
    await sut.insert(entity);
    const result = await sut.findById(entity._id);

    expect(entity.toJSON()).toStrictEqual(result.toJSON());
  });

  it('Should be able to return all entities', async () => {
    const entity = new StubEntity({ name: 'user1', price: 1 });
    await sut.insert(entity);
    const result = await sut.findAll();

    expect([entity]).toStrictEqual(result);
  });

  it('Should be able to throw on failed update when entity not found', async () => {
    const entity = new StubEntity({ name: 'user1', price: 1 });

    await expect(sut.update(entity)).rejects.toThrow(
      new NotFoundError('Entity not found.'),
    );
  });

  it('Should be able to update an entity', async () => {
    const entity = new StubEntity({ name: 'user1', price: 1 });
    await sut.insert(entity);
    const updatedEntity = new StubEntity(
      { name: 'user2', price: 2 },
      entity._id,
    );
    await sut.update(updatedEntity);
    expect(updatedEntity.toJSON()).toStrictEqual(sut.items[0].toJSON());
  });

  it('Should be to throw new error when entity not found', async () => {
    await expect(sut.delete('fakeID')).rejects.toThrow(
      new NotFoundError('Entity not found.'),
    );
  });

  it('Should be able to delete an entity', async () => {
    const entity = new StubEntity({ name: 'user1', price: 1 });
    await sut.insert(entity);
    await sut.delete(entity._id);
    expect(sut.items).toHaveLength(0);
  });
});
