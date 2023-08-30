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
});
